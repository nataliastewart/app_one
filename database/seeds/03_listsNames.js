exports.seed = function (knex) {
  // add data into insert
  return knex("lists").insert([
    { name: "Errands list", type_id: 1, user_id: 1 },
    { name: "Marketing list", type_id: 2, user_id: 1 },
    { name: "Birthday list", type_id: 3, user_id: 1 },
  ]);
};
