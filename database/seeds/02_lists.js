exports.seed = function (knex, Promise) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex("listType")
    .truncate()
    .then(function () {
      // add data into insert
      return knex("listType").insert([
        { name: "to-do" },
        { name: "work" },
        { name: "shopping" },
      ]);
    });
};
