// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
let arts = "https://lambda-times-backend.herokuapp.com/articles";
let ax = axios.get(arts);
let body = document.getElementsByClassName('cards-container');

function article(article){
    console.log('hit 1')
    let temp = Object.values(article);
    console.log(temp)
   
    temp.map(element => {
       
        for (let j = 0; j < element.length; j++) {
            let card = document.createElement('div');
            card.classList.add('card');
            
            let headline = document.createElement('div');
            headline.classList.add('headline');
            headline.textContent = element[j].headline;
            
            let author = document.createElement('div');
            author.classList.add('author');
            let imgContainer = document.createElement('div');
            imgContainer.classList.add('img-container');
            let img = document.createElement('img')
            img.setAttribute('src',element[j].authorPhoto)
            imgContainer.append(img)
            let span = document.createElement('span');
            span.textContent="By " + element[j].authorName;
            author.append(imgContainer,span);
            
            console.log(card)
            card.append(headline,author);
            body[0].append(card);
        }
        
      
    })
       
    
    console.log('hit 3')
    return card;
}


ax.then(response =>{
    article(response.data.articles);
});


