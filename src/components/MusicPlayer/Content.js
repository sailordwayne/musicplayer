/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { Children } from 'react'

const Content = ({ children }) => {
  return (
    <div className="Content" css={CSS}>
      {children}
    </div>
  )
}

const CSS = css`
  width: calc(100% - 200px);
  padding: 20px;
  background: #121212;
`

export default Content
