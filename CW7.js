function findNb(m) {
    let result = 0;

    for( let i = 0; ;  ){
        i++
        result = result + (Math.pow(i, 3));
        if(result === m){
            return i;
        }else if(result > m) {
            return -1;
        }
        

    }

    
}