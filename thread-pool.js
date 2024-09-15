const fs= require('fs')
const crypto= require('crypto')
crypto.pbkdf2('password', 'salt', 5000000, 50, "sha512", function(err, key){
  console.log("1: CRYPTO PRIVATE KEY DONE");
} )

crypto.pbkdf2('password', 'salt', 5000000, 50, "sha512", function(err, key){
  console.log("2: CRYPTO PRIVATE KEY DONE");
} )
crypto.pbkdf2('password', 'salt', 5000000, 50, "sha512", function(err, key){
  console.log("3: CRYPTO PRIVATE KEY DONE");
} )

crypto.pbkdf2('password', 'salt', 5000000, 50, "sha512", function(err, key){
  console.log("4: CRYPTO PRIVATE KEY DONE");
} )
crypto.pbkdf2('password', 'salt', 5000000, 50, "sha512", function(err, key){
  console.log("5: CRYPTO PRIVATE KEY DONE");
} )
