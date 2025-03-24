import { Client } from "pg";

export async function GET(req) {
    const client = new Client(process.env.DB_URL)
    await client.connect()
    try {
        let resp = await client.query('SELECT * FROM products')
        return new Response(JSON.stringify({data: resp.rows, message: 'Success'}))
    } catch (error) {
        return new Response(JSON.stringify({message: error.message}))
    } finally {
        client.end()
    }
}