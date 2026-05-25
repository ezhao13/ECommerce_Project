import { Router, Request, Response } from 'express';
import OpenAI from 'openai';
import pool from '../db/connection';
import { SearchRequest, SearchResponse } from '../types';

const router = Router();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post('/', async (req: Request<object, object, SearchRequest>, res: Response) => {
  try {
    const { message, history } = req.body;
    const [rows] = await pool.query('SELECT * FROM properties');

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      response_format: { type: 'json_object' },
      messages: [
        {
          role: 'system',
          content: `You are a helpful property rental assistant for Waterloo Rentals.
Here are all available properties:
${JSON.stringify(rows, null, 2)}

When users describe what they're looking for, find matching properties and respond ONLY with valid JSON in this exact format:
{
  "message": "A friendly, concise response explaining what you found",
  "matchingIds": [array of matching property IDs as numbers, empty array if none match]
}

Matching rules:
- Match on: bedrooms, bathrooms, rent range, type (House/Flat/Cottage), availability
- "cheap" or "affordable" = rent under $1000
- "spacious" or "large" = surface over 120m²
- "available" = available: true only
- If user asks to show all, return all IDs`,
        },
        ...history.map((h) => ({ role: h.role, content: h.content })),
        { role: 'user', content: message },
      ],
    });

    const result = JSON.parse(
      completion.choices[0].message.content || '{}'
    ) as SearchResponse;
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Sorry, I could not process your search right now.',
      matchingIds: [],
    });
  }
});

export default router;
