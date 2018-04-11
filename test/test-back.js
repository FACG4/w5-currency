// test for the router
let test = require('tape');
let supertest = require('supertest');
let router = require('../src/router');
  // test home endpoint
test('testing home endpoint', (t)=>{
  supertest(router)
  .get('/')
  .expect(200)
  .expect('Content-Type', /html/)
  .end((error, res) => {
    if(error){
      console.log(error);
    }else{
      t.equal(res.text.substr(0,15),'<!DOCTYPE html>', 'html language should be english')
      t.end();
    }
  });
})
  // test css/js files

  // test form request
test('testing form', (t)=>{
  supertest(router)
  .post('/getrate')
  .expect(302)
  .send('USD')
  .end((error, res)=>{
    if(error) console.log(error);
    else{
      const regex = new RegExp(/\d+/);
      t.equal(regex.test(res.text), true , 'returned value should be a number')
      t.end();
    }
  })


})


// test for the external API function
