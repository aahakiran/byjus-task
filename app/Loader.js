import styled, { keyframes } from 'styled-components';
import React from 'react';

const BounceAnimation = keyframes`
  0%, 80%, 100% { 
    transform: scale(0);
  } 40% { 
    transform: scale(1.0);
  }
`;

const SpinnerCon = styled.div`
  margin-top: 100px;
  text-align: center;
`;

const Bouncer = styled.div`
  width: 10px;
  height: 10px;
  background-color: purple;
  border-radius: 100%;
  margin: 0 2px;
  display: inline-block;
  animation: ${BounceAnimation} 1.4s infinite ease-in-out both;
`;

const Bouncer1 = styled(Bouncer)`
  animation-delay: -0.32s;
`;
const Bouncer2 = styled(Bouncer)`
  animation-delay: -0.16s;
`;
const Bouncer3 = styled(Bouncer)``;

const BLoader = props => (
  <SpinnerCon>
    <Bouncer1 />
    <Bouncer2 />
    <Bouncer3 />
  </SpinnerCon>
);

export default BLoader;
