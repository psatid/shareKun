import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

class Register extends Component { 

    constructor(props) {
        super(props);
        this.state = ({
            username: '',
            name: '',
            surname: '',
            age: '',
            birthDate: new Date(),
            nationalID: '',
            university: '',
            yearOfStudy: '',
            phoneNumber: '',
            sex: 'Male',
            email: '',
            address: ''
        });

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSurname = this.onChangeSurname.bind(this);
        this.onChangeNationalID = this.onChangeNationalID.bind(this);
        this.onChangeBirthDate = this.onChangeBirthDate.bind(this);
        this.onChangeUniversity = this.onChangeUniversity.bind(this);
        this.onChangeYearOfStudy = this.onChangeYearOfStudy.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeSex = this.onChangeSex.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeSurname(e) {
        this.setState({
            surname: e.target.value
        });
    }

    onChangeAge(e) {
        this.setState({
            age: e.target.value
        });
    }

    onChangeBirthDate(value) {
        this.setState({
            birthDate: value
        });
    }

    onChangeNationalID(e) {
        this.setState({
            nationalID: e.target.value
        });
    }

    onChangeUniversity(e) {
        this.setState({
            university: e.target.value
        });
    }

    onChangeYearOfStudy(e) {
        this.setState({
            yearOfStudy: e.target.value
        });
    }

    onChangePhoneNumber(e) {
        this.setState({
            phoneNumber: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeSex(e) {
        this.setState({
            sex: e.target.value
        });
    }

    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            username: this.state.username,
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
        }

        const personalInfo = {
            username: this.state.username,
            address: this.state.address,
            age: this.state.age,
            birthDate: this.state.birthDate,
            university: this.state.university,
            yearOfStudy: this.state.yearOfStudy,
            phoneNumber: this.state.phoneNumber,
            sex: this.state.sex,
            nationalID: this.state.nationalID
        }

        axios.post('http://localhost:5000/users/add', newUser)
            .then(res => console.log(res.data));

        axios.post('http://localhost:5000/personal-info/add', personalInfo)
            .then(res => console.log(res.data));

        console.log(JSON.stringify(newUser))
        console.log(JSON.stringify(personalInfo))

        this.setState({
            username: '',
            name: '',
            surname: '',
            age: 0,
            birthDate: new Date(),
            nationalID: '',
            university: '',
            yearOfStudy: 0,
            phoneNumber: '',
            sex: 'Male',
            email: ''
        })
    }

    
    render() {
        return (
            <Container>
                <Form onSubmit = {this.onSubmit} style = {{marginTop: 10}}>
                    <Row>
                        <Col>
                            {/* Username */}
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type = "text"
                                placeholder = "Enter Your Username"
                                value = {this.state.username}
                                onChange = {this.onChangeUsername}
                                style = {{borderRadius: 30}}></Form.Control>
                            </Form.Group>

                            {/* Name*/}
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type = "text" 
                                placeholder = "Enter Your Name"
                                value = {this.state.name}
                                onChange = {this.onChangeName}
                                style = {{borderRadius: 30}}></Form.Control>           
                            </Form.Group>

                            {/* Surname */}
                            <Form.Group>
                                <Form.Label>Surname</Form.Label>
                                <Form.Control type = "text"
                                placeholder = "Enter Your Surname"
                                value = {this.state.surname}
                                onChange = {this.onChangeSurname}
                                style = {{borderRadius: 30}}></Form.Control>
                            </Form.Group>
                            
                            <Row>
                                <Col>
                                    {/* Age */}
                                    <Form.Group>
                                        <Form.Label>Age</Form.Label>
                                        <Form.Control type = "text"
                                        placeholder = "Enter Your Age"
                                        value = {this.state.age}
                                        onChange = {this.onChangeAge}
                                        style = {{borderRadius: 30}}></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>

                                    {/* Sex */}
                                    <Form.Group>
                                        <Form.Label>Sex</Form.Label>
                                        <Form.Control as = "select"
                                        value = {this.state.sex}
                                        onChange = {this.onChangeSex}
                                        style = {{borderRadius: 30}}>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>

                            {/* Address */}
                            <Form.Group>
                                <Form.Label>Address</Form.Label>
                                <Form.Control type = "text"
                                placeholder = "Enter Your Address"
                                value = {this.state.address}
                                onChange = {this.onChangeAddress}
                                style = {{borderRadius: 30}}></Form.Control>
                            </Form.Group>

                            {/* BirthDate */}
                            <Form.Group>
                                <Form.Label style = {{marginRight: 10}}>Birth Date: </Form.Label>
                                <DatePicker
                                selected = {this.state.birthDate}
                                onChange = {this.onChangeBirthDate}
                                // placeholder = "MM/DD/YYYY"
                                style = {{borderRadius: 30}}>
                                </DatePicker>
                            </Form.Group>
                        </Col>
                        <Col>
                            {/* Year of Study */}
                            <Form.Group>
                                <Form.Label>Year of Study</Form.Label>
                                <Form.Control type = "text"
                                placeholder = "Specify Your Year of Study"
                                value = {this.state.yearOfStudy}
                                onChange = {this.onChangeYearOfStudy}
                                style = {{borderRadius: 30}}></Form.Control>
                            </Form.Group>

                            {/* University */}
                            <Form.Group>
                                <Form.Label>University</Form.Label>
                                <Form.Control type = "text"
                                placeholder = "University"
                                value = {this.state.university}
                                onChange = {this.onChangeUniversity}
                                style = {{borderRadius: 30}}></Form.Control>
                            </Form.Group>

                            {/* Phone Number */}
                            <Form.Group>
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type = "text"
                                placeholder = "Phone Number"
                                value = {this.state.phoneNumber}
                                onChange = {this.onChangePhoneNumber}
                                style = {{borderRadius: 30}}></Form.Control>
                            </Form.Group>

                            {/* Email*/}
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type = "text"
                                placeholder = "Enter Your Email"
                                value = {this.state.email}
                                onChange = {this.onChangeEmail}
                                style = {{borderRadius: 30}}></Form.Control>
                            </Form.Group>

                            {/* National ID */}
                            <Form.Group>
                                <Form.Label>National ID</Form.Label>
                                <Form.Control type = "text"
                                placeholder = "Enter Your National ID"
                                value = {this.state.nationalID}
                                onChange = {this.onChangeNationalID}
                                style = {{borderRadius: 30}}></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>

                    {/* Terms and Conditions Agreement */}
                    <Row className = "justify-content-center">
                        <Form.Check type = "checkbox" label = "Agree to Terms and Conditions"
                        style = {{marginBottom: 30}}></Form.Check>
                    </Row>

                    {/* Submit Button */}
                    <Row className = "justify-content-center"> 
                        <Button type = "submit" 
                        style = {{width: 300, 
                        borderRadius: 20,
                        background: "#BA6B57",
                        borderColor: "#BA6B57",
                        color: "black"}}>Submit</Button>
                    </Row>          
                </Form>
            </Container>
        );
    }
}

export default Register;