function App(){
  const [todos, setTodos] = React.useState([
    /* {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }     */    
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = e => {
    var index = Number(e.target.id);
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <>
    <div className="app">
      <div className="todo-list">
      {todos.map((todo, i) => (
        <div className="todo" key={i} id={i} /* onClick={removeTodo} */>{todo.text}
        <button id={i} onClick={removeTodo}>Remove</button>
        </div>
      ))}
      <TodoForm addTodo={addTodo} />
      </div>
    </div>
    </>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
