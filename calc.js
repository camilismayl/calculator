function insert(num){
    document.forms[0].textview.value = document.forms[0].textview.value + num;
}
function equal(){
    document.forms[0].textview.value = eval( document.forms[0].textview.value);
}
function clean(){
    document.forms[0].textview.value = "";
}
function back(){
    var a = document.forms[0].textview.value;
    document.forms[0].textview.value = a.substring(0,a.length-1);
}
