### Fenify

Generate FEN strings for every position in `pgn-parser` output, e.g. for building PGN web player using a UX
library such as chessboard.js.

### Build

* Build distribution `npm run dist`
* Run tests `npm test`

### Usage

```

import fenify from 'fenify';
import pgnParser from 'pgn-parser';

fs.readFile('some.pgn', 'utf-8', (err, data) => {
    const [game] = pgnParser.parse(data);
    console.log(fenify(game));
});

```
