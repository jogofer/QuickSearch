import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, SEARCH_AUTHORS_URL } from './urls';
import { mapResponse } from './mapper';
import { SearchResponse } from './types';

export const searchAuthorsApi = createApi({
  reducerPath: 'searchAuthorsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    searchAuthors: builder.query<SearchResponse, string>({
      query: (searchTerm) => {
        return {
          url: SEARCH_AUTHORS_URL,
          params: {
            q: searchTerm,
          },
        };
      },
      transformResponse: mapResponse,
    }),
  }),
});

export const { useSearchAuthorsQuery } = searchAuthorsApi; 