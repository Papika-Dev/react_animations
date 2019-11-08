import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Slider from './components/pages/Slider';
import AnimaBox from './components/pages/AnimaBox';
import NavBar from './components/pages/NavBar';

const Global = createGlobalStyle`
  body {
    background: #f5f5f5;
  }
  * {
    padding: 0;
    margin: 0;
  }
`;
const Wrapper = styled.div`
    max-width:70vw;
    width:100%;
    min-height:400px;
    margin: 10px auto;
    text-align:center;
    position:relative;
    background: #fff;
    box-shadow: 0 0 6px #c9c9c9;
    border-radius: 4px;
`;


function App() {


  return (
    <Router>
      <Global />
      <NavBar />
      <Wrapper>
        <Switch>
          <Route path="/" exact component={Slider} />
          <Route path="/slider" component={Slider} />
          <Route path="/animabox" component={AnimaBox} />
        </Switch>
      </Wrapper>

    </Router>

  );
}

export default App;


