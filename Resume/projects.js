// const getCountry = (countryCode) => {
//     return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to fetch data')
//         }
//     }).then((data) => {
//         return data.find((country) => country.alpha2Code === countryCode)
//     })
// }


// getCountry('US').then((country) => {
//     console.log(country.name)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

const getRepos = () => {
    return fetch('https://api.github.com/users/Nisarg11/repos').then((response) => {
        if (response.status === 200) {
            
            return response.json();
        } else {
            throw new Error('Unable to fetch data')
        }
    }).then((data) => {
        
        return data
    })
}


getRepos().then((data) => {
   
    const table = document.getElementById('project');
    var tableList  =  document.createElement('ul')
    data.forEach(element => {
        var li = document.createElement('li');
        li.innerHTML = element.name;
        tableList.appendChild(li);
    });
    table.appendChild(tableList);
}).catch((err) => {
    console.log(`Error: ${err}`)
})



const getUrl = () => {
    return fetch('https://api.github.com/users/Nisarg11/repos').then((response) => {
        if (response.status === 200) {
            
            return response.json();
        } else {
            throw new Error('Unable to fetch data')
        }
    }).then((data) => {
        
        return data
    })
}


getUrl().then((data) => {
   
    const table = document.getElementById('project');
    var tableList  =  document.createElement('ul')
    data.forEach(element => {
        var li = document.createElement('li');
        li.innerHTML = element.owner.repos_url;
        tableList.appendChild(li);
    });
    table.appendChild(tableList);
}).catch((err) => {
    console.log(`Error: ${err}`)
})