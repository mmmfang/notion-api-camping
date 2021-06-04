const dotenv = require('dotenv').config()
const {Client} = require('@notionhq/client')

const notion = new Client({
    auth: process.env.NOTION_TOKEN
})

//From Notion's example
const listUsers = async () => {
    const listUsersResponse = await notion.users.list()
};

//Grab all the lists of my tent options plan

const retrieveCampingList =  async () => {
    const allCampLists = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,  
    }) 
    console.log(allCampLists)
};
 retrieveCampingList()
