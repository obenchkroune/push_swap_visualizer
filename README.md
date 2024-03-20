# Push swap visualizer
This project help you visualize your push swap algorithm using a step by step graphical interface supported for Linux, Mac and Windows.

## How to install

**debian/ubuntu**

if you dont have access to the super user priveleges:
- download the .deb release file from [here](https://github.com/obenchkroune/push_swap_visualizer/releases/tag/v1.0.0).
- extract the package using dpkg to the desired location
```bash
dpkg -x /path/to/push-swap-visualizer_1.0.0_amd64.deb ~/Desktop
```
- and then go to the path you extracted the package, in my case ~/Desktop/usr/bin and run the executable
```bash
cd ~/Desktop/usr/bin
chmod u+x push_swap_visualizer
./push_swap_visualizer &
```

or just add an alias in your ~/.zshrc file

```bash
alias psv="/path/to/push_swap_visualizer &"
```

```bash
psv
```

otherwise just run this command if you have admin rights
```bash
dpkg -i /path/to/push-swap-visualizer_1.0.0_amd64.deb
```
and you are good to go!

## Mac OS

download [this file](https://github.com/obenchkroune/push_swap_visualizer/releases/download/v1.0.0/push_swap_visualizer-darwin-10.14-and-below-x64-1.0.0.zip) unzip it and run the app and thats it!

but if you want you can also build from source
all you need is nodejs

```bash
git clone https://github.com/obenchkroune/push_swap_visualizer.git
```

```bash
cd push_swap_visualizer
```

```bash
npm install
```

```bash
npm run make
```

this command will build the appropriate release for your current operating system,
and voila! your push swap visualizer will be available at the out/ directory.

PRs are welcome anytime and if theres any bug encountered please let me know!

🧬 inspiration:
- [o-reo](https://github.com/o-reo/push_swap_visualizer)

hope this is helpful and good luck in your 42 journey 🥳.
