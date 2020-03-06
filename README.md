##Config for system
Maintain a consistent way to keep dotfiles across systems


## To get started
```
curl -Lks http://bit.do/cfg-custom | /bin/bash
```

## To maintain
```
config status
config add .vimrc
config commit -m "Add vimrc"
config add .bashrc
config commit -m "Add bashrc"
config push
```

## Resources
[Atlassian: How to store dotfiles](https://developer.atlassian.com/blog/2016/02/best-way-to-store-dotfiles-git-bare-repo/)
[Syncing sublime package control](https://packagecontrol.io/docs/syncing)

