import { ChangeEvent, ChangeEventHandler } from "react";

type Props = {
  text: string;
  setText: (arg: string) => void;
  setImageUrl: (arg: string) => void;
  setAvatar: (arg: string) => void;
  userName: string;
  setUserName: (arg: string) => void;
  handle: string;
  setHandle: (arg: string) => void;
  linkTo: string;
  setLinkTo: (arg: string) => void;
};

const TweetEditor = ({
  text,
  setText,
  setImageUrl,
  setAvatar,
  userName,
  setUserName,
  handle,
  setHandle,
  linkTo,
  setLinkTo,
}: Props) => {
  const handleImageUrl = (
    event: ChangeEvent<HTMLInputElement>,
    setter: (arg: string) => void
  ) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
        setter((reader.result as string) || "");
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <label htmlFor="avatar">Avatar del usuario:</label>
      <input
        type="file"
        name="tweet-avatar"
        id="tweet-avatar"
        onChange={(event) => handleImageUrl(event, setAvatar)}
      />
      <br />
      <label htmlFor="username">Nombre de usuario:</label>
      <input
        type="text"
        name="username"
        id="username"
        value={userName}
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <br />
      <label htmlFor="handle">Handle de cuenta:</label>
      <input
        type="text"
        name="handle"
        id="handle"
        value={handle}
        onChange={(event) => {
          setHandle(event.target.value);
        }}
      />

      <br />
      <label htmlFor="tweet-text">Contenido del tweet:</label>
      <textarea
        id="tweet-text"
        name="tweet-text"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <br />
      <label htmlFor="tweet-image">Imagen del tweet:</label>
      <input
        type="file"
        name="tweet-image"
        id="tweet-image"
        onChange={(event) => handleImageUrl(event, setImageUrl)}
      />
    </div>
  );
};

export default TweetEditor;
