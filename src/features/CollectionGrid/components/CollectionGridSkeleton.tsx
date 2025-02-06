import { LoadingCard } from "../../../design/card/LoadingCard";
import { GridLayout } from "../../../design/Layouts/GridLayout";

export const CollectionGridSkeleton = () => {
  return (
    <GridLayout>
      {Array.from({ length: 20 }).map((_, i) => (
        <LoadingCard key={i} />
      ))}
    </GridLayout>
  );
};
