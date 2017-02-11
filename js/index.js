require('babel-polyfill');

let React = require('react');
let ReactDOM = require('react-dom');

let PersonList= require('./components/person-list');

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<PersonList />, document.getElementById('app'));
});



