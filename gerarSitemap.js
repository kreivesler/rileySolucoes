import fs from 'fs';
import path from 'path';

// Função para obter o diretório atual no Vite
const getCurrentDirectory = () => {
  const url = import.meta.url;
  const fileURL = new URL(url);
  return path.dirname(fileURL.pathname);
};

const routes = [
  { path: '/' },
  { path: '/servicos' },
  { path: '/sobre' },
  { path: '/termo-uso' },
  { path: '/privacidade' },
  { path: '/politica-servicos' },
  { path: '/contato' },
  { path: '/login' },
  { path: '/signup' },
  { path: '/painel' },
  { path: '/learning' },
  { path: '/checkout' },
  { path: '/curso-de-informatica' },
  { path: '/curso-javascript' }
];

// URL base do seu site
const baseUrl = 'https://rileysolucoes.com.br';

// Rotas que não devem ser indexadas
const noIndexPaths = ['/signup', '/painel', '/learning', '/checkout'];

function createSitemap() {
  // Filtra rotas que não precisam ser indexadas
  const urls = routes
    .filter(route => route.path && !noIndexPaths.includes(route.path))  // Ignora rotas não indexáveis
    .map(route => `${baseUrl}${route.path}`);

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `
  <url>
    <loc>${url}</loc>
  </url>`).join('')}
</urlset>`;

  // Usando o diretório atual obtido de import.meta.url
  const currentDirectory = getCurrentDirectory();
  const sitemapPath = path.resolve(currentDirectory, 'dist', 'sitemap.xml');

  // Cria o arquivo sitemap.xml na pasta /dist
  fs.writeFileSync(sitemapPath, sitemapContent);
  console.log('✅ Sitemap gerado com sucesso em', sitemapPath);
}

//node gerarSitemap.js
createSitemap();
