let thisButton = document.getElementById("2022/12/28");
thisButton.addEventListener("click",loadServerData);
let thisButton2 = document.getElementById("2022/12/29");
thisButton2.addEventListener("click",loadServerData);
thisButton.addEventListener("click",loadServerData);
let thisButton3 = document.getElementById("2022/12/30");
thisButton3.addEventListener("click",loadServerData);
let thisButton4 = document.getElementById("2022/12/31");
thisButton4.addEventListener("click",loadServerData);

function loadServerData(){
   
        
    
    var now = new Date(this.id+" 12:01:01");
        // var Today = "20221223";
    
    // var now = new Date();
    var Today = now.toISOString().split('T')[0].replace(/-/g,'');
        
    $("#myVideo").attr("src", Today+".mp4");

};

$(function () { 
    // document.getElementById("myVideo")



    // $("#myVideo").attr("src", "sample-mp4-file.mp4"); 

    




    // .attr 改變屬性
    $("#playBtn").on("click", function () {
        $("#voldisplay").text($("#myVideo")[0].volume.toFixed(2));
        $("#proBar")[0].max = $("#myVideo")[0].duration;


        // console.log("yo"); 
        // 如果影片暫停，按下即撥放，按鈕改成暫停
        // 加[0]才能用
        if ($("#myVideo")[0].paused) { 
            $("#myVideo")[0].play(); 
            $("#playBtn").text("Pause"); 
        } 
        // 如果不是暫停，按下即暫停，按鈕改成撥放
        else { 
            $("#myVideo")[0].pause(); 
            $("#playBtn").text("Play"); 
        } }); 
        $("#fullBtn").on("click", function () { 
            $("#myVideo")[0].webkitEnterFullscreen(); 
        }); 

        function downVolume(){
            var myVideo = $("#myVideo")[0];
            if (myVideo.volume == 0){

            }
            else if (myVideo.volume < 0.1){
                myVideo.volume = 0;
            }
            else{
                myVideo.volume -= 0.1;
            }
            voldisplay.innerHTML=myVideo.volume.toFixed(2);
        }
        function upVolume(){
            var myVideo = $("#myVideo")[0];
            if (myVideo.volume == 0){

            }
            else if (myVideo.volume > 0.9){
                myVideo.volume = 1;
            }
            else{
                myVideo.volume += 0.1;
            }
         voldisplay.innerHTML=myVideo.volume.toFixed(2);

        }
        function update(){
            $("#timeDisplay").text(Math.floor($("#myVideo")[0].currentTime));
            // $("#timeDisplay").append("/"+Math.floor($("#myVideo")[0].duration)+"秒");
            $("#timeDisplay").append(`/${Math.floor($("#myVideo")[0].duration)}秒`);
            $("#proBar")[0].value =$("#myVideo")[0].currentTime;
        }
        function change(){
            $("#myVideo")[0].pause();
            $("#myVideo")[0].currentTime=$("#proBar")[0].value;
            $("#myVideo")[0].play();
        }

        $("#lowerVol").on("click",downVolume);
        $("#heightVol").on("click",upVolume);
        $("#myVideo").on("timeupdate",update);
        $("#proBar").on("change",change);
    }); 