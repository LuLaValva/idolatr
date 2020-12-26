import express from "express";
import { initDB, getDB } from "./mongo";

const app = express();
const port = process.env.PORT || 5000;

app.get("/fetch", async (req: express.Request, res: express.Response) => {
  let body = await getDB().collection("pages").findOne({});
  res.send(body);
});

initDB("Idolatr", (err: Error) => {
  if (err) {
    throw err;
  } else {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}...`);
    });
  }
});
