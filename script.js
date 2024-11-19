var suanShi = ""
//设置变量
function AC(){
    var suanShi = document.getElementById("suanShi");
    suanShi.value = "";
}
//AC
function input(numberInput){
    var suanShiOld = document.getElementById("suanShi").value
    var suanShiNew = suanShiOld + "" + numberInput
    document.getElementById("suanShi").value = suanShiNew
}
function keydownCalculate(){
    if (event.keyCode == 13){
        calculate()
    }
}
/*
function calculate(){
    var inputElement = document.getElementById("suanShi")
        var suanShi = inputElement.value;
        try{
            eval(suanShi)
            if (jieGuo === undefined){
                alert("错误的算式")
            }
            catch (error){
                alert("错误的算式")
            }
        }
}
*/
function calculate() {
    var inputElement = document.getElementById("suanShi");
    var suanShi = inputElement.value;
    try {
        var jieGuo = eval(suanShi);
        if (jieGuo === undefined) {
            alert("错误的算式");
        } else {
            var setInput = suanShi + "=" + jieGuo
            inputElement.value = setInput
        }
    } catch (error) {
        alert("错误的算式，请检查输入！");
    }
}