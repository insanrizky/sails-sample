const supertest = require('supertest');

describe('TestController.index', function(){
    describe('#index()', function(){
        it('should return 6', function(done){
            supertest(sails.hooks.http.app)
                .get('/test')
                .expect(200, {
                    msg: 6
                }, done);
        })
    })
})