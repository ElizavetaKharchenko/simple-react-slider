import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Repair = styled.div`
  font-size: 40px;
  color: #ffffff;
  font-weight: 700;
  line-height: 50px;

  span {
    display: block;
    font-size: 24px;
    line-height: 30px;
  }
`
const About = styled.div`
  color: #ffffff;
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
  margin-top: 54px;
`
const CallBtn = styled.button`
  width: 245px;
  height: 64px;
  background-color: #ffa14b;
  color: #ffffff;
  border: none;
  border-radius: 30px;
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  margin-top: 34px;

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`

class Main extends Component {
  render() {
    return (
      <Row>
        <Col lg={5}>
          <Repair>
            Качественный ремонт
            <span>iphone за 35 минут и гарантия 1 год
            </span>
          </Repair>
          <About>
            Оставьте заявку на бесплатную диагностику без очереди,
            и получите защитное стекло, стоимостью 1000 рублей,
            с установкой в подарок!
          </About>
          <CallBtn> Отправить заявку!</CallBtn>
        </Col>
        <Col lg={6} lgOffset={1}>

        </Col>
      </Row>
    );
  }
}

export default Main;
