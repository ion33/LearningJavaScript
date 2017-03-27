function TestWhile(scoops){

    while(scoops>0)
    {
        document.write("another scoop!<br>");
        scoops=scoops-1;
    }
    document.write("Life without ice-cream is not the same");
}
TestWhile(4);