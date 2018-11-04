import React, {Component} from 'react';

class LeftPane extends Component {
    render() {
        return (
            <section className="card-panel white admin-main-leftpane col l3 m3 hide-on-small-only">
                <div className="collection">
                    <a href="#!" className="collection-item grey-text text-darken-2"><span className="admin-personicon"></span>All Users</a>
                    <a href="#!" className="collection-item grey-text text-darken-2"><span className="admin-favouritesicon"></span>Favorites</a>
                    <a href="#!" className="collection-item grey-text text-darken-2"><span className="admin-adminicon"></span>Administrators</a>
                    <a href="#!" className="collection-item grey-text text-darken-2"><span className="admin-nonadminicon"></span>Non-Admins</a>
                    <a href="#!" className="collection-item grey-text text-darken-2"><span className="admin-personicon"></span>Archived</a>
                </div>
            </section>
        );
    }

}
export default LeftPane;