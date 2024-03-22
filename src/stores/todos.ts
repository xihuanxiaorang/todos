import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Todo } from '@/types/todos'

export const useTodosStore = defineStore('todos', () => {
  // 待办事项列表
  const todos = ref<Todo[]>([])
  /**
   * 添加待办事项
   * @param todo 代办事项
   */
  const addTodo = (todo: Todo) => {
    if (!todo) return
    todos.value.unshift(todo)
  }
  /**
   * 删除待办事项
   * @param todo 待办事项
   */
  const removeTodo = (todo: Todo) => {
    todos.value.splice(todos.value.indexOf(todo), 1)
  }

  return {
    todos,
    addTodo,
    removeTodo
  }
})
