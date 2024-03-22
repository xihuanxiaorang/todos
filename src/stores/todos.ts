import { defineStore } from 'pinia'
import { computed, type Ref, ref } from 'vue'
import type { Todo } from '@/types/todos'
import { useRoute } from 'vue-router'

export const useTodosStore = defineStore('todos', () => {
  // 路由实例
  const route = useRoute()
  // 待办事项列表
  const todos = ref<Todo[]>([])
  // 过滤器
  const filters = {
    active: (todos: Ref<Todo[]>) => todos.value.filter((todo) => !todo.completed),
    completed: (todos: Ref<Todo[]>) => todos.value.filter((todo) => todo.completed)
  }
  // 未完成的待办事项列表
  const activeTodos = computed(() => filters.active(todos))
  // 已完成的待办事项列表
  const completedTodos = computed(() => filters.completed(todos))
  // 根据路由名称过滤后的待办事项列表，用于显示不同状态下的待办事项列表
  const filteredTodos = computed(() => {
    switch (route.name) {
      case 'active':
        return activeTodos.value
      case 'completed':
        return completedTodos.value
      default:
        return todos.value
    }
  })
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
  /**
   * 全选/反选
   * @param completed 是否完成
   */
  const toggleAll = (completed: boolean) => {
    todos.value.forEach((todo) => (todo.completed = completed))
  }
  /**
   * 清除已完成的待办事项
   */
  const clearCompleted = () => {
    todos.value = todos.value.filter((todo) => !todo.completed)
  }

  return {
    todos,
    activeTodos,
    completedTodos,
    filteredTodos,
    addTodo,
    removeTodo,
    toggleAll,
    clearCompleted
  }
})
