##Config for system
Maintain a consistent way to keep dotfiles across systems

## Reference
https://www.atlassian.com/git/tutorials/dotfiles

## To get started
```
curl -Lks https://bitbucket.org/b00y0h/workspace/snippets/eqAoxg | /bin/bash
```

## Installing apps and setting prefs
```
./.brew.sh
./.osx
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
