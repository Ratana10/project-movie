import type { Movie } from "./Movies";

export type APIResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_result: number;
}