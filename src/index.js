const flatcutiesProjectAPI = `http://localhost:3000/characters`;
const imageUrl = document.getElementById(`image-url`);
const animalName = document.getElementById("name");
const voteCount = document.getElementById("vote-count");
const imageElement = document.getElementById("image");

//obtaining list data using fetch
fetch(flatcutiesProjectAPI)
  .then((res) => res.json())
  .then(renderList);

// displays list on the  UI
function renderList(data) {
  // capture #character-bar element
  const characterBar = document.getElementById("character-bar");

  // for each data item, append to #character-bar element
  for (var i = 0; i < data.length; i++) {
    // create span and set it's text (name in data item)
    const span = document.createElement("span");
    span.textContent = data[i].name;

    // add custom attribute to help track ids to use in subsequent fetch requests
    span.setAttribute("data-id", data[i].id);

    // add click listener
    span.addEventListener("click", handleSpanClick);

    // append to #character-bar
    characterBar.append(span);
  }
}

//  handles click  of appended spans in #character-bar element
function handleSpanClick(event) {
  //  elements to update
  const currId = event.target.getAttribute("data-id");
  //fetching data  associated with the selected id
  fetch(`${flatcutiesProjectAPI}/${currId}`)
    .then((res) => res.json())
    .then((data) => {
      //displaying the id data on the UI
      animalName.textContent = data.name;
      imageElement.setAttribute("src", data.image);
      voteCount.textContent = data.votes;
    });
}

let votes;
// declaring the server API
function addImageUrl(event) {
  event.preventDefault();
  const imageUrl = event.target.imageUrl.value;
  renderImageUrl({ content: imageUrl });
  event.target.reset();
}
//document.getElementById("character-form").addEventListener("submit",addImageUrl)

document.getElementById("vote-button").addEventListener("click", () => {
  votes += 1;
  renderVotes();
});
function renderVotes() {
  document.getElementById("vote-count").textContent = `${votes} votes`;
}
function renderImageUrl(imageUrl) {
  const li = document.createElement("li");
  li.textContent = imageUrl.content;
  imageUrl.append(li);
}
function renderImageUrls(imageUrl) {
  imageUrl.innerHTML = "";
  imageUrl.forEach(renderImageUrl);
  //function for rendering comments
}
