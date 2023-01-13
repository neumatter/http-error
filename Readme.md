
# HTTPError
[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

HTTPError class.

<br />

## Table of Contents
- [ Installation ](#install)
- [ Usage ](#usage)

<br />

<a name="install"></a>
## Install

```console
npm i @neumatter/http-error 
```

<br />

<a name="usage"></a>
## Usage


### uses:
```js
import HTTPError from '@neumatter/http-error'

throw new HTTPError(404, 'not found')
throw new HTTPError(404)
throw new HTTPError('not found')
```
