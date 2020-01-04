window.onload = function(){
    let popUp = document.getElementById("popUp")
    let span = document.getElementsByClassName('close')[0]
    let create = document.getElementById("OKI")
    let cancel = document.getElementById("cancel")

   popUp.style.display = "block";

span.onclick = function(){
    popUp.style.display = "none";
}

// create.onclick = function(){
//     window.location.href = "./index.html"
// }
create.onclick = function(){
    popUp.style.display = "none";
}

cancel.onclick = function(){
    popUp.style.display = "none";
}

window.onclick = function(event){
    if(event.target === popUp){
        popUp.style.display = "none";
    }
}
}

document.getElementById("OKI").addEventListener("click",
        function saveTitle(){
            Titles=document.getElementById("contents").value;
            console.log( Titles);

}

)