const request = require('supertest');
const app = require('../src/app');
const { describe, test, expect } = require('@jest/globals');

describe('User API', ()=>{

    test('GET /api/users should return an empty list initially', 
    async() =>{
        const resp = await request(app).get('/api/users');
        expect(resp.statusCode).toBe(200);
        expect(resp.body).toEqual([]);
    });
    test('POST /api/users should create a new user',        
    async() =>{
        const newUser = {name: "Stiven", email: 'dltituana@espe.edu.ec'};
        const resp = await request(app).post('/api/users').send(newUser);
        expect(resp.statusCode).toBe(201);
        expect(resp.body).toHaveProperty('id')
        expect(resp.body.name).toBe('Stiven');
    });

    test('POST /api/users should fail is data is incomplete', 
        async()=>{
            const resp = await request(app).post('/api/users').send({name: 'Gabriela'});
            expect(resp.statusCode).toBe(400);
            expect(resp.body).toHaveProperty('message','Name and email are required');

        });
});


