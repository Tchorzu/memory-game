# Memory Game

## Overview

This is a single-player Memory Game application built using React and JavaScript. The game challenges the player to match pairs of cards by remembering their positions on a grid. It is a fun and engaging way to test and improve memory skills.

Created as part of the [zrozumiecreact.pl](https://zrozumiecreact.pl) course.

## Features

- **Single-Player Mode:** The game is designed for one player, providing an individual challenge to match all pairs of cards.
- **Randomized Card Placement:** After each game reset, the cards are shuffled and placed randomly on the grid.
- **Fixed Number of Cards:** The number of cards on the board is predefined, creating a consistent difficulty level.
- **Reset Functionality:** The player can reset the game at any time to start over with a new shuffle of the cards.

## Getting started

To run the application follow the steps:

1. **Clone the repository**:
   ```shell
   git clone https://github.com/Tchorzu/memory-game
   cd memory-game
   ```

2. **Install dependencies**:

   Make sure you have [Node.js](https://nodejs.org/en/download/package-manager) installed, then run:

    ```shell
    npm install
    ```

3. **Start the development server**:

    ```shell
    npm run dev
    ```

## Technologies Used
- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool and development server.

## How to play

- **Start the Game:** When the game starts, cards are laid face down on the grid.
- **Flip a Card:** Click on any card to flip it over and reveal the image.
- **Match Pairs:** Try to find and match pairs of cards with the same image. If the cards match, they stay face up; if not, they flip back over.
- **Reset and Shuffle:** After each game, or if you reset the game, the cards are shuffled and placed randomly on the grid for a new challenge.
- **Win the Game:** The game is won when all pairs have been successfully matched.