import { createConnection } from 'typeorm';
import { resolve } from 'path';
console.log(resolve(__dirname, '../entities', '*.{js,ts}'));
createConnection({
    type: 'mysql',
    host: '',
    port: 3306,
    username: 'root',
    password: '',
    database: '',
    synchronize: false,
    logging: false,
    entities: [resolve(__dirname, '../entities', '*.{js,ts}')]
}
);
