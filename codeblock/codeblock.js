/* Code Block Plugin (by @mikescops)
 * This plugin adds a toolbar button for code block element.
 * https://github.com/mikescops/redactor-codeblock-plugin
*/

(function ($R) {
    $R.add('plugin', 'codeblock', {
        translations: {
            en: {
                "codeblock": "Code Block",
            },
            fr: {
                "codeblock": "Bloc de code",
            }
        },
        languages: ['Typescript', 'Javascript', 'JSON', 'SCSS', 'HTML', 'Python'],
        init: function (app) {
            // define app
            this.app = app;

            // define toolbar so we can add the button to it
            this.toolbar = app.toolbar;

            // define language for translations
            this.lang = app.lang;

            // define services
            this.selection = app.selection;

            // define insertion
            this.insertion = app.insertion;
        },
        start: function () {
            // create a dropdown from the supported languages
            const dropdownData = this.languages.reduce((map, language) => {
                map[language] = {
                    title: language,
                    api: 'plugin.codeblock.addCodeBlock',
                    args: { language: language.toLowerCase() }
                };
                return map;
            }, {});

            // create the button data
            const buttonData = {
                title: this.lang.get('code')
            };

            // create the actual button
            const $button = this.toolbar.addButtonAfter('format', 'codeblock', buttonData);
            $button.setIcon('<i class="re-icon-codesnippets"></i>');

            $button.setDropdown(dropdownData);
        },
        addCodeBlock: function (args) {
            const { language } = args;

            // Get the first block element containing the selection
            let block = this.selection.getBlock();
            if (!block) return;

            // Get the child element in the selection
            const child = this.selection.getElement();

            // If it's already a codeblock, remove it
            if (block.nodeName === 'PRE') {
                this.app.api('module.block.format', 'pre');
                if (child.nodeName === 'CODE') {
                    const $node = $R.dom(child);
                    $node.replaceWith($node.contents());
                }
                return;
            }

            // Use the content of the selection to populate the codeblock
            const content = this.selection.getText();
            this.insertion.insertHtml(`<pre><code class="language-${language}">${content || ''}</code></pre>`);
        },
    });
})(Redactor);
