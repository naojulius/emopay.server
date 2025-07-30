export const EmojiResolver = {
    Query: {
      emojis: () => [
        {
          name: "Smile",
          emoji: "🙂",
          rarity: "common",
          durationHours: 24,
          coinsPerHour: 1
        },
        {
          name: "Cool",
          emoji: "😎",
          rarity: "rare",
          durationHours: 48,
          coinsPerHour: 5
        },
        {
          name: "Robot",
          emoji: "🤖",
          rarity: "legendary",
          durationHours: 72,
          coinsPerHour: 10
        },
        {
          name: "Crown Angel",
          emoji: "👑",
          rarity: "mythic",
          durationHours: 120,
          coinsPerHour: 20
        }
      ]
    }
  };
  