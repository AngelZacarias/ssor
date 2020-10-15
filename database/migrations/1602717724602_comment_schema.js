'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommentSchema extends Schema {
  up () {
    this.create('comments', (table) => {
      table.increments();
      table.string('fullName',100).unique();
      table.string('studentComment',500);
      table.timestamps();
    });
  }

  down () {
    this.drop('comments')
  }
}

module.exports = CommentSchema
