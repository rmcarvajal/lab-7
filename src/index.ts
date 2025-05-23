import task from "./components/task";



customElements.define('task-marker',task);

function addtask() {
    const taskInput = document.getElementById("taskInput");
    const taskValue = taskInput! as HTMLInputElement
    console.log(taskValue)
}

document.getElementById("taskButton")!.onclick= addtask