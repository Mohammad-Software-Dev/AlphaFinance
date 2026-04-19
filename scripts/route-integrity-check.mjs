import { readFileSync, readdirSync, statSync } from "node:fs";
import { resolve, extname, join } from "node:path";

const root = process.cwd();

function read(path) {
  return readFileSync(resolve(root, path), "utf8");
}

function walk(dir, out = []) {
  const entries = readdirSync(dir);
  for (const entry of entries) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      walk(full, out);
      continue;
    }
    const ext = extname(full);
    if (ext === ".ts" || ext === ".tsx") out.push(full);
  }
  return out;
}

function normalizePath(p) {
  const withoutQuery = p.split("?")[0].split("#")[0];
  if (!withoutQuery.startsWith("/")) return withoutQuery;
  return withoutQuery.replace(/\/+$/, "") || "/";
}

function matchesDynamic(pathname, dynamicPattern) {
  const a = normalizePath(pathname).split("/").filter(Boolean);
  const b = normalizePath(dynamicPattern).split("/").filter(Boolean);
  if (a.length !== b.length) return false;
  for (let i = 0; i < b.length; i += 1) {
    if (b[i].startsWith(":")) continue;
    if (a[i] !== b[i]) return false;
  }
  return true;
}

const router = read("src/router.tsx");
const routePaths = [...router.matchAll(/path:\s*"([^"]+)"/g)].map((m) => m[1]);
const staticRoutes = new Set(
  routePaths
    .filter((p) => !p.includes(":") && p !== "*")
    .map((p) => normalizePath(p))
);
const dynamicRoutes = routePaths.filter((p) => p.includes(":"));

const sourceFiles = walk(resolve(root, "src"));
const linkPaths = new Set();

const patterns = [
  /to="(\/[^"]*)"/g,
  /navigate\("([^"]+)"\)/g,
  /to:\s*"([^"]+)"/g,
];

for (const file of sourceFiles) {
  const code = readFileSync(file, "utf8");
  for (const pattern of patterns) {
    for (const match of code.matchAll(pattern)) {
      const candidate = match[1];
      if (!candidate.startsWith("/")) continue;
      linkPaths.add(normalizePath(candidate));
    }
  }
}

const failures = [...linkPaths].filter((path) => {
  if (staticRoutes.has(path)) return false;
  return !dynamicRoutes.some((pattern) => matchesDynamic(path, pattern));
});

if (failures.length > 0) {
  throw new Error(
    `Route integrity failed. Unknown route targets found: ${failures.join(", ")}`
  );
}

console.log("Route integrity checks passed.");

