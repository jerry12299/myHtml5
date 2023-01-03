
let thisButton = document.getElementById("2022/12/22");
let thisButton2 = document.getElementById("2022/12/23");
let thisButton3 = document.getElementById("2022/12/01");
let showData = document.getElementById("showData");

thisButton.addEventListener("click",loadServerData);
thisButton2.addEventListener("click",loadServerData);
thisButton3.addEventListener("click",loadServerData);


function loadServerData(){
    console.log("Load Server Data!");
    let xmlHttpRequest;
    if(window.XMLHttpRequest){
        xmlHttpRequest = new XMLHttpRequest();
    }else{
        alert("No XMLHttpRequest!");
        return;
    }
    if(this.id=="today"){
        var now = new Date();
        
    }
    else{
        var now = new Date(this.id+" 12:01:01");
        // var Today = "20221223";
    }
  
        
    
    
    var Today = now.toISOString().split('T')[0].replace(/-/g,'');



    xmlHttpRequest.open("GET",Today+".txt",true);
    xmlHttpRequest.send();

    xmlHttpRequest.onreadystatechange = function(){
        console.log("readyState:",xmlHttpRequest.readyState);
        console.log("status:",xmlHttpRequest.status);
        if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){
            showData.innerHTML=xmlHttpRequest.responseText;
            // thisButton.style.visibility="hidden";
        }
    }



};

$(function(){
    $("#random").on("click",loadRandomjack);
});

function loadRandomjack(){
    $.getJSON("https://api.chucknorris.io/jokes/random")
    .done(function(data) {
        console.log("Success");
        $("#showData").text(data.value);
    })
    .fail(function(){
        console.log("Error");
    })
    .always(function(){
        console.log("Always");
    });
}