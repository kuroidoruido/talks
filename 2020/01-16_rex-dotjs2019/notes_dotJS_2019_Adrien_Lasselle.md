# DotJS 2019 - 5 décembre 2019 - Frontend

## 1st session
* Speaker : Tim Neutkens
* Title : What to expect from a modern web framework ?

#### 72% of dev use React/Angula/Vue (MDN survey)

#### Hard to build web apps ?
* easier than before

#### Web framework ?
* faster build apps
* improve maintenance of apps

#### UI Lib/Framework vs Web Framework
* React / Vue / Angular
* Angular

#### Increasing use of Next.js (NPM downloads stats)

#### Compilation and bundling
* Babel / Webpack
* Bundle apps and deploy on multi browsers
* No one wants to configure it manually ^^

#### Conclusion : use web frameworks !

## 2nd session
* Speaker : Eduardo San Martin Morote
* Title : Modern Frontend Routing

#### History API

```javascript
{
    state : { from : null, ... },
    length : 0,
    location : {
        path : "/something",
        query : "?key=value",
        hash : "#title",
        ...
    }
    ...
}
```
* listening on history changes

#### UrlSearchParam API

#### Enconding urls
* encode `"/${location.path}?${location.query}#${location.hash}"`
* encodeURI
* browsers compatibility on encoding

#### Enconding query
* encodeURIComponents

#### Matcher
* transform path to a regexp to match URL as string

The router is central between history/matcher/components and devlopper

## 3rd session

* Speaker : Sara Vieira (CodeSandBox)
* Title : The Complexity is Simplicity

#### One button does 1000 things !
#### Languages are hard !
#### Native placeholders ?
* not good used (no style, no translations generaly)
* label gone when typing

This talk is an UFO ! Talk about bad UIs

## Lunch !

## 4st session - Lightning talks
- 1
  * Speaker : Nady Desmarais
  * Title : Web Components Testing
- 2
  * Speaker : Christian Gill
  * Title : Modeling your way to consistency
- 3
  * Speaker : Jason Maggard
  * Title : Client Side ORM's
- 4
  * Speaker : Bertrand Chevrier
  * Title : I have to confess something

## 5st session
* Speaker : Adria Fontcuberta
* Title : Testing the frontend

#### Testing pyramid ?

#### What's a test ?
* inputs => function => output
* inputs => component => output

2 differents consumers (inputs => ouput) :
* end user : interaction => effets
* developper : props + datastream => dom

#### DOM Testing library

Components are juste functions

## 6st session
* Speaker : Chris Heilmann
* Title : Develop, debug and learn

#### His carreer as a web developper
* before we were developing and now we are depending and have to debug
* we add abstractions
* focus on end users, we build things to allow people to do things => delivery service

#### Developer work
* filling overloading by all the things we have to know (securiy, performance, ...)
* focus on what we depend on (third packages, framework, ...)
* full stackoverflow developpers
* rethink tooling : IDE on the web ? Complete IDE (editor + browser + docs) ? To avoid switching between tools because it's tiring. Opensource environment

## 7st session
* Speaker : Jana Beck
* Title : 

#### Data science in the browser

#### U M A P
* UMAP on RGB

#### Web workers
* used to compute datas
* no DOM access in web workers

## 8st session
* Speaker : Adam Bradley
* Title : Architecting a component compiler

#### Choose component model 
* Angular ? React ? Vue ? Other ?
* But what's next ?
* Build on something we can relay on : Custom Element (HTMLELement API)

#### Stencil compiler
* build tool, not a framework
* it's not reinventing how a component works
* tree shaking and mimification : reduce bundle size

## 9st session
* Speaker : Igor Minar (Angular)
* Title : Evergreen Librairie

#### Javascript fatigue in 2016 ?
* Vendor prefix, XHTML, EcmaScript 4
* Tranistion of Javascript : ES Modules, stantard...

