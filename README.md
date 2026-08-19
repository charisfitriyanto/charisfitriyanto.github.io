# charisfitriyanto.github.io — Personal Jekyll Site

Starter website pribadi berbasis **Jekyll + GitHub Pages**.

## Isi website

- Home
- Blog
- About
- Dark mode
- Search artikel di halaman Blog
- Responsive untuk mobile
- Artikel ditulis menggunakan Markdown

## Upload ke GitHub

Upload **seluruh isi** folder ini ke root repository:

`charisfitriyanto.github.io`

Pastikan `_config.yml`, `index.md`, `_layouts`, `_posts`, dan folder lainnya berada langsung di root repository.

Kemudian buka:

**Settings → Pages**

Pilih source dari branch `main` dan folder `/(root)`.

## Menambah artikel Blog

Buat file baru di `_posts` dengan pola:

`YYYY-MM-DD-judul-artikel.md`

Contoh:

```markdown
---
title: "Judul Artikel"
date: 2026-08-19 08:00:00 +0700
category: blog
description: "Deskripsi singkat artikel."
tags: [wordpress, github]
permalink: /blog/judul-artikel/
---

Isi artikel ditulis di sini menggunakan Markdown.
```

## Yang perlu diganti

- Bio di `index.md`
- Isi `about/index.md`
- Username/link sosial
- Warna website jika diinginkan
