const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "s!"

client.on('ready', () => {
  client.user.setGame('s!help ', 'https://www.twitch.tv/zzstefanro321')
})   

  client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith(prefix+ "say")) {
    message.delete()
    const embed = new Discord.RichEmbed()
    .setDescription(args.join(" "))
    .setColor('RANDOM')
   message.channel.sendEmbed(embed);
  }

});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith(prefix+ "help")) {
    const embed = new Discord.RichEmbed()
    .setTitle('BOT INFO')
    .setDescription(`•prefix --> s!
BOT COMMANDS
• || s!mass || s!support || s!info || s!say || s!ping || s!serverinfo || s!restart || s!invite || s!botinfo || `)
    .setColor('RANDOM')
   message.channel.sendEmbed(embed);
  }

});

client.on('message', message => {
    if (message.author.id == '385792242226298896') {
    if (message.content.startsWith(`s!restart`)) {
            resetBot(message.channel);
    }
  }
});

// Turn bot off (destroy), then turn it back on
function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Restarting...')
    .then(msg => bot.destroy())
    .then(() => bot.login(process.env.TOKEN));
}

 

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);
  
if ( message.content.startsWith(prefix+ "ping")) {
    let embed = new Discord.RichEmbed()
            .setTitle('Ping')
            .setDescription(`\`\`\`md\nPing :${client.ping}ms\`\`\``)
            .setColor('RANDOM')
            .setFooter('Bot pinged')
            .setTimestamp()
        
        message.channel.send(embed);
  }
  
});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);
  
if (message.content.startsWith(prefix + 'serverinfo')) {
  const embed = new Discord.RichEmbed()
  embed.addField('Members', message.guild.memberCount, true)
  embed.addField('Name', message.guild.name, true)
  embed.addField('Region', message.guild.region, true)
  embed.addField('Owner', message.guild.owner, true)
  embed.addField('ID', message.guild.id, true)
  embed.setColor('RANDOM')
  embed.setThumbnail(message.guild.iconURL)
  message.channel.sendEmbed(embed)
}
  
});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);
  
if (message.content.startsWith(prefix + 'botinfo')) {
  const embed = new Discord.RichEmbed()
  embed.addField('BOT INFO')
  embed.addField('Name', 'Elite Supreme', true)
  embed.addField('Prefix', 's!', true)
  embed.addField('Tag:', '6777', true)
  embed.addField('Created at:', '2018-06-13 12:52:59.660000', true)
  embed.addField('ID', '461840035520446464', true)
  embed.addField('Made with:', 'Node')
  embed.addField('Creator', '@Viruz#4450', true)
  embed.setColor('RANDOM')
  embed.setThumbnail(message.guild.iconURL)
  message.channel.sendEmbed(embed)
}
  
});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith("https://discord.gg")) {
    message.delete()
    let embed = new Discord.RichEmbed()
            .setTitle('No Invite Link')
            .setColor('RANDOM')
            .setFooter('No invite link!')
            .setTimestamp()
        
        message.channel.send(embed);
  }

});    
   
  client.on('message', message => {    
    if(message.content.startsWith('s!mass')) {
    if(message.author.id === "385792242226298896" ||
message.author.id === "405337137735663618"){
       let args = message.content.split(" ").slice(1);         
       var argresult = args.join(" ")      
const argsresult = args.join(" ")         
       let reason = args.join(" ")                   
    if(!args[1]) {  }  
    if(args[1]) { 
message.channel.guild.members.forEach(member => {{ 
member.send(reason)
message.delete() }})}}} });

client.on('message', msg => {
    if (msg.content === 's!invite') {
      msg.channel.send('Invite **Supreme Elite** https://discord.gg/8UnNsz:tada:');
      msg.channel.
    }
  });

client.on('message', msg => {
    if (msg.content === 's!support') {
      msg.channel.send('support server ---> https://discord.gg/8UnNsz');
    }
  });

client.on('message', msg => {
    if (msg.content === s!info') {
      msg.channel.send('creatorul meu este : @Viruz#4450');
    }
  });

client.on('guildMemberAdd', member => {
    var joinrole = member.guild.roles.find('name', '|| ✅ мємвяu ||');
    member.addRole(joinrole);
    let channel  = member.guild.channels.find('name', 'welcome');
    let memberavatar  = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('#FF000')
        .setThumbnail(memberavatar)
        .addField('✘ | Name: ', `${member}`)
        .addField('✘ | Welcome', `**Bine ai venit pe server-ul  nostru!speram sa te distrezi!**`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

client.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', 'welcome')
                                             
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('#ff0000')
        .setThumbnail(memberavatar)
        .addField('✘ | Name: ', `${member}`)
        .addField('✘ | Bye -', `**Speram se te intorci in serverul nostru! **`)
        .setTimestamp()

        channel.sendEmbed(embed);
});


client.login(process.env.TOKEN);
