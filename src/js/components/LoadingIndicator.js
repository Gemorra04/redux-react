import React from "react"
import RefreshIndicator from 'material-ui/RefreshIndicator';

export default class LoadingIndicator extends React.Component {

  render() {
    const { text, size } = this.props;
      const style = {
          container: {
              position: 'relative',
              marginLeft:'auto',
              marginRight:'auto',
              width:size*3,
              height:'100%',
              marginTop:'20%'
          },
          refresh: {
              display: 'inline-block',
              position: 'relative',
          },
      };
      const centered = {textAlign:'center'}
    return <div style={style.container}><RefreshIndicator
        size={size}
        left={size}
        top={10}
        loadingColor="#FF9800"
        status="loading"
        style={style.refresh}
    /><h5 style={centered}>{text}</h5></div>
  }
}
