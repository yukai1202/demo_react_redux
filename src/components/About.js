import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';


const About = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <h1>this is about page</h1>
  </div>
)

export default About;
