import { GitHub, Instagram, Telegram, WhatsApp } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'
import React from 'react'

function SocialMediaIcons() {
  return (
    <>
         <Box component="div" sx={{ m: "0 auto", textAlign: "center" }}>
        <IconButton aria-label="Github">
          <a
            href="https://github.com/orca0016"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub sx={{ color: "gray" }} />
          </a>
        </IconButton>
        <IconButton aria-label="Instagram">
          <a
            href="https://www.instagram.com/mm_mohammad.m/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram sx={{ color: "gray" }} />
          </a>
        </IconButton>
        <IconButton aria-label="Telegram">
          <a
            href="https://github.com/orca0016"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Telegram sx={{ color: "gray" }} />
          </a>
        </IconButton>
        <IconButton aria-label="WhatsApp">
          <a
            href="https://github.com/orca0016"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsApp sx={{ color: "gray" }} />
          </a>
        </IconButton>
      </Box>
    </>
  )
}

export default SocialMediaIcons