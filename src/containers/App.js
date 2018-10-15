import React, {Component, Fragment} from "react"
import Baseline from "@material-ui/core/CssBaseline"
import withStyles from "@material-ui/core/styles/withStyles"

import Paper from "@material-ui/core/Paper"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"

import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import FingerprintIcon from "@material-ui/icons/Fingerprint"
import CodeIcon from "@material-ui/icons/Code"
import GestureIcon from "@material-ui/icons/Gesture"

import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"

const styles = theme => ({
  layout: {
    width: "auto",
    display: "block",
    marginTop: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    [theme.breakpoints.up(500 + theme.spacing.unit * 2 * 2)]: {
      width: 500,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    width: 100,
    height: 100
  },
  title: {
    marginBottom: theme.spacing.unit / 2
  },
  subtitle: {
    marginBottom: theme.spacing.unit * 2
  },
  navigation: {
    width: 250
  },
  list: {
    width: 250
  },
  listFooter: {
    marginTop: theme.spacing.unit,
    textAlign: "center"
  }
})

export class App extends Component {
  state = {
    page: 1
  }
  handleChange = (event, page) => {
    this.setState({page})
  }

  render() {
    const {classes} = this.props
    return (
      <Fragment>
        <Baseline/>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar
              className={classes.avatar}
              src="https://avatars2.githubusercontent.com/u/9037712"
            />
            <Typography className={classes.title} component="h1" variant="h6">
              Santiago Tortosa
            </Typography>
            <Typography className={classes.subtitle} component="h1" variant="caption">
              Backend-specialized developer
            </Typography>

            <BottomNavigation
              className={classes.navigation}
              onChange={this.handleChange}
              value={this.state.page}
              showLabels
            >
              <BottomNavigationAction label="Social" icon={<FingerprintIcon/>}/>
              <BottomNavigationAction label="Projects" icon={<CodeIcon/>}/>
              <BottomNavigationAction label="Contact" icon={<GestureIcon/>}/>
            </BottomNavigation>

            {this.state.page === 0 &&
              <List className={classes.list} dense>
                <ListItem
                  href="https://elixirforum.com/u/satom99/summary"
                  target="_blank"
                  component="a"
                  button
                >
                  <ListItemText primary="Elixir Forum" secondary="satom99"/>
                  <ChevronRightIcon/>
                </ListItem>
                <ListItem
                  href="https://forum.mtasa.com/profile/22375-novo"
                  target="_blank"
                  component="a"
                  button
                >
                  <ListItemText primary="MTA Forum" secondary="novo"/>
                  <ChevronRightIcon/>
                </ListItem>
                <ListItem
                  href="https://stackoverflow.com/users/5481813/satom99?tab=profile"
                  target="_blank"
                  component="a"
                  button
                >
                  <ListItemText primary="Stack Overflow" secondary="satom99"/>
                  <ChevronRightIcon/>
                </ListItem>
                <Typography className={classes.listFooter} component="h1" variant="caption">
                  Generally registered under the name <i>satom99</i>.
                </Typography>
              </List>
            }

            {this.state.page === 1 &&
              <List className={classes.list} dense>
                <ListItem
                  href="https://mineteria.com"
                  target="_blank"
                  component="a"
                  button
                >
                  <ListItemText primary="Mineteria" secondary="Backend"/>
                  <ChevronRightIcon/>
                </ListItem>
                <ListItem
                  href="https://github.com/satom99/steve"
                  target="_blank"
                  component="a"
                  button
                >
                  <ListItemText primary="steve" secondary="0 stars"/>
                  <ChevronRightIcon/>
                </ListItem>
                <ListItem
                  href="https://github.com/satom99/coxir"
                  target="_blank"
                  component="a"
                  button
                >
                  <ListItemText primary="coxir" secondary="28 stars"/>
                  <ChevronRightIcon/>
                </ListItem>
                <ListItem
                  href="https://github.com/satom99/litcord"
                  target="_blank"
                  component="a"
                  button
                >
                  <ListItemText primary="litcord" secondary="16 stars"/>
                  <ChevronRightIcon/>
                </ListItem>
                <ListItem
                  href="https://github.com/satom99/phx_raws"
                  target="_blank"
                  component="a"
                  button
                >
                  <ListItemText primary="phx_raws" secondary="15 stars"/>
                  <ChevronRightIcon/>
                </ListItem>
                <ListItem
                  href="https://github.com/satom99/satom99.github.io"
                  target="_blank"
                  component="a"
                  button
                >
                  <ListItemText primary="satom.me" secondary="0 stars"/>
                  <ChevronRightIcon/>
                </ListItem>
                <Typography className={classes.listFooter} component="h1" variant="caption">
                  Amongst other projects hosted on {""}
                  <a href="https://github.com/satom99" target="_blank">GitHub</a>.
                </Typography>
              </List>
            }

            {this.state.page === 2 &&
              <List className={classes.list} dense>
                <ListItem
                  href="mailto:contact@satom.me"
                  component="a"
                  button
                >
                  <ListItemText primary="Email" secondary="contact@satom.me"/>
                  <ChevronRightIcon/>
                </ListItem>
                <ListItem
                  href="https://www.linkedin.com/in/satom99/"
                  target="_blank"
                  component="a"
                  button
                >
                  <ListItemText primary="LinkedIn" secondary="satom99"/>
                  <ChevronRightIcon/>
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Discord" secondary="Adam#2406"/>
                </ListItem>
                <Typography className={classes.listFooter} component="h1" variant="caption">
                  For business inquiries defer to LinkedIn.
                </Typography>
              </List>
            }

          </Paper>
        </main>
      </Fragment>
    )
  }
}

export default withStyles(styles)(App)
