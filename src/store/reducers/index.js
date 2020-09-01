const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const {
        id, label, content, completed,
      } = action.payload;
      return [
        ...state,
        {
          id,
          label,
          content,
          completed,
        },
      ];
    case 'TOGGLE_TODO':
      return [
        ...state,
      ];
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
