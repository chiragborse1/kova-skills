export default {
    name: "email-monitor",
    description: "Monitor Gmail for important emails",
    version: "1.0.0",
    author: "Kova Official",
    cron: "*/30 * * * *",
    async run(ctx) {
        const update = await ctx.agent.run(
            "Check for any urgent or important emails received in the last 30 minutes. Summarize subject, sender, and key point for each. If none, say inbox is clear."
        );
        await ctx.channel.send(update);
    }
}