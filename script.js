
const livros = [
    {
        titulo: "Olhos Prateados",
        original: "The Silver Eyes",
        colecao: "trilogia",
        categoria: "Trilogia principal",
        simbolo: "🐻",
        resumo: "Charlie retorna à cidade natal e reencontra os mistérios de uma antiga pizzaria.",
        descricao: "Anos após uma tragédia na Freddy Fazbear's Pizza, Charlie e seus amigos voltam ao local e descobrem que o passado ainda esconde segredos perigosos.",
        detalhe: "Primeiro livro da trilogia de romances de FNAF. Introduz Charlie e uma história própria dentro do universo da franquia."
    },
    {
        titulo: "Os Distorcidos",
        original: "The Twisted Ones",
        colecao: "trilogia",
        categoria: "Trilogia principal",
        simbolo: "👁",
        resumo: "Novos pesadelos surgem quando Charlie tenta deixar o passado para trás.",
        descricao: "Depois dos acontecimentos anteriores, Charlie procura reconstruir sua vida. Porém, acontecimentos estranhos e criaturas assustadoras voltam a cercá-la.",
        detalhe: "Segundo livro da trilogia. A narrativa amplia os mistérios relacionados a Charlie e aos animatrônicos."
    },
    {
        titulo: "A Última Porta",
        original: "The Fourth Closet",
        colecao: "trilogia",
        categoria: "Trilogia principal",
        simbolo: "🚪",
        resumo: "O capítulo final da trilogia traz revelações sobre Charlie e o passado.",
        descricao: "Enquanto novos acontecimentos perturbadores se desenrolam, os personagens enfrentam revelações que mudam sua compreensão dos mistérios anteriores.",
        detalhe: "Terceiro livro da trilogia principal. Conclui o arco narrativo iniciado em The Silver Eyes."
    },
    {
        titulo: "Into the Pit",
        original: "Into the Pit",
        colecao: "fazbear",
        categoria: "Fazbear Frights",
        simbolo: "🕳",
        resumo: "Uma piscina de bolinhas esconde uma passagem para algo aterrorizante.",
        descricao: "Oswald está entediado com sua rotina, até encontrar uma experiência inexplicável em uma antiga pizzaria. Sua descoberta transforma sua vida em um pesadelo.",
        detalhe: "Livro de contos da coleção Fazbear Frights, que reúne diferentes histórias de terror."
    },
    {
        titulo: "Fetch",
        original: "Fetch",
        colecao: "fazbear",
        categoria: "Fazbear Frights",
        simbolo: "🐕",
        resumo: "Um animatrônico incomum transforma tecnologia em uma fonte de medo.",
        descricao: "Greg encontra um cão robótico que parece responder de maneiras surpreendentes. O que começa como uma curiosidade logo se torna inquietante.",
        detalhe: "A coleção Fazbear Frights explora histórias independentes com temas de terror, consequências e mistérios."
    },
    {
        titulo: "1:35 AM",
        original: "1:35 AM",
        colecao: "fazbear",
        categoria: "Fazbear Frights",
        simbolo: "⏰",
        resumo: "Objetos comuns e acontecimentos estranhos dão origem a novos pesadelos.",
        descricao: "Este volume reúne contos em que personagens se veem envolvidos em situações sobrenaturais e ameaçadoras ligadas a objetos e acontecimentos misteriosos.",
        detalhe: "Terceiro volume da coleção Fazbear Frights em inglês."
    },
    {
        titulo: "The Mimic",
        original: "The Mimic",
        colecao: "pizzaplex",
        categoria: "Tales from the Pizzaplex",
        simbolo: "🤖",
        resumo: "Uma máquina capaz de imitar comportamentos está ligada a mistérios assustadores.",
        descricao: "Uma história que explora a origem e os perigos de uma tecnologia capaz de reproduzir movimentos e comportamentos de maneiras inquietantes.",
        detalhe: "A coleção Tales from the Pizzaplex expande os mistérios associados ao universo do Mega Pizzaplex."
    },
    {
        titulo: "HAPPS",
        original: "HAPPS",
        colecao: "pizzaplex",
        categoria: "Tales from the Pizzaplex",
        simbolo: "🎭",
        resumo: "Uma aventura em um ambiente tecnológico se transforma em uma situação perigosa.",
        descricao: "A história acompanha personagens envolvidos em acontecimentos perturbadores ligados ao mundo do Pizzaplex e suas atrações.",
        detalhe: "Conto publicado na coleção Tales from the Pizzaplex."
    },
    {
        titulo: "Somniphobia",
        original: "Somniphobia",
        colecao: "pizzaplex",
        categoria: "Tales from the Pizzaplex",
        simbolo: "🌙",
        resumo: "O medo e o sono se misturam em uma história de suspense.",
        descricao: "Este volume reúne histórias de terror relacionadas a tecnologia, experiências estranhas e os perigos escondidos em situações aparentemente comuns.",
        detalhe: "Volume da coleção Tales from the Pizzaplex."
    }
];

