import React from "react";

import { Typography, MenuList, MenuItem, ListItemIcon, Hidden } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/NotificationsNone';
import MailIcon from '@material-ui/icons/MailOutline';
import BookmarkIcon from '@material-ui/icons/BookmarkBorder';
import ListIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/PersonOutline';

import { useHomeStyles } from "../pages/Home/theme";

interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu: React.FC<SideMenuProps> = ({classes}: SideMenuProps): React.ReactElement => {
    return (
        <MenuList className={classes.sideMenuList}>
            <MenuItem className={classes.sideMenuListItem}>
                <ListItemIcon className={classes.sideMenuListItemIconWrapper}>
                    <HomeIcon className={classes.sideMenuListItemIcon} />
                </ListItemIcon>
                <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLaber}>Home</Typography>
                </Hidden>
            </MenuItem>
            <MenuItem className={classes.sideMenuListItem}>
                <ListItemIcon className={classes.sideMenuListItemIconWrapper}>
                    <SearchIcon className={classes.sideMenuListItemIcon} />
                </ListItemIcon>
                <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLaber}>Search</Typography>
                </Hidden>
            </MenuItem>
            <MenuItem className={classes.sideMenuListItem}>
                <ListItemIcon className={classes.sideMenuListItemIconWrapper}>
                    <NotificationsIcon className={classes.sideMenuListItemIcon} />
                </ListItemIcon>
                <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLaber}>Notifications</Typography>
                </Hidden>
            </MenuItem>
            <MenuItem className={classes.sideMenuListItem}>
                <ListItemIcon className={classes.sideMenuListItemIconWrapper}>
                    <MailIcon className={classes.sideMenuListItemIcon} />
                </ListItemIcon>
                <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLaber}>Messages</Typography>
                </Hidden>
            </MenuItem>
            <MenuItem className={classes.sideMenuListItem}>
                <ListItemIcon className={classes.sideMenuListItemIconWrapper}>
                    <BookmarkIcon className={classes.sideMenuListItemIcon} />
                </ListItemIcon>
                <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLaber}>Bookmarks</Typography>
                </Hidden>
            </MenuItem>
            <MenuItem className={classes.sideMenuListItem}>
                <ListItemIcon className={classes.sideMenuListItemIconWrapper}>
                    <ListIcon className={classes.sideMenuListItemIcon} />
                </ListItemIcon>
                <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLaber}>Lists</Typography>
                </Hidden>
            </MenuItem>
            <MenuItem className={classes.sideMenuListItem}>
                <ListItemIcon className={classes.sideMenuListItemIconWrapper}>
                    <PersonIcon className={classes.sideMenuListItemIcon} />
                </ListItemIcon>
                <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLaber}>Profile</Typography>
                </Hidden>
            </MenuItem>
        </MenuList>
    );
}