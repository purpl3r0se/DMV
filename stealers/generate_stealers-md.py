import json
import os

use_full_path = bool(os.getenv("full_path"))

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

def get_maintenace_status(stealer: dict) -> str:
    maintenance_status = ""
    maintained = stealer.get('maintained', "unknown")
    if maintained == "no":
        maintenance_status = "❌ Not maintained"
    elif maintained == "somewhat":
        maintenance_status = "🟡 Somewhat maintained"
    elif maintained == "unknown":
        maintenance_status = "🤷‍♂️ Maintenance status unknown"
    elif maintained == "yes":
        maintenance_status = "✅ Maintained"
    return maintenance_status

with open(f'{"./stealers/" if use_full_path else ""}stealers.json', 'r', encoding='utf-8') as f:
    stealers = json.load(f)

with open(f'{"./stealers/" if use_full_path else ""}STEALERS.md', 'w', encoding='utf-8') as f:
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

    f.write('## List\n')

    for stealer in stealers:
        stealer = stealers[stealer]
        f.write(f'### {stealer["name"].title()} | Creator: {"Unknown" if stealer["owner"] == "" else stealer["owner"]}\n')
        f.write(f"    {'🔓 Open' if stealer['open source'] else '🔒 Closed'} source\n")
        f.write(f"    {'💰 Paid' if stealer['paid'] else '🆓 Free'}\n")
        f.write(f"    💻 Coded with {__LANGS__[stealer['language']]} \n")
        if stealer['resellable']:
            f.write("    💸 Has resale program\n")

        maintenance_status = get_maintenace_status(stealer)
        f.write(f"    {maintenance_status}\n")

        if 'telegram' in stealer:
            f.write(f"    💬 Telegram: t.me/{stealer['telegram']}\n")
        if stealer['resellable']:
            for reseller in stealer['resellers']:
                reseller = stealer['resellers'][reseller]
                f.write(f"    ↳ {reseller['name']}\n")
                f.write(f"        {'🔓 Open' if reseller['open source'] else '🔒 Closed'} source\n")
                f.write(f"        {'💰 Paid' if reseller['paid'] else '🆓 Free'}\n")
                f.write(f"        💻 Coded with {__LANGS__[reseller['language']]} \n")
                maintenance_status = get_maintenace_status(reseller)
                f.write(f"        {maintenance_status}\n")
                if 'telegram' in reseller:
                    f.write(f"        💬 Telegram: t.me/{stealer['telegram']}\n")
