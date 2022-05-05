# Add yourself some shortcuts to projects you often work on
# Example:
#
# brainstormr=/Users/robbyrussell/Projects/development/planetargon/brainstormr
#
alias ys='yarn start'

alias gstat='git status -s'
# ignore *-lock files on git diff
alias gd="git diff -- ':!package-lock.json' ':!yarn.lock'"
# install trash, (either from the macports or by the brew.)
alias trash="rmtrash"
alias del="rmtrash"       # del / trash are shorter than trash

alias rm="echo Use 'del', or the full path i.e. '/bin/rm'"

# noblob for homebrew youtube-dl
# alias youtube-dl='noglob youtube-dl'

alias ssbg='nohup ~/.oh-my-zsh-custom/screenshot.sh </dev/null &'
alias ss='~/.oh-my-zsh-custom/screenshot.sh'

alias weather='curl http://wttr.in/37.553761,-77.460258'
alias weather2=ansiweather
# alias weather='wego'

alias pi='echo "scale=1000;4*a(1)" | BC_LINE_LENGTH=1004 bc -l'

# alias c="pygmentize -O encoding=UTF-8 -g"

alias config='/usr/bin/git --git-dir=$HOME/.cfg/ --work-tree=$HOME'

# fix frozen facetime camera
alias fixfrozencamera='sudo killall VDCAssistant'

alias airport='/System/Library/PrivateFrameworks/Apple80211.framework/Versions/A/Resources/airport'

# implement python3
alias python="/usr/local/bin/python3"
alias pip="/usr/local/bin/pip3"

function server() {
    local port
    port="${1:-8000}"
    open "http://localhost:${port}/"
    python -m SimpleHTTPServer "$port"
}

function ffmpeg-sidebyside() {
    mkdir -p out
    local leftfilename=$(basename "$1")
    local rightfilename=$(basename "$2")
    leftfilename="${leftfilename%.*}"
    rightfilename="${rightfilename%.*}"
    echo "$leftfilename"
    echo "$rightfilename"
    /usr/local/bin/ffmpeg -i "$1" -i "$2" -filter_complex "[0:v:0]pad=iw*2:ih[bg]; [bg][1:v:0]overlay=w[combined]; [combined]scale=1024:-2" "out/combined$leftfilename-$rightfilename.mp4" &&
    /usr/local/bin/rmtrash "$1"
    /usr/local/bin/rmtrash "$2"
    
}

fancy-ctrl-z () {
    if [[ $#BUFFER -eq 0 ]]; then
        BUFFER="fg"
        zle accept-line
    else
        zle push-input
        zle clear-screen
    fi
}
zle -N fancy-ctrl-z
bindkey '^Z' fancy-ctrl-z

# Usage: compresspdf [input file] [output file] [screen*|ebook|printer|prepress]
compresspdf() {
    hash gs 2>/dev/null || { echo >&2 "I require ghostscript but it's not installed. Install gs with 'brew install ghostsript'  Aborting."; exit 1; }
    gs -sDEVICE=pdfwrite -dNOPAUSE -dQUIET -dBATCH -dPDFSETTINGS=/"${3:-"screen"}" -dCompatibilityLevel=1.4 -sOutputFile="$2" "$1"
}

# yell out BETH!
play-beth() {
    osascript -e 'get volume settings'
    SwitchAudioSource -s 'Display Audio'
    osascript -e "set Volume 10"
    afplay $HOME/Music/beth.m4a
    osascript -e "set Volume 3"
    SwitchAudioSource -s 'Built-in Output'
    osascript -e 'get volume settings'
}

play-airhorn() {
    osascript -e 'get volume settings'
    SwitchAudioSource -s 'Display Audio'
    osascript -e "set Volume 5"
    afplay $HOME/Music/airhorn.m4a
    osascript -e "set Volume 2"
    SwitchAudioSource -s 'Built-in Output'
    osascript -e 'get volume settings'
}

# add entry to dayone
journal() {
    dayone2 new "$1" -t hourly "$2"
}
