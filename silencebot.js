client.login("########################")   //Give the Bot api key
const express = require("express");
const app = express();
const io = require('socket.io')(process.env.PORT);

// Set the textChannel & Voice Channel Ids
let textChannelId = "758435948454608899";
let voiceChannelId ="758435948454608903";

// Commands -- !mute !unmute !help

let textChannel,voiceChannel;
const Discord = require('discord.js')
const client = new Discord.Client()
const muted = new Discord.MessageEmbed()
	.setColor('#F03A47')
	.setTitle('Muted')
	.setTimestamp()
    .setFooter('Enjoy the game!');
const unmuted = new Discord.MessageEmbed()
	.setColor('#3E8914')
	.setTitle('Unmuted')
	.setTimestamp()
    .setFooter('Find the Imposter!');

    client.on('ready',()=>{
    console.log("Connected as "+client.user.tag);
    client.user.setActivity("with Imposters");

    voiceChannel = client.channels.cache.get(voiceChannelId);
    textChannel = client.channels.cache.get(textChannelId);

})

client.on('message',(msg)=>{

    if(msg.author == client.user)
      return
    if(msg.content === '!mute')
    {
        //MUTE
        for (const [memberID, member] of voiceChannel.members) {
 
            member.voice.setMute(true);
          } 

        textChannel.send(muted);
    }
    else if(msg.content === "!unmute")
    {
        //UNMUTE
        for (const [memberID, member] of voiceChannel.members) {

            member.voice.setMute(false);
          } 

        textChannel.send(unmuted);
    }
})
