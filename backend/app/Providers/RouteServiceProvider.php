<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * La ruta HOME de la aplicación, usada por default para redirect después del login.
     */
    public const HOME = '/home';

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        $this->routes(function () {
            // Rutas API
            Route::prefix('api')
                ->middleware('api')
                ->group(base_path('routes/api.php'));

            // Rutas Web
            Route::middleware('web')
                ->group(base_path('routes/web.php'));
        });
    }
}
