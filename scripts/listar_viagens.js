async function carregarViagens() {
    const container = document.getElementById('listaViagens');

    if(!container) return;

    let viagens = [];

    try {
        const resposta = await fetch('/viagens');

        if (resposta.ok) {
            viagens = await resposta.json();
        } else {
            console.error("Erro no servidor ao buscar viagens.");
        }
    } catch (erro) {
        console.error("Servidor fora do ar ou erro de conexão: ", erro);
    }

    container.innerHTML = ''; 

    if (viagens.length === 0) {
        container.innerHTML = '<p class="vazio">Nenhuma viagem cadastrada ainda. Que tal planejar uma?<br><br>Dirija-se para a aba "Destinos" para recomendações!</p>';
        return;
    }

    viagens.forEach(viagem => {
        const dataInicio = new Date(viagem.data_inicio).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
        const dataFinal = new Date(viagem.data_final).toLocaleDateString('pt-BR', { timeZone: 'UTC' });

        const card = document.createElement('div');
        card.classList.add('card-viagem');
        const nomePais = viagem.local_visitado.split(',')[0].trim();

        let htmlCard = `
            <div class="pais-bandeira">
                <h3> ${viagem.local_visitado}</h3>
                <img id="bandeira-${viagem.id}" src="" alt="Bandeira" class="bandeira">
            </div>
            
            <p><strong> Período:</strong> ${dataInicio} a ${dataFinal}</p>
            <p><strong> Descrição:</strong> ${viagem.descricao}</p>
        `;

        if (viagem.passeio1 || viagem.passeio2 || viagem.passeio3 || viagem.passeio4) {
            const passeios = [viagem.passeio1, viagem.passeio2, viagem.passeio3, viagem.passeio4].filter(p => p);
            htmlCard += `<p><strong> Passeios:</strong> ${passeios.join(', ')}</p>`;
        }

        if (viagem.restaurante1) {
            const restaurantes = [];
            if(viagem.restaurante1) restaurantes.push(`${viagem.restaurante1} (Nota: ${viagem.nota1})`);
            if(viagem.restaurante2) restaurantes.push(`${viagem.restaurante2} (Nota: ${viagem.nota2})`);
            if(viagem.restaurante3) restaurantes.push(`${viagem.restaurante3} (Nota: ${viagem.nota3})`);
            if(viagem.restaurante4) restaurantes.push(`${viagem.restaurante4} (Nota: ${viagem.nota4})`);
            htmlCard += `<p><strong> Restaurantes:</strong> ${restaurantes.join(' | ')}</p>`;
        }

        if (viagem.curiosidade || viagem.surpreendente || viagem.favorito) {
            htmlCard += `<p><strong> Cultura:</strong><br>`;
            if(viagem.curiosidade) htmlCard += `&nbsp;&nbsp;&nbsp;- Curiosidade Cultural: ${viagem.curiosidade}<br>`;
            if(viagem.surpreendente) htmlCard += `&nbsp;&nbsp;&nbsp;- Aspecto Cultural Surpreendente: ${viagem.surpreendente}<br>`;
            if(viagem.favorito) htmlCard += `&nbsp;&nbsp;&nbsp;- Aspecto Cultural Favorito: ${viagem.favorito}`;
            htmlCard += `</p>`;
        }

        htmlCard += `
            <button class="excluir" onclick="excluirViagem(${viagem.id})">Excluir Viagem</button>
        `;

        card.innerHTML = htmlCard;
        container.appendChild(card);

        buscarBandeira(nomePais, viagem.id);
    });
}

async function buscarBandeira(pais, idCard) {
    try {
        let resposta = await fetch(`https://restcountries.com/v3.1/translation/${pais}`);
        
        if (!resposta.ok) {
            resposta = await fetch(`https://restcountries.com/v3.1/name/${pais}`);
        }
        
        if (resposta.ok) {
            const dados = await resposta.json();
            
            const linkDaBandeira = dados[0].flags.svg; 
            
            const imagemElemento = document.getElementById(`bandeira-${idCard}`);
            
            if (imagemElemento) {
                imagemElemento.src = linkDaBandeira;
                imagemElemento.style.display = 'block'; 
            }
        }
    } catch (erro) {
        console.log(`Bandeira não encontrada para: ${pais}`);
    }
}

async function excluirViagem(id) {
    const confirmar = confirm('Deseja excluir esta viagem?');

    if (!confirmar) {
        return;
    }

    await fetch(`/viagens/${id}`, {
        method: 'DELETE'
    });

    carregarViagens();
}

carregarViagens();