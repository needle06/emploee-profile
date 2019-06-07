let inputs = document.querySelectorAll('input');
let form = document.querySelector('form');
let list = document.querySelector('.list');



function render() {
    form.style.display = 'none'; 
    list.innerHTML = '';
    let ol = document.createElement('ol');
    list.appendChild(ol);
    ol.id = 'profile';
    let values = Array.from(inputs).map((el) => {
      return el.value.trim();
    })
    values.pop();
    values.forEach(el => {
      let li = document.createElement('li');
      li.innerHTML = el;
      li.style.color = 'navy';
      li.style.padding = '15px';
      ol.appendChild(li);
    })
    let photo = document.getElementById('photo').files[0];
    let promise = loadPhoto(photo);
    promise.then (img => {
        ol.lastChild.innerHTML ="";
        ol.lastChild.appendChild(img);
      }, () => {});

    let download = document.createElement('button');
    download.innerText = 'Download';
    download.classList.add('download')
    list.appendChild(download);
    download.addEventListener('click', () => {
      let json = getData(values);
      console.log(json);
    })
    

}

function loadPhoto (photo) {
  let promise = new Promise ((resolve,reject) => {
    try {
      let reader = new FileReader();
      reader.readAsDataURL(photo);
      reader.addEventListener('load', e => {
        let image = new Image();
        image.src = e.target.result;
        image.addEventListener('load', () => {
          let img = document.createElement('img')
          img.src = image.src;
          img.style.width = '500px';
          resolve(img)
        })
      })
    } catch (error) {
      reject(error);
    }
  })
  return promise;
}


form.addEventListener('submit', (e) => { 
  e.preventDefault();
  render();
  form.reset();
})

function getData(values) {
  let info = {
    firstName: values[0],
    lastName: values[1],
    patronym: values[2],
    univercity: values[3],
    facultet: values[4],
    specialization: values[5],
    graduateYear: values[6],
    phone: values[7],
    email: values[8],
    otherContacts: values[9],
    photo: values[10],
  }
  return JSON.stringify(info);
}
