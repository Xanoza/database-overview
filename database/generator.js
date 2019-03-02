var fs = require("fs");
var faker = require('faker');
// var csvWriter = require('csv-write-stream');
var headers = ['res_name', 'ratings_num', 'rating', 'descript', 'price_min', 'price_max', 'food_type', 'tag_one', 'tag_two', 'tag_three', 'neighborhood', 'brunch_hrs', 'lunch_hrs', 'dinner_hrs', 'dining_style', 'dress_code', 'payment_options', 'chef', 'entertainment', 'additional_info', 'website', 'phone_number', 'street_address']

// `res_name,ratings_num,rating,descript,price_min,price_max,food_type,tag_one,tag_two,tag_three,neighborhood,brunch_hrs,lunch_hrs,dinner_hrs,dining_style,dress_code,payment_options,chef,entertainment,additional_info,website,phone_number,street_address`

const writetenMillion = (dest, data, n) => {


  var writer = fs.createWriteStream(dest);
  var header = headers.join(',') + '\n'
  writer.write(header, 'utf8')
  let i = n;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      if (i === 0) {
        // last time!
        writer.write(data, 'utf8');
      } else {
      
        ok = writer.write(data, 'utf8');
      }
    } while (i > 0 && ok);
    if (i > 0) {
    
      writer.once('drain', write);
    }
  }

  writer.end()
  writer.on(
    "finish",
    ()=> {
        console.log("It worked");
    }
  );

}

writetenMillion('./test1.csv', `'name', 4, 5, 'not bad', 15,20, 'ba', 'asd', 'asd', 'asd', 'er', 10, 11, 12, 'es', 'asd', 'asdd', 'err', 'err', 'asd', 'ee', 67676, 'asd'\n`, 10)

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