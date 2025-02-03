import { ArtObject } from "../entities/ArtObject";

export interface CollectionRepository {
  getCollection(
    page: number,
    pageSize?: number,
    searchTerm?: string,
  ): Promise<ArtObject[]>;
}
