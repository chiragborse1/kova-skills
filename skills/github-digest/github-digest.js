export default {
    name: "github-digest",
    description: "Daily summary of your GitHub activity",
    version: "1.0.0",
    author: "Kova Official",
    cron: "0 9 * * *",
    async run(ctx) {
        const digest = await ctx.agent.run(
            "Summarize the latest activity on GitHub trending repositories today. Include top 5 trending repos with their description and star count."
        );
        await ctx.channel.send(digest);
    }
}