import React from "react";
import { 
    makeStyles, 
    Typography, 
    Button, 
    Dialog, 
    DialogTitle, 
    DialogContent,
    TextField,
    DialogActions
} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh',
    },
    blueSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#58bfff',
        flex: '0 0 50%',
        position: 'relative',
        overflow: 'hidden',
    },
    blueSideIconBig: {
        position: 'absolute',
        left: '50%',
        top: '53%',
        transform: 'translate(-50%, -50%)',
        width: '350%',
        height: '350%',
    },
    blueSideList: {
        width: 380,
        listStyle: 'none',
        margin: 0,
        padding: 0,
        zIndex: 2,
        '& h6': {
            color: "#fff",
            fontSize: 20,
            fontWeight: 700,
        },
        '& li': {
            display: 'flex',
            alignItems: 'center',
            marginBottom: 35,
        }
    },
    blueSideListIcon: {
        color: '#fff',
        fontSize: 32,
        marginRight: 15,
    },
    loginSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',
    },
    loginTwitterIcon: {
        fontSize: 45,
    },
    loginSideWrapper: {
        width: 380,
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginTop: 15,
        marginBottom: 50,
    },
    loginSideSpan: {
        fontWeight: 700,
        marginBottom: 10,
    },
    loginInput: {
        marginBottom: 20,
    },
    loginButton: {
        width: '35%',
    },
}));

const SignIn = () => {
    const classes = useStyles();
    const [openLoginPopup, setOpenLoginPopup] = React.useState(false);

    const handleClickOpenLoginPopup = () => {
        setOpenLoginPopup(true);
    };
    
    const handleCloseLoginPopup = () => {
        setOpenLoginPopup(false);
    };

    return(
        <div className={classes.wrapper}>
            <div className={classes.blueSide}>
                <TwitterIcon color="primary" className={classes.blueSideIconBig} />
                <ul className={classes.blueSideList}>
                    <li>
                        <SearchIcon className={classes.blueSideListIcon} />
                        <Typography variant="h6">Read about what interests you.</Typography>
                    </li>
                    <li>
                        <PeopleOutlineIcon className={classes.blueSideListIcon} />
                        <Typography variant="h6">Find out what the world is talking about.</Typography>
                    </li>
                    <li>
                        <CommentOutlinedIcon className={classes.blueSideListIcon} />
                        <Typography variant="h6">Join the community.</Typography>
                    </li>
                </ul>
            </div>
            <div className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon color="primary" className={classes.loginTwitterIcon} />
                    <Typography className={classes.loginSideTitle} variant="h4">Find out what is happening in the world.</Typography>
                    <Typography className={classes.loginSideSpan}>Join Twitter now.</Typography>
                    <Button style={{ marginBottom: 15 }} variant="contained" color="primary" fullWidth>Registration</Button>
                    <Button onClick={handleClickOpenLoginPopup} variant="outlined" color="primary" fullWidth>Login</Button>

                    <Dialog open={openLoginPopup} onClose={handleCloseLoginPopup} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Log in to Twitter</DialogTitle>
                        <DialogContent>
                            <TextField
                                className={classes.loginInput}
                                autoFocus
                                id="email"
                                label="Email"
                                InputLabelProps={{ shrink: true }}
                                variant="filled"
                                type="email"
                                fullWidth
                            />
                            <TextField
                                className={classes.loginInput}
                                autoFocus
                                id="password"
                                label="Password"
                                InputLabelProps={{ shrink: true }}
                                variant="filled"
                                type="password"
                                fullWidth
                            />
                            <DialogActions>
                                <Button className={classes.loginButton} onClick={handleCloseLoginPopup} variant="outlined" color="primary">
                                    Cancel
                                </Button>
                                <Button className={classes.loginButton} onClick={handleCloseLoginPopup} color="primary" variant="contained">
                                    Login
                                </Button>
                            </DialogActions>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    );
}

export default SignIn;