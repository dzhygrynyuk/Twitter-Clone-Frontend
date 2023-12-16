import React from "react";

import {
    IconButton,
    Button,
    Avatar,
    TextareaAutosize,
    CircularProgress
} from "@material-ui/core";
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';

import { useHomeStyles } from "../pages/Home";

interface AddTweetFormProps{
    classes: ReturnType<typeof useHomeStyles>;
}

export const AddTweetForm: React.FC<AddTweetFormProps> = ({ classes }: AddTweetFormProps): React.ReactElement => {
    const [text, setText] = React.useState<string>('');
    const textLimitPercent = (text.length / 280) * 100;

    const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>) => {
        if(e.currentTarget) {
            setText(e.currentTarget.value);
        }
    };

    return (
        <div className={classes.addForm}>
            <div className={classes.addFormBody}>
                <Avatar alt="Steve Jobs" src="https://i.pinimg.com/236x/e0/7d/06/e07d0688389b79d19a014fd12d9bea28--flat-design-illustration-illustration-styles.jpg" />
                <TextareaAutosize 
                    className={classes.addFormTextarea}
                    value={text}
                    onChange={handleChangeTextarea}
                    placeholder="What is happening?" 
                />
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
                    {text && (
                        <>
                            <span>280</span>
                            <div className={classes.addFormCircleProgress}>
                                <CircularProgress variant="static" size={20} thickness={6} value={textLimitPercent} />
                                <CircularProgress style={{ color: 'rgba(0,0,0,0.1)' }} variant="static" size={20} thickness={6} value={100} />
                            </div>
                        </>
                    )}
                    <Button color="primary" variant="contained">Tweet</Button>
                </div>
            </div>
        </div>
    );
}