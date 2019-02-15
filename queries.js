const Pool = require('pg').Pool
const pool = new Pool({
  user: 'iris_role',
  host: 'localhost',
  database: 'irisapp',
  password: 'password',
  port: 5432,
})

const getIrises = (request, response) => {
  pool.query('SELECT * FROM irises ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getIrisesByClass = (request, response) => {
  pool.query(`SELECT * FROM irises WHERE class=$1 ORDER BY id ASC`,
              [request.params.class],
                (error, results) => {
                  if (error) {
                    throw error
                  }
                  response.status(200).json(results.rows)
                })
}

const getIrisesByLocation = (request, response) => {
  pool.query(`SELECT * FROM irises WHERE location=$1 ORDER BY id ASC`,
              [request.params.location],
                (error, results) => {
                  if (error) {
                    throw error
                  }
                  response.status(200).json(results.rows)
                })
}

module.exports = {
  getIrises,
  getIrisesByClass,
  getIrisesByLocation,
}
