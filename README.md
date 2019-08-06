
### `Intro`
wrap strings it color code for console display

#### `Install`
``` bash
npm install --save git+https://github.com/anzerr/console.color.git
```

### `Example`
``` javascript
const color = require('console.color');
console.log(color.red('single string'), 'or chained text', color.chain.red('red').blue('blue').none('chained with normal text').green('green').toString(), 'done');
```