
// let timer
// function startTimer() {
//   timer = setInterval(function(){ incrementCounter() }, 1000
// }

// on page load {startTimer()}

// inside your 'pause' function
// clearInterval(timer)

// inside 'resume' function
// startTimer()



let myVar = setInterval(function(){ incrementCounter() }, 1000);
let counter = 0
let paused = false

document.getElementById('+').addEventListener('click', incrementCounter)
document.getElementById('-').addEventListener('click', decrementCounter)
document.getElementById('<3').addEventListener('click', incrementLikes)
document.getElementById('pause').addEventListener('click', disableButtonsAndPauseCounter)
document.getElementById('submit').addEventListener('click',
addComment)


function decrementCounter() {
  //console.log('hey')
  if (paused) {
  } else {
  --counter
    document.getElementById("counter").innerHTML = counter;
  }
}

function incrementCounter() {
  //console.log('hey')
  if (paused) {
  } else {
    ++counter
    document.getElementById("counter").innerHTML = counter;
  }
}

let likesObject = {}

function incrementLikes () {
  let currentNumber = counter;
  if (likesObject[currentNumber]) {
    likesObject[currentNumber] += 1
  } else {
    likesObject[currentNumber] = 1
  }
  displayLikes();
}


function displayLikes () {
  let ul = document.getElementById('likes')
  ul.innerHTML = ''
    for (let key in likesObject) {
      if (likesObject.hasOwnProperty(key)) {
        let li = document.createElement('li')
        li.appendChild(document.createTextNode(`${key} has this many likes: ${likesObject[key]}`))
        ul.appendChild(li)
      }
    }
}

function disableButtonsAndPauseCounter() {
  paused = !paused
  if (paused) {
    document.getElementById('+').disabled = true;
    document.getElementById('-').disabled = true;
    document.getElementById('<3').disabled = true;
    document.getElementById('submit').disabled = true;
    document.getElementById('pause').innerHTML = 'resume';
  } else {
    document.getElementById('+').disabled = false;
    document.getElementById('-').disabled = false;
    document.getElementById('<3').disabled = false;
    document.getElementById('submit').disabled = false;
    document.getElementById('pause').innerHTML = 'pause';
  }
}

function addComment (event) {
  event.preventDefault()
  let p = document.createElement('p')
  let list = document.getElementById('list')
  let comment = document.getElementById('comment').value
  p.appendChild(document.createTextNode(comment))
  list.appendChild(p)
  document.getElementById('comment').value = ''
}
