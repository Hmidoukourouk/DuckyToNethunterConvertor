var textval;
var finalResult
var length;
var firstCharacter;

var temp;

var winR = 'GUI r\nDELAY 500\n';
var powershellLaunchCommand = '[console]::WindowWidth=1; [console]::WindowHeight=1; [console]::BufferWidth=[console]::WindowWidth';

function Translate(){
    finalResult = Conversion(false);
    if (document.getElementById("powershell").checked){
        finalResult = winR +"STRING powershell\nENTER\nDELAY 1000\n"+ Conversion(true,powershellLaunchCommand)+"\nENTER\n"+ Conversion();
    }
    document.getElementById("result").innerHTML = finalResult;
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

//powershell -noexit -command "[console]::WindowWidth=1; [console]::WindowHeight=1; [console]::BufferWidth=[console]::WindowWidth"