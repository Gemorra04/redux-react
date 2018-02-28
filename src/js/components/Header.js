import React from "react"
import { connect } from "react-redux"
import AppBar from "material-ui/AppBar"
import IconMenu from "material-ui/IconMenu"
import MenuItem from "material-ui/MenuItem"
import IconButton from "material-ui/IconButton"
import FlatButton from "material-ui/FlatButton"
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

@connect((store) => {
    return {
        loggedIn: store.main.loggedIn,
    };
})
export default class Header extends React.Component {

    render() {
        const {loggedIn} = this.props;
        const Logged = (props) => (
            <IconMenu
                {...props}
                iconButtonElement={
                    <IconButton><MoreVertIcon /></IconButton>
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
                <MenuItem primaryText="Refresh" />
                <MenuItem primaryText="Help" />
                <MenuItem primaryText="Sign out" />
            </IconMenu>
        );

        return<AppBar style={{position: 'fixed', top:0, left:0}}
                title="Title" iconElementRight={loggedIn ? <Logged /> : <FlatButton label="Login" />}/>
    }
}
