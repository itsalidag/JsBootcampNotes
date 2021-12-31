var num = 10;
$("h1").text(num)




$("#goDown").on("click", function(){


    if(num>0){
        num -=1;
        $("h1").text(num);
    }else{
        $("h1").text("count is over.");
        $("#cDownGif").attr("src", "images/cDown.gif")
        
    }
    

});


$("#reset").on("click", function(){
    num = 10;
    $("h1").text(num);
    $("#cDownGif").attr("src", "images/agaion.gif")
})