import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";
import { createWeb3 } from "../../utils/web3";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const walletId = JSON.parse(req.body).privateKey;
    // TODO: set cookie not privateKey but session id
    // or maybe privateKey should be handled in the local machine
    // cause it is very private information
    res.setHeader(
      "Set-Cookie",
      serialize("wallet_id", walletId, { path: "/", httpOnly: true })
    );

    res.status(200).json({ success: false });
    return;
  }

  if (req.method === "GET") {
    if (!req.cookies.wallet_id) {
      res.status(400).json({ success: false });
      return;
    }

    const web3 = createWeb3();
    const account = web3.signIn(req.cookies.wallet_id);
    res.status(200).json({ address: account.address });
    return;
  }

  res.status(404);
};

export default handler;
