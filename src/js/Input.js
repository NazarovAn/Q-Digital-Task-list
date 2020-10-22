import Task from './Task';
import TasksList from './TasksList';

class Input {
  constructor() {
    this.tasksList = new TasksList();
    this.inputBox = document.querySelector('.input-box');
    this.input = this.inputBox.querySelector('.task-input');
    this.addBtn = this.inputBox.querySelector('.add_btn');
    this.removeAllBtn = this.inputBox.querySelector('.remove-all_btn');
    this.removeCheckedBtn = this.inputBox.querySelector('.remove-checked_btn');
    this.removeBtn = this.inputBox.querySelector('.remove_btn');
    this.doneBtn = this.inputBox.querySelector('.all-done_btn');
    this.init();
  }

  init() {
    this.addListners();
  }

  addListners() {
    this.addBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      this.addTask();
      this.clearInput();
    });

    this.removeAllBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      this.tasksList.removeAllTasks();
    });

    this.removeBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      this.tasksList.removeDoneTasks();
    });

    this.removeCheckedBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      this.tasksList.removeCheckedTasks();
    });

    this.doneBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      this.tasksList.checkAllTasks();
    });
  }

  addTask() {
    const taskText = this.input.value;
    if (taskText.length) {
      const newTask = new Task(taskText, this.tasksList);
      this.tasksList.addTask(newTask.taskEl);
    }
  }

  clearInput() {
    this.input.value = '';
  }
}

export default Input;
