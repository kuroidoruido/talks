---
marp: true
theme: default
title: Être speaker ? 🤔 - Anthony PENA - https://k49.fr.nf
html: true
footer: @_Anthony_Pena
---

<style>
/* Global style */

section.main-heading h1 {
    font-size: 400%;
    position: absolute;
    bottom: 0.5em;
    right: 1em;
    text-shadow: #000 0px 0 10px;
}
section.main-heading-top h1 {
    font-size: 300%;
    position: absolute;
    bottom: 0em;
    left: 1em;
    text-shadow: #000 0px 0px 20px;
}
section.main-heading-top h2 {
    position: absolute;
    top: 0em;
    left: 1em;
}
section.h1-white h1 {
    /* color: yellow; */
    color: white;
}
section:not(.main-heading):not(.main-heading-top) h1 {
    background-color: rgba(255,255,255,0.8);
    width: fit-content;
    padding: .3em 1em;
}

section:has(img[alt*=bg-diagonal-left]) {
    padding-left: 53%;

    img[alt*=bg-diagonal-left] {
        /* Pour avoir l'image de gauche en biseau plutôt qu'avec un cut vertical droit */
        clip-path: polygon(
            0px 0px, /* top left */
            100% 0px, /* top right */
            80% 100%, /* bottom right */
            0px 100% /* bottom left */
            );
        position: absolute;
        top: 0;
        bottom: 0;
        left: -10%;
        max-height: 100%;
    }
}

section:has(img[alt*=bg-diagonal-right]) {
    padding-right: 40%;

    img[alt*=bg-diagonal-right] {
        /* Pour avoir l'image de gauche en biseau plutôt qu'avec un cut vertical droit */
        clip-path: polygon(
            10% 0px, /* top left */
            100% 0px, /* top right */
            100% 100%, /* bottom right */
            30% 100% /* bottom left */
            );
        position: absolute;
        top: 0;
        bottom: 0;
        right: -10%;
        max-height: 100%;
    }
}

</style>

<!-- _class: main-heading-top h1-white -->

<style scoped>
h1 {
    text-align: center;
}
h6 {
    position: absolute;
    bottom: 0;
    right: 1rem;
    color: white;
    text-shadow: #000 0px 0 6px;
}
a {
    color: white;
}
footer {
  display: none;
}
</style>

###### Anthony Pena

![bg Être speaker ? 🤔](img/cover.jpg)

---

<style scoped>
section {
   display: flex;
   flex-direction: column;
   align-items: center;
}
h3 {
   display: flex;
   align-items: center;
   justify-content: center;
   margin-bottom: 1.5em;
}
h4:not(:first-child) {
    margin-top: 0;
}
img[alt=logo-ft] {
    height: 1.5em;
    margin-left: .5em;
}
img[alt="angulardevs.fr"]{
    max-width: 5rem;
    max-height: 5rem;
    display: inline;
}
img[alt="ngb"] {
    max-height: 5rem;
    display: inline;
}
footer {
  display: none;
}
</style>

<!-- ![bg right:33%](img/social/me.jpg) -->
![bg-diagonal-left](img/social/me.jpg)

# Anthony Pena
### Tech Lead @ ![logo-ft](img/social/france-travail.svg)

![angulardevs.fr](img/social/angular-devs.svg) ![ngb](img/social/ng-baguette-logo-colorfull-black.png)

---




---

<style scoped>
section {
   display: flex;
   flex-direction: column;
   align-items: center;
}
h3 {
   display: flex;
   align-items: center;
   justify-content: center;
   margin-bottom: 1.5em;
}
h4:not(:first-child) {
    margin-top: 0;
}
h4 img {
    max-width: 2em;
    max-height: 0.9em;
    display: inline-block;
    vertical-align: middle;
}
img[alt=logo-ft] {
    height: 1.5em;
    margin-left: .5em;
}
img[alt="angulardevs.fr"]{
    max-width: 5rem;
    max-height: 5rem;
    display: inline;
}
img[alt="ngb"] {
    max-height: 5rem;
    display: inline;
}
footer {
  display: none;
}
</style>

![bg-diagonal-right](img/social/me.jpg)

# Anthony Pena
### Tech Lead @ ![logo-ft](img/social/france-travail.svg)
#### ✍️ anthonypena.fr
#### 💻 github.com/kuroidoruido/talks

<br/>

![angulardevs.fr](img/social/angular-devs.svg) ![ngb](img/social/ng-baguette-logo-colorfull-black.png)

---

![bg black](./img/social/thanks.gif)