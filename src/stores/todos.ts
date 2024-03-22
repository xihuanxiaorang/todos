import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Todo } from '@/types/todos'

export const useTodosStore = defineStore('todos', () => {
  const todos = ref<Todo[]>([
    {
      id: '1',
      title: 'Taste JavaScript',
      completed: true
    },
    {
      id: '2',
      title: 'Buy a unicorn',
      completed: false
    }
  ])

  return {
    todos
  }
})
