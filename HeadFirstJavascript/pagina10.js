function caffe() {

var persoana={age:11, name:"Joe", surname:"Michaels"};
var persoana2=persoana;
persoana2.name="Narcis";
persoana.surname=persoana2.name;
if(persoana2.age>14)
{
    alert("Sorry this is a page for kids!");
}
else
{
    alert("Welcome " + persoana.surname +" "+ persoana.name +"!");
    alert("Welcome " + persoana2.surname +" "+ persoana2.name +"!");
}
}
caffe();
