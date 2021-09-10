---
title: Limiting Features with Laravel, Inertia.js, and Vue 3
createdAt: 08-18-2021
---

One of the most common patterns you will see in a typical SaaS application is limiting or gating features based on something like the user's plan, license, etc. In this article we'll go over how you can accomplish this in a Laravel app that uses [Inertia.js](https://inertiajs.com/), and we'll use Vue 3 to display these limitations on the frontend.
<!--more-->

## Getting started

I've set up an [example repo](https://github.com/syropian/laravel-feature-limit-example) that you can use to get started if you wish. It has Inertia.js and Vue 3 pre-installed, with authentication (via Laravel Breeze) and controllers/models for a dead simple Todo List application.

<alert>
This tutorial assumes some familiarity with Laravel and Vue.
</alert>

## First steps

First things first, let's bootstrap our new application.

```bash
laravel new laravel-feature-limit-example
cd laravel-feature-limit-example
composer install
```

Now let's install the Inertia.js Laravel adapter, and set up its middleware.

```bash
composer require inertiajs/inertia-laravel
php artisan inertia:middleware
```

Inside `App\Http\Kernel`, add the middleware as the _last entry_ in your `web` middleware group.

```php
'web' => [
    // ...
    \App\Http\Middleware\HandleInertiaRequests::class,
],
```

We'll also need to set up our root template. Inside `resources/views`, create a file called `app.blade.php` with the following contents:

```php
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    <script src="{{ mix('/js/app.js') }}" defer></script>
  </head>
  <body>
    @inertia
  </body>
</html>
```

That's about it for the server-side Inertia.js set up, but we still need to install the client-side dependencies as well. Since we'll be using [Laravel Breeze](https://laravel.com/docs/8.x/starter-kits#breeze-and-inertia) with the Inertia.js scaffold for authentication, it will install all the required dependencies for us, as part of its installation process.

## Authentication with Laravel Breeze + Client-side Dependencies

We're going to use [Laravel Breeze](https://laravel.com/docs/8.x/starter-kits#breeze-and-inertia) with the Inertia.js scaffold to quickly built out authentication functionality.

```bash
composer require laravel/breeze --dev
php artisan breeze:install vue
```

We need to install the front-end dependenices locally, but let's make sure we're on the correct version of Vue. Open up `package.json` and set the `vue` version to `^3.2.0`. You should also set the version of `@vue/compiler-sfc` to `^3.2.0` as well, since they should always match. If `@vue/compiler-sfc` is missing from your `package.json` file, add it under the `devDependenices` key.

<alert>
We're using <code>^3.2.0</code> as that is the minimum version required to use Vue 3's <code>&lt;script setup&gt;</code> syntax.
</alert>

Now we can install the dependenices with either `npm` or `yarn`.

```bash
npm install
# or...
yarn
```

If you aren't using Laravel Breeze, you should install the client-side Inertia.js packages manually:

```bash
npm install @inertiajs/inertia @inertiajs/inertia-vue3 @inertiajs/progress --save
# or...
yarn add @inertiajs/inertia @inertiajs/inertia-vue3 @inertiajs/progress
```

Now we can compile our client-side code, and migrate our database.

```bash
npm run dev
# or...
yarn dev
# Migrate the database
php artisan migrate
```

At this point you should be able to visit the root page of your application, click the `Register` link in the top right, and create a new account for yourself. Now let's move on to writing some logic that allows us to manage a simple set of todos. This will be the base of our work, in which we'll eventually limit the user to a maximum of **5** todos unless they are subscribed to some kind of plan.

## Creating the Todo logic

The first thing we'll do is generate a Todo model, along with a migration to create the `todos` table.

```bash
php artisan make:model Todo -m
```

Go ahead and open up `app/Models/Todo.php` and make it like so:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    use HasFactory;

    protected $fillable = ['title'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
```

While we're at it, open up your todos migration file, and set this as your schema definition:

```php
Schema::create('todos', function (Blueprint $table) {
    $table->id();
    $table->integer('user_id')->unsigned()->index();
    $table->string('title');
    $table->boolean('completed')->default(false);
    $table->timestamps();
});
```

...and we migrate.

```bash
php artisan migrate
```

Let's also create a controller for handling our todo logic.

```bash
php artisan make:controller TodosController
```

We'll add functions for storing, updating, and deleting todos.

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;

class TodosController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'title' => ['required'],
        ]);

        auth()->user()->todos()->create(['title' => $request->input('title')]);

        return redirect()->route('dashboard');
    }

    public function update(Request $request, Todo $todo)
    {
        $request->validate(['completed' => ['required', 'boolean']]);

        $todo = auth()->user()->todos()->findOrFail($todo->id);
        $todo->completed = $request->input('completed');
        $todo->save();

        return redirect()->route('dashboard');
    }

    public function destroy(Request $request, Todo $todo)
    {
        auth()->user()->todos()->findOrFail($todo->id)->delete();

        return redirect()->route('dashboard');
    }
}
```

Of course we haven't connected any endpoints to our controller logic so let's do that now. Open up `routes/web.php`, and replace it with the following.

```php
<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\TodosController;

Route::get('/', function () {
    return Inertia::render('Index', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('index');

Route::group(['middleware' => 'auth'], function () {
    Route::get('dashboard', function () {
        return Inertia::render('Dashboard', [
            'todos' => auth()->user()->todos()->get(),
        ]);
    })->name('dashboard');

    Route::post('todos', [TodosController::class, 'store'])->name('todos.store');
    Route::put('todos/{todo}', [TodosController::class, 'update'])->name('todos.update');
    Route::delete('todos/{todo}', [TodosController::class, 'destroy'])->name('todos.destroy');
});

require __DIR__.'/auth.php';
```

If you aren't familiar with how Inertia works, instead of returning a normal Laravel view, or JSON, we call Inertia's `render` method instead. The first argument is the name of the Vue page component you want to render (in `resources/js/Pages`), and the second argument is the data you want to pass to it, which gets included as props in the component. If you want to learn more about how Inertia handles rendering, I encourage you to read through the [How It Works](https://inertiajs.com/how-it-works) section of the official documentation.

## Adding the Todos UI

We've now written all the backend logic required to create, update and delete todos, so let's build a simple interface for it. Go ahead and navigate to `resources/js/Pages/Dashboard.vue` — this is where we're  going to build our UI. I'm going to be using [TailwindCSS](https://tailwindcss.com) for the styling since I absolutely love it, and it's set up as part of the Breeze scaffold anyway. Feel free to use whatever styling system you like though!

