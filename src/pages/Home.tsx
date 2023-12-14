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
    Button,
    Hidden,
    Avatar,
    TextareaAutosize
} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import CreateIcon from '@material-ui/icons/Create';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import CircularProgress from '@material-ui/icons/DonutLarge';
import grey from '@material-ui/core/colors/grey';

import { Tweet } from "../components/Tweet";
import { SideMenu } from "../components/SideMenu";

export const useHomeStyles = makeStyles((theme) => ({
    sideMenuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    logo: {
        margin: "2px 0 10px",
    },
    logoIcon: {
        fontSize: 36,
    },
    sideMenuListItem: {
        display: 'flex',
        alignItems: 'center',
        width: 'max-content',
        borderRadius: 30,
        paddingLeft: 15,
        paddingRight: 40,
        paddingTop: 11,
        paddingBottom: 11,
        marginBottom: 10,
    },
    sideMenuListItemLaber: {
        fontSize: 20,
        lineHeight: 1,
        fontWeight: 400,
    },
    sideMenuListItemIconWrapper: {
        minWidth: '40px', 
    },
    sideMenuListItemIcon: {
        fontSize: 28,
        color: '#0f1419',
    },
    sideButton: {
        padding: theme.spacing(3),
        marginTop: 15,
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
    tweetSpan: {
        color: grey[500],
    },
    addForm: {
        padding: 20,
    },
    addFormBody: {
        width: '100%',
        display: 'flex',
    },
    addFormBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addFormBottomActions: {
        marginTop: 10,
        paddingLeft: 70,
    },
    addFormTextarea: {
        width: '100%',
        border: 0,
        fontSize: 20,
        outline: 'none',
        resize: 'none',
        fontFamily: 'inherit',
        paddingLeft: 15,
    },
    addFormBottomRight: {
        display: 'flex',
        alignItems: 'center',
    },
    addFormBottomLine: {
        height: 12,
        backgroundColor: '#E6ECF0',
    },
    addFormCircleProgress: {
        position: 'relative',
        width: 20,
        height: 20,
        margin: '0 10px',
    }
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
    const classes = useHomeStyles();

    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={1} sm={1} md={3}>
                    <IconButton color="primary" className={classes.logo}>
                        <TwitterIcon className={classes.logoIcon} />
                    </IconButton>
                    <SideMenu classes={classes} />
                    <Button className={classes.sideButton} variant="contained" color="primary" fullWidth>
                        <Hidden smDown>Tweet</Hidden>
                        <Hidden mdUp>
                            <CreateIcon />
                        </Hidden>
                    </Button>
                </Grid>
                <Grid item xs={8} sm={8} md={6}>
                    <Paper className={classes.tweetsWapper} variant="outlined">
                        <Paper className={classNames(classes.tweetsBlock, classes.tweetsHeader)} variant="outlined">
                            <Typography variant="h6">Home</Typography>
                        </Paper>
                        <Paper>
                            <div className={classes.addForm}>
                                <div className={classes.addFormBody}>
                                    <Avatar alt="Remy Sharp" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" />
                                    <TextareaAutosize className={classes.addFormTextarea} placeholder="What is happening?"/>
                                </div>
                                <div className={classes.addFormBottom}>
                                    <div className={classes.addFormBottomActions}>
                                        <IconButton color="primary">
                                            <ImageOutlinedIcon style={{ fontSize: 26 }} />
                                        </IconButton>
                                        <IconButton color="primary">
                                            <EmojiIcon style={{ fontSize: 26 }} />
                                        </IconButton>
                                    </div>
                                    <div className={classes.addFormBottomRight}>
                                        <span>280</span>
                                        <div className={classes.addFormCircleProgress}>
                                            <CircularProgress />
                                        </div>
                                        <Button color="primary" variant="contained">Tweet</Button>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.addFormBottomLine}></div>
                        </Paper>
                        <Tweet 
                            text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?'
                            user={{
                                fullname: 'Remy Sharp',
                                username: 'sharp_remy',
                                avatarUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
                            }}
                            classes={classes}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                    <SearchTextFields placeholder="Search Twitter" fullWidth />
                </Grid>
            </Grid>
        </Container>
    );
}

export default Home;