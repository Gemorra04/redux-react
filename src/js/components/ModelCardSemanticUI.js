import React from "react"
import { Button, Card, Image, Menu, Dropdown } from 'semantic-ui-react'
import { deleteModel } from "../actions/modelsActions"

export default class ModelCardSemanticUI extends React.Component {

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

    return (
        <Card style={cardStyle}>
            <Image src={model.icon} />
            <Card.Content>
                <Card.Header>
                    {model.title}
                </Card.Header>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='green'>Öffnen</Button>
                    <Button basic color='red'>Abmelden</Button>

                    <Menu secondary vertical>
                        <Dropdown item text='Display Options'>
                            <Dropdown.Menu>
                                <Dropdown.Header>Text Size</Dropdown.Header>
                                <Dropdown.Item>Small</Dropdown.Item>
                                <Dropdown.Item>Medium</Dropdown.Item>
                                <Dropdown.Item>Large</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu>


                </div>
            </Card.Content>
        </Card>

    );
  }
}
