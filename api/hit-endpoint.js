export default async function handler(request) {
    try {
      const response = await fetch('https://menubot-backend.onrender.com/wake_up');
      if (!response.ok) {
        return new Response(JSON.stringify({ message: 'Failed to hit endpoint' }), { status: 500 });
      }
      const data = await response.json();
      return new Response(JSON.stringify({ message: 'Endpoint hit successfully', data }), { status: 200 });
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ message: 'Failed to hit endpoint', error: error.message }), { status: 500 });
    }
  }
  