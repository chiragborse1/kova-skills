export default {
    name: "social-scheduler",
    description: "Draft and schedule social media posts",
    version: "1.0.0",
    author: "Kova Official",
    async run(ctx) {
        const post = await ctx.agent.run(
            `Create an engaging social media post based on this input: "${ctx.message}". Write versions for: 1) Twitter/X (max 280 chars), 2) LinkedIn (professional tone), 3) Telegram channel. Label each clearly.`
        );
        await ctx.channel.send(post);
    }
}