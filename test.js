// Alternative for if condtion
/* const day = 'tuesday';
const values = {
    'monday' : 0,
    'tuesday': 1,
    'wendnesday': 2
}
const value = values[day] ?? -1;
console.log(value); */

// Orecle coomon function for query execution

// execute function (main file)

const oracledb = require('oracledb');

// Database configuration
const dbConfig = {
  user: 'your_username',
  password: 'your_password',
  connectString: 'your_connection_string'
};

// Function to execute a query
async function executeQuery(query, binds = []) {
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(query, binds); //or 
    // const result = await connection.execute(query, binds, options);


    // Process and return the query result
    return result.rows;
  } catch (error) {
    // Handle error
    console.error('Error executing query:', error);
    throw error;
  } finally {
    // Close the connection
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.error('Error closing connection:', error);
      }
    }
  }
}

module.exports = {
  executeQuery
};


// file 1

const { executeQuery } = require('./dbUtils');

// Example select query
async function selectExample() {
  const query = 'SELECT * FROM your_table';
  const result = await executeQuery(query);
  console.log('Result:', result);
}

// Call the example function
selectExample();

// file 2

const { executeQuery } = require('./dbUtils');

// Example insert query
const query = 'INSERT INTO your_table (column1, column2) VALUES (:value1, :value2)';
const binds = {
  value1: 'some value',
  value2: 'another value'
};

// Call the executeQuery function directly
executeQuery(query, binds)
  .then(() => {
    console.log('Insert successful');
  })
  .catch((error) => {
    console.error('Error:', error);
  });


// file 3

const { executeQuery } = require('./dbUtils');

// Example delete query
// const query = 'DELETE FROM your_table WHERE id = :id';
// const binds = {
//   id: 1
// };

// Call the executeQuery function directly
executeQuery(query, binds)
  .then(() => {
    console.log('Delete successful');
  })
  .catch((error) => {
    console.error('Error:', error);
  });


// Map
const map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');
console.log(map.get('key1')); // Output: value1

// Set
const set = new Set();
set.add(1);
set.add(2);
set.add(3);
console.log(set.has(2)); // Output: true

// Before
// const name = 'John';
// const age = 30;
// const person = { name: name, age: age };

// // After
// const name = 'John';
// const age = 30;
// const person = { name, age };
