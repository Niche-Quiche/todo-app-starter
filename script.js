
function completedItemsList(item) {
    const newListItem = document.createElement("li");
    newListItem.innerHTML = item;
    

    const newInput = document.createElement("input");


    newInput.classList.add("form-check-input"); 
    newInput.setAttribute("type", "checkbox");
    newListItem.appendChild(newInput)
    newListItem.className = "list-group-item"

    
    const list = document.querySelector("#complete-items")
    
    // append to list
    list.appendChild(newListItem)
}

completedItemsList(todoItems[0].title)
completedItemsList(todoItems[1].title)
completedItemsList(todoItems[2].title)


function incompletedItemsList(item) {
    const newListItem = document.createElement("li");
    newListItem.innerHTML = item;

    const newInput = document.createElement("input");

    newInput.classList.add("form-check-input"); 
    newInput.setAttribute("type", "checkbox");
    newListItem.appendChild(newInput)
    newListItem.className = "list-group-item"

    const list = document.querySelector("#incomplete-items")
    
    // append to list
    list.appendChild(newListItem)
}

incompletedItemsList(todoItems[0].title)
incompletedItemsList(todoItems[1].title)
incompletedItemsList(todoItems[2].title)


const newItemForm = document.querySelector("todoItems.title")

    newItemForm.addEventListener('submit', function(event) {
        event.preventDefault()

    })
