import React, {} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

interface Props {

}

interface User {
    id: string
    email: string
    first_name: string
    last_name: string
    avatar: string
}

interface State {
    data: {
        users: User[],
        page: number,
        per_page: number,
        total: number,
        total_pages: number
    }

}


class UserList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            data: {
                users: [],
                page: 0,
                per_page: 0,
                total: 0,
                total_pages: 1
            }
        }
    }

    componentDidMount(): void {
        this.getUser();
    }

    getUser = async () => {
        const response = await axios({
            method: 'GET',
            url: 'https://reqres.in/api/users'
        })
            .then(response => {
                if (response.status === 200) {
                    return response.data
                }
            })
            .catch(err => console.log(err))

        this.setState({
            data: {
                users: response.data,
                page: response.data.page,
                per_page: response.data.per_page,
                total: response.data.total,
                total_pages: response.data.total_pages,
            }
        })
    };

    render() {
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                    <Link to="/usercreate">Add User</Link>
                    </thead>
                    <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.data.users.length > 0 ? (
                            this.state.data.users.map((user) => {
                                return (
                                    <tr>
                                        <td>{user.first_name}</td>
                                        <td>{user.last_name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <Link to={`/users/edit/${user.id}`}>Edit</Link>
                                            <button>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        ) : (<div>Loading...</div>)
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UserList