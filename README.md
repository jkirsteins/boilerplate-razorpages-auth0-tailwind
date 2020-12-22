# ASP.NET Core + RazorPages + Auth0 + Tailwind project

This is the required boilerplate for starting a new project, using:

- .NET 5.0
- [Auth0](https://auth0.com)
- [Tailwind](https://tailwindcss.com)
- [ASP.NET Core RazorPages](https://docs.microsoft.com/en-us/aspnet/core/razor-pages/?view=aspnetcore-5.0&tabs=visual-studio)

It is meant as a minimal starting point. To reduce the very boring busywork of setting up
Tailwind and Auth0.

Licenced under the <a href="LICENSE">MIT licence</a>.

## 1. Rename the project and namespace

Search for `aspnet_tailwind` in this project's files. Replace it with your desired namespace.

Rename the `aspnet-tailwind.csproj` file to your desired project file.

## 2. Create an Auth0 application

For development purposes, configure these values in your Auth0 application (in the Auth0 dashboard):

---

*Allowed Origins (CORS)*: http://localhost:5000,https://localhost:5001

*Allowed Callback URLs*: http://localhost:5000/callback,https://localhost:5001/callback

*Allowed Logout URLs*: http://localhost:5000,https://localhost:5001

*Allowed Web Origins*: http://localhost:5000,https://localhost:5001

---

Then (in this project) set the configuration values in `appsettings.json`.

**IMPORTANT**: `Auth0:ClientId` and `Auth0:ClientSecret` need to be set via `dotnet secret set ...` or via environment variables.

## 3. Install nodejs dependencies

Run `npm install` and `npm install -g webpack`

This project is used with [nvm](https://github.com/nvm-sh/nvm), using version `14.15.3` in `.nvmrc`.

## 4. Generate the main CSS file

Do this by running `webpack`.

You need to do this for dev builds whenever you change the tailwind configuration
(e.g. to add new colors). The development version is not purged (so it will be *large*),
you don't need to run webpack more often.

If you want a production version of the Tailwind CSS, run `NODE_ENV=production webpack`.

The built CSS file will be stored under `wwwroot/dist`. This is not checked into the repository, and
needs to be built.

The entrypoint for CSS modifications is `wwwroot/css/site.css` (this is used to build the Tailwind CSS
file, and is NOT used directly).

So to recap: edit `wwwroot/css/site.css`, then run `webpack`. This produces `wwwroot/dist/main.css`,
which is referenced by the ASP.NET project.






