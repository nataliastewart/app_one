exports.seed = function (knex) {
  // add data into insert
  return knex("listType").insert([
    { name: "to-do" },
    { name: "work" },
    { name: "shopping" },
  ]);
};
