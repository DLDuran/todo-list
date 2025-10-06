export default function TodoItem({todo,onDeleted,onToggle}){
    return(
        <li style={{textDecoration:todo.completed?'line-through':'none'}}>
            {todo.text}
            <button onClick={()=>onToggle(todo.id)}>{todo.completed?'Undo':'Complete'}</button>
            <button onClick={()=>onDeleted(todo.id)}>Delete</button>
        </li>
    );
}