# Push swap visualizer
This project help you visualize your push swap algorithm using a step by step graphical interface supported for debian and Red hat 😈.

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

MacOS and Windows🗿 executables comming soon... 💯

🧬 inspiration:
- [o-reo](https://github.com/o-reo/push_swap_visualizer)

🗿 support:
- [patreon](https://patreon.com/obenchkr)

enjoy and good luck in your 42 journey 🥳.
