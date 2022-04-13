
const menu = () => {
  const div = document.getElementById('ramen-menu')
  
  fetch('http://localhost:3000/ramens')
  .then(resp=>resp.json())
  .then(obj => obj.forEach(arr =>{
    const h2 = document.querySelector('#ramen-detail h2');
    const dImg = document.querySelector('#ramen-detail img');
    const h3 = document.querySelector('#ramen-detail h3');
    const img = document.createElement('img');
    const pRating = document.getElementById('rating-display');
    const pCom = document.getElementById('comment-display');
   
    img.src = arr.image;
    
    img.addEventListener('click',()=>{
      h2.innerText = arr.name;
      h3.innerText = arr.restaurant;
      dImg.src = arr.image;
      pRating.innerText = arr.rating
      pCom.innerText = arr.comment
    })
    
    div.append(img);
  }))
}

const submitForm = () => {
  const form = document.getElementById('new-ramen');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const h2 = document.querySelector('#ramen-detail h2');
    const h3 = document.querySelector('#ramen-detail h3');
    const img = document.createElement('img');
    const pRating = document.getElementById('rating-display');
    const pCom = document.getElementById('comment-display');
    const div = document.getElementById('ramen-menu')
    
    img.src = e.target['new-image'].value

    img.addEventListener('click',()=>{
      h2.innerText = e.target["new-name"].value
      h3.innerText = e.target['new-restaurant'].value
      pRating.innerText = e.target['new-rating'].value
      pCom = e.target['new-comment'].value

    })

    div.append(img)
    form.reset()
  })
}










//function calls
menu()
submitForm()