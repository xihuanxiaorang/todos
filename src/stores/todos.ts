import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Todo } from '@/types/todos'

export const useTodosStore = defineStore('todos', () => {
  /**
   * 待办事项列表
   */
  const todos = ref<Todo[]>([])
  /**
   * 添加待办事项
   * @param todo 代办事项
   */
  const addTodo = (todo: Todo) => {
    if (!todo) return
    todos.value.unshift(todo)
  }

  return {
    todos,
    addTodo
  }
})
