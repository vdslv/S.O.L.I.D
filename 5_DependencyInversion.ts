// Entities must depend on abstractions not on concretions.
// It states that the high level module must not depend on the low level module,
// but they should depend on abstractions.

// Depend on Abstraction not on concretions

interface DBConnectionInterface {
    connect();
}

class MySQLConnection implements DBConnectionInterface {
    connect() {
        return 'Database connection';
    }
}

class MongoDBConnection implements DBConnectionInterface {
    connect() {
        return 'MONGO DB connection';
    }
}

class PasswordReminder {
    constructor(public dbConnection: DBConnectionInterface) {
    }
}

const pass1 = new PasswordReminder(new MySQLConnection());
const pass2 = new PasswordReminder(new MongoDBConnection());

console.log(pass1.dbConnection.connect());
console.log(pass2.dbConnection.connect());
