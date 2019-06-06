let inputs = document.querySelectorAll('input');
let form = document.querySelector('form');
let list = document.querySelector('.list');



function render() {
  form.style.display = 'none'; 
  list.innerHTML = '';
  let ol = document.createElement('ol');
  list.appendChild(ol);
  // ol.style.width = '500px';
  // ol.style.marginLeft = '100px';
  // ol.style.border = '1px solid lightblue'
  // ol.style.backgroundColor = '#deeeef';
  ol.id = 'profile';
  let values = Array.from(inputs).map((el) => {
    return el.value.trim();
  })
  values.pop();
  values.forEach(el => {
    let li = document.createElement('li');
    li.innerHTML = el;
    li.style.color = 'navy';
    li.style.padding = '5px';
    ol.appendChild(li);
  })
  let photo = document.getElementById('photo').files[0];
  let img = document.createElement('img');
  img.file = photo;
  ol.appendChild(img);
  console.log(photo)
}

form.addEventListener('submit', (e) => {
  
  e.preventDefault();
  render();
  form.reset();
})