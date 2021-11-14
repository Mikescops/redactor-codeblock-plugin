# 🖹 Redactor Codeblock Plugin
Imperavi Redactor Plugin for adding Code Blocks in your toolbar (multiple languages supported).

This plugin creates `<pre><code></code></pre>` tags that allows [highlight.js](https://highlightjs.org/) to style your code depending on the language.

## Usage

A new button is available in the Redactor toolbar, to insert a new code block, the dropdown will suggest you a pre-selected list of languages for syntax highlighting.

You can select text in your content to convert it to a code block.

You can also remove a codeblock by putting your cursor on it and select any language in the dropdown.


## Supporting more languages

In the script, you can edit the `this.languages` to add more code languages to it, the ones you're likely to use.

The are around 196 languages supported, [check them here](https://highlightjs.org/static/demo/).

## How to install in Bolt CMS

Clone this repository (or copy js plugin file content) to the paht: `/public/assets/redactor/_plugins/codeblock/codeblock.js`.

Edit the `config/bolt-redactor.yaml` file with the following content:

```yaml
plugins:
  codeblock: ['../_plugins/codeblock/codeblock.js']
```

Make sure to add codeblock in the pugins line too:

```yaml
plugins: [ fullscreen, table, video, imagemanager, definedlinks, alphalist, codeblock]
```

## Resources

- [Imperavi - Redactor API Services](https://imperavi.com/redactor/docs/api-services/)
- [Imperavi - How to create a plugin for Redactor](https://imperavi.com/redactor/docs/how-to/create-a-plugin/)

## Maintainer

| [![twitter/mikescops](https://avatars0.githubusercontent.com/u/4266283?s=100&v=4)](https://pixelswap.fr 'Personal Website') |
| --------------------------------------------------------------------------------------------------------------------------- |
| [Corentin Mors](https://pixelswap.fr/)
