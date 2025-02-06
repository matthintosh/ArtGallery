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
      data-testid="image-card"
    >
      <img src={imgUrl} loading="lazy" alt={imgAlt} />

      <ImageCardCaptionContainer style={{ opacity: displayCaption ? 1 : 0 }}>
        {caption}
      </ImageCardCaptionContainer>
    </Card>
  );
};

const ImageCardCaptionContainer = styled.div`
  position: absolute;
  color: white;
  bottom: 0;
  min-width: -webkit-fill-available;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  border-radius: 0 0 0.75rem 0.75rem;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  padding: 0.3rem;
`;
