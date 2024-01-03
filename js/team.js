const containers= document.querySelector('.teacher')
fetch('https://6554ca3763cafc694fe6f798.mockapi.io/HLV', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(teams => {
   console.log(teams)
   teams.forEach(team => {

     const productItem=document.createElement('div')// <div class='col-lg-4'>
     productItem.classList.add('col-lg-3')
     productItem.classList.add('col-md-6')
     productItem.classList.add('wow')
     productItem.classList.add('fadeInUp')

     productItem.innerHTML=`
     <div class="team-item">
     <div class="team-img">
         <img src=${team.img} alt="Image" class="img">
         <div class="team-social">
             <a href=""><i class="fab fa-twitter"></i></a>
             <a href=""><i class="fab fa-facebook-f"></i></a>
             <a href=""><i class="fab fa-linkedin-in"></i></a>
             <a href=""><i class="fab fa-instagram"></i></a>
         </div>
     </div>
     <div class="team-text">
         <h2>${team.name}</h2>
         <p>${team.job}</p>
     </div>
  </div>
     `
     containers.appendChild(productItem)
   })
 
  // Do something with the list of tasks
}).catch(error => {
  // handle error
})
