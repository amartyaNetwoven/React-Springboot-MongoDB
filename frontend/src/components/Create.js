import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import * as actions from "./../actions/action_index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import NavItem from "./NavItem";

function mapStateToProps(state) {
  return {
    contact: state.contact
  };
}

class CreateContact extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.clearContact();
  }
  onChange = (field, value) => {
    let currentContact = { ...this.props.contact };

    this.props.changeContact({
      contact: currentContact,
      field: field,
      value: value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, address, city, phone, email } = this.props.contact;

    axios.post("/contacts", { name, address, city, phone, email }).then(result => {
      this.props.clearContact();
      this.props.history.push("/");
    });
  };

  render() {
    const { name, address, city, phone, email } = this.props.contact;
    return (
      <section>
        <NavItem />
        <div class="container">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">ADD CONTACT</h3>
            </div>
            <div class="panel-body">
              <h4>
                <Link to="/">
                  <span class="glyphicon glyphicon-th-list" aria-hidden="true" /> Contacts List
                </Link>
              </h4>
              <form onSubmit={this.onSubmit}>
                <div class="form-group">
                  <label for="isbn">Name:</label>
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    value={name}
                    onChange={event => this.onChange("name", event.target.value)}
                    placeholder="Name"
                  />
                </div>
                <div class="form-group">
                  <label for="title">Address:</label>
                  <input
                    type="text"
                    class="form-control"
                    name="address"
                    value={address}
                    onChange={event => this.onChange("address", event.target.value)}
                    placeholder="Address"
                  />
                </div>
                <div class="form-group">
                  <label for="author">City:</label>
                  <input
                    type="text"
                    class="form-control"
                    name="city"
                    value={city}
                    onChange={event => this.onChange("city", event.target.value)}
                    placeholder="City"
                  />
                </div>
                <div class="form-group">
                  <label for="published_date">Phone:</label>
                  <input
                    type="text"
                    class="form-control"
                    name="phone"
                    value={phone}
                    onChange={event => this.onChange("phone", event.target.value)}
                    placeholder="Phone Number"
                  />
                </div>
                <div class="form-group">
                  <label for="publisher">Email:</label>
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    value={email}
                    onChange={event => this.onChange("email", event.target.value)}
                    placeholder="Email Address"
                  />
                </div>
                <button type="submit" class="btn btn-info">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

const Create = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateContact);

export default Create;
