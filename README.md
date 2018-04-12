# w5-currency
[![Build Status](https://travis-ci.org/FACG4/w5-currency.svg?branch=master)](https://travis-ci.org/FACG4/w5-currency)


### Our project
Single web application that allows users to know exchange rates between currencies and Bitcoin.

### File Structure:
Our project has the following file structure:
#### public:
* **css**
  * style.css
* **js**
  * dom.js
  * request.js
#### src:
* **server.js**
* **router.js**
* **handler.js**

#### test:
* **test-back.js**
### Planning Phase:

#### the workflow:
 ![workflow](/public/x.jpg)
#### 3 phases:
  * **Backend development**
  * **Backend testing**
  * **Frontend Development**



### TDD: Supertest, CI & Test Coverage:
#### Fake http requests to test the back-end server with supertest.
```
test('testing form', (t)=>{
  supertest(router)
  .post('/getrate')
  .expect(200)
  .send('{"value":"usd","amount":"213"}')
  .end((error, res)=>{
    if(error) console.log(error);
    else{
      const regex = new RegExp(/\d+/);
      t.equal(regex.test(res.text), true , 'returned value should be a number')
      t.end();
    }
  })
})
```
#### Continuous Integration with Travis:
![travis](/public/travis.png)

#### Test Coverage (istanbul):
![test coverage](/public/test_coverage.png)

#### How to run our website:
[Heroku link here](https://w5-currency.herokuapp.com/)

* Locally :
  * Clone the repo .
  * In terminal Run :
    * ``` npm i ``` .
    * ``` npm start ``` .
  * In browser :
    - ``` localhost:3000 ``` .
