<img src="images/banner-head.png"></img>

DMV  (Discord Malware Varients) is a repository made to bring light to harmful programs used by bad actors in order to steal sensitive information from victims primarily over discord. Many methods of attacks will be displayed through out this
document.

## <a id="index"></a>📚 Index

- [📚 Index](#index)
- [🧾 Known Stealers](stealers/STEALERS.md)
- [💬 Information](#info)
- [🛑 Popular scams](#scams)
- [✅ Reporting a scam](#report)
- [👓 Removal of malicious programs](#removal)
- [🔨 Contributors](#contributors)
- [🧩 Contributing](#contributing)

## <a id="info"></a>💬 Information
What is a "discord token"?

A token is string based on multiple properties of an account used by discord in order to authorize a specific user. This string however can be used as a key to directly access a discord users account where a malicious hacker may steal sensitive information such as emails, phone numbers, billing information, and more.

Due to this access, many malicious programs and methods have sprung up in order to automate the proccess of stealing. These programs are prevelant on github and are also promoteed through the use of "mass dming", where by many botted discord accounts will directly message all users in a server to join their guild or run their program. This programs were also embeded into tools that users would run without knowing malware was inside

As these programs evolved, they became much more advanced, and were useful for more than just discord tokens. Some of these stealers developed password and cookie stealing from popular browsers, Crypto wallet stealers for popular crypto wallets like Exodus and Metamask. 

Some common features of the more advanced grabbers are listed below:
- Discord token
- Discord password
- Discord email
- Badges
- Autmatically purchase nitro for self
- Credit card info (number, expiry date, cvv)
- Internet IP
- Browser passwords and cookies (chromium usually)
- Cryptocurrency wallets (Exodus, Metamask, etc.)
- No ativirus detections on popular AV's (Windows Defender, etc.)

Stores attempting to sell logged accounts also popped up as seen below:

<img src="images/selling.png" width="50%">

## <a id="scams"></a>🛑 Popular scams
### Game tester scam
In the game tester scam, the scammer asks you to test a game for a school project, attacthing a executable the victim will run. Victims may be eager to be a beta tester for a new game and will unknowingly run a malicious executable stealing their information.

[Reddit: The Recent "Try my game" Discord Scam: Explained](https://www.reddit.com/r/discordapp/comments/s1f1vs/the_recent_try_my_game_discord_scam_explained/)

### "You've been exposed in this server" scam
In this scam someone sends you a message along the lines of "You have been exposed join this discord". Upon joining a bot will ask you to scan a QR code for verification. This QR code however grant the owner of the code direct access to your account if scanned by the phone of the account holder. This is an exploit in the relatively recent update to discord allowing your logged in phone to grant any desktop instant access to your discord account through a QR code. There is a warning in the app to be careful though this hasnt been enough for some people. Obviously your photos have not been leaked and the ultimate goal of the scammer is to get access to your account. This method exploits the self-consciousness and fear of the victim and does not even require any outside program.

![Screenshot](images/exposed.png)

[Discord Name and Shame Scam Explained]("https://news.trendmicro.com/2022/07/08/discord-name-and-shame-scam-server-shaming/)

## <a id="report"></a>✅ Reporting a scam

To report this scam go to [Submit a request](https://support.discord.com/hc/en-us/requests/new)
and fill out the forum


## <a id="removal"></a>👓 Removal of malicious programs

If the scammer can still successfully acess your discord account after  you have removed the malware and changed your discord password, your discord proccess may be injected. 

This malware can be removed by simply deleting discord and reinstalling. In order to do this you must:
1. Open your system tray, right click discord, and click quit
2. Press Win + R and type `%localappdata%`, then press OK
3. Proceed to look through this folder for a folder named `Discord`
4. Delete the `Discord` folder and ensure it is completley gone from this direcroty
5. Reinstall discord from the official discord website and change your password again

## <a id="contributors"></a>🔨 Contributors

- Addi
    - [Website](https://www.addidix.xyz)
    - [Email](mailto:addidix@proton.me)
    - [Discord](https://paste.addi00000.repl.co/?p=notaddidix%231400)
- Credit
    - [Email](mailto:credit@fbi.ac)
    - [Discord](https://paste.addi00000.repl.co/?p=guap%230420)
- mmmly
    - [Website](https://morimolymoly.com/)
    - [Email](mailto:morimolymoly@gmail.com)

## <a id="contributing"></a>🧩 Contributing
- Fork, edit, and make a pull request.
- Make sure to make a useful commit message and description on the pull request.
- Use existing data as a guide for your addition and follow the patterns if applicable.
<img src="images/banner-foot.png"></img>