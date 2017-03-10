var React = require('react');
var ReactDOM = require('react-dom');


class MyComponent extends React.Component {
  render(){
    return (
        <h1>Hello World!!!</h1>
    )

  }
}

ReactDOM.render(
  <MyComponent />,
  document.getElementById('a')
);
