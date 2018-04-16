---
layout: "post"
date: 2016-11-08
title: create 2d array in js for fun
category: "js"
tags: [ "2d array", "js" ]
---

```javascript

// create a new 2d array in javascript
 
// 1. unfixed width & height
// using [] literal
var new2Darr = []
new2Darr[0] = []
new2Darr[0][0] = []

// alternatively, you can do this in this way,
new2Darr = [ [ [ ] ] ]


// 2. fixed width & height
// assume array
// width = rows
// height = cols
const rows = cols = 10

// a. Do it in java way

new2Darr = []
for (let x = rows; x > 0; x--) {
  let new1Darr = [] 
  for (let y = cols; y > 0; y--) {
    new1Darr.push(undefined)
  } 
  new2Darr.push(new1Darr)
}

// b. Obviously, with ES6 you can do this more elegantly❔

// Don't forget the 3 immutable functions derived from Functional Programming
// map for rescue
var new2Darr = [...Array(5)].map(val => Array(5))

// or do it in this way
var new2Darr = [...Array(5)].map(Array.prototype.fill, Array(5))

```
