export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const { id } = req.query;

  try {
    const response = await fetch(`https://games.roblox.com/v1/games?universeIds=${id}`);
    const data = await response.json();
    const count = data?.data?.[0]?.playing || 0;
    res.status(200).json({ count });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch player count' });
  }
}
