let addToDo=document.querySelector("#eter")
let ULElem=document.querySelector("#list")
let addTodoForm = document.querySelector(".add");
let iElem=document.querySelector("i")
console.log(iElem)

addTodoForm.addEventListener("submit", function (event) {
    event.preventDefault();
  });

addToDo.addEventListener("keydown",function(event){
    
  let newTodoValue=event.target.value.trim();
  
if(event.key==="Enter"){
    event.target.value=""
    if(newTodoValue){
        let NewSpan = document.createElement("span");
        let NewLi = document.createElement("li");
        let newTodoTrash = document.createElement('i')
        newTodoTrash.className = 'fa fa-trash-o delete'
        newTodoTrash.addEventListener("click",function(event){

            event.target.parentElement.remove();
        
        });
        
        NewSpan.innerHTML=newTodoValue
        NewLi.className ="list-group-item d-flex justify-content-between align-items-center"
        NewLi.append(NewSpan,newTodoTrash)
        ULElem.append(NewLi)

    }
    

    
}



})


