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
       <p> Tent is ${item.tentWeight} lbs and sold at ${item.tentRetailer} for $${item.tentPrice}.</p>
       `
       tentsList.appendChild(div)

   }) 
   
}
addToDom()