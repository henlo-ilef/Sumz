/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;
console.log('================================');
console.log(rapidApiKey); 
const options = {
    method: 'GET',
    url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
    params: {
      url: 'https://time.com/6266679/musk-ai-open-letter/',
      length: '3'
    },
    headers: {
      'X-RapidAPI-Key': '90b9eb69ddmshee1f67390bbc538p17d581jsn27c9091842c5',
      'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
    }
  };
  
export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl : 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key',rapidApiKey);
            headers.set('X-RapidAPI-Host','article-extractor-and-summarizer.p.rapidapi.com');
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            // eslint-disable-next-line no-unused-vars
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })
})

export const { useLazyGetSummaryQuery } = articleApi;