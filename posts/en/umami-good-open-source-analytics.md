---
title: 'Umami: good open source analytics'
subtitle: 'analytics alternatives to Google Analytics'
date: '2020-10-23'
readingTime: 3
cover:
  image: '/assets/blogs/umami-baik.jpg'
  source: 'https://unsplash.com/@lukechesser?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
  name: 'Luke Chesser'
---

## Tabel konten

- [Apa itu Google Analytics?](#apa-itu-google-analytics)
- [Kenapa harus pakai Umami?](#kenapa-harus-pakai-umami)
- [Kesimpulan](#kesimpulan)

## <a name='apa-itu-google-analytics'>Apa itu Google Analytics?</a>

Bagi anda yang belum mengetahui apa itu Google Analytics(GA), dikutip dari [MonsterInsight](https://www.monsterinsights.com/docs/what-is-google-analytics/) GA adalah _perangkat lunak pelacakan dan statistik gratis yang memberi Anda wawasan penting tentang bagaimana pengunjung menemukan situs Anda, apa yang mereka lakukan ketika sampai di sana, dan informasi penting lainnya tentang kesehatan bisnis Anda: seperti eCommerce dan konversi prospek._

Intinya secara kasar kita jadi bisa dapat gambaran _traffic_ pengunjung dari website yang kita kelola melalui sistem analitik seperti GA ini.

## <a name='kenapa-harus-pakai-umami'>Kenapa harus pakai Umami?</a>

Umami adalah sistem analitik yang semacam GA, cara kerjanya pun bisa dikatakan sama dengan GA, dan sama-sama gratis, bedanya Umami adalah open source yang dikembangkan oleh komunitas dan kontributor yang aktif, sedangkan GA dikelola dan dikembangkan oleh Google.

Umami dibuat di atas arsitektur Nodejs dan dibantu Nextjs yang membuat Umami bisa cepat dengan basis kode yang besar, kita pun bisa berkontribusi langsung di dalamnya. Yang menarik lainnya adalah Umami bisa kita hosting sendiri (self-hosted) di penyedia yang mendukung Nodejs berjalan di sistemnya, dan kita pun bisa bebas mengkustomisasi Umami sesuai kebutuhan kita dan masih ada fitur lainnya yang bisa anda temukan di website resminya di [umami.is](https://umami.is/), atau bisa cek repositorinya di [Github](https://github.com/mikecao/umami).

Awal instalasinya mungkin bisa dikatakan tidak mudah apalagi bagi yang belum mengerti struktur aplikasi Nodejs. Saya sendiri beberapa kali stuck di server lokal dan error di server produksi ketika saya coba hosting di Heroku, dan akhirnya berhasil.

## <a name='kesimpulan'>Kesimpulan</a>

Jika kita membutuhkan sistem analitik dengan cepat yang nggak butuh banyak konfigurasi yang membingungkan, mungkin Google Analytics adalah jawabannya. Atau jika anda mau sistem analitik alternatif yang tidak kalah kerennya dari Google Analytics, saya menyarankan anda untuk menggunakan Umami.
