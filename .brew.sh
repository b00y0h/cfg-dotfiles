#!/bin/bash

export HOMEBREW_CASK_OPTS="--appdir=~/Tools"

# Install command-line tools using Homebrew
which -s brew
if [[ $? != 0 ]] ; then
    # Install Homebrew
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
else
    brew update
fi

# Upgrade any already-installed formulae
brew upgrade

brew install shpotify
brew install tmux
brew install youtube-dl
brew install libvpx
brew install ffmpeg --with-fdk-aac --with-tools --with-freetype --with-libass --with-libvorbis --with-libvpx --with-x265
brew install rmtrash
brew install tree

# z hopping around folders
brew install z

# brew install vim --with-override-system-vi

brew install git

# Remove outdated versions from the cellar
brew cleanup

# Install mac apps
brew cask install iterm2

# set up iterm (duplicated in .osx file but need it here b/c sometimes I don't run .osx
# Don't display the annoying prompt when quitting iTerm
defaults write com.googlecode.iterm2 PromptOnQuit -bool false

# load profile from dotfiles
defaults write com.googlecode.iterm2.plist PrefsCustomFolder -string "~/.iterm-profile"
defaults write com.googlecode.iterm2.plist LoadPrefsFromCustomFolder -bool true
