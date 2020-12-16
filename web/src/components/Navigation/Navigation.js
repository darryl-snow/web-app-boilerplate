import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { navigate, routes } from '@redwoodjs/router'
import PersonIcon from '@material-ui/icons/Person'

const NavigationRoutes = [
  {
    icon: <PersonIcon />,
    name: 'Profile',
    navigation: routes.profile,
  },
]

const renderListItems = () => {
  return NavigationRoutes.map((route) => {
    return (
      <ListItem
        button
        key={route.name}
        onClick={() => {
          navigate(route.navigation)
        }}
      >
        <ListItemIcon>{route.icon}</ListItemIcon>
        <ListItemText primary={route.name} />
      </ListItem>
    )
  })
}

const Navigation = () => {
  return (
    <List data-testid="navigation" disablePadding>
      {renderListItems()}
    </List>
  )
}

export default Navigation
