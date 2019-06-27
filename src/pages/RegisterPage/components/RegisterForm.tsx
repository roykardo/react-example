import React, { ChangeEvent } from 'react'
import axios from 'axios';

interface Props {
    children: React.ReactNode
}

interface State {
    formControls: {
        firstName: string
        lastName: string
        email: string
        password: string
        confirmPassword: string
    }
}

class RegisterForm extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            formControls:{
                firstName: '',
                lastName:'',
                email:'',
                password: '',
                confirmPassword: ''
            }
        }
    };

    changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            formControls: {
                ...this.state.formControls,
                [name]: value
            }
        });

        return true;
    };

    submitHandler = (event: Event) => {
        event.preventDefault();
        axios.post('https://reqres.in/api/register', this.state.formControls)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label>FirstName</label>
                    <input name="firstName"
                           type="text"
                           placeholder="Enter First name"
                           className="form-control"
                           value={this.state.formControls.firstName}
                           onChange={this.changeHandler}
                    />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input name="lastName"
                           type="text"
                           placeholder="Enter Last name"
                           className="form-control"
                           value={this.state.formControls.lastName}
                           onChange={this.changeHandler}
                    />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input name="email"
                           type="email"
                           placeholder="Enter email"
                           className="form-control"
                           value={this.state.formControls.email}
                           onChange={this.changeHandler}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input name="password"
                           type="password"
                           placeholder="Enter Password"
                           className="form-control"
                           value={this.state.formControls.password}
                           onChange={this.changeHandler}
                    />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input name="confirmPassword"
                           type="password"
                           placeholder="Enter Confirm Password"
                           className="form-control"
                           value={this.state.formControls.confirmPassword}
                           onChange={this.changeHandler}
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        )
    }
}

export default RegisterForm