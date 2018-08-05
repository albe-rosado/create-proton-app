
# Create Proton Native App

Create [Proton Native](https://proton-native.js.org/#/) apps with no build configuration. Works on Linux, macOS and Windows.

## Requirements

### Windows:
```
npm install --global --production windows-build-tools
```

### Linux:
Install these libraries:
- libgtk-3-dev
- build-essential


## Usage

```sh
# install the cli
npm install -g create-proton-app
# create your proton native app
create-proton-app my-app
# go to your project directory and have fun!
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

We use `electron-builder` to handle the packaging for your application. Produces bundles for Linux (AppImages, Snaps, deb, rpm, ...) and macOS. Windows support is unstable.


```sh
# build your app
npm run build
# bundle it
npm run dist
```
Only a minimal build/packaging config is provided, as your application grows you should take a look at the [documentation](https://www.electron.build/).

## Contributing

We'd love to have your helping hand! 
- If you like this tool and have an idea of how to improve it or want to add an additional feature, create an issue explaining your idea. 
- Please, avoid using third party libraries for small/simple tasks, make sure we really need that library in our project, such a simple tool shouln't have lots of dependencies that at the same time have their own almost infinite dependency trees. 
- If something doesn’t work, please [file an issue](https://github.com/albe-rosado/create-proton-app/issues/new).
- Be nice.

## License
- [MIT](https://opensource.org/licenses/MIT)