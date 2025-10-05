require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAHuYRVvLqvXDUwQAAHEHAAAKAAAAY3JlZHMuanNvbpVUW5OiOBT+L3nVGgURgaquWkBFRFrxBrq1DwECRK6GgOCU*30LnZ6eh93ZXp5CkjrnO98l30GW4xIZqAXSd1AQXEOKuiVtCwQkoFRBgAjoAx9SCCSAZ+Yx5y7HIxlDx+HrxXXNzV3LYfPl0J1wTuRYpyba9DQ2fAOPPigqN8HebwoSMQxuJ94R70UpaFWjuPlEXkYcuz5YmdPwx+VgfhHPYS8p38CjqwgxwVk4KyKUIgITA7UbiMnX4KcaL470aaN7vcsY+2qBDqtVkqru4HSlNlPYJlnK6j6IUv1r8NFJDfiBMWEWw4FthtOCGZ4SdqEkbKvN7opI*LvBQtgU09kLfonDDPm6jzKKaftl3q+rsZV7Bm7yoljwIyzUZskMjDjXdbmO0yPlDHwo5uE8zr8G*Fzttrd5OzostuZmR2GTZXdXUU31eOfGaFdpfnly7AvOo*BX4Bvy4ZX4**DOzexMd5P2pg+wFwar1BkVSqHK90KIoZyPPN+gGtPogyT+Gvz27qyrd8VOUttKZG9PT611ceurw8otRMSMjqtVol2q7cH8hA9pRX6Hcj9NL0kq7N9DxY6TLX*P1*4ta3fKbTSbTryzbouhFqu79XJ7vfOLwHD20dRkesMmiu3tcsQIsjAINL+3COgCzfc8tKeX8O05UYxa3QcS8+gDgkJcUgIpzrPnHj*uA+jXO+QRRJ*0AspU75F4PWRUDmC1PGA9eF+hZSNukEc5Sxug3l0QUs0XzTfQBwXJPVSWyF*gkuakNVFZwhCVQPrzrz7IUENfwnXtRkwfBJiU9JBVRZJD*0PVj0PoeXmV0V2beWq3QARIw89tRCnOwrLjscog8SJcIzWCtARSAJMS*ZwQEeQDiZIK*Uytmvsd8UdrNLUNcQv6IH0Kgn0gAXbMTUR2wnGTyVDixD*Kb7euLCyKbxmioA+S5zVGZERhPJqMeGEiMkx3szt4*ETYFfQRhTgpgQTU1V4QJp4yWxoqFjxNk2ehrIYy+Jzowxov6rXBcIpPwsYaGLdC7wn4dLwYjT9xx7YwwCdX4ZaFLcbjJDu9*UORLlur29QUUbFcsrzD1zPoKodcUZDl9ipNRfWt1EsuabCi0hnZBcfTURv5ln1pG2U+deKezbzfC10O2X2TWlQ290XvXbXeum4+qrGHfm22O54Do3FT0uapwLs22rOn5ZAGI31dJytuHQbRtWcv4rCML4frzDRIxirt0tmwflz29pvJwboxh9V5RRiKbXzQWZRF8su0z9AkPx4r*LRTp1X3G2D0zH4GOwX*W7sX8M5iw0f*lxo*XpN*SaSyrUWZSzfT4aYtjd2m1tP5qS0dxPaO9YZLtRtS4bE+r89nFjwef*VBkUAa5CQFEoCZT3Lsgz4gedV5Vs+C*DfNVHmoK9Zr8gSWVP7MwR6nqKQwLYDETMYiLzJDVnzd2pC8WMAyAhLY2PFY6TzdykWxo5B+pArI3WduXfD4G1BLAQIUAxQAAAgIAHuYRVvLqvXDUwQAAHEHAAAKAAAAAAAAAAAAAACAgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHsEAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254792744770',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'SIGEI-KIM',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
