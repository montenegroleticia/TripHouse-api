export async function getLodges(req, res) {
  try {
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
