import React, {Component} from 'react';
import LeftPane from "./leftPane";
import RightPane from "./rightPane";
class Main extends Component {
    render() {
        return (
            <main className="admin-main row">
                <LeftPane/>
                <RightPane/>
            </main>
        );
    }

}
export default Main;