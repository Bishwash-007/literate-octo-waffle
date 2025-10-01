import app from '#src/app.js';
import request from 'supertest';

describe('API Endpoints', () => {
  // write tests
  describe('GET /health', () => {
    it('It should return health status', async () => {
      const response = await request(app).get('/health').expect(200);
      expect(response.body).toHaveProperty('status', 'ok');
      expect(response.body).toHaveProperty('timestamp');
      expect(response.body).toHaveProperty('uptime');
    });
  });

  // API
  describe('GET /api', () => {
    it('It should return API Message', async () => {
      const response = await request(app).get('/api').expect(200);
      expect(response.body).toHaveProperty(
        'message',
        'Acquisition API is Up and Running!'
      );
    });
  });

  //non existent
  describe('GET /nonexistent', () => {
    it('It should return 404 for non-existent routes', async () => {
      const response = await request(app).get('/nonexistent').expect(404);
      expect(response.body).toHaveProperty('error', 'Route Not Found');
    });
  });
});
