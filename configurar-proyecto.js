const { execSync } = require('child_process');
const fs = require('fs');

// Inicializar el proyecto npm
execSync('npm init -y', { stdio: 'inherit' });

// Configurar package.json como type: "modules"
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
packageJson.type = 'module';
fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

// Configurar los scripts
packageJson.scripts = {
  "start": "node .",
  "dev": "nodemon ."
};
fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

// Instalar nodemon
execSync('npm install nodemon --save-dev', { stdio: 'inherit' });

// Crear la estructura de carpetas
fs.mkdirSync('src');
fs.mkdirSync('src/router');
fs.mkdirSync('src/controllers');
fs.mkdirSync('src/models');

// Crear app.js
fs.writeFileSync('src/app.js', `
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hola, mundo!');
});

app.listen(port, () => {
  console.log(\`Servidor en funcionamiento en el puerto \${port}\`);
});
`);

// Crear archivo .env
fs.writeFileSync('.env', `
PORT=3000
`);

// Crear archivo .gitignore
fs.writeFileSync('.gitignore', `
.env
node_modules
`);

console.log('Proyecto configurado y creado con éxito.');
