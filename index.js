function add(a,b){
    return a+b
}
function sub(a,b){
    if(!(a>b)) throw new Error('Num a must be greater than b')
    return a-b
}
function multiply(a,b){

    if(a<0||b<0) throw new Error('No negative value allowed') 
return(a*b)
}

add(40,50)
add(454,51)

sub(10,3)

multiply(42,54)
multiply(4545,5656)
multiply(415,8)
