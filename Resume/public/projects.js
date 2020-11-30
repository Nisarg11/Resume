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

const getRepos = function()  {
    return fetch('https://api.github.com/users/Nisarg11/repos').then((response) => {
        if (response.status === 200) {
            
            return response.json();
        } else {
            throw new Error('Unable to fetch data')
        }
    }).then(function(data){
        
        return data
    })
}


getRepos().then(function(data)  {
   
    const table = document.getElementById('project');
    var tableList  =  document.createElement('li')
    data.forEach(function(element){
        var li = document.createElement('a');
        li.setAttribute("href",element.html_url)
        li.innerHTML = element.name;
        tableList.appendChild(li);
    });
    table.appendChild(tableList);
}).catch(function(err) {
    console.log(`Error: ${err}`)
})



