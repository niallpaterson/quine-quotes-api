import api from '../api/api.js';
import db from '../__mocks__/db.js'
import request from 'supertest';

jest.mock('fs');

beforeEach(() => {
  db.reset();
})
