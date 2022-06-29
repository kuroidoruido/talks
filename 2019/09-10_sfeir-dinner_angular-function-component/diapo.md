---
marp: true
theme: default
title: Angular Stateless Component - Anthony Pena
html: true
---

# Angular Stateless Component

###### Anthony Pena - SFEIR Dinner #1

---

# Table of Content

### Angular Components

### Typescript Decorators

### Strings Template Tag

### Let's rewrite Angular syntax 

### Stateless Component in the future

---

# Angular Components
### And components in other frameworks

---

## Angular Component
### hello.component.ts

```typescript
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'std-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloComponent {
  @Input()
  world = 'world';

  @Output()
  toggle: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}
}
```

---
###  hello.component.html

```html
<p>Hello, <span (click)="toggle.emit($event)">{{ world }}</span>!</p>
```

###  hello.component.css

```css
p {
  color: red;
}
```

---

## Angular inline component

```typescript
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter }
 from '@angular/core';

@Component({
  selector: 'std-hello',
  template: `
  <p>Hello, <span (click)="toggle.emit($event)">{{ world }}</span>!</p>
  `,
  styles: ['p { color: red; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloComponent {
  @Input() world = 'world';
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}
}
```
---
## Angular Module

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [
    HelloComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HelloComponent,
  ]
})
export class HelloModule { }
```
---

## React Component

### HelloComponent.jsx
```jsx
import React from 'react';
import './HelloComponent.css';

export const HelloComponent = React.memo(
    ({world, toggle}) => <p>Hello, <span onClick={toggle}>{{world}}</p>
);
```

### HelloComponent.css
```css
p {
  color: red;
}
```

---
## React Component **+ Typescript**

### HelloComponent.tsx
```jsx
import React from 'react';
import './HelloComponent.css';

interface HelloComponentProps {
    world: string;
    toggle: VoidFunction;
}

export const HelloComponent = React.memo(
    ({world, toggle}: HelloComponentProps) => 
        <p>Hello, <span onClick={toggle}>{{world}}</p>
);
```

---
## Lit-Element + Typescript

### hello.ts
```
import { LitElement, css, html, property, customElement } from 'lit-element';

@customElement('lit-hello')
export class HelloComponent extends LitElement {
  @property() name = 'World';

  static get styles() {
    return css`
    :host {
      p {
        color: red;
      }
    }`;
  } 
  render() { return html`<p >Hello, ${this.name}!</p>`; }
}
```
---

# Typescript Decorator
### or how to hide a function call?

---

### Simple decorator

```typescript
@sealed
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}

function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}
```
<!-- source: https://www.typescriptlang.org/play/#example/decorators -->

---

### Compiled version...

```javascript
"use strict";
// Requires `experimentalDecorators` enabled
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// http://www.typescriptlang.org/docs/handbook/decorators.html
let Greeter = class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
};
Greeter = __decorate([
    sealed
], Greeter);
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
```
<!-- source: https://www.typescriptlang.org/play/#example/decorators -->

---

### Pretty much the same thing

```typescript
export const Greeter = sealed(class _Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
})

function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}
```
---

### Decorator factory 

```typescript
function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}

class C {
    @f()
    method() {}
}
```
#### console
```
f(): evaluated
f(): called
```
<!-- source: https://www.typescriptlang.org/docs/handbook/decorators.html -->

---

# Strings Template Tag
### A standard thing to manipulate string

---

## Let's define a tag

```javascript
function myTag(strings, personExp, ageExp) {
  var str0 = strings[0]; // "That "
  var str1 = strings[1]; // " is a "

  var ageStr;
  if (ageExp > 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}`;
}
```
<!-- source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals-->

---

## Let's use it

```javascript
var person = 'Mike';
var age = 28;

var output = myTag`That ${ person } is a ${ age }`;

console.log(output);
// That Mike is a youngster
```

<!-- source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals-->

---

## And if we need a tag that do nothing?

```javascript
export const html = String.raw;
```

<!-- source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw -->

---

# Let's rewrite Angular syntax

<!-- source: https://www.npmjs.com/package/angular-function-component -->
---

```typescript
import { css, html, StatelessComponent } from 'angular-function-component';
 
export const HelloComponent = StatelessComponent(
  'hello',
  ['[world]', '(toggle)'],
  html`
    <p>Hello, <span (click)="toggle.emit($event)">{{world}}</span>!</p>
  `,
  css`
    p {
      color: red;
    }
  `,
);
```

---

```typescript
import { css, html, StatelessComponent } from 'angular-function-component';
 
export const HelloComponent = StatelessComponent({
   selector: 'my-comp',
   inputs: ['world'],
   outputs: ['toggle'],
   template: 
   html`<p>Hello, <span (click)="onWhoClick.emit($event)">{{who}}</span>!</p>`,
   style: css`p {color: red;}`,
  });
```

---

# Stateless Component in the future

---

- It will works as long as Angular will use Typescript Decorator
- No idea if it will works with ES7 Decorators (Stage 2)

- Soon Ivy will let us to declare dependencies from components directly

---

```diff
import { Component } from '@angular/core';
import { MatButton, MatIcon } from '@angular/material';

@Component({
+  deps: [ MatButton, MatIcon, ],
  selector: 'cart-button',
  template: `
    <button mat-icon-button type="button" (click)="onClick()">
      <mat-icon aria-label="Add to shopping cart">shopping_cart</mat-icon>
    </button>
  `,
})
export class CartButtonComponent {
  onClick(): void { this.addToShoppingCart(); }
  private addToShoppingCart(): void {}
}

```

<!--
source:
- https://github.com/tc39/proposal-decorators
- https://blog.angularindepth.com/angular-revisited-tree-shakable-components-and-optional-ngmodules-329a4629276d
 -->

---

## Let's hack this

- https://github.com/kuroidoruido/angular-function-component
- https://www.npmjs.com/package/angular-function-component

---

![bg 70%](./thanks.gif)
