import React, {Component} from 'react';

class Login extends Component { 

    constructor(props) {
        super(props);
        this.state = ({
            name: '',
            surname: '',
            age: 0,
            birthDate: new Date(),
            nationalID: '',
            university: '',
            yearOfStudy: 1,
            phoneNumber: '',
            sex: true
        });
    }

    render() {
        return (
            <div className = "container">
                Login Page
            </div>
        );
    }
}

export default Login;