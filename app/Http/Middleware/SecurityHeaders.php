<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Symfony\Component\HttpFoundation\Response;
use Tighten\Ziggy\Ziggy;

class SecurityHeaders
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        /** @var Response $response */
        $response = $next($request);

        // Add security headers
        $response->headers->set('X-Frame-Options', 'DENY');
        $response->headers->set('X-Content-Type-Options', 'nosniff');
        $response->headers->set('X-XSS-Protection', '1; mode=block');
        $response->headers->set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');

        // Correct way to add multiple CSP sources
        $csp = "
    default-src 'self'; 
    script-src 'self' https://cdnjs.cloudflare.com https://ajax.googleapis.com; 
    style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://fonts.googleapis.com https://fonts.bunny.net; 
    img-src 'self' data: https://your-image-cdn.com; 
    font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com https://fonts.bunny.net;
    connect-src 'self';
";
$response->headers->set('Content-Security-Policy', trim(preg_replace('/\s+/', ' ', $csp)));

    
    
    
    

        $response->headers->set('Referrer-Policy', 'strict-origin-when-cross-origin');
        $response->headers->set('Permissions-Policy', 'geolocation=(), camera=()');

        return $response;
    }
}
