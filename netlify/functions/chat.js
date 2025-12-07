exports.handler = async function(event, context) {
    // Only allow POST requests
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    const API_KEY = process.env.GEMINI_API_KEY; // You must set this in Netlify Dashboard

    if (!API_KEY) {
        return { statusCode: 500, body: JSON.stringify({ error: "Server API Key missing" }) };
    }

    try {
        const requestBody = JSON.parse(event.body);
        
        // Use gemini-1.5-flash or gemini-2.0-flash-exp depending on availability
        const model = "gemini-2.5-flash"; 
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${API_KEY}`;

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to fetch from Gemini", details: error.toString() })
        };
    }
};