doSomething()
{
 $( document ).ready(function() {
                $("#sendButton").click(function(){
                    var val = $('#textbox').val();
                    $('<li class = "list-group-item">'+val+'</li>').appendTo('#ulList');
                });
            });  
}