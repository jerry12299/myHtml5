$(function () {
    $("#inputFile").on("change",function(e){
        let thisImage = e.target.files[0];
        imagesrc = URL.createObjectURL(thisImage);
        $("#dropbox").css("background-image","url("+imagesrc+")");
        $("#dropbox3").css("background-image","url("+imagesrc+"),url("+imagesrc2+")");

    });
    $("#inputFile2").on("change",function(e){
        let thisImage = e.target.files[0];
        imagesrc2 = URL.createObjectURL(thisImage);
        $("#dropbox2").css("background-image","url("+imagesrc2+")");
        $("#dropbox3").css("background-image","url("+imagesrc+"),url("+imagesrc2+")");
    });
})