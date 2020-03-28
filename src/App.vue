<template>
  <!-- Start of HTML code -->
  <div>
    <!-- Text entry field -->
    <div class="addToDo">
      <md-field>
        <!-- Sets autoFocus to have curser here on load, and submit on enter -->
        <md-input autoFocus={true} v-model="currentTodo" @keydown.enter="addTodo()" placeholder="Add a 'To Do'"></md-input>
      </md-field>
    </div>

    <!-- UI for all todo cards -->
    <ul class="todos">
      <b-card-group deck>
        <!-- Code that loads when new todo is added -->
        <li v-for="todo in todos" :key="todo.id">
          <b-card bg-variant="light" class="card">
            <!-- Completed checkbox -->
            <b-card-body>
              <b-form-checkbox>
                Completed
              </b-form-checkbox>
            </b-card-body>
            <!-- Text display if not in editing => Displays what user entered only -->
            <b-card-body v-if="!todo.editing" class="label-item" variant="outline-primary">
              {{ todo.label }}
            </b-card-body>
            <!-- Display if in editing => Displays what user entered plus text entry nox to change content -->
            <b-card-body v-if="todo.editing" class="label-item" variant="outline-primary">
              <md-input v-model="todo.label" @keydown.enter="exitEdit(todo)" @focusout="exitEdit(todo)"></md-input>
            </b-card-body>
            <b-card-footer class="btns">
              <!-- Edit button to display when editing = false -->
              <b-button pill v-if="!todo.editing" variant="outline-info" class="md-fab md-mini md-plain edit-btn" @click="editTodo(todo)">
                <md-icon>edit</md-icon>
              </b-button>
              <!-- Button to run delete todo => only renders if editing = false -->
              <b-button pill v-if="!todo.editing" variant="outline-danger" class="md-raised md-mini md-accent delete-btn" @click="removeTodo(todo)">
                X
              </b-button>
              <!-- Button to return view to !editing => only renders if editing = true -->
              <b-button pill v-if="todo.editing" variant="outline-info" class="md-raised md-mini md-accent save-btn" @click="exitEdit(todo)">
                Save
              </b-button>
            </b-card-footer>
          </b-card>
        </li>
      </b-card-group>
    </ul>
  </div>
</template>

<script>

//Start of JavaScript Code
export default {
  data() {
  // Returns todos to render in UI
    return {
      todos: [],
      currentTodo: ''
    };
  },
  methods: {

    // Edits todo text
    editTodo(todo) {
      //Finds active todo (one that was clicked) to edit only that one
      const index = this.todos.indexOf(todo);
      //Changes states from editing to !editing or vice versa
      this.todos[index].editing = !this.todos[index].editing; 
    },

    // Exits edit mode
    exitEdit(todo) {
      //Finds active todo
      const index = this.todos.indexOf(todo);
      //Sets editing to !editing to display original content
      this.todos[index].editing = false;
    },

    //Adds todo to UI
    addTodo() {
      //Todos are set as array, so pushes new todo into array
      this.todos.push({id: this.todos.length, label: this.currentTodo, ccompleted: false, editing: false});
      this.currentTodo = '';
    },

    //Deletes todo
    removeTodo(todo) {
      //Finds active todo
      var index = this.todos.indexOf(todo);
      //Removes todo from array of todos
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
  display: inline-block;
}
</style>
