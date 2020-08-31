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

describe('It succesfully GETs', () => {
  test('all quotes', async () => {
    const allQuotes = await request(api).get('/quotes');
    expect(allQuotes.statusCode).toBe(200);
    expect(allQuotes.body.length).toBe(3);
  }),
  test('a random quote', async () => {
    const randomQuote = await request(api).get('/quotes/random');
    expect(randomQuote.statusCode).toBe(200);
    expect([randomQuote.body].length).toBe(1);
  })
})

describe('It succesfully POSTs', () => {
  test('a quote', async () => {
    const quotesBefore = await request(api).get('/quotes');
    await request(api).post('/quotes').send({ quote: 'A mock to test POST requests' });
    const quotesAfter = await request(api).get('/quotes');
    expect(quotesAfter.body.length).toBe(quotesBefore.body.length + 1);
  })
  test('and returns the correct response', async () => {
    const response = await request(api).post('/quotes');
    expect(response.statusCode).toBe(201);
  })
});

describe('It succesfully DELETEs', () => {
  test('a quote', async () => {
    const quotesBefore = await request(api).get('/quotes');
    await request(api).delete('/quotes/5hblv7aqkeilp586');
    const quotesAfter = await request(api).get('/quotes');
    expect(quotesAfter.body.length).toBe(quotesBefore.body.length - 1);
  }),
  test('and returns the correct response', async () => {
    const response = await request(api).delete('/quotes/5hblv7aqkeilp586');
    expect(response.statusCode).toBe(202);
  })
})
