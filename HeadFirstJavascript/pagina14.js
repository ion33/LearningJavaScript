function jokeTest() {
    var joke = "Javascript walked into a bar...";
    var toldJoke = "false";
    var punchline = "Better watch out for those semi-colons";
    var entage = 20;
    var result;

    if (toldJoke == true) {
        alert(punchline);
    }
    else
    { alert(joke); }
}

function chooseMovie(){
    var zipCode=98104;
    var joesFavoriteMovie="Forbidden Plabet";
    var movieTicket=9;

    if(movieTicket>=9)
    {alert("Too much!");}
    else
    {alert("We're going to see"+joesFavoriteMovie);}
    
}
jokeTest();
function PriceDiscount(discount){
    var price=200;
    var UoM="roni";
    var total=price-(price*(discount/100));
    alert(total + " "+ UoM.substr(0,2));
    

}
PriceDiscount(10);
