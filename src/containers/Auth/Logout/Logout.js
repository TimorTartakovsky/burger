import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../../store/actions/index';
import {INTERNAL_ROADS} from "../../../consts/roudListConst";


class Logout extends Component {

    componentDidMount() {
        this.props.onLogout();
    }

    render() {
        return (<Redirect to={ INTERNAL_ROADS.default } />);
    }

}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout()),
    }
}


export default connect(null, mapDispatchToProps)(Logout);


