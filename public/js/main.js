//frontend JS to fetch from API
const tentsList = document.querySelector('#tents');

const getInfoFromBackend = async () => {
    const res = await fetch('http://localhost:3000/tents')
    const data = await res.json()
    return data
}

const addToDom = async() => {
   const items = await getInfoFromBackend();

   items.forEach(item => {
       const div = document.createElement('div')
       div.className = 'tent'
       div.innerHTML = `
       <h3>${item.tentName}</h3>
       <ul> 
        <li>Weight: ${item.tentWeight} lbs</li>
        <li> Sold at ${item.tentRetailer} for $${item.tentPrice}.</li>
        </ul>
       `
       tentsList.appendChild(div)

   }) 
   
}
addToDom()