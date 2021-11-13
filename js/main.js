//Constants:

const api_url = 'https://jsonplaceholder.typicode.com/users'

// Cached Element References:

const userID = document.getElementById("user");

// Event Listeners:

// userID.addEventListener('click', function() {
//     displayPosts();
// })

// Functions:

// Function 01: Fetch JSON from API for table.

async function getUsers() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
}

getUsers();

// Function 02: Display posts after user clicks on "User".

// fetch('https://jsonplaceholder.typicode.com/users', {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         // id:'',
//         name:'Leanne Graham'
//     })
// })
//     .then(response => response.json())
//     .then(json => console.log(json))
