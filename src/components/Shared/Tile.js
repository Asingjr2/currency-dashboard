import React from 'react';
import styled from 'styled-components';
import {subtleBoxShadow, lightBlueBackground, greenBoxShadow, redBoxShadow} from './Styles';

export const Tile = styled.div`
  ${subtleBoxShadow}
  ${lightBlueBackground}
  padding: 10px;
`

// tile inherits all qualities of base styled tile with additions of hover function
export const SelectTile = styled(Tile)`
&:hover{
  cursor: pointer;
  ${greenBoxShadow}
}`

export const DeleteTile = styled(Tile)`
&:hover{
  cursor: pointer;
  ${redBoxShadow}

}`

export const DisableTile = styled(Tile)`
  pointer-events: none;
  opacity: 0.4
`
