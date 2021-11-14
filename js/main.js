//Constants:
const api_url = 'https://jsonplaceholder.typicode.com/users'
const api_url_post = 'https://jsonplaceholder.typicode.com/posts'
const api_url_post02 = 'https://jsonplaceholder.typicode.com/posts?userId=2'
const api_url_post03 = 'https://jsonplaceholder.typicode.com/posts?userId=3'
const api_url_post04 = 'https://jsonplaceholder.typicode.com/posts?userId=4'
const api_url_post05 = 'https://jsonplaceholder.typicode.com/posts?userId=5'
const api_url_post06 = 'https://jsonplaceholder.typicode.com/posts?userId=6'
const api_url_post07 = 'https://jsonplaceholder.typicode.com/posts?userId=7'
const api_url_post08 = 'https://jsonplaceholder.typicode.com/posts?userId=8'
const api_url_post09 = 'https://jsonplaceholder.typicode.com/posts?userId=9'
const api_url_post10 = 'https://jsonplaceholder.typicode.com/posts?userId=10'

// Functions:

// Function 01: Fetch JSON from API for table and build table.
async function getUsers() {
    // fetch users.
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data)

    // fetch posts 01.
    const responseAlt = await fetch(api_url_post);
    const dataAlt = await responseAlt.json();
    console.log(dataAlt)
    // fetch posts 02.
    const responseAlt2 = await fetch(api_url_post02);
    const dataAlt2 = await responseAlt2.json();
    console.log(dataAlt2)

    buildTable(data);
    // Builds the table of users.
    function buildTable(data) {
        let table = document.getElementById('updatedTable')
    
        for (let i = 0; i < data.length; i++) {
            let row =
                `<tr>
                    <td class='halo' id='${data[i].id}'>${data[i].id}</td>
                    <td class='halo' id='${data[i].name}'>${data[i].name}</td>
                </tr>`
            table.innerHTML += row
        }
    }

    // Cached Element References:
    let userID01 = document.getElementById('Leanne Graham');
    let userID02 = document.getElementById('Ervin Howell');
    let userID03 = document.getElementById('Clementine Bauch');
    let userID04 = document.getElementById('Patricia Lebsack');
    let userID05 = document.getElementById('Chelsey Dietrich');
    let userID06 = document.getElementById('Mrs. Dennis Schulist');
    let userID07 = document.getElementById('Kurtis Weissnat');
    let userID08 = document.getElementById('Nicholas Runolfsdottir V');
    let userID09 = document.getElementById('Glenna Reichert');
    let userID10 = document.getElementById('Clementina DuBuque');

    // Event Listeners:
    
    userID01.addEventListener('click', function() {
        let idx = 1;
        displayPosts(dataAlt, idx);
    });

    userID02.addEventListener('click', function() {
        let idx = 2;
        displayPosts(dataAlt, idx);
    });

    function displayPosts(dataAlt, idx) {
        let name = document.getElementById('posterName')
        let posted = ''
        name.innerHTML = posted
        
        for (let i = 0; i < dataAlt.length; i++) {
            if (dataAlt[i].userId == idx) {
                let posted =
                    `<div class="alert alert-dark" role="alert"><h5>${dataAlt[i].title}</h5>
                    <p>${dataAlt[i].body}</p></div>`
                name.innerHTML += posted
            }
            else if (dataAlt[i].userId == idx) {
                let posted =
                    `<div class="alert alert-dark" role="alert"><h5>${dataAlt[i].title}</h5>
                    <p>${dataAlt[i].body}</p></div>`
                name.innerHTML += posted
            }
        }
    }
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
