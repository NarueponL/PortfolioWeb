window.onload = pageLoad;

function pageLoad(){
    document.getElementById("cinamonPage").onclick = goToCinamonPage;
    document.getElementById("blogPage").onclick = goToBlogPage;
    document.getElementById("registerPage").onclick = goToRegisterPage;
    document.getElementById("squareGamePage").onclick = goToSquareGamePage;
    document.getElementById("gameProjectPage").onclick = goToGameProjectPage;
    
}

function goToCinamonPage(){
    location.href = "recipeweek4.html";
}

function goToBlogPage(){
    location.href = "blog.html";
}

function goToRegisterPage(){
    location.href = "register.html";
}

function goToSquareGamePage(){
    location.href = "game.html";
}

function goToGameProjectPage(){
    location.href = "project.html"
}

