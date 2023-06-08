
// Construeix una aplicació que creï diversos Jugadors/es. Els jugadors/es podran ser afegits a un Joc, que mostrarà un marcador amb les puntuacions i el guanyador/a. L'aplicació ha de poder afegir o treure punts a cada jugador/a perquè el marcador canviï. La classe Marcador ha d'implementar un patró Singleton com a requisit indispensable.

class Player {
    public name: string;
    public score: number;
  
    constructor(name: string) {
      this.name = name;
      this.score = 0;
    }
  
    public addPoints(points: number): void {
      this.score += points;
    }
  
    public subtractPoints(points: number): void {
      this.score -= points;
    }
}


class Game {
  public players: Player[];
  
    constructor() {
      this.players = [];
    }
  
  public addPlayer(player: Player): void {
      this.players.push(player);
    }
  
  public displayScoreboard(): void {
      this.players.forEach((player) => {
        console.log(`${player.name}: ${player.score}`);
      });
  
  const winner = this.getWinner();
      if (winner) {
        console.log(`Winner: ${winner.name}`);
      }
    }
  
    public getWinner(): Player | undefined {
      let highestScore = -Infinity;
      let winner: Player | undefined;
  
      this.players.forEach((player) => {
        if (player.score > highestScore) {
          highestScore = player.score;
          winner = player;
        }
      });
  
      return winner;
    }
  }

  class Scoreboard {
    private static instance: Scoreboard;
    private game: Game;
  
    private constructor() {
      this.game = new Game();
    }
  
    public static getInstance(): Scoreboard {
      if (!Scoreboard.instance) {
        Scoreboard.instance = new Scoreboard();
      }
  
      return Scoreboard.instance;
    }
  
    public addPlayer(player: Player): void {
      this.game.addPlayer(player);
    }
  
    public displayScoreboard(): void {
      this.game.displayScoreboard();
    }
  }
  

 

  const scoreboard = Scoreboard.getInstance();

    const player1 = new Player('Player 1');
    const player2 = new Player('Player 2');
    
    scoreboard.addPlayer(player1);
    scoreboard.addPlayer(player2);

    player1.addPoints(10);
    player2.addPoints(20);

    player1.addPoints(10);

    scoreboard.displayScoreboard();

    player1.subtractPoints(5);

    scoreboard.displayScoreboard();
    
 export default {Player, Game, Scoreboard};