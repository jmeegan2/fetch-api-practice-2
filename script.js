//learn about promises

function fetchData() {
    fetch("https://reqres.in/api/users")
        .then(response => {
            console.log(response)
            if (!response.ok) {
                throw Error("ERROR")
            }
            return response.json();
        }).then(data => {
            console.log(data.data)        //this is where data is grabbed 
            const html = data.data.map(user => {
                return `
                <div class = "user">
                <p><img src="${user.avatar}" alt="${user.first_name}" /> </p>
                <p>Name: ${user.first_name}</p>
                <p>Email: ${user.email}</p>
                </div>
                `;

            }).join("");
            console.log(html)
            document
            .querySelector('#app')
            .insertAdjacentHTML('afterbegin', html)     //inner html will insert it at the app id

        }).catch(error => {
            console.log(error)
        });
}

fetchData();