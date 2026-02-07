import { cp, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const distDir = path.join(root, 'dist');

async function copyDir(src, dest) {
    if (!existsSync(src)) return;
    await mkdir(dest, { recursive: true });
    await cp(src, dest, { recursive: true });
}

await copyDir(path.join(root, 'js'), path.join(distDir, 'js'));
await copyDir(path.join(root, 'assets', 'images'), path.join(distDir, 'assets', 'images'));

