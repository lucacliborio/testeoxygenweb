//Pegando o elemento no HTML
const btnMenu = document.getElementById('btn-menu');

//Criando a função activeMenu
function activeMenu(event) {
    //Verificando o tipo do evento
    if (event.type === 'touchstart') event.preventDefault();
    //Selecionando a navegação
    const nav = document.getElementById('cx-menu');
    //Adicionando uma classe ao elemento nav do HTML
    nav.classList.toggle('active');
    //Configurando meu elemento para ajudar na acessibilidade
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Clique para fechar o menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Clique para abrir o menu');
    }
} 

//Adicionando a função para quando ele for clicado (tanto com clique quanto com touch)
btnMenu.addEventListener('click', activeMenu);
btnMenu.addEventListener('touchstart', activeMenu);