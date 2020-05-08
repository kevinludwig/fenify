const pgnParser = require('pgn-parser');
const {fenify} = require('../dist/fenify.js');

const pgnText = '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 (3. ...Nf6 {is the two knights}) 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O Nge7 $1 *';
const pgnData = pgnParser.parse(pgnText);
console.log(JSON.stringify(pgnData, null, 2));
console.log(JSON.stringify(fenify(pgnData[0]), null, 2));
