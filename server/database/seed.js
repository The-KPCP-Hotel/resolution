const mysql = require('mysql2/promise');

const { Users, Conversations, Messages, Void, News, Hatemail, Mailboxes, Rewards, UsersRewards, OverviewConflicts, MoodNotes, db } = require('./index.js');
// const { Users, Conversations, Messages, Void, News, Hatemail, Mailboxes, Rewards, UsersRewards, MoodNotes, db } = require('./index.js');

require('dotenv').config;


db.options.logging = false;

const seedSqlize = () => {
  mysql.createConnection({ user: 'root', password: '', })
    .then((db) => db.query('CREATE DATABASE IF NOT EXISTS `resolution`').then(() => db.end()))
    .then(() => console.log('\x1b[33m', '\nDatabase (MySQL): \'resolution\' successfully created!'))
    .then(() => Users.sync({ force: true }))
    .then(() => console.log('\x1b[36m', '\nDatabase (MySQL): \'Users\' table successfully created!'))
    .then(() => Conversations.sync({ force: true }))
    .then(() => console.log('\x1b[36m', '\nDatabase (MySQL): \'Conversations\' table successfully created!'))
    .then(() => Messages.sync({ force: true }))
    .then(() => console.log('\x1b[36m', '\nDatabase (MySQL): \'Messages\' table successfully created!'))
    .then(() => Void.sync({ force: true }))
    .then(() => console.log('\x1b[36m', '\nDatabase (MySQL): \'Void\' table successfully created!'))
    .then(() => News.sync({ force: true }))
    .then(() => console.log('\x1b[36m', '\nDatabase (MySQL): \'News\' table successfully created!'))
    .then(() => Mailboxes.sync({ force: true }))
    .then(() => console.log('\x1b[36m', '\nDatabase (MySQL): \'Mailboxes\' table successfully created!'))
    .then(() => Hatemail.sync({ force: true }))
    .then(() => console.log('\x1b[36m', '\nDatabase (MySQL): \'Hatemail\' table successfully created!'))
    .then(() => Rewards.sync({ force: true }))
    .then(() => console.log('\x1b[36m', '\nDatabase (MySQL): \'Rewards\' table successfully created!'))
    .then(() => UsersRewards.sync({ force: true }))
    .then(() => console.log('\x1b[36m', '\nDatabase (MySQL): \'UsersRewards\' table successfully created!'))
    .then(() => OverviewConflicts.sync({ force: true }))
    .then(() => console.log('\x1b[36m', '\nDatabase (MySQL): \'OverviewConflicts\' table successfully created!'))
    .then(() => MoodNotes.sync({ force: true })) 
    .then(() => console.log('\x1b[36m', '\nDatabase (MySQL): \'MoodNotes\' table successfully created!'))
    .then(() => Promise.all(require('./fakeData.js').map((txn) => Users.create(txn))))
    .then((arr) => console.log('\x1b[32m', `\nDatabase (MySQL): Successfully seeded users with ${arr.length} entries!\n`, '\x1b[37m'))
    .then(process.exit)
    .catch((err) => console.error('failed seeding resolution', err));
};

seedSqlize();
