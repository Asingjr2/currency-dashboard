import React from 'react';
import styled, { css } from 'styled-components';
import { AppContext} from './AppProvider';

const Logo = styled.div`
  font-size: 2em;
`
const Bar = styled.div `
  display: grid;
  margin-bottom: 30px;
  grid-template-columns: 2fr 1fr 1fr 1fr;
`

// need to review the passing of the props information
const ControlButtonElement = styled.div`
  font-size: 2em; 
  cursor: pointer;
  ${props => props.active && css`
    text-shadow: 0px 0px 60px #03ff90;
  `}
  ${props => props.hidden && css`
  display: none;
  `}
  &:hover{
  cursor: pointer;
  color: orange;
  }
`

function Capitalize(word) {
  return word[0].toUpperCase() + word.substr(1);
}

// using ES6 syntax to destructure object
// using context to pass state
function ControlButton({name}) {
  return (
    <AppContext.Consumer>
      {({initialVisit, page, setPage}) => (
        <ControlButtonElement 
        active={page===name}
        onClick={() => setPage(name)}
        hidden={initialVisit && name === 'dashboard'}
        >
          {Capitalize(name)}
        </ControlButtonElement>
        )}
    </AppContext.Consumer>
  )
}

const Header = () => (
  <Bar>
    <Logo><i class="dollar sign icon"></i>CurrencyCheck</Logo>
    <ControlButton active name="dashboard"/> 
    <ControlButton name="coinlist" />
    <ControlButton name="videos" />
  </Bar>
  );

export default Header;
