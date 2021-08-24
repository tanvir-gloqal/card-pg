import { Button, Card, CardContent, Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Assignment } from "@material-ui/icons";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  postList: {
    display: "flex",
    marginBottom: theme.spacing(3)
  },
  postIconContainer: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    width: 36
  },
  postIcon: {
    color: "white",
    background: "#9ADEFE",
    padding: 8,
    borderRadius: "50%"
  },
  postContent: {
    padding: theme.spacing(2),
    flex: 1,
    overflow: "hidden"
  },
  description: {
    height: 45,
    overflow: "hidden"
  },
  title: {
    fontSize: 20,
    height: 30,
    fontWeight: theme.typography.fontWeightBold
  },
  actionArea: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  buttonDraft: {
    width: 100,
    textTransform: "capitalize"
  },
  contentTime: {
    color: "#596773"
  }
}));

export default function PostPublished(props) {
  const classes = useStyles();
  const {
    title,
    description,
    numberOfViews,
    numberOfComments,
    timePosted,
    onClickPublished,
    onClickComments
  } = props;
  return (
    <Card className={classes.postList}>
      <div className={classes.postIconContainer}>
        <Assignment className={classes.postIcon} />
      </div>
      <CardContent className={classes.postContent}>
        <Typography
          noWrap
          gutterBottom
          variant="h5"
          className={classes.title}
          component="h2"
        >
          {title}
        </Typography>
        <Typography component="p" className={classes.description}>
          {description}
        </Typography>
        <div className={classes.actionArea}>
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={onClickPublished}
            className={classes.buttonDraft}
          >
            Published
          </Button>
          <Typography variant="subtitle2">
            {numberOfViews || 0} {numberOfViews > 1 ? "views" : "view"}
          </Typography>
          <Typography variant="subtitle2">{timePosted}</Typography>

          <Link
            component="button"
            variant="body2"
            style={{ fontWeight: "bold", color: "black" }}
            onClick={onClickComments}
          >
            {numberOfComments || 0}{" "}
            {numberOfComments <= 1 ? "comment" : "comments"}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
