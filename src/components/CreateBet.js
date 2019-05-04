import React, { Component } from "react";
import { Table, Button, Input } from "semantic-ui-react";
import web3 from "../web3";
import soccerToken from "../soccerToken";

class CreateBet extends Component {
  state = {
    manager: "",
    message: "",
    value: "",
    bet: false
  };

  handlePay = () => {};

  onBet = async event => {
    const accounts = await web3.eth.getAccounts();

    this.setState({ message: "Rozpoczynam transakcję..." });

    await soccerToken.methods.pay().send({
      from: accounts[0]
    });

    this.setState({ message: "Transakcja zakończona." });

    this.setState(() => ({
      bet: !this.state.bet
    }));
  };

  setValue = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const { HeaderCell, Row, Cell, Body, Header } = Table;
    const match = this.props.matchDetail;
    const selectedBet = this.props.matchDetail.selectedBet;
    return (
      <>
        <Table celled padded color="olive" columns="7" inverted>
          <Header>
            <Row>
              <HeaderCell textAlign="center">Stawka</HeaderCell>
              <HeaderCell textAlign="center">Kurs</HeaderCell>
              <HeaderCell textAlign="center">Do wygrania</HeaderCell>
              <HeaderCell textAlign="center">Potwierdzenie</HeaderCell>
            </Row>
          </Header>
          <Body>
            <Row>
              <Cell textAlign="center">
                <Input value={this.state.value} onChange={this.setValue} />
              </Cell>
              <Cell textAlign="center">{selectedBet}</Cell>
              <Cell textAlign="center">
                {Math.round(selectedBet * this.state.value)}
              </Cell>
              <Cell textAlign="center">
                <Button onClick={this.onBet}>Zagraj</Button>
              </Cell>
            </Row>
          </Body>
        </Table>
        <h1>{this.state.message}</h1>
      </>
    );
  }
}

export default CreateBet;
