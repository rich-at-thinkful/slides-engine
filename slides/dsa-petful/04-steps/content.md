# How to work through it

<div class="smaller">

1. Create and test your API endpoints
    * GET and DELETE for `/api/cat` and `/api/dog`
    * Just return sample data to start with
        ```js
        app.get('/api/cat', (req, res) => {
            return res.json(sampleCatData);
        });
        ```
    * Test it out in Postman
2. Create your React components
    * Pull the data from your endpoints
3. Get smart with data structures
    * It's an FIFO structure
    * Create a separate queue on the backend for your cat and dog data
    * Update the GET endpoints to return the pet at the head of the queue
    * Update the DELETE endpoint to dequeue when someone wants to adopt
4. Deploy it!  Frontend with Vercel, backend with Heroku.

</div>
