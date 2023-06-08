import Singleton from '../src/singleton';

const { Player, Game, Scoreboard} = Singleton; 

describe("Player",()=>{

test("Create a player", () => {
  const player = new Player("Ivan");
  expect(player.name).toBe("Ivan");
});

test("Player have to has name and score",()=>{
const player = new Player("Ivan");

expect(player.name).toBe("Ivan");

expect(player.score).toBe(0);

})

test("Add points to the player's score", () => {
  const player = new Player("Ivan");

  player.addPoints(10);

  expect(player.score).toBe(10);
});

test("Subtract points from the player's score", () => {

  const player = new Player("Laus");

  player.subtractPoints(10);

  expect(player.score).toBe(-10);

});

});


describe("Game", () => {

  test("Create a game", () => {
    
    const game = new Game();

    expect(game).toBeInstanceOf(Game);

  });

  test("Add a player to the game", () => {
    const game = new Game();
    const player = new Player("Ivan");
  

    game.addPlayer(player);

    expect(game.players).toContain(player);
  });


  test("Display the scoreboard", () => {
    const game = new Game();
    const player = new Player("Ivan");
    const player2 = new Player("Laus");

    game.addPlayer(player);
    game.addPlayer(player2);

    player.addPoints(10);
    player2.subtractPoints(10);

    const consoleSpy = jest.spyOn(console, "log");

    game.displayScoreboard();

    expect(consoleSpy).toHaveBeenCalledWith("Ivan: 10");
    expect(consoleSpy).toHaveBeenCalledWith("Laus: -10");
    expect(consoleSpy).toHaveBeenCalledWith("Winner: Ivan");
  });

  test ("Get the winner", () => {
    const game = new Game();
    const player = new Player("Ivan");
    const player2 = new Player("Laus");

    game.addPlayer(player);
    game.addPlayer(player2);

    player.addPoints(10);
    player2.subtractPoints(10);

    expect(game.getWinner()).toBe(player);
  });
  })


describe("Scoreboard", () => {
  test("Create a scoreboard", () => {
    const scoreboard = Scoreboard.getInstance();

    expect(scoreboard).toBeInstanceOf(Scoreboard);
  });

  test("Display the scoreboard", () => {
    const scoreboard = Scoreboard.getInstance();
    const game = new Game();
    const player = new Player("Ivan");
    const player2 = new Player("Laus");

    game.addPlayer(player);
    game.addPlayer(player2);

    player.addPoints(10);
    player2.subtractPoints(10);

    const consoleSpy = jest.spyOn(console, "log");

    scoreboard.displayScoreboard();

    expect(consoleSpy).toHaveBeenCalledWith("Ivan: 10");
    expect(consoleSpy).toHaveBeenCalledWith("Laus: -10");
    expect(consoleSpy).toHaveBeenCalledWith("Winner: Ivan");
  });

});

