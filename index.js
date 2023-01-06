let btnAddtask = document.querySelector('.btn-save');
let inputContent = document.querySelector('.content')
let btnClearAll = document.querySelector('.clear');
let btnClearTask = document.querySelector('.icon');
let btnChangeTask = document.querySelector('.change');
let num = document.querySelector('.pendingTask');
let clearInput = document.querySelector('.icon-clear');
let tasks = getTaskFromLocal()
renderTask(tasks)

btnAddtask.addEventListener('click', function() {
    if (!inputContent.value) {
        alert(' bạn chưa nhập gì cả')
        return false
    } 
    let tasks = getTaskFromLocal()
    let tasksID = this.getAttribute('id')
    let task = {name: inputContent.value}

    if (tasksID = 0 || tasksID) {
        tasks[tasksID] = task
        this.removeAttribute('id')
    }else {
        tasks.push(task)
    }

    
    inputContent.value = ''

    localStorage.setItem('tasks', JSON.stringify(tasks))
    inputContent
    renderTask(tasks)
    clearInput.classList.remove('show')
})
inputContent.onchange = (e) => {
    e.target;
}


function renderTask(tasks = []) {
    let content = '';
    tasks.forEach((task,index) => {
        content +=
        `<li><div class="task-name"><p>${task.name}</p></div><a class="change" onclick="editTask(${index})" href="#">Update</a><i onclick="deleteTask(${index})" class="fa-solid fa-trash icon"></i></li>`
    })
    document.querySelector('.todolist').innerHTML = content
    num.innerHTML = tasks.length
    
}

function editTask(id) {
    let tasks = getTaskFromLocal()
    if(tasks.length > 0) {
        inputContent.value = tasks[id].name
        btnAddtask.setAttribute('id',id)
    }else {

    }
}
function deleteTask(index) {
    if(confirm('xóa đấy nhé ')) {
        let tasks = getTaskFromLocal()
        tasks.splice(index,1)
        localStorage.setItem('tasks', JSON.stringify(tasks))
        renderTask(tasks)
    }
}
function getTaskFromLocal() {
    return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
}

btnClearAll.onclick = () => {
    if(confirm('chắc xóa hết các task chưa ?')) {
        let stasks = [];
        localStorage.setItem('tasks',JSON.stringify(stasks))
        renderTask(getTaskFromLocal())
    }
}

clearInput.onclick = () => {
    inputContent.value = ''
    clearInput.classList.remove('show')
}

inputContent.addEventListener("input",() => {
    clearInput.classList.add('show')
})

const handleInputChange = (e) => {
    if (e.target.value.length > 0 && e.target.value === ' ') {
        return;
    }
}






