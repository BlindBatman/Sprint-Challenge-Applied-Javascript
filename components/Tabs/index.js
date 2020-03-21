// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
let url = "https://lambda-times-backend.herokuapp.com/topics";
let axis = axios.get(url);
let content = document.getElementsByClassName('topics');

axis.then(response =>{
    let dataArray = response.data.topics;
    for (let index = 0; index < dataArray.length; index++) {
        const element = dataArray[index];
        let div = document.createElement("div");
        div.classList.add('tab')
        div.textContent = element;     
        content[0].append(div);
    }
       });