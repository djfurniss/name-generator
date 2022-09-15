/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

// const adjectives = ['Yellow', 'Agressive', 'Cheerful', 'Charmful', "Tiny"];
const adjectives = [
  {adjective_id: 1,
    adjective: "Yellow"},
  {adjective_id: 2,
    adjective: "Agressive"},
  {adjective_id: 3,
    adjective: "Cheerful"},
  {adjective_id: 4,
    adjective: "Angry"},
  {adjective_id: 5,
    adjective: "Charmful"},
  {adjective_id: 6,
    adjective: "Tiny"},
]

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.raw("TRUNCATE TABLE adjectives RESTART IDENTITY CASCADE")
  return await knex('adjectives').insert(adjectives);
};
