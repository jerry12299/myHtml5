$(function () {
    $("#dropbox").on("dragenter", dragenter);
    $("#dropbox").on("dragleave", dragleave);
    $("#dropbox").on("dragover", dragover);
    $("#dropbox").on("drop", drop);

})

function dragenter() {
    $("#dropbox").css("background-color", "red");
    $("#dropbox").text("Drop it!");

}

function dragleave() {
    $("#dropbox").css("background-color", "lightblue");
    $("#dropbox").text("Come here");

}
function dragover(e) {
    e.preventDefault();
}
function drop(e) {
    e.preventDefault();
    // debugger;
    let files = e.originalEvent.dataTransfer.files;
    if(files.length==0){
        return false;
    }
    convert(files[0]);

}

function convert(file){
    // debugger;
    // /text.*/ 判斷type *後面接任意字串
    if(!file.type.match(/text.*/)){
        alert('請放文字檔');
        dragleave();
        return false;
    }
    let reader = new FileReader();
    reader.onloadend = function(){
        let s =reader.result;
        // $("#preview").text(s);
        $("#preview").append( s + '\n');
        dragleave();
    };

    reader.readAsText(file);

}

