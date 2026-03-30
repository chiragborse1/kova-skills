export default {
    name: "crypto-alert",
    description: "Monitor crypto prices and alert on threshold",
    version: "1.0.0",
    author: "Kova Official",
    cron: "0 * * * *",
    async run(ctx) {
        const prices = await ctx.agent.run(
            "Get the current prices of Bitcoin (BTC), Ethereum (ETH), and Solana (SOL) in USD. Format as a simple list with 24h percentage change."
        );
        await ctx.channel.send(prices);
    }
}