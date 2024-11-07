<template>
  <div class="container">
    <h1 class="my-4 text-center">Lista de Tareas</h1>
    <button class="btn btn-success mb-3" @click="fetchTasks">Cargar Tareas</button>
    
    <div v-if="tasks.length > 0">
      <div v-for="task in tasks" :key="task.id" class="card my-2">
        <div class="card-body d-flex justify-content-between align-items-center">
          <div>
            <h5 :class="{ 'text-decoration-line-through': task.completed }">{{ task.todo }}</h5>
            <span class="badge" :class="task.completed ? 'bg-success' : 'bg-warning'">
              {{ task.completed ? 'Completada' : 'Pendiente' }}
            </span>
          </div>
          <div>
            <button class="btn btn-outline-primary me-2" @click="toggleTaskCompletion(task)">
              {{ task.completed ? 'Desmarcar' : 'Completar' }}
            </button>
            <button class="btn btn-outline-danger" @click="deleteTask(task)">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "TaskList",
    data() {
      return {
        tasks: [], // Almacenamiento local de las tareas traídas de la API
      };
    },
    methods: {
      // Llamada para obtener las tareas desde la API externa
      async fetchTasks() {
        try {
          const response = await axios.get("https://dummyjson.com/todos"); // API de DummyJSON
          this.tasks = response.data.todos; 
        } catch (error) {
          console.error("Error al cargar tareas:", error);
        }
      },
  
      // Cambiar el estado de una tarea (completada/no completada)
      toggleTaskCompletion(task) {
        task.completed = !task.completed;
      },
  
      // Eliminar la tarea seleccionada
      deleteTask(task) {
        this.tasks = this.tasks.filter((t) => t.id !== task.id);
      },
    },
  };
  </script>
  
  <style scoped>

  </style>