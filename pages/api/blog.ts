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
		const tags = await database.collection("tags").find().toArray();

		let categories: Array<{ type: string; name: string }> = [];

		const addedCategories: Array<any> = [];

		result.forEach((blog: any) => {
			blog.tags.forEach((blogTag: any) => {
				tags.forEach((tag: any) => {
					if (tag.name == blogTag)
						categories.push({
							type: tag.type,
							name: blogTag,
						});
				});
			});

			blog = {
				...blog,
				categories: categories,
			};

			addedCategories.push(blog);
			categories = [];
		});

		res.status(200).json(addedCategories);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Internal Server Error" });
	}
}
