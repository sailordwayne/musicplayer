/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import Content from './Content'
import Playbar from './Playbar'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

const MusicPlayer = () => {
  return (
    <div className="MusicPlayer" css={CSS}>
      <Topbar />
      <Sidebar />
      <Content></Content>
      <Playbar></Playbar>
    </div>
  )
}

const CSS = css`
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
  color: white;
`

export default MusicPlayer
