<template>
  <div class="task-list">
    <h1>{{ msg }}</h1>

    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        {{ task.title }} - {{ task.completed ? 'Completada' : 'Pendiente' }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    tasks: Array // Recibe tareas desde el componente padre
  }
}
</script>


<style scoped>
h1 {
  color: #42b983;
}
</style>
