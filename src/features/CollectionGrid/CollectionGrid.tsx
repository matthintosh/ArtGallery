import { Card } from "../../design/card/Card";
import { GridLayout } from "../../design/Layouts/GridLayout";
import { useFetchCollection } from "./use-cases/useFetchCollection";

export const CollectionGrid = () => {
  const { artObjects, isLoading, isError, fetchNextPage } =
    useFetchCollection();
  if (isError) return <div>Error loading collections</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <GridLayout>
      {artObjects?.map((artObject) => (
        <Card key={artObject.id}>
          <img src={artObject.url} alt={artObject.title} />
        </Card>
      ))}
      <button onClick={() => fetchNextPage()}>Load more</button>
    </GridLayout>
  );
};
