function domainName(url){

   
     let arr = url.split(".");
     console.log(arr);
     for( let i = 0; i < arr.length; i++){
         if(arr[i].startsWith("htt") && arr[i].endsWith("ww")){
             return arr[i+1];
         }else if(arr[i].startsWith("htt")){
             return arr[0].slice(arr[0].indexOf("/") + 2);
         }else if(arr[i].startsWith("ww")){
             return arr[i+1];
         }
            
         
     }
     return arr[0];

}
domainName("http://google.co.jp");
domainName("http://www.codewars.com/kata/ ");
domainName("http://github.com/carbonfive/raygun"); 
domainName("https://youtube.com");
domainName("www.xakep.ru");
domainName("http://www.zombie-bites.com");

// Выедлить доменное имя из url адреса

