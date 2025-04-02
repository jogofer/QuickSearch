import { Author } from "../../domain/author";

export interface SearchResponse {
    total: number;
    offset: number;
    authors: Author[];
  }
  
export interface RawAuthorDocument {
    key: string;
    type: string;
    name: string;
    work_count: number;
    alternate_names?: string[];
    birth_date?: string;
    top_work?: string;
  }
  
 export interface RawAuthorSearchResponse {
    numFound: number;
    start: number;
    numFoundExact: boolean;
    docs: RawAuthorDocument[];
  }