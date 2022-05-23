---
marp: false
theme: default
title: Cargo ou comment étendre le tooling Rust à l'infini ! - Anthony PENA - https://k49.fr.nf
html: true
---
<style>
/* Global style */

section.main-heading h1 {
font-size: 400%;
    position: absolute;
    bottom: 0.5em;
    right: 1em;
}
section.main-heading-top h1 {
    font-size: 400%;
    position: absolute;
    top: 0.5em;
    left: 1em;
}
section.main-heading-top h2 {
    position: absolute;
    top: 0em;
    left: 1em;
}
section.h1-white h1 {
    color: white;
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
</style>


<!-- _class: main-heading-top h1-white -->

<style scoped>
    h1, h6 {
        color: rgba(255,255,255,0.9);
        text-shadow: 0 0 15px rgba(255,0,0,.5), 0 0 10px rgba(255,0,0,.5);
        /* https://html-css-js.com/css/generator/text-shadow/ */
    }
    h6 {
        position: absolute;
        bottom: 0;
        right: 1rem;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
</style>

# Cargo ou comment étendre le tooling Rust à l'infini !
###### Anthony Pena - https://k49.fr.nf

![bg](img/rolls-royce-3366960_1920.jpg)
<!-- https://pixabay.com/photos/highway-traffic-long-exposure-393492/ -->


---

# Un peu d'histoire

![bg right:50%](./img/kaamelott-pere-blaise.jpg)

<!--
- Rust a été créé par une personne seule (Graydon Hoare) en 2006
- à partir de 2009 Mozilla (son employeyr) s'y intéresse
- Mozilla révèle Rust en 2010
- En 2010 le compilateur écrit en OCaml est abandonné pour un compilateur écrit en Rust
- Depuis février 2021, le langage est porté par la Fondation Rust (fondé par AWS, Huawei, Google, Microsoft et Mozilla)

-->

---

<style scoped>
    img {
        display: block;
        margin: auto;
        background-color: transparent;
    }
</style>

# Rustaceans (like Crustacean but with some Rust)

![width:500px](./img/Ferris.png)


![bg](./img/bg-rusted-small-bottom-left.jpg)

<!--
- La mascotte s'appelle Ferris
- C'est un crustacés (en anglais Crustacean)
- les gens qui font du Rust s'appelle donc les Rustaceans

-->

---

- Rust est un langage prévu pour être : 
    - Performant
        - rapide et efficace en mémoire
        - pas de runtime ou de garbage collector
        - efficace en consommation de ressources
        - peut être utilisé en embarqué
    - Fiable
        - système de type riche
        - ownership et le modèle de partage mémoire et thread
        - le tout à la compilation
    - Productif
        - bonne documentation
        - message d'erreur compréhensible et bien détaillé et qui pointe vers la doc
        - outillage assez complet de base
        - intégration IDE

- nvm / sdkman => rustup
    - pour setup et gérer sa toolchain rust sans prise de tête

- avec d'autres langages on a l'habitude d'empiler les outils pour travailler, avec cargo c'est magique
    - init => cargo init
    - tests : jest/jasmine/etc. / junit => cargo test
    - lancer : npm run / mvn exec / gradle run => cargo run
    - compiler : tsc / webpack / javac / ... => cargo build
    - formatter : prettier / java ? => cargo fmt
    - lint : tslint/eslint/sonar => cargo clippy
    - etc.

- 

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
</style>

![bg left:33%](img/social/me.jpg)

# Anthony Pena
### Développeur Web Fullstack @ ![center height:2em](img/social/sfeir-rose.png)

#### ![](img/social/twitter.png) @\_Anthony\_Pena\_
#### ![](img/social/github.png) @kuroidoruido
#### ![](img/social/linkedin.png) @penaanthony
#### https://k49.fr.nf

---

# Crédit photos

- https://pixabay.com/users/tama66-1032521
    - fond de la slide de démarrage
- Kaamelott
    - Photo du Père Blaise
