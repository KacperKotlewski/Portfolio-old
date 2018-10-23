var onloader = new Onloader();
var mobile = new Mobile();
var visibilityElement = new VisibilityElement(mobile);

window.onload = function() {
    onloader.mobile(mobile);
    visibilityElement.MakeMenuInvisable();
    visibilityElement.MakeContentVisable();
    Resize();
    GetScreenSize();
}

window.onresize = function(){
    Resize();
} 
function Resize() {
    GetScreenSize();
    let sizeTemp = document.body.offsetWidth;
    if(sizeTemp>=1000) {
        visibilityElement.MakeMenuVisable();
        visibilityElement.MakeContentVisable();
    } else {
        if(visibilityElement.CheckVisibilityOfMenu() && visibilityElement.CheckVisibilityOfContent()) {
            visibilityElement.MakeMenuInvisable();
        }
    }
}

function PressMenuButton() {
    visibilityElement.SwitchBetweenMenuAndContent();
}

function GetScreenSize() {
    let con = document.getElementById("content");
    var size = (con.offsetWidth <= con.offsetHeight ? con.offsetWidth : con.offsetHeight);
    var boxSize=size;
    for(var i = 1; i<200; i++) {
        let tempSize = size/i;
        if(tempSize>200) {
            boxSize=tempSize;
            countOfBox=i;
        }
        else break;
    }

    let width = con.offsetWidth;
    var countOfBox=0;
    while(width>0) {
        width -= boxSize;
        if(width>0)countOfBox++;
    }

    let sideMargin = (con.offsetWidth-(boxSize)*countOfBox)/(countOfBox*2);
    let marginSize=boxSize/20;
    console.log(sideMargin+" "+con.offsetWidth+" "+(boxSize+sideMargin*2)*countOfBox);
    
    boxSize -= (marginSize*2);

    let fallowed = document.getElementsByClassName("fallowed");
    
    for(let i = 0; i<fallowed.length; i++) {
        fallowed[i].style.width = boxSize+"px";
        fallowed[i].style.height = boxSize+"px";
        fallowed[i].style.margin = marginSize+"px";
        if(sideMargin>marginSize && sideMargin<(boxSize+marginSize*2)) {
            fallowed[i].style.marginLeft = sideMargin+"px";
            fallowed[i].style.marginRight = sideMargin+"px";
        }
        fallowed[i].style.display = "block";
    }
}