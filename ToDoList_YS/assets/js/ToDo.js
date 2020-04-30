// When clicked, turn gray
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Grab the entered text
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var enteredText=$(this).val();
        // clear the input box
        $(this).val(""); //dunno why $(this).value=""; does not work
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+enteredText+"</li>");
    }
});

// When trash can clicked, deleted
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500,function(){
        $(this).remove(); //this refers to this.parent instead of this
    });
    event.stopPropagation();
});