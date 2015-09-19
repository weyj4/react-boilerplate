var React = require('react');  
var ToyComponent = require('./components/HBarChart.js');

var App = React.createClass({  
  render() {
    return (
      <ToyComponent /> 
    );
  }
});

React.render(<App />, document.body);
