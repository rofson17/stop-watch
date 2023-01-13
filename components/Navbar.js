import { AppBar, Button, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SellIcon from '@mui/icons-material/Sell';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';

export default function Navbar({ position = 25 }) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color='primary' >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <AccessAlarmsIcon color='inherit' />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Stop Watch
                    </Typography>
                    <Tooltip title='Very first Plaec' arrow>
                        <Button color="inherit" variant="contained" >
                            <SellIcon color={position >= 5 ? 'primary' : position >= 3 ? 'error' : 'action'} />
                            <Typography color='indigo'> `&nbsp;`{position >= 5 ? 'level 1' : position >= 3 ? 'level 2' : 'level 3'}</Typography>
                        </Button>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </Box>
    )
}