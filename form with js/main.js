let userName;
let userSername;
let userAge;
let userEmail;
let userPhone;


document.getElementById('myButton').onclick = function(){

    userName = document.getElementById('myName').value;

    userSername = document.getElementById('myLast').value;

    userAge = Number(document.getElementById('myAge').value);

    userEmail = document.getElementById('myEmail').value;

    userPhone = Number(document.getElementById('myPhone').value);

    
    console.log('მომხმარებლის სახელი: '+ userName)
    console.log('მომხმარებლის გვარ: '+ userSername)
    console.log('მომხმარებლის ასაკი: '+ userAge)
    console.log('მომხმარებლის მეილი: '+ userEmail)
    console.log('მომხმარებლის მობილურის ნომერი: '+ userPhone)

}
