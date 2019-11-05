$('.btn').on('click', function (){
    var message = $('#txtarea').val();
    if(message === ""){
        alert("sorry, you can not enter empty todo")
    } else {
        var todo1 = todo(todolist.length, message)
        addToDo(todo1)
        $('#todos').append(`<div> ${message} <input class="checkbox" type= "checkbox" ></div>`);
        $('#txtarea').val("");
    }
    },   

function displayTodo(todo){
   var todoContainer= $('<div id= "todoContainer"></div>');
   var todoMessage= $(<div id="todoMsg"> ${todo.message} </div>);
   var completed= $(<input id= "chbx-${todo.id}" class="checkbox" type= "checkbox" onClick="loops(${todo.id})">);
   if(todo.completed){
       completed = $(<div>completed</div>);
   }
   todoContainer.append(todoMessage);
   todoContainer.append(completed);
   $('#todos').append(todoContainer);
}
function loops(id){
   $('#todos').html('');
   toggleCheck(id);
   for(var i = 0; i < todolist.length; i++){
       displayTodo(todolist[i]);
   }
}
