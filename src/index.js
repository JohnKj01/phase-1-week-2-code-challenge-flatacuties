const flatcutiesProjectAPI = `http://localhost:3000/images/1`
const imageUrl = document.getElementById(`image-url`)
const animalName = document.getElementById("name")
const voteCount = document.getElementById("vote-count")
const Image = document.getElementById("image")

let votes;
// declaring the server API
function addImageUrl(event){
    event.preventDefault();
    const imageUrl=event.target.imageUrl.value;
    renderImageUrl({content:ImageUrl});
    event.target.reset();
}
document.getElementById("character-form").addEventListener("submit",addImageUrl)
fetch(flatgramProjectAPI)
    .then((res) => res.json())
    .then(renderGram);
//obtaining data using fetch and converting json to image
function renderGram(data) {
    gramData = data;
    votes=data.votes;
    db.json = data.image;
    animalName.textContent = data.name;
    renderVotes();
    //associating DOM content with database
    renderImageUrl(data.imageUrl);
}
document.getElementById("vote-button").addEventListener("click",() =>{
    votes += 1;
    renderVotes();
});
function renderVotes() {
    document.getElementById("vote-count").textContent=`${votes} votes`;
}
function renderImageUrl(imageUrl) {
    const li = document.createElement("li")
    li.textContent = imageUrl.content
    imageUrlList.append(li);
}
function renderImageUrls(imageUrl) {
    imageUrlList.innerHTML = "";
    imageUrls.forEach(renderImageUrl);
    //function for rendering comments
}

