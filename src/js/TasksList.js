class TasksList {
  constructor() {
    this.list = document.querySelector('.tasks-list');
    this.tasksArr = [...this.list.querySelectorAll('.task')];
    this.addListners();
  }

  addListners() {
    this.findAllTasks();
    this.tasksArr.forEach((node) => {
      node.querySelector('.task-done-btn').addEventListener('click', () => {
        node.classList.toggle('done');
      });

      node.querySelector('.delete_btn').addEventListener('click', () => {
        this.removeTask(node);
        this.checkEmptyList();
      });
    });
  }

  removeTask(task) {
    this.list.removeChild(task);
    this.tasksArr = this.tasksArr.filter((el) => el !== task);
    this.checkEmptyList();
  }

  findAllTasks() {
    this.tasksArr = [...this.list.querySelectorAll('.task')];
  }

  addTask(elem) {
    this.insertTask(elem);
    this.tasksArr.push(elem);
    this.checkEmptyList();
  }

  insertTask(elem) {
    this.list.insertAdjacentElement('beforeend', elem);
  }

  removeDoneTasks() {
    this.findAllTasks();
    this.tasksArr.forEach((node) => {
      if (node.classList.contains('done')) {
        this.removeTask(node);
      }
    });
  }

  removeCheckedTasks() {
    this.findAllTasks();
    this.tasksArr.forEach((node) => {
      if (node.querySelector('.task-check').checked) {
        this.removeTask(node);
      }
    });
  }

  removeAllTasks() {
    this.list.innerHTML = '';
    this.tasksArr = [];
    this.checkEmptyList();
  }

  checkEmptyList() {
    if (this.list.querySelectorAll('.task').length === 0) {
      this.list.innerHTML = '<div class="empty-list">Пусто</div>';
      return;
    }

    const emptyDiv = this.list.querySelector('.empty-list');
    if (emptyDiv) {
      this.list.removeChild(emptyDiv);
    }
  }

  checkAllTasks() {
    this.findAllTasks();
    this.tasksArr.forEach((node) => {
      const task = node;
      if (!task.classList.contains('done')) {
        task.classList.add('done');
      }
    });
  }
}

export default TasksList;
