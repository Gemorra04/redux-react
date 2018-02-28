import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainFrame from "./components/MainFrame"
import store from "./store"

const app = document.getElementById('app');

ReactDOM.render(<Provider store={store}>
  <MuiThemeProvider>
  <MainFrame />
  </MuiThemeProvider>
</Provider>, app);
