// Menu & close buttons interactions :

const menuButton = document.querySelector('#menuBtn');
const sidebar = document.querySelector('#mySidebar');
const mainSelection = document.querySelector('#main');
const closeBtn = document.querySelector('#closeBtn');
const mainContent = document.querySelector('.site-content');


menuButton.addEventListener('mouseover', () => {
    sidebar.style.width = "300px";
    mainSelection.style.marginLeft = "300px";
});

mainContent.addEventListener('mouseover', ()=>{
    sidebar.style.width = "0";
    mainSelection.style.marginLeft = "0";
})