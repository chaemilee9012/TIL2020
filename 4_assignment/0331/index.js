var xhr = new XMLHttpRequest(); // Create XMLHttpRequest object

xhr.addEventListener('load', function () { // When readystate changes
  var data = JSON.parse(xhr.responseText);
  // console.log(data.item.length);

  var mainDiv = document.querySelector('#main');
  var popUp = document.querySelector('.poptrox-overlay');
  var closeBtn = popUp.querySelector('.closer');
  var indiBtn = popUp.querySelectorAll('.btn');
  var aboutIcon = document.querySelector('#header .icon');
  var fullData, thumData, titData, dNum;
  
  for(let i in data.item) {
    fullData = data.item[i].full;
    thumData = data.item[i].thum;
    titData = data.item[i].title;
    
    mainDiv.innerHTML += `<article class="thumb">
                            <a href="${fullData}" class="image">
                              <img src="${thumData}" alt="" data-num="${i}">
                            </a>
                            <h2>${titData}</h2>
                          </article>`;
  }
  mainDiv.addEventListener('click',function(e) {
      e.preventDefault();
      dNum = e.target.dataset.num;

      changeContents();
      popUp.classList.add('active');      
    });

  closeBtn.addEventListener('click', function() {
    popUp.classList.remove('active');
  });

  indiBtn[0].addEventListener('click', function() {
    dNum--;
    changeContents();
  });

  indiBtn[1].addEventListener('click', function() {
    dNum++;
    changeContents();
  });

  aboutIcon.addEventListener('click', () => {
    document.querySelector('#footer').classList.toggle('active');
  });

  function changeContents() {
    popUp.querySelector('img').src = data.item[dNum].full;
    popUp.querySelector('.caption').textContent = data.item[dNum].title;

    for(var i = 0; i < indiBtn.length; i++) {
      indiBtn[i].style.display = 'block';
    }

    if(dNum == 0) {
      indiBtn[0].style.display = 'none';
    } else if(dNum == data.item.length - 1) {
      indiBtn[1].style.dislay = 'none';
    }
  }
});

xhr.open('GET', 'data.json', true); // Prepare the request
xhr.send(null);