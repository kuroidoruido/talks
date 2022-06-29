---
marp: true
theme: default
title: Mot de passe - Anthony PENA
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
section.main-heading-bottom h1 {
    font-size: 400%;
    position: absolute;
    bottom: 0.5em;
    left: 1em;
}
section.main-heading-top h2 {
    position: absolute;
    top: 0em;
    left: 1em;
}
section.main-heading-top h2 {
    position: absolute;
    bottom: 0.5em;
    left: 1em;
}
section.main-heading-top.right h1 {
    right: 1em;
    text-align: right;
}
section.main-heading-bottom.right h1 {
    right: 1em;
    text-align: right;
}
section.main-heading-bottom.right h2 {
    right: 1em;
    text-align: right;
}
section.h1-white h1 {
    color: white;
}
section.h1-border-white h1 {
    text-shadow: -3px 0 white, 
    0 3px white, 3px 0 white, 0 -3px white;
}
section.h2-white h2 {
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

# Une histoire de mot de passe
###### Anthony Pena

![bg](img/secured-smartphone.jpg)

---

# De quoi on parle quand on dit "mot de passe" ?

<!-- Une séquence de caractère qui sert de clé pour accéder à des données sécurisés -->

![bg](img/two-keys.jpg)

---
<style scoped>
h1 {
    color: white;
    position: absolute;
    top: 1.5rem;
    left: 4rem;
}
</style>

# C'est quoi un bon mot de passe ?

![bg](img/safe.jpg)

<!-- Un mot de passe qui sera assez long et/ou compliqué pour être difficile à deviner (pour un ordinateur) -->

---

# Un mot de passe long ?

> JeSuisUnMotDeP@sseSuperLongMaisFaçileÀRetenir,Non?
> 50 caractères

> Monsieur, j’ai deux mots à te dire...
> -- *Comédie en trois baisers*, Arthur Rimbaud
> 37 caractères

![bg right:25%](img/giraffe.jpg)

---

# Un mot de passe compliqué ?

> \-$=*.ABj_
> 10 caractères aléatoires

![bg right:25%](img/john-moeses-bauan.jpg)

---

<style scoped>
h1 {
    color: white;
}
h1:first-child {
    position: absolute;
    left: 5rem;
    top: 20rem;
}
h1:last-child {
    position: absolute;
    right: 5rem;
    top: 20rem;
}
</style>

# Long ?

# Compliqué ?

![bg](img/matrix-pills.jpg)

---

# Les deux ?

> vtJfx-PEHucJNvV&DGN@yFU_9jZFPJZwe4Nmnbe=@nV4UMGx&h=NLr=5R?4a57fPDg5xkz#MsG%sx-Bn!H?&jqQyfS*t@t_R?fM?gdy$322K%L+N^QvjS8q&
> 120 caractères aléatoires

![bg left:25%](img/giraffe.jpg)
![bg right:25%](img/john-moeses-bauan.jpg)

---

# Impossible de le retenir par cœur...
![bg right:25%](img/memory.jpg)

---

# Comment gérer ses mots de passe ?

---

# Niveau 0 : 1 seul mot de passe

![bg right:25%](img/one-key.jpg)

<!--
- pas ouf car en cas de fuite on est cramé
- si on doit le changer c'est compliqué (souvent une des raisons qui fait qu'on en a pas un seul)
-->

---

# Niveau 1 : post it everywhere

![bg right:25%](img/post-it.jpg)

<!--
- pas ouf car on peut très facilement les perdre ou se les faire voler
- en général ça reste en vue donc c'est facile de deviner que c'est un mot de passe
-->

---

# niveau 2 : un fichier sur l'ordinateur<br/>ou un cahier/carnet/papier

![bg right:25%](img/file.jpg)

<!--
- bof bof
- rarement à jour
- problématique de synchro
- et si quelqu'un a accès à notre ordi il se passe quoi ?
-->

---

# niveau 3 : mots de passe dans le navigateur

![bg right:25%](img/firefox.jpg)

<!--
- pas ouf parce que du coup on ne maitrise pas du tout ce qui est fait de nos mots de passe
- beaucoup de gens cherchent des failles dans les navigateurs et ça arrive souvent qu'il y en ait côté mot de passe
- souvent très peu sécurisé car très peu voir pas du tout chiffré, donc n'importe qui pourrait lire les mots de passe sur le réseau
-->

---

# niveau 4 : gestionnaire de mot de passe propriétaire (1password, lastpass, dashlane, etc.)

![bg vertical right:25%](img/dashlane.jpg)
![bg](img/lastpass.jpg)
![bg](img/1password.png)

<!--
- beaucoup mieux dans le sens où on a quelque chose censé être sécurisé pour le stockage des mdp
- on ne sait pas si c'est fiable en vrai
- on ne sait pas si le chiffrement est bout en bout (contenu pas accessible à l'entreprise)
- quid de la fermeture de l'entreprise ?
- solution clé en main
- user friendly
-->

---

# niveau 5 : gestionnaire de mot de passe open-source (Keepass(2/XC), pass, Bitwarden, etc.)

![bg vertical right:33%](img/keepass.png)
![bg](img/keepassxc.svg)
![bg](img/qtpass.png)
![bg](img/bitwarden.png)

<!--
- beaucoup mieux car on utilise un logiciel qui peut être étudié
- pas de backdoor
- souvent basé sur des standards de chiffrement reconnus
- peu de risque de pérénité
- attention aux problématiques de synchronisation
-->

---

<style scoped>
h1 {
    color: white;
    position: absolute;
    bottom: 0.5rem;
    left: 2rem;
}
</style>

# niveau 6 : double authentification via code

![bg](img/2fa.jpg)

<!--
- on a besoin de deux choses pour s'authentifier : quelque chose qu'on connait et quelque chose qu'on possède
- difficile de voler les 2 en même temps
- souvent ça passe par un sms => bof, très facile d'intercepter des sms (zéro sécurité)
- les authentificateurs (type Google Authenticator) dépendent de service en ligne tiers
- l'objet est notre smartphone mais quid de l'authentification depuis le smartphone, ce que l'ont possède c'est l'objet lui-même ?
-->

---

# niveau 7 : double authentification physique

![bg right:25%](img/yubikey.png)

<!--
- le must aujourd'hui
- Yubikey en exemple
- offre un côté pratique pour gérer tout
- pas toujours disponible sur les services qu'on utilisent...
-->

---

<style scoped>
h1 {
    color: white;
    position: absolute;
    left: 15rem;
}
</style>

# Où j'en suis moi ?

![bg](img/myself.jpg)

<!-- 
- niveau 5 avec pass (gitea perso auto-hébergé + ssh) 
    + encore quelques mots de passe que j'ai en tête (parfois réutilisé)
- un peu plus de 300 mots de passe dont une grande partie font 120 caractères aléatoires
- 
-->

---

<style scoped>
a {
    color: white;
    position: absolute;
    right: 1rem;
    bottom: 1rem;
}
</style>

[Aller sur le site](https://haveibeenpwned.com/)

![bg vertical](img/haveibeenpwned.com.png)
