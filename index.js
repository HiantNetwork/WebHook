const fetch = require("node-fetch");
const getFiles = require("./utils/getFiles");
const config = require("./config.json");
const embeds = getFiles("./embeds/");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question("What embed would you like to send?(Provide the name in the config)\n> ", name => {
    name = name.trim();
    console.log(`Executing ${name} webhook`);
    embeds.forEach(file => {
        if(file.split("/")[file.split("/").length - 1].substring(0, file.split("/")[file.split("/").length - 1].length - 3) == name) {
            let f = require(file);
            let embed = f.run();
            fetch(f.config.url, {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    content:"",
                    embeds:embed,
                    username:config.name,
                    avatar_url:config.avatarUrl
                })
            });
        }   
    })

    readline.close();
});