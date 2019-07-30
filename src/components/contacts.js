import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true });
    let response = localStorage.getItem("customerData");
    response = JSON.parse(response);

    if (response != null) {
      this.setState(state => ({
        data: [...state.data, ...response],
        loading: false
      }));
    }
  };

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

            <h4 className="mb-3">Customer List</h4>
          </div>

          <div className="row">
            <div className="col-md-12 order-md-1">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Address</th>
                    <th scope="col">Country</th>
                    <th scope="col">State</th>
                    <th scope="col">Zip</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map((customers, i) => (
                    <tr key={i}>
                      <td>{customers.firstName}</td>
                      <td>{customers.lastName}</td>
                      <td>{customers.email}</td>
                      <td>{customers.gender}</td>
                      <td>{customers.address + ", " + customers.address2}</td>
                      <td>{customers.country}</td>
                      <td>{customers.state}</td>
                      <td>{customers.zip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contacts;
