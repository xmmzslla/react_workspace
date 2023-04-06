//모든 데이터 관리
let boardList = [
  { id: 1, todoname: '완벽하게 자기', completed: 0 },
  { id: 2, todoname: '끝내주게 숨쉬기', completed: 0 },
  { id: 3, todoname: '강아지 산책시키기', completed: 0 },
];
//사용할 데이터 크키 값 action은 디스패치값 받음
export const reducer = (todos = boardList, action) => {
  switch (action.type) {
    case 'INSERT': //추가
      return [
        ...todos,
        { id: todos.length + 1, todoname: action.todoname, completed: 0 },
      ];

    case 'DELETE': //삭제
      return todos.filter((todo) => todo.id !== action.id);

    case 'UPDATE': //수정
      return todos.map((todo) =>
        todo.id === action.id
          ? { ...todo, completed: todo.completed === 1 ? 0 : 1 }
          : todo
      );

    default: //목록
      return todos;
  }
};
