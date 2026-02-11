function checkGameStatus() {
    if (game.isCheckmate()) {
        const winner = game.turn() === 'w' ? 'Black' : 'White';
        alert("Checkmate! " + winner + " wins!");
    }
    else if (game.isDraw()) {
        alert("Draw!");
    }
}