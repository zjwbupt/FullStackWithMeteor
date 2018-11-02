// import someDefault from './../imports/utils';
//
// console.log('Log from /client/main.js');
// console.log(someDefault);
import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

Meteor.startup(function(){
  let name = 'Jianwei';
  let jsx = <p>Hello {name}!</p>;
  ReactDOM.render(jsx, document.getElementById('app'));
});
