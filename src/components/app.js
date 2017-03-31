/*import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>React simple starter</div>
    );
  }
}
*/

import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App;