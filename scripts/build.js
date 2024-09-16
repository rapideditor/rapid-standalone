import chalk from 'chalk';
import shell from 'shelljs';

// Start clean
console.log(chalk.yellow('🧽 Start clean…'));
shell.rm('-rf', 'dist');

// Copy Rapid
console.log(chalk.yellow('⌛️ Copying Rapid…'));
shell.cp('-rf', 'node_modules/@rapideditor/rapid/dist', 'dist');

// Replace index.html
console.log(chalk.yellow('✏️  Replacing index.html…'));
shell.cp('-f', 'src/index.html', 'dist/index.html');

// id-tagging-schema
console.log(chalk.yellow('⌛️ Copying id-tagging-schema…'));
shell.mkdir('-p', 'dist/data/modules/id-tagging-schema');
for (const file of ['deprecated', 'discarded', 'fields', 'preset_categories', 'preset_defaults', 'presets']) {
  const source = `node_modules/@openstreetmap/id-tagging-schema/dist/${file}.min.json`;
  const destination = `dist/data/modules/id-tagging-schema/${file}.min.json`;
  shell.cp('-rf', source, destination);
}

// mapillary-js
console.log(chalk.yellow('⌛️ Copying mapillary-js…'));
shell.mkdir('-p', 'dist/data/modules/mapillary-js');
{
  const source = 'node_modules/mapillary-js/dist';
  const destination = 'dist/data/modules/mapillary-js';
  shell.cp('-rf', source, destination);
}

// maplibre-gl
console.log(chalk.yellow('⌛️ Copying maplibre-gl…'));
shell.mkdir('-p', 'dist/data/modules/maplibre-gl');
{
  const source = 'node_modules/maplibre-gl/dist';
  const destination = 'dist/data/modules/maplibre-gl';
  shell.cp('-rf', source, destination);
}

// name-suggestion-index
console.log(chalk.yellow('⌛️ Copying name-suggestion-index…'));
shell.mkdir('-p', 'dist/data/modules/name-suggestion-index/presets');
for (const file of ['nsi', 'dissolved', 'featureCollection', 'genericWords', 'presets/nsi-id-presets', 'replacements', 'trees']) {
  const source = `node_modules/name-suggestion-index/dist/${file}.min.json`;
  const destination = `dist/data/modules/name-suggestion-index/${file}.min.json`;
  shell.cp('-rf', source, destination);
}

// osm-community-index
console.log(chalk.yellow('⌛️ Copying osm-community-index…'));
shell.mkdir('-p', 'dist/data/modules/osm-community-index');
for (const file of ['defaults', 'featureCollection', 'resources']) {
  const source = `node_modules/osm-community-index/dist/${file}.min.json`;
  const destination = `dist/data/modules/osm-community-index/${file}.min.json`;
  shell.cp('-rf', source, destination);
}

// pannellum
console.log(chalk.yellow('⌛️ Copying pannellum…'));
shell.mkdir('-p', 'dist/data/modules/pannellum');
{
  const source = 'node_modules/pannellum/build';
  const destination = 'dist/data/modules/pannellum';
  shell.cp('-rf', source, destination);
}

// wmf-sitematrix
console.log(chalk.yellow('⌛️ Copying wmf-sitematrix…'));
shell.mkdir('-p', 'dist/data/modules/wmf-sitematrix');
for (const file of ['wikipedia']) {
  const source = `node_modules/wmf-sitematrix/${file}.min.json`;
  const destination = `dist/data/modules/wmf-sitematrix/${file}.min.json`;
  shell.cp('-rf', source, destination);
}

console.log(chalk.yellow('✅ Done!'));
