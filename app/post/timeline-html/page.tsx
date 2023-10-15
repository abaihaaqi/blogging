import Image from "next/image";

const TimelineHTMLData = {
  slug: "timeline-html",
  title: "Sejarah versi HTML dan pengaruhnya ke browser",
  desc: `Pada tahun 1980, Tim Berners-Lee membuat proposal "ENQUIRE",
  sistem untuk peneliti CERN menyimpan data dan bertukar
  dokumen. Lalu pada tahun 1989...`,
  author: "Nizar Baihaqi",
  date: "2023-10-14",
};

export default function TimelineHTML() {
  return (
    <>
      <div className="relative aspect-video">
        <Image
          src={`/content/${TimelineHTMLData.slug}/banner.png`}
          alt={`${TimelineHTMLData.slug} image`}
          fill
        />
        <div className="bg-black/80 absolute inset-0 flex flex-col justify-center gap-2 px-3 md:px-6">
          <h1 className="font-serif text-lg md:text-3xl font-bold">
            {TimelineHTMLData.title}
          </h1>
          <p className="text-xs md:text-base">
            {TimelineHTMLData.author} - {TimelineHTMLData.date}
          </p>
        </div>
      </div>
      <article className="prose-sm md:prose-base prose-invert p-3 prose-ul:list-disc prose-ol:list-decimal prose-a:text-blue-500 hover:prose-a:underline target:prose-li:bg-slate-800 prose-li:rounded">
        <h1 id="html">HTML</h1>
        <p>
          Pada tahun 1980, Tim Berners-Lee membuat proposal &quot;ENQUIRE&quot;,
          sistem untuk peneliti CERN menyimpan data dan bertukar dokumen. Lalu
          pada tahun 1989, Berners-Lee menulis memo tentang sistem hypertext
          yang berbasis internet.{" "}
          <a href="#ref-1">
            <sup>[1]</sup>
          </a>{" "}
          Kemudian pada akhir tahun 1990, Berners-Lee membuat spesifikasi HTML
          dan menciptakan browser dan server software. Pada tahun ini juga
          Berners-Lee berkolaborasi dengan Robert Cailliau untuk proposal
          pendanaan, namun projek ini masih belum diadopsi oleh CERN.{" "}
          <a href="#ref-2">
            <sup>[2]</sup>
          </a>{" "}
        </p>
        <h1 id="html-pertama">HTML pertama</h1>
        <p>
          Pada mulanya, HTML memiliki 18 elemen tag yang mengambil inspirasi
          dari SGMLguid, sebelas dari elemen ini masih ada pada versi HTML 4.{" "}
          <a href="#ref-3">
            <sup>[3]</sup>
          </a>{" "}
        </p>
        <p>
          HTML dapat digunakan untuk menginterpretasikan tulisan, gambar dan
          bentuk lainnya menjadi halaman web yang dapat dilihat dan didengar.
          Karakteristik standar tampilan tiap item pada HTML didefinisikan oleh
          browser web. Karakteristik ini dapat diubah dan diperbagus oleh
          desainer halaman web dengan menggunakan CSS.
        </p>
        <p>
          Berners-Lee menganggap HTML adalah aplikasi dari SGML. Lalu pada
          pertengahan 1993, IETF (Internet Engineering Task Force) menerbitkan
          proposal untuk spesifikasi HTML. Draft &quot;Hypertext Markup Language
          (HTML)&quot; dibuat oleh Berners-Lee dan Dan Connolly, namun draft ini
          kadaluarsa enam bulan kemudian.{" "}
          <a href="#ref-4">
            <sup>[4]</sup>
          </a>{" "}
          Lalu, pada tahun 1993, Dave Ragget membuat draft HTML+ yang memiliki
          fitur tabel dan form yang dapat diisi.{" "}
          <a href="#ref-5">
            <sup>[5]</sup>
          </a>{" "}
        </p>
        <h1 id="html-2">HTML 2</h1>
        <p>
          Diterbitkan sebagai RFC 1866{" "}
          <a href="#ref-6">
            <sup>[6]</sup>
          </a>{" "}
          pada 24 November 1995 dengan fitur penting :
        </p>
        <ul>
          <li>
            <p>
              RFC 1867 (25 November 1995) Karena upload berkas dapat
              menguntungkan berbagai aplikasi, proposal ini bertujuan untuk
              menambahkan fitur upload berkas pada HTML agar pengguna dapat
              mengupload berkas dan mendapat respons yang seragam. Memo ini
              mendefinisikan protokol eksperimental untuk komunitas internet.{" "}
              <a href="#ref-7">
                <sup>[7]</sup>
              </a>{" "}
            </p>
          </li>
          <li>
            <p>
              RFC 1942 (Mei 1996) Spesifikasi ini membolehkan HTML untuk
              mendukung pembuatan tabel didalamnya.{" "}
              <a href="#ref-8">
                <sup>[8]</sup>
              </a>{" "}
            </p>
          </li>
          <li>
            <p>
              RFC 1980 (Agustus 1996) Pada spesifikasi ini, HTML memiliki fitur
              Image maps, yaitu fitur yang memperbolehkan pengguna mengklik
              titik yang berbeda dalam satu gambar. Fitur ini sangat membantu
              browser yang hanya bisa menampilkan tulisan. Fitur ini kemudian
              dinamakan &quot;Client-Side Image Maps&quot;{" "}
              <a href="#ref-9">
                <sup>[9]</sup>
              </a>{" "}
            </p>
          </li>
          <li>
            <p>
              RFC 2070 (Januari 1997) Dokumen ini ditujukan untuk menjadi solusi
              permasalahan internationalization (i18n, &quot;i&quot; kemudian
              diikuti oleh 18 huruf dan diakiri &quot;n&quot;) dan memberikan
              rekomendasi tambahan untuk dukungan internasionalisasi yang
              sesuai.{" "}
              <a href="#ref-10">
                <sup>[10]</sup>
              </a>{" "}
            </p>
          </li>
        </ul>
        <h1 id="html-3">HTML 3</h1>
        <p>
          Pada 14 Januari 1997, HTML 3.2{" "}
          <a href="#ref-11">
            <sup>[11]</sup>
          </a>{" "}
          dipublikasikan sebagai W3C Recommendation. Itu merupakan versi pertama
          yang dibuat dan distandarisasi secara eksklusif oleh W3C, karena IETF
          telah menutup HTML Working Group pada 12 September 1996.{" "}
          <a href="#ref-12">
            <sup>[12]</sup>
          </a>{" "}
        </p>
        <p>
          Dengan kode nama &quot;Wilbur&quot;,{" "}
          <a href="#ref-13">
            <sup>[13]</sup>
          </a>{" "}
          HTML 3.2 tidak mendukung formula matematika, sebagai solusi atas
          berbagai ekstensi yang tumpang tindih dan mengadopsi sebagian besar
          Netscape visual markup tag. Netscape Blink dan Microsoft Marquee
          Element ditambahkan karena kesepakatan bersama antara kedua
          perusahaan.{" "}
          <a href="#ref-14">
            <sup>[14]</sup>
          </a>{" "}
        </p>
        <h1 id="html-4">HTML 4</h1>
        <p>
          HTML 4.0{" "}
          <a href="#ref-15">
            <sup>[15]</sup>
          </a>{" "}
          dipublikasikan sebagai W3C Recommendation, menawarkan 3 varian, yaitu
          :
        </p>
        <ul>
          <li>
            Strict, yaitu tidak boleh menggunakan elemen yang telah
            ditinggalkan.
          </li>
          <li>
            Transitional, yaitu membolehkan menggunakan elemen yang
            ditinggalkan.
          </li>
          <li>
            Frameset, yaitu memperbolehkan sebagian besar elemen yang berkaitan
            dengan frame.
          </li>
        </ul>
        <p>
          Dengan nama kode &quot;Cougar&quot;,{" "}
          <a href="#ref-16">
            <sup>[16]</sup>
          </a>{" "}
          HTML 4.0 mengadopsi tipe dan atribut elemen elemen khusus berbagai
          browser dan mulai meninggalkan fitur Netscape visual markup untuk
          digantikan style sheet.{" "}
          <a href="#ref-17">
            <sup>[17]</sup>
          </a>{" "}
        </p>
        <h1 id="html-5">HTML 5</h1>
        <p>
          HTML 5 dipublikasikan pada 22 Januari 2008.{" "}
          <a href="#ref-18">
            <sup>[18]</sup>
          </a>{" "}
          HTML 5 adalah versi yang digunakan saat ini dengan fitur utama seperti
          :
        </p>
        <h2 id="markup">Markup</h2>
        <p>
          HTML5 memperkenalkan elemen dan atribut yang merepresentasikan
          penggunaan umum dalam website moderen. Seperti penggantian blok yang
          general yaitu {`<div>`} dan {`<span>`} menjadi {`<nav>`} untuk
          navigasi, {`<footer>`} untuk bagian bawah website, atau {`<audio>`}{" "}
          dan {`<video>`} alih-alih menggunakan {`<object>`}.{" "}
          <a href="#ref-19">
            <sup>[19]</sup>
          </a>{" "}
        </p>
        <h2 id="api-yang-baru">API yang baru</h2>
        <p>
          Dalam tambahan untuk menspesifikasikan markup, HTML5 menspesifikasikan
          skrip application programming interfaces (APIs) yang dapat digunakan
          oleh Javascript. Document Object Model (DOM) yang ada dikembangkan dan
          de facto fitur terdokumentasi.{" "}
          <a href="#ref-20">
            <sup>[20]</sup>
          </a>{" "}
        </p>
        <h2 id="error-handling">Error Handling</h2>
        <p>
          HTML5 didesain sedemikian rupa agar browser yang sudah usang dapat
          dengan aman membaca kontstuksi HTML5.{" "}
          <a href="#ref-21">
            <sup>[21]</sup>
          </a>{" "}
        </p>
        <h1 id="kesimpulan">Kesimpulan</h1>
        <p>
          HTML telah dikembangkan sedemikian rupa dengan mengikuti zaman dan
          masukan dari penggunanya sehingga dapat menjadi sepopuler saat ini.
          HTML juga mempengaruhi dan mengikuti perubahan pada browser. Sehingga,
          HTML menjadi salah satu pondasi adanya internet hingga saat ini.
        </p>
        <h3>Referensi</h3>
        <ol>
          <li id="ref-1">
            <a
              href="https://www.w3.org/History/1989/proposal.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tim Berners-Lee, "Information Management: A Proposal",{" "}
              <i>w3.org</i>
            </a>
            , <i>diakses pada 14 Oktober 2023</i>
          </li>
          <li id="ref-2">
            <a
              href="https://www.w3.org/DesignIssues/Uses.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tim Berners-Lee, "Design Issues", <i>w3.org</i>
            </a>
            , <i>diakses pada 14 Oktober 2023</i>
          </li>
          <li id="ref-3">
            <a
              href="https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              World Wide Web Consortium, "HTML Tags" <i>w3.org</i>
            </a>
            , <i>diakses pada 14 Oktober 2023</i>
          </li>
          <li id="ref-4">
            <a
              href="http://lists.w3.org/Archives/Public/www-talk/1991NovDec/0020.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tim Berners-Lee, "Re: SGML/HTML docs, X Browser (archived www-talk
              mailing list post)"
            </a>
            , <i>diakses pada 14 Oktober 2023</i>
          </li>
          <li id="ref-5">
            <a
              href="http://www.w3.org/MarkUp/htmlplus_paper/htmlplus.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dave Raggett, "A Review of the HTML+ Document Format"
            </a>
            , <i>diakses pada 14 Oktober 2023</i>
          </li>
          <li id="ref-6">
            <a
              href="https://datatracker.ietf.org/doc/html/rfc1866"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tim Berners-Lee, Daniel W. Connoly, RFC 1866, <i>ietf.org</i>
            </a>
            , <i>diakses pada 14 Oktober 2023</i>
          </li>
          <li id="ref-7">
            <a
              href="https://datatracker.ietf.org/doc/html/rfc1867"
              target="_blank"
              rel="noopener noreferrer"
            >
              Larry M. Masinter dan Ernesto Nebel, RFC 1867, <i>ietf.org</i>
            </a>
            , <i>diakses pada 14 Oktober 2023</i>
          </li>
          <li id="ref-8">
            <a
              href="https://datatracker.ietf.org/doc/html/rfc1942"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dr. Dave Raggett, RFC 1942, <i>ietf.org</i>
            </a>
            , <i>diakses pada 14 Oktober 2023</i>
          </li>
          <li id="ref-9">
            <a
              href="https://datatracker.ietf.org/doc/html/rfc1980"
              target="_blank"
              rel="noopener noreferrer"
            >
              James L. Seidman, RFC 1980, <i>ietf.org</i>
            </a>
            , <i>diakses pada 14 Oktober 2023</i>
          </li>
          <li id="ref-10">
            <a
              href="https://datatracker.ietf.org/doc/html/rfc2070"
              target="_blank"
              rel="noopener noreferrer"
            >
              François Yergeau, dkk. RFC 2070, <i>ietf.org</i>
            </a>
            , <i>diakses pada 14 Oktober 2023</i>
          </li>
          <li id="ref-11">
            <a
              href="https://www.w3.org/TR/REC-html32"
              target="_blank"
              rel="noopener noreferrer"
            >
              World Wide Web Consortium, "HTML 3.2 Reference Specification",{" "}
              <i>w3.org</i>
            </a>
            , <i>diakses pada 14 Oktober 2023</i>
          </li>
          <li id="ref-12">
            <a
              href="https://www.w3.org/MarkUp/HTML-WG/"
              target="_blank"
              rel="noopener noreferrer"
            >
              IETF HTML WG, "Note: This working group is closed", <i>w3.org</i>
            </a>
            , <i>diakses pada 14 Oktober 2023</i>
          </li>
          <li id="ref-13">
            <a
              href="http://htmlhelp.com/reference/wilbur/intro.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Arnoud Engelfriet, "Introduction to Wilbur", <i>htmlhelp.com</i>
            </a>
            , <i>diakses pada 14 Oktober 2023</i>
          </li>
          <li id="ref-14">
            <a
              href="https://www.w3.org/People/Raggett/book4/ch02.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dr. Dave Ragget, "Ragget on HTML 4", <i>w3.org</i>
            </a>
            , <i>diakses pada 14 Oktober 2023</i>
          </li>
          <li id="ref-15">
            <a
              href="https://www.w3.org/TR/REC-html40-971218/"
              target="_blank"
              rel="noopener noreferrer"
            >
              World Wide Web Consortium, "HTML 4.0 Specification" <i>w3.org</i>
            </a>
            , <i>diakses pada 14 Oktober 2023</i>
          </li>
          <li id="ref-16">
            <a
              href="http://htmlhelp.com/reference/wilbur/intro.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Arnoud Engelfriet, "Introduction to Wilbur", <i>htmlhelp.com</i>
            </a>
            , <i>diakses pada 14 Oktober 2023</i>
          </li>
          <li id="ref-17">
            <a
              href="https://www.w3.org/TR/html4/conform.html#h-4.2"
              target="_blank"
              rel="noopener noreferrer"
            >
              "HTML 4 – 4 Conformance: requirements and recommendations"{" "}
              <i>w3.org</i>
            </a>
            , <i>diakses pada 14 Oktober 2023</i>
          </li>
          <li id="ref-18">
            <a
              href="https://www.w3.org/TR/2008/WD-html5-20080122/"
              target="_blank"
              rel="noopener noreferrer"
            >
              World Wide Web Consortium, "HTML5: A vocabulary and associated
              APIs for HTML and XHTML", <i>w3.org</i>
            </a>
            , <i>diakses pada 14 Oktober 2023</i>
          </li>
          <li id="ref-19">
            <a
              href="http://www.ibm.com/developerworks/library/x-html5/?ca=dgr-lnxw01NewHTML"
              target="_blank"
              rel="noopener noreferrer"
            >
              IBM Developer Works, New elements in HTML5: Structure and
              semantics <i>ibm.com</i>
            </a>
            , <i>diakses pada 14 Oktober 2023</i>
          </li>
          <li id="ref-20">
            <a
              href="https://html-differences.whatwg.org/#syntax"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anne van Kesteren dan Simon Pieters, "HTML5 differences from
              HTML4" <i>whatwg.org</i>
            </a>
            , <i>diakses pada 14 Oktober 2023</i>
          </li>
          <li id="ref-21">
            <a
              href="https://html-differences.whatwg.org/#syntax"
              target="_blank"
              rel="noopener noreferrer"
            >
              World Wide Web Consortium, "HTML5 Differences from HTML4"{" "}
              <i>w3.org</i>
            </a>
            , <i>diakses pada 14 Oktober 2023</i>
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/HTML"
              target="_blank"
              rel="noopener noreferrer"
            >
              HTML, Wikipedia
            </a>
            , <i>diakses pada 14 Oktober 2023</i>
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/HTML5"
              target="_blank"
              rel="noopener noreferrer"
            >
              HTML5, Wikipedia
            </a>
            , <i>diakses pada 14 Oktober 2023</i>
          </li>
        </ol>
      </article>
    </>
  );
}
