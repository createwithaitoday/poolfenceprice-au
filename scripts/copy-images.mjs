import fs from "node:fs";
import path from "node:path";

const srcDir = path.resolve("..", "existing-repo");
const destDir = path.resolve("public", "images", "gallery");
fs.mkdirSync(destDir, { recursive: true });

const files = fs.readdirSync(srcDir).filter((f) => /\.(jpe?g|png|JPG)$/i.test(f));

function slug(name) {
  return name
    .replace(/\.[^.]+$/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function meta(file) {
  const n = file.toLowerCase();
  if (n.includes("louvre")) return ["Extensions", "Grey Colorbond fence with a louvre extension beside a pool"];
  if (n.includes("poolsafe") || n.includes("extension") || n.includes("colorbond")) return ["Extensions", "Colorbond fence extension beside a Sydney pool"];
  if (n.includes("pearl") || n.includes("white")) return ["Aluminium", "White flat top pool fence and gate beside a brick home"];
  if (n.includes("timber")) return ["Completed Projects", "Boundary fencing on a Sydney property"];
  if (n.includes("gate")) return ["Pool Gates", "Pool fence gate"];
  if (n.includes("flat")) return ["Black Flat Top", "Flat top pool fence"];
  return ["Black Flat Top", "Pool fence installed at a Sydney property"];
}

const shots = [];
for (const file of files) {
  const rawExt = path.extname(file).toLowerCase();
  const token = rawExt.slice(1);
  const destExt = rawExt === ".jpeg" ? ".jpg" : rawExt;
  const destName = `${slug(file)}-${token}${destExt}`;
  fs.copyFileSync(path.join(srcDir, file), path.join(destDir, destName));
  const [cat, alt] = meta(file);
  shots.push({ src: `/images/gallery/${destName}`, alt, cat, file });
}

const manual = {
  "poolfencing-1-jpg": ["Glass", "Frameless glass pool fence around a Sydney backyard pool"],
  "pool-fencing-2-jpg": ["Pool Gates", "Black flat top pool fence and gate beside a swimming pool"],
  "poolfencingflattopfencing-jpg": ["Black Flat Top", "Black flat top pool fence around a pool under construction"],
  "poolfencing-2-jpg": ["Black Flat Top", "Black pool fence panels installed in a backyard"],
  "pearl-white-flat-top-fencing-result-jpg": ["Aluminium", "White flat top pool fence and gate beside a brick home"],
  "colorbond-louvre-pool-fencing-jpg": ["Extensions", "Grey Colorbond fence with a louvre extension beside a pool"],
};

for (const shot of shots) {
  const id = shot.src.split("/").pop().replace(/\.(jpg|png)$/, "");
  if (manual[id]) {
    shot.cat = manual[id][0];
    shot.alt = manual[id][1];
  }
}

const body = `export type Shot = { src: string; alt: string; cat: string };

export const shots: Shot[] = ${JSON.stringify(shots.map(({ src, alt, cat }) => ({ src, alt, cat })), null, 2)};
`;
fs.writeFileSync(path.resolve("src", "lib", "gallery.ts"), body);
console.log("copied", shots.length);
