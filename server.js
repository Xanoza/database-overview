const express = require('express');
const app = express();
const port = 3003;
const path = require('path');
// var db = mongoose.connection;
const bodyParser = require('body-parser');
 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../client/dist")))
// 

app.get('/', (req,res)=>{
  res.status(200).send('hi')
})


// Post an overview listing
// app.post('/overview', (req, res) => {
//   db.postOne(req.body, (err) =>{
//       if (err) {
//           res.status(400).send(err)
//       }
//       res.status(200).send(req.body)
//   })
// });


// // Get a specific overview listing
// app.get('/overview/:listingId', (req,res) =>{
//   db.returnListing(Number(req.params.listingId), function(err, data) {
//     if (err) {
//       throw (err);
//     } else {
//       res.send(data);
//     }
//   });
//   }
// );

// // Update a listing 
// app.put('/overview/:listingId', (req, res) => {
//   db.updateOne(req.body,Number(req.params.listingId), (err) =>{
//       if (err) {
//           res.status(400).send(err)
//       }
//       res.status(200).send(req.body)
//   })
// });

// // Delete a listing 
// app.delete('/overview/:listingId', (req, res) => {
//   db.deleteOne(Number(req.params.listingId), (err) =>{
//       if (err) {
//           res.status(400).send(err)
//       }
//       res.status(200)
//   })
// })
// app.use('/:listingId', express.static(path.join(__dirname, '../public')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
