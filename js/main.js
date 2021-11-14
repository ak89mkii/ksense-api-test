//Constants:
const api_url = 'https://jsonplaceholder.typicode.com/users'
const api_url_post = 'https://jsonplaceholder.typicode.com/posts'

// Functions:

// Function 01: Fetch JSON from API for table and build table.
async function getUsers() {
    // fetch users.
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data)

    // fetch posts userId 01 to 10.
    const responseAlt = await fetch(api_url_post);
    const dataAlt = await responseAlt.json();
    console.log(dataAlt)

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

    userID03.addEventListener('click', function() {
        let idx = 3;
        displayPosts(dataAlt, idx);
    });

    userID04.addEventListener('click', function() {
        let idx = 4;
        displayPosts(dataAlt, idx);
    });
    
    userID05.addEventListener('click', function() {
        let idx = 5;
        displayPosts(dataAlt, idx);
    });

    userID06.addEventListener('click', function() {
        let idx = 6;
        displayPosts(dataAlt, idx);
    });

    userID07.addEventListener('click', function() {
        let idx = 7;
        displayPosts(dataAlt, idx);
    });
7
    userID08.addEventListener('click', function() {
        let idx = 8;
        displayPosts(dataAlt, idx);
    });

    userID09.addEventListener('click', function() {
        let idx = 9;
        displayPosts(dataAlt, idx);
    });

    userID10.addEventListener('click', function() {
        let idx = 10;
        displayPosts(dataAlt, idx);
    });

    // Function 02: Display posts after user clicks on name.
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
        }
    }
}

getUsers();

