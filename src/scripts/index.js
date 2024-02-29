const openSidebar = () => {
    document.getElementById("mySidebar").style.width = "400px";
    document.getElementById("main").style.marginLeft = "400px";
};

const closeSidebar = () => {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
};