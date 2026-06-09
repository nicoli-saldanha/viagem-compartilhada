function carregarFavoritos() {
    const favoritos = JSON.parse(localStorage.getItem('meusFavoritos')) || [];
    const container = document.getElementById('lista-favoritos');

    if (favoritos.length === 0) {
        container.innerHTML = `
            <p class="vazio">
                Você ainda não possui nenhum destino favoritado.<br><br>
                Explore a aba "Destinos" para adicionar!
            </p>`;
        return;
    }

    container.innerHTML = ''; 

    favoritos.forEach(destino => {
        const card = document.createElement('div');
        card.classList.add('card-fav');

        card.innerHTML = `
            <h3>${destino.nome}</h3>
            <img src="${destino.img}" alt="${destino.nome}">
            <p>${destino.descricao}</p>
            <button class="remover" onclick="removerFavorito('${destino.nome}')">
                Remover dos Favoritos
            </button>
        `;

        container.appendChild(card);
    });
}

function removerFavorito(removerNome) {
    const confirmar = confirm('Deseja excluir este destino dos favoritos?');

    if (!confirmar) {
        return;
    }

    let favoritos = JSON.parse(localStorage.getItem('meusFavoritos')) || [];
    
    favoritos = favoritos.filter(fav => fav.nome !== removerNome);
    
    localStorage.setItem('meusFavoritos', JSON.stringify(favoritos));
    
    carregarFavoritos();
}

document.addEventListener('DOMContentLoaded', carregarFavoritos);