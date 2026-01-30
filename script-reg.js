const MY_TOKEN = '8529357526:AAHQLC8IM1sojgUiVCOugpSZTA79T2I4liA'
const MY_CHAT_ID = '5004641419'

// function sendTestMessage() {
//     const message = 'тест з мого сайту'
//     const url = `https://api.telegram.org/bot${MY_TOKEN}/sendMessage?chat_id=${MY_CHAT_ID}&text=${message}`;
//     console.log("📡 Ось який URL створив комп'ютер:");
//     console.log(url);

//     fetch(url)
//         .then(response=>response.json())
//         .then(data=>{
//             if(data.ok){
//                 alert('повідомлення відправлено')
//             }else {
//                 alert('десь помилка')
//             }
//         })
//         .catch(error => {
//         alert("⚠️ Проблеми з інтернетом");
//         });
// }



let submitButton=document.getElementById('submitBtn')
function submitForm () {
    window.alert('замовлення відправлено. дякую')

    let klientName=document.getElementById('inputName')
    let valueName=klientName.value

   
    let inputEmail=document.getElementById('inputEmail')
    let valueEmail=inputEmail.value

    

    let inputMessge=document.getElementById('inputMessge')
    let valueMessage=inputMessge.value

    


        const telegramMessage = `📥 Нова заявка!%0A
    👤 Ім'я: ${valueName}%0A
    📧 Email: ${valueEmail}%0A
    📝 Повідомлення: ${valueMessage}`;
    



        const message = 'тест з мого сайту'
    const url = `https://api.telegram.org/bot${MY_TOKEN}/sendMessage?chat_id=${MY_CHAT_ID}&text=${telegramMessage}`;
    console.log("📡 Ось який URL створив комп'ютер:");
    console.log(url);

    fetch(url)
        .then(response=>response.json())
        .then(data=>{
            if(data.ok){
                alert('заявку надіслано')
            }else {
                alert('десь помилка')
            }
        })
        .catch(error => {
        alert("⚠️ Проблеми з інтернетом");
        });

        window.location.href='verstka.html'

}


submitButton.addEventListener('click', submitForm)

let klientName=document.getElementById('inputName')
let valueName=klientName.valueName

if (valueName.lenght>2) {
    console.log(valueName+' я запамятаю:)')
}

