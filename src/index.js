import React from "react"
import ReactDOM from "react-dom"
import App from "./containers/App"
import {MuiThemeProvider} from "@material-ui/core/styles"
import theme from "./theme"
import "typeface-roboto"

const root = document.getElementsByTagName("root")[0]

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App/>
  </MuiThemeProvider>,
  root
)
