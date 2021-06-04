const dotenv = require('dotenv').config()
const {Client} = require('@notionhq/client')

const notion = new Client({
    auth: process.env.NOTION_TOKEN
})

// Notion's example
const listUsers = async () => {
    const listUsersResponse = await notion.users.list()
};

//Grab all the lists of tent options plan
//PATH `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}`)
  
const databaseId = process.env.NOTION_DATABASE_ID;

const retrieveCampingList =  async () => {
    const allCampLists = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,  
    }) 
    console.log(allCampLists)
};


const getTentInfo = async () => {
    const payload = {
        path: `databases/${databaseId}/query`,
        method: 'POST'
    }
    const {results} = await notion.request(payload);
    
    //Option 1 - using forEach
    //const options = results.forEach(result => {
    //    const tentPrice = result.properties.Price.number
    //    const tentWeight = result.properties['Weight (lbs)'].number
    //    const tentRetailer = result.properties.Retailer.rich_text[0].plain_text
    //    const tentName = result.properties['Tent Name'].title[0].plain_text;
    //    console.log(`${tentName} is ${tentWeight} and costs ${tentPrice} at ${tentRetailer}`)
    //})

    //Option 2 - using map (based on Traversy media tutorial)
    const tentCard  = results.map(result => {
        return {
            tentPrice: result.properties.Price.number,
            tentWeight: result.properties['Weight (lbs)'].number,
            tentRetailer: result.properties.Retailer.rich_text[0].plain_text,
            tentName: result.properties['Tent Name'].title[0].plain_text,
        }
    })
}
