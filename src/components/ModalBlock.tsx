import React from "react";

import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";

interface ModelBlockProps{
    title: string;
    children: React.ReactNode;
    visible: boolean;
    onClose: () => void;
}

export const ModelBlock: React.FC<ModelBlockProps> = ({title, children, visible, onClose}: ModelBlockProps): React.ReactElement => {
    return (
        <Dialog open={visible} onClose={onClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{title}</DialogTitle>
            <DialogContent>{children}</DialogContent>
        </Dialog>
    );
}