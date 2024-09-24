import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/night.css';
import 'reveal.js/plugin/highlight/zenburn.css'

let deck = new Reveal({
    plugins: [Markdown, Highlight],
});
deck.initialize();