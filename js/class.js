const container= document.querySelector('.big')
fetch('https://6554ca3763cafc694fe6f798.mockapi.io/data', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(classes => {
  // Do something with the list of tasks
  classes.forEach((product) => {
    // tao div them cac thanh phan vao ben trong
    const productItem=document.createElement('div')// <div class='col-lg-4'>
    productItem.classList.add('col-lg-4')
    productItem.classList.add('col-md-6')
    productItem.classList.add('col-sm-12')
    productItem.classList.add('class-item')
    productItem.classList.add('filter-1')
    productItem.classList.add('wow')
    productItem.classList.add('fadeInUp')
    productItem.innerHTML=
    ` <div class="class-wrap">
    <div class="class-img">
        <img src="${product.image}" alt="Image" class="img">
    </div>
    <div class="class-text">
        <div class="class-teacher">
            <img src="img/teacher-1.png" alt="Image">
            <h3>${product.name}</h3>
            <a href="">+</a>
        </div>
        <h2>Pilates Yoga</h2>
        <div class="class-meta">
            <p><i class="far fa-calendar-alt"></i>${product.day}</p>
            <p><i class="far fa-clock"></i>${product.time}</p>
        </div>
    </div>
</div>
    `
    container.appendChild(productItem)
})
}).catch(error => {
  // handle error
})
