import { ArtObject } from "../../../entities/ArtObject";
import { ImageCard } from "../../../design/card/ImageCard";

interface ArtCardProps {
  artObject: ArtObject;
}

export const ArtCard = ({ artObject }: ArtCardProps) => {
  return (
    <ImageCard
      imgUrl={artObject.url}
      imgAlt={artObject.title}
      caption={artObject.longTitle}
    />
  );
};
