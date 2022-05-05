export TERM="xterm-256color"
# Path to your oh-my-zsh installation.
export ZSH=$HOME/.oh-my-zsh

# Set name of the theme to load.
# Look in ~/.oh-my-zsh/themes/
# Optionally, if you set this to "random", it'll load a random theme each
# time that oh-my-zsh is loaded.
ZSH_THEME="powerlevel9k/powerlevel9k"
# bureau, pmcgee, pure

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to change how often to auto-update (in days).
# export UPDATE_ZSH_DAYS=13

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# The optional three formats: "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
ZSH_CUSTOM=$HOME/.oh-my-zsh-custom

# Which plugins would you like to load? (plugins can be found in ~/.oh-my-zsh/plugins/*)
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(git history-substring-search macos z)

# User configurations

export PATH="$PATH:$HOME/bin:/usr/local/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/sbin:$HOME/.vim/plugged"
# export MANPATH="/usr/local/man:$MANPATH"
# brew install ruby
export PATH="/usr/local/opt/ruby/bin:$PATH"
# pip
export PATH="$HOME/Library/Python/2.7/bin:$PATH"
# npm
export PATH="$HOME/.npm-global/bin:$PATH"

source $ZSH/oh-my-zsh.sh

# source  $ZSH_CUSTOM/proxies.zsh
source $ZSH_CUSTOM/zshrc-custom.zsh

source $ZSH_CUSTOM/antigen.zsh

# Load the oh-my-zsh's library.
antigen use oh-my-zsh

# Bundles from the default repo (robbyrussell's oh-my-zsh).
antigen bundle git
antigen bundle command-not-found

# Syntax highlighting bundle.
antigen bundle zsh-users/zsh-syntax-highlighting
antigen bundle zsh-users/zsh-completions

# autocomplete plugins

# Tell Antigen that you're done.
# antigen apply


# -- Editor --------------------------------------------------------------------
EDITOR="code"

# -- Options -------------------------------------------------------------------
unsetopt correct_all
unsetopt correct

# -- Aliases -------------------------------------------------------------------
source $ZSH_CUSTOM/aliases.zsh

if [[ -f "$HOME/.aliases" ]]; then
    source $HOME/.aliases
fi

# -- Rbenv ---------------------------------------------------------------------
# export PATH="$HOME/.rbenv/bin:$HOME/bin:/usr/local/bin:$PATH"
# eval "$(rbenv init -)"

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Add RVM to PATH for scripting. Make sure this is the last PATH variable change.
export PATH="$PATH:$HOME/.rvm/bin"
export PATH="$HOME/.gem/ruby/2.7.0/bin:$PATH"

# The next line updates PATH for the Google Cloud SDK.
if [ -f '/Users/bobbysmith/Downloads/google-cloud-sdk/path.zsh.inc' ]; then . '/Users/bobbysmith/Downloads/google-cloud-sdk/path.zsh.inc'; fi

# The next line enables shell command completion for gcloud.
if [ -f '/Users/bobbysmith/Downloads/google-cloud-sdk/completion.zsh.inc' ]; then . '/Users/bobbysmith/Downloads/google-cloud-sdk/completion.zsh.inc'; fi

# BEGIN SNIPPET: Platform.sh CLI configuration
HOME=${HOME:-'/Users/bobbysmith'}
export PATH="$HOME/"'.platformsh/bin':"$PATH"
if [ -f "$HOME/"'.platformsh/shell-config.rc' ]; then . "$HOME/"'.platformsh/shell-config.rc'; fi # END SNIPPET

# export netlify token for interacting with command line to netlify
export NETLIFY_TOKEN=ntMMeVumGmmOMDhBL4M2Vm2GBG1YqdCKp6scYjs7hpM 

export NVM_DIR=~/.nvm
export GWPT_AUTH_TOKEN=ts6LKbmmTDUz8NHl
