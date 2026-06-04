import { joinVoiceChannel } from '@discordjs/voice';

export default async function (client) {
  client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.content !== '!join') return;

    const channel = message.member?.voice?.channel;

    if (!channel) {
      return message.reply('تي غير خش قبل');
    }

    joinVoiceChannel({
      channelId: channel.id,
      guildId: message.guild.id,
      adapterCreator: message.guild.voiceAdapterCreator,
    });

    message.reply('جاكم سيدها');
  });
}
