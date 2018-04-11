import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainFrame from "./components/MainFrame"
import store from "./store"
import {createMuiTheme} from "material-ui";
import blue from "material-ui/es/colors/blue";
import green from "material-ui/es/colors/green";

const app = document.getElementById('app');
const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: green,
    },
    status: {
        danger: 'orange',
    },
});
ReactDOM.render(<Provider store={store}>
  <MuiThemeProvider theme={theme}>
  <MainFrame />
  </MuiThemeProvider>
</Provider>, app);
