import React from 'react'
import styled from 'styled-components'
import { Play, Stop } from './icons'

class PlayStopButton extends React.Component {
  render() {
    let { extraCss = '', playing = true, onClick = () => {} } = this.props

    return (
      <Wrapper extraCss={extraCss} onClick={onClick}>
        {playing ? <Play size={20} /> : <Stop size={20} />}
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => props.extraCss}
`

export default PlayStopButton