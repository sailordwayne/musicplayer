/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { Children } from 'react'

const Playbar = ({ children }) => {
  return (
    <div className="Playbar" css={CSS}>
      {children}
    </div>
  )
}

const CSS = css`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 75px;
  background: #282828;
  z-index: 99;
  padding: 20px;
`

export default Playbar
