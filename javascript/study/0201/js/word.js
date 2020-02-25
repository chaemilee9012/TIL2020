function word(){
    var firstNameText = document.getElementsByName('firstName')[0].value;
    var answerText = document.getElementsByName('answer')[0].value;

    if (answerText=="") {
        alert("답을 입력하세요.");
    }
    else if (firstNameText.charAt(firstNameText.length-1)===answerText.charAt(0)){
        document.getElementsByName('firstName')[0].value = answerText;
        document.getElementsByName('answer')[0].value = "";
        document.getElementsByName('tArea')[0].value += firstNameText+" ";
        alert("축하");
    }
    else{
        alert("땡");
    }
}