var textval;
var finalResult
var length;
var firstCharacter;

var temp;

var winR = 'GUI r\nDELAY 500\n';
var powershellMinifiedLaunchCommand = '[console]::WindowWidth=1; [console]::WindowHeight=1; [console]::BufferWidth=[console]::WindowWidth';


function Translate(){
    finalResult = Conversion(false);
    if (document.getElementById("powershell").checked && !document.getElementById("powershellMax").checked){
        finalResult = winR +"STRING powershell\nENTER\nDELAY 1000\n"+ Conversion(true,powershellMinifiedLaunchCommand)+"\nENTER\n"+ Conversion();
    }else if(!document.getElementById("powershell").checked && document.getElementById("powershellMax").checked){
        finalResult = winR +"STRING powershell\nENTER\nDELAY 1000\n"+ Conversion();
    }else if (document.getElementById("powershell").checked && document.getElementById("powershellMax").checked){
        alert("coche pas les 2");
    }
    SendToWebsite(finalResult);
}

function SendToWebsite(text){
    document.getElementById("result").innerHTML = text;
}

function Conversion(keeping,val) {
    if (keeping){
        textval = val;
    }else{
        textval = document.getElementById("textArea").value;
    }
    
    length = textval.length;

    if (length == 0) {
        textval = document.getElementById("textArea").placeholder;
    }
        finalResult = "";
        firstCharacter = true;
        textval = textval.replaceAll("\n", "\nENTER\nSTRING├ÙM");
        textval = textval.replaceAll("⠀", "\nENTER\nSTRING├ÙM");
        length = textval.length;
        for (let index = 0; index < length; index++) {
            if (textval.charAt(index) == " ") {
                finalResult = finalResult + "\nSPACE\n";
                firstCharacter = true;
            } else {
                if (firstCharacter == true) {
                    finalResult = finalResult + "STRING├ÙM";
                    firstCharacter = false;
                }
                finalResult = (finalResult + textval.charAt(index));
            }
        }
    
    finalResult = finalResult.replaceAll("├ÙM", " ");
    return finalResult;
}

function Copie() {
    finalResult = document.getElementById("result");
    finalResult.select();
/* Copy the text inside the text field */
    document.execCommand("copy");
}

function WallpaperChanger(){
    var url = document.getElementById("url").value;
    var outputName = document.getElementById("outputName").value;
    var delay = document.getElementById("delay").value;
    
    SendToWebsite(winR +"STRING powershell\nENTER\nDELAY "+delay+"\nSTRING curl\nSPACE\nSTRING "+url+"\nSPACE\nSTRING -O\nSPACE\nSTRING Desktop\\"+ outputName +"\nSHIFT ENTER\nSTRING exit\nENTER\nWINDOWS d\nDELAY "+delay*3+"\nSTRING "+outputName+"\nSHIFT F10\nDELAY "+delay*0.5+"\nSTRING b");
}

//powershell -noexit -command "[console]::WindowWidth=1; [console]::WindowHeight=1; [console]::BufferWidth=[console]::WindowWidth"