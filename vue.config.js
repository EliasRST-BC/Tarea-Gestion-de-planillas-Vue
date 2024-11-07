const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: [],  // Cambia esto a un array vacío
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Tarea-Gestion-de-planillas-Vue/'
    : '/'
  })