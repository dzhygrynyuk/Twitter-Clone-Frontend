import { makeStyles, Theme } from "@material-ui/core";
import grey from '@material-ui/core/colors/grey';

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
    },
    addTweetPopup: {
        width: 450,
        '& > div': {
            padding: '5px 0',
        }
    }
}));