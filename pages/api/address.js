import { mongooseConnect } from "@/lib/mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import { Address } from "@/models/Address";

export default async function handle(req, res) {
  await mongooseConnect();

  const { user } = await getServerSession(req, res, authOptions);
  const address = await Address.findOne({ userEmail: user.email });

  if (req.method === "PUT") {
    if (address) {
      res.json(await Address.findByIdAndUpdate(address._id, req.body));
      // res.json(address);
    } else {
      res.json(await Address.create({ userEmail: user.email, ...req.body }));
    }
  }

  if (req.method === "GET") {
    res.json(address);
  }
}
