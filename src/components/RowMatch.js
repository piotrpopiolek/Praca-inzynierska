import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";
import TabMatch from "./TabMatch";
import web3 from "../web3";
import soccerToken from "../soccerToken";

class RowMatch extends Component {
  state = {
    manager: "",
    balance: "",
    message: "",
    payment: false
  };

  handlePay = () => {};

  async componentDidMount() {
    const balance = await web3.eth.getBalance(soccerToken.options.address);
    this.setState({ balance });
  }

  onClick = async event => {
    const accounts = await web3.eth.getAccounts();

    this.setState({ message: "Rozpoczynam transakcję..." });

    await soccerToken.methods.pay().send({
      from: accounts[0]
    });

    this.setState({ message: "Transakcja zakończona." });

    this.setState(() => ({
      payment: !this.state.payment
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
              <Cell textAlign="center">{match.r1}</Cell>
              <Cell textAlign="center">{match.rX}</Cell>
              <Cell textAlign="center">{match.r2}</Cell>
              <Cell textAlign="center">
                <Button onClick={this.onClick}>Zobacz</Button>
              </Cell>
            </Row>
          </Body>
        </Table>
        <h1>{this.state.message}</h1>
        {this.state.payment ? <TabMatch H2H={this.props.match} /> : null}
      </>
    );
  }
}

export default RowMatch;
