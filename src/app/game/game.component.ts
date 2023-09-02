import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  playerScore = 0;
  computerScore = 0;
  timeInput = 1000; // Default time interval in milliseconds
  squares: Square[] = [];
  gameInterval: any;
  showModal = false; // Initialize showModal as false
  winner: string = '';
  @ViewChild(ModalComponent) modal!: ModalComponent; // Access the modal component

  ngOnInit() {
    this.createSquares();
  }

  createSquares() {
    this.squares = [];
    for (let i = 0; i < 100; i++) {
      this.squares.push({ color: 'blue' });
    }
  }

  startGame() {
    this.playerScore = 0;
    this.computerScore = 0;
    this.createSquares();
    clearInterval(this.gameInterval);
    this.gameInterval = setInterval(() => this.showRandomSquare(), this.timeInput);
  }

  showRandomSquare() {
    const randomIndex = Math.floor(Math.random() * this.squares.length);
    this.squares[randomIndex].color = 'yellow';
    const currentSquare = this.squares[randomIndex];
  
    setTimeout(() => {
      if (currentSquare.color === 'yellow') {
        currentSquare.color = 'red';
        if (this.computerScore < 10) {
          this.computerScore++;
        }
        this.checkEndGame();
      }
    }, this.timeInput);
  }
  

  onSquareClick(square: Square) {
    if (square.color === 'yellow') {
      square.color = 'green';
      this.playerScore++;
    } 
    this.checkEndGame();
  }

  checkEndGame() {
    if (this.playerScore >= 10 || this.computerScore >= 10) {
      clearInterval(this.gameInterval);
  
      if (this.playerScore > this.computerScore) {
        this.winner = 'Player';
      } else if (this.computerScore > this.playerScore) {
        this.winner = 'Computer';
      } else {
        this.winner = 'It\'s a tie';
      }
  
      // Show the modal
      this.showModal = true;
    }
  }
  handleRestartGame() {
    this.showModal = false; // Close the modal
    this.winner = ''; // Reset the winner
    this.playerScore = 0; // Reset player score
    this.computerScore = 0; // Reset computer score
    this.createSquares(); // Reset the squares
    clearInterval(this.gameInterval); // Clear the game interval
    this.gameInterval = setInterval(() => this.showRandomSquare(), this.timeInput); // Start a new game
  }
}

interface Square {
  color: string;
}
