import styled from "styled-components";
import { useState } from "react";
import { Card } from "./Card";

interface ImageCardProps {
  imgUrl: string;
  imgAlt: string;
  caption: string;
}

export const ImageCard = ({ imgUrl, imgAlt, caption }: ImageCardProps) => {
  const [displayCaption, setDisplayCaption] = useState(false);
  return (
    <Card
      style={{ position: "relative" }}
      onMouseEnter={() => setDisplayCaption(true)}
      onMouseLeave={() => setDisplayCaption(false)}
    >
      <img src={imgUrl} loading="lazy" alt={imgAlt} />

      <ImageCardCaptionContainer style={{ opacity: displayCaption ? 1 : 0 }}>
        <p style={{ padding: "0.5rem" }}>{caption}</p>
      </ImageCardCaptionContainer>
    </Card>
  );
};

const ImageCardCaptionContainer = styled.div`
  position: absolute;
  color: white;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  border-radius: 0 0 0.75rem 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;
