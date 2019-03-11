var fs = require("fs");
var faker = require('faker');
// var csvWriter = require('csv-write-stream');
var headers = ['res_name', 'ratings_num', 'rating', 'descript', 'price_min', 'price_max', 'food_type','city', 'lunch_hrs', 'dinner_hrs','dress_code', 'payment_options', 'chef', 'entertainment', 'additional_info', 'website', 'phone_number', 'street_address']

var foods = ['Mexican', 'Italian', 'Korean', 'American', 'Russian', 'Chilean', 'Chinese', 'Japanese', 'Indonesian', 'German']

var dress = ['nude', 'Business Casual', 'Casual', 'Semi-Formal', 'Beach Formal']

var payment = ['Venmo', 'Cash', 'Credit','IOU']



function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getRndFood () {
  return foods[getRndInteger(0, 9)]
}

function getRndPay(){
  return payment[getRndInteger(0,3)]
}

function getRndCode () {
  return dress[getRndInteger(0,4)]
}

var data = () => {
  const res_name = faker.name.findName()
  const ratings_num = getRndInteger(0,5)
  const rating = 5
  const descript = faker.lorem.sentences()
  const price_min = getRndInteger(10,30)
  const price_max = getRndInteger(50,120)
  const food_type = getRndFood()
  const city = faker.address.city()
  const lunch_hrs = getRndInteger(1030,1430)
  const dinner_hrs = getRndInteger(1700,2200)
  const dress_code = getRndCode()
  const payment_options = getRndPay()
  const chef = faker.name.findName()
  const entertainment = faker.lorem.sentence()
  const additional_info = faker.lorem.sentences()
  const website = faker.internet.url()
  const phone_number = faker.phone.phoneNumber()
  const street_address = faker.address.streetAddress()

  return `'${res_name}',${ratings_num},${rating}, '${descript}', ${price_min}, ${price_max}, ${food_type},'${city}', ${lunch_hrs}, ${dinner_hrs}, ${dress_code}, ${payment_options}, '${chef}', '${entertainment}', '${additional_info}', '${website}', ${phone_number}, '${street_address}'\n`


}



const writetenMillion = (dest, data, num) => {


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

writetenMillion('data.csv', data, 10000000)

// const streamData = function() {
//   var writer = csvWriter({ headers: headers})
//   var outputStream = fs.createWriteStream(__dirname + "/test1.csv");
//   writer.pipe(outputStream);

//   for (var i = 0; i < 10; i++) {
//     let listinginfo = [['name', 4, 5, 'not bad', 15,20, 'ba', 'asd', 'asd', 'asd', 'er', 10, 11, 12, 'es', 'asd', 'asdd', 'err', 'err', 'asd', 'ee', 67676, 'asd']]

//     for (let i = 0; i < listinginfo.length; i++) {
//       writer.write(listinginfo[i])
//     }
//   }
//   writer.end()
//   outputStream.on(
//     "finish",
//     function handleFinish() {
//         console.log("It worked");
//     }
//   );
// };

// streamData();