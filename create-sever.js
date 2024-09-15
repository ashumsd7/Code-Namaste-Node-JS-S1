const http= require('http')
// const http= require('node:http')

// sever is an https and now can listen the requests
const sever= http.createServer(function(req,res){
  //req and res are the object you get 
  // .end to use to send the response
console.log("req.url ==='/seed-a-plant'",req.url ==='/seed-a-plant');
  if(req.url ==='/seed-a-plant'){
    res.end('🌱 Plant Seeded, Wohoo  👏')
    return
  }
  res.end('You are getting this from heyashu.in')
})

// listen on post 7777
sever.listen(7777)