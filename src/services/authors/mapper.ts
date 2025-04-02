import { Author } from "../../domain/author";
import {RawAuthorDocument, RawAuthorSearchResponse, SearchResponse} from "./types"


export const mapAuthorDocument = (doc: RawAuthorDocument): Author => ({
    id: doc.key,
    name: doc.name,
    alternateNames: doc.alternate_names,
    birthDate: doc.birth_date,
    topWork: doc.top_work,
    workCount: doc.work_count,
    imageUrl: `https://covers.openlibrary.org/a/olid/${doc.key.replace('/authors/', '')}-S.jpg`
  });
  
  export const mapResponse = (response: RawAuthorSearchResponse): SearchResponse => ({
    total: response.numFound,
    offset: response.start,
    authors: response.docs.map(mapAuthorDocument)
  });