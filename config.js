const config = {
    development: {
        baseUrl: 'https://example.com',
        //other dev specific configs
    },
    production:{
        baseUrl: 'https://prod.exampe.com',
        //Other production configs
    },
};

module.exports = config[process.env.NODE_ENV || 'development']