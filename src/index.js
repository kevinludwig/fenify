import Chess from 'chess.js';

const _fenify = (fen, moves) => {
    const chess = new Chess(fen);

    return moves.map(m => {
        chess.move(m.move);
        const fen = chess.fen();
        return {
            ...m,
            fen,
            ravs: m.ravs && m.ravs.map(rav => ({
                ...rav, 
                moves: _fenify(fen, rav.moves)
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
