$(function(){
   $("button").on("click",go);
});

const maleKeywords = ["雄","強","志","俊",];
const femaleKeywords = ["萱","芬","佩","靜"];

let go = () => {
    var inputText=$("#userInput").val();
    const isMale = maleKeywords.some(thisElement => inputText.includes(thisElement));
    const isFemale = femaleKeywords.some(thisElement => inputText.includes(thisElement));
    //.some(條件) 有沒有true
    // debugger;
    if(isMale&&isFemale){
        $("h1").text("😊");
    }else if(isMale){
        $("h1").text("👨");
    }
    else if(isFemale){
        $("h1").text("👩");
    }else{
        $("h1").text("😎");
    }

};