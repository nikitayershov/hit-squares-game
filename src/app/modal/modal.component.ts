import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() winner!: string; // Use the non-null assertion operator
  @Output() restartGameClicked = new EventEmitter<void>();

  handleRestartGame() {
    this.restartGameClicked.emit();
  }
}