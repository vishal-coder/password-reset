import { client } from "../index.js";

export function getDBUserByEmail(data) {
  return client.db("zen").collection("users").findOne(data);
}

export function registerUser(data) {
  return client.db("zen").collection("users").insertOne(data);
}

export function insertToken(data, hashedResetToken) {
  return client
    .db("zen")
    .collection("users")
    .updateOne(data, {
      $set: { token: hashedResetToken, createdAt: new Date() },
    });
}

export function getToken(data) {
  return client.db("zen").collection("users").findOne(data);
}

export function updatePassword(query, updateQuery) {
  return client.db("zen").collection("users").updateOne(query, updateQuery);
}
export function deleteToken(token) {
  return client
    .db("zen")
    .collection("users")
    .updateOne({ token: token }, { $unset: { token: "" } });
}
