//--Page to navigate
//page: from HTML CLICK Example /page:/01_style/index.html
function loadPage(page) {

    //--Get Refernce for the HTML ELEMENT BY ITS ID
    //--contentFrme is iframe element type
    let iframeElement = document.getElementById("contentFrame");

    //--Give The IFRAME the HTML ADDRESS
    iframeElement.src = page;

    // Close sidebar on mobile
    document.getElementById("sidebar").classList.remove("show");
}

function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("show");
}