let nextTodoId = 0;

export const addTodo = (label, content) => ({
  type: 'ADD_TODO',
  payload: {
    id: ++nextTodoId,
    label,
    content,
  },
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id,
});
