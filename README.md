# Frontend Mentor - Rock, Paper, Scissors solution

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Your users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser _(optional)_
- **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer _(optional)_

### Rules

If the player wins, they gain 1 point. If the computer wins, the player loses one point.

#### Original

- Paper beats Rock
- Rock beats Scissors
- Scissors beats Paper

#### Bonus

- Scissors beats Paper
- Paper beats Rock
- Rock beats Lizard
- Lizard beats Spock
- Spock beats Scissors
- Scissors beats Lizard
- Paper beats Spock
- Rock beats Scissors
- Lizard beats Paper
- Spock beats Rock

### Screenshot

![](./src/screenshots/Screenshot_5.png)
![](./src/screenshots/Screenshot_6.png)
![](./src/screenshots/Screenshot_7.png)
![](./src/screenshots/Screenshot_8.png)

### Links

- Solution URL: [Click Here](https://www.frontendmentor.io/solutions/responsive-rock-paper-scissors-lizard-spock-game-built-using-jsscss-zOTOEmn8BC)
- Live Site URL: [Click Here](https://playrpsls.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- SCSS/SASS
- Desktop-first workflow
- Vanilla Javascript
- [Parcel](https://parceljs.org/) - code bundling application used in minifying and reducing production file sizes.

### What I learned

I learnt a lot building my first game using javascript. I felt very happy after I finished building it, the logical aspect (javascript) wasn't that much tough of a test. What actually tested my skill a little was the layout and mobile responsiveness. Most of the codes I wrote that I really appreciated were all in javascript. From the part where I imported some helper functions I wrote myself that helped in building this gamified web application.

```css
@mixin background($property) {
  border-radius: 100%;
  padding: 15px;
  position: absolute;
  cursor: pointer;
  width: 120px;

  @if $property == scissors {
    background: $scissorsGradient;
    top: 0;
    right: 190px;
    transform: translate(20px, -20px);
  } @else if $property == paper {
    background: $paperGradient;
    top: 0;
    transform: translate(40px, 130px);
    right: 0;
  } @else if $property == rock {
    background: $rockGradident;
    right: 0;
    transform: translate(-40px, 20px);
    bottom: 0;
  } @else if $property == lizard {
    background: $lizardGradient;
    bottom: 0;
    left: 0;
    transform: translate(30px, 30px);
  } @else if $property == spock {
    background: $spockGradient;
    top: 0;
    left: 0;
    transform: translate(-30px, 100px);
  }
}

%props-style--inner {
  width: 100%;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ddd9d9;
  padding: 20px;
  box-shadow: 3px 3px 5px 3px rgba(0, 0, 0, 0.1);
}
```

```js
propContainer.addEventListener('click', function (e) {
  let randomAudio = randomizeProps(allBgAudio);
  audio(randomAudio);

  // simulating result here like real life rock paper scissors game
  userPicked = e.target.dataset.prop;
  computerPicked = randomizeProps(allProps);

  // hide current container
  propContainer.classList.add('hidden');

  // set the flex property of the body element
  body.classList.add('playerActive');

  let userSelected = document.querySelector(`.outer-container--${userPicked}`);

  userSelected.classList.add('mobile-outer--container');
  userSelected.firstElementChild.classList.add('mobile-inner--container');

  // append player1 selected item into container
  player1.appendChild(userSelected.cloneNode(true));

  // unhide the container to declare winner
  winnerDeclarator.classList.remove('hidden');

  setTimeout(() => {
    let computerSelected = document.querySelector(`.outer-container--${computerPicked}`);

    computerSelected.classList.add('mobile-outer--container');
    computerSelected.firstElementChild.classList.add('mobile-inner--container');

    computer.appendChild(computerSelected.cloneNode(true));
    simulateResult();
  }, 2000);
});
```

### Continued development

I'm yet to attain the position where I want to get to, I'll keep aiming higher and getting better at what I do. I love coding🤩🤩 and I also love how this code turned out. I also learnt due to the little experience I've had that no matter how complex a project might seem at first look, don't get scared away by it, honestly just get started doing that coding challenge or job. And it might actually turn out simpler than you anticipated. But of course you must have a plan before building such projects.

Atimes your projects might not go according to plan, but when you're coding, there's this flow of mind between you and your code that makes it seems your code talks to you. If a particular procedure would work or not you might have already figured it out even before testing it out.

When I saw a friend build this project, I loved the UI of the project, looks clean and modern🤩💯. So I also decided to take on that challenge as well, since I haven't built any game using javasript before and also the challenge was rated an `Advanced Challenge 🔥🔥` on `frontendmentor's website`. I couldn't think of a way to cross reference element to make sure if a user clicks a certain element and the computer picks a random element it should either declare the user `win/lose/draw`. Not that it was hard or anything, but what came to mind at first was using multiple `if/else` statements which I knew was very inefficient. After much thinking I figured out a better solution instead of nested `if/else statements`.

I also liked the fact that I was able cross reference `dataset properties` to the element selected by the user or computer. I learnt this trick while taking `@jonasSchmedtmann's javascript course`. But haven't had a chance to use it, or should I say I haven't thought logically in a way to implement such things the way he used them in that way.

But while I was naming my classes in the `HTML` I didn't even think much of this was a very good approach which would inturn help me build this project. While I was working on my `script file`, I then noticed the way I gave my classNames to those elements helped in completing this challenge successfully.

I'll keep improving both mentally and physically. The power of programming is the ability to build anything you want to build💯💫👨🏾‍💻 and I've never for once regretted the day I started learning to code.

` PS: I've finished taking ```jonas schmedtmann's javascript course```, I'm about getting a ```REACT``` course on udemy also `

## Author

- Website - [Abdullah Ayoola](https://github.com/abdullah43577)
- Frontend Mentor - [@abdullah43577](https://www.frontendmentor.io/profile/abdullah43577)
- Twitter - [@officialayo540](https://twitter.com/officialayo540)
