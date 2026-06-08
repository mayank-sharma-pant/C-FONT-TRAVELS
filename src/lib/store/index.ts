import fs from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");

async function ensureDataDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

export async function readStore<T>(filename: string, seed: () => T): Promise<T> {
  await ensureDataDir();
  const filePath = path.join(DATA_DIR, filename);

  try {
    const raw = await fs.readFile(filePath, "utf-8");
    return JSON.parse(raw) as T;
  } catch {
    const data = seed();
    await writeStore(filename, data);
    return data;
  }
}

export async function writeStore<T>(filename: string, data: T): Promise<void> {
  await ensureDataDir();
  const filePath = path.join(DATA_DIR, filename);
  await fs.writeFile(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf-8");
}

export const storeFiles = {
  blogs: "blogs.json",
  blogDetails: "blog-details.json",
  gallery: "gallery.json",
  destinations: "destinations.json",
  packages: "packages.json",
  packageDetails: "package-details.json",
} as const;
