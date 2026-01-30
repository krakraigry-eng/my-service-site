//  const MY_TOKEN = '8529357526:AAHQLC8IM1sojgUiVCOugpSZTA79T2I4liA'
//         const MY_CHAT_ID = '5004641419'

//         function sendTestMessage() {
//             const message = 'тест з мого сайту'
//             const url = `https://api.telegram.org/bot${MY_TOKEN}/sendMessage?chat_id=${MY_CHAT_ID}&text=${message}`;
//             console.log("📡 Ось який URL створив комп'ютер:");
//             console.log(url);

//             fetch(url)
//                 .then(response=>response.json())
//                 .then(data=>{
//                     if(data.ok){
//                         alert('повідомлення відправлено')
//                     }else {
//                         alert('десь помилка')
//                     }
//                 })
//                 .catch(error => {
//                 alert("⚠️ Проблеми з інтернетом");
//                 });
//         }