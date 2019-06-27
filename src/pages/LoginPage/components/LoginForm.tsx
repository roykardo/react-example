import React, {ChangeEvent, FormEvent} from 'react';
import axios, {AxiosResponse} from 'axios';

interface Props {
    children: React.ReactNode
}

interface State {
    formControls: {
        email: string
        password: string
    },
    errorMessage : string
}

class LoginForm extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            formControls: {
                email: '',
                password: ''
            },
            errorMessage: ''
        }
    }

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

    submitHandler = (event: FormEvent) => {
        event.preventDefault();
        axios.post('https://reqres.in/api/login', this.state.formControls)
            .then((response: AxiosResponse) => {
                console.log(response)
            })
            .catch( (error) =>  {
                this.setState({
                    errorMessage: error.response.data.error
                });
            })
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                {this.state.errorMessage !== '' &&
                    <div className="alert alert-danger" role="alert">
                        {this.state.errorMessage}
                    </div>
                }
                <div className="form-group">
                    <label>Email</label>
                    <input type="text"
                           name="email"
                           placeholder="Enter email"
                           className="form-control"
                           value={this.state.formControls.email}
                           onChange={this.changeHandler}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password"
                           name="password"
                           placeholder="Enter password"
                           className="form-control"
                           value={this.state.formControls.password}
                           onChange={this.changeHandler}
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        )
    }
}

export default LoginForm