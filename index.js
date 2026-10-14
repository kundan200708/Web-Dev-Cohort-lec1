function add(a,b){
    return a+b
}
function sub(a,b){
    if(!(a>b)) throw new Error('Num a must be greater than b')
    return a-b
}
function multiply(a,b){
return(a*b)
}

add(40,50)
add(454,51)

sub(10,3)

multiply(42,54)
