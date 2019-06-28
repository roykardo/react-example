import React, {ChangeEvent, FormEvent} from 'react';
import axios from 'axios';
import NavBar from "../../../components/NavBar";

interface Props {
    history: History<any>
}

interface State {
    data: {
        name: string
        job: string
    }
}

class UserCreate extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            data: {
                name: '',
                job: ''
            }
        }
    }

    changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            data: {
                ...this.state.data,
                [name]: value
            }
        });

        return true;
    };

    submitHandler = (event: FormEvent) => {
        event.preventDefault();
        axios.post('https://reqres.in/api/users', this.state.data)
            .then((response) => {
                if (response.status === 201) {
                    this.props.history.push('/userlist')
                }
            })
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <NavBar></NavBar>
                <div className="container">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text"
                               name="name"
                               placeholder="Enter Name"
                               className="form-control"
                               value={this.state.data.name}
                               onChange={this.changeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <label>Jobs</label>
                        <input type="text"
                               name="job"
                               placeholder="Enter Job"
                               className="form-control"
                               value={this.state.data.job}
                               onChange={this.changeHandler}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </div>

            </form>
        )
    }
}

export default UserCreate