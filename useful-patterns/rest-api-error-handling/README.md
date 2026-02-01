# Error Handling of REST API requests
---

This is a pattern of handling errors of API requests.

The strategy of error handling is:
1. If it's not an HTTP error (4xx or 5xx) - we don't know how to handle it.
2. It it is an HTTP error, then:
    a. Try JSON-parse the body, hoping it's a valid RFC 9457 response.
    b. If it's a JSON
        1. Check if it's a RFC 9457 by checking the `type` field. If so - handle it.
        2. Else - fallback to handle HTTP response code (401 - unauthenticated, 403 - unauthorized, etc.)
    c. Else - fallback to handle HTTP response code

To help with these experiments, we have a toy REST API.

