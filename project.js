window.onload = pageLoad;

function pageLoad(){
    document.getElementById("downloadButton").onclick = goToStore;
    
}

function goToStore(){
    window.location.href = "https://play.google.com/store/apps/details?id=com.DefaultCompany.Chickenrun";
}