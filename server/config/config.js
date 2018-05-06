"use strict";

module.exports = {
  development: {
    db: "mongodb://mongo:27017/todo",
    port: process.env.PORT || 3001,
    userCookieName: "user"
  },
  test: {
    db: "mongodb://mongo:27017/todo-integration",
    port: process.env.PORT || 3001,
    userCookieName: "user"
  },
  production: {
    // db: 'mongodb://localhost/todo',
    // port: process.env.PORT || 80,
    // userCookieName: 'user'
  }
};
