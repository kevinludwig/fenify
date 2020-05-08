import Chess from 'chess.js';
const last = (a) => a && a.length && a[a.length-1];

const _fenify = (fen, moves) => {
    const chess = new Chess(fen);

    return moves.map(m => {
        const lastFen = chess.fen();
        const lastMove = chess.move(m.move.replace('...', ''));
        if (!lastMove) throw new Error('invalid move, ' + m.move + ', fen: ', lastFen);

        const fen = chess.fen();
        return {
            ...m,
            from: lastMove.from, 
            to: lastMove.to,
            fen,
            ravs: m.ravs && m.ravs.map(rav => ({
                ...rav, 
                moves: _fenify(lastFen, rav.moves)
            }))
        };
    });
};

export const fenify = (game) => {
    const fen = game.headers.FEN || 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
    return {
        ...game,
        moves: _fenify(fen, game.moves)
    };
};

export default fenify;
