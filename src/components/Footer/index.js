import React from 'react';
import styled from 'styled-components';
import { lightBlueBackground } from '../Shared/Styles';

const StyledFooter = styled.div`
  height: 75px;
  margin-top: 30px;
  text-align: justify;
`

const StyledH4 = styled.h4`
  color: white;
  &:hover{
  cursor: pointer;
  color: blue;
  }`

const StyledAnchor = styled.a`
  color: white;
  &:hover{
  cursor: pointer;
  color: blue;
}
`

const PaddedH4 = styled.div`
  padding:20px;
  margin-top: 20px;
  text-align: center;
  ${lightBlueBackground}
  border-bottom: 3px solid white;
  opacity: 0.5;
  &:hover{
  opacity: 1;
  color: black
  cursor: pointer;
  background-color: orange;
  }
` 

const PaddedGrid = styled.div`
  padding:20px;
  text-align: center;
  ${lightBlueBackground}
  &:hover{
  background-color: orange;
  }
`
const Footer = () => (
  <StyledFooter>
    <PaddedH4>
      <StyledH4>Demo site was created to provide quick track to a users favorite cryptocurrncies and provide a way check popular Youtube videos.  To learn more about libraries for this application checkout links below.</StyledH4>
    </PaddedH4>
    <PaddedGrid>
      <div className="ui grid">
        <div className="four wide column" data-tooltip="CSS formatting library that allows great customization">
          <StyledAnchor href="https://www.styled-components.com/">Styled Components</StyledAnchor>
        </div>
        <div className="four wide column" data-tooltip="HTML/CSS/JS library that contains custom CSS tags with greater functionaility.">
          <StyledAnchor href="https://semantic-ui.com/">Semantic UI</StyledAnchor>
        </div>
        <div className="four wide column" data-tooltip="Cryptocurrency website that tracks historic and past prices">
          <StyledAnchor href="https://www.cryptocompare.com/">CryptoCompare</StyledAnchor>
        </div>
        <div className="four wide column" data-tooltip="Charting library for multiple data types">
          <StyledAnchor href="www.npmjs.com/package/react-highcharts">HighCharts</StyledAnchor>
        </div>
      </div>
    </PaddedGrid>
  </StyledFooter>
)

export default Footer;
