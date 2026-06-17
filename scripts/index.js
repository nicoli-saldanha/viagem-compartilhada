require('dotenv').config();

const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const fs = require('fs');
const session = require('express-session'); 

const app = express();
const port = 3000;

const paises = JSON.parse(
    fs.readFileSync(
        path.join(__dirname, '..', 'paises.json'),
        'utf8'
    )
);

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..')));

app.use(session({
    secret: 'chave-secreta',
    resave: false,
    saveUninitialized: true
}));

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    ssl: process.env.DB_HOST ? { rejectUnauthorized: false } : null
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco:', err);
    } else {
        console.log('Conectado ao MySQL!');
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'cadastrar.html'));
});

app.post('/passo1', (req, res) => {
    const inputInicio = req.body.inicio;
    const inputFinal = req.body.final;
    const local = req.body.local;

    const paisDigitado = local.split(',')[0].trim();

    const normalizar = texto =>
        texto
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();

    const paisValido = paises.some(
        pais =>
            normalizar(pais.nome_pais) ===
            normalizar(paisDigitado)
    );

    if (!paisValido) {
        return res.send(`
            <script>
                alert('O país inserido é inválido!');
                window.history.back();
            </script>
        `);
    }

    if (inputFinal < inputInicio) {
        return res.send(`
            <script>
                alert('A data de término está incorreta! Ela não pode ser maior que data de início!');
                window.history.back();
            </script>
        `);
    }

    req.session.viagem = req.body; 
    res.redirect('/passeios.html');
});

app.post('/passo2', (req, res) => {
    req.session.viagem = { ...req.session.viagem, ...req.body };
    res.redirect('/restaurantes.html');
});

app.post('/passo3', (req, res) => {
    req.session.viagem = { ...req.session.viagem, ...req.body };
    res.redirect('/cultura.html');
});

app.post('/finalizar', (req, res) => {
    const dadosFinais = { ...req.session.viagem, ...req.body };

    const sql = `INSERT INTO viagens 
        (local_visitado, data_inicio, data_final, descricao, passeio1, passeio2, passeio3, passeio4, restaurante1, nota1, restaurante2, nota2, restaurante3, nota3, restaurante4, nota4, curiosidade, surpreendente, favorito) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const valores = [
        dadosFinais.local, dadosFinais.inicio, dadosFinais.final, dadosFinais.descricao, dadosFinais.passeio1, dadosFinais.passeio2 || null, dadosFinais.passeio3 || null, dadosFinais.passeio4 || null, dadosFinais.restaurante1, dadosFinais.nota1, 
        dadosFinais.restaurante2 || null, dadosFinais.nota2 || null, dadosFinais.restaurante3 || null, dadosFinais.nota3 || null,
        dadosFinais.restaurante4 || null, dadosFinais.nota4 || null, dadosFinais.curiosidade, dadosFinais.surpreendente || null, dadosFinais.favorito || null
    ];

    db.query(sql, valores, (err, result) => {
        if (err) {
            console.error('Erro ao inserir viagem:', err);
            return res.send(`
                <!DOCTYPE html>
                <html lang="pt-BR">
                <head>
                    <meta charset="UTF-8">
                    <title>Erro</title>
                    <link rel="stylesheet" href="/styles/style.css">
                </head>
                <body>
                    <header>
                        <div class="lado-a-lado">
                            <img src="imagens/logo_png.png" alt="Logo Viagem Compartilhada">
                            <h1>Viagem Compartilhada</h1>
                         </div>

                        <nav>
                            <ul>
                                <li><a href="#">Minhas Viagens</a></li>
                                <li><a href="destinos.html">Destinos</a></li>
                                <li><a href="configuracoes.html">Configurações</a></li>
                            </ul>
                        </nav>
                    </header>
                    
                    <div class="telaErro">
                        <h1>Erro ao cadastrar a viagem!</h1>

                        <a href="/" class="botao" id="voltar">Voltar</a>
                    </div>
                </body>
                </html>
            `);
        }

        req.session.destroy();

        res.send(`
            <!DOCTYPE html>
                <html lang="pt-BR">
                <head>
                    <meta charset="UTF-8">
                    <title>Sucesso</title>
                    <link rel="stylesheet" href="/styles/style.css">
                </head>
                <body>
                    <header>
                        <div class="lado-a-lado">
                            <img src="imagens/logo_png.png" alt="Logo Viagem Compartilhada">
                            <h1>Viagem Compartilhada</h1>
                         </div>

                        <nav>
                            <ul>
                                <li><a href="#">Minhas Viagens</a></li>
                                <li><a href="destinos.html">Destinos</a></li>
                                <li><a href="configuracoes.html">Configurações</a></li>
                            </ul>
                        </nav>
                    </header>

                    <div class="telaSucesso">
                        <h1>Viagem cadastrada com sucesso!</h1>

                        <a href="/" class="botao" id="voltar">Voltar</a>
                    </div>
                </body>
            </html>
        `);
    });
});

app.get('/viagens', (req, res) => {
    const sql = 'SELECT * FROM viagens ORDER BY id DESC';
    
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Erro ao buscar as viagens:', err);
            return res.status(500).json({ erro: 'Erro interno no servidor' });
        }
        res.json(results);
    });
});

app.get('/imagem/:pais', async (req, res) => {
    try {
        const pais = req.params.pais;

        const resposta = await fetch(
            `https://api.pexels.com/v1/search?query=${encodeURIComponent(pais)}&per_page=1`,
            {
                headers: {
                    Authorization: process.env.PEXELS_API_KEY
                }
            }
        );

        const dados = await resposta.json();

        res.json(dados);

    } catch (erro) {
        console.error(erro);

        res.status(500).json({
            erro: 'Erro ao buscar imagem'
        });
    }
});

app.delete('/viagens/:id', (req, res) => {
    const { id } = req.params;
    
    db.query(
        'DELETE FROM viagens WHERE id = ?',
        [id],
        (err, result) => {
            if (err) {
                return res.status(500).json(err);
            }
            res.json({
                mensagem: 'Viagem removida com sucesso!'
            });
        }
    );
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});