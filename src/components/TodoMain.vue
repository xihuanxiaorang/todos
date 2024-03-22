<script setup lang="ts">
import TodoItem from '@/components/TodoItem.vue'
import { storeToRefs } from 'pinia'
import { useTodosStore } from '@/stores/todos'

const { todos, filteredTodos } = storeToRefs(useTodosStore())
const { toggleAll } = useTodosStore()
</script>

<template>
  <!-- This section should be hidden by default and shown when there are todos -->
  <section class="main" v-show="todos.length">
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      @change="(e) => toggleAll((e.target as HTMLInputElement).checked)"
    />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <!-- These are here just to show the structure of the list items -->
      <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
      <TodoItem
        v-for="(todo, index) in filteredTodos"
        :key="todo.id"
        v-model="filteredTodos[index]"
      />
    </ul>
  </section>
</template>

<style scoped></style>
