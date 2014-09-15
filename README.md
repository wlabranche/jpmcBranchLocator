Chase Branch Locator
======
Written in `angular` with `browserify` and `gulp`.

Originally wanted to do it in `bacon` and `react`, but felt it made more sense
to use the framework that `blueJS` is based on more than what technologies it uses.

To get started, make sure you `node` and `gulp` installed globally and run `npm install && gulp`.

This will install all dependencies, bundle everything with `browserify`,
transform all `jade` (used mostly for fast templating) and `stylus` files, lauch a `browserSync` server that will serve everyting up from './public'
and watch for any changed files, rebuilding and reloading on any changes.

Test will be run automatically on each build with `karma`.
