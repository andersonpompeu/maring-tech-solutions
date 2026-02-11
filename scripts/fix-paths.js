import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Assuming script is in scripts/ folder, so dist is ../dist
const distDir = path.resolve(__dirname, '../dist');

function getAllHtmlFiles(dir, fileList = []) {
    if (!fs.existsSync(dir)) return fileList;

    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            getAllHtmlFiles(filePath, fileList);
        } else {
            if (file.endsWith('.html')) {
                fileList.push(filePath);
            }
        }
    });

    return fileList;
}

// Function to replace localhost URLs with relative paths
function replaceLocalhost(content, prefix) {
    // Regex to match http://localhost:PORT/ or http://localhost/
    // We replace the entire origin + trailing slash with the prefix
    const localhostRegex = /http:\/\/localhost(:\d+)?\//g;
    return content.replace(localhostRegex, prefix);
}

// Function to ensure relative asset paths are correct for nested files
function fixRelativeAssetPaths(content, prefix) {
    if (prefix === './') return content; // Root files are fine with ./assets/ usually

    // Replace src="./assets/" with src="../assets/" (using prefix)
    let newContent = content.replace(/src="\.\/assets\//g, `src="${prefix}assets/`);

    // Replace href="./assets/" with href="../assets/"
    newContent = newContent.replace(/href="\.\/assets\//g, `href="${prefix}assets/`);

    // Replace href="./favicon" with href="../favicon"
    newContent = newContent.replace(/href="\.\/favicon/g, `href="${prefix}favicon`);

    return newContent;
}

console.log('Starting path fix for nested HTML files...');

try {
    const htmlFiles = getAllHtmlFiles(distDir);
    console.log(`Found ${htmlFiles.length} HTML files.`);

    let modifiedCount = 0;

    htmlFiles.forEach(file => {
        let content = fs.readFileSync(file, 'utf8');
        const originalContent = content;

        // Calculate relative path from dist root to this file
        // e.g. dist/geladeira/index.html -> geladeira/index.html
        const relativePath = path.relative(distDir, file);

        // Determine the directory depth relative to dist
        const fileDir = path.dirname(relativePath);

        // Calculate prefix to get back to root
        // if fileDir is '.', prefix is './'
        // if fileDir is 'geladeira', prefix is '../'
        // if fileDir is 'geladeira/conserto', prefix is '../../'

        let prefix = './';
        if (fileDir !== '.') {
            // Split by path separator provided by node for current OS
            // On Windows it is backslash, on Linux forward slash.
            // path.relative returns OS specific separators.
            const depth = fileDir.split(path.sep).length;
            prefix = '../'.repeat(depth);
        }

        // 1. Fix standard relative paths (./assets -> ../assets)
        content = fixRelativeAssetPaths(content, prefix);

        // 2. Fix absolute localhost URLs (captured by react-snap)
        content = replaceLocalhost(content, prefix);

        if (content !== originalContent) {
            fs.writeFileSync(file, content, 'utf8');
            modifiedCount++;
            // console.log(`Fixed: ${relativePath} (prefix: ${prefix})`);
        }
    });

    console.log(`Successfully fixed paths in ${modifiedCount} files.`);

} catch (error) {
    console.error('Error fixing paths:', error);
    process.exit(1);
}
