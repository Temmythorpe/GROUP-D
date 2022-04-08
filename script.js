const form = document.querySelector("#form")
const todoUsername = "todo_username"

document.addEventListener('load', () => console.log('loaded'))
// form.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const username = document.getElementById("username").value
//     const password = document.getElementById("password").value

//     localStorage.setItem(todoUsername, username)

//     window.location.href = "/todo.html"
// })


function todoLoaded(){
    const username = localStorage.getItem(todoUsername)
    alert('Welcome ${username}')
}


document.querySelector('#push').onclick = function
 (){
    if(document.querySelector('#newtask input').
    value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#tasks').innerHTML
        += `
        <div class="task">
            <span id="taskname">
            ${document.querySelector('#newtask input').value}
        </span>
        <button class="delete">
        <i class='bx bxs-trash'></i>
        </button>
        </div>
        `;

        var current_tasks = document.
        querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        
        var tasks = document.querySelectorAll(".task");
            for(var i=0; i<tasks.length; i++){
                tasks[i].onclick = function(){
                    this.classList.toggle('completed');
                }
            }

            document.querySelector("#newtask input").
            value = "";


            var pendingNumb = document.querySelector(".pendingNumb");
            pendingNumb.textContent = i.length; 
    }
}

