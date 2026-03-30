export default {
    name: "price-alert",
    description: "Monitor product prices and alert on drops",
    version: "1.0.0",
    author: "Kova Official",
    cron: "0 10 * * *",
    async run(ctx) {
        const update = await ctx.agent.run(
            "Check current prices for popular electronics on Amazon India. List top 3 deals available today with original price, current price, and discount percentage."
        );
        await ctx.channel.send(update);
    }
}