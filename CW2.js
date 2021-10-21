function likes(names) {
    let frases;
    
    for(let i = 0; i < names.length; i++){
        if(names.length === 1){
            return frases = names[i] + " likes this";
        }else if(names.length === 2){
            return frases = names[i] + " and " + names[i+1] + " like this";
        }else if(names.length === 3){
            return frases = names[i] + ", " + names[i+1] + " and " + names[i+2] + " like this";
        }else if(names.length > 3){
            return frases = names[i] + ", " + names[i+1] + " and " + (names.length - 2) + " others like this";
        }
    }
    return frases = " no one likes this";
}
likes(["vanya", "maks", "roma", "kostya", "misha", "Anya"]);

