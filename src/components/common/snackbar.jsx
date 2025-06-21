import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function CustomSnackbar({ open, onClose, message, severity }) {
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'right',
    });
    const { vertical, horizontal} = state; 
    return (
        <div sx={{ zindex: '9999' }}>
            <Snackbar open={open} autoHideDuration={3000} onClose={onClose} anchorOrigin={{ vertical, horizontal }} key={vertical + horizontal}>
                <Alert
                    onClose={onClose}
                    severity={severity}
                    variant="filled"
                    sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default CustomSnackbar;
