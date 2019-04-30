# Why chain promises?

## Performing one asynchronous task after another

1. Make an AJAX request for a user's information
2. Decode the user data in the response to obtain a URL for the user's avatar
3. Make an AJAX request for the user's avatar
4. Decode the image in the response
5. Create an `<img>` tag containing the image

