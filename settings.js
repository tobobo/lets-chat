var config = {

    // Server
    host: !!process.env.PORT ? '' : 'localhost', // Not required
    port: process.env.PORT || 5000,

    url: process.env.MPI_CHAT_HOST,

    // Registration
    disable_registration: false,

    // HTTPS
    /***
    https: {
        port: 8000, // Regular port will redirect to this
        key: 'key.pem',
        cert: 'certificate.pem'
    },
    ***/

    // Database - will be overridden by DATABASE_URL config var
    db_host: 'localhost',
    db_port: 27017,
    db_name: 'mpi_chat',
    db_user: '',
    db_password: '',

    // Security
    // Please change these!
    cookie_secret: process.env.MPI_CHAT_COOKIE_SECRET || '1AwKjGUrslS43tv2pHk0xeFi1ePybsG9wvoiTvOn0ss81OVzZL6kr4pnLqw2PDQAa7e1n9aftHYvoULFwY94nkL8UZdPbwdUHHOiIxCPxHqZkd087JIzvI7KdFtf6QB8',
    password_salt: process.env.MPI_CHAT_PASSWORD_SALT || 'mTqaXXvlPzCgMbqAOQBj9mGG2FDVMFdVFrDLmf8aKRNd9gIL3SnEh7Bl2e81Tvy8PUMOkvwSmJ10CuSsNS8tnyO6qrRWUbhRjc7TLPC0c23osRKwAkZdFdTmuj9peJl5',

    // Misc
    debug: false,
    media_url: '/media',
    uploads_dir: 'uploads',
    plugins_dir: 'plugins',

    // Plugins
    plugins: {
        'emotes': {
            file: 'emotes.js', // You should use file.local.js
            url: 'emotes.json'
        },
        'replacements': {
            file: 'replacements.js',
            url: 'replacements.json'
        }
    },

    // Allowed file types
    allowed_file_types: [
        'image/jpeg',
        'image/png',
        'image/gif',
    ],

}

module.exports = config;
