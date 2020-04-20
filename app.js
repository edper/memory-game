document.addEventListener('DOMContentLoaded',()=> {
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
  ]

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  var cardsWon = []

  resultDisplay.textContent = cardsWon.length

  function createBoard() {
  
    for(let i=0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src','images/blank.png')
      card.setAttribute('data-id',i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
  }
  randomizeCards()

  }

  function randomizeCards() {
    cardArray.sort(()=> 0.5 - Math.random())
  }

  function redrawBoard() {
    var cards = document.querySelectorAll('img')
    for(let i=0; i < cards.length; i++) {
      cards[i].setAttribute('src','images/blank.png')
    }
    randomizeCards()
  }

  function checkForMatch() {

    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0]==cardsChosen[1]) {
      alert('You found a match!!!')
      cards[optionOneId].setAttribute('src','images/white.png')
      cards[optionTwoId].setAttribute('src','images/white.png')
      cardsWon.push(cardsChosen)
    }
    else {
      cards[optionOneId].setAttribute('src','images/blank.png')
      cards[optionTwoId].setAttribute('src','images/blank.png')
      alert('Sorry try again!')
    }
    cardsChosen=[]
    cardsChosenId=[]
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length===cardArray.length/2) {
        resultDisplay.textContent ='Congratulations! You found them all.'
        redrawBoard()
        cardsWon = []
        setTimeout(()=>{ resultDisplay.textContent = '' },1500)
    }

  }

  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if (cardsChosenId.length==2) {      
       if (cardsChosenId[0]===cardsChosenId[1]) {
          alert("You are choosing the same card. Choose another one!")
          cardsChosenId.pop()
          cardsChosen.pop()
          return
       }
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()

})
