import { Button, Card, CardContent, Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Assignment } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  postList: {
    display: "flex",
    marginBottom: theme.spacing(3)
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
    width: 75,
    textTransform: "capitalize"
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
  contentTime: {
    color: "#596773"
  }
}));

export default function PostDraft(props) {
  const classes = useStyles();
  const {
    title,
    description,
    timePosted,
    onClickSchedule,
    onClickDraft
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
            color="secondary"
            variant="outlined"
            onClick={onClickDraft}
            className={classes.buttonDraft}
          >
            Draft
          </Button>
          <Link
            component="button"
            variant="body2"
            style={{ fontWeight: "bold", color: "black" }}
            onClick={onClickSchedule}
          >
            Schedule this topic here
          </Link>
          <Typography variant="subtitle2">{timePosted}</Typography>
        </div>
      </CardContent>
    </Card>
  );
}
