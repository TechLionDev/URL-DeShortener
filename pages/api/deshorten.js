import axios from 'axios';
 export default async function handler(req, res) {
  const { shortUrl } = req.query;
   try {
    const redirects = [];
    let currentUrl = shortUrl;
     while (true) {
      const response = await axios.head(currentUrl, { maxRedirects: 0, validateStatus: null });
       if (response.headers.location) {
        redirects.push({
          url: response.headers.location,
          status: response.status,
          statusText: response.status + ' ' + response.statusText,
        });
        currentUrl = response.headers.location;
      } else {
        break;
      }
    }
     res.status(200).json({ redirects });
  } catch (error) {
    console.log('An error occurred:', error);
    res.status(500).json({ error: 'Failed to retrieve the redirects.' });
  }
}