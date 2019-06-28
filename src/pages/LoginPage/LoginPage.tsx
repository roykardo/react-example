import React, {PureComponent} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import LoginForm from "./components/LoginForm";
import Logo from "../../components/Logo";
import {Link, RouteComponentProps} from 'react-router-dom'

class LoginPage extends React.Component<RouteComponentProps> {
    render() {
        const {history} = this.props;
        return (
            <div>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6}>
                            <Logo></Logo>
                            <Card body className="mt-100">
                                <LoginForm history={history}></LoginForm>
                                <Card.Body className="text-center">
                                    Don't have acocunt? <Link to="/register">Sign Up</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
            ;
    }
}

export default LoginPage