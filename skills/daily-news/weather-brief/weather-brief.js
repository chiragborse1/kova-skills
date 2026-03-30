export default {
  name: "weather-brief",
  description: "Daily weather update for your city every morning",
  version: "1.0.0",
  author: "Kova Official",
  cron: "0 7 * * *",
  async run(ctx) {
    const weather = await ctx.agent.run(
      "Get today's weather forecast for Mumbai, India. Include temperature, conditions, and any rain expected. Keep it to 2-3 lines."
    );
    await ctx.channel.send(weather);
  }
}
