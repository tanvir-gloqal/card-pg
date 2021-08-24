import React from "react";
import { DateTime } from "luxon";
import {
  Card,
  Typography,
  CardActions,
  CardContent,
  IconButton,
  withStyles
} from "@material-ui/core";
import { ExpandMore, FavoriteBorderOutlined, Image } from "@material-ui/icons";
import { Component } from "react";
import ReactPlayer from "react-player";

const useStyles = (theme) => ({
  root: {
    border: "1px solid #C2D0D6",
    borderRadius: "12px",
    minWidth: 264,
    maxWidth: 264,
    margin: 16,
    minHeight: 315
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
    height: "115px !important",
    width: "100% !important",
    borderRadius: "12px !important",
    background:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.21), rgba(0, 0, 0, 0.21)), #85A0AD",
    overflow: "hidden"
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

class DraftCardContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  renderMediaContent() {
    const {
      post: { attachment },
      classes
    } = this.props;
    if (attachment) {
      const {
        url,
        metadata: { contentType }
      } = attachment;
      if (contentType.startsWith("image")) {
        return (
          <div>
            <img
              src={url}
              alt="image_pic"
              className={classes.cardMedia}
              style={{ objectFit: "contain !important" }}
            />
          </div>
        );
      } else if (contentType.startsWith("video")) {
        return (
          <div>
            <ReactPlayer
              url={url}
              controls
              alt="image_pic"
              className={classes.cardMedia}
            />
          </div>
        );
      }
    }
    return (
      <div>
        <img
          src={attachment.url}
          alt="image_pic"
          className={this.props.classes.cardMedia}
        />
      </div>
    );
  }

  render() {
    const {
      classes,
      creationDate,
      numberOfLikes,
      imageName,
      imageDescription
    } = this.props;

    return (
      <Card className={classes.root}>
        <div className={classes.cardAction}>{this.renderMediaContent()}</div>
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

export default withStyles(useStyles)(DraftCardContent);
