import React from "react";

import { Dialog, DialogTitle, DialogContent, IconButton  } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

interface ModelBlockProps{
    title?: string;
    children: React.ReactNode;
    visible: boolean;
    onClose: () => void;
}

export const ModelBlock: React.FC<ModelBlockProps> = ({title, children, visible, onClose}: ModelBlockProps): React.ReactElement => {
    return (
        <Dialog open={visible} onClose={onClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">
                <IconButton onClick={onClose}>
                    <CloseIcon style={{ fontSize: 26 }} color="secondary" />
                </IconButton>
                {title}
            </DialogTitle>
            <DialogContent>{children}</DialogContent>
        </Dialog>
    );
}