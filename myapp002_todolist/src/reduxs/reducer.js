let boardList = [
  { id: 1, todoname: '완벽하게 자기', completed: 0 },
  { id: 2, todoname: '끝내주게 숨쉬기', completed: 0 },
  { id: 3, todoname: '강아지 산책시키기', completed: 0 },
];

export const reducer = (todos = boardList, action) => {
  switch (action.type) {
    case 'INSERT': //추가
      return [
        { id: todos.length + 1, todoname: action.todoname, completed: 0 },
      ];

    default: //목록
      return todos;
  }
};
