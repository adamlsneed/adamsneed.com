import fs from 'node:fs';
import path from 'node:path';

const routesPath = path.resolve('dist/_routes.json');
if (!fs.existsSync(routesPath)) {
  console.warn('fix-routes: no dist/_routes.json');
  process.exit(0);
}

const routes = JSON.parse(fs.readFileSync(routesPath, 'utf8'));
const before = JSON.stringify(routes.exclude || []);
routes.exclude = (routes.exclude || []).filter(
  (p) => p !== '/api/chat' && p !== '/api/event' && p !== '/api/chat/' && p !== '/api/event/' && p !== '/#'
);
// Ensure worker handles both slash forms
if (!routes.include?.includes('/*')) {
  routes.include = Array.from(new Set([...(routes.include || []), '/*']));
}
fs.writeFileSync(routesPath, JSON.stringify(routes, null, 2) + '\n');
console.log('fix-routes: exclude', before, '->', JSON.stringify(routes.exclude));
