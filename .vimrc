if empty(glob('~/.vim/autoload/plug.vim'))
  silent !curl -fLo ~/.vim/autoload/plug.vim --create-dirs
    \ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
  autocmd VimEnter * PlugInstall --sync | source $MYVIMRC
endif

call plug#begin('~/.vim/plugged')
 Plug 'tomasr/molokai'
 Plug 'morhetz/gruvbox'
 Plug 'mxw/vim-jsx'
 Plug 'scrooloose/syntastic'
 Plug 'tpope/vim-fugitive'
 Plug 'tpope/vim-surround'
 Plug 'vim-airline/vim-airline'
 Plug 'pangloss/vim-javascript'
 Plug 'terryma/vim-expand-region'
 Plug 'airblade/vim-gitgutter'
call plug#end()

" colorscheme gruvbox
syntax on

filetype plugin indent on

" turn on line numbering
set number
set relativenumber

augroup numbertoggle
    autocmd!
    autocmd BufEnter,FocusGained,InsertLeave * set relativenumber
    autocmd BufLeave,FocusLost,InsertEnter * set norelativenumber
augroup END

set laststatus=2
" automatically populate the g:airline_symbols dictionary with the powerline
" symbols
let g:airline_powerline_fonts = 1

" By default, JSX syntax highlighting and indenting will be enabled only for
" files with the .jsx extension. If you would like JSX in .js files
let g:jsx_ext_required = 0

" Source the vimrc file after saving it
if has ('autocmd')
    augroup vimrc " Source vim configuration upon save
        autocmd! BufWritePost $MYVIMRC source $MYVIMRC | redraw | echom "Reloaded " . $MYVIMRC
        autocmd BufNewFile * echom ">^.^<"
    augroup END
endif " has autocmd

" change leader to space
let mapleader = "\<Space>"

" mappings
"
" map open .vimrc in split view with <Space>ev
nnoremap <leader>ev :vsplit $MYVIMRC<cr>
" save a file with <Space>w
nnoremap <leader>w :w<cr>


" remap keys
" remap v to vim-expand-region
" v to select one character
" vv to expand selection to word
" vvv to expand to paragraph
" <C-v> to go back to previous selection if went too far
vmap v <Plug>(expand_region_expand)
vmap <C-v> <Plug>(expand_region_shrink)

set shiftwidth=4 " number of spaces to use for autoindenting
set shiftround " use multiple of shiftwidth when indenting with '<' and '>'
set ignorecase " ignore case when searching
set smartcase  " ignore case if search pattern is all lowercase,
               " case-sensitive otherwise
set smarttab   " insert tabs on the start of a line according
               " to shiftwidth, not tabstop
set expandtab " insert space characters whenever the tab key is pressed
set nobackup   " don't make backup or swap file
set noswapfile
set mouse=a    " don't judge
set shell=/bin/bash
