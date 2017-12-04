REGEX BLOCKS
===
#### Programatically build, edit, and compile regular expressions, one block at a time.

```
npm i -S regex-blocks
```

## Quickstart
```ecmascript 6
const {regex, word} = require('regex-blocks');

const emailRegex = regex( 
        word().oneOrMore(),
        str('@'), 
        word().oneOrMore(),
        anyOf(str('.com'), str('.org'), str('.io')).capture()
    ).fullMatch().compile();

// outputs: /^\w+@\w+(\.com|\.org|\.io))
```

.. more documentation to come