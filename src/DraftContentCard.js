import React, { Fragment } from "react";
import { DateTime } from "luxon";
import {
  Card,
  Typography,
  CardActions,
  CardContent,
  IconButton,
  withStyles
} from "@material-ui/core";
import { AddCircleOutline, DeleteForever, Edit, ExpandMore, FavoriteBorderOutlined, Image, RestoreFromTrash, Star, StarOutline } from "@material-ui/icons";
import { Component } from "react";
import ReactPlayer from "react-player";

const useStyles = (theme) => ({
  root: {
    border: "1px solid #C2D0D6",
    borderRadius: "12px",
    margin: 16,
    height: 315,
    width: 264,
    display: "flex",
    flexDirection: "column"
  },
  cardAction: {
    position: "relative"
  },
  cardMedia: {
    height: "115px !important",
    width: "100% !important",
    borderRadius: "12px !important",
    background: "linear-gradient(0deg, rgba(0, 0, 0, 0.21), rgba(0, 0, 0, 0.21)), #85A0AD",
    overflow: "hidden"
  },
  clickButton: {
    position: "absolute",
    top: "calc(50% - 24px)",
    left: "calc(50% - 24px)",
    color: "#DADADA",
    padding: 0,
    width: "48px",
    height: "48px",
    "&>span>svg": {
      width: "75%",
      height: "75%",
    }
  },
  editButton: {
    position: "absolute",
    color: "#00AEEF",
    top: 0,
    right: 0,
    padding: 0,
    width: "48px",
    height: "48px"
  },
  cardContent: {
    flex: 1,
    position: "relative",
    overflowY: "scroll",
    '&::-webkit-scrollbar': {
      width: "5px",
    },
    '&::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 10,
      '-webkit-border-radius': "10px",
      backgroundColor: 'rgba(255,0,0,0.8)'
    }
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    padding: 0,
    "&>button": {
      padding: 8
    }
  }

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
      post: { attachment, contentType }, 
      classes
    } = this.props;
    if (attachment) {
      const { url } = attachment;
      if (contentType.startsWith("image")) {
        return (
          <div style={{ objectFit: "cover" }}>
            <img
              src={url}
              alt="image_pic"
              className={classes.cardMedia}
              style={{ objectFit: "contain" }}
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
      <div className={classes.cardMedia}>
        <IconButton className={classes.clickButton}>
          <AddCircleOutline />
        </IconButton>
      </div>
    );
  }

  render() {
    const {
      classes,
      post: { timeCreated, hasStarred, wasDeleted, captionHTML },
      numberOfLikes,
      imageName,
      imageDescription
    } = this.props;

    return (
      <Card className={classes.root}>
        <div className={classes.cardAction}>{this.renderMediaContent()}</div>
        <CardContent className={classes.cardContent}>
          <IconButton className={classes.editButton} onClick={this.props.handleEditPost}>
            <Edit />
          </IconButton>
          <div dangerouslySetInnerHTML={{ __html: captionHTML }} />
        </CardContent>
        <CardActions className={classes.cardActions}>
          <IconButton onClick={this.props.handleDeletePost}>
            {wasDeleted ? <RestoreFromTrash /> : <DeleteForever />}
          </IconButton>
          <Typography variant="body1">
            {DateTime.fromISO(timeCreated).toFormat("LLL dd, yyyy")}
          </Typography>
          <IconButton onClick={this.props.handleStarPost}>
            {hasStarred ? <Star /> : <StarOutline />}
          </IconButton>

        </CardActions>
      </Card>
    );
  }
}

export default withStyles(useStyles)(DraftCardContent);
