import {
  TweetDataGreyText,
  TweetImage,
  TweetUserData,
  TweetViewContainer,
  TweetTextContent,
} from "../ui/TweetView";

type Props = {
  text: string;
  imageUrl: string;
  avatar: string;
  username: string;
  handle: string;
};

const TweetViewer = (props: Props) => {
  const renderTextWithLinks = (text: string) => {
    return text.split("\n").map((subtext, index) => {
      return (
        <p key={index}>
          {subtext.split("").map((textElement) => {
            const isLink =
              textElement.includes(".com") || textElement.includes("http://");

            if (isLink) {
              return (
                <span>
                  <a href={textElement}>{textElement}</a>{" "}
                </span>
              );
            } else {
              return textElement + " ";
            }
          })}
        </p>
      );
    });
  };
  return (
    <TweetViewContainer>
      <article>
        <img src={props.avatar} alt="avatar" />
      </article>

      <article>
        <TweetUserData>
          <b>{props.username}</b>
          <TweetDataGreyText>@{props.handle}</TweetDataGreyText>
          <TweetDataGreyText>·</TweetDataGreyText>
          <TweetDataGreyText>18 Jun.</TweetDataGreyText>
        </TweetUserData>
        <TweetTextContent id="tweet-text-content">
          {renderTextWithLinks(props.text)}
        </TweetTextContent>

        {props.imageUrl ? (
          <TweetImage
            id="tweet-image-content"
            src={props.imageUrl}
            alt="tweet-image"
          />
        ) : null}
      </article>
    </TweetViewContainer>
  );
};

export default TweetViewer;
