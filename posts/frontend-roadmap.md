---
title: 'Front-end Web Developer Roadmap'
date: '2022-10-31'
img: '/content/frontend-roadmap/roadmap.png'
category: ['Frontend', 'Tugas IF22B']
author: 'Nizar Baihaqi'
---

### Daftar Isi

# Front-end Web Developer Roadmap

Kemajuan teknologi telah menjadi bagian dari kehidupan. Karena tren masyarakat, hampir seluruh kalangan memiliki gadget. Bahkan dengan adanya virus Covid-19, masyarakat dianjurkan berkegiatan di dunia maya, agar mengurangi interaksi manusia secara langsung untuk mencegah penyebaran virus.

Kemajuan teknologi yang pesat ini memberikan lapangan kerja yang baru dengan persyaratan kemampuan yang baru. Memberikan pilihan kepada kita untuk beralih karir ke bidang pengembangan teknologi. 

Salah satu perkerjaan di bidang pengembangan teknologi adalah Front-end Web Developer, termasuk bagian dari pengembangan website. Pekerjaan ini bertanggung jawab atas desain dan interaksi dari sebuah website. 

Kita sebagai warga Indonesia tentu pernah memakai aplikasi yang di buat oleh pemerintah. Ada saja desain aplikasi yang disajikan membuat pengguna sulit menggunakannya.

![Front-end Web Developer Roadmap](/content/frontend-roadmap/roadmap.png)

# Roadmap Belajar

