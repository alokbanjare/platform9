import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

class Form extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    })
  };

  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = event => {
    if (this.validateForm()) {
      const { history } = this.props;

      const jsonData = {};

      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const email = document.getElementById("email").value;
      const gender = this.getCheckedBoxes("gender");
      const address = document.getElementById("address").value;
      const address2 = document.getElementById("address2").value;
      const country = document.getElementById("country").value;
      const state = document.getElementById("state").value;
      const zip = document.getElementById("zip").value;

      jsonData["firstName"] = firstName;
      jsonData["lastName"] = lastName;
      jsonData["email"] = email;
      jsonData["gender"] = gender;
      jsonData["address"] = address;
      jsonData["address2"] = address2;
      jsonData["country"] = country;
      jsonData["state"] = state;
      jsonData["zip"] = zip;

      let arrayData = [];
      arrayData.push(jsonData);

      let existingCustomerData = localStorage.getItem("customerData");

      if (existingCustomerData != null) {
        existingCustomerData = JSON.parse(existingCustomerData);
        arrayData = arrayData.concat(existingCustomerData);
      }

      localStorage.setItem("customerData", JSON.stringify(arrayData));

      history.push("/contacts");
    }
  };

  getCheckedBoxes(chkboxName) {
    var checkboxes = document.getElementsByName(chkboxName);
    var checkboxesChecked = [];
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        checkboxesChecked.push(checkboxes[i].value);
      }
    }
    return checkboxesChecked.length > 0 ? checkboxesChecked[0] : null;
  }

  validateForm() {
    //All Validation will be here
    return true;
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="py-5">
            <ul className="nav float-right">
              <li className="nav-item">
                <NavLink to="/">Add Customer</NavLink>
              </li>
              <li>&nbsp;|&nbsp;</li>
              <li className="nav-item">
                <NavLink to="/contacts">View Customer</NavLink>
              </li>
            </ul>

            <h4 className="mb-3">Add Customer Details</h4>
          </div>

          <div className="row">
            <div className="col-md-12 order-md-1">
              <form
                className="needs-validation xwas-validated"
                onSubmit={() => this.handleSubmit()}
              >
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName">First name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="John"
                      required
                    />
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName">Last name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Doe"
                      required
                    />
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email">
                      Email <span className="text-muted">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="john.doe@example.com"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter a valid email address.
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="Gender">Gender</label>

                    <div>
                      <div className="col-md-3 custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="gender-male"
                          name="gender"
                          value="Male"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="gender-male"
                        >
                          Male
                        </label>
                      </div>

                      <div className="col-md-3 custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="gender-female"
                          name="gender"
                          value="Female"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="gender-female"
                        >
                          Female
                        </label>
                      </div>
                    </div>
                    <div className="invalid-feedback">Gender is required.</div>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="address2">
                    Address 2 <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address2"
                    placeholder="Apartment or suite"
                  />
                </div>

                <div className="row">
                  <div className="col-md-5">
                    <label htmlFor="country">Country</label>
                    <select
                      className="custom-select d-block w-100"
                      id="country"
                      required
                    >
                      <option>United States</option>
                      <option>Canada</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="state">State</label>
                    <select
                      className="custom-select d-block w-100"
                      id="state"
                      required
                    >
                      <option>California</option>
                      <option>Utah</option>
                      <option>Indiana</option>
                      <option>Virginia</option>
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="zip">Zip</label>
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      placeholder="45783"
                      required
                    />
                    <div className="invalid-feedback">Zip code required.</div>
                  </div>
                </div>
                <hr className="mb-4" />
                <button
                  className="btn btn-primary btn-lg mt-6 mb-4"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Form);
