bot.on("message:text", async (ctx) => {
  if (ctx.chat.type !== "group" && ctx.chat.type !== "supergroup") return

  const text = ctx.message.text.trim().toLowerCase()

  if (text === "نالي") {
    return ctx.reply("عيوني يا قلبي 💗")
  }

  if (text === "مرحبا" || text === "هلا") {
    return ctx.reply("يا هلا وغلا 🌸")
  }

  if (text === "كيفك") {
    return ctx.reply("بخير دامك بخير ❤️")
  }

  if (text === "احبك" || text === "أحبك") {
    return ctx.reply("وأنا أكثر 💗")
  }

  if (text === "صباح الخير") {
    return ctx.reply("صباح النور والسرور 🌷")
  }
})
