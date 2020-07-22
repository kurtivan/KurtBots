const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

 const activities_list = [ 
    "Playing", 
    "Sublime Text"
     ]; // creates an arraylist containing phrases you want your bot to switch through.

bot.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        bot.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000); // Runs this every 10 seconds.
});

bot.on('message', msg => {
  if (msg.content === '?!admin') {
    msg.reply(`Dev.Shikii, He is the Creator and Founder of this Server!`);
  }
});

bot.on('message', msg => {
    if (msg.content === '?!Server') {
      msg.reply(`#info`);
    }
  });

  bot.on('message', msg => {
    if (msg.content === '?!rules') {
      msg.reply(`#rules-and-terms`);
    }
  });

  bot.on('message', msg => {
    if (msg.content === '?!files') {
      msg.reply(`#share-files`);
    }
  });

  bot.on('message', msg => {
    if (msg.content === '?!SQL') {
      msg.reply(`#sql-databse-commands`);
    }
  });

  bot.on('message', msg => {
    if (msg.content === 'Time and Date') {
      msg.reply(`var date = new Date();`);
    }
  });  

bot.login(process.env.token);
