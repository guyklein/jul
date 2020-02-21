import React from "react";
import {cartActions} from '../Actions/CartActions';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        'background-color': 'red',
    },
}));

const RemoveFromCartButton = ({product, onClick}) => {
    const classes = useStyles();
    return (
        <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            endIcon={<ClearIcon />}
            onClick={e => {
                e.preventDefault();
                onClick(product);
            }}
        >
            Remove from cart
        </Button>
    );
};

const mapDispatchToProps = (dispatch, ownProps) =>
    bindActionCreators({
        onClick: cartActions.removeItem,
    }, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(RemoveFromCartButton);
