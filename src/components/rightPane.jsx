import React, {Component} from 'react';

class RightPane extends Component {
    state = {
        users : [
            {
                name: 'Suzy Cuningham',
                email: 'suzy.cuningham@gmail.com',
                lastLogin: '1 year ago',
                date: 'Oct 1, 2016',
                id: '1'
            },
            {
                name: 'Bobby Daniels',
                email: 'bobby.daniels@gmail.com',
                lastLogin: '1 year ago',
                date: 'Oct 1, 2016',
                id: '2'
            },
            {
                name: 'John Walker',
                email: 'john.walker@gmail.com',
                lastLogin: '1 year ago',
                date: 'Oct 1, 2016',
                id: '3'
            },
            {
                name: 'Eddy Stevens',
                email: 'eddy.stevens@gmail.com',
                lastLogin: '1 year ago',
                date: 'Oct 1, 2016',
                id: '4'
            },
            {
                name: 'Jan Williams',
                email: 'jan.williams@gmail.com',
                lastLogin: '1 year ago',
                date: 'Oct 1, 2016',
                id: '5'
            }
        ],
        filteredUsers: [
            {
                name: 'Suzy Cuningham',
                email: 'suzy.cuningham@gmail.com',
                lastLogin: '1 year ago',
                date: 'Oct 1, 2016',
                id: '1'
            },
            {
                name: 'Bobby Daniels',
                email: 'bobby.daniels@gmail.com',
                lastLogin: '1 year ago',
                date: 'Oct 1, 2016',
                id: '2'
            },
            {
                name: 'John Walker',
                email: 'john.walker@gmail.com',
                lastLogin: '1 year ago',
                date: 'Oct 1, 2016',
                id: '3'
            },
            {
                name: 'Eddy Stevens',
                email: 'eddy.stevens@gmail.com',
                lastLogin: '1 year ago',
                date: 'Oct 1, 2016',
                id: '4'
            },
            {
                name: 'Jan Williams',
                email: 'jan.williams@gmail.com',
                lastLogin: '1 year ago',
                date: 'Oct 1, 2016',
                id: '5'
            }
        ],
        searchValue : ''
    }

    constructor() {
        super();
        this.filteredUsers = this.users;
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.filteredUsers = this.users;

    }

    handleSearch = () => {
        let filteredResult = this.state.users;
        let searchValue = this.state.searchValue;
        filteredResult = filteredResult.filter((user) => {
            if(user.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 || user.email.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) {
                return user;
            }
        });
        this.setState({
            filteredUsers: filteredResult
        })
    }
    handleChange(e) {
        this.setState({ searchValue: e.target.value });
    }
    render() {
        return (
            <section className="card-panel grey lighten-2 admin-main-rightpane col l9 m9 s12">
                <nav className="white admin-search-box">
                    <div className="nav-wrapper">
                        <form>
                            <div className="input-field">
                                <input id="search" type="search" required placeholder="search" onKeyUp={this.handleSearch} onChange={this.handleChange} value={this.state.searchValue}/>
                                    <label className="label-icon" htmlFor="search"><i className="material-icons grey-text text-darken-3">search</i></label>
                                    <i className="material-icons">close</i>
                            </div>
                        </form>
                    </div>
                </nav>
                <div className="admin-searchpanel card-panel white">
                    <ul className="collection">
                        {this.state.filteredUsers.map(user =>
                            <li className="collection-item avatar" key={user.id}>
                                <i className="material-icons circle grey-text grey lighten-3">person</i>
                                <span className="admin-searchpanel-user">

                                    <p className="grey-text">
                                        <span className="title grey-text text-darken-3">{user.name}</span>
                                        {user.email}
                                        <span className="hide-on-med-and-up">
                                           last login: {user.lastLogin}
                                        </span>
                                    </p>
                                    <span className="admin-searchpanel-dateinfo grey-text hide-on-small-only">{user.date}</span>
                                    <span className="admin-searchpanel-year grey-text hide-on-small-only">{user.lastLogin}</span>
                                    <span className="admin-searchpanel-optionsholder"><i className="material-icons grey-text">more_vert</i></span>

                                </span>
                            </li>
                        )}

                    </ul>
                </div>
                <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
            </section>
        );
    }

}
export default RightPane;