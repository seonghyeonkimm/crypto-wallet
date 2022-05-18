import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const walletId = JSON.parse(req.body).privateKey;
    res.setHeader(
      "Set-Cookie",
      serialize("wallet_id", walletId, { path: "/", httpOnly: true })
    );

    res.status(200).json({ success: false });
    return;
  }

  res.status(404);
};

export default handler;
