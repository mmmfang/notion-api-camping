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
    
    

getTentInfo()