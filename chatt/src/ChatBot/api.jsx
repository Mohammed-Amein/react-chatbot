// src/api/api.js

export const sendMessageToAPI = async (messageContent) => {
    try {
        const response = await fetch('https://linkchat-backend-jtkv.onrender.com/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: messageContent, // Send the user's message
            }),
        });

        // Check if the request was successful
        if (!response.ok) {
            throw new Error('Failed to fetch response from API');
        }

        // Parse the JSON response
        const data = await response.json();

        // Assuming the API returns a field `response` with the bot's reply
        return data.response || "Sorry, I didn't understand that.";
    } catch (error) {
        console.error('Error sending message to API:', error);
        // Return a fallback error message if there was an issue
        return 'There was an error processing your request. Please try again.';
    }
};
