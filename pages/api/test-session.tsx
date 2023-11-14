import { getSession } from "next-auth/react";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req: req });
  if (!session) {
    res.status(401).json({ error: "Unauthenticated user" });
  } else {
    res.status(200).json({ message: "Sucsess", session });
  }
}
// uses : user specific authentication --user has acess to the resources-- extract session to feed our logic auth response with 403 status
