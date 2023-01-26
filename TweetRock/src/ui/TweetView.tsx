import styled from "styled-components";

export const TweetViewContainer = styled.section`
  width: 100%;
  max-width: 568px;
  padding: 16px;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 12px;
  border-radius: 8px;
`;
export const TweetImage = styled.img`
  width: 100%;
  border-radius: 12px;
`;

export const TweetAvatar = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  border: 0;
`;

export const TweetUserData = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;

export const TweetDataGreyText = styled.span`
  color: grey;
`;

export const TweetTextContent = styled.div`
  margin-bottom: 12px;
`;
