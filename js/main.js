//Constants:

const api_url = 'https://jsonplaceholder.typicode.com/users'
const api_url_post = 'https://jsonplaceholder.typicode.com/posts?userId=1'

// Functions:

// Function 01: Fetch JSON from API for table and build table.

async function getUsers() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data)

    const responseAlt = await fetch(api_url_post);
    const dataAlt = await responseAlt.json();
    console.log(dataAlt)

    buildTable(data);

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
        displayPosts(dataAlt);
    });

    function displayPosts(dataAlt) {
        let name = document.getElementById('posterName')

        for (let i = 0; i < dataAlt.length; i++) {
            let goku = ''
            name.innerHTML = goku
        }
        
        for (let i = 0; i < dataAlt.length; i++) {
            let goku =
                `<div class="alert alert-dark" role="alert"><h5>${dataAlt[i].title}</h5>
                <p>${dataAlt[i].body}</p></div>`
            name.innerHTML += goku
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
