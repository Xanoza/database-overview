

var fs = require("fs");
var faker = require('faker');

var genderize = ['M','F']
var headers = ['id','rest_id', 'username', 'ratings', 'gender']
var id = 1

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var data = () => {
  const rest_id = getRndInteger(1,10000000)
  const username = faker.internet.userName()
  const ratings = getRndInteger(1,5)
  const gender = genderize[getRndInteger(0,1)]

  return `${id++},${rest_id},'${username}',${ratings},'${gender}'\n`
}

const writeRatings = (dest, data, num) => {


  var writer = fs.createWriteStream(dest);
  var header = headers.join(',') + '\n'
  writer.write(header, 'utf8')
  let i = 0;
  write();
  function write() {
    let ok = true;
    do {
      i++;
      if (i === num) {
        // last time!
        writer.write(data(), 'utf8');
        
      } else {
      
        ok = writer.write(data(), 'utf8');
        
      }
    } while (i < num && ok);
    if (i < num) {
    
      writer.once('drain', write);
    }
  }



}

writeRatings('dataRatings.csv', data, 90000000);