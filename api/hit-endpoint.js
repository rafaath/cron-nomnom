export default async function handler(req, res) {
    try {
      const response = await fetch('https://menubot-backend.onrender.com/wake_up', {
        method: 'GET', // or 'POST', etc., depending on your needs
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers if necessary
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const data = await response.json();
      res.status(200).json({ message: 'Endpoint hit successfully', data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to hit endpoint', error: error.message });
    }
  }
  