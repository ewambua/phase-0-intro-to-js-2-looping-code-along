// Code your solutions in this file
const people = ["Guadalupe", "Ollie", "Aki"]

function writeCards(people, eventName){
    let thankYouMesseges = []
    for(let i = 0; i <  people.length; i++){
        thankYouMesseges.push(`Thank you, ${people[i]}, for the wonderful ${eventName} gift!`);
    }
    return  thankYouMesseges;
}

function countDown(number){
    let num = number
    while(num >= 0){
        console.log(num--)
    }
}


