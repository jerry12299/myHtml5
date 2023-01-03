$(function () { 
    $("[type='checkbox']").on("change",updata);


})
function updata(){
    // debugger;
    let hasChecked = 0;
    for(let x=0;x<$("[type='checkbox']").length;x++){
        if($("[type='checkbox']")[x].checked){
            hasChecked += 1;
        }
    }
    $("meter").attr("min",0);
    $("meter").attr("max",$("[type='checkbox']").length);
    $("meter").attr("value",hasChecked);
    // $("progress").attr("min",0);
    // $("progress").attr("max",$("[type='checkbox']").length);
    // $("progress").attr("value",hasChecked);
    $("progress").attr("value",hasChecked/$("[type='checkbox']").length);
    $("#myrange").attr("max",$("[type='checkbox']").length);
    $("#myrange").attr("value",hasChecked);

}