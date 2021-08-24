import React from "react";
import { DateTime } from "luxon";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { IconButton, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import { ExpandMore, FavoriteBorderOutlined, Image } from "@material-ui/icons";
import { Component } from "react";

const useStyles = (theme) => ({
  root: {
    border: "1px solid #C2D0D6",
    borderRadius: "12px",
    minWidth: 264,
    maxWidth: 264,
    marginRight: 32
  },
  cardAction: {
    position: "relative"
  },
  clickButton: {
    position: "absolute",
    top: "calc(50% - 24px)",
    left: "calc(50% - 24px)",
    color: "#DADADA",
    padding: 0,
    width: "48px",
    height: "48px"
  },
  cardMedia: {
    objectFit: "cover",
    height: "115px",
    width: "100%",
    borderRadius: "12px",
    borderLeft: "1px solid lightgray",
    borderRight: "1px solid lightgray",
    borderBottom: "1px solid lightgray"
  },
  imageName: {
    paddingTop: theme.spacing(2)
  },

  cardRowStart: {
    display: "flex",
    marginTop: "8px"
  },
  cardRowBetween: {
    display: "flex",
    marginTop: "8px",
    alignItems: "center",
    justifyContent: "space-between"
  },
  viewsContainer: {
    alignItems: "center",
    display: "flex"
  },
  viewsNumber: {
    marginLeft: "8px"
  },
  bottomCardAction: {
    display: "flex",
    justifyContent: "space-between",
    flex: 1,
    marginLeft: "40%"
  },
  buttonIcon: { width: "100%", height: "100%" }
});

class ImageCardContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  render() {
    const {
      classes,
      creationDate,
      numberOfLikes,
      imageName,
      imageURL,
      imageDescription
    } = this.props;

    return (
      <Card className={classes.root}>
        <div className={classes.cardAction}>
          <img src={imageURL} alt="image_pic" className={classes.cardMedia} />
        </div>
        <CardContent className="pb-0">
          <div className={classes.cardRowStart}>
            <Image style={{ color: "#A9C0FF" }} />
            <Typography style={{ marginLeft: "8px" }}>Image</Typography>
          </div>
          <div className={classes.cardRowBetween}>
            <Typography>
              {DateTime.fromISO(creationDate).toFormat("LLL dd, yyyy")}
            </Typography>
            <div className={classes.viewsContainer}>
              <FavoriteBorderOutlined fontSize="small" />
              <Typography className={classes.viewsNumber}>
                {numberOfLikes || 0}
              </Typography>
            </div>
          </div>
          <div className={classes.imageName}>
            <Typography style={{ fontWeight: "bold" }} noWrap>
              {imageName}
            </Typography>
          </div>
          <div className="pt-1">
            <Typography noWrap>{imageDescription}</Typography>
          </div>
        </CardContent>
        <CardActions className="pt-0">
          <div className={classes.bottomCardAction}>
            <IconButton size="small" color="primary">
              <ExpandMore />
            </IconButton>
          </div>
        </CardActions>
      </Card>
    );
  }
}
ImageCardContent.propTypes = {
  imageURL: PropTypes.string.isRequired,
  imageName: PropTypes.string,
  imageDescription: PropTypes.string,
  creationDate: PropTypes.string,
  numberOfLikes: PropTypes.number
};

export default withStyles(useStyles)(ImageCardContent);
