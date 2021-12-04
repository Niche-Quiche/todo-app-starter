// add items marked 'completed' to the completed section of the to do app

function addCompleted (task) {
    const li = document.createElement("li");
    // assign task to li 
    li.innerHTML = task;
    //find completed items lists with id
    const ul = document.querySelector('#complete-items')
    ul.appendChild(li);
}

addCompleted(todoItems[0].title)
addCompleted(todoItems[1].title)
addCompleted(todoItems[2].title)


// add items marked 'incomplete' to the completed section of the to do app

function addInCompleted (task) {
    const li = document.createElement("li");
    // assign task to li 
    li.innerHTML = task;
    //find completed items lists with id
    const ul = document.querySelector('#incomplete-items')
    ul.appendChild(li);
}

addInCompleted(todoItems[3].title)
addInCompleted(todoItems[4].title)
addInCompleted(todoItems[5].title)