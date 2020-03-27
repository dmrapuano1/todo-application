<template>
  <div>
    <div class="addToDo">
      <md-field>
        <md-input autoFocus={true} v-model="currentTodo" @keydown.enter="addTodo()" placeholder="Add a 'To Do'"></md-input>
      </md-field>
    </div>

    <ul class="todos">
      <b-card-group deck>
        <li v-for="todo in todos" :key="todo.id">
          <b-card bg-variant="light" class="card" v-if="!todo.completed">
            <b-card-body>
              <b-form-checkbox>
                Completed
              </b-form-checkbox>
            </b-card-body>
            <b-card-body v-if="!todo.editing" class="label-item" variant="outline-primary">
              {{ todo.label }}
            </b-card-body>
            <b-card-body v-if="todo.editing" class="label-item" variant="outline-primary">
              <md-input v-model="todo.label" @keydown.enter="exitEdit(todo)" @focusout="exitEdit(todo)"></md-input>
            </b-card-body>
            <b-card-body class="btns">
              <b-button pill v-if="!todo.editing" variant="outline-info" class="md-fab md-mini md-plain edit-btn" @click="editTodo(todo)">
                <md-icon>edit</md-icon>
              </b-button>
              <b-button pill v-if="!todo.editing" variant="outline-danger" class="md-raised md-mini md-accent delete-btn" @click="removeTodo(todo)">
                X
              </b-button>
              <b-button pill v-if="todo.editing" variant="outline-info" class="md-raised md-mini md-accent save-btn" @click="exitEdit(todo)">
                Save
              </b-button>
            </b-card-body>
          </b-card>
        </li>
      </b-card-group>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      currentTodo: ''
    };
  },
  methods: {

    completeTask(completed) {
      const index = this.todos.indexOf(completed);
      this.todos[index].completed = !this.todos[index].completed; 
    },

    editTodo(todo) {
      const index = this.todos.indexOf(todo);
      this.todos[index].editing = !this.todos[index].editing; 
    },

    exitEdit(todo) {
      const index = this.todos.indexOf(todo);
      this.todos[index].editing = false;
    },

    addTodo() {
      this.todos.push({id: this.todos.length, label: this.currentTodo, ccompleted: false, editing: false});
      this.currentTodo = '';
    },

    removeTodo(todo) {
      var index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    }
  }
};
</script>

<style>
body {
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsnl_w2gJKLpAcUS8f_85su6aU0rIzED25Epcg81R5cvNUpyWO");
}

.todos {
  list-style-type: none;
}

.card {
  margin-top: 5%;
}

.addToDo {
  margin-left: 3%;
  margin-right: 75%;
}

.label-item {
  display: flex;
  justify-content: center;
  font-size: 25px;
  text-align: center;
}

.btns {
  text-align: right;
}

.delete-btn, edit-btn {
  display: flex;
  justify-content: flex-end;
}
</style>
