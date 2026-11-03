# Listen2Me project website

GitHub Pages builds the root README using Jekyll, the same pinned lean builder
and Pages-compatible plugins used by Faster Qwen3-TTS Studio. The layout and
teal artwork follow the official [Listen2Me product page](https://listen2me.hangrylabs.app/).
The README remains the guide's content source; no second HTML copy is maintained.

GitHub settings: Pages, Deploy from a branch, `main`, `/ (root)`.
The project path is case-sensitive: `https://hangry-labs.github.io/Listen2Me/`.
There is no custom-domain migration and no application build or model download.

For an isolated local build, mount this public checkout at `/source` and an
empty output directory at `/output` in the image built from `site/Dockerfile`:

```sh
docker build -f site/Dockerfile -t listen2me-pages site
docker run --rm -v "$PWD:/source:ro" -v "$PWD/build/pages:/output" listen2me-pages build --source /source --destination /output --config /source/_config.yml --safe --trace
```

Serve generated files under `/Listen2Me/`, matching `baseurl`. Excluded builder
files, release notes, Git metadata and local caches must not appear in output.
Keep exact public-file validation in the repository workflow when adding assets.
Do not add application source, runtime state, credentials, analytics or remote
JavaScript dependencies to this website.

The site documents current published downloads; changing it does not publish or
replace an installer. The original product domain remains available separately.
