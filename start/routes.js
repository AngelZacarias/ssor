'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.on('/').render('welcome');

Route.on('/notfound').render('notfound').as('notfound');

Route.on('/activity1').render('activity1').as('activity1');
Route.on('/activity2').render('activity2').as('activity2');
Route.on('/activity3').render('activity3').as('activity3');
Route.on('/activity4').render('activity4').as('activity4');
Route.on('/activity5').render('activity5').as('activity5');
Route.on('/activity6').render('activity6').as('activity6');
Route.get('/activity7', 'CommentController.getComments').as('activity7');
Route.on('/activity8').render('activity8').as('activity8');
Route.on('/activity9').render('activity9').as('activity9');
Route.on('/activity10').render('activity10').as('activity10');
Route.on('/activity11').render('activity11').as('activity11');
Route.on('/activity12').render('activity12').as('activity12');
Route.on('/activity13').render('activity13').as('activity13');
Route.post('/comment', 'CommentController.save').as('registerCommentAct7');

