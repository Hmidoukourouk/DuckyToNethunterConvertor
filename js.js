var textval;
var finalResult
var length;
var firstCharacter;

function Conversion() {
    textval = document.getElementById("textArea").value;
    length = textval.length;

    if (length == 0) {
        alert("fréro rentre un truc la");
    } else {
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
    }
    finalResult = finalResult.replaceAll("├ÙM", " ");
    document.getElementById("result").innerHTML = finalResult;
}

function Copie() {
    finalResult = document.getElementById("result");
    finalResult.select();
/* Copy the text inside the text field */
    document.execCommand("copy");
}