function select(){
    let element=document.getElementById("text");
    let selectText='';
    if(window.getSelection){
        selectText=window.getSelection();
        element.innerText=selectText;

    }
    else if(document.getSelection){
        selectText=document.getSelection();
        element.innerText=selectText;
    }
    else if (document.selection) {
        selectedText = 
        document.selection.createRange().text;
        element.innerText=selectText;
    } else {
        element.innerText="abc";
    }
}