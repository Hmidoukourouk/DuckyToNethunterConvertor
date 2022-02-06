var textval;
var finalResult
var length;
var firstCharacter;

function test(){
    textval = document.getElementById("textArea").value;
    length = textval.length;
    finalResult = "";
    firstCharacter = true;

    if (length == 0){
        alert("fréro rentre un truc la");
    }else {
        for (let index = 0; index < length; index++) {
            if (textval.charAt(index)==" "){
                finalResult = finalResult + "<br> SPACE <br>";
                firstCharacter = true;
            }else{
                if (firstCharacter == true){
                    finalResult = finalResult + "STRING ";
                    firstCharacter = false;
                }
                finalResult = finalResult + textval.charAt(index);
            }
        }
    }
    finalResult = finalResult.replaceAll("\n", "<br> ENTER <br> STRING ");
    document.getElementById("result").innerHTML = finalResult;
}