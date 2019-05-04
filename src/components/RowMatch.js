import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";
import TabMatch from "./TabMatch";
import TabBet from "./TabBet";
import web3 from "../web3";
import soccerToken from "../soccerToken";

class RowMatch extends Component {
  state = {
    manager: "",
    message: "",
    payment: false,
    bet: false,
    selectedBet: ""
  };

  handlePay = () => {};

  onPay = async event => {
    const accounts = await web3.eth.getAccounts();

    if (this.state.payment) {
    } else {
      this.setState({ message: "Rozpoczynam transakcję..." });
      await soccerToken.methods.pay().send({
        from: accounts[0]
      });
      this.setState({ message: "Transakcja zakończona." });
      this.setState(() => ({
        payment: !this.state.payment
      }));
    }
  };

  onBet1 = async event => {
    this.setState(() => ({
      bet: !this.state.bet
    }));
    this.setState(() => ({
      selectedBet: this.props.match.r1
    }));
  };

  onBetX = async event => {
    this.setState(() => ({
      bet: !this.state.bet
    }));
    this.setState(() => ({
      selectedBet: this.props.match.rX
    }));
  };

  onBet2 = async event => {
    this.setState(() => ({
      bet: !this.state.bet
    }));
    this.setState(() => ({
      selectedBet: this.props.match.r2
    }));
  };

  render() {
    const match = this.props.match;
    const { HeaderCell, Row, Cell, Body, Header } = Table;
    return (
      <>
        <Table celled padded color="olive" columns="7">
          <Header>
            <Row>
              <HeaderCell textAlign="center">Time</HeaderCell>
              <HeaderCell textAlign="left">Home</HeaderCell>
              <HeaderCell textAlign="left">Guest</HeaderCell>
              <HeaderCell textAlign="center">1</HeaderCell>
              <HeaderCell textAlign="center">X</HeaderCell>
              <HeaderCell textAlign="center">2</HeaderCell>
              <HeaderCell textAlign="center">Statystyki</HeaderCell>
            </Row>
          </Header>
          <Body>
            <Row>
              <Cell textAlign="center">{match.time}</Cell>
              <Cell textAlign="left">{match.home}</Cell>
              <Cell textAlign="left">{match.guest}</Cell>
              <Cell onClick={this.onBet1} className="bet" textAlign="center">
                {match.r1}
              </Cell>
              <Cell onClick={this.onBetX} className="bet" textAlign="center">
                {match.rX}
              </Cell>
              <Cell onClick={this.onBet2} className="bet" textAlign="center">
                {match.r2}
              </Cell>
              <Cell textAlign="center">
                <Button onClick={this.onPay}>Zobacz</Button>
              </Cell>
            </Row>
          </Body>
        </Table>
        <h1>{this.state.message}</h1>
        {this.state.payment ? <TabMatch H2H={this.props.match} /> : null}
        {this.state.bet ? (
          <TabBet
            matchDetail={this.props.match}
            selectedBet={this.state.selectedBet}
          />
        ) : null}
      </>
    );
  }
}

export default RowMatch;
