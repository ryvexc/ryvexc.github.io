import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<any>,
) {
	try {
		const client = await clientPromise;
		const database = client.db("ryve_blog");

		const result = await database.collection("blog").find().toArray();

		res.status(200).json({ data: result });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Internal Server Error" });
	}
}
