import { http, HttpResponse } from 'msw';
import { apiResults, apiDetails } from './mocks';

const baseUrl = 'https://swapi.dev/api/people/';

export const handlers = [
  http.get(`${baseUrl}`, ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get('page');
    if (page === '1') {
      return HttpResponse.json(apiResults);
    }
  }),
  http.get(`${baseUrl}4`, () => {
    return HttpResponse.json(apiDetails);
  }),
];
