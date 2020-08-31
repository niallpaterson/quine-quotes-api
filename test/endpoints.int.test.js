import api from '../api/api.js';
import db from '../__mocks__/db.js'
import request from 'supertest';

jest.mock('fs');

beforeEach(() => {
  db.reset();
})

describe('It returns a 404 error with the correct message for empty', () => {
  test('get routes', async () => {
    const noRoute = await request(api).get('/noroute');
    expect(noRoute.statusCode).toBe(404);
    expect(noRoute.text).toBe('This route has no content.');
  }),
  test('post routes', async () => {
    const noRoute = await request(api).post('/noroute');
    expect(noRoute.statusCode).toBe(404);
    expect(noRoute.text).toBe('This route has no content.');
  }),
  test('delete routes', async () => {
    const noRoute = await request(api).delete('/noroute');
    expect(noRoute.statusCode).toBe(404);
    expect(noRoute.text).toBe('This route has no content.');
  })
})
