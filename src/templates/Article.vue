<template>
  <Layout>
    <article>
      <h1 class="text-3xl text-gray-600">{{ $page.article.title }}</h1>
      <small class="block mt-2 text-xs font-bold tracking-widest text-gray-700 uppercase">Posted On {{ $page.article.date }} &bull; {{ $page.article.timeToRead }} min read</small>
      <div
        v-html="$page.article.content"
        class="mt-12 text-gray-700 article-content"
      >
      </div>
    </article>
  </Layout>
</template>

<page-query>
query Article ($path: String!) {
   article: article (path: $path) {
    id
    title
    content
    date (format: "MMMM Do, YYYY")
    timeToRead
  }
}
</page-query>

<style>
  .article-content p {
    @apply leading-loose mt-6;
  }
  .article-content ul {
    @apply list-disc list-inside pl-4 my-4;
  }
  .article-content li {
    @apply leading-loose;
  }

  .article-content h2 {
    @apply mt-8 text-xl font-bold;
  }

  .article-content a {
    @apply text-brand underline;
  }

  .article-content a:hover {
    @apply text-red-700;
  }

  .article-content a:hover {
    @apply no-underline;
  }

  /**
 * Dracula Theme originally by Zeno Rocha [@zenorocha]
 * https://draculatheme.com/
 *
 * Ported for PrismJS by Albert Vallverdu [@byverdu]
 */

code[class*="language-"],
pre[class*="language-"] {
  color: #f8f8f2;
  background: none;
  text-shadow: 0 1px rgba(0, 0, 0, 0.3);
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none; }

/* Code blocks */
pre[class*="language-"] {
  padding: 1em;
  @apply my-6;
  overflow: auto;
  border-radius: 0.3em; }

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  background: #282a36; }

/* Inline code */
:not(pre) > code[class*="language-"] {
  padding: .1em;
  border-radius: .3em;
  white-space: normal; }

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #6272a4; }

.token.punctuation {
  color: #f8f8f2; }

.namespace {
  opacity: .7; }

.token.property,
.token.tag,
.token.constant,
.token.symbol,
.token.deleted {
  color: #ff79c6; }

.token.boolean,
.token.number {
  color: #bd93f9; }

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  color: #50fa7b; }

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable {
  color: #f8f8f2; }

.token.atrule,
.token.attr-value,
.token.function,
.token.class-name {
  color: #f1fa8c; }

.token.keyword {
  color: #8be9fd; }

.token.regex,
.token.important {
  color: #ffb86c; }

.token.important,
.token.bold {
  font-weight: bold; }

.token.italic {
  font-style: italic; }

.token.entity {
  cursor: help; }

</style>