import React from "react";
import AddToCartButton from "./AddToCartButton";
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// Unused but fully functional
// import RemoveFromCartButton from "./RemoveFromCartButton";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: '100%',
    },
    image: {
        width: 80,
        height: 80,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

const SearchResult = ({product}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item xs={1}>
                        <img className={classes.img} alt={product.name} src={product.image_url}/>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <div className="item-description">
                                    <Typography className="item-description" gutterBottom variant="subtitle1">
                                        {product.name}
                                    </Typography>
                                </div>
                                <Typography className="item-description" variant="body2" gutterBottom>
                                    {product.unit}
                                </Typography>
                                <Typography className="item-description" variant="body2" color="textSecondary">
                                    {`$${(product.price/100).toFixed(2)}`}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <AddToCartButton product={product}/>
                        {
                            // The Remove from Cart button is functional but not needed for the task
                            // uncommenting the button allows removing items from the cart by updating the state
                            // <RemoveFromCartButton product={product}/>
                        }
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
};

export default SearchResult;
