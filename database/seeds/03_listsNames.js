exports.seed = function (knex, Promise) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex("lists")
    .truncate()
    .then(function () {
      // add data into insert
      return knex("lists").insert([
        { name: "Errands list", type_id: 1, user_id: 1 },
        { name: "Marketing list", type_id: 2, user_id: 1 },
        { name: "Birthday list", type_id: 3, user_id: 1 },
      ]);
    });
};
