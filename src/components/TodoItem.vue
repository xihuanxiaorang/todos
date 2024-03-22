<script setup lang="ts">
import type { Todo } from '@/types/todos'
import { useTodosStore } from '@/stores/todos'
import { nextTick, ref } from 'vue'

const todo = defineModel<Todo>({ required: true })
const { removeTodo } = useTodosStore()
// 是否正在编辑标识
const editing = ref(false)
// 获取编辑输入框的模板引用，使其在编辑时能自动获取焦点
const editInput = ref<HTMLInputElement>()
// 用于双向绑定编辑输入框
const editingTitle = ref('')
/**
 * 开始编辑
 */
const startEdit = () => {
  editing.value = true
  editingTitle.value = todo.value.title
  nextTick(() => {
    editInput.value?.focus()
  })
}
/**
 * 确认编辑
 */
const doneEdit = () => {
  if (editing.value) {
    editing.value = false
    if (!editingTitle.value) removeTodo(todo.value)
    todo.value.title = editingTitle.value
  }
}
</script>

<template>
  <li :class="{ completed: todo.completed, editing: editing }">
    <div class="view">
      <input class="toggle" type="checkbox" v-model="todo.completed" />
      <label @dblclick="startEdit">{{ todo.title }}</label>
      <button class="destroy" @click="removeTodo(todo)"></button>
    </div>
    <input
      class="edit"
      v-if="editing"
      ref="editInput"
      v-model="editingTitle"
      @keyup.enter="doneEdit"
      @blur="doneEdit"
      @keyup.esc="editing = false"
    />
  </li>
</template>

<style scoped></style>
