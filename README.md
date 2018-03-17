
# Create Proton Native App

Create [Proton Native](https://proton-native.js.org/#/) apps with no build configuration. Works on Linux, MacOS and Windows, but please check your OS [requirements](https://proton-native.js.org/#/quickstart?id=prerequisites)  and make sure you are good to go. 




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
├── scripts
|	└── appimage.sh
├── package.json
├── index.js
└── .babelrc
```

## Packaging

Right now you can package your application into a [appImage](https://appimage.org/), pretty straight forward:

```sh
# build your app
npm run build
# bundle it into an appImage
npm run package-linux
```
There maybe be some issues with showing icons in some distros like KDE Neon, etc... In addition only 64-bit binaries can be produced. There is work in progress to tackle these issues.

## Contributing

We'd love to have your helping hand! 
- If you like this tool and have an idea of how to improve it or want to add an additional feature, create an issue explaining your idea. 
- Please, avoid using third party libraries for small/simple tasks, make sure we really need that library in our project, such a simple tool shouln't have lots of dependencies that at the same time have their own almost infinite dependency trees. 
- If something doesn’t work, please [file an issue](https://github.com/albe-rosado/create-proton-app/issues/new).
- Be nice.  

## License
- [MIT](https://opensource.org/licenses/MIT)