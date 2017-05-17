import React, { Component } from 'react';
import Board from './Board';

class Game extends Component {
  // Match Icons: fa-bug, fa-bolt, fa-cloud-upload, fa-cloud-download

  cards = [
    { flipped: false, matched: false, icon: 'fa-bug'},
    { flipped: false, matched: false, icon: 'fa-bolt'},
    { flipped: false, matched: false, icon: 'fa-bug'},
    { flipped: false, matched: false, icon: 'fa-bolt'},
    { flipped: false, matched: false, icon: 'fa-cloud-upload'},
    { flipped: false, matched: false, icon: 'fa-cloud-download'},
    { flipped: false, matched: false, icon: 'fa-cloud-upload'},
    { flipped: false, matched: false, icon: 'fa-cloud-download'}
  ]

  // use flippedCardIndexes to check how many cards are flipped
  // used matchedCardIndexes to check if count === 8 || this.state.cards.length ->then gameOver
  state = { cards: this.cards, flippedCardIndexes: [], matchedCardIndexes: [] };

  // What lifecycle method could we use each time the components state is updated to check for gameOver
// ANSWER: didUpdate

  // figure out how to end the game once all cards are matched this probably requires more state or a lifecycle method that loops card state
  // figure out how to start a new game
  // figure out how to change the players username while in the game
   // ANSWER: just setState

   //BONUS
   // figure out how to randomize cards on new game (HINT: look up javascript shuffle array)
   // Use images from images folder instead of fontawesome icons
  // implement a game timer and save fastest times
  // integrate this project into an express app and store this info to a database


// on card click-- needs to be passed as props to card.js
  updateCard = (cardIndex, flipped = false, matched = false) => {
    let cards = this.state.cards.map( (card, loopIndex) => {
      if(cardIndex === loopIndex)
        return { ...card, flipped, matched };
      else
        return card;
    })
    this.setState({ cards });
  }

  render(){
    let { username, gameStarted, gameOver } = this.props;

    return(
      <div className='container'>
        <h1 className='text-center'>React Memory Match</h1>
        <h4>Current Player: { username }</h4>
        <Board cards={ this.state.cards } updateCard={ this.updateCard }  />
      </div>
    );
  }
}

export default Game;
