let mapArray, ctx,currentImgMain;
let imgMountain,imgMain,imgEnemy;
// mapArray 地圖格子
// ctx  HTML5 Canvas用
// currentImageMainX,currentImageMainY 主角座標 
// imgMountain,imgMain,imgEnemy 人物圖片
const gridLength = 200;
// 初始化


function loadImages(sources, callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;
    // get num of sources
    for(var src in sources) {
      numImages++;
    }
    for(var src in sources) {
      images[src] = new Image();
      images[src].onload = function() {
        if(++loadedImages >= numImages) {
          callback(images);
        }
      };
      images[src].src = sources[src];
    }
  }


$(function(){
    // 0-可以走 1-障礙物 2-終點 3-敵人
mapArray =[
    [0,1,1],
    [0,0,0],
    [3,1,2]
];

ctx = $("#myCanvas")[0].getContext("2d");
// 把主角擺上畫面
imgMain = new Image();
imgMain.src = "images/spriteSheet.png";

currentImgMain = {
    "x":0,
    "y":0
};
imgMain.onload = function(){
    ctx.drawImage(imgMain,0,0,80,130,currentImgMain.x,currentImgMain.y,gridLength,gridLength);
};

var sources = {
    mountain: 'images/material.png',
    enemy: 'images/Enemy.png'
  };

  loadImages(sources, function (images) {
    for (var x in mapArray) {
      for (var y in mapArray[x]) {
        if (mapArray[x][y] == 1) {
          ctx.drawImage(images.mountain, 32, 65, 32, 32, y * gridLength, x * gridLength, gridLength, gridLength);
        } else if (mapArray[x][y] == 3) {
          ctx.drawImage(images.enemy, 7, 40, 104, 135, y * gridLength, x * gridLength, gridLength, gridLength);
        }
      }
    }
  });



// imgMountain = new Image();
// imgMountain.src = "images/material.png";
// imgEnemy = new Image();
// imgEnemy.src = "images/Enemy.png";

// imgMountain.onload = function(){
//     imgEnemy.onload = function(){
//         for(var x in mapArray){
//             for(var y in mapArray[x]){
//                 if(mapArray[x][y]==1){
//                     ctx.drawImage(imgMountain,32,65,32,32,y*gridLength,x*gridLength,gridLength,gridLength);
//                 }
//                 else if(mapArray[x][y]==3) {
//                     ctx.drawImage(imgEnemy,7,40,104,135,y*gridLength,x*gridLength,gridLength,gridLength);
//                 }
//             }
//         }
//     }
// }



});

$(document).on("keydown",function(event){
    // debugger;
let targetImg, targetBlock,cutImagePositionX;
targetImg = { //主角的目標座標
"x":-1,
"y":-1
};
targetBlock = { //主角的目標(對應2維陣列)
    "x":-1,
    "y":-1
};
event.preventDefault();
// console.log(event.code);
switch(event.code){
    case "ArrowLeft":
        targetImg.x = currentImgMain.x - gridLength;
        targetImg.y = currentImgMain.y;
        cutImagePositionX=175;
        break;
    case "ArrowUp":
        targetImg.x = currentImgMain.x;
        targetImg.y = currentImgMain.y - gridLength;
        cutImagePositionX=355;
        break;
    case "ArrowRight":
        targetImg.x = currentImgMain.x + gridLength;
        targetImg.y = currentImgMain.y;
        cutImagePositionX=540;
        break;
    case "ArrowDown":
        targetImg.x = currentImgMain.x;
        targetImg.y = currentImgMain.y + gridLength;
        cutImagePositionX=0;
        break;
    default:
        return;
}

if(targetImg.x<=400&&targetImg.x>=0&&targetImg.y<=400&&targetImg.y>=0){
    targetBlock.x=targetImg.y/gridLength; //座標轉成陣列[][]
    targetBlock.y=targetImg.x/gridLength;
}else{
    targetBlock.x=-1;
    targetBlock.y=-1;
}
ctx.clearRect(currentImgMain.x,currentImgMain.y,gridLength,gridLength);

if(targetBlock.x!=-1&&targetBlock.y!=-1){
    switch(mapArray[targetBlock.x][targetBlock.y]){
        case 0:
            currentImgMain.x = targetImg.x;
            currentImgMain.y = targetImg.y;
            break;
        case 1:
            $("#talkBox").text("吃竹筍");
            currentImgMain.x = targetImg.x;
            currentImgMain.y = targetImg.y;
            break
        case 2:
            $("#talkBox").text("抵達終點");
            currentImgMain.x = targetImg.x;
            currentImgMain.y = targetImg.y;
            break
        case 3:
            $("#talkBox").text("吃人");
            currentImgMain.x = targetImg.x;
            currentImgMain.y = targetImg.y;
            break
    }
}else{
    $("#talkBox").text("邊界");
}

ctx.drawImage(imgMain,cutImagePositionX,0,80,130,currentImgMain.x,currentImgMain.y,gridLength,gridLength);



});