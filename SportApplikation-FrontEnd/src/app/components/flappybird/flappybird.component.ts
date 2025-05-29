import {Component, ElementRef, ViewChild, AfterViewInit, HostListener, Output, EventEmitter} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'app-flappybird',
  imports: [
    FormsModule,
    NgIf,
  ],
  templateUrl: './flappybird.component.html',
  styleUrl: './flappybird.component.css'
})
export class FlappyBirdComponent implements AfterViewInit {
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  @Output() showGame = new EventEmitter<boolean>();
  ctx!: CanvasRenderingContext2D;

  birdY = 250;
  birdVelocity = 0;
  gravity = 0.5;
  jumpStrength = -8;
  pipes: Pipe[] = [];
  pipeSpeed = 2;
  gapHeight = 150;
  pipeWidth = 60;

  score = 0;
  highScore = 0;

  gameStarted = false;
  gameOver = false;
  GamingTimerSecondsLeft: number = 90;
  GamingTimerEnded: boolean = false;
  GamingTimer: any;

  constructor(private userService: UserService) {

  }
  ngAfterViewInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.drawStartScreen();
    this.GameTimer()
  }

  startGame() {
    this.birdY = 250;
    this.birdVelocity = 0;
    this.score = 0;
    this.pipes = [];
    this.spawnPipes();
    this.gameStarted = true;
    this.gameOver = false;
    this.gameLoop();
  }

  GameTimer(){
    this.GamingTimerEnded = false;
    this.GamingTimerSecondsLeft = 90;

    this.GamingTimer = setInterval(() => {
      this.GamingTimerSecondsLeft--;

      if (this.GamingTimerSecondsLeft <= 0) {
        this.GamingTimerEnded= true;
        this.GamingTimerSecondsLeft = 0;
        clearInterval(this.GamingTimer);
      }
    }, 1000);
  }

  spawnPipes() {
    this.pipes.push({
      x: 400,
      gapY: Math.floor(Math.random() * (600 - this.gapHeight)),
      passed: false
    });
  }

  gameLoop() {
    this.update();
    this.draw();

    if (!this.checkCollision()) {
      requestAnimationFrame(() => this.gameLoop());
    } else {
      if (this.score > this.highScore) {
        this.highScore = this.score;
      }
      this.gameOver = true;
      this.gameStarted = false;
      this.drawGameOverScreen();
    }
  }

  update() {
    this.birdVelocity += this.gravity;
    this.birdY += this.birdVelocity;

    this.pipes.forEach(pipe => {
      pipe.x -= this.pipeSpeed;

      if (!pipe.passed && pipe.x + this.pipeWidth < 50) {
        this.score++;
        pipe.passed = true;
      }
    });

    if (this.pipes.length && this.pipes[this.pipes.length - 1].x < 200) {
      this.spawnPipes();
    }

    this.pipes = this.pipes.filter(pipe => pipe.x + this.pipeWidth > 0);
  }

  draw() {
    this.ctx.clearRect(0, 0, 400, 600);

    // Hintergrund
    this.ctx.fillStyle = '#70c5ce';
    this.ctx.fillRect(0, 0, 400, 600);

    // Vogel
    this.ctx.fillStyle = 'yellow';
    this.ctx.fillRect(50, this.birdY, 20, 20);

    // Rohre
    this.ctx.fillStyle = 'green';
    this.pipes.forEach(pipe => {
      this.ctx.fillRect(pipe.x, 0, this.pipeWidth, pipe.gapY);
      this.ctx.fillRect(pipe.x, pipe.gapY + this.gapHeight, this.pipeWidth, 600 - (pipe.gapY + this.gapHeight));
    });
  }

  drawStartScreen() {
    this.draw(); // Hintergrund & Pipes zeichnen
    this.ctx.fillStyle = '#000';
    this.ctx.font = '16px monospace';
    this.ctx.textAlign = 'center';

    this.ctx.fillStyle = '#000';
    this.ctx.fillRect(100, 250, 200, 100);

    this.ctx.fillStyle = '#fff';
    this.ctx.fillText('Flappy Bird', 200, 280);
    this.ctx.fillText('Klick oder Leertaste', 200, 310);
    this.ctx.fillText('um zu starten!', 200, 340);
  }

  drawGameOverScreen() {
    this.ctx.fillStyle = '#000';
    this.ctx.font = '16px monospace';
    this.ctx.textAlign = 'center';

    this.ctx.fillStyle = '#000';
    this.ctx.fillRect(100, 250, 200, 120);

    this.ctx.fillStyle = '#fff';
    this.ctx.fillText('Game Over', 200, 280);
    this.ctx.fillText(`Score: ${this.score}`, 200, 300);
    this.ctx.fillText(`Highscore: ${this.highScore}`, 200, 320);
    this.ctx.fillText('Klick oder Leertaste', 200, 340);
  }

  checkCollision(): boolean {
    if (this.birdY < 0 || this.birdY + 20 > 600) return true;

    return this.pipes.some(pipe =>
      50 + 20 > pipe.x && 50 < pipe.x + this.pipeWidth &&
      (this.birdY < pipe.gapY || this.birdY + 20 > pipe.gapY + this.gapHeight)
    );
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.code === 'Space') {
      if (!this.gameStarted && !this.GamingTimerEnded) {
        this.startGame();
      } else if (this.gameOver && !this.GamingTimerEnded) {
        this.startGame();
      } else if(this.gameOver && this.GamingTimerEnded) {
        this.backToWorkout();
      }else {
        this.birdVelocity = this.jumpStrength;
      }
    }
  }

  @HostListener('window:click')
  onClick() {
    console.log(this.gameOver,this.GamingTimerEnded);
    if (!this.gameStarted && !this.GamingTimerEnded) {
      this.startGame();
    } else if (this.gameOver && !this.GamingTimerEnded) {
      this.startGame();
    } else if(this.gameOver && this.GamingTimerEnded) {
      this.backToWorkout();
    }else {
      this.birdVelocity = this.jumpStrength;
    }
  }

  backToWorkout() {
    this.showGame.emit(false);
    //Vergleich der Scores in setHighscore
    this.userService.setHighscore(this.highScore)
  }
}

interface Pipe {
  x: number;
  gapY: number;
  passed: boolean;
}
