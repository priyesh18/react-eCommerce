import React from 'react';
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email: '', password: ''});
    }
    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value}); // This dynamically sets the state. name can be 'email' or 'password'
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email"
                        label="email"
                        value={this.state.email} 
                        required
                        handleChange={this.handleChange}
                        />
                    <FormInput 
                        type="password" 
                        name="password"
                        label="password"
                        value={this.state.password}
                        required
                        handleChange={this.handleChange}
                        />
                    <div className="button">
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;