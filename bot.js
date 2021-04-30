const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: '#Jenn',
            type: "STREAMING",
            url: "https://www.twitch.tv/Sad_Jenn"
        }
    });
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});



client.on('message', message => { 
	
	function rasteleSembol(uzunluk, semboller) {

var maske = '';

if (semboller.indexOf('a') > -1) maske += 'abcdefghijklmnopqrstuvwxyz';

if (semboller.indexOf('A') > -1) maske += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

if (semboller.indexOf('0') > -1) maske += '0123456789';


var sonuc = '';

 

for (var i = uzunluk; i > 0; --i) 

{

sonuc += maske[Math.floor(Math.random() * maske.length)];

}

return sonuc;

}

function spamla(){
	message.channel.send("https:/"+"/discord.gift/" + rasteleSembol(16,'0aA'));
}

	if (message.channel.id = "788379309944733697"){ //NİTROYU ATACAĞI KANALIN İDSİ
		if(message.content.startsWith("gift!nitro")){
		try{
		var veri = message.content.toString();
		var veriSn = veri.substring(10)
 		var saniye = parseInt(veriSn);
 		var saniye1 = saniye * 1000;
		if (saniye > 1){
		setInterval(spamla, saniye1);
		}
		
		else{
			message.reply("Bir Hata Oluştu. Bu Arada En Az 2 Saniye Girmelisin");
		}
		}
		catch(err){
			message.channel.send("bir hata oluştu!");
		}
		}
		}
 	


});

client.login('Nzg4MzgwMzcyNjc2MTE2NTEx.X9iqcA.G_6LctjewWHpxEbW1RnfT3VBB7U'); //BURAYA BOTUN TOKENİNİ YAZ

/////////////////////Gweep`Creative