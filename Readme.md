
# randomBytes
[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

Random Bytes function. Works in nodejs and browser.

<br />

## Table of Contents
- [ Installation ](#install)
- [ Usage ](#usage)

<br />

<a name="install"></a>
## Install

```console
npm i @neumatter/random-bytes 
```

<br />

<a name="usage"></a>
## Usage


### sync:

```js
import randomBytes from '@neumatter/random-bytes'

const byteView = randomBytes(32)
// ...use byteView
```


### callback:

```js
import randomBytes from '@neumatter/random-bytes'

randomBytes(32, (err, byteView) => {
  if (err) {
    console.error(err)
  } else {
// ...use byteView
  }
})
```
