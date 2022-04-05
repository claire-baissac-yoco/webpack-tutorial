import _ from 'lodash';
import './assets/styles/style.css';
import Icon from './assets/images/webpack-logo.svg';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  const myIcon = new Image();
  myIcon.src = Icon;

  const btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console';
  btn.onclick= printMe;

  element.appendChild(btn);

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());