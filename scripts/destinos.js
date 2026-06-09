let i = 0;

let continenteAtual = "africa";

const destinos = {
    africa: [
        {
            nome: "Pirâmides de Gizé",
            imagem: "imagens/piramides_gize.jpg",
            descricao: "Erguidas há mais de 4.500 anos nas areias do deserto, estas tumbas monumentais foram construídas para garantir a imortalidade e a travessia para o além dos faraós Quéops, Quéfren e Miquerinos. O sítio arqueológico é vigiado pela mítica Grande Esfinge, uma gigantesca estátua com corpo de leão e rosto humano que adiciona ainda mais mistério ao local sagrado. Hoje representam um complexo monumental milenar que integra as Sete Maravilhas do Mundo Antigo.",
            localizacao: "Egito - Cairo.",
            idioma: "Árabe.",
            culinaria: "Destaque para falafel, koshari e pães árabes assados.",            
            link: "https://pt.wikipedia.org/wiki/Necr%C3%B3pole_de_Giz%C3%A9"
        },

        {
            nome: "Medina de Marraquexe",
            imagem: "imagens/medina.jpg",
            descricao: "Este antigo bairro é o coração pulsante da cidade, oferecendo uma verdadeira imersão sensorial na cultura, história e nas tradições milenares do norte do continente africano. Caminhar por seu labirinto intricado de vielas de terracota revela os famosos souks (mercados), onde artesãos habilidosos vendem desde especiarias aromáticas e tapetes tecidos à mão até lanternas de metal ornamentadas. O epicentro da Medina é a vibrante Praça Jemaa el-Fna, um teatro a céu aberto que ganha vida ao entardecer com contadores de histórias, músicos folclóricos, encantadores de serpentes e barracas de comida fumegantes.",
            localizacao: "Marrocos - Marraquexe.",
            idioma: "Árabe e Berbere.",
            culinaria: "Destaque para tajine, cuscuz tradicional e chá de menta doce.",            
            link: "https://pt.wikipedia.org/wiki/Marrakech"
        },

        {
            nome: "Parque Nacional de Serengeti",
            imagem: "imagens/parque_serengeti.jpg",
            descricao: "Um Patrimônio Mundial da UNESCO repleto de vida selvagem: mais de 2 milhões de ungulados, 4.000 leões, 1.000 leopardos, 550 guepardos e cerca de 500 espécies de aves habitam uma área de quase 15.000 quilômetros quadrados. A paisagem é pontilhada por acácias solitárias e afloramentos rochosos graníticos conhecidos como kopjes, que frequentemente servem como mirantes para os grandes felinos descansarem ao sol.",
            localizacao: "Tanzânia - leste da região de Mara e nordeste da região de Simiyu.",
            idioma: "Suaíli e Inglês.",
            culinaria: "Destaque para ugali, nyama choma, e pratos com banana-da-terra.",            
            link: "https://pt.wikipedia.org/wiki/Parque_Nacional_de_Serengu%C3%A9ti"
        },
    ],

    asia: [
        {
            nome: "Grande Muralha da China",
            imagem: "imagens/muralha_china.jpg",
            descricao: "Concebida originalmente como uma imensa rede de fortificações para proteger as fronteiras imperiais contra invasões de tribos nômades, esta estrutura é uma das sete maravilhas do mundo. Sua construção estendeu-se por diferentes dinastias ao longo de mais de dois milênios, resultando em uma complexa teia de muros, torres de vigia e abrigos militares que acompanham a topografia acidentada das cordilheiras.",
            localizacao: "China - Pequim e arredores.",
            idioma: "Mandarim.",
            culinaria: "Destaque para o tradicional pato de Pequim, dim sum e variados pratos com macarrão.",            
            link: "https://pt.wikipedia.org/wiki/Grande_Muralha_da_China"
        },

        {
            nome: "Angkor Wat",
            imagem: "imagens/angkor_wat.jpg",
            descricao: "Este complexo de templos de pedra é o maior monumento religioso do mundo, erguido durante o século XII como a próspera capital do antigo e poderoso Império Khmer. Originalmente dedicado ao deus hindu Vishnu, o grandioso local foi gradualmente transformado em um amplo centro de adoração budista, refletindo as complexas transições espirituais da região. A arquitetura majestosa destaca-se brilhantemente por suas altas torres em forma de botões de lótus, vastos fossos espelhados e quilômetros de galerias adornadas com baixos-relevos que narram famosos épicos mitológicos.",
            localizacao: "Camboja - Siem Reap.",
            idioma: "Khmer.",
            culinaria: "Destaque para amok de peixe em folhas de bananeira, carne lok lak, curry vermelho e arroz jasmim aromático.",            
            link: "https://pt.wikipedia.org/wiki/Angkor_Wat"
        },

        {
            nome: "Monte Fuji",
            imagem: "imagens/monte_fuji.jpg",
            descricao: "Elevando-se a mais de três mil e setecentos metros de altitude, este imponente estratovulcão adormecido é a montanha mais alta e venerada do arquipélago japonês, caracterizada por seu cone excepcionalmente simétrico. Para o povo japonês, o Fuji não é apenas um espetáculo natural, mas um local de profunda importância espiritual historicamente associado a divindades xintoístas e práticas místicas budistas.",
            localizacao: "Japão - Ilha de Honshu.",
            idioma: "Japonês.",
            culinaria: "Destaque para sushis, ramen, fatias de sashimi e tempurá crocante.",            
            link: "https://pt.wikipedia.org/wiki/Monte_Fuji"
        }
    ],

    america: [
        {
            nome: "Cristo Redentor",
            imagem: "imagens/cristo_redentor.jpg",
            descricao: "Inaugurada em 1931, esta gigantesca estátua em estilo art déco retrata Jesus Cristo de braços abertos, abençoando a cidade maravilhosa. Localizada no topo do morro do Corcovado, dentro do Parque Nacional da Tijuca, a estrutura de concreto armado e pedra-sabão possui trinta metros de altura. O monumento é o maior símbolo do Brasil no exterior e atrai milhões de visitantes que buscam a vista panorâmica deslumbrante da baía de Guanabara, do Pão de Açúcar e das praias cariocas.",
            localizacao: "Brasil - Rio de Janeiro.",
            idioma: "Português.",
            culinaria: "Destaque para feijoada, petiscos de boteco, chá mate, biscoito globo e frutos do mar.",            
            link: "https://pt.wikipedia.org/wiki/Cristo_Redentor"
        },

        {
            nome: "Machu Picchu",
            imagem: "imagens/machu_picchu.jpg",
            descricao: "Construída no século XV a mando do imperador Pachacuti, esta cidade inca fica estrategicamente posicionada no alto da Cordilheira dos Andes. O local foi abandonado durante a colonização espanhola e permaneceu oculto do mundo exterior até ser revelado em 1911 pelo explorador Hiram Bingham. Seus terraços agrícolas, templos de pedra polida e complexo sistema de irrigação demonstram o avançado conhecimento de engenharia deste povo ancestral.",
            localizacao: "Peru - província de Urubamba (Departamento de Cusco).",
            idioma: "Espanhol e Quechua.",
            culinaria: "Destaque para ceviche, milho, batatas e carne de alpaca.",            
            link: "https://pt.wikipedia.org/wiki/Machu_Picchu"
        },

        {
            nome: "Chichén Itzá",
            imagem: "imagens/chichen_itza.jpg",
            descricao: "Antiga e poderosa capital da civilização maia, floresceu na Península de Yucatán, tornando-se um dos centros políticos e econômicos mais importantes da Mesoamérica. O complexo arqueológico é dominado pela impressionante pirâmide de Kukulcán, também conhecida como El Castillo, que reflete a profunda compreensão astronômica deste povo ancestral.",
            localizacao: "México - Tinum (Yucatán).",
            idioma: "Espanhol e Maia Iucateque.",
            culinaria: "Destaque para cochinita pibil, tacos, burritos e guacamole.",            
            link: "https://pt.wikipedia.org/wiki/Chich%C3%A9n_Itz%C3%A1"
        }
    ],

    europa: [
        {
            nome: "Torre Eiffel",
            imagem: "imagens/paris.jpg",
            descricao: "Estrutura de ferro treliçado construída no século XIX, que se tornou o principal ícone romântico e cultural do país. Projetada pela empresa do engenheiro Gustave Eiffel, a torre possui mais de 300 metros de altura. Dividida em três níveis acessíveis ao público, oferece restaurantes de alta gastronomia e plataformas de observação. Todas as noites, o monumento ganha vida com uma iluminação dourada cintilante que ocorre a cada hora, encantando moradores e turistas.",
            localizacao: "França - Paris.",
            idioma: "Francês.",
            culinaria: "Destaque para queijos, vinhos, croissants e escargot.",
            link: "https://pt.wikipedia.org/wiki/Torre_Eiffel"
        },

        {
            nome: "Coliseu",
            imagem: "imagens/coliseu.jpg",
            descricao: "Concluído no ano 80 d.C., foi o maior anfiteatro construído durante o Império Romano, palco de batalhas de gladiadores, caçadas de animais selvagens e espetáculos épicos, com capacidade para abrigar até 80 mil espectadores. Além da parte visual, há o hipogeu, uma complexa rede de túneis e jaulas subterrâneas, que demonstra o alto nível de organização e engenharia dos antigos romanos.",
            localizacao: "Itália - Roma.",
            idioma: "Italiano.",
            culinaria: "Destaque para massas artesanais, pizzas, gelatos e vinhos.",
            link: "https://pt.wikipedia.org/wiki/Coliseu"
        },

        {
            nome: "Acrópole de Atenas",
            imagem: "imagens/atenas.jpg",
            descricao: "O complexo abriga as ruínas de diversos templos dedicados aos deuses do Olimpo, sendo o Parthenon, construído em homenagem à deusa Atena. As colunas de mármore perfeitamente alinhadas e os frisos detalhados refletem os ideais clássicos de beleza, proporção e simetria que influenciaram toda a arquitetura ocidental. O local foi o epicentro político e religioso onde floresceram a filosofia, as artes e os conceitos fundamentais da democracia que moldaram o mundo moderno.",
            localizacao: "Grécia - Atenas.",
            idioma: "Grego.",
            culinaria: "Destaque para moussaka, salada grega, queijo feta e souvlaki.",            
            link: "https://pt.wikipedia.org/wiki/Acr%C3%B3pole_de_Atenas"
        },
    ],

    oceania: [
        {
            nome: "Milford Sound",
            imagem: "imagens/milford_sound.jpg",
            descricao: "Este majestoso fiorde escarpado foi esculpido pela lenta e implacável força de antigas e maciças geleiras. A paisagem cênica e dramática é caracterizada por íngremes penhascos de pedra escura que despencam verticalmente em águas calmas e profundas, cercados por exuberantes florestas tropicais de clima frio. Devido ao alto e constante índice pluviométrico da região intocada, as altas encostas ganham vida abundante com centenas de cachoeiras espetaculares, como a famosa Cascata Stirling.",
            localizacao: "Nova Zelândia - Ilha Sul.",
            idioma: "Inglês e Maori.",
            culinaria: "Destaque para pernil de cordeiro assado, fish and chips e a sobremesa de merengue pavlova.",            
            link: "https://pt.wikipedia.org/wiki/Milford_Sound"
        },

        {
            nome: "Sydney Opera House",
            imagem: "imagens/sydney_opera_house.jpg",
            descricao: "Centro de artes performáticas que representa um ícone incontestável da arquitetura expressionista moderna, redefinindo o visual da orla da baía mais famosa do país desde a sua inauguração. Projetado pelo arquiteto dinamarquês Jørn Utzon, o edifício grandioso é imediatamente reconhecido por seu telhado composto por uma série de conchas brancas entrelaçadas, que evocam poéticamente as velas dos navios no mar. A estrutura complexa abriga múltiplos teatros acústicos, estúdios de gravação modernos e imensas salas de concerto que sediam milhares de apresentações anuais vibrantes, variando de óperas clássicas a shows de rock.",
            localizacao: "Austrália - Sydney.",
            idioma: "Inglês.",
            culinaria: "Destaque para churrasco, tortas de carne e pratos leves com abundantes frutos do mar.",            
            link: "https://en.wikipedia.org/wiki/Sydney_Opera_House"
        },

        {
            nome: "Bora Bora",
            imagem: "imagens/bora_bora.jpg",
            descricao: "Este pequeno atol polinésio é caracterizado por sua deslumbrante lagoa interna de tons neon e um imponente vulcão verde extinto ao centro. O destino insular é amplamente famoso por ter popularizado os bangalôs construídos em finas palafitas diretamente sobre as águas rasas, calmas e transparentes. A imensa e protetora barreira de corais natural que circunda toda a ilha principal cria uma piscina gigante, mansa e agradavelmente morna, perfeita para atividades marinhas, como nado com arraias.",
            localizacao: "Polinésia Francesa - Ilhas de Sotavento.",
            idioma: "Francês e Taitiano.",
            culinaria: "Destaque para poisson cru, peixes frescos pescados localmente, frutas tropicais e fava de baunilha taitiana.",            
            link: "https://en.wikipedia.org/wiki/Bora_Bora"
        }
    ]
};

