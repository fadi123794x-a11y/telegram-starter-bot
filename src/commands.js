export function registerCommands(bot) {

  const isGroup = (ctx) =>
    ["group", "supergroup"].includes(ctx.chat.type)

  // الترحيب بالأعضاء الجدد
  bot.on("message:new_chat_members", async (ctx) => {
    if (!isGroup(ctx)) return

    for (const user of ctx.message.new_chat_members) {
      if (user.is_bot) continue

      await ctx.reply(
        `╭────── 💗 ──────╮

أهلاً وسهلاً بك ${user.first_name}

نورت مجموعتنا مع نالي 🌸

نتمنى لك وقتاً ممتعاً

╰────── 💗 ──────╯`
      )
    }
  })

  // أمر المساعدة
  bot.command("start", (ctx) => {
    if (!isGroup(ctx)) return
    return ctx.reply(
      "أهلاً بك في NALI BOT 💗\nأنا نالي، مساعدة مجموعتك 🌸\nاكتب /help لمعرفة الأوامر"
    )
  })

  bot.command("help", (ctx) => {
    if (!isGroup(ctx)) return
    return ctx.reply(
      `💗 أوامر نالي

/start - الترحيب
/help - المساعدة
/ping - فحص البوت
/id - عرض الآيدي
/rank - معرفة رتبتك

NALI BOT 💗`
    )
  })

  // فحص التشغيل
  bot.command("ping", (ctx) => {
    if (!isGroup(ctx)) return
    return ctx.reply("NALI ONLINE 💗")
  })

  // عرض الآيدي
  bot.command("id", (ctx) => {
    if (!isGroup(ctx)) return
    return ctx.reply(
      `Chat ID: ${ctx.chat.id}\nUser ID: ${ctx.from.id}`
    )
  })

  // الرتب
  bot.command("rank", async (ctx) => {
    if (!isGroup(ctx)) return

    const member = await ctx.getChatMember(ctx.from.id)

    let rank = "👤 عضو"

    if (member.status === "creator") {
      rank = "👑 مالك المجموعة"
    } else if (member.status === "administrator") {
      rank = "🛡️ مشرف"
    }

    return ctx.reply(`رتبتك:\n${rank}`)
  })

  // الردود التلقائية
  bot.on("message:text", async (ctx) => {
    if (!isGroup(ctx)) return

    const text = ctx.message.text.trim().toLowerCase()

    const replies = {
      "نالي": "سمي يا قلبي 💗",
      "مرحبا": "يا هلا وغلا 🌸",
      "هلا": "هلا؟ 💗",
      "كيفك": "بخير دامك بخير ❤️",
      "احبك": "وأنا أحب وجودك 💗",
      "أحبك": "وأنا أحبك  💗",
      "صباح الخير": "صباح النور والسرور 🌷",
      "مساء الخير": "مساء الورد والياسمين 🌹",
      "تصبحون على خير": "وأنتم من أهله 💗"
    }

    if (replies[text]) {
      return ctx.reply(replies[text])
    }
  })

}
