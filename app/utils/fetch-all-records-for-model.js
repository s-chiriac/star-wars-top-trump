// SWAPI results are paginated, with a page size of 10 which can't be changed.
// Because we need to pick a random record from ALL of them, and since we
// COULD make assumptions about ID's and hope we get lucky but SHOULDN'T, this
// queries for the first page so that we get the count property in the metadata,
// which we then use to figure out how many more pages there are.
// For each remaining page, serialize a promise to send the network request.
// Once they've all been resolved, create one array with all the results.

export default async function fetchAllRecordsForModel(modelName) {
  const firstPage = await this.store.query(modelName, { page: 1 });
  const totalPageCount = Math.ceil(firstPage.meta.total / 10);
  const allPagePromises = [];

  for (let i = 1; i < totalPageCount; i++) {
    allPagePromises.push(this.store.query(modelName, { page: i + 1 }));
  }

  const pages = await Promise.all(allPagePromises);
  const records = [...firstPage.toArray()];

  pages.forEach((page) => {
    records.push(...page.toArray());
  });

  return records;
}
