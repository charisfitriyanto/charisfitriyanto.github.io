---
layout: default
title:
---

<section class="home-hero">
  <div class="container home-grid">
    <div>
      <p class="kicker">PERSONAL WEBSITE</p>
      <h1>Hi, saya <span>Charis Fitriyanto</span>.</h1>
      <p class="home-intro">
        Ini adalah ruang pribadi saya di internet—tempat untuk menulis,
        mendokumentasikan hal yang saya pelajari, berbagi pengalaman,
        dan mengarsipkan proyek yang saya kerjakan.
      </p>

      <div class="home-links">
        <a class="button primary" href="{{ '/blog/' | relative_url }}">Baca Blog</a>
        <a class="button" href="{{ '/about/' | relative_url }}">Tentang Saya</a>
      </div>
    </div>

    <aside class="identity-card">
      <div class="avatar">CF</div>
      <p class="mono">@charisfitriyanto</p>
      <h2>Learning. Building. Writing.</h2>
      <p>
        Website sederhana yang saya kelola sendiri melalui GitHub Pages.
      </p>
      <div class="identity-links">
        <a href="https://github.com/charisfitriyanto" target="_blank" rel="noopener">GitHub ↗</a>
        <a href="{{ '/about/' | relative_url }}">About →</a>
      </div>
    </aside>
  </div>
</section>

<section class="home-section">
  <div class="container">
    <div class="section-heading">
      <div>
        <p class="kicker">LATEST</p>
        <h2>Tulisan terbaru</h2>
      </div>
      <a href="{{ '/blog/' | relative_url }}">Semua tulisan →</a>
    </div>

    <div class="post-list">
      {% assign blog_posts = site.posts | where: "category", "blog" %}
      {% for post in blog_posts limit: 5 %}
        <article class="post-row">
          <div class="post-date">{{ post.date | date: "%Y.%m.%d" }}</div>
          <div class="post-summary">
            <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
            <p>{{ post.description }}</p>
            {% if post.tags %}
              <div class="tags">
                {% for tag in post.tags %}
                  <span>#{{ tag }}</span>
                {% endfor %}
              </div>
            {% endif %}
          </div>
        </article>
      {% endfor %}
    </div>
  </div>
</section>