#### Evergreen librairies
* Breaking changes cost a lot
* But not making breaking changes cost too (old API accumulation, maintenance...)
* What to do ? Change API responsibly
  * Do survey to know which version of Angular is used (generaly the last)
  * Sementic version
  * Depecration policy & docs
  * Build tools to automate migration `ng update` and docs (automate code migration)
  * App developer asks (planification, technical budget time)

## 10st session
* Speaker : Phil Hawksworth
* Title : Are you being servered ?

#### Serverless
* function as a service
* serving websites without web server
* jamstack

#### Jamstack
* Javascript, APIs, pre rendered markup without server
* Static site, pre-rendered static site
* Security, perf, scale
* Decoupling build time from request time

## 11st session
* Speaker : Evan You
* Title : State of Components

#### Class
* use instance of a class to store state
* side effects in lifecycle
* side effects on state change
* need of static field to store metadata of class but still in stage 3 (ES)
* use inheritence to reuse logic is not good (mixins)
* classes are not bad but does it really feat for UI Components ?
  * React hooks : logic composition, designed for concurrent mode
  * Vue Composition API
  * Svelte 3
  * 3 different implementations but similar concepts

#### React Hooks
* pros :
  * logic composition
  * designed for concurrent mode
* cons : 
  * manual dependency management
  * stale closures

#### Vue Composition API
* pros :
  * logic composition
  * automatic dependency tracking
* cons : 
  * need the concept of "ref" for tracking primitive values
  * runtime dependency tracking overhead

#### Svelte 3
* pros : 
  * most concise code
* cons : 
  * custom syntax cannot be used for logic reuse
  * custom syntax complicates integration with type systems (TS)


# DotJS 2019 - 6 décembre 2019 - Backend language

## 1st session
* Speaker : Asim Hussain (Microsoft)
* Title : Javascript saves the world

#### Green app
* Severless 
  * use to reduce carbon emission
  * no useless servers, less waste

## 2nd session
* Speaker : Charlie Gerard
* Title : Exploring the hidden potential of sound data

#### Web audio API
* audio data

#### Machine learning with TensorFlow

#### Teachable machine with Google

## 3rd session
* Speaker : Bert Bender
* Title : Welcome to deno.land

#### V8 / Rust / Tokio (event loop) / TS

#### Node has problems
* module system
* legacy APIs
* no security model
* many tooling

#### Secury system
* launch deno with security flags (no security model with Node)

#### Embedding Node is hard

## Lunch !

## 4st session - Lightning talks
- 1
  * Speaker : Ziad Zibri
  * Title : Typing (correctly) matters
- 2
  * Speaker : Stefan Judis @stephanjudis
  * Title : Regular expression my secret love
- 3
  * Speaker : Matt Johnson-Pint @mj1856
  * Title : Improving our community by asking questions efficently
- 4
  * Speaker : Sven Sauleau @svensauleau
  * Title : WebAssembly for Javascript

## 5st session
* Speaker : Vlad Filippov
* Title : WebAssembly

#### In W3C standard

#### Example of hash function javascript improvment
* Optimize with WASM
* Use Web worker in WASM for big cumpute

#### WebAssembly speed on Node.js

## 6st session
* Speaker : 
* Title : Talk table about TC39

## 7st session
* Speaker : Vladimir Agafonkin (creator of mapbox)
* Title : fast by default (algo optimization in practice)

#### Image computation in JS
* JS can approach other languages speed (such as Rust, CPP) by good thing algo

#### Make fast code
* find bottleneck : code that does unnecessary code
* find out why
* make it faster
  * use dev tools for js call tree (through profiler)
  * Rollup project
  * see the complexity of code

#### Don't take establishment code as granted

## 8st session
* Speaker : James Long
* Title : CRDT's for mortals

#### Offline-first app
* distributed data update conflict (after offline time)
  * example : reconnect smartphone after offline long time

#### We need a clock
* vector clock
* HLC
* per-device
* assigns timestamps to changes `{x: 3, timestamp: "date"}`

#### Conflicts resolution
* not by hand

#### CRDT
* conflict-free replicated data types
* data has to be communtative and idempotent
* Last-write-wins-map
* Grow only set : cannot remove anything