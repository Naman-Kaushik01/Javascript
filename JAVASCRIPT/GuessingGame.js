const max=prompt("Enter the max number");
console.log(max);

const random =Math.floor(Math.random()*max)+1;
console.log(random);

let guess=prompt("Guess the number");
while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }else{
        if(guess==random){
            console.log("You are right! Congrats!!");
            break;
        }
        else if(guess<random){
            guess=prompt("Hint :Your guess was small.Please enter larger no.")
        }

        else{
            guess=prompt("Hint :Your Guess was large");
        }

    }
}
