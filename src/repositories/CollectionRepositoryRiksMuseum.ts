import { ArtObject } from "../entities/ArtObject";
import { CollectionRepository } from "./CollectionRepository";
import {
  CollectionResponse,
  CollectionResponseSchema,
} from "./schema/RiskMuseumSchema";

const COLLECTION_URL = `https://www.rijksmuseum.nl/api/en/collection?key=${import.meta.env.VITE_RISK_MUSEUM_API_KEY}`;
const DEFAULT_PAGE_SIZE = 20;

export class CollectionRepositoryRiksMuseum implements CollectionRepository {
  async getCollection(
    page: number = 1,
    pageSize: number = DEFAULT_PAGE_SIZE,
    searchTerm?: string,
  ): Promise<ArtObject[]> {
    let collectionUrlWithParameters = `${COLLECTION_URL}&ps=${pageSize}&p=${page}`;
    if (searchTerm) {
      collectionUrlWithParameters += `&q=${searchTerm}`;
    }
    try {
      const response = await fetch(collectionUrlWithParameters);
      const data = await response.json();
      const collectionResponse = CollectionResponseSchema.parse(data);
      return this.mapCollectionResponseToArtObjects(collectionResponse);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  private mapCollectionResponseToArtObjects(
    collectionResponse: CollectionResponse,
  ): ArtObject[] {
    return collectionResponse.artObjects.map((artObject) => ({
      id: artObject.id,
      title: artObject.title,
      longTitle: artObject.longTitle,
      artist: artObject.principalOrFirstMaker,
      url: artObject.webImage.url,
    }));
  }
}
