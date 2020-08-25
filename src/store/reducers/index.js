const initialState = {
  id: '',
  label: '',
  content: '',
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const { id, label, content } = action.payload;
      return {
        ...state,
        [id]: {
          id,
          label,
          content,
        },
      };
    /* case 'TOGGLE_TODO':
      return state.map((todo) => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo));
    case 'REMOVE_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        }]; */
    default:
      return state;
  }
};
export default todosReducer;

export const getTodos = () => (dispatch, getState) => {
  const { todo } = getState();
  const array = [];
  array.push(todo);
  console.log(array);
  dispatch({ type: 'GET_TODOS', payload: array });
};
