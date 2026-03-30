export default {
    name: "meeting-summary",
    description: "Summarize meeting transcripts instantly",
    version: "1.0.0",
    author: "Kova Official",
    async run(ctx) {
        const summary = await ctx.agent.run(
            `Summarize this meeting transcript into: 1) Key decisions made, 2) Action items with owners, 3) Main discussion points. Be concise.\n\nTranscript:\n${ctx.message}`
        );
        await ctx.channel.send(summary);
    }
}