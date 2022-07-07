import React from 'react';
import ReactDOM from 'react-dom';

// CLASS BASED
// component file
// import TodoContainer from './classBased/components/TodoContainer';
// stylesheets
// import './classBased/App.css';

// FUNCTION BASED
// component file
import TodoContainer from './functionBased/components/TodoContainer';
// stylesheets
import './functionBased/App.css';

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);
