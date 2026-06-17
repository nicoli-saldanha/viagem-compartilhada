# Viagem Compartilhada
Uma aplicação web para registro de experiências em viagem. O projeto permite cadastrar viagens realizadas, documentar passeios, avaliar restaurantes, destacar aspetos culturais e ainda explorar possibilidades de novos destinos.

---
## Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript
- Node.js
- Express
- MySQL
- Express Session
- Pexels API

## Informações Básicas de Execução

Antes de executar o projeto localmente, certifique-se de ter instalado:

- Node.js (versão 18 ou superior)
- MySQL Server

---
## Como Executar
### 1. Clonar o repositório

```bash
git clone https://github.com/nicoli-saldanha/viagem-compartilhada.git
```

### 2. Acessar a pasta do projeto

```bash
cd viagem-compartilhada
```

### 3. Instalar as dependências

```bash
npm install
```

Caso seja necessário instalar manualmente:

```bash
npm install express
npm install mysql2
npm install express-session
```

### 4. Configuração do Banco de Dados

### Criar o banco de dados

```sql
CREATE DATABASE banco_viagens;
```

### Selecionar o banco

```sql
USE banco_viagens;
```

### Criar a tabela

```sql
CREATE TABLE viagens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    local_visitado VARCHAR(255) NOT NULL,
    data_inicio DATE NOT NULL,
    data_final DATE NOT NULL,
    descricao TEXT,

    passeio1 VARCHAR(255),
    passeio2 VARCHAR(255),
    passeio3 VARCHAR(255),
    passeio4 VARCHAR(255),

    restaurante1 VARCHAR(255),
    nota1 INT,

    restaurante2 VARCHAR(255),
    nota2 INT,

    restaurante3 VARCHAR(255),
    nota3 INT,

    restaurante4 VARCHAR(255),
    nota4 INT,

    curiosidade TEXT,
    surpreendente TEXT,
    favorito TEXT
);
```

### 5. Configuração das Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto (ou configure as variáveis diretamente no Render):

```env
DB_HOST=<host_do_banco>
DB_USER=<usuario_do_banco>
DB_PASSWORD=<senha_do_banco>
DB_NAME=<nome_do_banco>
DB_PORT=<porta_do_banco>

PEXELS_API_KEY=<sua_chave_da_api>
```

### 6. Obtendo a Chave da API

A aplicação utiliza a API do Pexels para exibição de imagens dos destinos.

1. Crie uma conta em https://www.pexels.com/api/
2. Gere sua API Key.
3. Adicione a chave na variável:

```env
PEXELS_API_KEY=<sua_chave_da_api>
```

### 7. Executando o Projeto

Inicie o servidor:

```bash
node scripts/index.js
```

Após iniciar o servidor, acesse:

```text
http://localhost:3000
```
---
## API Utilizada
### Pexels API
Empregada para obter imagens dos destinos cadastrados.
Documentação: https://www.pexels.com/api/.