const imagem = document.querySelector(".img");
const nome = document.querySelector(".nome");
const descricao = document.querySelector(".descricao");
const localizacao = document.querySelector(".localizacao");
const idioma = document.querySelector(".idioma");
const culinaria = document.querySelector(".culinaria");

const botaoSaibaMais = document.querySelector(".saibamais");
const botaoAnt = document.querySelector(".anterior");
const botaoProx = document.querySelector(".proximo");

function atualizar() {

    let listaAtual = destinos[continenteAtual];

    imagem.setAttribute("src", listaAtual[i].imagem);
    nome.textContent = listaAtual[i].nome;
    descricao.textContent = listaAtual[i].descricao;
    localizacao.textContent = listaAtual[i].localizacao;
    idioma.textContent = listaAtual[i].idioma;
    culinaria.textContent = listaAtual[i].culinaria;

    botaoSaibaMais.setAttribute(
        "href",
        listaAtual[i].link
    );
}

function trocarContinente(continente) {

    continenteAtual = continente;

    i = 0;

    atualizar();
}

function favoritarDestino() {
    const nome = document.querySelector('.nome').textContent.trim();
    const img = document.querySelector('.img').src;
    const descricao = document.querySelector('.descricao').textContent.trim();

    if (!nome) return; 

    const destinoAtual = { nome, img, descricao };
    
    let favoritos = JSON.parse(localStorage.getItem('meusFavoritos')) || [];

    const index = favoritos.findIndex(fav => fav.nome === nome);
    const iconeCoracao = document.getElementById('coracao');

    if (index === -1) {
        favoritos.push(destinoAtual);
        iconeCoracao.src = 'imagens/coracao_cheio.png';
    } else {
        favoritos.splice(index, 1);
        iconeCoracao.src = 'imagens/coracao_vazio.png';
    }

    localStorage.setItem('meusFavoritos', JSON.stringify(favoritos));
}

