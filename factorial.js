function multiplyValues(){
    var n=1;
    var product = 1;
    while (product <=1e8){
        n++;
        product *= n;
    }
    return n;
}
    console.log(multiplyValues());