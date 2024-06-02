---
marp: true
theme: default
title: Adieu RxJS ! Vive les Signals ! Oh wait… - Anthony PENA - https://k49.fr.nf
html: true
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
    top: 0.5em;
    left: 1em;
    text-shadow: #000 0px 0 10px;
}
section.main-heading-top h2 {
    position: absolute;
    top: 0em;
    left: 1em;
}
section.h1-white h1 {
    color: white;
}
section:not(.main-heading):not(.main-heading-top) h1 {
    background-color: rgba(255,255,255,0.8);
    width: fit-content;
    padding: .3em 1em;
}

</style>

<!-- _class: main-heading-top h1-white -->

<style scoped>
h6 {
    position: absolute;
    bottom: 0;
    right: 1rem;
    color: white;
}
a {
    color: white;
}
</style>


# Adieu RxJS ! Vive les Signals ! Oh wait…

###### Anthony Pena - https://k49.fr.nf

![bg](img/title-banner.jpg)

---

# Rappel de ce qu’est RxJS

---

# Rappel de comment fonctionne la réactivité dans Angular historiquement (change detection + Zone.js )

---

# Montrer les Signals, les problèmes résolus et les nouvelles syntaxes

---

# Montrer les limitations des Signals

---

# Prendre le cas du HttpClient et des interceptors qui sont entièrement basés sur RxJS

---

# Montrer par l’exemple de quand utiliser les Signals et quand utiliser RxJS

---

<style scoped>
h3 {
   display: flex;
   align-items: end; 
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
section {
    background: url(img/social/axolotl-bg.png) white no-repeat bottom -60px right -55px;
    background-size: 35%;
}
figure img {
    /* Ça marche pas mais c'est le style pour avoir l'image de gauche en biseau plutôt qu'avec un cut vertical droit */
    clip-path: polygon(0px 0px, 100% 0px, 80% 100%, 0px 100%);
}
img[alt="angular-devs.fr"] {
    width: 5rem;
    display: inline;
}
</style>

![bg left:33%](img/social/me.jpg)

# Anthony Pena
### Développeur Web Fullstack @ ![center height:2em](img/social/sfeir-rose.png)

#### ![](img/social/twitter.png) @\_Anthony\_Pena\_
#### ![](img/social/github.png) @kuroidoruido
#### ![](img/social/linkedin.png) @penaanthony
#### https://k49.fr.nf
#### https://github.com/kuroidoruido/talks

![angular-devs.fr](img/social/angular-devs.svg)

---

![bg black](./img/social/thanks.gif)