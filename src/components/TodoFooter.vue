<script setup lang="ts">
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useTodosStore } from '@/stores/todos'

const route = useRoute()
const { todos, activeTodos, completedTodos } = storeToRefs(useTodosStore())
const { clearCompleted } = useTodosStore()
</script>

<template>
  <!-- This footer should be hidden by default and shown when there are todos -->
  <footer class="footer" v-show="todos.length">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count"
      ><strong>{{ activeTodos.length }}</strong> item left</span
    >
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li>
        <RouterLink to="/" :class="{ selected: route.name === 'all' }"> All </RouterLink>
      </li>
      <li>
        <RouterLink to="/active" :class="{ selected: route.name === 'active' }">
          Active
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/completed" :class="{ selected: route.name === 'completed' }">
          Completed
        </RouterLink>
      </li>
    </ul>
    <!-- Hidden if no completed items are left ↓ -->
    <button class="clear-completed" v-show="completedTodos.length" @click="clearCompleted">
      Clear completed
    </button>
  </footer>
</template>

<style scoped></style>
