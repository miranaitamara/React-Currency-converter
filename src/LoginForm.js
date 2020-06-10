
import React, { useState, useEffect } from 'react';

export class LoginFormC extends React.Component {

    state = {
        email: '',
        passsword: ''
    };
    componentDidMount() {
        console.log('class compnent did mount');

    }
    componentWillUnmount() {
        console.log('class compnent will mount');

    }
    componentDidUpdate(prevProps, prevState) {

        if (prevState.email !== this.state.email) {
            console.log('email did update');

        }

        console.log('class compnent did update');

    }


    hanldeEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    };

    hanldePassword = (e) => {
        this.setState({
            passsword: e.target.value
        });
    };

    render() {
        return <div>
            <h2>Class Example</h2>
            <input value={this.state.email} onChange={this.hanldeEmail} placeholder='email' />

            <input value={this.state.password} onChange={this.hanldePassword} placeholder='password' />
        </div>
    }
}

export function LoginFormF() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  // on mount
    useEffect(() => {


        console.log('function compnent did mount');

    }, []);


    //did update
    useEffect(() => {

        if (email === '')
            return;
        console.log('function compnent did update');

    }, [email]);

    //on changing the email
    useEffect(() => {


        console.log('function compnent wil unmount');
   return () => {
    console.log('function compnent wil unmount');
   };
    }, []);

    function hanldeEmail(e) {
        setEmail(e.target.value);
    };

    function hanldePassword(e) {
        setPassword(e.target.value);
    };

    return <div>
        <h2>Function Example</h2>

        <input value={email} onChange={hanldeEmail} placeholder='email' />

        <input value={password} onChange={hanldePassword} placeholder='password' />
    </div>
}