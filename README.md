REGEX BLOCKS
===
#### Programatically build, edit, and compile regular expressions, one block at a time.

```
npm i -S regex-blocks
```

## List of Operations
All operations can be chained together. Use `regex(...operations).compile()` to generate the RegExp object.
##### Character Classes
+ strings `regex(str('my string')) // => my string`
+ any character `regex(anything()) // => .`
+ word `regex(word()) => // => \w`
+ digit `regex(digit()) // => \d`
+ space `regex(space()) // => \s`
+ character sets `regex(inSet( string )) // => [abc]`
+ not in sets `regex(inSet( string ).not()) // => [^abc]`
##### Anchors
+ start of string `regex(str('abc')).startsWith() // => ^abc`
+ end of string `regex(str('abc')).endsWith() // => abc$`
+ both `regex(str('abc')).fullMatch() // => ^abc$`
##### Groups and Lookaround
+ capture groups `regex(str('abc').capture()); // => (abc)`
+ non-capturing groups `regex(group(str('a'), str('b'), str('c'))); // => (?:abc)`
+ lookahead `regex(str('abc').whenFollowedBy(str('def'))) // => abc(?=def)`
+ back-references `regex(inSet(str('a'), str('b')).capture(), str('--'), backRef(1)) // => ([ab])--\1`
+ lookbehind `regex(str('def').whenFollowing(str('abc'))) // => (?!abc)def`
##### Quantifiers
+ kleene star `regex( word().zeroOrMore() ) // => \w*`
+ kleene plus `regex( word().oneOrMore() ) // => \w+`
+ repetitions `regex( word().repeat(2, 3) ) // => \w{2,3}`
#### Alternations
+ or `regex( any( str('a'), str('b'), str('c') ) ) // => (?:a|b|c)`

### Examples
##### Valid Email Regex
```ecmascript 6
let regexp = regex(
    word().oneOrMore(),
    str('@'),
    word().oneOrMore(),
    any(
        str('.com'),
        str('.io'),
        str('.org')
    )
).fullMatch().compile();
// => /^$\w+@\w+(?:\.com|\.io|\.org)/
```