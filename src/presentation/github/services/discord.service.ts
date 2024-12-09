import { envs } from "../../../config";

export class DiscordService {
  private readonly discordWebhookUrl: string = envs.DISCORD_WEBHOOK_URL;

  constructor() {}

  async notify(message: string) {
    const body = {
      content: message,
      embeds: [
        {
          image: {
            url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXBhbm5lbmwwemNqaW0zaXNxM3JjZ2VwZDR0ZmptZDZzZjNjM2ZjdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fUQ4rhUZJYiQsas6WD/giphy.gif",
          },
        },
      ],
    };

    const resp = await fetch(this.discordWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!resp.ok) {
      console.log("Error sending message to discord");
      return false;
    }

    return true;
  }
}
