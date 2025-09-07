# dynamic-copyright

Tiny zero-dependency utility that updates copyright years on your site automatically.  
It can show the **current year** (`© 2025`) or a **year range** (`© 2019–2025`) depending on your markup.

- 🔄 Auto-updates each year
- 🌍 Works in plain HTML, bundlers, React, Next.js, Vue, etc.
- 📦 Super lightweight (just a few lines of JS)
- 📝 Includes TypeScript typings

---

## ✨ Install

```bash
npm i dynamic-copyright
# or
yarn add dynamic-copyright
# or
pnpm add dynamic-copyright
```
## 🚀 Quick start
Add a span where you want the year to appear:

```bash
<footer>
  © <span data-copyright-start="2019"></span> My Company
</footer>

<script type="module">
  import run from 'dynamic-copyright';
  run();
</script>
```
## ⚙️ How it works

It runs automatically when loaded in the browser, but you can also call it manually:

```bash
import run from 'dynamic-copyright';
run();
```
### 🛠 Bundlers & Frameworks

ESM (Vite, Rollup, Webpack 5+)

```bash
import run from 'dynamic-copyright';

document.addEventListener('DOMContentLoaded', () => {
run();
});
```

### CommonJS (Node)

```bash
const run = require('dynamic-copyright');

run();
```

### React

```bash
'use client'; // needed in Next.js App Router
import { useEffect } from 'react';
import run from 'dynamic-copyright';

export default function Footer() {
useEffect(() => {
run();
}, []);
return (
<footer>© <span data-copyright-start="2019"></span> My Company</footer>
);
}
```

### Next.js

**App Router** (app/) → add 'use client' at the top of your Footer component.

**Pages Router** (pages/) → just call in useEffect.

Example:
```bash
'use client';
import { useEffect } from 'react';
import run from 'dynamic-copyright';

export default function Footer() {
useEffect(() => {
run();
}, []);
return <>© <span data-copyright-start="2020"></span> Startup</>;
}
```
### Vue

```bash
<template>
  <footer>© <span data-copyright-start="2018"></span> My Company</footer>
</template>

<script setup>
import run from 'dynamic-copyright';
onMounted(() => run());
</script>
```

## 📚 Usage examples

**Single year**

```bash
<p>© <span id="copyYear"></span> My Company</p>
```

**Year range**

```bash
<p>© <span data-copyright-start="2020"></span> My Company</p>
```

**Multiple places on the page**

```bash
<p>© <span data-copyright-start="2021"></span> My Company</p>
<p>All rights reserved © <span data-copyright-start="2021"></span></p>
```

**Non-breaking space before the year**

```bash
<p>©&nbsp;<span data-copyright-start="2020"></span> My Company</p>
```