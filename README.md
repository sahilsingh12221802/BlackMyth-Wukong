<img src = "https://gmedia.playstation.com/is/image/SIEPDC/black-myth-wukong-hero-desktop-01-en-07feb24?$2400px$" />

# BlackMyth-Wukong

![GitHub repo size](https://img.shields.io/github/repo-size/sahilsingh12221802/BlackMyth-Wukong)

## Description

This repository contains an interactive website for Black Myth: Wukong, featuring animated transitions, GSAP animations, and responsive design.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Contributing](#contributing)

## Installation

```bash
# Clone this repository
$ git clone https://github.com/yourusername/BlackMyth-Wukong

# Go into the repository
$ cd BlackMyth-Wukong

# Open in browser
$ open index.html
```

## Features

* 📱 Responsive Design
* 🎨 Dynamic Animations
* 🖼️ Interactive Enemy Gallery
* 🎮 Game Information Display
* 🌊 Smooth Scroll Effects
* 🎯 Custom Cursor Effects

## Technologies

* HTML5
* CSS3
* JavaScript
* TailwindCSS
* GSAP Animation
* Locomotive Scroll

## Setup

### Prerequisites

* Modern web browser
* Basic understanding of HTML/CSS/JS

### Configuration

1. No special configuration required
2. Just clone and open index.html
3. All dependencies are loaded via CDN

## Animation Features

### GSAP Animations

```javascript
function HomepageAnimation() {
    gsap.set(".slider", {scale: 5});
    // Animation configuration
}
```

### Scroll Triggers

```javascript
function realPageAnimation() {
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
        }
    })
}
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit changes (`git commit -am 'Add some fooBar'`)
4. Push to branch (`git push origin feature/fooBar`)
5. Create a Pull Request


