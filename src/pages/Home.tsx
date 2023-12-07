import React from "react";
import {
    makeStyles,
    Container,
    Grid,
    IconButton,
    Typography
} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/NotificationsNone';
import MailIcon from '@material-ui/icons/MailOutline';
import BookmarkIcon from '@material-ui/icons/BookmarkBorder';
import ListIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/PersonOutline';

const useStyles = makeStyles((theme) => ({
    sideMenuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    logo: {
        margin: "10px 0",
    },
    logoIcon: {
        fontSize: 36,
    },
    sideMenuListItem: {
        display: 'flex',
        alignItems: 'center'
    },
    sideMenuListItemLaber: {
        fontSize: 20,
        fontWeight: 700,
    },
    sideMenuListItemIcon: {
        fontSize: 28,
    }
}));

const Home = () => {
    const classes = useStyles();

    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <ul className={classes.sideMenuList}>
                        <li className={classes.sideMenuListItem}>
                            <IconButton className={classes.logo} color="primary">
                                <TwitterIcon className={classes.logoIcon}/>
                            </IconButton>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton>
                                <SearchIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLaber} variant="h6">Search</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton>
                                <NotificationsIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLaber} variant="h6">Notifications</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton>
                                <MailIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLaber} variant="h6">Messages</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton>
                                <BookmarkIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLaber} variant="h6">Bookmarks</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton>
                                <ListIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLaber} variant="h6">Lists</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton>
                                <PersonIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLaber} variant="h6">Profile</Typography>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={5}>
                2
                </Grid>
                <Grid item xs={4}>
                3
                </Grid>
            </Grid>
        </Container>
    );
}

export default Home;