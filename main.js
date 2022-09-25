setTimeout(enterFun, 0100);

function enterFun() {
    document.getElementById("milestone").style=("height:400px;");
    document.getElementById("milestone2").style=("height:400px;");
    document.getElementById("milestone3").style=("height:400px;");
    document.getElementById("milestone4").style=("height:400px;");
    document.getElementById("milestone5").style=("height:400px;");
    document.getElementById("milestone6").style=("height:400px;");
    document.getElementById("milestone7").style=("height:400px;");
    document.getElementById("milestone8").style=("height:400px;");
}

function views() {
    document.getElementById("milestone").style=("height:0px;");
    document.getElementById("milestone2").style=("height:0px;");
    document.getElementById("milestone3").style=("height:0px;");
    document.getElementById("milestone4").style=("height:0px;");
    document.getElementById("milestone5").style=("height:0px;");
    document.getElementById("milestone6").style=("height:0px;");
    document.getElementById("milestone7").style=("height:0px;");
    document.getElementById("milestone8").style=("height:0px;");
    setTimeout(enterFun, 0100);
    document.getElementById("s1").style=("display:block;");
    document.getElementById("s2").style=("display:block;");
    document.getElementById("s3").style=("display:block;");
    document.getElementById("v1").style=("display:none;");
    document.getElementById("v2").style=("display:none;");
    document.getElementById("v3").style=("display:none;");
    document.getElementById("v4").style=("display:none;");
    document.getElementById("v5").style=("display:none;");
    document.getElementById("b2").style=("background-color:purple; color:white;");
    document.getElementById("b1").style=("background-color:lightgrey; color:black;");
}

function subs() {
    setTimeout(enterFun, 0100);
    document.getElementById("milestone").style=("height:0px;");
    document.getElementById("milestone2").style=("height:0px;");
    document.getElementById("milestone3").style=("height:0px;");
    document.getElementById("milestone4").style=("height:0px;");
    document.getElementById("milestone5").style=("height:0px;");
    document.getElementById("milestone6").style=("height:0px;");
    document.getElementById("milestone7").style=("height:0px;");
    document.getElementById("milestone8").style=("height:0px;");
    document.getElementById("s1").style=("display:none;");
    document.getElementById("s2").style=("display:none;");
    document.getElementById("s3").style=("display:none;");
    document.getElementById("v1").style=("display:block;");
    document.getElementById("v2").style=("display:block;");
    document.getElementById("v3").style=("display:block;");
    document.getElementById("v4").style=("display:block;");
    document.getElementById("v5").style=("display:block;");
    document.getElementById("b1").style=("background-color:purple; color:white;");
    document.getElementById("b2").style=("background-color:lightgrey; color:black;");
}