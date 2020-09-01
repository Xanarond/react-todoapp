let nextTodoId = 0;

export const addTodo = (label, content) => ({
  type: 'ADD_TODO',
  payload: {
    id: ++nextTodoId,
    label,
    content,
  },
});

export const toggleTodo = (id, completed) => ({
  type: 'TOGGLE_TODO',
  payload: {
    id,
    completed,
  },
});
