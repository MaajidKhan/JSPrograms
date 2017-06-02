function airlineStatus(airway)
{
  this.airway=airway;
  this.announce=function()
  {
    console.log("Status: "+this.airway+" is delayed by 15Min");
  };
  this.announce1=function(input)
  {
    this.input=input;
    console.log("Message: "+this.input);
  };
  this.calfare=function(input)
  {
    this.input=input;
    var tax=0.15;
    var amt=(input*tax)+input;
    console.log("The total fare is:"+amt);
  };
}

var airline1 =new airlineStatus("Etihad Airways");
console.log(airline1.airway);
airline1.announce();
airline1.announce1("We are extremely sorry for delay");
airline1.calfare(15000);

var airline2 =new airlineStatus("Lufthansa Airways");
console.log(airline2.airway);
airline2.announce();
airline2.announce1("We hope you have the safest of journeys with our airlines");
airline1.calfare(20000);