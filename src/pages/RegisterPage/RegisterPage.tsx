import React, {PureComponent} from 'react';
import RegisterForm from './components/RegisterForm';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Logo from "../../components/Logo";

class RegisterPage extends PureComponent {
    render() {
        return (
            <div>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={4}>
                            <Logo></Logo>
                            <Card body className="mt-100">
                                <RegisterForm></RegisterForm>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default RegisterPage