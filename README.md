# Listen2Me

<img src="assets/listen2me.svg" width="100" alt="Listen2Me voice waveform">

**Speak your mind. Right where you are.**

Listen2Me is a free Windows desktop dictation app from Hangry Labs. Hold your
shortcut or go hands-free, speak into your microphone, and have the recognised
text typed into the text field you selected.

This repository contains public documentation, artwork and downloadable release
assets. The application is proprietary; its source is maintained separately.

## Downloads

Find installers and version-specific notes on the [Releases page](https://github.com/hangry-labs/Listen2Me/releases).
Use `Listen2Me-Setup.exe` from a release's assets. No Git checkout or development
tools are required. Preview releases may change frequently.

Current installers are **self-signed**, rather than signed by a publicly
trusted publisher. Windows may display a trust warning. Each release includes
SHA-256 checksums and a public publisher certificate for verification; installing
that certificate as a Windows trusted root is not required or recommended.
Download only from the official release page.

Listen2Me is early-access software. Releases on the stable update channel are
available to the in-app updater; that channel name does not imply a mature 1.0
release. Review the release notes before installing.

Requires Windows 10 version 1809 or newer / Windows 11, x64, a microphone and
Microsoft WebView2 Runtime. The installer runs per user without administrator
rights. Windows on ARM and non-Windows operating systems have not been qualified.

## Choose your speech recognition

The optional installation wizard can configure a hosted ASR endpoint or explicitly
download a local model. You can also set this up later inside the app.

- **Parakeet TDT v3 Q8:** recommended multilingual completed-take dictation, CPU
  or a compatible NVIDIA CUDA GPU.
- **Moonshine Medium Streaming:** recommended English live preview on CPU.
- **Moonshine Small Streaming:** lighter English live-preview alternative on CPU.
- **Nemotron 3.5 Q8:** multilingual live preview, CPU or compatible NVIDIA CUDA.
- Whisper Base, Small and Large v3 Turbo Q5 are also available. Turbo can be slow
  on CPU. Recognition and punctuation vary with speech, language and hardware.

Model/runtime downloads are optional and substantially larger than the installer.
Speech setup shows download sizes, progress and supported acceleration before
use. Local GPU runtimes are downloaded separately when selected. Model licences
and attribution remain in their downloaded folders.

Hosted recognition supports compatible OpenAI-style transcription APIs and Qwen
ASR streaming APIs. Enter your endpoint and use Check to discover capabilities.
Discovery does not send a recording. Hosted providers may apply charges or retain
audio under their own terms.

## Controls

The default shortcut is **Ctrl + Shift**; change it in Settings.

- **Hold:** speak while holding the shortcut, then release all its keys to finish.
- **Hands-free:** while keeping one modifier held, release and re-press the other
  within one second during the first five seconds. Either key works. Release
  the keys and keep talking; press the shortcut again to finish.
- **Discard:** release one modifier but keep the other held for two seconds.
- **Toggle:** select Toggle mode; one shortcut starts and the next finishes.
- **Write while I speak:** optional with streaming. Use Toggle/hands-free or a
  single non-modifier key such as F9 for live typing. Modifier holds buffer typing
  until the modifiers are released. Late revisions can stop insertion; the final
  transcript remains in Your words for recovery.

Select your destination text field first and keep it selected. Listen2Me does not
restore an earlier window or press Enter for you. It cannot reliably distinguish
all internal text fields in every editor. Review the result before sending it.
Cancelling stops further work; it does not remove text already typed or recall
audio already received by a hosted server.

## Privacy and updates

Local recognition processes audio on your computer. Hosted recognition sends it
directly to your chosen server. There is no built-in publisher analytics,
advertising or automatic upload of recordings/transcripts to Hangry Labs.
Session history is kept in process memory. Windows paging/crash dumps and the
receiving application's own saving behavior are separate.

Settings/models normally live in `%LOCALAPPDATA%/Listen2Me` and survive upgrades
and uninstall. Model weights can remain loaded between takes; Pause releases the
worker. Settings → Application updates offers an explicit check, verified
download and Install & restart action once stable releases are published.
Nothing checks or installs automatically. The installer preserves settings and
models; Fresh settings makes recoverable configuration/cache backups. Versions
older than 0.1.9 need one manual tray Quit before their first update.

The Support tab has an optional feedback form; no email or account is required.
The website receiving endpoint is still being prepared. Only submitted text,
type, optional email and app version/platform are sent; the website also sees
ordinary connection metadata. Failed submissions remain in the form and are not
retried automatically.

Read the [privacy notice](PRIVACY.txt), [software licence](LICENSE.txt) and
[third-party notices](THIRD_PARTY_NOTICES.txt). The app also includes About,
contacts, its licence and privacy notice offline. Listen2Me is provided
free of charge and as is. Recognition can be wrong.

## Contact

- General questions and privacy requests: [contact@hangrylabs.app](mailto:contact@hangrylabs.app)
- Product help: [support@hangrylabs.app](mailto:support@hangrylabs.app)
- Private vulnerability reports: [security@hangrylabs.app](mailto:security@hangrylabs.app)
- Ordinary bugs/features: [GitHub issues](https://github.com/hangry-labs/Listen2Me/issues)
- Project website: [Hangry Labs](https://hangrylabs.app/)

Hangry Labs is the project/publisher brand. No support response time or service
level is promised. Please do not post credentials, private recordings or sensitive
dictation in public issues.
