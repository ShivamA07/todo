import './Todo.css';

function translateCompleted(complete) { 
  if (complete)
    return "Yes";

  return "No";
}

function Todo(props) {
  const { todo } = props;
  const { deleteTodo, setTodoCompleted } = props;

  return (
    <tr id = "tablerow">
        <td id = "tabled1">{todo.id}</td>
        <td id = "tabled1">{todo.title}</td>
        <td id = "tabled1"><a href="#todo" onClick={(e) => { setTodoCompleted(todo)}}>{translateCompleted(todo.completed)}</a></td>  
        <td id = "tabled1"><button onClick={() => deleteTodo(todo.id)}>Delete</button></td>
    </tr>
  );
}

export default Todo;