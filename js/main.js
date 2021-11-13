//Constants:

const api_url = 'https://jsonplaceholder.typicode.com/users'

// Cached Element References:

const userID = document.getElementById("user");

// Event Listeners:

// userID.addEventListener('click', function() {
//     displayPosts();
// })

// Functions:

// Function 01: Fetch JSON from API for table and build table.

async function getUsers() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data)

    buildTable(data);

    function buildTable(data) {
        let table = document.getElementById('updatedTable')
    
        for (let i = 0; i < data.length; i++) {
            let row =
                `<tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].name}</td>
                </tr>`
                table.innerHTML += row
        }
    }

    // document.getElementById('userID').textContent = id;
    // document.getElementById('userName').textContent = name;


    
    // console.log(data.id);
    // console.log(data.name);
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
