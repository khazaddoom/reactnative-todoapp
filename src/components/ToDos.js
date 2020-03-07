import React  from "react";
import ToDo from './ToDo';


export default class ToDos extends React.Component {
    render() {
        console.log(this.props.todos);
        return (
           this.props.todos.map(todo => <ToDo tododata={todo}/>)
        );

    }
}