import * as http from 'http';
import app from './app';

const server = http.createServer(app);
const port = process.env.port || 8080;

server.listen(port);
server.on('listening', () => console.log('Listening on port 8080...'));

export default app;