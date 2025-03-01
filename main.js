const { argv } = require('node:process');
const { crawlPage } = require('./crawl')

async function main() {
    //test url underneath
    // base_url = 'https://wagslane.dev'
    
    //we do 3 to check for 1 CLI arg because by default 
    //there are always 2 args the node executable and the script.js file
    if (process.argv.length < 3) {
        console.error('Expected at least 1 CLI argument');
        return
    } else if (process.argv.length > 3) {
        console.error('More than 1 CLI argument');
        return
    } 

    BASE_URL = process.argv[2]
    console.log(`The crawler is starting at ${BASE_URL}`)
    
    
    const pages = await crawlPage(BASE_URL, BASE_URL, {});

    for (const page in Object.entries(pages)) {
        console.log(pages);
    }
}

main()