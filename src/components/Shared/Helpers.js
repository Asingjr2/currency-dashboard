import styled from 'styled-components';

export const formatNum = number => {
  return +(number + '').slice(0,6);
}

export const JustifyLeft = styled.div`
  Justify-self: left;
`

export const JustifyRight = styled.div`
  Justify-self: right;
`
