{\rtf1\ansi\ansicpg1252\cocoartf2865
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 window.onSpotifyWebPlaybackSDKReady = () => \{\
    const player = new Spotify.Player(\{\
        name: 'HMD 110 4G',\
        getOAuthToken: async cb => \{\
            // This calls your Vercel function every time a new token is needed\
            const res = await fetch('https://your-vercel-project.vercel.app/api/token');\
            const data = await res.json();\
            cb(data.access_token);\
        \}\
    \});\
    player.connect();\
\};}