import React from "react";
import classNames from "classnames";

import {
    Container,
    Grid,
    IconButton,
    Typography,
    Paper,
    Button,
    Hidden,
    Avatar,
    InputAdornment,
    List,
    ListItem,
    ListItemText,
    Divider,
    ListItemAvatar
} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import CreateIcon from '@material-ui/icons/Create';
import SearchIcon from '@material-ui/icons/Search';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import { Tweet } from "../../components/Tweet";
import { SideMenu } from "../../components/SideMenu";
import { AddTweetForm } from "../../components/AddTweetForm";
import { SearchTextFields } from "../../components/SearchTextFields";
import { ModelBlock } from "../../components/ModalBlock";
import { useHomeStyles } from "./theme";

const Home = () => {
    const classes = useHomeStyles();
    const [visibleTweetModal, setVisibleTweetModal] = React.useState(false);

    const handleOpenTweetPopup = () => {
        setVisibleTweetModal(true);
    }

    const handleCloseTweetPopup = () => {
        setVisibleTweetModal(false);
    }

    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={1} sm={1} md={3}>
                    <div className={classes.leftSide}>
                        <IconButton color="primary" className={classes.logo}>
                            <TwitterIcon className={classes.logoIcon} />
                        </IconButton>
                        <SideMenu classes={classes} />
                        <Button onClick={handleOpenTweetPopup} className={classes.sideButton} variant="contained" color="primary" fullWidth>
                            <Hidden smDown>Tweet</Hidden>
                            <Hidden mdUp>
                                <CreateIcon />
                            </Hidden>
                        </Button>
                        <ModelBlock visible={visibleTweetModal} onClose={handleCloseTweetPopup} >
                            <div className={classes.addTweetPopup}>
                                <AddTweetForm classes={classes} maxRows={10} />
                            </div>
                        </ModelBlock>
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