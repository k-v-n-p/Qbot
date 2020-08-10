//Qbot requirements
var fs = require('fs');
const randompuppy = require('random-puppy');
const Discord = require('discord.js');
//const Discord = require('./config.json');
const {prefix,token} = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});



client.on('message', message=>{

   
    

    if(message.content=='its a joke'||message.content=='Its a joke'||message.content==`It's a joke`||message.content==`it's a joke`){
        message.react('😂');
        message.channel.send('haha, lol');
    }

    if(message.channel.type=='dm'){
    return message.send(`Sry, but i am programmed to only chat with my developers`);
    }

    if (!message.content.startsWith(prefix) || message.author.bot) 
        return;

        const args = message.content.slice(prefix.length).trim().split(/ +/);;
        const command = args.shift().toLowerCase();
        //`${prefix}server`

        if(command=='help'){
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Q bot commands')
            .setURL('https://dumbLearners.org/')
            .setThumbnail('https://i.imgur.com/dTqceEY.jpg')
            .addFields(
                { name: 'Info', value: 'bot, help-txt, myid, server->server_name&member_count, dp, dp <@user>' },
                { name: '🏡GHAR WAALE', value: 'ghar-img, thakur-img, virus-img, sahaj-img, monish-img, kvnp-img, apil-img', inline: true },
                { name: '💀DARK', value: 'forbidden_delete <no. of messeges>🎓NITS`)', inline: true },
                { name: '🎓NITS`', value: '----------', inline: true },
            )
           // .addField('Inline field title', 'Some value here', true)

            .setTimestamp()
            .setFooter('(syntax: "Q <command>")', 'https://i.imgur.com/dTqceEY.jpg');

            message.channel.send(exampleEmbed);
        }
        else if(command=='bot'){
            message.channel.send(`hey ${message.author}, how may i help?`);
        }
        else if (command == `server`) {
            message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
        }
        else if (command == `myid`) {
            message.channel.send(`${message.author}\nYour username: ${message.author.username}\nYour ID: ${message.author.id}`);
        }/* 
        else if (command =='args-info') {
            if (!args.length) {
                return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
            }
            else if (args[0] == 'foo') {
                return message.channel.send('bar');
            }
        
            message.channel.send(`argument: ${args}`);
        }*/
         /*  const user = message.mentions.users.first() || message.author;
                const avatarEmbed = new Discord.MessageEmbed()
                    .setColor(0x333333)
                    .setAuthor(user.username)
                    .setImage(user.avatarURL);
                message.channel.send(avatarEmbed);
            }*/
        else if (command == 'dp') {
            if (!message.mentions.users.size) {
             const url =message.author.displayAvatarURL({ format: "png", dynamic: true });
             const attachment = new Discord.MessageAttachment(`${url}`);
               message.channel.send(attachment);
              //  return message.channel.send(`Your avatar:\n<${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
            }
            const avatarList = message.mentions.users.map(user => 
            {
                const url =user.displayAvatarURL({ format: "png", dynamic: true });
                const attachment = new Discord.MessageAttachment(`${url}`);
                return message.channel.send(attachment);
            });
            message.channel.send(avatarList);
        }
        else if (command == 'kick') {
            if(!message.mentions.users.size){return message.reply('Tag a person to kick, why would you kick yourself!')};
            const taggedUser = message.mentions.users.first();
        
            message.channel.send(`You wanted to kick: ${taggedUser.username}`);
        }
        else if (command == 'forbidden_delete') {
            const amount = parseInt(args[0]);
            message.channel.send(`${args[0]} deletions`);
            if (isNaN(amount)) {
                return message.reply('that doesn\'t seem to be a valid number.');
            } else if (amount <= 1 || amount >= 100) {
                return message.reply('you need to input a number between 1 and 100.');
            }
            message.channel.bulkDelete(amount, true).catch(err => {
                console.error(err);
                message.channel.send('there was an error trying to del. messages in this channel!, make sure you gave the permissions');
            });
        
        }/*
        else if (command === 'whos your father') {
            message.channel.send(`i have been made by mr.xander himself`);
        }
        else if (command == 'attach') {
              const attachment = new Discord.MessageAttachment('./media/ghar/IMG_20190723_091325.jpg');
              message.channel.send(attachment);
        }*/
        else if (command == 'ghar-img') {
            
            var files = fs.readdirSync('./media/ghar');
            let chosenFile = files[Math.floor(Math.random() * files.length)] ;
            const file = new Discord.MessageAttachment(`./media/ghar/${chosenFile}`);

            const exampleEmbed = {
                title: 'Fun Times',
                image: {
                    url: `attachment://${chosenFile}`,
                },
            };

            message.channel.send({ files: [file], embed: exampleEmbed });
    
        }
        else if (command == 'thakur-img') {
        var files = fs.readdirSync('./media/thakur');
        let chosenFile = files[Math.floor(Math.random() * files.length)] ;
        const attachment = new Discord.MessageAttachment(`./media/thakur/${chosenFile}`);
        message.channel.send(attachment);
        }
        else if (command == 'light') {
            message.channel.send(`The light in 5039 room is toggled,\n<{obj.yet_tobeCreated}>`);
        }
        else if (command == 'dumbLearners') {
            message.channel.send(`Index Nodes of all members\nSahaj:...\nApil:...\nThakur:...\nVirus:...\nKvnp:...`);
        }
        /*
        else if (command == 'meme') {
            run: async (client, message, args) =>{
                const subreddits = ['dankmeme','meme','me_irl'];
                const random = subreddits[Math.floor(Math.random()*subreddits.length )];
                const img = await randompuppy(random);
                const embed = new Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setImage(img)
                        .setTitle(`From /r/${random} for ${message.user}`)
                message.channel.send(embed);
            }
        }*/
        else if (command == 'help-txt') {
            return message.channel.send(`🤖Q-Bot commands🤖\n👦INFO\n--------\nbot, help, myid(This is what discord uses to spy on you🤫🤫), server->server_name&member_count, dp, dp <@user>(edit: also for bots now). \n\n🏡GHAR WAALE\n--------\nghar-img, thakur-img, virus-img, sahaj-img, monish-img, kvnp-img, apil-img\n\n💀DARK\n--------\nforbidden_delete <no. of messeges>\n\n🎓NITS\n--------\n\n(syntax: "Q <command>" )`);
        }

        else if (command == 'clubs') {
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor(`#1DD927`)
            .setTitle('NITS Clubs and Societies')
            .setURL('https://127.0.0.1:8080')
            .addFields(
                { name: 'Skating', value: `[Hower to see the fb group](https://www.facebook.com/groups/nitsilcharskatingroup)` },
                { name: 'ILUMINITS', value: `[Hower to see the fb group](https://www.facebook.com/Illuminits)`, inline: true },
                { name: 'Mountaineering and Trekking', value: `[Hower to see the fb group](https://www.facebook.com/groups/nits.mountaineeringclub)`, inline: true },
                { name: 'Chess', value: `[Hower to see the fb group](https://www.facebook.com/groups/347046765470801)` },
                )
                 message.channel.send(exampleEmbed);
             }
        else if (command == 'events') {
                const exampleEmbed = new Discord.MessageEmbed()
                .setColor(`#F8F707`)
                .setTitle('NITS annual fests')
                .setURL('https://127.0.0.1:8080')
                //.attachFiles(['https://i.imgur.com/DPfUKvh.jpg'])
                //.setImage('attachment://DPfUKvh.jpg')
                .addField('Tecnoesis',`[Tecnoesis](https://www.facebook.com/tecnoesis.nits) is the annual techno-management fest of NIT Silchar. Started with the aim of providing a platform for the student community to develop and showcase their technical prowess,It has expanded it's horizon to become one of India's most prominent fest`)
                
                .addField('Incandescence',`[Incandescence](https://www.facebook.com/incandescence.nits) is the annual ..............`)
                //.attachFiles(['https://i.imgur.com/7O9L7a1.jpg'])
                //.setImage('attachment://7O9L7a1.jpg')
                // //.attachFiles('https://i.imgur.com/DPfUKvh.jpg') (https://www.facebook.com/tecnoesis.nits) (https://www.facebook.com/incandescence.nits) .setImage('https://i.imgur.com/wSTFkRM.png')
                
                     message.channel.send(exampleEmbed);
                 }
        

    

});

client.login(token)