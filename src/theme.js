import {createMuiTheme} from "@material-ui/core/styles"

const theme = {
  palette: {
    background: {
      default: "#5C7080",
      paper: "#F5F8FA",
      navigation: "#EBF1F5",
      list: "#EBF1F5"
    }
  },
  typography: {
    suppressDeprecationWarnings: true
  }
}

export default createMuiTheme(theme)
