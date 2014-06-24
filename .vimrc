syntax on
set cindent
set tabstop=4
set shiftwidth=4
set expandtab
set ruler
set number
set wm=6
set ic
set hls
set nocp
filetype plugin on
let g:netrw_liststyle=3



let mapleader = ";"
nnoremap <leader>> :tabnext<CR>
nnoremap <leader>< :tabprev<CR>
nnoremap <SPACE><ESC> :tabnext<CR>

nnoremap <leader><leader> :vsplit<CR>:E<SPACE>~<CR><c-w><c-w><c-w>40>
nnoremap <SPACE>, <c-w>10<
nnoremap <SPACE>. <c-w>10>
nnoremap <SPACE>- <c-w>5-
nnoremap <SPACE>= <c-w>5+
nnoremap <leader><SPACE> <c-w><c-w>


inoremap cfwww http://www.caitlynfinn.com
inoremap cf@ caitlynannefinn@gmail.com
inoremap `it SUNYIT
inoremap `in SUNY Institute of Technology
