var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
  res.render('test', {});
});

router.post('/find', function (req, res, next) {
  let text = req.body.text3;
  let find = req.body.findWord;
  let ar = text.split(' ');
  let position;
  //  using the text from the page break text3 into an array of words
  let search = ar.indexOf(find);
  if (search == -1) {
    position = `${find} cant be found`;
  } else {
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

router.post('/math', function (req, res, next) {
  let num1 = req.body.number1 | 0;
  let num2 = req.body.number2 | 0;
  let op = req.body.operator;

  let answer = 0;
  switch (op) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '/':
      answer = num1 / num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    case '%':
      answer = num1 % num2;
      break;
    case '^':
      answer = num1 ** num2;
      break;
    default:
      break;
  }

  res.render('test', {
    number1: num1,
    number2: num2,
    operator: op,
    mathResult: answer
  });
});

router.post('/compare', function (req, res, next) {
  let num3 = req.body.number3 | 0;
  let num4 = req.body.number4 | 0;
  let result;

  if (num3 > num4) {
    result = `${num3} is the larger`;
  } else {
    result = `${num4} is the larger`;
  }

  res.render('test', {
    number3: num3,
    number4: num4,
    compareResult: result
  });
});
router.post('/substring', function (req, res, next) {
  let tex1 = req.body.text1;
  let num5 = req.body.number5 | 0;
  let num6 = req.body.number6 | 0;
  let subResult;

  subResult = tex1.substring(num5, num6);

  res.render('test', {
    text1: tex1,
    number5: num5,
    number6: num6,
    substringResult: subResult
  });
});
router.post('/string', function (req, res, next) {
  let tex2 = req.body.text2;
  let strResult;
  let wordCount = tex2.split(' ');

  strResult = (`the string length is ${tex2.length} and has ${wordCount.length} words: ${tex2.toUpperCase()}`)

  res.render('test', {
    text2: tex2,
    stringResult: strResult
  });
});
router.post('/arrays', function (req, res, next) {
  let tex4 = req.body.text4;
  let num7 = req.body.number7 | 0;


  let ar = tex4.split(' ');
  let arResult = ar[num7];


  res.render('test', {
    text4: tex4,
    number7: num7,
    arraysResult: arResult
  });
});
router.post('/date', function (req, res, next) {
  let datePar = req.body.datePart;
  let date = new Date;
  let day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  let dateRes;

  switch (datePar) {
    case "year":
      dateRes = date.getFullYear();
      break;
    case "month":
      dateRes = date.getMonth();
      break;
    case "day":
      dateRes = day[date.getDay() - 1];
      break;
    case "hour":
      dateRes = date.getHours();
      break;
    case "minutes":
      dateRes = date.getMinutes();
      break;
    case "seconds":
      dateRes = date.getSeconds();
      break;
    default:
      break;

  }


  res.render('test', {
    datePart: datePar,
    dateResult: dateRes

  });
});
router.post('/temp', function (req, res, next) {
  let bodyTemp = req.body.temp | 0;
  let respond;

  if (bodyTemp < 98 && bodyTemp > 95) {
    respond = ('your are doing fine');
  } else if (bodyTemp >= 99) {
    respond = ('you need to go to the hospital');
  } else if (bodyTemp <= 95) {
    respond = ('get to a warmer place')
  }

  res.render('test', {
    temp: bodyTemp,
    tempResult: respond

  });
});
router.post('/todo', function (req, res, next) {
  let activity1 = req.body.activity;
  let act = req.body.action;
  let len = req.body.time | 0;

  res.render('test', {
    activity: activity1,
    action: act,
    time: len,
 
  });
});

module.exports = router;