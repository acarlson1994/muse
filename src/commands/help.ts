import {SlashCommandBuilder} from '@discordjs/builders';
import {CommandInteraction, EmbedBuilder} from 'discord.js';
import {injectable} from 'inversify';
import Command from './index.js';

@injectable()
export default class implements Command {
  public readonly slashCommand = new SlashCommandBuilder()
    .setName('help')
    .setDescription('bot will send you a list of possible commands');

  async execute(interaction: CommandInteraction) {
    const embed = new EmbedBuilder()
      .setTitle("All Commands")
      .addField({ name: "/clear", value: "" })
      .addField({ name: "/config", value: "" })
      .addField({ name: "/disconnect", value: "" })
      .addField({ name: "/favorites", value: "" })
      .addField({ name: "/fseek", value: "" })
      .addField({ name: "/move", value: "" })
      .addField({ name: "/next", value: "" })
      .addField({ name: "/now-playing", value: "" })
      .addField({ name: "/pause", value: "" })
      .addField({ name: "/play", value: "" })
      .addField({ name: "/queue", value: "" })
      .addField({ name: "/remove", value: "" })
      .addField({ name: "/resume", value: "" })
      .addField({ name: "/seek", value: "" })
      .addField({ name: "/shuffle", value: "" })
      .addField({ name: "/skip", value: "" })
      .addField({ name: "/stop", value: "" })
      .addField({ name: "/unskip", value: "" })
    
    await interaction.reply({ embeds: [embed], ephemeral: true });
  }
}
