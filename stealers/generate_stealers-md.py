import json

__LANGS__ = {
    'py': 'Python',
    'js': 'JavaScript',
    'cs': 'C#',
    'java': 'Java',
    'c': 'C',
    'cpp': 'C++',
    'go': 'Go',
    'bat': "Batch",
    'rs': 'Rust'
}

with open('stealers.json', 'r', encoding='utf-8') as f:
    stealers = json.load(f)

with open('STEALERS.md', 'w', encoding='utf-8') as f:
    f.write('# Stealers\n')
    f.write('## Breakdown\n')

    langs = []
    for stealer in stealers:
        stealer = stealers[stealer]
        if stealer['language'] not in langs:
            langs.append(__LANGS__[stealer['language']])
    langs.sort()

    for lang in __LANGS__:
        if langs.count(__LANGS__[lang]) < 1:
            continue
        f.write(f"- {__LANGS__[lang]}\n")
        f.write(f"    - {langs.count(__LANGS__[lang])} occurences\n")

    for stealer in stealers:
        stealer = stealers[stealer]
        f.write(
            f'### {stealer["name"].title()} | Creator: {"Unknown" if stealer["owner"] == "" else stealer["owner"]}\n')
        f.write(
            f"    {'🔓 Open' if stealer['open source'] else '🔒 Closed'} source\n")
        f.write(f"    {'🆓 Free' if not stealer['paid'] else '💰 Paid'}\n")
        f.write(f"    💻 Coded with {__LANGS__[stealer['language']]} \n")
        if stealer['resellable']:
            f.write(
                "    💸 Has resale program\n")
        if 'notmaintained' in stealer and stealer['notmaintained'] is True:
            f.write(
                "    ❌ Not Maintained\n")
        if 'telegram' in stealer:
            f.write(
                f"    💬 Telegram: t.me/{stealer['telegram']}\n")
        if stealer['resellable']:
            for reseller in stealer['resellers']:
                reseller = stealer['resellers'][reseller]
                f.write(f"    ↳ {reseller['name']}\n")
                f.write(
                    f"        {'🔓 Open' if reseller['open source'] else '🔒 Closed'} source\n")
                f.write(
                    f"        {'🆓 Free' if not reseller['paid'] else '💰 Paid'}\n")
                f.write(
                    f"        💻 Coded with {__LANGS__[reseller['language']]} \n")
                if 'notmaintained' in reseller and reseller['notmaintained'] is True or 'notmaintained' in stealer and stealer['notmaintained'] is True:
                    f.write(
                        "        ❌ Not Maintained\n")
                if 'telegram' in stealer:
                    f.write(
                        f"        💬 Telegram: t.me/{stealer['telegram']}\n")
