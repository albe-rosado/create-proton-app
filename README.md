# Create Proton Native App

Create [Proton Native](https://proton-native.js.org/#/) apps with no build configuration. Works on Linux, MacOS and Windows.

## Requirements

Tested with Node.js v10 (LTS).

### Linux:

Install these packages.

#### Debian Based (.deb)

```
qtbase5-dev build-essential python2-dev
```

_Specifically `g++ make dpkg-dev` from `build-essential`._

#### Red Hat Based (.rpm)

```
qt5-qtbase-devel gcc-c++ make rpm-build python2-devel
```

## Usage

```sh
# install the cli
npm install -g create-proton-app
# create your proton native app
create-proton-app my-app
# got to your project directory and have fun!
cd my-app
npm run start
```

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install Proton Native dependencies:

```
my-app
├── node_modules
├── package.json
├── index.js
└── .babelrc
```

## Packaging

We use `electron-builder` to handle the packaging for your application. Produces bundles for Linux(appImages, snaps, deb, rpm, ...) and MacOs. Windows support is unstable.

```sh
# build your app
npm run build
# bundle it
npm run dist
```

Only a minimal build/packaging config is provided, as your application grows you should take a look to the [documentation](https://www.electron.build/).

## Contributing

We'd love to have your helping hand!

-   If you like this tool and have an idea of how to improve it or want to add an additional feature, create an issue explaining your idea.
-   Please, avoid using third party libraries for small/simple tasks, make sure we really need that library in our project, such a simple tool shouln't have lots of dependencies that at the same time have their own almost infinite dependency trees.
-   If something doesn’t work, please [file an issue](https://github.com/albe-rosado/create-proton-app/issues/new).
-   Be nice.

## License

-   [MIT](https://opensource.org/licenses/MIT)
