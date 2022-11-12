---
title: 'Penerapan 8 Golden Rules pada Elementary OS'
date: '2022-11-12'
img: '/content/8-golden-rules/banner.png'
category: ['Desain Interaksi', 'Tugas IF22B']
author: 'Nizar Baihaqi'
---

### Daftar Isi

# Penerapan 8 golden rules pada Elementary OS

Kalau kalian menggunakan linux, atau pernah cari tau tentang alternatif OS untuk Windows atau Mac OS, pasti mengetahui salah satu distribusi linux yang memiliki desain keren, mirip mirip sama Mac OS, yaitu, Elementary OS. 

![Elementary OS Desktop](/content/8-golden-rules/desktop.jpg)

Nah, kali ini kita akan membahas penerapan 8 Golden Rules menurut Shneiderman pada Elementary OS ini. Sebelumnya, berikut adalah 8 Golden rules menurut Shneiderman :

1. Strive for consistency
2. Seek universal usability
3. Offer Informative feedback
4. Design dialogs to yield closure
5. Prevent Errors
6. Permit easy reversal of actions
7. Keep users in control 
8. Reduce short-term memory load[^1]

## 1. Konsisten

![Elementary OS toolbar](/content/8-golden-rules/toolbar.png)

Pada penerapannya, Elementary OS menggunakan toolbar yang menganjurkan untuk diatur berdasarkan item yang sering digunakan. Ditempatkan di paling kiri. Jika terdapat banyak item, maka baiknya dikelompokkan. Untuk item yang memunculkan menu seperti pengaturan dan kolom poncarian, di tempatkan di sebelah kiri.[^2]

## 2. Pintasan

Terdapat banyak pintasan yang dapat digunakan di Elementary OS ini, beberapa sama seperti OS lainnya. Seperti Copy menggunakan Ctrl+C dan paste menggunakan Ctrl+V.

## 3. Mendukung Umpan Balik (Feedback)

Terdapat berbagai cara untuk mendukung umpan balik pada Elementary OS, tergantung pada sifat dan tingkat keparahan umpan balik itu.

- **Toasts** Mengkonfirmasi aksi pengguna dan menunjukkan penjelasan dari aksi tersebut, seperti batal (Undo) dan abaikan otomatis dalam jangka waktu singkat.
- **Info Bars** menunjukkan informasi dasar dan dapat menjelaskan suatu aksi juga. Info bars tidak menghalangi konten lain dan tidak otomatis diabaikan.
- **Message Dialogs** dapat digunakan untuk menjelaskan informasi yang banyak dan menawarkan beberapa pilihan aksi. Ini dapat digunakan apabila terdapat aksi yang perlu secepatnya.[^3]

## 4. Dialog

Elementary OS menggunakan progress bar yang terkait dengan satu proses, tugas yang spesifik. Seperti untuk mengindikasi proses yang panjang dalam transfer file dan encoding. Contoh yang baik adalah progres instalasi di AppCenter.[^3]

## 5. Penanganan Error

![button-order.png](/content/8-golden-rules/button-order.png)

Seperti yang disebutkan pada bagian Feedback, Message Dialogs juga dapat digunakan untuk menangani suatu error. Seperti file yang gagal di duplikasi karena terdapat nama yang sama, tombol yang muncul dapat disesuaikan seperti gambar diatas. 

dimulai dari paling kiri :

1. **Tanda tanya**, menjelaskan kenapa error ini terjadi secara lebih rinci, karena singkatnya sudah dijelaskan pada message dialogs.
2. **Ganti nama**, menawarkan pengguna untuk mengganti nama file yang akan di duplikasi.
3. **Batal**, membatalkan duplikasi file.
4. **Ganti File**, menyetujui bahwa file itu akan diganti dengan yang baru.[^3]

## 6. Mengizinkan untuk membatalkan aksi sebelumnya. (Undo)

Elementaray OS menerapkan ketika aplikasi ditutup, daripada menunjukkan dialog untuk mengkonfirmasi pengguna terhadap aksinya, lebih baik menyimpan pekerjaan mereka dan keadaan aplikasi sebelumnya, dan pengguna dapat kembali pada apa sesuai dengan saat mereka menutup aplikasi.[^4]

## 7. Menjaga pengguna tetap mengontrol

Pengguna Elementary OS dapat mengatur notifikasi mereka. Terserah mereka ingin memunculkan notif semua aplikasi, memunculkan beberapa aplikasi saja atau sama sekali tidak memunculkan notifikasi.[^5]

## 8. Antisipasi kelebihan memori jangka pendek pada pengguna

Dalam menggunakan teks informatif, Elementary OS menganjurkan agar daripada menyuruh pengguna membaca teks panjang, lebih baik menggunakan teks yang pendek dan ringkas. Pengguna dapat memahami lebih cepat maksud dari teks tersebut.

# Penutupan

Mungkin hanya itu yang dapat saya analisis dari penggunaan 8 golden rules menurut Sheiderman pada Elementary OS. Selebihnya dapat dibaca di website Elementary OS tentang Human Interface Guidelines. 

[^1]: Shneiderman, Ben. *The Eight Golden Rules of Interface Design ([cs.usm.edu](https://www.cs.umd.edu/users/ben/goldenrules.html))*, Diakses pada 18:24 WIB, 11 Nov 2022.

[^2]: Elementary OS, *Creating layouts ([docs.elementary.io](https://docs.elementary.io/hig/widgets/creating-layouts#ordering-tool-items))*, Diakses pada 07:40 WIB, 12 Nov 2022.

[^3]: Elementary OS, *Providing Feedback ([docs.elementary.io](https://docs.elementary.io/hig/widgets/providing-feedback))*, Diakses pada 07:47 WIB, 12 Nov 2022.

[^4]: Elementary OS, *Always provide an Undo ([docs.elementary.io](https://docs.elementary.io/hig/user-workflow/always-provide-an-undo))*, Diakses pada 07:49 WIB, 12 Nov 2022.

[^5]: Elementary OS, *User Control ([docs.elementary.io](https://docs.elementary.io/hig/widgets/providing-feedback#user-control))*, Diakses pada 07:50 WIB, 12 Nov 2022.

[^6]: Elementary OS, *Text ([docs.elementary.io](https://docs.elementary.io/hig/reference/text#be-brief))*, Diakses pada 07:52 WIB, 12 Nov 2022.
