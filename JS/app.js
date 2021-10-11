
let zodis = "This is a test!";


function encrypt(text, n){
    if(text == null){
        return null;
    }
    if(n < 0){
        console.log(text);
        return text;
    }   
    for (let i = 0;i < n; i++){
        let temp='';
        let temp2='';
        for (let j = 0; j < text.length; j++) {
            if (j % 2 == 0 || j == 0){
                temp += text.charAt(j);
            } else if ( j % 1 == 0){
                temp2 += text.charAt(j);    
            }
        }
        text = temp2.concat(temp);
    }
    console.log(text);
}

function decrypt(encryptedText, n){
    if(encryptedText == null){
        return null;
    }
    if(n < 0){
        console.log(encryptedText);
        return encryptedText;
    }  
    let newword ='';
    for (let i = 0; i < n; i++) {    
        if (encryptedText.length % 2 == 0){
            end = (encryptedText.slice(encryptedText.length/2));
            start = (encryptedText.slice(0,encryptedText.length/2));
        }else if (encryptedText.length % 1 == 0){
            end = encryptedText.slice(encryptedText.length/2);
            start = (encryptedText.slice(0,encryptedText.length/2));
        }
        newword ='';
        for (let i = 0; i < encryptedText.length; i++) {
            if(end[i] != null){
                newword += end[i];  
            }
            if(start[i] != null){
                newword += start[i];
            }
        }
        encryptedText = newword;
    }
    console.log(encryptedText);
}

encrypt(zodis,0);

decrypt(zodis,0);
