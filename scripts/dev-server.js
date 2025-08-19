
#!/usr/bin/env node

const { exec } = require('child_process');
const open = require('open');

console.log('🚀 Iniciando servidor de desenvolvimento...');
console.log('📍 URL: http://localhost:3000');
console.log('🔄 Hot reload ativado');
console.log('🛠️ Modo: Desenvolvimento');

// Iniciar servidor React
const server = exec('npm start', (error, stdout, stderr) => {
    if (error) {
        console.error(`Erro: ${error}`);
        return;
    }
    console.log(stdout);
    console.error(stderr);
});

// Abrir navegador automaticamente após 3 segundos
setTimeout(() => {
    open('http://localhost:3000');
}, 3000);

// Capturar Ctrl+C para encerrar graciosamente
process.on('SIGINT', () => {
    console.log('\n🛑 Encerrando servidor...');
    server.kill();
    process.exit(0);
});
