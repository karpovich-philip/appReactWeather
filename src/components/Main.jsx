import React from 'react';
import Nav from './Nav';

//var Main = React.createClass({
//  render: function () {
//    return (
//      <div>
//        <Nav/>
//        <h2> Main Component </h2>
//        {this.props.children}
//      </div>
//    )
//  }
//})

let Main = (props) => {
  return (
    <div>
      <Nav/>
      <h2> Main Component </h2>
      {props.children}
    </div>
  )
}

export default Main;