function checarFavorito(nomeDestino) {
    if (!nomeDestino) return;
    
    let favoritos = JSON.parse(localStorage.getItem('meusFavoritos')) || [];

    const iconeCoracao = document.getElementById('coracao');
    
    if (!iconeCoracao) return;

    if (favoritos.some(fav => fav.nome === nomeDestino)) {
        iconeCoracao.src = 'imagens/coracao_cheio.png';
    } else {
        iconeCoracao.src = 'imagens/coracao_vazio.png';
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const elementoNome = document.querySelector('.nome');
    
    if (elementoNome) {
        const observer = new MutationObserver(() => {
            checarFavorito(elementoNome.textContent.trim());
        });
        
        observer.observe(elementoNome, { childList: true, characterData: true, subtree: true });
        
        setTimeout(() => {
            checarFavorito(elementoNome.textContent.trim());
        }, 300);
    }
});

botaoProx.addEventListener("click", function () {

    let listaAtual = destinos[continenteAtual];

    i++;

    if (i >= listaAtual.length) {
        i = 0;
    }

    atualizar();
});

botaoAnt.addEventListener("click", function () {

    let listaAtual = destinos[continenteAtual];

    i--;

    if (i < 0) {
        i = listaAtual.length - 1;
    }

    atualizar();
});

atualizar();