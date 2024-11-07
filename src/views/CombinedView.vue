<template>
    <div>
        <h1>Lista de Tareas</h1>
        <!-- Esta seccion es una combinación de las dos vistas anteriores -->
        <h3>Agregar Nueva Tarea</h3>
            <input v-model="newTask" placeholder="Escribe una nueva tarea" />
            <button @click="addTask">Agregar Tarea</button>
    </div>
    

    <div>
        <button @click="fetchTasks">Cargar Tareas desde la API</button>
    </div>
    
    <div v-if="tasks.length > 0">
            <h3>Lista de Tareas</h3>
            <div v-for="task in tasks" :key="task.id">
                <h5 :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">{{ task.todo }}</h5>
                <span>{{ task.completed ? 'Completada' : 'Pendiente' }}</span>
                <button @click="toggleTaskCompletion(task)">
                    {{ task.completed ? 'Desmarcar' : 'Completar' }}
                </button>
                <button @click="deleteTask(task)">Eliminar</button>
            </div>
        </div>
</template>

<script>
   // Esta sección debe permitir agregar tareas nuevas a la vez que extraer las tareas anteriores de la API
   export default {
    name: "CombinedView",
    data() {
        return {
            tasks: [],    //
            newTask: ""
        };
    },
    methods: {
        async fetchTasks() {
            try {
                const response = await fetch("https://dummyjson.com/todos");
                const data = await response.json();
                this.tasks = data.todos;
            } catch (error) {
                console.error("Error al cargar tareas:", error);
            }
        },

        addTask() {
            if (this.newTask.trim()) {
                this.tasks.push({
                    id: Date.now(),
                    todo: this.newTask,
                    completed: false
                });
                this.newTask = "";
            }
        },
        toggleTaskCompletion(task) {
            task.completed = !task.completed;
        },

        // Eliminar tarea seleccionada
        deleteTask(task) {
            this.tasks = this.tasks.filter((t) => t.id !== task.id);
        },
    },
};
</script>

<style scoped>
/* Aquí pueden agregar estilos personalizados para el componente. */
h1 {
    color: #2c3e50;
}
input {
    margin-right: 10px;
    padding: 5px;
}
button {
    margin-top: 5px;
    padding: 5px 10px;
    font-weight: bold;
}
</style>