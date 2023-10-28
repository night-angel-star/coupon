<?php

return [
    /*
     * You can enable CORS for 1 or multiple paths.
     * Example: ['api/*']
     */
    'paths' => ['*'],

    /*
     * Matches the request method. `[*]` allows all methods.
     */
    'allowed_methods' => ['POST', 'GET', 'DELETE', 'PUT', '*'],

    /*
     * Matches the request origin. `[*]` allows all origins.
     */
    'allowed_origins' => ['http://localhost:8080', '*'],

    /*
     * Matches the request origin with, similar to `Request::is()`
     */
    'allowed_origins_patterns' => ['Google', '*'],

    /*
     * Sets the Access-Control-Allow-Headers response header. `[*]` allows all headers.
     */
    'allowed_headers' => ['X-Custom-Header', 'Upgrade-Insecure-Requests', '*'],

    /*
     * Sets the Access-Control-Expose-Headers response header.
     */
    'exposed_headers' => false,

    /*
     * Sets the Access-Control-Max-Age response header.
     */
    'max_age' => false,

    /*
     * Sets the Access-Control-Allow-Credentials header.
     */
    'supports_credentials' => false,
];
