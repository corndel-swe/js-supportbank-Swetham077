import fs from 'fs/promises'

export async function readJSONTransactions() {
  // Read the Transactions2013.json file
  // Use JSON.parse to convert the string into an array of objects
  // and return it

  const path = new URL('../data/Transactions2013.json', import.meta.url);
  const data = await fs.readFile(path, 'utf-8')
  return JSON.parse(data)
}
