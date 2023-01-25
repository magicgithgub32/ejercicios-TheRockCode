import { useState } from "react";
import TweetEditor from "./components/TweetEditor";
import TweetViewer from "./components/TweetViewer";
import { MainLayOutUI } from "./ui/LayOut";

function App() {
  const [tweetText, setTweetText] = useState<string>(
    "Hola, soy el texto de un tweet"
  );

  const [tweetImage, setTweetImage] = useState<string>("");

  return (
    <MainLayOutUI>
      <TweetEditor
        text={tweetText}
        setText={setTweetText}
        imageUrl={tweetImage}
        setImageUrl={setTweetImage}
      />

      <TweetViewer text={tweetText} imageUrl={tweetImage} />
    </MainLayOutUI>
  );
}
export default App;
