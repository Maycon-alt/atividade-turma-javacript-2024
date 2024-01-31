var main = document.createElement('div');
main.classList.add('corpo');
document.body.appendChild(main);


const retornaProdutos = async ()=>{

    try {
        const resposta = await fetch('https://fakestoreapi.com/products');
        const data = await resposta.json();
        console.log(data)

        for (let i = 0; i < data.length; i++) {
            criarCard(data[i]);
        }
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    }
}
function criarCard(conteudo) {
    console.log(conteudo.image)
    //div do card
    var card = document.createElement('div');
    card.classList.add('card');

    //onde vai os textos juntos
    var kanban = document.createElement('div');
    kanban.classList.add('kanban');

    //adicionar imagem
    var imagem = document.createElement('img');
    imagem.classList.add('imagem');
    imagem.src = conteudo.image;
    card.appendChild(imagem);

    //adicionar titulo, descrição, preço, categoria e nota
    var titulo = document.createElement('h3');
    var preco = document.createElement('h3');
    var categoria = document.createElement('h3');
    var nota = document.createElement('h3');
    var descri = document.createElement('p');

    titulo.innerText = `${conteudo.title}`;
    kanban.appendChild(titulo);
    preco.innerText = `preco: ${conteudo.price}`;
    kanban.appendChild(preco);
    categoria.innerText = `categoria: ${conteudo.category}`;
    kanban.appendChild(categoria);
    nota.innerText = `nota: ${conteudo.rating.rate}`;
    kanban.appendChild(nota);

    card.appendChild(kanban);
    main.appendChild(card);
}
retornaProdutos();
