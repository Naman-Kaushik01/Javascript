let todo=[];
let req=prompt("Please Enter Your request");

while(true){
    if(req=="quit"){
        console.log("quitting app");
        break;
    }

    if(req=="list"){
        for(task of todo){
            console.log(task);
        }
    }
    else if(req=="add"){
        let task=prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("task added");
        console.log("------------");
    }
    req=prompt("Please Enter Your request");
     if(req=="delete"){

        let idx=prompt("Please enter the task index.");

        if(todo.length<0){
            console.log("Already empty");
        }
        
        else{
            todo.splice(idx,1);
        }
        console.log("Task deleted");
    }
}
