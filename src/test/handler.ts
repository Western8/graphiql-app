import { http, HttpResponse } from 'msw';

const baseUrl = 'https://countries.trevorblades.com/';

export const handlers = [
  http.get(`${baseUrl}`, () => {
    return HttpResponse.json('');
  }),
];
