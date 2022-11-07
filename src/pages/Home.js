/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const Home = () => {
  return (
    <div className="Home" css={CSS}>
      <h1>Hello</h1>
    </div>
  )
}

const CSS = css`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #282c34;

  h1 {
    color: white;
  }
`

export default Home
