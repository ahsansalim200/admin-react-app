import React, {Component} from 'react';

class TopSubNav extends Component {
    render() {
        return (
            <nav className="admin-top-subheader row">
                <div className="card-panel grey lighten-3 col l3 m3 admin-top-subheader--leftpane hide-on-small-only">
                    <h6>Users</h6>
                </div>
                <div className="card-panel grey lighten-3 col l9 m9 s12 admin-top-subheader--rightpane">
                    <h6 className="col l3 m3 s5">All Users</h6>
                    <div className="col l3 m3 s7 admin-top-subheader--iconset">
                        <i className="material-icons circle grey-text text-darken-3">view_comfy</i>
                        <i className="material-icons circle grey-text text-darken-3">sort</i>
                        <i className="material-icons circle grey-text text-darken-3">settings</i>
                        <i className="material-icons circle grey-text text-darken-3">more_vert</i>
                    </div>
                </div>
            </nav>
        );
    }

}
export default TopSubNav;