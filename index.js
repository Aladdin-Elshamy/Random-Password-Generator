const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const selectButton = document.querySelector("select");
const passLength = document.querySelector(".pass-length");
const passLengthDiv = document.querySelectorAll(".label-field")[1]; 
const passGenerator = document.querySelector(".pass-generator");
const passOne = document.querySelectorAll(".pass-buttons button")[0];
const passTwo = document.querySelectorAll(".pass-buttons button")[1];
const errorMessage = document.createElement("p");
errorMessage.className = "error";
let newCharacters = characters;
let lengthGlobal = 0;
// Select Button
selectButton.addEventListener("change",function(){
    if(selectButton.value === "capital-letters"){
        newCharacters = [];
        for(let i = characters.indexOf("Z") + 1; i < characters.length ;i++){
            newCharacters.push(characters[i]);
        }
    }
    else if(selectButton.value === "small-letters"){
        newCharacters = [];
        for(let i = characters.indexOf("A"); i < characters.length ;i++){
            if(i<characters.indexOf("a") || i> characters.indexOf("z"))
                newCharacters.push(characters[i]);
        }
    }
    else if(selectButton.value === "numbers"){
        newCharacters = [];
        for(let i = characters.indexOf("A") + 1; i < characters.length ;i++){
            if(i<characters.indexOf("0") || i> characters.indexOf("9"))
                newCharacters.push(characters[i]);
        }
    }
    else if(selectButton.value === "special-characters"){
        newCharacters = [];
        for(let i = characters.indexOf("A") + 1; i < characters.indexOf("~");i++){
            newCharacters.push(characters[i]);
        }
    }
});
// Password
function length(){
    let length = Math.floor(Math.random() * (20 - 8 + 1)) + 8;
    lengthGlobal = length;
}
function password(len){
    let pass='';
    for(let i = 0; i< len; i++){
        pass+= newCharacters[Math.floor(Math.random() * newCharacters.length)]
    }
    return pass;
}
passLength.addEventListener("blur",function(){

})
passGenerator.addEventListener("click",function(){
    let pass1 ='';
    let pass2 = '';
    errorMessage.textContent = '';
    if(passLength.value){
        if(passLength.value<8){
            errorMessage.textContent = "Minimum password length is 8";
            lengthGlobal = 0;
            passLengthDiv.appendChild(errorMessage);
        }
        else{
            lengthGlobal = passLength.value;
        }
    }
    else{
        length();
    }
    pass1 = password(lengthGlobal);
    pass2 = password(lengthGlobal);
    passOne.textContent = pass1;
    passTwo.textContent = pass2;
})
passOne.addEventListener("mouseover",function(){
    if(passOne.textContent)
        passOne.style.cursor="pointer"
});
passTwo.addEventListener("mouseover",function(){
    if(passTwo.textContent)
        passTwo.style.cursor="pointer"
});
passOne.addEventListener("click",function(){
    if(passOne.textContent == 'Copied!')
        return 
    navigator.clipboard.writeText(passOne.textContent);
    const tempPassOne = passOne.textContent;
    if(passOne.textContent){
        passOne.textContent = ''
        let span = document.createElement("span");
        span.textContent="Copied!"
        span.className="copied"
        passOne.appendChild(span);
        setTimeout(function(){
            let span = document.querySelector(".copied");
            span.remove;
            passOne.textContent = tempPassOne;
        },500)
    }
})
passTwo.addEventListener("click",function(){
    if(passTwo.textContent == 'Copied!')
        return 
    navigator.clipboard.writeText(passTwo.textContent);
    const tempPassTwo = passTwo.textContent;
    if(passTwo.textContent){

        passTwo.textContent = ''
        let span = document.createElement("span");
        span.textContent="Copied!"
        span.className="copied"
        passTwo.appendChild(span);
        setTimeout(function(){
            let span = document.querySelector(".copied");
            span.remove;
            passTwo.textContent = tempPassTwo;
        },500)
    }
})