Roadmap ini saya buat berdasarkan video yang diunggah oleh Sandhika Galih di channel [Web Programming UNPAS](https://www.youtube.com/watch?v=qzMPvbL3GRQ). Saya tulis rangkumannya dan menambahkan opini saya agar saya sendiri memahami dan pembaca dimudahkan dengan adanya versi tulisan.

# #1 Belajar HTML, CSS, dan Javascript

## HTML

HTML adalah singkatan dari *Hypertext Markup Language*. HTML berperan sebagai struktur pada website. Kalau di ibaratkan, HTML adalah tulang dari tubuh manusia.

Beberapa yang harus dipelajari adalah :

- Basic HTML
- Semantic Elements
- Form Validation
- SVG & Canvas
- Information Architecture
- Aksesibilitas
- SEO

## CSS

CSS adalah singkatan dari *Cascading Stylesheet*. Berfungsi sebagai bagian yang bertanggung jawab atas desain pada website. Mulai dari warna, jenis font, dll. Kalau diibaratkan seperti baju yang dipakai, setiap orang pasti berbeda gaya berpakaiannya.

Beberapa yang harus dipelajari adalah :

- Basic CSS
- CSS Layouting
- FIlter, Transition & Animation
- Responsive Design
- Modern CSS
- CSS Architecture

## Javascript

Javascript berperan sebagai otak dari sebuah website. Membuat website lebih interaktif dan dapat mengolah data sesuai yang diinginkan pengunjung.

Beberapa yang harus dipelajari adalah :

- Basic Concepts
- DOM (Document Object Model)
- ES6 + Modular Javascript
- Asynchronous Javascript
- Fetch API

# #2 Version Control System

Agar website yang dibuat terstruktur sejak awal fitur hingga final website. Dibutuhkan *source code control* (SCM) agar ketika website yang dipublish memiliki bug, dapat kita kembalikan ke versi sebelumnya. 

## Git

Git adalah aplikasi SCM untuk kontrol kode sumber. Agar kode program dapat terlacak sejak pembuatan baris pertama dan seluruh perubahannya.

Git juga membantu memudahkan kolaborasi antar programmer, sehingga website dapat di program secara bersamaan. Misalkan, target versi pertama website adalah adanya tampilan produk dan fitur belanja, programmer A mengerjakan tampilan produk dan programmer B mengerjakan fitur belanja. Sehingga pengerjaan program lebih cepat.

## Collaboration Tools

Sebuah website agar bisa dibuat secara bersama-sama, harus disimpan di internet. Cara kerjanya sama dengan sosial media. Programmer lain juga dapat bersama-sama mengerjakan website tersebut. Kita pun mendapat backup data, jikalau data di device kita terhapus.

Beberapa aplikasi yang populer adalah :

1. Github
2. Gitlab
3. Bitbucket

Aplikasi ini biasanya menyesuaikan dengan perusahaan atau organisasi tempat bekerja. Akan tetapi paling populer adalah Github. Penulis sendiri menggunakan Github.

> Dianjurkan memahami git terlebih dahulu.

# #3 CSS Pre-processor

*CSS pre-processor* adalah program yang dapat membuat file CSS dari sintaks khusus *pre-processor*. Sintaks tersebut pada dasarnya mirip dengan CSS pada umumnya, namun memiliki fitur tambahan. Beberapa *CSS pre-processor* yang populer adalah :

- Sass
- Less
- Stylus

# #4 CSS Framework

*CSS framework* adalah kerangka kerja yang fungsinya untuk memudahkan Anda ketika membuat desain website atau aplikasi, tepatnya di bagian layout dan tema. [^1]

Beberapa *CSS framework* yang populer adalah :

- Bootstrap
- Tailwindcss
- Bulma.js
- Chakra UI
- Material UI

Penulis sendiri sering menggunakan Tailwindcss untuk membuat website.

# #5 Web Components

Komponen Web adalah rangkaian elemen berbeda yang memungkinkan programmer membuat elemen kustom yang dapat digunakan kembali dan menggunakannya di website. [^2]

Jadi daripada kita membuat komponen yang sama berulang kali, lebih baik kita buat satu, kemudian kita gunakan kembali komponen tersebut.

Pembahasan lebih lanjut adalah :

- Custom elements
- Shadow DOM
- HTML template

# #6 Nodejs

Nodejs adalah runtime Javascript agar Javascript dapat dijalankan di luar website. Pada dasarnya Nodejs hanya seperti itu. Dalam Nodejs ada yang disebut NPM atau Node Package Manager. NPM adalah tempat programmer menggunakan paket aplikasi yang sudah dibuat. Kita seperti menggunakan helper untuk membantu pengembangan program lebih cepat.

# #7 Build Tools & Task Runner

Dalam pengembangan program, setelah program selesai dibuat, tentu harus melewati proses compile program. Proses ini adalah proses berulang sehingga apabila programmer melakukannya secara manual, akan memakan waktu yang lama. Apalagi jika file programnya banyak sekali. Maka dibuatlah Build Tools & Task Runner agar proses yang berulang itu dapat dipersingkat.

Beberapa aplikasi yang populer adalah :

- Grunt
- Gulp
- Webpack
- Vite

# #8 Frontend Framework / Library

Nah, setelah memahami cara kerja dan kegunaan Build Tools & Task Runner. Programmer dapat menggunakan Frontend Framework / Library.

Pada dasarnya Frontend Framework menyediakan berbagai file yang sering ada dalam program. Kemudian di build menggunakan build tools.

Jikalau kita ingin membuat website, tiga file penting adalah HTML, CSS dan Javascript. Namun jika menggunakan framework, kita tidak perlu membuat ketiga file tersebut. Hanya perlu membuat file yang dibutuhkan. 

Tiap Framework memiliki sintaks berbeda namun pada dasarnya semua adalah Javascript. Karena setelah di build juga hasilnyaa menjadi program javascript.

Framework Javascript yang populer adalah :

- React
- Vue
- Angular
- Svelte
- Remix

# #9 State Management

Dalam menyimpan data, baik data dari database, ataupun dari API. Tiap framework memiliki cara yang berbeda. Namun kita sering kebingungan cara share data dari komponen satu ke yang lainnya. Jika komponennya dari satu parent ke satu children, tidak masalah menggunakan *property passing,* Namun jika hirarkinya telalu jauh maka perlu menyimpan data di tempat global, sehingga semua komponen yan berkaitan dapat mengaksesnya. Agar tidak perlu mengambil kembali ke database atau request ke API.

Masing masing framework memiliki state management masing-masing. Beberapa diantaranya adalah :
| Framework | State Manager |
| --- | --- |
| React | Redux |
| Vue | Vuex |
| Angular | RxJs |

# #10 Application Programming Interface (API)

Protokol yang sering dipakai untuk komunikasi ke backend atau  adalah API. API adalah singkatan dari Application Programming Interface yaitu sebuah software yang memungkinkan para developer untuk mengintegrasikan dan mengizinkan dua aplikasi yang berbeda secara bersamaan untuk saling terhubung satu sama lain. [^3]

Data yang akan diberika oleh API dapat berupa format teks, JSON atau XML. JSON adalah format paling populer untuk berbagi data.

Pembahasan lebih lanjut mengenai API adalah :

- REST API
- JSON
- GraphQL

# #11 Website Deployment

Nah, agar website dapat dilihat oleh orang lain. Dapat menggunakan aplikasi dibawah ini :

- Github Pages
- Vercel
- Netlify

> Penulis sendiri menggunakan Vercel untuk deploy website

# #12 Testing Tool

Agar mengetahui sebuah program terdapat bug atau tidak, programmer menggunakan testing tool agar hasil akhir yang diinginkan dapat terlihat terdapat bug atau tidaknya.

Beberapa testing tool populer adalah :

- Jest
- Mocha
- Jasmine
- Selenium

# More Advanced

Setelah semua yang diatas dipelajari, programmer dapat mempelajari pembahasan yang lebih lanjut, yaitu :

## Static Site Generators

- Nextjs
- Nuxtjs
- Gatsby

## Progressive Web Apps

- Web Storage
- Web Socket
- Service Worker

## Web Assembly

Setelah ini, masih banyak latihan yang harus dilaksanakan. Masih banyak bug yang harus diperbaiki. Namun, harus diingat bahwa :

> "Practice makes perfect"

Kalau ada pertanyaan dapat di DM di IG ya. 

[Instagram @ijaybaihaqi](https://www.instagram.com/ijaybaihaqi/)

Follow juga akun github siapa tau bisa kolaborasi.

[Abaihaaqi](https://github.com/abaihaaqi)

[^1]: Ningtyas, Sekar. [10 Rekomendasi Framework Terbaik untuk Developer](https://www.niagahoster.co.id/blog/css-framework-terbaik/), Diakses 04:40 PM WIB 30 Oktober 2022

[^2]: MDN, [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components), Diakses 04:45 PM WIB, 30 Oktober 2022

[^3]: Romadhoni, Firmansyah. [Perbedaan antara API, REST API, dan RESTful API](https://medium.com/jagoanhosting/perbedaan-antara-api-rest-api-dan-restful-api-6a66d655a6c2), diakses 05:22 PM WIB, 30 Oktober 2022