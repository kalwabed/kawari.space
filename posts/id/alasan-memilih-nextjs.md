---
title: 'Alasan Memilih Next.js'
subtitle: 'mencoba menjawab pertanyaan diri sendiri'
date: '2020-11-01'
readingTime: 4
cover:
  image: '/assets/blogs/alasan-nextjs/banner.png'
  source: 'https://og-image.vercel.app/'
  name: 'og-image.vercel.app'
---

## Tabel Konten

- [Singkat](#singkat)
- [Panjang Lebar](#panjang-lebar)
- [Sesuatu Yang Kurang](#sesuatu-yang-kurang)
- [Komparasi](#komparasi)
- [Jawaban](#jawaban)

## <a name='singkat'>Singkat</a>

Karena Nextjs berbasis React dan fiturnya keren-keren. Sudah.

Jawaban sesingkat itu kurang menjawab dan menggambarkan pertanyaan 'kenapa memilih Nextjs?', berikut adalah jawaban panjang lebarnya.

## <a name='panjang-lebar'>Panjang Lebar</a>

Nextjs sendiri adalah salah satu framework Reactjs yang ditemukan dan dikembangkan oleh [Vercel](https://vercel.com) (sebelumnya bernama Zeit) yang menawarkan pengalaman website dengan metode seperti Serverless, SSR, SSG, dan yang terbaru adalah ISR (Incremental Static Generation) dalam satu proyek.

Selain itu juga terdapat fitur Fast Refresh yang memungkinkan kita untuk mengubah kode tanpa harus full refresh halaman browser. Bagi anda yang lebih suka menggunakan TypeScript disamping JavaScript? Nextjs sangat bisa dengan hanya mengganti ekstensi menjadi `.tsx` anda akan diarahkan untuk menginstall dependency terkait.

Nextjs mendukung banyak pustaka dan juga sudah disediakan contoh-contoh implementasinya, seperti contoh implementasi Nextjs dengan Tailwindcss [examples/with-tailwindcss](https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss). Pada update terbarunya Nextjs meluncurkan template resmi untuk membuat sebuah website E-commerce yang siap dimodifikasi lalu di luncurkan. Demo-nya bisa lihat di [demo.vercel.store](https://demo.vercel.store/).

## <a name='sesuatu-yang-kurang'>Sesuatu Yang Kurang</a>

Dari semua yang saya jabarkan sebelumnya masih ada yang kurang dari Nextjs yaitu optimasi gambar, karena hampir semua website biasanya akan menampilkan suatu gambar yang dimana jika gambar itu tidak dioptimasi maka akan mempengaruhi performa website tersebut. Contoh kasus dalam hal ini adalah [kawari.space](https://kawari.space) yang awalnya menampilkan gambar seperti biasa tanpa CDN atau pustaka apapun; karena dirasa terlalu berat dan dapat membebani kinerja website apalagi pada internet yang lambat maka saya coba tampilkan melalui CDN yang disediakan gratis oleh [statically.io](https://statically.io/) dan ditampilkan dalam bentuk yang sudah [webp](https://developer.mozilla.org/en-US/docs/Glossary/webp), tentu ini merupakan sebuah perkembangan karena secara signifikan mengurangi ukuran dari gambar tanpa mengurangi kualitasnya.

Seperti kabar yang beredar Nextjs akan memiliki fitur untuk optimasi gambar pada versi yang ke 10 sekarang dan hasilnya sungguh diluar dugaan. Berikut adalah komparasi dari snapshot halaman [/projects](https://kawari.space/projects), terdapat perbedaan ukuran gambar dari yang tanpa dioptimasi, menggunakan CDN, dan implementasi fitur optimasi gambar dari Nextjs.

## <a name='komparasi'>Komparasi</a>

1.Tanpa optimasi apapun

![tanpa optimasi](https://cdn.statically.io/img/kawari.space/f=auto/assets/blogs/alasan-nextjs/default.png)

2.Menggunakan CDN dari [statically.io](https://statically.io/)

![tanpa optimasi](https://cdn.statically.io/img/kawari.space/f=auto/assets/blogs/alasan-nextjs/statically.png)

3.Menggunakan optimasi gambar dari Nextjs `next/image`

![tanpa optimasi](https://cdn.statically.io/img/kawari.space/f=auto/assets/blogs/alasan-nextjs/next-image.png)

Diluar dugaan, dengan versi terbaru (v.10) dari Nextjs kita bisa banget mengoptimasi gambar dengan mudah dan cepat tanpa memerlukan CDN.

## <a name='jawaban'>Jawaban</a>

Ada banyak lagi fitur-fitur menarik lainnya yang hadir di Nextjs versi 10, seperti: Nextjs Analytics, Internationalized Routing, dan lain-lain. Selengkapnya bisa ditemukan di [blog/next-10](https://nextjs.org/blog/next-10).

Kurang lebih itulah jawaban dari 'alasan memilih Nextjs'. Masih banyak fitur dari Nextjs yang belum saya cicipi, tapi overall saya rasa Nextjs sudah sangat komprehensif untuk kebutuhan front-end development.
