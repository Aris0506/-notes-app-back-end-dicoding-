// Memuat kode untuk membuat, mengonfigurasi, dan menjalankan server HTTP menggunakan Hapi.
const Hapi = require('@hapi/hapi');
const routes = require('./src/route');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        // chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security
        origin: ['*'],
      },
    },
  });
  //  ini dari const router
  server.route(routes);
  // asyc ya pasti ada await
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();

 // npm run start -- --dev
