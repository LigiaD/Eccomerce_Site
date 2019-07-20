import React, { Component } from 'react';
import SignInForm from './signupForm';
import PageTitle from '../pageTitle';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignUp extends Component {

    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavBarLinks([]);
    }

    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return (
            <div className='sign-up'>
                <PageTitle className='sign-up__page-title' title='Register'/>
                <SignInForm onSubmit={this.onSubmit} className='sign-up__form'/>
            </div>
        )
    }
}

SignUp = connect(null, actions)(SignUp);

export default SignUp;