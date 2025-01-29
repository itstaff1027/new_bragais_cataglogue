<?php

namespace App\Http\Middleware;


use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class IpWhitelist
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */

     protected $allowedIps = [
        // '192.168.254.*', // If your device is in this range
        // '192.168.1.*',   // Add this if your device is here
        // '10.0.*.*',      // Another local range
        // '203.0.113.45',  // Public IP of your Wi-Fi router
        '127.0.0.1',     // Localhost
        '180.191.166.35'
    ];
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next): Response
    {
        $userIp = $request->ip();
        // Log::info('client IP: ' . $request->getClientIp());

        foreach ($this->allowedIps as $allowedIp) {
            if ($this->matchWildcard($userIp, $allowedIp)) {
                return $next($request);
            }
        }

        abort(403, 'Access denied.');
    }

    /**
     * Convert wildcard pattern to regex and match IP
     */
    private function matchWildcard($ip, $pattern)
    {
        $pattern = str_replace(['.', '*'], ['\.', '.*'], $pattern);
        return preg_match("/^$pattern$/", $ip);
    }
}
