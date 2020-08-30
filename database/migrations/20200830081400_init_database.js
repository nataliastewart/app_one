exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments("id");

      tbl.string("username", 128).notNullable().unique();
      tbl.string("email").notNullable().unique();
      tbl.string("password").notNullable();
    })
    .createTable("listType", (tbl) => {
      tbl.increments("id");

      tbl.string("name").notNullable().unique();
    })
    .createTable("lists", (tbl) => {
      tbl.increments("id");

      tbl.string("name").notNullable();
      //Foreign Key to identify listType
      tbl
        .integer("type_id")
        .notNullable()
        .unsigned()
        .references("listType.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      //Foreign Key to identify User
      tbl
        .integer("user_id")
        .notNullable()
        .unsigned()
        .references("users.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("items", (tbl) => {
      tbl.increments("id");

      tbl.string("name").notNullable();
      tbl.boolean("completed").notNullable().defaultTo(false);
      tbl.date("complete_by");
      //Foreign Key to identify which list item belongs to
      tbl
        .integer("list_id")
        .notNullable()
        .unsigned()
        .references("lists.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("items")
    .dropTableIfExists("lists")
    .dropTableIfExists("listType")
    .dropTableIfExists("users");
};
