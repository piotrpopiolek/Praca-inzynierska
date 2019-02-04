import React, { Component } from "react";
import { Form, Button, Message, Input } from "semantic-ui-react";
import ProgressBar from "./ProgressBar";
import soccerTokenSale from "../soccerTokenSale";
import soccerToken from "../soccerToken";
import web3 from "../web3";

class FormSale extends Component {
  state = {
    address: "",
    numberOfTokens: "",
    tokenPrice: 1000000000000000,
    tokensSold: "",
    message: "",
    balance: "",
    loading: false,
    errorMessage: ""
  };

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    this.setState({
      address: accounts[0]
    });
    const balance1 = soccerTokenSale.options.address;
    console.log(balance1);
    const balance2 = soccerToken.options.address;
    console.log(balance2);
  }

  onSubmit = async event => {
    const accounts = await web3.eth.getAccounts();
    const { numberOfTokens, tokenPrice } = this.state;

    this.setState({ message: "Rozpoczynam transakcję..." });

    try {
      await soccerTokenSale.methods.buyTokens(numberOfTokens).send({
        from: accounts[0]
      });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ message: "Transakcja zakończona." });
  };

  render() {
    return (
      <>
        <h3>Sprzedaż tokenów SFT</h3>
        <p>
          Token SPF kosztuje {this.state.tokenPrice} Etheru. Aktualnie posiadasz
          {this.state.balance} sztuk SPF.
        </p>
        <p>{this.state.errorMessage}</p>
        <h1>{this.state.message}</h1>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <Input
              value={this.state.numberOfTokens}
              type="number"
              min="1"
              pattern="[0-9]"
              onChange={event =>
                this.setState({ numberOfTokens: event.target.numberOfTokens })
              }
            />
          </Form.Field>
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button primary loading={this.state.loading}>
            Kup SFT
          </Button>
        </Form>
        <ProgressBar color="olive" percent="10" />
        <p className="center">
          {this.state.tokensSold}/{this.state.numberOfTokens}
        </p>
        <p className="center">
          Adres Twojego portfela to: {this.state.address}
        </p>
      </>
    );
  }
}

export default FormSale;
