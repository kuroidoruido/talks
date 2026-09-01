---
marp: true
theme: default
title: Être speaker ? 🤔 - Anthony PENA - https://k49.fr.nf
html: true
footer: Anthony PENA
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
    border: 2px solid darkorange;
    border-width: 2px 6px 6px 2px;
}

section:has(img[alt*=bg-diagonal-left]) {
    padding-left: 45%;

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
    padding-right: 45%;

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

<!-- Comme Guillaume m'a demandé de parler ce que c'est d'être speaker, je me suis prêté à l'exercise de créer un talk comme si j'allais présenter le sujet en conférence ou meetup -->

---

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

<!-- Comme Guillaume m'a demandé de parler ce que c'est d'être speaker, je me suis prêté à l'exercise de créer un talk comme si j'allais présenter le sujet en conférence ou meetup -->

---
<!--
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

![bg-diagonal-left](img/social/me.jpg)

# Anthony Pena
### Tech Lead @ ![logo-ft](img/social/france-travail.svg)

![angulardevs.fr](img/social/angular-devs.svg) ![ngb](img/social/ng-baguette-logo-colorfull-black.png)

---
-->

<style scoped>
    h1 {
        position: absolute;
        bottom: 20%;
        left: 10%;
    }
</style>

![bg](./img/mon-parcours.jpg)

# Mon parcours

<!-- On va commencer par parler de qui je suis pour vous parler de tout ça -->

---

<style scoped>
    h1 {
        position: absolute;
        bottom: 20%;
        right: 10%;
    }
</style>

![bg](./img/adn.jpg)

# C'est mon ADN !

<!--

- premier meetup en participant vers 2014
    - presque 1 meetup / semaine entre 2014 et 2017
- premier devfest nantes en étudiant en 2015, tous fait depuis
- bénévole à Devfest Nantes depuis 3 ans
- orga Angular Dev France depuis 3 ans
- orga NGB depuis 2 ans
-->

--- 

<style scoped>
    h1 {
        position: absolute;
        bottom: 20%;
        left: 10%;
    }
</style>

![bg](./img/rencontre.jpg)

# Pourquoi devenir speaker ?

<!--
- partager largement
- partager différemment
- rencontrer des gens
- rencontrer d'autres speakers
- élargir son réseau de connaissance
- élargir son réseau d'influence
-->

---

![bg](./img/panda-jug-summer-camp.jpg)

# Je voulais monter sur scène !

<!--

- Mon premier talk en meetup le 30 avril 2019 (SFEIR Lunch)
- Mon premier talk en conf à JUG Summer Camp 2021

-->

---

![bg fit](./img/Gartner_Hype_Cycle.svg)

# Le sujet vs le format vs la hype
<!--
- format adapté au talk
- format adapté à la conf
- bon axe pour un sujet
- courbe de la hype
-->

---

<style scoped>
    h1 {
        position: absolute;
        bottom: 20%;
        right: 10%;
    }
</style>

![bg](./img/call-for-paper.jpg)

# Les "Call For Paper"

---

![bg](./img/conference-hall_rxjs-abstract.png)

---

![bg](./img/conference-hall_rxjs-references.png)

---

<style scoped>
    h1 {
        position: absolute;
        bottom: 20%;
        right: 10%;
    }
</style>

![bg](./img/reject-1.jpg)

# Règle 1 : vous ne serez pas pris.

---

<style scoped>
    h1 {
        position: absolute;
        /* bottom: 20%; */
        right: 10%;
    }
</style>

![bg](./img/reject-2.jpg)

# Règle 2 : vous ne serez pas pris !

---

<style scoped>
    h1 {
        position: absolute;
        top: 20%;
        right: 10%;
    }
</style>

![bg](./img/reject-3.jpg)

# Règle 3 : vous ne serez pas pris...

---

<style scoped>
    h1 {
        position: absolute;
        bottom: 20%;
    }
</style>

![bg](./img/top-de-proposition.jpg)

# Trop de proposition

<!--

- environ 10:1 sur les grosses confs comme Devoxx ou Devfest Nantes
- 3:1 pour les petites/très petite conf comme NGB

-->

---

![bg](./img/conference-hall_rxjs-propositions.png)

<!--
- mon dernier talk solo
- 20 propositions via Conference Hall
    - Conference Hall = la plateforme la plus utilisé aujourd'hui en France
- acceptés 2 fois
    - + Voxxed Luxembourg 2024
    - refusé à Devoxx France aussi (peut-être d'autres que j'ai oublié)
-->

---

<style scoped>
    h1 {
        position: absolute;
        bottom: 20%;
    }
</style>

![bg](./img/meetup.jpg)

# Les meetups c'est cool aussi !

<!--
- Mais si on veut parler en conférence, il faut tenter quand même
- passer par les meetups c'est aussi une bon plan
    - moins de pression
    - on peut tester notre sujet
    - peut-être une première captation
    - on peut faire quelque chose de moins léché
    - on a déjà notre abstract dans Conference-Hall
-->

---

![bg](./img/saut-dde-joie.jpg)

# Et si vous êtes retenu ?

<!--

- Je vais vous parler de MA façon de faire
- Chacun ses techniques
- Chacun sa "stack"

-->

---

![bg blur:40px](./img/kaamelott-premier-volet.jpg)

# Un peu de musique ?

<!--

- Depuis quelques temps
- pas systématique
- j'essaie de garder le même album du début à la fin et à travers les sessions
- ça me permet d'avoir une ambiance uniforme

-->
---

![bg](./img/kaamelott-premier-volet.jpg)

# Un peu de musique !

<!--

- ce talk a été rédigé avec la Bande Original du film Kaamelott Premier Volet pour les curiuex

-->

---

<style scoped>
    h1 {
        position: absolute;
        bottom: 20%;
        right: 10%;
    }
</style>

![bg](./img/mindmap.png)

# Une mindmap 

<!--

- noter toutes les idées
- regrouper ensemble ce qui va ensemble
- éliminer tout ce qui est trop au bord du sujet
- structurer avant de rédiger

-->

---

![bg](./img/marp.png)

# Un slide deck

<!--
- Il y a plein d'outil
    - chacun les siens
- perso je préfère faire mes slides as code
    - en perso avec Marp
    - j'ai aussi fait du Reveal.js quand j'étais chez SFEIR
- toujours en noir sur blanc
    - parce que y'a des écrans pourri

-->

---

<!-- _backgroundColor: "black" -->

<!-- Considérer l'option de ne pas faire de slide -->

---

<style scoped>
    h1 {
        position: absolute;
        top: 20%;
        left: 10%;
    }
</style>

![bg](./img/slideless.jpg)

# Slideless

<!--

- Ici 
- Camping des speakers 2023 - "On vit déjà dans un monde fédéré !"

-->

---

<style scoped>
    h1 {
        position: absolute;
        top: 20%;
        left: 10%;
    }
    img[alt*=portable] {
        position: absolute;
        top: -40%;
        bottom: 0;
        right: 10%;
        height: 200%
    }
</style>

![bg blur](./img/slideless.jpg)
![portable](./img/slideless-portable.jpg)

# Slideless

<!--

- Ici 
- Camping des speakers 2023 - "On vit déjà dans un monde fédéré !"

-->

---

<style scoped>
    h1 {
        position: absolute;
        top: 20%;
        left: 10%;
    }
    img[alt*=portable] {
        position: absolute;
        top: -40%;
        bottom: 0;
        right: 10%;
        height: 200%
    }
    img[alt*=feu-de-camp] {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 30%;
        height: 100%
    }
</style>

![bg blur](./img/slideless.jpg)
![portable blur](./img/slideless-portable.jpg)
![feu-de-camp](./img/slideless-yulianna-khorolich.jpg)

# Slideless

<!--

- Ici 
- Camping des speakers 2023 - "On vit déjà dans un monde fédéré !"

-->

---

![bg](./img/jour-j.jpg)

# Le jour J

<!--
- arriver minimum 20min avant
    - la conf d'avant si possible
- boire un verre d'eau plate puis aller faire pipi 10-15min avant
- boire une grosse gorgée d'eau 5min avant
- étirer ses lèvres un peu avant de commencer
- s' "énergiser" juste avant commencer (par ex : sauter sur place)
- connaître sa première phrase par cœur

-->


---

<style scoped>
    h1 {
        position: absolute;
        bottom: 20%;
        right: 0;
        left: 0;
        margin: 0 auto;
    }
</style>

![bg](./img/need-you.jpg)

# Et vous : c'est pour quand ?

<!--
- chaud pour aider de mon côté
-->

---

<style scoped>
    h1 {
        position: absolute;
        bottom: 20%;
        right: 0;
        left: 0;
        margin: 0 auto;
    }
</style>

![bg](./img/question.jpg)

# (Combien de temps pour préparer ce talk ?)

<!--

pour 15min de talk :
- 2h pour la mindmap
- 1h30 sur les slides intro + présentation début / fin
- 1h pour le découpage en slide
- 20min pour une première répétition
- 1h40 style sur les slides
- 2 répétitions pour ajuster le timing 30 min

- total = 7h

-->

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