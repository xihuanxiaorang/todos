<script setup lang="ts">
import { ref } from 'vue'
import { useTodosStore } from '@/stores/todos'

const newTodo = ref('')
/**
 * 生成uuid
 */
const uuid = () => {
  let uuid = ''
  for (let i = 0; i < 32; i++) {
    let random = (Math.random() * 16) | 0
    if (i === 8 || i === 12 || i === 16 || i === 20) uuid += '-'
    uuid += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(16)
  }
  return uuid
}
/**
 * 添加待办事项
 */
const addTodo = () => {
  if (!newTodo.value) return
  const { addTodo } = useTodosStore()
  addTodo({
    id: uuid(),
    title: newTodo.value,
    completed: false
  })
  newTodo.value = ''
}
</script>

<template>
  <header class="header">
    <RouterLink to="/"><h1>todos</h1></RouterLink>
    <input
      class="new-todo"
      placeholder="What needs to be done?"
      autofocus
      v-model.trim="newTodo"
      @keyup.enter="addTodo"
    />
  </header>
</template>

<style scoped></style>
