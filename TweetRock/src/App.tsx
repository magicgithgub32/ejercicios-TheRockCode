import { useState } from "react";
import TweetEditor from "./components/TweetEditor";
import TweetViewer from "./components/TweetViewer";
import { MainLayOutUI } from "./ui/LayOut";

function App() {
  const [tweetText, setTweetText] = useState<string>(
    "Hola, soy el texto de un tweet"
  );
  const [tweetImage, setTweetImage] = useState<string>("");
  const [tweetAvatar, setTweetAvatar] = useState<string>("");
  const [tweetUserName, setTweetUserName] = useState<string>("Username");
  const [tweetHandle, setTweetHandle] = useState<string>("user handle");
  const [tweetLinkTo, setTweetLinkTo] = useState<string>("");

  return (
    <MainLayOutUI>
      <TweetEditor
        text={tweetText}
        setText={setTweetText}
        setImageUrl={setTweetImage}
        setAvatar={setTweetAvatar}
        userName={tweetUserName}
        setUserName={setTweetUserName}
        handle={tweetHandle}
        setHandle={setTweetHandle}
        linkTo={tweetLinkTo}
        setLinkTo={setTweetLinkTo}
      />
      <TweetViewer
        text={tweetText}
        imageUrl={tweetImage}
        avatar={tweetAvatar}
        username={tweetUserName}
        handle={tweetHandle}
      />
    </MainLayOutUI>
  );
}
export default App;
