import Image from "next/image";

const PageProps = {
  slug: "5-ancaman-internet-&-solusi",
  title: "5 Ancaman Internet dan Solusinya",
  desc: `Saat teknologi terus berkembang, dunia kita semakin terhubung secara
  digital. Namun, bersamaan dengan kemajuan ini, muncul pula ancaman
  serangan siber yang semakin...`,
  author: "Nizar Baihaqi",
  date: "2023-10-22",
};

export default function InternetThreatAndSolutionPage() {
  return (
    <>
      <div className="relative aspect-video">
        <Image
          src={`/content/${PageProps.slug}/banner.png`}
          alt={`${PageProps.slug} image`}
          fill
        />
        <div className="bg-black/80 absolute inset-0 flex flex-col justify-center gap-2 px-3 md:px-6">
          <h1 className="font-serif text-lg md:text-3xl font-bold">
            {PageProps.title}
          </h1>
          <p className="text-xs md:text-base">
            {PageProps.author} - {PageProps.date}
          </p>
        </div>
      </div>
      <article className="prose-sm md:prose-base prose-invert p-3 prose-ul:list-disc prose-ol:list-decimal prose-a:text-blue-500 hover:prose-a:underline target:prose-li:bg-slate-800 prose-li:rounded">
        <p>
          Saat teknologi terus berkembang, dunia kita semakin terhubung secara
          digital. Namun, bersamaan dengan kemajuan ini, muncul pula ancaman
          serangan siber yang semakin kompleks dan beragam. Ancaman ini dapat
          merusak data, merusak perangkat, atau bahkan mencuri informasi
          pribadi. Untuk menghadapi ancaman ini, penting bagi individu dan
          organisasi untuk memahami jenis-jenis serangan siber yang mungkin
          terjadi dan bagaimana mengatasinya.
        </p>

        <p>
          Artikel ini akan membahas beberapa jenis serangan siber yang umum
          terjadi, bersama dengan solusi-solusi untuk melindungi diri dari
          ancaman ini. Mari kita telusuri ancaman-ancaman ini dan
          langkah-langkah yang dapat diambil untuk menjaga keamanan dalam dunia
          yang semakin terhubung secara digital.
        </p>

        <h2>1. Serangan Malware Seluler</h2>
        <p>
          Serangan malware seluler merupakan ancaman yang mengincar perangkat
          seluler atau smartphone. Malware dapat merusak, mencuri data, atau
          bahkan mengontrol perangkat tanpa izin pengguna. Ancaman ini semakin
          meningkat karena perangkat seluler cenderung memiliki keamanan yang
          lebih lemah dibandingkan dengan perangkat komputer. Selain itu,
          perilaku pengguna yang tidak hati-hati saat mengunduh aplikasi atau
          membuka lampiran email juga dapat memicu serangan malware.
        </p>
        <h3>Solusi:</h3>
        <ul>
          <li>
            Menggunakan aplikasi antivirus seluler yang dapat mendeteksi dan
            menghapus malware dari perangkat seluler.
          </li>
          <li>
            Memastikan perangkat seluler selalu memiliki pembaruan keamanan
            terbaru.
          </li>
          <li>
            Mendownload aplikasi hanya dari sumber-sumber yang terpercaya,
            seperti toko aplikasi resmi.
          </li>
        </ul>

        <h2>2. Serangan Phishing</h2>
        <p>
          Serangan phishing melibatkan upaya penipuan di mana penyerang mencoba
          untuk memancing informasi sensitif dari korban, seperti kata sandi
          atau informasi keuangan, dengan menyamar sebagai entitas tepercaya
          melalui email, pesan teks, atau situs web palsu.
        </p>
        <h3>Solusi:</h3>
        <ul>
          <li>
            Memeriksa alamat email pengirim dan link yang dicurigai sebelum
            mengkliknya.
          </li>
          <li>
            Tidak memberikan informasi pribadi atau sensitif melalui email atau
            tautan yang mencurigakan.
          </li>
          <li>
            Melaporkan aktivitas phishing kepada penyedia layanan email dan
            menghapus email yang mencurigakan.
          </li>
        </ul>

        <h2>3. Serangan DDoS (Distributed Denial of Service)</h2>
        <p>
          Serangan DDoS bertujuan untuk membuat layanan online tidak tersedia
          dengan membanjiri server dengan lalu lintas internet palsu. Hal ini
          dapat mengakibatkan kegagalan sistem dan kerugian finansial bagi
          organisasi yang menjadi target.
        </p>
        <p>
          Serangan DDoS yang terjadi akhir-akhir ini adalah serangan DDoS pada
          tahun 2022 yang dilakukan oleh kelompok hacking pro-kremlin yaitu
          Killnet. Sebagai respons terhadap deklarasi yang dibuat oleh Florin
          Cîțu, Presiden Senat Romania, bahwa Romania akan mendukung Ukraina
          dengan bantuan militer. Serangan ini memiliki target pada
          website-website pemerintahan, militer, media massa, bank, rumah sakit,
          institusi pendidikan dsb.
        </p>
        <h3>Solusi:</h3>
        <ul>
          <li>
            Menggunakan firewall yang kuat untuk memblokir lalu lintas tidak sah
            dan mencurigakan.
          </li>
          <li>
            Menggunakan jasa penyedia layanan DDoS protection untuk membantu
            mengatasi serangan DDoS.
          </li>
          <li>
            Memperbarui sistem dan perangkat lunak secara teratur untuk
            memastikan keamanan dan memperbaiki kerentanannya.
          </li>
        </ul>

        <h2>4. Serangan Ransomware</h2>
        <p>
          Serangan ransomware bertujuan untuk mengenkripsi data pada perangkat
          korban dan meminta tebusan untuk mendapatkan kunci dekripsi. Serangan
          ini dapat mengakibatkan kehilangan data yang signifikan dan kerugian
          keuangan.
        </p>
        <h3>Solusi:</h3>
        <ul>
          <li>
            Melakukan backup data secara teratur dan menyimpannya di lokasi yang
            aman, seperti penyimpanan awan atau perangkat penyimpanan eksternal.
          </li>
          <li>
            Menggunakan aplikasi atau perangkat lunak antivirus tambahan yang
            dapat mendeteksi dan mencegah serangan ransomware.
          </li>
          <li>
            Menghindari membuka lampiran atau tautan dari email yang
            mencurigakan atau pengirim yang tidak dikenal.
          </li>
        </ul>

        <h2>5. Adware</h2>
        <p>
          Adware adalah perangkat lunak yang didukung oleh iklan, yang berarti
          menampilkan iklan kepada pengguna sebagai imbalan atas penggunaan
          perangkat lunak tersebut. Adware biasanya digunakan oleh pengembang
          untuk mendapatkan pendapatan dari software gratis atau murah yang
          mereka buat. Namun, adware juga bisa menjadi berbahaya jika
          iklan-iklan yang ditampilkan mengganggu pengalaman pengguna,
          mengumpulkan data pribadi tanpa izin, atau bahkan membawa malware yang
          bisa merusak perangkat atau mencuri informasi penting.
        </p>
        <p>Ada beberapa jenis adware yang umum ditemukan, yaitu:</p>
        <ul>
          <li>
            Legitimate adware: Adware ini adalah adware yang jujur dan
            transparan tentang keberadaan dan tujuannya. Adware ini biasanya
            memberikan pilihan kepada pengguna untuk menyetujui atau menolak
            iklan, atau memberikan opsi untuk membeli versi premium tanpa iklan.
            Contoh dari adware ini adalah Spotify, Skype, dan Adobe Reader.
          </li>
          <li>
            Potentially unwanted applications (PUAs): Adware ini adalah adware
            yang tidak diinginkan oleh pengguna karena menampilkan iklan yang
            berlebihan, mengubah pengaturan browser, atau menginstal software
            tambahan tanpa sepengetahuan pengguna. Adware ini bisa masuk ke
            perangkat melalui download software gratis, klik iklan pop-up, atau
            kunjungi situs tidak aman. Contoh dari adware ini adalah Babylon,
            Opencandy, Go.Mail.Ru, dan Mystart Search.
          </li>
        </ul>
        <p>
          Untuk menghindari adware yang berbahaya, ada beberapa langkah yang
          bisa dilakukan, antara lain:
        </p>
        <ul>
          <li>
            Kunjungi situs yang sudah memasang SSL, yaitu situs yang memiliki
            ikon gembok di sebelah alamat URL. SSL adalah protokol keamanan yang
            melindungi data yang dikirim antara browser dan server dari
            penyadapan atau pemalsuan.
          </li>
          <li>
            Jangan sembarang mengklik pop-up iklan, terutama yang menawarkan
            hadiah, unduhan gratis, atau peringatan palsu. Pop-up iklan bisa
            menjadi jebakan untuk mengarahkan pengguna ke situs berbahaya atau
            mengunduh software berbahaya.
          </li>
          <li>
            Hindari download file ilegal, seperti software bajakan, game crack,
            atau film pirat. File-file ini bisa menyembunyikan adware atau
            malware di dalamnya dan merusak perangkat pengguna.
          </li>
          <li>
            Perbarui versi sistem operasi Anda secara berkala untuk mendapatkan
            fitur keamanan terbaru dan menutup celah-celah yang bisa
            dimanfaatkan oleh adware atau malware.
          </li>
          <li>
            Update antivirus Anda secara rutin dan lakukan scan secara berkala
            untuk mendeteksi dan menghapus adware atau malware yang mungkin ada
            di perangkat Anda.
          </li>
          <li>
            Hapus aplikasi atau software yang mencurigakan, terutama yang tidak
            Anda ingat menginstalnya atau tidak Anda gunakan lagi. Aplikasi atau
            software ini bisa menjadi sumber adware atau malware yang merugikan
            Anda.
          </li>
        </ul>
        <h2>Referensi</h2>
        <ol>
          <li>
            <a href="https://kumparan.com/kumparantech/5-ancaman-serangan-siber-yang-diprediksi-semakin-marak-di-2021-1uRq0ggUtvy">
              5 Ancaman Serangan Siber yang Diprediksi Semakin Marak di 2021
            </a>
          </li>
          <li>
            <a href="https://ejournal.upi.edu/index.php/TELNECT/article/view/40866">
              Studi Tentang Ancaman dan Solusi Serangan Siber di Indonesia
            </a>
          </li>
          <li>
            <a href="https://www.exabytes.co.id/blog/tipe-ancaman-cyber-security/">
              9 Tipe Ancaman Cyber Security Yang Harus Kamu Waspadai
            </a>
          </li>
          <li>
            <a href="http://ejournal.unis.ac.id/index.php/UNISTEK/article/view/645/pdf">
              Ancaman, Serangan dan Tindakan Perlindungan pada Keamanan ... -
              UNIS
            </a>
          </li>
          <li>
            <a href="https://www.cnnindonesia.com/nasional/20211018152232-20-704867/jenderal-andika-perkasa-akan-tentukan-langkah-setelah-1-januari-2023">
              Jenderal Andika Perkasa akan Tentukan Langkah Setelah 1 Januari
              2023
            </a>
          </li>
          <li>
            <a href="https://www.niagahoster.co.id/blog/serangan-brute-force/">
              Serangan Brute Force
            </a>
          </li>
          <li>
            <a href="https://www.dewaweb.com/blog/mengenal-brute-force-attack-dan-cara-menghindarinya/">
              Mengenal Brute Force Attack dan Cara Menghindarinya
            </a>
          </li>
          <li>
            <a href="https://www.hostinger.co.id/tutorial/apa-itu-brute-force/">
              Apa Itu Brute Force?
            </a>
          </li>
          <li>
            <a href="https://www.niagahoster.co.id/blog/adware-adalah/">
              Adware: Pengertian dan Contohnya
            </a>
          </li>
          <li>
            <a href="https://cloudstorage.co.id/blog/apa-itu-adware-dan-berikut-contoh-contohnya/">
              Apa Itu Adware dan Contoh-contohnya
            </a>
          </li>
          <li>
            <a href="https://jagad.id/pengertian-adware-beserta-contohnya/">
              Pengertian Adware Beserta Contohnya
            </a>
          </li>
          <li>
            <a href="https://blog.rumahweb.com/adware-adalah/">
              Adware: Pengertian dan Penjelasan
            </a>
          </li>
          <li>
            <a href="https://www.dewaweb.com/blog/pengertian-keylogger/">
              Pengertian Keylogger
            </a>
          </li>
          <li>
            <a href="https://vocasia.id/blog/pengertian-keylogger/">
              Apa Itu Keylogger?
            </a>
          </li>
          <li>
            <a href="https://www.kompiwin.com/aplikasi-keylogger/">
              Aplikasi Keylogger
            </a>
          </li>
          <li>
            <a href="https://bitocto.com/octopedia/pengertian-keylogger/">
              Pengertian Keylogger
            </a>
          </li>
          <li>
            <a href="https://www.mas-software.com/blog/keylogger-adalah">
              Keylogger: Pengertian dan Contohnya
            </a>
          </li>
          <li>
            <a href="https://www.eccouncil.org/cybersecurity-exchange/penetration-testing/privilege-escalations-attacks/">
              Privilege Escalation Attacks
            </a>
          </li>
          <li>
            <a href="https://www.beyondtrust.com/blog/entry/privilege-escalation-attack-defense-explained">
              Privilege Escalation Attack Defense Explained
            </a>
          </li>
          <li>
            <a href="https://www.crowdstrike.com/cybersecurity-101/privilege-escalation/">
              Cybersecurity 101: Privilege Escalation
            </a>
          </li>
          <li>
            <a href="https://crashtest-security.com/privilege-escalation-guide/">
              Privilege Escalation Guide
            </a>
          </li>
        </ol>
      </article>
    </>
  );
}
