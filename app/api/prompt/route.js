import Prompt from "./../../../models/prompt";
import { connectToDB } from "./../../../utils/database";

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        await connectToDB();

        const prompts = await Prompt.find({})
            .populate('creator')
            .sort({ createdAt: -1 }); // Optional: sort by newest first

        if (!prompts) {
            return new Response("No prompts found", { 
                status: 404,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        return new Response(JSON.stringify(prompts), { 
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error("Error fetching prompts:", error);
        return new Response(JSON.stringify({ error: "Failed to fetch prompts" }), { 
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}