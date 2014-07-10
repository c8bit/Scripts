syntax on
filetype plugin on

set cindent
set tabstop=4
set shiftwidth=4
set shiftround
set expandtab
set ruler
set relativenumber
set wm=6
set ic
set hls



let g:netrw_liststyle=3
let mapleader = ";"

" Tab Bindings
nnoremap <leader><TAB> :tabprev<CR>
nnoremap <TAB> :tabnext<CR>

" Split Window Bindings
nnoremap <leader><leader> :vsplit<CR>:E<CR><c-w><c-w>
nnoremap <SPACE>, <c-w>10<
nnoremap <SPACE>. <c-w>10>
nnoremap <SPACE>- <c-w>5-
nnoremap <SPACE>= <c-w>5+
nnoremap <leader><SPACE> <c-w><c-w>

" Movement Bindings (FIX THESE they can potentially delete lines when used at
" beginning/end of file)
nnoremap - ddj^P
nnoremap _ ddk^P

" Misc Bindings
inoremap kj <esc>
inoremap cfwww http://www.caitlynfinn.com
inoremap cf@ caitlynannefinn@gmail.com
inoremap `it SUNYIT
inoremap `in SUNY Institute of Technology
