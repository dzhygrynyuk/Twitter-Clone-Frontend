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
    Paper,
    Button,
    Hidden,
    Avatar,
    TextareaAutosize,
    CircularProgress,
    InputAdornment,
    TextField,
    Theme,
    List,
    ListItem,
    ListItemText,
    Divider,
    ListItemAvatar
} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import CreateIcon from '@material-ui/icons/Create';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import SearchIcon from '@material-ui/icons/Search';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import grey from '@material-ui/core/colors/grey';

import { Tweet } from "../components/Tweet";
import { SideMenu } from "../components/SideMenu";
import { AddTweetForm } from "../components/AddTweetForm";

export const useHomeStyles = makeStyles((theme) => ({
    leftSide: {
        position: 'sticky',
        top: 0,
    },
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
        position: 'sticky',
        top: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(10px)',
        zIndex: 1,
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
        paddingLeft: 45,
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
        '& .MuiCircularProgress-root': {
            position: 'absolute',
        }
    },
    rightSide: {
        paddingTop: 20,
        position: 'sticky',
        top: 0,
    },
    rightSideBlock: {
        marginTop: 20,
        backgroundColor: '#F5F8FA',
        '& .MuiLost-root': {
            paddingTop: 0,
        },
    },
    rightSideBlockHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        backgroundColor: 'transparent',
        padding: '13px 18px',
        '& b': {
            fontSize: 20,
            fontWeight: 700,
        }
    },
    rightSideBlockList: {
        padding: 0,
    },
    rightSideBlockItem: {
        cursor: 'pointer',
        '& .MuiTypography-body1': {
            fontWeight: 700,
        },
        '& .MuiListItemAvatar-root': {
            minWidth: 50,
        },
        '& .MuiListItemText-root': {
            margin: 0,
        },
        '&:hover': {
            backgroundColor: '#EDF3F6',
        }
    }
}));

const SearchTextFields = withStyles((theme: Theme) => ({
    root: {
        '& .MuiOutlinedInput-root': {
            borderRadius: 30,
            backgroundColor: '#E6ECF0',
            padding: 0,
            paddingLeft: 15,
            '&.Mui-focused': {
                backgroundColor: '#fff',
                '& fieldset': {
                    borderWidth: 1,
                    borderColor: theme.palette.primary.main,
                },
                '& svg path': {
                    fill: theme.palette.primary.main,
                }
            },
            '&:hover': {
                '& fieldset': {
                    borderColor: 'transparent',
                }
            },
            '& fieldset': {
                borderColor: 'transparent',
                borderWidth: 1,
            }
        },
        '& .MuiOutlinedInput-input': {
            padding: '12px 14px 14px 5px',
        }
    }
}))(TextField);

const Home = () => {
    const classes = useHomeStyles();

    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={1} sm={1} md={3}>
                    <div className={classes.leftSide}>
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
                    </div>
                </Grid>
                <Grid item xs={8} sm={8} md={6}>
                    <Paper className={classes.tweetsWapper} variant="outlined">
                        <Paper className={classNames(classes.tweetsBlock, classes.tweetsHeader)} variant="outlined">
                            <Typography variant="h6">Home</Typography>
                        </Paper>
                        <Paper>
                            <AddTweetForm classes={classes} />
                            <div className={classes.addFormBottomLine}></div>
                        </Paper>
                        {[...new Array(20).fill(
                            <Tweet 
                                text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?'
                                user={{
                                    fullname: 'Remy Sharp',
                                    username: 'sharp_remy',
                                    avatarUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
                                }}
                                classes={classes}
                            />
                        )]}
                    </Paper>
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                    <div className={classes.rightSide}>
                        <SearchTextFields 
                            variant="outlined"
                            placeholder="Search Twitter"
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                                ),
                            }}
                            fullWidth 
                        />
                        <Paper className={classes.rightSideBlock}>
                            <Paper className={classes.rightSideBlockHeader} variant="outlined">
                                <b>Trends for you</b>
                            </Paper>
                            <List className={classes.rightSideBlockList}>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText
                                        primary="React JS"
                                        secondary={
                                            <Typography component="span" variant="body2">
                                                15.9K posts
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider component="li" />
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText
                                        primary="JavaScript"
                                        secondary={
                                            <Typography component="span" variant="body2">
                                                23.1K posts
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider component="li" />
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText
                                        primary="Node.js"
                                        secondary={
                                            <Typography component="span" variant="body2">
                                                33.7K posts
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                            </List>
                        </Paper>
                        <Paper className={classes.rightSideBlock}>
                            <Paper className={classes.rightSideBlockHeader} variant="outlined">
                                <b>Who to follow</b>
                            </Paper>
                            <List className={classes.rightSideBlockList}>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemAvatar>
                                        <Avatar 
                                            alt="Tim Cook" 
                                            src="https://media.idownloadblog.com/wp-content/uploads/2018/07/Tim-Cook-memoji.jpg" 
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Tim Cook"
                                        secondary={
                                            <Typography component="span" variant="body2">
                                                @TimCook
                                            </Typography>
                                        }
                                    />
                                    <Button color="primary">
                                        <PersonAddIcon />
                                    </Button>
                                </ListItem>
                                <Divider component="li" />
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemAvatar>
                                        <Avatar 
                                            alt="Mark Zuckerberg" 
                                            src="https://static.independent.co.uk/2022/08/22/10/mark%20zuckerberg%20metaverse%20avatar.png" 
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Mark Zuckerberg"
                                        secondary={
                                            <Typography component="span" variant="body2">
                                                @MarkZuckerberg
                                            </Typography>
                                        }
                                    />
                                    <Button color="primary">
                                        <PersonAddIcon />
                                    </Button>
                                </ListItem>
                            </List>
                        </Paper>        
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Home;