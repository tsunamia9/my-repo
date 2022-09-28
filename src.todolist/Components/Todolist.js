import React from 'react';

export default function Todolist(props) {
return(
    <div>
         <table>
        <tbody>
          {
          props.todos.map((todo, index) => 
          <tr key={index}>
           <td><h4>Date </h4>{todo.date}</td>
          <td><h4>Description</h4>{todo.desc}</td>
          </tr>
          )
        }
        </tbody>
      </table>
    </div>
)
}