import React from "react";
import {cartActions} from '../Actions/CartActions';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import SoppingCart from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        'background-color': 'red',
    },
}));

const AddToCartButton = ({product, onClick}) => {
    const classes = useStyles();
    return (
        <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            endIcon={<SoppingCart/>}
            onClick={e => {
                e.preventDefault();
                onClick(product);
            }}
        >
            Add To Cart
        </Button>
    );
};

const mapDispatchToProps = (dispatch, ownProps) =>
    bindActionCreators({
        onClick: cartActions.addItem,
    }, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(AddToCartButton);
