//#ENJOY BRO😍
// Credit: 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨 by      𝙎-𝙏𝞢𝞜
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sandrk766@gmail.com";
global.location = "Port-au-Prince, Haiti";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null"; 
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://testbot_2m27_user:Az7LOxZBevfQ7qiZ2aKDwQ4325uumm4v@dpg-crngb4o8fa8c738fs4b0-a.oregon-postgres.render.com/testbot_2m27";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "https://github.com/Bot-hostin/DRK-RAGNA-1.0";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/vRR63CN.jpeg,https://i.imgur.com/ovCfp9J.jpeg,https://i.imgur.com/edzo5dj.jpeg";
global.devs = "https://wa.me/50931461936 , https://wa.me/50931461936";
global.sudo = process.env.SUDO || "50931461936";
global.owner = process.env.OWNER_NUMBER || "237687868177";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/yBSoUuw.jpeg,https://i.imgur.com/XrUDzUl.jpeg,https://i.imgur.com/edjZiEx.jpeg,https://i.imgur.com/cdS2R7I.jpeg,https://i.imgur.com/u9FxdwH.jpeg,https://i.imgur.com/HEFIrto.jpeg,https://i.imgur.com/Fc0gIpE.jpeg,https://i.imgur.com/iaJtsma.jpeg,https://i.imgur.com/17yE9Uy.jpeg,https://i.imgur.com/ERGVvpZ.png"
global.waPresence = process.env.WAPRESENCE || " ";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://drk-tech-2.onrender.com/;
global.scan = "https://drk-tech-2.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMlBxYzl6QVN5K2NNQld2dXJ3WmJvS0syWWx5d0UzTFh1aHkyVEhtakIwVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVhHOVR2cjQ5K0VvM3dyWFdZUEUvOTBlUVlUSEExMlFpWGN6S2J5YnZDUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRXBkeERTeVY4a3FUdkR5dE1SaDNPS3VDc2cxK1pONGgzWktIR3pMVEg0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpZ2o0a3E1QzhHbFNsZ0lDY0JjYVUwQmRESXpEM2VxYzFNbHlwNVZIV0drPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1IWlBMalBCUmQxV2NzNFVGR2FMWVhOS3ZMaDlFTllFZ0k4M3h0b2Q0Vjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpxTWZyUUVGcnNBaExGUkFPU2VFbUhsK0JaQ09DTW5jN0I1SDBmeEQ4WFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0k1dmFZbTNhclFjdFVMQnFyUFIxQjAwYmd6U2JyS2dUdWtncUM0WkhYaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRkFHUkNtOElHdXZPbll4WUUzaWFsMURiNWpnWTBBb3krakhEalZoVERoND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpmTkRKUmlWNGVVcEZvdEYydVQrcDhZNkMxcVZ1U1RhdGZsZHZSU3ptaHY2TUVlbWV3bk1UNEFVR0hwNVFvajgvSXNHOTd4MS9IMlMyM0FoV3N5ekRnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEsImFkdlNlY3JldEtleSI6IkhWamxDT2Z6MlJKOXcrN29kTTBLdUkyRHU5d0xFYkdDVW9mU2R0aTI2QkE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlJyVHpZWWR5UUhPazNWcEpzTm9WV1EiLCJwaG9uZUlkIjoiZjY5NGZjNWEtMzZlOC00YmMzLWI3MzctOGYzZTkyNmJiNjQzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhaR3YzVG0yWnVlOE5TNkF2QnZVM0t5WURhRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsV3dQK3dGRWFidEFjUFpCcTN1eTMrUGdpL289In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNFdKUVc5N1oiLCJtZSI6eyJpZCI6IjIzNzY4Nzg2ODE3NzoyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkpFRVpZIFNNT0tFIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPUGI3UHdERU1TRHc3NEdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJQbTAyNzRBSTVmclJDempsbzZpdWxoOGRuV0lseFNMR2VEdlBCR0E0Y1ZrPSIsImFjY291bnRTaWduYXR1cmUiOiJ6Zk9neTJ1RldHS3FiL0RKRkxMNXJlYmRXbGZMVENFcXM0QUl1ZmtjaWhXV1MzcDNNNWQwMXQ5eWtRVk9ZZ1FyWDZSRWRCbHdWczdlcVdDL05aVStEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVG5ybnZFam8ybUZDSnZlOWl1Qmd4RmdUREtzaVMvb1FBSmFFbWo5ckJyaUxLelNWZjVlamR4SkVFa21KSkZ2cjBTZmFiZy9UWm5YNkMyVE9UVDNkQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzc2ODc4NjgxNzc6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUNXROdStBQ09YNjBRczQ1YU9vcnBZZkhaMWlKY1VpeG5nN3p3UmdPSEZaIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQxNzM0MzU0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdWTSJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨`",
  author: process.env.PACK_AUTHER || " 𝙎-𝙏𝞢𝞜",
  packname: process.env.PACK_NAME || "𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨",
  botname: process.env.BOT_NAME || "ST┘𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨𖤐",
  ownername: process.env.OWNER_NAME || "🌹⃟⃢👑 ĐÆ𝚪𝐊༒𝙎-𝙏𝞢𝞜🌹⃟⃢👑",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "STEN").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
}); 
