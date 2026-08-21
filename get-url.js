const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

dns.resolveSrv('_mongodb._tcp.cluster0.ctmgouq.mongodb.net', (err, addresses) => {
  if (err) return console.log('DNS Error:', err.message);
  const hosts = addresses.map(a => `${a.name}:${a.port}`).join(',');
  console.log('\n==================================================');
  console.log('COPY THIS ENTIRE STRING FOR YOUR .env.local FILE:');
  console.log(`mongodb://moonuser:MoonRepublic2026@${hosts}/moonrepublic?ssl=true&authSource=admin&retryWrites=true&w=majority`);
  console.log('==================================================\n');
});