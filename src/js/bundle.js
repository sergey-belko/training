'use strict'

var prompt = require('prompt');

function hello() {
    prompt.start();

    //
    // Get two properties from the user: username and email
    //
    prompt.get(['username', 'email'], function (err, result) {
        //
        // Log the results.
        //
        console.log('Command-line input received:');
        console.log('  username: ' + result.username);
        console.log('  email: ' + result.email);
    });
}

function SayBabe() {
    console.log('AAAAAAAAAAAAAAAAA')
}

console.log(prompt)


var a = 10


console.log("Helllo")

hello()

console.log("Helllo")



console.log("Helllo")


console.log("Helllo")
