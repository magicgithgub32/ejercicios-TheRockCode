import { TweetImage, TweetViewContainer } from "../ui/TweetUi";

type Props = {
  text: string;
  imageUrl: string;
};

const TweetViewer = (props: Props) => {
  return (
    <TweetViewContainer>
      <div id="tweet-text-content">
        {props.text.split("\n").map((subtext, index) => (
          <p key={index}>{subtext}</p>
        ))}
      </div>

      {props.imageUrl ? (
        <TweetImage
          id="tweet-image-content"
          src="{props.imageUrl}"
          alt="tweet-image"
        />
      ) : null}
    </TweetViewContainer>
  );
};

export default TweetViewer;
