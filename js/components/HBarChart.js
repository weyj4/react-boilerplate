'use strict';

var $ = require('jquery');
var d3 = require('d3');
var React = require('react/addons');

var Chart = React.createClass({
  render: function() {
    return (
      <svg className="chart" width={this.props.width} height={this.props.height}>{this.props.children}</svg>
    );
  }
});

var Bar = React.createClass({
  getDefaultProps: function() {
    return {
      width: 0,
      height: 0,
      offset: 0
    }
  },

  render: function() {
    return (
      <rect y={this.props.offset}
            fill={this.props.color}
            height={this.props.width}
            width={this.props.height} />
    );
  }
});

var Values = React.createClass({
  getDefaultProps: function() {
    return {
      height: 0,
      width: 0,
      bar: 0,
      values: ""
    }
  },

  render: function() {
    console.log(this.props.height);
    var X = this.props.height * 0.85;
    var Y = (this.props.width * this.props.bar) + (this.props.width/2);
    var DY = ".5em";
    return (
      <text x={X}
            y={Y}
            dy={DY}>{this.props.values}</text>
    )
  }
})

var DataSeries = React.createClass({
  getDefaultProps: function() {
    return {
      data: []
    }
  },

  render: function() {
    var max=100;
    var props=this.props;
    var scaledData=[], data=[], dataIn=this.props.data;
    this.props.data.map(function (value,i) {
      scaledData[i]=Math.round(value/props.factor);
    });

    data = scaledData;

    var xScale = d3.scale.linear()
      .domain([0, max])
      .range([0, this.props.width]);

    var yScale = d3.scale.ordinal()
      .domain(d3.range(data.length))
      .rangeRoundBands([0, this.props.height], 0.05);

    var bars = data.map(function (point, i) {
      return (
        <Bar height={xScale(point)*0.84}
             width={yScale.rangeBand()}
             offset={yScale(i)}
             color={props.color[i]}
             key={i} />
      )     
    });

    var values = dataIn.map(function (point, i) {
      var text = props.data[i];
      if (props.unit[i]) {
        text = text + props.unit[i];
      }

      return (
        <Values height={xScale(data[i])}
                width={yScale.rangeBand()}
                values={text}
                bar={i} />
      )
    });

    return (
      <g>{bars}{values}</g>
    );
  }
})

var HBarChart = React.createClass({
  getDefaultProps: function() {
    return {
      data: [100,200,500],
      height: 250,
      width: 700,
      color: ['#acacac','#8bc7de'],
      unit: ['%','%','%'],
      factor: 5
    }
  },

  render: function() {
    return (
      <Chart width={this.props.width} height={this.props.height}>
        <DataSeries
            data={this.props.data}
            width={this.props.width}
            height={this.props.height}
            color={this.props.color}
            unit={this.props.unit}
            factor={this.props.factor} />
      </Chart>
    );
  }
})

module.exports = HBarChart;
