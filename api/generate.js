const SwissQRBill = require("swissqrbill");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const bill = req.body;

  try {
    const svg = SwissQRBill.generateSVG(bill);
    res.setHeader("Content-Type", "image/svg+xml");
    res.status(200).send(svg);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
