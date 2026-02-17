let todoList=[]
let item=localStorage.getItem('todoList');
  if(item!==null){
    todoList=JSON.parse(item);
    displayElement()
  }

function addItem(){
  let inputItem = document.querySelector('.add-display')
  let dateItem = document.querySelector('.date-display')

  let todoItem = inputItem.value
  let todoDate = dateItem.value
  todoList.push({item:todoItem , date: todoDate})
  inputItem.value = '';
  dateItem.value = '';

  localStorage.setItem('todoList',JSON.stringify(todoList))
  displayElement()
}

function displayElement(){
  let list = document.querySelector('.list')
  let newHtml =''
  for(let i=0; i < todoList.length; i++){
    let {item , date}= todoList[i]
    newHtml+=`
    
      <span>${item}</span>
      <span>${date}</span>
      <button  class="delete-button " onclick="todoList.splice(${i},1);
      displayElement()
      localStorage.setItem('todoList',JSON.stringify(todoList))">Delete</button>
    `
  }
  list.innerHTML = newHtml

}