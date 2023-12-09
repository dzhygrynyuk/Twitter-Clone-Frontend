import React from "react";
import classNames from "classnames";
import {
    makeStyles,
    withStyles,
    createStyles,
    Container,
    Grid,
    IconButton,
    Typography,
    InputBase,
    Paper,
    Avatar
} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/NotificationsNone';
import MailIcon from '@material-ui/icons/MailOutline';
import BookmarkIcon from '@material-ui/icons/BookmarkBorder';
import ListIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/PersonOutline';
import ChatIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import ReplyIcon from '@material-ui/icons/Reply';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles((theme) => ({
    sideMenuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    logo: {
        margin: "5px 0",
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
    },
    tweetsWapper: {
        height: '100%',
        borderTop: 0,
        borderBottom: 0,
        borderRadius: 0,
    },
    tweetsBlock:{
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        borderRadius: 0,
        padding: '10px 15px',
    },
    tweetsHeader: {
        '& h6': {
            fontWeight: 800,
        },
    },
    tweet: {
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)',
        },
    },
    tweetWrapper: {
        width: '100%',
        display: 'flex',
    },
    tweetInfo: {
        paddingLeft: '10px',
    },
    tweetFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '80%',
    },
    tweetUserName: {
        color: grey[500],
    },
}));

const SearchTextFields = withStyles(() => 
    createStyles({
        input: {
            borderRadius: 30,
            backgroundColor: '#E6ECF0',
            height: '45px',
            padding: 0,
        },
    }),
)(InputBase);

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
                    <Paper className={classes.tweetsWapper} variant="outlined">
                        <Paper className={classNames(classes.tweetsBlock, classes.tweetsHeader)} variant="outlined">
                            <Typography variant="h6">Home</Typography>
                        </Paper>
                        <Paper className={classNames(classes.tweetsBlock, classes.tweet)} variant="outlined">
                            <div className={classes.tweetWrapper}>
                                <div>
                                    <Avatar alt="Remy Sharp" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" />
                                </div>
                                <div className={classes.tweetInfo}>
                                    <Typography >
                                        <b>Remy Sharp</b> <span className={classes.tweetUserName}>@sharp_remy</span>
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                                        dignissimos laborum fugiat deleniti?
                                    </Typography>
                                    <div className={classes.tweetFooter}>
                                        <div>
                                            <IconButton>
                                                <ChatIcon style={{ fontSize: 20 }} />
                                            </IconButton>
                                            <span>1</span>
                                        </div>
                                        <div>
                                            <IconButton>
                                                <RepeatIcon style={{ fontSize: 20 }} />
                                            </IconButton>
                                            <span>1</span>
                                        </div>
                                        <div>
                                            <IconButton>
                                                <FavoriteIcon style={{ fontSize: 20 }} />
                                            </IconButton>
                                            <span>1</span>
                                        </div>
                                        <div>
                                            <IconButton>
                                                <ReplyIcon style={{ fontSize: 20 }} />
                                            </IconButton>
                                            <span>1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <SearchTextFields placeholder="Search Twitter" fullWidth />
                </Grid>
            </Grid>
        </Container>
    );
}

export default Home;