import { ApiClient } from "../ApiClient";

export type ChuckNorrisJokeCategoriesData = string[];

export async function getCategories(): Promise<ChuckNorrisJokeCategoriesData> {
    return ApiClient.get<ChuckNorrisJokeCategoriesData>('https://api.chucknorris.io/jokes/categories');
}
