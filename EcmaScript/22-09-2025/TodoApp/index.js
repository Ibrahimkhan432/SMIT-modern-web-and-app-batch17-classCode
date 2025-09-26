function addTask() {
    var todoData = document.getElementById("todoInput")
    var todoValue = todoData.value
    // console.log(todoValue);
    if (todoValue.trim() === "") {
        alert("Please Enter a Task")
    }

    var listItem = document.createElement("li")
    var list = document.createTextNode(todoValue)
    listItem.appendChild(list)
    // or
    // listItem.textContent = todoValue
    // console.log(listItem)


    var todoListData = document.getElementById("todo-list")
    todoListData.appendChild(listItem)
    todoData.value = ""

    // delete button
    var deleteBtn = document.createElement("button")
    var deleteText = document.createTextNode("Delete")
    // console.log(deleteBtn)

    deleteBtn.appendChild(deleteText)
    listItem.appendChild(deleteBtn)
    deleteBtn.setAttribute("class", "deleteBtn")

    // deleteBtn.onclick = function () {
    //     todoListData.removeChild(listItem)

    // }
    // another way to delete
    deleteBtn.addEventListener("click", function () {
        todoListData.removeChild(listItem)
    })

    // edit data
    var editBtn = document.createElement("button")
    editBtn.setAttribute("class", "edit")
    var editText = document.createTextNode("Edit")
    console.log(listItem.childNodes[0].nodeValue)
    editBtn.addEventListener("click", function () {
        var updateText = prompt(listItem.childNodes[0].nodeValue, todoValue)

        listItem.childNodes[0].nodeValue = updateText
        console.log(updateText)
    })
    editBtn.appendChild(editText)
    listItem.appendChild(editBtn)
    //apply set attribute for styling
    // editBtn.appendChild(ed)
}

// alert("text")
// prompt("enter prompt", "23456789")

//delete All
function deleteAll() {
    var deleteAll = document.getElementById("todo-list")
    deleteAll.innerHTML = ""
}