var ticket =2;

async function firstPersonBooked(){
 setTimeout(() => {
    if (ticket<=0) {
        console.log("No tickets avilable for A");
    }else{
        ticket = ticket-2;
        console.log(ticket);
       
    }
 }, 2000);   

}

async function secondPersonBooked(){
    setTimeout(() => {
        if (ticket<=0) {
            console.log("No tickets avilable for B");
        }else{
            ticket = ticket-2;
            console.log(ticket);
           
        }
     }, 3000);  

}

firstPersonBooked();
secondPersonBooked();
