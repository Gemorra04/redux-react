import React from "react"
import Card from "material-ui/Card"
import CardMedia from "material-ui/Card/CardMedia"
import CardTitle from "material-ui/Card/CardTitle"
import CardActions from "material-ui/Card/CardActions"
import FlatButton from "material-ui/FlatButton"
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { deleteModel, openModel } from "../actions/modelsActions"

export default class ModelCard extends React.Component {

  render() {
    const { model } = this.props;
    const {dispatch} = this.props;
      var cardStyle = {
          display: 'block',
          float: 'left',
          width: '250px',
          height: '302px',
          margin: '5px',
          transitionDuration: '0.3s'
      };
      var titleStyle= {
          color: 'white'
      };
      var menuLabelStyle= {
          paddingLeft:'10px',
          paddingRight:'0px',
          fontWeight:800
      };

      var buttonTextStyle={
          paddingLeft: '10px',
          paddingRight: '10px'
      };

    return (<Card style={cardStyle}>
        <CardMedia
            overlay={<CardTitle subtitleStyle={titleStyle} subtitle={model.title} />}
        >
            <img src={model.icon} alt="" />
        </CardMedia>
        <CardActions>
            <FlatButton labelStyle={buttonTextStyle} primary={true} label="Öffnen" onClick={()=>{dispatch(openModel(model.id))}}/>
            <FlatButton labelStyle={buttonTextStyle} secondary={true} label="Löschen" onClick={()=>{dispatch(deleteModel(model.id))}}/>
            <IconMenu
                iconButtonElement={<FlatButton fullWidth={true} labelStyle={menuLabelStyle} label="..."></FlatButton>}
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
            >
                <MenuItem primaryText="Refresh" />
                <MenuItem primaryText="Send feedback" />
                <MenuItem primaryText="Settings" />
                <MenuItem primaryText="Help" />
                <MenuItem primaryText="Sign out" />
            </IconMenu>
        </CardActions>
    </Card>);
  }
}
