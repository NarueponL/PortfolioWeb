var postNum = 0;


function postFunction(){
    var post = document.getElementById("text1").value;

    if(postNum==0){
        document.getElementById("topic1").innerHTML = post;
        postNum++;

    }
    else if(postNum==1){
        document.getElementById("comment1").innerHTML = post;
        postNum++;
    }
    else if(postNum==2){
        document.getElementById("comment2").innerHTML = post;
        postNum++;
    }
    else{
        alert("you can't comment now");
    }
}

function clearFunction(){
    document.getElementById("topic1").innerHTML = "";
    document.getElementById("comment1").innerHTML = "";
    document.getElementById("comment2").innerHTML = "";
    postNum = 0;

}

