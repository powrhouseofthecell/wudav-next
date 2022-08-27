---
title: Functional Programming
date: '2016-03-08'
tags: ['js', 'code', 'functional programming']
draft: false
summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum, nibh vitae pellentesque imperdiet, massa est iaculis augue, et mattis ante odio posuere velit. Suspendisse elementum ipsum augue, quis eleifend libero aliquet in.
author: [default, 'zuhaib']
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit.

## Inline Highlighting

Sample of inline highlighting `sum = parseInt(num1) + parseInt(num2)`

## Code Blocks

Some Javascript code

```javascript
var num1, num2, sum
num1 = prompt('Enter first number')
num2 = prompt('Enter second number')
sum = parseInt(num1) + parseInt(num2) // "+" means "add"
alert('Sum = ' + sum) // "+" means combine into a string
```

Some Python code 🐍

```python
def fib():
    a, b = 0, 1
    while True:            # First iteration:
        yield a            # yield 0 to start with and then
        a, b = b, a + b    # a will now be 1, and b will also be 1, (0 + 1)

for index, fibonacci_number in zip(range(10), fib()):
     print('{i:3}: {f:3}'.format(i=index, f=fibonacci_number))
```
