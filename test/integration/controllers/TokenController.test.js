const supertest = require('supertest');
const md5 = require('md5');

describe('TokenController', function(){
    describe('#loginAct', function(){
        it('should return token', function(done){
            supertest(sails.hooks.http.app)
            .post('/token/login')
            .send({
                username: 'budi',
                password: 'rosyid'
            })
            .expect(200, {
                token: md5('budi')
            }, done);
        })
    })
    describe('#logout', function(){
        it('should return message - logout success', function(done){
            supertest(sails.hooks.http.app)
            .post('/token/logout')
            .set('token', '12345')
            .expect(200, {
                message: 'logout success'
            }, done);
        })
        it('should return message - token not available', function(done){
            supertest(sails.hooks.http.app)
            .post('/token/logout')
            .set('token', '')
            .expect(401, {
                message: 'token not available'
            }, done);
        })
    })
})