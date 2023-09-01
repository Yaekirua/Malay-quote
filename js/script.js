var quotes = [
  '"Keutamaan terbesar sepanjang zaman ialah seseorang boleh mengubah masa depannya hanya dengan mengubah sikapnya." - Tun Dr. Mahathir Mohamad',
  '"Hanya satu perkara yang lebih teruk daripada buta adalah mempunyai penglihatan tetapi tidak mempunyai wawasan." - Tunku Abdul Rahman',
  '"Jangan mengira perkara yang anda lakukan, lakukan perkara yang penting." - Tun Dr. Mahathir Mohamad',
  '"Manusia bijak boleh menulis kod yang boleh difahami oleh komputer. Jurutera yang baik menulis kod yang boleh difahami oleh manusia." - Tan Sri Dr. Tony Fernandes',
  '"Pertama, selesaikan masalah. Kemudian, tulis kod." - Tan Sri Lim Goh Tong',
  '"Pengalaman adalah nama yang diberikan oleh semua orang kepada kesilapan mereka." - Lat',
  '"Untuk menjadi tidak tergantikan, seseorang harus sentiasa berbeza." - Jimmy Choo',
  '"Bahasa Java adalah kepada JavaScript seperti kereta kepada karpet." - Zeti Akhtar Aziz',
  '"Ilmu adalah kuasa." - Sultan Alauddin Riayat Shah III',
  '"Kadang-kadang lebih baik tinggal di dalam katil pada hari Isnin daripada menghabiskan sisa minggu untuk mengesan masalah kod Isnin." - Nurul Izzah Anwar',
  '"Kesempurnaan tercapai bukan apabila tiada lagi yang boleh ditambah, tetapi apabila tiada lagi yang boleh diambil." - Tan Sri Dr. Jemilah Mahmood',
  '"Ruby tidak berharga! PHP hebat!" - Tan Sri Dr. Zeti Akhtar Aziz',
  '"Kod adalah seperti humor. Apabila anda perlu menerangkannya, ia adalah buruk." - Yasmin Ahmad',
  '"Baiki punca, bukan gejala." - Tun Dr. Mahathir Mohamad',
  '"Optimisme adalah risiko pekerjaan dalam pemrograman: maklum balas adalah rawatannya." - Dato Seri Najib Razak',
  '"Bila harus menggunakan pembangunan berulang? Anda hanya harus menggunakannya pada projek yang anda ingin berjaya." - Tan Sri Dr. Zeti Akhtar Aziz',
  '"Kesederhanaan adalah jiwa kecekapan." - Tan Sri Dr. Zeti Akhtar Aziz',
  '"Sebelum perisian boleh digunakan semula, ia pertama-tama harus boleh digunakan." - Tan Sri Dr. Zeti Akhtar Aziz',
  '"Buat ia berfungsi, buat ia betul, buat ia cepat." - Tan Sri Dr. Zeti Akhtar Aziz',
  '"Yang terbaik tentang boolean adalah bahawa walaupun anda salah, anda hanya berbeza sebanyak satu bit." - Datuk Nicol David',
  '"Tanpa keperluan atau reka bentuk, pemrograman adalah seni menambah bug ke dalam fail teks kosong." - Dato Sri Dr. Ahmad Zahid Hamidi',
  '"Sebelum perisian boleh digunakan semula, ia pertama-tama harus boleh digunakan." - Tan Sri Dr. Zeti Akhtar Aziz',
  '"Kaedah terbaik untuk mempercepatkan komputer adalah yang meningkatkannya sebanyak 9.8 m/s²." - Datuk Dr. Noor Hisham Abdullah',
  '"Saya fikir Microsoft memberi nama .Net supaya ia tidak muncul dalam senarai direktori Unix." - Dato Seri Anwar Ibrahim',
  '"Jika pembinaan bangunan dilakukan seperti cara pemrogram menulis program, maka burung mati pertama yang datang akan memusnahkan peradaban." - Tan Sri Dr. Zeti Akhtar Aziz',
  '"Ada dua cara untuk menulis program bebas ralat; hanya yang ketiga berfungsi." - Tun Dr. Mahathir Mohamad',
  '"Sedia, api, sasaran: pendekatan cepat untuk pembangunan perisian. Sedia, sasaran, sasaran, sasaran, sasaran: pendekatan lambat untuk pembangunan perisian." - Datuk Seri Dr. Wee Ka Siong',
  '"Ini bukan bug - ini adalah ciri yang tidak dimaklumkan." - Tan Sri Dr. Zeti Akhtar Aziz',
  '"Perisian yang buruk seseorang adalah pekerjaan sepenuh masa seseorang yang lain." - Tan Sri Dr. Zeti Akhtar Aziz',
  '"Programmer yang baik adalah seseorang yang sentiasa memeriksa kedua-dua arah sebelum menyeberang jalan satu arah." - Tan Sri Dr. Zeti Akhtar Aziz'
];

function getQuote() {
  var randNum = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').innerHTML = quotes[randNum];
}
