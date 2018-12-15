import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import styled from 'styled-components';

import HeaderMenu from './components/header-menu';
import Contacts from './components/contacts';
import Main from './components/main';

const url = process.env.PUBLIC_URL + '/img/bg.jpg'

const HeaderWrapper = styled.header`
  width: 100%;
  height: 49px;
  background-color: #242424;
  opacity: 0.8;
`

const ContactsWrapper = styled.header`
  height: 89px;
  padding-top: 20px;
`

const MainWrapper = styled.main`
  height: 600px;
  padding-top: 130px;
  background: url(${url}) no-repeat;
  background-size: cover;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderWrapper>
          <Grid>
            <HeaderMenu />
          </Grid>
        </HeaderWrapper>
        <ContactsWrapper>
          <Grid>
            <Contacts />
          </Grid>
        </ContactsWrapper>
        <MainWrapper>
          <Grid>
            <Main />
          </Grid>
        </MainWrapper>
      </div>
    );
  }
}

export default App;
