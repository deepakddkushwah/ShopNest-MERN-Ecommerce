const { spawn } = require('child_process');
const path = require('path');

// Ensure System32 is in PATH for Windows ENOENT fix
const system32 = 'C:\\Windows\\System32';
const winPowerShell = 'C:\\Windows\\System32\\WindowsPowerShell\\v1.0';
const currentPath = process.env.PATH || '';
const env = { ...process.env };
if (!currentPath.includes(system32)) {
  env.PATH = `${system32};${winPowerShell};${currentPath}`;
}

console.log('===================================================');
console.log('🚀 Launching ShopNest Backend (5000) & Frontend (3000)...');
console.log('===================================================\n');

// Start Backend
const backend = spawn('npm', ['run', 'dev'], {
  cwd: path.join(__dirname, 'backend'),
  shell: true,
  stdio: 'inherit',
  env
});

// Start Frontend
const frontend = spawn('npm', ['run', 'dev'], {
  cwd: path.join(__dirname, 'frontend'),
  shell: true,
  stdio: 'inherit',
  env
});

backend.on('error', (err) => {
  console.error('Backend process error:', err);
});

frontend.on('error', (err) => {
  console.error('Frontend process error:', err);
});

process.on('SIGINT', () => {
  backend.kill();
  frontend.kill();
  process.exit();
});
