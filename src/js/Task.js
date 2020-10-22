class Task {
  constructor(text, taskList) {
    this.taskList = taskList;
    this.text = text;
    this.done = 'not-done';
    this.taskEl = null;
    this.createTask();
    this.addListners();
  }

  addListners() {
    this.taskEl.querySelector('.task-done-btn').addEventListener('click', () => {
      this.taskEl.classList.toggle('done');
    });

    this.taskEl.querySelector('.delete_btn').addEventListener('click', () => {
      this.taskList.removeTask(this.taskEl);
    });
  }

  createTask() {
    const taskEl = document.createElement('div');
    taskEl.className = 'task';
    taskEl.innerHTML = `
      <input type="checkbox" class="task-check">
      <span class="task-text">${this.text}</span>
      <div class="task_btn_box">
        <button class="task-done-btn task_btn">Выполнено</button>
        <button class="delete_btn task_btn">&times;</button>
      </div>
    `;
    this.taskEl = taskEl;
  }
}

export default Task;
