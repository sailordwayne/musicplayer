# React Hacker

A simple React starter that's perfect for messing around.

## Overview

This package includes the following:

- [Babel](https://babeljs.io/docs/en/)
- [Webpack](https://webpack.js.org/concepts/)
- [Emotion CSS in JS](https://emotion.sh/docs/introduction)
- [React Bootstrap](https://react-bootstrap.github.io/components/alerts/)
- [Font Awesome 4.7](https://fontawesome.com/v4.7/icons/)
- [React Router](https://reactrouter.com/web/guides/quick-start)
- [Lodash](https://lodash.com/docs/4.17.15)
- [Axios](https://axios-http.com/docs/intro)
- [ESlint](https://www.npmjs.com/package/eslint-config-airbnb)
- [Airbnb ESlint Config](https://www.npmjs.com/package/eslint-config-airbnb)
- [Prettier](https://prettier.io/docs/en/index.html)

## Usage

The starter consists of a simple two page template to demonstrate that everything is working properly. There are examples of how to use Emotion CSS in various ways in the code, and an example of how to use the file loader to import an image on the Home page. Please read the additional notes in the next section before using.

- `git clone https://github.com/DZuz14/react-hacker.git`
- `cd react-hacker`
- `npm i` or `yarn`
- `npm start` or `yarn start`

If your browser does not automatically open, visit `http://localhost:8080`.

## Notes

For the most part, if you plan to use Emotion, you do not need to import React like this:

- `import React from 'react'`

The reason being is that this uses [JSX Pragma](https://www.gatsbyjs.com/blog/2019-08-02-what-is-jsx-pragma/), which handles that for us. Most of the time, the top of any new React related file that you create should look like the following.

```
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
```

or this if you are using styled components.

```
/** @jsx jsx */
import { jsx } from '@emotion/react'
import styled from '@emotion/styled'
```

or this if you are using both the css prop and styled components together.

```
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
```

If you need to import hooks and anything else from React, you need to do it like this:

```
import { useState, useEffect, useRef } from 'react'
```

If you have a React file that you don't want to use Emotion in, you can simply import React like usual. There is no need to have the `/**@jsx jsx */` at the top, or any imports related to Emotion, just:

- `import React from 'react'`
