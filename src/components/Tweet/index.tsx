import React from "react";
import classNames from "classnames";

import {
    IconButton,
    Typography,
    Paper,
    Avatar
} from "@material-ui/core";
import ChatIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import ReplyIcon from '@material-ui/icons/Reply';

import { useHomeStyles } from "../../pages/Home";

interface TweetProps{
    text: string;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    };
    classes: ReturnType<typeof useHomeStyles>;
}

export const Tweet: React.FC<TweetProps> = ({text, user, classes}: TweetProps): React.ReactElement => {
    return(
        <Paper className={classNames(classes.tweetsBlock, classes.tweet)} variant="outlined">
            <div className={classes.tweetWrapper}>
                <div>
                    <Avatar alt="Remy Sharp" src={user.avatarUrl} />
                </div>
                <div className={classes.tweetInfo}>
                    <Typography >
                        <b>{user.fullname}</b> <span className={classes.tweetUserName}>@{user.username}</span>
                    </Typography>
                    <Typography variant="body1" gutterBottom>{text}</Typography>
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
                        </div>
                    </div>
                </div>
            </div>
        </Paper>
    );
} 