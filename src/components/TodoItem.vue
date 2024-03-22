<script setup lang="ts">
import type { Todo } from '@/types/todos'
import { useTodosStore } from '@/stores/todos'

const todo = defineModel<Todo>({ required: true })
const { removeTodo } = useTodosStore()
</script>

<template>
  <li :class="{ completed: todo.completed }">
    <div class="view">
      <input class="toggle" type="checkbox" v-model="todo.completed" />
      <label>{{ todo.title }}</label>
      <button class="destroy" @click="removeTodo(todo)"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template" />
  </li>
</template>

<style scoped></style>
