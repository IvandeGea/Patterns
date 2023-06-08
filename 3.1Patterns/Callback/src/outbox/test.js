// test('Verificar que se pueda sumar puntos correctamente a un jugador', () => {
//     const player = new Player('Player 1');
//     game.addPlayer(player);
//     player.addPoints(10);

//     expect(player.score).toBe(10);
// });

// test('Verificar que se pueda restar puntos correctamente a un jugador', () => {
//     const player = new Player('Player 1');
//     game.addPlayer(player);
//     player.score = 10;
//     player.subtractPoints(5);

//     expect(player.score).toBe(5);
// });

// test('Verificar que se pueda obtener el ganador del juego correctamente', () => {
//     const player1 = new Player('Player 1');
//     const player2 = new Player('Player 2');
//     game.addPlayer(player1);
//     game.addPlayer(player2);
//     player1.score = 20;
//     player2.score = 15;

//     const winner = game.getWinner();

//     expect(winner).toBe(player1);
// });

// test('Verificar que se pueda agregar varios jugadores al juego y que la lista de jugadores se actualice correctamente', () => {
//     const player1 = new Player('Player 1');
//     const player2 = new Player('Player 2');
//     game.addPlayer(player1);
//     game.addPlayer(player2);

//     expect(game.players.length).toBe(2);
//     expect(game.players[0]).toBe(player1);
//     expect(game.players[1]).toBe(player2);
// });

// test('Verificar que se pueda mostrar el marcador correctamente, mostrando el nombre y la puntuación de cada jugador', () => {
//     const player1 = new Player('Player 1');
//     const player2 = new Player('Player 2');
//     game.addPlayer(player1);
//     game.addPlayer(player2);
//     player1.score = 10;
//     player2.score = 20;

//     const consoleSpy = jest.spyOn(console, 'log');
//     game.displayScoreboard();

//     expect(consoleSpy).toHaveBeenCalledWith('Player 1: 10');
//     expect(consoleSpy).toHaveBeenCalledWith('Player 2: 20');
//     expect(consoleSpy).toHaveBeenCalledTimes(3); // 2 jugadores + 1 línea de ganador
// });

// test('Verificar que se muestre el ganador correctamente en el marcador', () => {
//     const player1 = new Player('Player 1');
//     const player2 = new Player('Player 2');
//     game.addPlayer(player1);
//     game.addPlayer(player2);
//     player1.score = 10;
//     player2.score = 20;

//     const consoleSpy = jest.spyOn(console, 'log');
//     game.displayScoreboard();

//     expect(consoleSpy).toHaveBeenCalledWith('Winner: Player 2');
// });

// test('Verificar que no se agreguen jugadores duplicados al juego', () => {
//     const player = new Player('Player 1');
//     game.addPlayer(player);
//     game.addPlayer(player);

//     expect(game.players.length).toBe(1);
// });

// describe('Scoreboard', () => {
//     let scoreboard;

//     beforeEach(() => {
//         scoreboard = Scoreboard.getInstance();
//     });

//     test('Verificar que no se puedan restar puntos si el jugador tiene una puntuación de cero', () => {
//         const player = new Player('Player 1');
//         scoreboard.addPlayer(player);

//         player.subtractPoints(10);

//         expect(player.score).toBe(0);
//     });

//     test('Verificar que la instancia del Scoreboard sea única (Singleton)', () => {
//         const scoreboard2 = Scoreboard.getInstance();

//         expect(scoreboard).toBe(scoreboard2);
//     });

//     test('Verificar que se pueda acceder a la instancia del Scoreboard desde diferentes partes del código y que sea la misma instancia', () => {
//         const player = new Player('Player 1');
//         scoreboard.addPlayer(player);
//         const scoreboard2 = Scoreboard.getInstance();

//         expect(scoreboard).toBe(scoreboard2);
//         expect(scoreboard2.game.players.length).toBe(1);
//     });