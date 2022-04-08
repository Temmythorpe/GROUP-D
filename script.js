const form = document.querySelector("#form");
const todoUsername = "todo_username";

if (form != null)
  form.addEventListener("submit", (e) => {
    try {
      e.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      localStorage.setItem(todoUsername, username);

      window.location.href = "/todo.html";
    } catch (error) {
      console.log(error);
    }
  });

function todoLoaded() {
  const username = localStorage.getItem(todoUsername);
  alert(`Welcome ${username}`);
}

const push = document.querySelector("#push");

var pendingNumb = document.querySelector(".pendingNumb");
var todo_count = 0;

if (push)
  push.onclick = function () {
    if (document.querySelector("#newtask input").value.length == 0) {
      alert("Please Enter a Task");
    } else {
      document.querySelector("#tasks").innerHTML += `
        <div class="task">
            <span id="taskname">
            ${document.querySelector("#newtask input").value}
        </span>
        <button class="delete">
        <i class='bx bxs-trash'></i>
        </button>
        </div>
        `;

      todo_count += 1;

      var current_tasks = document.querySelectorAll(".delete");
      for (var i = 0; i < current_tasks.length; i++) {
        current_tasks[i].onclick = function () {
          this.parentNode.remove();
        };
      }

      var tasks = document.querySelectorAll(".task");
      for (var i = 0; i < tasks.length; i++) {
        tasks[i].onclick = function () {
          this.classList.toggle("completed");
        };
      }

      document.querySelector("#newtask input").value = "";

      pendingNumb.textContent = todo_count;
    }
  };
