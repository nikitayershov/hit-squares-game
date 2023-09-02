import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { ModalComponent } from './modal/modal.component'; // Assuming your GameComponent is in 'game' folder

@NgModule({
  declarations: [AppComponent, GameComponent, ModalComponent],
  imports: [BrowserModule, FormsModule], // Add FormsModule here
  bootstrap: [AppComponent],
})
export class AppModule {}