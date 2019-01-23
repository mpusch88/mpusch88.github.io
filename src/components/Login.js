import React from 'react';
import {connect} from 'react-redux';
import {setEmail, authenticate} from '../actions/userActions';
import createElectronStore from 'electron-store-webpack-wrapper';
import {shell} from 'electron';
import LoadingSpinner from './LoadingSpinner';
const store = createElectronStore();

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'lawyer1@example.com',
            password: 'lawyer1',
            authStatus: ''
        };

        this.save = this
            .save
            .bind(this);
        this.handleClick = this
            .handleClick
            .bind(this);
        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleForgotPassword = this
            .handleForgotPassword
            .bind(this);
        this.check = this
            .check
            .bind(this);
    }

    save() {
        this
            .props
            .dispatch(setEmail(this.state.email));
        //this.props.dispatch(getLawyers());
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({isLoading: true});
        let user = {
            email: this.state.email,
            password: this.state.password
        };
        this
            .props
            .dispatch(authenticate(user))
            .then(result => {

                //this.setState({ authStatus: 'Logging in' });
                this.setState(() => {
                    return {authStatus: 'Logging in'};
                });
                //console.log('Storing', result);
                store.set('jwt', result);
                this
                    .props
                    .history
                    .push('/feed');

            })
            .catch(e => {
                // TODO: check for specific error codes
                this.setState({authStatus: 'Invalid Login', isLoading: false});
            });
    }

    handleForgotPassword(e) {
        e.preventDefault(); //not really required for a span though
        shell.openExternal('https://www.goodlawyer.ca/forgot');
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    check(e) {
        e.preventDefault();
        console.log('Stored JWT', store.get('jwt'));
    }

    render() {
        return (this.state.isLoading
            ? <LoadingSpinner/>
            : (
                <div id='outerLogin'>
                    <div className='login-container'>
                        <div className='row login-content-row'>
                            <div className='col-12'>
                                <span className='login-title'>Log in to Goodlawyer</span>
                                <span className='login-sub-title'>
                                    Please enter your credentials below
                                </span>
                            </div>
                        </div>
                        <div className='row login-content-row'>
                            <div className='col-12'>
                                <form className='Login-Form'>
                                    <div className='input-group'>
                                        <span className='default-text-label'>Email</span>
                                        <input
                                            type='text'
                                            name='email'
                                            className='input-default'
                                            onChange={this.handleChange}
                                            value={this.state.email}/>
                                    </div>

                                    <div className='input-group'>
                                        <span className='default-text-label'>Password</span>
                                        <input
                                            className='input-default'
                                            type='password'
                                            name='password'
                                            onChange={this.handleChange}
                                            value={this.state.password}/>
                                    </div>

                                    <div>
                                        <button className='button-big-primary' onClick={this.handleClick}>
                                            Log In
                                        </button>
                                        <button onClick={this.check}>Check</button>
                                    </div>

                                    <div className="col-12">
                                        <span className="login-signup-line noselect">
                                            <span
                                                className="login-signup-button noselect"
                                                onClick={this.handleForgotPassword}>Forgot Password?</span>
                                        </span>
                                    </div>

                                    <div>
                                        <label>{this.state.authStatus}</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            ));
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {email: state.email, password: state.password, authStatus: state.authStatus, user: state.user};
};

export default connect(mapStateToProps)(Login);
