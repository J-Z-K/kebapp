import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PropTypes from "prop-types";
import Rating from "@material-ui/lab/Rating";
import IconButton from "@material-ui/core/IconButton";
import "./index.scss";

const useStyles = makeStyles((theme) => ({
    root: {
        // maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: "rotate(180deg)",
    },
    avatar: {
        backgroundColor: red[500],
    },
    left: {
        marginLeft: "auto",
    },
}));

function MiniBlock({ title, address }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={title}
                subheader={address}
            />
            <CardMedia
                className={classes.media}
                image={require("../../assets/mapa.jpg")}
                title="Paella dish"
            />
            <CardActions disableSpacing>
                <Rating name="read-only" value={4} readOnly />
                <div className={classes.left}>
                    <IconButton
                        aria-label="add to favorites"
                        className="alignLeft"
                    >
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="show more">
                        <ArrowForwardIcon />
                    </IconButton>
                </div>
            </CardActions>
        </Card>
    );
}

MiniBlock.propTypes = {
    title: PropTypes.string,
    addres: PropTypes.string,
};

// Same approach for defaultProps too

MiniBlock.defaultProps = {
    title: "Efes Kebab",
    address: "Basztowa 17, 31-143 Kraków",
};

export default MiniBlock;
