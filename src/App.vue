<template>
  <div>
    <div class="addToDo">
      <md-field>
        <md-input v-model="currentTodo" @keydown.enter="addTodo()" placeholder="Add a 'To Do'"></md-input>
      </md-field>
    </div>

    <ul class="todos">
      <b-card-group deck>
        <li v-for="todo in todos" :key="todo.id">
          <b-card bg-variant="light" class="card">
            <b-card-body>
              <b-form-checkbox v-on:input="completeTask(completed)">
                Completed
              </b-form-checkbox>
            </b-card-body>
            <b-card-body v-if="!todo.editing" class="label-item" variant="outline-primary">
              {{ todo.label }}
            </b-card-body>
            <b-card-body v-if="todo.editing" class="label-item" variant="outline-primary">
              <md-input v-model="todo.label" @keydown.enter="editTodo(todo)" @keyup.esc="editTodo(todo)" @focusout="editTodo(todo)"></md-input>
            </b-card-body>
            <b-card-body class="btns">
              <b-button pill v-if="!todo.editing" variant="outline-info" class="md-fab md-mini md-plain edit-btn" @click="editTodo(todo)">
                <md-icon>edit</md-icon>
              </b-button>
              <b-button pill v-if="!todo.editing" variant="outline-danger" class="md-raised md-mini md-accent delete-btn" @click="removeTodo(todo)">
                X
              </b-button>
              <b-button pill v-if="todo.editing" variant="outline-info" class="md-raised md-mini md-accent save-btn" @click="editTodo(todo)">
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
      console.log(completed);
      completed ? false : true;
      console.log(completed);
      return completed;
    },

    editTodo(todo) {
      const index = this.todos.indexOf(todo);
      this.todos[index].editing = !this.todos[index].editing; 
    },

    addTodo() {
      this.todos.push({id: this.todos.length, label: this.currentTodo, editing: false});
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
