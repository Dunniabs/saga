interface IConfig {
  platform: "development" | "preview" | "production";
  baseUrl: string;
}

const vercelUrl = process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL}` : undefined;

const sharedConfig: IConfig = {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  platform: (process.env.NEXT_PUBLIC_PLATFORM as any) ?? "development",
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL ?? vercelUrl ?? "https://localhost:3042",
};

export default sharedConfig;
