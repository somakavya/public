import React from "react";
const defaultState = {
  name: null,
  cardNumber: null,
  expire:null,
  cvc: null,
  nameError: null,
  cardNumberError: null,
  expireError:null,
  cvcError: null,
};
class Payment extends React.Component {
  constructor() {
    super();
    this.state = defaultState;
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    var value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  validate() {
    let nameError = "";
    let cardNumberError = "";
    let expireError= "";
    let cvcError = "";
    if (!this.state.name) {
      nameError = "Name field is required";
    }
    if (!this.state.cardNumber ) {
      cardNumberError = "Card Number is required ";
    }
        if(!this.state.expire)
    {
      expireError="Expire Date is required";
    }
    if (!this.state.cvc) {
      cvcError = "CVC Code field is required";
    }
    if (cardNumberError || nameError || expireError || cvcError) {
      this.setState({ nameError, cardNumberError, expireError, cvcError });
      return false;
    }
    return true;
  }
  submit() {
    if (this.validate()) {
      console.warn(this.state);
      this.setState(defaultState);
      const id =  Math.floor(1000000000 + Math.random() * 9000000000); // Generates a random 10-digit number
      alert(" Payment Successfull \n Reference Id :" + id);
      window.location.href = '/sucesspage';
    }
  }

  render() {
    return (
      <div className="paymentbg">
        <div className="col-md-8 mx-auto">
          <div className="myform form-row">
            <div className="form-group col-md-6">
              <br/><h1>Checkout Form </h1>
              <label>Card Holder Name :</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter Name on the Card"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
              <span className="text-danger">{this.state.nameError}</span>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Card Number :</label>
              <input
                type="cardNumber"
                className="form-control"
                name="cardNumber"
                maxLength="16"
                data-mask="0000 0000 0000 0000"
                placeholder="0000 0000 0000 0000"
                value={this.state.cardNumber}
                onChange={this.handleInputChange}
              />
              <span className="text-danger">{this.state.cardNumberError}</span>
            </div>
          </div>
          <div className="form-row">
          <div className="form-group col-md-6">
          <label >Expire Date :</label>
                <input
                  type="text"
                  className="form-control"
                  maxLength="5"
                  name="expire"
                  data-mask="00-00"
                  placeholder="MM-YY"
                  value={this.state.expire}
                  onChange={this.handleInputChange}
                />
                <span className="text-danger">{this.state.expireError}</span>
                </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>CVC Code :</label>
              <input
                type="password"
                className="form-control"
                maxLength="3"
                name="cvc"
                placeholder="000"
                value={this.state.cvc}
                onChange={this.handleInputChange}
              />
              <span className="text-danger">{this.state.cvcError}</span>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-12 text-center">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => this.submit()}
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Payment;
