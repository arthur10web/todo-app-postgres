const Pool = require('pg').Pool

const pool = new Pool({
    user: 'hmcuryqtkubpgd',
    password: 'a7276dac9b69f0ee0194d1b5e37e623accc7d10a505dc81ad3e5bd1447df60a0',
    host:'ec2-44-205-41-76.compute-1.amazonaws.com',
    port: 5432,
    database: 'd1bhltp53osta4',
    ssl: {rejectUnauthorized: false}
})

module.exports = pool
