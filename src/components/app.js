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


const App = ({children}) => (
  <div>
    
    <Footer />

    <div style={{ marginTop: '1.5em' }}>{children}</div>
  </div>
)

export default App;