import React, {PureComponent} from 'react';
import RegisterForm from './components/RegisterForm';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Logo from "../../components/Logo";
import {Link} from 'react-router-dom'

class RegisterPage extends PureComponent {
    render() {
        return (
            <div className="register">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6}>
                            <Logo></Logo>
                            <Card body className="mt-100">
                                <RegisterForm> </RegisterForm>
                                <Card.Body className="text-center">
                                    Already have an acocunt? <Link to="/">Sign in</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default RegisterPage