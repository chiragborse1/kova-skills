export default {
    name: "weekly-summary",
    description: "Weekly summary every Friday evening",
    version: "1.0.0",
    author: "Kova Official",
    cron: "0 18 * * 5",
    async run(ctx) {
        const summary = await ctx.agent.run(
            "Create a structured weekly summary. Include: top news of the week, major tech developments, and a motivational closing thought. Keep it concise and useful."
        );
        await ctx.channel.send(summary);
    }
}