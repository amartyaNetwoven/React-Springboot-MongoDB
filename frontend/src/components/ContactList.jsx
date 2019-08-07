import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from './../actions/action_index';
// import '../../css/styles.css';
import { Link } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import axios from "axios";

function mapStateToProps(state) {
    return {
        contacts: state.contacts,
    };
};

function addLinkFormatter(cell, row) {
    console.log(cell, row)
    return (
        <section>
            <Link to={`/show/${row.id}`}>
                <img className="contact-icon" src={`/file/${row.id}`} alt="" /> {cell}
            </Link>
        </section>
    )
}

class ConnectedList extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        axios.get("/contacts").then(response => {
            this.props.loadContacts({
                contacts: response.data
            })
        })
    }

    render() {
        const columns = [{
            dataField: 'name',
            text: 'Name',
            formatter: addLinkFormatter
        }, {
            dataField: 'address',
            text: 'Address'
        }, {
            dataField: 'city',
            text: 'City'
        }, {
            dataField: 'email',
            text: 'Email'
        }, {
            dataField: 'phone',
            text: 'Phone'
        }
        ];
        return (

            <section className="col-12 col-sm-12 col-md-12 col-lg-12">
                {this.props.contacts.length > 0 &&
                    <BootstrapTable
                        keyField='_id'
                        data={this.props.contacts}
                        columns={columns}
                        bordered={false}
                        inverse
                        hover
                        condensed
                        headerClasses="header-class"
                    />
                }
            </section>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
}
const ContactList = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default ContactList;