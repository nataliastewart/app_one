exports.seed = function (knex) {
  // add data into insert
  return knex("users").insert([
    {
      username: "superuser",
      email: "superuser@testing.com",
      password: "pass",
    },
  ]);
};
