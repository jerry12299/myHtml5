$(function () { 
    $("[type='color']").on("change",showcolor);

})

function showcolor(){
    console.log(this.value);
    $('body').css("background-color",this.value);
    // document.body.style.backgroundColor=this.value;
    
}