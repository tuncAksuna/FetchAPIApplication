document.querySelector('#btnText').addEventListener('click', getText);
document.querySelector('#btnJson').addEventListener('click', getJson);
document.querySelector('#btnApi').addEventListener('click', getWebApi);

function getText() {
    fetch('text.txt')
        .then(data => {
            return data.text();
        })
        .then(textFile => {
            var content = document.getElementById('content');
            var html = ` 
            <div class="card mt-3" style="width:18rem;">
            <div class="card-body">
                <h5 class="card-title">Text Content</h5>
                <h6 class="card-subtitle mb-2 text-muted">W/Fetch API<h6>
                <p class="card-text">${textFile}</p>
            </div>
            </div>
            `;
            content.innerHTML += html;
        })
        .catch(err => {
            console.log(err)
        });
}

function getJson() {
    fetch('json.json')
        .then(data => {
            return data.json();
        })
        .then(jsonFile => {
            jsonFile.forEach(element => {
                var content = document.getElementById('content2');
                var html = `
                <div class="card mt-3">
                    <div class="card-header">
                        Json FILE
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                        <p>${element.title}</p>
                        <p>${element.body}</p>
                        <p>${element.country}</p>
                        <p>${JSON.stringify(element)}</p>
                        <footer class="blockquote-footer">Title , body and country informations</footer>
                        </blockquote>
                    </div>
                </div>
                `;
                content.innerHTML += html;
            });
        })
        .catch(err => {
            console.log(err);
        })
}

function getWebApi() {
    fetch('https://randomuser.me/api/?results=5')
        .then(data => {
            return data.json();
        })
        .then(webApi => {
            webApi.results.forEach(element => {
                let content = document.getElementById('content3');
                var html = `
                <div class="card mt-4" style="width: 18rem;">
                    <img src="${element.picture.medium}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">PERSONAL INFORMATIONS</h5>
                        <p class="card-text">Name :     ${element.name.first}   </p>
                        <p class="card-text">Surname :  ${element.name.last}    </p>
                        <p class="card-text">Gender :   ${element.gender}       </p>
                        <p class="card-text">E-mail :   ${element.email}        </p>
                    </div>
                </div>
                `;
                content.innerHTML = html;
            });
        })
        .catch(err => {
            console.log(err);
        });
}