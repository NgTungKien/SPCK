const urlInput= document.getElementById('url')
const textInput= document.getElementById('text')
const dateInput= document.getElementById('date')
const buttonInput= document.getElementById('loginButton')
const timeInput=document.getElementById('time')
buttonInput.addEventListener('click',
()=> {
  const image=urlInput.value 
  const name=textInput.value 
  const day=dateInput.value
  const time=timeInput.value 
  const sanpham={
    image: image,
    name:name,
    day: day,
    time: time
  }
  
  fetch('https://6554ca3763cafc694fe6f798.mockapi.io/data', {
    method: 'POST',
    headers: {'content-type':'application/json'},
    // Send your data in the request body as JSON
    body: JSON.stringify(sanpham)
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then(task => {
    // do something with the new task
    console.log(task)
  }).catch(error => {
    // handle error
  })



})