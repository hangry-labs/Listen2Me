# Listen2Me

![Listen2Me by Hangry Labs: Speak your mind. Right where you are.](assets/branding/listen2me-horizontal.webp)

**Speak your mind. Right where you are.**

[Download for Windows](https://github.com/hangry-labs/Listen2Me/releases/latest/download/Listen2Me-Setup.exe) · [Product website](https://listen2me.hangrylabs.app/) · [User guide](https://hangry-labs.github.io/Listen2Me/)

Listen2Me lets you write with your voice in the apps you already use. Click a
text field, hold **Ctrl + Shift**, speak, and release to type. Use it for messages,
emails, documents, game chat or AI prompts without switching away from your work.

**Free to use. No account, subscription or dictation allowance.** Download a
speech model to recognise your voice on your own computer, or connect your own
speech-to-text server.

**Now in beta: 0.7.24.** We'd love to hear what works well and what could be better.

## See it in action

![Listen2Me demo showing dictation, live typing and custom phrases](assets/demo/listen2me-demo.webp?v=20261104)

A 67-second silent recording of Listen2Me writing into another application.

| Dictate | Connection |
| --- | --- |
| ![Dictate screen with waveform, shortcut controls and recognised words](assets/screenshots/dictate.webp) | ![Connection screen with selected model, language and live-preview options](assets/screenshots/connection.webp) |

Small interface details may change as the beta improves.

## What you can do

- **Write where you're working:** dictate into the selected text field, including game chat.
- **Keep speech local:** use your CPU or a supported NVIDIA GPU. Local recognition works offline after setup.
- **Go hands-free:** toggle listening for longer passages, or hold your chosen shortcut for a quick message.
- **See words as you speak:** compatible streaming models show a live preview and can optionally type while you talk.
- **Make your own commands:** replace spoken phrases with text, a new line or an Enter press. Keep separate presets for work, games and everyday use.
- **Clean up hesitation sounds:** remove configurable fillers such as “uh” and “um” without another AI service.
- **Spell a name:** use a phrase such as “spell name” to join recognised letters into a name.
- **Transcribe a recording:** open an audio file and copy its transcript from Your words.
- **Recover a take:** copy your recent transcript if the wrong field was selected or typing was interrupted.

## Downloads

1. Download **[Listen2Me-Setup.exe](https://github.com/hangry-labs/Listen2Me/releases/latest/download/Listen2Me-Setup.exe)**.
2. Run the installer and choose a local speech model, your own server, or **Set up later**.
3. Select a text field, hold **Ctrl + Shift**, speak, then release all keys to type.

Requires **Windows 10 version 1809 or newer, or Windows 11, x64**, and a microphone.
A dedicated GPU is optional. Setup can install Microsoft's WebView2 Runtime if
it is missing, with your approval. Listen2Me installs for your Windows user
without requiring administrator rights.

Local speech models download separately; setup shows their size and progress.
Interrupted downloads keep partial progress where the download server supports
it. Once your model is installed, local dictation needs no internet connection.
Normal updates preserve your settings and downloaded models.

### Download safety

Download only from this repository's [official Releases](https://github.com/hangry-labs/Listen2Me/releases).
Current installers are **self-signed**, so Windows may show a publisher trust
warning. Releases include checksums and the public publisher certificate for
verification. You do not need to install that certificate as a trusted root.

Listen2Me is beta software. Check your transcript before sending an important
message or relying on it for something sensitive.

## Choose your speech recognition

Open **Connection → Change** whenever you want to switch. The chooser shows
compatible models, supported languages and available CPU/GPU options.

- **Parakeet TDT v3 Q8:** our recommended choice for multilingual dictation after you finish speaking, on CPU or supported NVIDIA GPU.
- **Moonshine Medium Streaming:** our recommended choice for English live preview on CPU.
- **Moonshine Small Streaming:** a lighter English streaming option.
- **Nemotron 3.5 Q8:** multilingual streaming on CPU or supported NVIDIA GPU. Check the model's language list before choosing it.
- **Whisper:** Base, Small and Large v3 Turbo Q5 are also available. Larger models can be much slower on CPU.

Not every model supports every language or live transcription. Search the
language picker by name or code to find your language. Recognition quality and
punctuation depend on the model, your microphone and how you speak.

Already run a speech server? Choose **Endpoint**, enter its address and optional
API key, then check the connection. Compatible OpenAI-style transcription and
Qwen ASR streaming servers are supported. Hosted recognition sends audio to that
server; its operator's privacy terms and any charges apply.

## Controls

Change the shortcut in **Settings** to suit your keyboard and workflow.

- **Hold to talk:** hold the shortcut while speaking, then release all keys to finish.
- **Toggle:** select Toggle mode; press the shortcut once to start and again to finish.
- **Hands-free from Ctrl + Shift:** keep one key held, release and quickly press the other again within one second, during the first five seconds. Then release both and keep speaking. Press the shortcut again to finish. Either key can be the one you re-press.
- **Discard a take:** release one modifier but keep the other held for two seconds, until the cancellation indicator completes.

Select your destination field before starting and keep it selected. Listen2Me
uses keyboard input to write there; it does not restore a previous window.
Some editors cannot reliably identify a change between their internal fields.
Your transcript stays available in **Your words** if you need to copy it instead.

With **Write while I speak**, use Toggle, hands-free or a single non-modifier
key such as F9. Holding Ctrl + Shift buffers typing until the modifiers are
released. Cancelling stops further work, but cannot erase text already typed
or recall audio already sent to a hosted server.

## Transcribe an audio file

In **Dictate**, choose **Transcribe audio file** below the microphone indicator.
Your selected speech model processes the recording and puts the transcript in
**Your words** and recent takes, ready to copy. It does not type it into another
application automatically.

Files can be up to **25 MiB and 10 minutes**. WAV and MP3 are supported; other
formats depend on Windows audio support. Local models process the file locally;
a hosted endpoint receives its audio. You can cancel without losing earlier takes.

## Optional speech cleanup

**Remove hesitation sounds** is on by default. Use the **+** beside it in Settings
to choose which built-in sounds to remove, add your own words or phrases, or
restore the default list. Turn the main switch off to keep fillers in your text.

The built-in list covers “uh”, “um”, “oh” and their stretched forms. “Um” and
“oh” stay intact when you explicitly choose a non-English language. Normal words,
quoted text and your replacement phrases are preserved. Cleanup happens locally
and does not send your transcript to another AI service.

## Custom phrases

Open **Phrases → Add phrase** to choose what happens when you say something:

- Replace **“my page”** with your website address.
- Map **“hashtag new line”** to **Shift + Enter**.
- Map **“hashtag enter”** to **Enter**.
- Replace a personal filler phrase with nothing by leaving the replacement empty.

These examples are suggestions, not automatic commands. Choose wording that is
unlikely to occur in ordinary speech. Enter can submit a form or send a message;
the receiving app decides what the key does.

Matching ignores capitalisation. Use **Add wording** for different ways of saying
the same command. Presets let you keep separate sets for a game, project or other
situation; only the selected set is active. Everything saves on your computer.

### Spelling names

Add a phrase such as **“spell name”** and choose **Join spelled names** as its
action. Say “spell name A D A M”, “spell name A-D-A-M” or “spell name ADAM” to
write **Adam**. Use one name per command. This joins the letters your speech model
recognises; it cannot recover letters the model mishears.

## Settings

Settings save automatically. You can change your shortcut, typing speed,
recording limit and live-preview preferences, or use **Restore defaults** if
you want to start again. Your selected model and downloaded files are kept.

Local models stay ready in memory by default for a quicker start. Choose a
memory-saving option to load on demand and unload between takes instead.
Neither model loading nor starting the app opens the microphone by itself.

**Start with Windows** is optional and off by default. It starts Listen2Me in
the tray when you sign in. The default recording limit is one hour; hosted
servers may impose shorter limits of their own.

## Privacy and updates

- **Local mode:** your audio is processed on your computer. It works offline after the initial model download.
- **Your own endpoint:** audio goes to the speech server you choose.
- **No publisher analytics or advertising:** Listen2Me does not automatically upload your recordings or transcripts to Hangry Labs.
- **Recent takes stay in memory:** they are available during the session, rather than saved as a recording archive.
- **Optional feedback:** sending feedback shares your message, optional reply email, app version/platform. The website receives normal connection information and uses it to limit repeated submissions. No account is required.

Updates are checked through GitHub when the app opens, unless you disable that
option. The footer also offers a manual check. You decide whether to download
and install an update; it is not installed silently. Model downloads and hosted
speech services make their own network connections. Microsoft's WebView2 Runtime
has its own update behaviour.

Settings and models normally live in `%LOCALAPPDATA%/Listen2Me`. They survive
normal updates and uninstall, so you can keep them if you reinstall.

You can read the [privacy notice](PRIVACY.txt), [software licence](LICENSE.txt)
and [third-party notices](THIRD_PARTY_NOTICES.txt) here or in the app's About tab.
Listen2Me is proprietary freeware, provided free of charge and as is.

## Contact

Have a suggestion or something that doesn't work? Use **Support Us → Send
feedback** in the app, or [open a GitHub issue](https://github.com/hangry-labs/Listen2Me/issues).
Please keep private recordings, credentials and sensitive transcripts out of public issues.

- Help using Listen2Me: [support@hangrylabs.app](mailto:support@hangrylabs.app)
- General questions and privacy: [contact@hangrylabs.app](mailto:contact@hangrylabs.app)
- Private security reports: [security@hangrylabs.app](mailto:security@hangrylabs.app)
- More free tools from Hangry Labs: [hangrylabs.app/software](https://hangrylabs.app/software)
