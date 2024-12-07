// api/hit-endpoint.js
export default async function handler(req, res) {
    try {
      const response = await fetch('https://menubot-backend.onrender.com/wake_up', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const data = await response.json();
      return res.status(200).json({ message: 'Endpoint hit successfully', data });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Failed to hit endpoint', error: error.message });
    }
  }
  