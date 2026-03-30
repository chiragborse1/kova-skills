export default {
  name: "daily-news",
  description: "Sends top 5 headlines every morning at 8am",
  version: "1.0.0",
  author: "Kova Official",
  cron: "0 8 * * *",
  async run(ctx) {
    const news = await ctx.agent.run(
      "Search for the top 5 most important news headlines from today. Format as a numbered list with one sentence per item."
    );
    await ctx.channel.send(news);
  }
}
