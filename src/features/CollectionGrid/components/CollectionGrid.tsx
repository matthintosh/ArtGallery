import { GridLayout } from "../../../design/Layouts/GridLayout";
import { ArtObject } from "../../../entities/ArtObject";
import { useCollectionContext } from "../context/CollectionContext";
import { ArtCard } from "./ArtCard";
import { CollectionGridSkeleton } from "./CollectionGridSkeleton";

export const CollectionGrid = () => {
  const { artObjects, isError, isLoading } = useCollectionContext();

  if (isError) {
    return <div>Error loading collection</div>;
  }

  if (isLoading) {
    return <CollectionGridSkeleton />;
  }

  return (
    <GridLayout>
      {artObjects.map((artObject: ArtObject) => (
        <ArtCard artObject={artObject} key={artObject.id} />
      ))}
    </GridLayout>
  );
};
