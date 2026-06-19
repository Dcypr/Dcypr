export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  try {
    const response = await fetch(
      "https://api.apify.com/v2/datasets/aobelOyfr2kke0LJD/items"
    );

    const data = await response.json();

    const item = data?.[0];

    const followers =
      item?.followers ??
      item?.fans ??
      item?.stats?.fans ??
      0;

    res.status(200).json({
      followers,
      timestamp: Date.now()
    });

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
}
