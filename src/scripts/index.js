// Menu & close buttons interactions :

const menuButton = document.querySelector('#menuBtn');
const sidebar = document.querySelector('#mySidebar');
const mainSelection = document.querySelector('#main');
const closeBtn = document.querySelector('#closeBtn');


menuButton.addEventListener('click', () => {
    menuButton.classList.add('hidden');
    sidebar.style.width = "400px";
    mainSelection.style.marginLeft = "400px";
});

closeBtn.addEventListener('click', ()=>{
    menuButton.classList.remove('hidden');
    sidebar.style.width = "0";
    mainSelection.style.marginLeft = "0";
});