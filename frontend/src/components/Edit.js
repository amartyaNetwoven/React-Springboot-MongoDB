import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as actions from "./../actions/action_index";
import { connect } from "react-redux";
import NavItem from "./NavItem";

function mapStateToProps(state) {
  return {
    contact: state.contact,
    imageUrl: state.imageUrl
  };
}

class EditContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: {},
      selectedFile: null
    };
  }

  componentDidMount() {
    axios.get("/contacts/" + this.props.match.params.id).then(response => {
      this.props.showContact({
        contact: response.data
      });
    });
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

    axios.put("/contacts/" + this.props.contact.id, { name, address, city, phone, email }).then(result => {
      this.props.clearContact();
      this.props.history.push("/logo/" + this.props.match.params.id);
    });
  };

  render() {
    return (
      <section>
        <NavItem />
        <div className="container">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">EDIT Contact</h3>
            </div>
            <div className="panel-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label for="name">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={this.props.contact.name}
                    onChange={event => this.onChange("name", event.target.value)}
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <label for="title">Address:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={this.props.contact.address}
                    onChange={event => this.onChange("address", event.target.value)}
                    placeholder="Address"
                  />
                </div>
                <div className="form-group">
                  <label for="author">City:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    value={this.props.contact.city}
                    onChange={event => this.onChange("city", event.target.value)}
                    placeholder="City"
                  />
                </div>
                <div className="form-group">
                  <label for="published_date">Phone Number:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    value={this.props.contact.phone}
                    onChange={event => this.onChange("phone", event.target.value)}
                    placeholder="Phone Number"
                  />
                </div>
                <div className="form-group">
                  <label for="description">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={this.props.contact.email}
                    onChange={event => this.onChange("email", event.target.value)}
                    placeholder="Email Address"
                  />
                </div>

                <button type="submit" className="btn btn-info">
                  Update
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

const Edit = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditContact);
export default Edit;
