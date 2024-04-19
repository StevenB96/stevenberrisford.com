const EXECUTION_ENVIRONMENT = 'local';

let SERVER_URL = null;
let SERVER_PORT = null;
switch (EXECUTION_ENVIRONMENT) {
    case 'local':
        SERVER_URL = 'http://localhost:3000';
        SERVER_PORT = 3000;
        break;
    default:
        SERVER_URL = 'http://stevenberrisford.com';
        SERVER_PORT = 8008;
        break;
}

const output = {
    'EXECUTION_ENVIRONMENT': EXECUTION_ENVIRONMENT,
    'SERVER_URL': SERVER_URL,
    'SERVER_PORT': SERVER_PORT,
};

export default output;