export default {
    name: "reminder-system",
    description: "Smart reminder system via chat",
    version: "1.0.0",
    author: "Kova Official",
    async run(ctx) {
        const response = await ctx.agent.run(
            `The user said: "${ctx.message}". If this is a reminder request, extract the task and time, confirm the reminder is set, and respond warmly. If not a reminder request, say you can help set reminders.`
        );
        await ctx.channel.send(response);
    }
}