/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
// const nouns = ['Rock', 'Beaver', 'Door', "Lamp", "Ink"];
const nouns = [
  {noun_id: 1,
    noun: "Rock"},
  {noun_id: 2,
    noun: "Beaver"},
  {noun_id: 3,
    noun: "Door"},
  {noun_id: 4,
    noun: "Lamp"},
  {noun_id: 5,
    noun: "Ink"},
  {noun_id: 6,
    noun: "Squirrel"},
  {noun_id: 7,
    noun: "Hammer"},
]

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.raw("TRUNCATE TABLE nouns RESTART IDENTITY CASCADE")
  return await knex('nouns').insert(nouns)
};
