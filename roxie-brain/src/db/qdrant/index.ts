import { QdrantDB } from "..";

// await QdrantDB.createCollection("test_collection", {
//   vectors: { size: 4, distance: "Dot" },
// });

const operationInfo = await QdrantDB.upsert("test_collection", {
  wait: true,
  points: [
    { id: 1, vector: [0.05, 0.61, 0.76, 0.74], payload: { city: "Berlin" } },
    { id: 2, vector: [0.19, 0.81, 0.75, 0.11], payload: { city: "London" } },
    { id: 3, vector: [0.36, 0.55, 0.47, 0.94], payload: { city: "Moscow" } },
    { id: 4, vector: [0.18, 0.01, 0.85, 0.8], payload: { city: "New York" } },
    { id: 5, vector: [0.24, 0.18, 0.22, 0.44], payload: { city: "Beijing" } },
    { id: 6, vector: [0.35, 0.08, 0.11, 0.44], payload: { city: "Mumbai" } },
  ],
});

console.log("operationInfo: ", operationInfo);

let searchResult = await QdrantDB.query("test_collection", {
  query: [0.2, 0.1, 0.9, 0.7],
  limit: 3,
});

console.debug(searchResult);
