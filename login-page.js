{\rtf1\ansi\ansicpg1252\cocoartf1504\cocoasubrtf840
{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red154\green154\blue154;\red255\green255\blue254;\red0\green0\blue0;
\red0\green0\blue255;\red144\green1\blue18;\red19\green120\blue72;}
{\*\expandedcolortbl;;\cssrgb\c66667\c66667\c66667;\cssrgb\c100000\c100000\c99608;\cssrgb\c0\c0\c0;
\cssrgb\c0\c0\c100000;\cssrgb\c63922\c8235\c8235;\cssrgb\c3529\c53333\c35294;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl420\partightenfactor0

\f0\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 //code for switching themes, more on the html\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl420\partightenfactor0
\cf5 \cb3 \strokec5 const\cf4 \strokec4  btn = document.querySelector(\cf6 \strokec6 ".btn-toggle"\cf4 \strokec4 );\cb1 \
\cf5 \cb3 \strokec5 const\cf4 \strokec4  currentTheme = localStorage.getItem(\cf6 \strokec6 "theme"\cf4 \strokec4 );\cb1 \
\cf5 \cb3 \strokec5 if\cf4 \strokec4  (currentTheme == \cf6 \strokec6 "light"\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\sl420\partightenfactor0
\cf4 \cb3   document.body.classList.add(\cf6 \strokec6 "light-theme"\cf4 \strokec4 );\cb1 \
\cb3 \}\cb1 \
\pard\pardeftab720\sl420\partightenfactor0
\cf5 \cb3 \strokec5 let\cf4 \strokec4  theme = \cf6 \strokec6 "light"\cf4 \strokec4 ;\cb1 \
\pard\pardeftab720\sl420\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 if\cf4 \strokec4  (document.body.classList.contains(\cf6 \strokec6 "light-theme"\cf4 \strokec4 )) \{\cb1 \
\cb3     theme = \cf6 \strokec6 "dark"\cf4 \strokec4 ;\cb1 \
\cb3   \}\cb1 \
\cb3   localStorage.setItem(\cf6 \strokec6 "theme"\cf4 \strokec4 , theme);\cb1 \
\
\
\
\pard\pardeftab720\sl420\partightenfactor0
\cf5 \cb3 \strokec5 const\cf4 \strokec4  loginForm = document.getElementById(\cf6 \strokec6 "login-form"\cf4 \strokec4 );\cb1 \
\cf5 \cb3 \strokec5 const\cf4 \strokec4  loginButton = document.getElementById(\cf6 \strokec6 "login-form-submit"\cf4 \strokec4 );\cb1 \
\cf5 \cb3 \strokec5 const\cf4 \strokec4  loginErrorMsg = document.getElementById(\cf6 \strokec6 "login-error-msg"\cf4 \strokec4 );\cb1 \
\
\
\pard\pardeftab720\sl420\partightenfactor0
\cf4 \cb3 loginButton.addEventListener(\cf6 \strokec6 "click"\cf4 \strokec4 , (e) => \{\cb1 \
\cb3     e.preventDefault();\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  username = loginForm.username.value;\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  password = loginForm.password.value;\cb1 \
\
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (username === \cf6 \strokec6 "user1"\cf4 \strokec4  && password === \cf6 \strokec6 "p@ssw0rd!"\cf4 \strokec4 ) \{\cb1 \
\cb3         alert(\cf6 \strokec6 "You have successfully logged in."\cf4 \strokec4 );\cb1 \
\cb3         location.reload();\cb1 \
\cb3     \} \cf5 \strokec5 else\cf4 \strokec4  \{\cb1 \
\cb3         loginErrorMsg.style.opacity = \cf7 \strokec7 1\cf4 \strokec4 ;\cb1 \
\cb3     \}\cb1 \
\
\cb3 \}\cb1 \
\cb3 )\cb1 \
\
}