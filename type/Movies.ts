export type Movie = {
  id: number;
  title: string;
  genres:{
    id:number;
    name:string;
  }[];
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number | null;
  runtime: number | null;
}