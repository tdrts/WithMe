const DEFAULT_HOSTS = [
  "http://127.0.0.1:3845/assets",
  "http://localhost:3845/assets"
];

const resolveBaseUrl = (): string => {
  const fromEnv = import.meta.env.VITE_ASSET_BASE_URL;
  if (typeof fromEnv === "string" && fromEnv.trim().length > 0) {
    return fromEnv.trim().replace(/\/$/, "");
  }

  const reachable = DEFAULT_HOSTS.find((candidate) => candidate.length > 0);
  return (reachable ?? DEFAULT_HOSTS[0]).replace(/\/$/, "");
};

const base = resolveBaseUrl();

export const asset = (file: string): string => `${base}/${file}`;
