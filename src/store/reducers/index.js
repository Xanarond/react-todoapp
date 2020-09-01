const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const { id, label, content } = action.payload;
      return [
        ...state,
        {
          id,
          label,
          content,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map((todo) => (todo.id === action.id
        ? { ...todo, completed: !todo.completed }
        : todo));
    case 'REMOVE_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        }];
    default:
      return state;
  }
};
export default todosReducer;

export const getTodos = () => (dispatch, getState) => {
  const { todo } = getState();
  const arr = [];
  dispatch({ type: 'GET_TODOS', payload: arr });
};
