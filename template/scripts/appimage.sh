#!/usr/bin/env bash

export APP=${PWD##*/};
export ARCH=x86_64;
export PKG_ARCH=x64;

# if the bin folder doesn't exists, abort, the sources have to be build first
if [ ! -d "$(pwd)/bin/" ]; then
	echo "";
	echo "Run 'npm run build' first... and try again.";
	echo "";
	exit 1;
fi

while test $# -gt 0; do
	case "$1" in
		-h|--help)
			echo "appimage-maker - Build ready to for sitribution appImage files.";
			echo " ";
			echo "appimage-maker [options] [arguments]";
			echo " ";
			echo "options:";
			echo "-h, --help                show brief help";
			echo "-n, --name                specify the name of the application, defaults to current directory name";
			echo "-a, --arch                specify the architecture to use (x86 or x64), defaults to x86";
			echo "-i, --icon                specify path to the icon file";
			exit 0;
			;;
		-n|--name)
			shift
			if test $# -gt 0; then
				export APP=$1;
			fi
			shift
			;;
		-a|--arch)
			shift
			if test $# -gt 0; then
				export PKG_ARCH=$1;
			fi
			shift
			;;
		-i|--icon)
			shift
			if test $# -gt 0; then
				export ICON_PATH=$1;
			fi
			shift
			;;
		*)
			break
			;;
	esac
done

echo "App: $APP , Arch: $ARCH";
mkdir -p dist/linux/

# check for npx , if doesn't exist use npm global instead
if type npx >/dev/null 2>&1;then
	npx pkg ./bin/index.js --targets linux-x64 --output ./dist/linux/$APP;
else
	echo >&2 "You don't have  'npx'  installed, you should, is pretty useful. Get it at https://github.com/zkat/npx."; 
	echo >&2 "Installing required dependency globally then...";
	npm install -g pkg;
	pkg ./bin/index.js --targets linux --output ./dist/linux/$APP;	
fi

mkdir -p dist/linux/$APP.AppDir/usr/bin;

cd dist/linux/$APP.AppDir;

cp ../$APP-$PKG_ARCH usr/bin/$APP-$ARCH
cp ../../../node_modules/libui-node/{nbind.node,libui.so.0} usr/bin/


# create AppRun (appImage packaging entry point) and make it executable
cat > AppRun << 'EOF'
#!/usr/bin/env bash
DIR=$(dirname $(readlink -f "${0}"));
BIN_PATH=$(find $DIR/ -name *x86_64);
# run the VM and pass along all arguments as is
LD_LIBRARY_PATH="$DIR/usr/lib" "${DIR}/usr/bin/${BIN_PATH##*/}"
EOF
chmod a+x AppRun;

# if an icon path is given, grab the icon and move it here
if [[ -z ${ICON_PATH-x} ]];then
	cp ../$ICON_PATH ./$APP.${ICON_PATH##*.};
else
	wget "https://github.com/albe-rosado/create-proton-app/raw/master/src/img/icon.png" -O $APP.png;
fi

# make desktop file
cat > $APP.desktop <<EOF
[Desktop Entry]
Name=$APP
Icon=$APP
Exec=AppRun
Type=Application
Categories=X-Desktop;
EOF

cd ..

# download the appImage tool and execute it
wget "https://github.com/probonopd/AppImageKit/releases/download/continuous/appimagetool-x86_64.AppImage"
chmod a+x appimagetool-x86_64.AppImage
./appimagetool-x86_64.AppImage $APP.AppDir

exit 0;