const grade = document.getElementById("gradeLivros");
const pesquisa = document.getElementById("pesquisa");
const categoria = document.getElementById("categoria");
const contador = document.getElementById("contador");
const semResultados = document.getElementById("semResultados");

const modal = document.getElementById("modalLivro");
const modalCapa = document.getElementById("modalCapa");

function criarCapa(livro) {
    const capa = document.createElement("div");
    capa.className = `capa ${livro.colecao}`;

    const titulo = document.createElement("h3");
    titulo.textContent = livro.titulo;

    const simbolo = document.createElement("div");
    simbolo.className = "simbolo";
    simbolo.textContent = livro.simbolo;

    const legenda = document.createElement("small");
    legenda.textContent = "FAZBEAR ARCHIVES";

    capa.append(titulo, simbolo, legenda);
    return capa;
}

function renderizarLivros() {
    const termo = pesquisa.value
        .trim()
        .toLocaleLowerCase("pt-BR");

    const filtro = categoria.value;

    const encontrados = livros.filter(livro => {
        const correspondeTexto = [
            livro.titulo,
            livro.original,
            livro.resumo,
            livro.categoria
        ].some(texto => texto.toLocaleLowerCase("pt-BR").includes(termo));

        const correspondeCategoria =
            filtro === "todos" || livro.colecao === filtro;

        return correspondeTexto && correspondeCategoria;
    });

    grade.replaceChildren();

    encontrados.forEach(livro => {
        const cartao = document.createElement("article");
        cartao.className = "livro";

        const capa = criarCapa(livro);

        const info = document.createElement("div");
        info.className = "livro-info";

        const tag = document.createElement("span");
        tag.className = "tag";
        tag.textContent = livro.categoria;

        const titulo = document.createElement("h3");
        titulo.textContent = livro.titulo;

        const resumo = document.createElement("p");
        resumo.textContent = livro.resumo;

        const botao = document.createElement("button");
        botao.className = "detalhes";
        botao.textContent = "DESCOBRIR HISTÓRIA →";
        botao.setAttribute("aria-label", `Ver detalhes de ${livro.titulo}`);
        botao.addEventListener("click", () => abrirDetalhes(livro));

        info.append(tag, titulo, resumo, botao);
        cartao.append(capa, info);
        grade.appendChild(cartao);
    });

    contador.textContent =
        `${encontrados.length} ${encontrados.length === 1 ? "livro encontrado" : "livros encontrados"}`;

    semResultados.hidden = encontrados.length !== 0;
}

function abrirDetalhes(livro) {
    modalCapa.replaceChildren();
    modalCapa.className = `capa modal-capa ${livro.colecao}`;

    const simbolo = document.createElement("div");
    simbolo.className = "simbolo";
    simbolo.textContent = livro.simbolo;

    const tituloCapa = document.createElement("h3");
    tituloCapa.textContent = livro.titulo;

    const legenda = document.createElement("small");
    legenda.textContent = livro.original;

    modalCapa.append(tituloCapa, simbolo, legenda);

    document.getElementById("modalTitulo").textContent = livro.titulo;
    document.getElementById("modalColecao").textContent = livro.categoria;
    document.getElementById("modalDescricao").textContent = livro.descricao;
    document.getElementById("modalDetalhes").textContent = livro.detalhe;

    modal.showModal();
}

function fecharModal() {
    modal.close();
}

pesquisa.addEventListener("input", renderizarLivros);
categoria.addEventListener("change", renderizarLivros);

document.getElementById("fecharModal")
    .addEventListener("click", fecharModal);

document.getElementById("botaoFechar")
    .addEventListener("click", fecharModal);

modal.addEventListener("click", evento => {
    if (evento.target === modal) {
        fecharModal();
    }
});

document.getElementById("menuToggle").addEventListener("click", () => {
    const menu = document.getElementById("menu");
    const aberto = menu.classList.toggle("aberto");

    document.getElementById("menuToggle")
        .setAttribute("aria-expanded", String(aberto));
});

document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("menu").classList.remove("aberto");
        document.getElementById("menuToggle")
            .setAttribute("aria-expanded", "false");
    });
});

document.getElementById("ano").textContent = new Date().getFullYear();

renderizarLivros();
