@page learn-to-debug-javascript Debug JavaScript
@parent bit-academy 3
@description This course covers the basics of JavaScript debugging.

@body

## Before You Begin

<a href="https://www.bitovi.com/community/slack">
<img src="https://cdn.brandfolder.io/5H442O3W/as/pl546j-7le8zk-5guop3/Slack_RGB.png?width=200"
  style="float:left"/> <span style="margin-top: 10px;display: inline-block;">Click here to join<br/>Bitovi's Slack Community</span></a>

Join Bitovi's Slack Community to get help on Bitovi Academy courses or other
Angular, React, CanJS and JavaScript problems.

Please ask questions related to JavaScript Debugging in the [JS and DOM chat room](https://bitovi-community.slack.com/messages/CFMMNSV5X).

If you find bugs in this training or have suggestions, create an [issue](https://github.com/bitovi/academy/issues) or email `contact@bitovi.com`.

## Overview

- Audience: Beginner and Intermediate JS developers.
- Goal: Teach basic debugging skills with Chrome developer tools.
- Time: About 45 minutes.

## Outline

- [learn-to-debug-javascript/scope] - Learn how to see the variables available in the scope.   

  <img src="./static/img/debugging/closure.png" width="300px" style="border: solid 1px black"/>

- [learn-to-debug-javascript/call-stack] - Learn how to trace how functions are called.   

  <img src="./static/img/debugging/stack.png" width="300px" style="border: solid 1px black"/>

- [learn-to-debug-javascript/prototypes] - Learn how to explore an object's proto chain.  

  <div style="border: solid 1px black; width: 300px;
  background-image: url('./static/img/debugging/prototype.png');
  height: 300px; background-position: -165px -14px;
  background-repeat: no-repeat;"></div>

- [learn-to-debug-javascript/conditional] - Learn how to set a conditional breakpoint.   

  <div style="border: solid 1px black; width: 300px;
  background-image: url('./static/img/debugging/conditional.png');
  height: 300px; background-position: -2px -54px;
  background-repeat: no-repeat;"></div>

- [learn-to-debug-javascript/property-changes] - Learn how to debug property changes.   
  ```js
  var propertyValue = object.property;
  Object.defineProperty(person,"property",{
      get: function(){
          return propertyValue;
      },
      set: function(newValue){
          debugger;  
          propertyValue = newValue;
      }
  });
  ```
