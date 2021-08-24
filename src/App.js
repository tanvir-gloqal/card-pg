import { Col, Row } from "react-bootstrap";
import DraftContentCard from "./DraftContentCard";
import "./styles.css";

const postImage = {
  attachment: {
    filePath:
      "draftview/gloqal/1629726713916-jon-parry-C8eSYwQkwHw-unsplash.jpg",
    url:
      "https://firebasestorage.googleapis.com/v0/b/gloqal-auth.appspot.com/o/draftview%2Fgloqal%2F1629726713916-jon-parry-C8eSYwQkwHw-unsplash.jpg?alt=media&token=8c612faa-1894-42a2-a987-a2ff377a940a"
  },
  contentType: "image/jpeg",
  timeCreated: "2021-08-23T13:51:58.102Z",
  captionHTML:
    "<p><strong>Meditation By Vishal Lakhni</strong></p><p><br></p><p>This idiot thinks he can meditate. His meditation comes with stupid music and he talks too much to distract the audience.</p>",
  captionRTF: {
    blocks: [],
    entityMap: {}
  },
  hasStarred: true,
  wasDeleted: false
};

const postVideo = {
  attachment: {
    filePath:
      "draftview/gloqal/1629726713916-jon-parry-C8eSYwQkwHw-unsplash.jpg",
    url:
      "https://firebasestorage.googleapis.com/v0/b/gloqal-auth.appspot.com/o/draftview%2Fgloqal%2F1629732926885-big_buck_bunny_720p_1mb.mp4?alt=media&token=2c54f122-8b9b-4fdf-bd1d-a88f0c8682f5"
  },
  contentType: "video/mp4",
  timeCreated: "2021-08-23T13:51:58.102Z",
  captionHTML:
    "<p><strong>Meditation By Vishal Lakhni</strong></p><p><br></p><p>This idiot thinks he can meditate. His meditation comes with stupid music and he talks too much to distract the audience.</p>",
  captionRTF: {
    blocks: [],
    entityMap: {}
  },
  hasStarred: false,
  wasDeleted: true
};

const postText = {
  contentType: "text/plain",
  timeCreated: "2021-08-23T13:51:58.102Z",
  captionHTML:
    "<p><strong>Meditation By Vishal Lakhni</strong></p><p><br></p><p>This idiot thinks he can meditate. His meditation comes with stupid music and he talks too much to distract the audience.</p>",
  captionRTF: {
    blocks: [],
    entityMap: {}
  },
  hasStarred: false,
  wasDeleted: true
};

export default function App(props) {
  return (
    <>
      <Row style={{ display: "flex", flexWrap: "wrap" }}>
        <Col>
          <DraftContentCard post={postImage} />
        </Col>
        <Col>
          <DraftContentCard post={postVideo} />
        </Col>
        <Col>
          <DraftContentCard post={postText} />
        </Col>
      </Row>
    </>
  );
}
