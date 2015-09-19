var React = require('react');  
var DummyComponent = require('./components/DummyComponent.js');

var App = React.createClass({  
  render() {
    return (
      <DummyComponent /> 
    );
  }
});

React.render(<App />, document.body);
