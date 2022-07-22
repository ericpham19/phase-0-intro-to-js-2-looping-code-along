// Code your solutions in this file


function writeCards(name , fun ) {
    let birthdayReply = [];
    for ( let i = 0; i < name.length; i++) {
        //birthdayReply =(`Thank you, ${name[i]}, for the wonderful ${fun} gift!`);

        let a = (`Thank you, ${name[i]}, for the wonderful ${fun} gift!`)
        birthdayReply.push(a);
        
    }
  
    return birthdayReply
}


function countDown() {
    let countDown= 10;
    for (countDown = 10 ; countDown >= 0 ; countDown--){
        console.log(countDown);
    }
}

