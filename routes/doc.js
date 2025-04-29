import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notes API Documentation</title>
    <style>
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        line-height: 1.6;
        color: #333;
        max-width: 1000px;
        margin: 0 auto;
        padding: 20px;
      }
      h1 {
        color: #2c3e50;
        border-bottom: 2px solid #3498db;
        padding-bottom: 10px;
      }
      h2 {
        color: #2980b9;
        margin-top: 30px;
      }
      .endpoint {
        background-color: #f8f9fa;
        border-left: 4px solid #3498db;
        padding: 15px;
        margin-bottom: 20px;
        border-radius: 0 4px 4px 0;
      }
      .method {
        display: inline-block;
        padding: 5px 10px;
        border-radius: 4px;
        color: white;
        font-weight: bold;
        margin-right: 10px;
      }
      .get {
        background-color: #2ecc71;
      }
      .post {
        background-color: #3498db;
      }
      .delete {
        background-color: #e74c3c;
      }
      pre {
        background-color: #f1f1f1;
        padding: 10px;
        border-radius: 4px;
        overflow-x: auto;
      }
      code {
        font-family: Consolas, Monaco, 'Andale Mono', monospace;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
      }
      th, td {
        padding: 12px 15px;
        text-align: left;
        border-bottom: 1px solid #ddd;
      }
      th {
        background-color: #f2f2f2;
      }
      .response-container {
        margin-top: 15px;
      }
      .url {
        font-family: Consolas, Monaco, 'Andale Mono', monospace;
        background-color: #f1f1f1;
        padding: 5px;
        border-radius: 4px;
      }
    </style>
  </head>
  <body>
    <h1>Notes API Documentation</h1>
    <p>Welcome to the Notes API documentation. This API allows you to create, retrieve, and delete notes.</p>
    
    <h2>Base URL</h2>
    <p>All endpoints are relative to: <span class="url">${req.protocol}://${req.get('host')}</span></p>
    
    <h2>Endpoints</h2>
    
    <div class="endpoint">
      <h3><span class="method post">POST</span> /notes</h3>
      <p>Create a new note</p>
      
      <h4>Request Body:</h4>
      <pre><code>{
  "title": "Note Title",
  "content": "Note Content"
}</code></pre>
      
      <h4>Response:</h4>
      <div class="response-container">
        <p>Status: 201 Created</p>
        <pre><code>{
  "_id": "60d21b4667d0d8992e610c85",
  "title": "Note Title",
  "content": "Note Content",
  "createdAt": "2023-07-20T15:30:45.123Z",
  "__v": 0
}</code></pre>
      </div>
    </div>
    
    <div class="endpoint">
      <h3><span class="method get">GET</span> /notes</h3>
      <p>Retrieve all notes (sorted by creation date, newest first)</p>
      
      <h4>Response:</h4>
      <div class="response-container">
        <p>Status: 200 OK</p>
        <pre><code>[
  {
    "_id": "60d21b4667d0d8992e610c85",
    "title": "First Note",
    "content": "This is my first note",
    "createdAt": "2023-07-20T15:30:45.123Z",
    "__v": 0
  },
  {
    "_id": "60d21b4667d0d8992e610c86",
    "title": "Second Note",
    "content": "This is another note",
    "createdAt": "2023-07-19T10:24:30.456Z",
    "__v": 0
  }
]</code></pre>
      </div>
    </div>
    
    <div class="endpoint">
      <h3><span class="method delete">DELETE</span> /notes/:id</h3>
      <p>Delete a specific note by ID</p>
      
      <h4>Parameters:</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>id</td>
            <td>String</td>
            <td>The MongoDB ID of the note to delete</td>
          </tr>
        </tbody>
      </table>
      
      <h4>Response:</h4>
      <div class="response-container">
        <p>Status: 200 OK</p>
        <pre><code>{
  "message": "Note deleted successfully"
}</code></pre>
      </div>
      
      <h4>Error Responses:</h4>
      <div class="response-container">
        <p>Status: 404 Not Found</p>
        <pre><code>{
  "message": "Note not found"
}</code></pre>
      </div>
    </div>
    
    <h2>Error Handling</h2>
    <p>The API returns appropriate HTTP status codes:</p>
    <ul>
      <li><strong>200</strong> - Success</li>
      <li><strong>201</strong> - Created</li>
      <li><strong>400</strong> - Bad Request (e.g., missing required fields)</li>
      <li><strong>404</strong> - Not Found</li>
      <li><strong>500</strong> - Server Error</li>
    </ul>
    
    <h2>Example Usage</h2>
    <h3>Creating a Note</h3>
    <pre><code>fetch('${req.protocol}://${req.get('host')}/notes', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Shopping List',
    content: 'Milk, Eggs, Bread'
  })
})
.then(response => response.json())
.then(data => console.log(data));</code></pre>

    <h3>Getting All Notes</h3>
    <pre><code>fetch('${req.protocol}://${req.get('host')}/notes')
.then(response => response.json())
.then(data => console.log(data));</code></pre>

    <h3>Deleting a Note</h3>
    <pre><code>fetch('${req.protocol}://${req.get('host')}/notes/60d21b4667d0d8992e610c85', {
  method: 'DELETE'
})
.then(response => response.json())
.then(data => console.log(data));</code></pre>

    <footer style="margin-top: 50px; text-align: center; color: #7f8c8d; font-size: 0.9em;">
      <p>Notes API Documentation | Created with Express.js</p>
    </footer>
  </body>
  </html>
  `;
  
  res.send(html);
});

export default router;
