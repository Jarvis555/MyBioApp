var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('post', {});
});

router.post('/find', function(req, res, next) {
  let text = req.body.text3;
  let find = req.body.findWord;
  let ar = text.split(' ');
  let position;
  //  using the text from the page break text3 into an array of words
  let search = ar.indexOf(find);
  if(search == -1 ){
    position = `${find} cant be found`;
  }else{
    position = `${find} was found at position ${search}`;
  }
  //  find findWord in the array of words
  //  return findResult to the browser
  res.render('test', {
    text3: text, 
    findWord: find, 
    findResult: position
    })
});

router.post('/math', function(req, res, next) {
  let num1 = req.body.number1 | 0; 
  let num2 = req.body.number2 | 0;
  let op = req.body.operator;

  let answer = 0;
  switch(op){
    case '+': answer = num1 + num2;  break;
    case '-': answer = num1 - num2;  break;
    case '/': answer = num1 / num2;  break;
    case '*': answer = num1 * num2;  break;
    case '%': answer = num1 % num2;  break;
    case '^': answer = num1 ** num2; break;
    default:    break;
  }

  res.render('test', {
    number1: num1,
    number2: num2,
    operator: op,
    mathResult: answer
  });
});
module.exports = router;
