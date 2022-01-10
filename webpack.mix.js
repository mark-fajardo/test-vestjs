const mix = require('laravel-mix');
require('laravel-mix-polyfill');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js').vue()
    .polyfill({
        enabled: true,
        useBuiltIns: 'entry',
        targets: 'IE 11',
        entryPoints: 'all',
        corejs: 3,
    })
    .options({
        terser: {
            extractComments: false,
        }
    })
    .sourceMaps(false)
    .version();
