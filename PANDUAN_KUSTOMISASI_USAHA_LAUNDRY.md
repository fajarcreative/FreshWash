# 🧺 PANDUAN LENGKAP KUSTOMISASI & WHITELABEL APLIKASI SMART LAUNDRY
> **Panduan Praktis Mengganti Identitas Aplikasi untuk Klien / Usaha Laundry Lain Tanpa Mengubah Desain & Tampilan Asli Sedikitpun.**

---

## 📑 DAFTAR ISI
1. [Prinsip Kerja Sistem Whitelabel](#1-prinsip-kerja-sistem-whitelabel)
2. [Formulir Data Klien (Siap Kirim ke Pemilik Laundry)](#2-formulir-data-klien-siap-kirim-ke-pemilik-laundry)
3. [Langkah 1: Mengisi Konfigurasi Utama di `config.js` (3–5 Menit)](#3-langkah-1-mengisi-konfigurasi-utama-di-configjs-35-menit)
4. [Langkah 2: Menyesuaikan Ikon & Logo PWA](#4-langkah-2-menyesuaikan-ikon--logo-pwa)
5. [Langkah 3: Menyesuaikan File `manifest.json`](#5-langkah-3-menyesuaikan-file-manifestjson)
6. [Langkah 4: Menyesuaikan Daftar Harga & Layanan (Opsional)](#6-langkah-4-menyesuaikan-daftar-harga--layanan-opsional)
7. [Langkah 5: Cara Publikasi / Deploy ke Pelanggan](#7-langkah-5-cara-publikasi--deploy-ke-pelanggan)
8. [Tanya Jawab & Tips Penting (FAQ)](#8-tanya-jawab--tips-penting-faq)

---

## 1. Prinsip Kerja Sistem Whitelabel

Aplikasi ini telah dirancang dengan arsitektur **Whitelabel Modular**:
- **Desain, Warna, Layout, dan Animasi**: 100% Terjaga dan tidak akan berubah.
- **Pusat Pengaturan Identitas**: Terpusat di satu file tunggal, yaitu **`config.js`**.
- **Otomatisasi**: Saat `config.js` diubah, seluruh nomor WhatsApp penerima pesanan, nama toko, nama pemilik, nomor rekening bank (BCA, Mandiri, BRI, BSI), hingga barcode QRIS akan otomatis terbarui di seluruh halaman dan modal aplikasi.

---

## 2. Formulir Data Klien (Siap Kirim ke Pemilik Laundry)

Copy-paste template pesan di bawah ini dan kirimkan ke calon klien/pemilik laundry baru via WhatsApp:

```text
Halo Bapak/Ibu [Nama Pemilik Laundry],

Untuk menyiapkan aplikasi Smart Laundry pesanan antar-jemput online milik usaha Anda, mohon bantu lengkapi data profil usaha di bawah ini ya:

1. NAMA USAHA LAUNDRY:
   (Contoh: Berkah Express Laundry / D'Clean Laundry)

2. NAMA LENGKAP PEMILIK / KASIR:
   (Contoh: Ahmad Santoso)

3. SAPAAN RAMAH UNTUK CHAT:
   (Contoh: Pak Ahmad / Mas Budi / Mbak Rina)

4. NO. WHATSAPP PENERIMA PESANAN:
   (Nomor WhatsApp yang akan menerima pesan order & bukti bayar dari pelanggan)
   (Contoh: 081234567890)

5. KOTA & ALAMAT OPERASIONAL:
   (Contoh: Jl. Rungkut Madya No. 88, Surabaya)

6. DATA REKENING BANK TOKO (Untuk Ditransfer Pelanggan):
   • BCA: No. Rekening & Atas Nama
   • Mandiri: No. Rekening & Atas Nama
   • BRI: No. Rekening & Atas Nama
   • BSI: No. Rekening & Atas Nama
   (Bisa diisi bank yang tersedia saja)

7. DATA PEMBAYARAN QRIS:
   • Nama Toko di QRIS:
   • Kode NMID (angka di bawah barcode QRIS):
   • Atau lampirkan foto fisik barcode QRIS toko Anda (jika ada)

Terima kasih banyak! Aplikasi Anda akan segera kami aktifkan. 🙏
```

---

## 3. Langkah 1: Mengisi Konfigurasi Utama di `config.js` (3–5 Menit)

1. Buka file **`config.js`** di text editor (VS Code, Notepad, dll).
   *(Anda juga bisa melihat contoh pengisian lengkap di file `config.example.js`)*.
2. Edit bagian yang diperlukan:

### A. Identitas Brand (`brand`)
```javascript
brand: {
  name: "Berkah Laundry",               // Nama brand utama yang tampil di header
  shortName: "Berkah",                  // Nama singkat untuk icon PWA
  fullName: "Berkah Express Laundry",   // Nama lengkap toko
  tagline: "Laundry Cepat, Bersih, Wangi & Antar-Jemput Gratis",
  city: "Surabaya",
  fullAddress: "Jl. Raya Rungkut Madya No. 88, Kota Surabaya",
  version: "v1.0.0"
}
```

### B. Data Pemilik & Nomor WhatsApp Penerima Order (`owner`)
> [!IMPORTANT]
> Nomor WhatsApp tujuan pada `phone` **HARUS** berformat angka internasional: diawali `62`, **TANPA** tanda plus (`+`), **TANPA** spasi, dan **TANPA** strip (`-`). Contoh: `6281234567890`.

```javascript
owner: {
  name: "Haji Ahmad Santoso",
  salutation: "Pak Ahmad",              // Dipakai di salam pesan WA otomatis pelanggan
  phone: "6281234567890",              // Format: 628...
  displayPhone: "0812-3456-7890",       // Tampilan nomor di layar untuk pelanggan
  email: "berkahlaundry.sub@gmail.com"
}
```

### C. Rekening Bank & QRIS Toko (`payment`)
```javascript
payment: {
  qris: {
    type: "generated",                  // 'generated' atau 'custom_image'
    storeName: "Berkah Express Laundry",
    merchantName: "BERKAH EXPRESS LAUNDRY",
    accountHolder: "HAJI AHMAD SANTOSO",
    nmid: "ID1088776655443",            // Nomor NMID resmi milik klien
    city: "Surabaya",
    customImageUrl: ""                  // Isi jika type: 'custom_image', misal: 'assets/qris-klien.jpg'
  },
  banks: {
    bca: {
      accountNumber: "0182 9912 34",    // Tampilan nomor dengan spasi
      cleanNumber: "0182991234",        // Angka murni untuk tombol Salin otomatis
      accountHolder: "HAJI AHMAD SANTOSO"
    },
    mandiri: {
      accountNumber: "1420 0188 7766",
      cleanNumber: "142001887766",
      accountHolder: "HAJI AHMAD SANTOSO"
    },
    bri: {
      accountNumber: "0021 0100 8822 501",
      cleanNumber: "002101008822501",
      accountHolder: "HAJI AHMAD SANTOSO"
    },
    bsi: {
      accountNumber: "7211 0022 33",
      cleanNumber: "7211002233",
      accountHolder: "HAJI AHMAD SANTOSO"
    }
  }
}
```

3. Simpan file `config.js`.

---

## 4. Langkah 2: Menyesuaikan Ikon & Logo PWA

Aplikasi ini dilengkapi file generator otomatis: **`generate_icons.py`** yang tidak memerlukan library pihak ketiga (murni Python standar).

### Cara A (Otomatis dengan Generator Python):
1. Buka `generate_icons.py`.
2. Jika ingin mengganti warna latar ikon, ubah baris warna RGB:
   ```python
   bg = (0, 104, 95, 255) # Ganti sesuai warna favorit klien (RGBA)
   ```
3. Jalankan terminal:
   ```bash
   python3 generate_icons.py
   ```
4. Generator otomatis memperbarui semua ikon di folder `assets/` (`icon.svg`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`).

### Cara B (Menggunakan Logo Asli Milik Klien):
Jika klien sudah memiliki file gambar logo bulat/kotak sendiri:
1. Siapkan logo beresolusi 512x512 pixel (PNG).
2. Simpan dan timpa file berikut di folder `assets/`:
   - `assets/icon-192.png` (ukuran 192x192 px)
   - `assets/icon-512.png` (ukuran 512x512 px)
   - `assets/apple-touch-icon.png` (ukuran 180x180 px)

---

## 5. Langkah 3: Menyesuaikan File `manifest.json`

Buka file **`manifest.json`** di root folder dan sesuaikan nama aplikasinya:

```json
{
  "name": "Berkah Laundry - Smart Management",
  "short_name": "Berkah Laundry",
  "description": "Smart Laundry Management & On-Demand Pickup System",
  "start_url": "./index.html",
  "scope": "./",
  "display": "standalone",
  "background_color": "#faf8ff",
  "theme_color": "#00685f"
}
```

> [!TIP]
> Nama di `short_name` adalah nama yang akan muncul di bawah ikon aplikasi saat pelanggan menginstal aplikasi ini ke layar beranda HP Android & iPhone mereka.

---

## 6. Langkah 4: Menyesuaikan Daftar Harga & Layanan (Opsional)

Jika pemilik laundry baru memiliki harga paket cuci kiloan atau satuan yang berbeda, Anda dapat menyesuaikannya di file **`index.html`** pada variabel **`LAUNDRY_CATALOG`** (sekitar baris 3000):

```javascript
const LAUNDRY_CATALOG = {
  kiloan: {
    title: 'Laundry Kiloan',
    packages: [
      { id: 'regular', name: 'Cuci Komplit Reguler (2 Hari)', price: 8000, desc: 'Cuci + Kering + Setrika Uap Rapi' },
      { id: 'express', name: 'Cuci Komplit Kilat (24 Jam)', price: 12000, desc: 'Prioritas Selesai dalam 24 Jam' }
    ]
  },
  sepatu: {
    title: 'Cuci Sepatu & Tas',
    packages: [
      { id: 'sneakers', name: 'Deep Clean Sneakers', price: 25000, desc: 'Pembersihan mendalam sol & upper' }
    ]
  }
};
```
*(Jika harga klien sama dengan bawaan, Anda tidak perlu mengubah bagian ini sama sekali).*

---

## 7. Langkah 5: Cara Publikasi / Deploy ke Pelanggan

Pilih salah satu opsi publikasi berikut yang paling mudah bagi Anda:

### Opsi A: GitHub Pages (Gratis & Paling Praktis)
1. Buat repositori baru di GitHub klien atau akun Anda (misal: `https://github.com/username/berkah-laundry`).
2. Masukkan semua file proyek ke repositori tersebut:
   ```bash
   git init
   git add .
   git commit -m "Inisialisasi aplikasi Berkah Laundry"
   git branch -M main
   git remote add origin https://github.com/username/berkah-laundry.git
   git push -u origin main
   ```
3. Buka GitHub > **Settings** > **Pages** > Pada *Branch*, pilih **`main`** dan folder **`/ (root)`**, klik **Save**.
4. Dalam 1-2 menit, link website laundry klien Anda sudah aktif di:
   `https://username.github.io/berkah-laundry/`

### Opsi B: Vercel / Netlify (Domain Sendiri seperti `berkahlaundry.com`)
1. Buka [vercel.com](https://vercel.com) atau [netlify.com](https://netlify.com).
2. Hubungkan repositori GitHub Anda atau cukup drag-and-drop folder ini.
3. Klik **Deploy**.
4. Anda dapat menyambungkan domain custom klien (misal: `www.berkahlaundry.com`) langsung dengan SSL HTTPS gratis otomatis.

### Opsi C: Web Hosting Tradisional (cPanel)
1. Buka cPanel hosting klien.
2. Buka **File Manager** > folder **`public_html`**.
3. Upload seluruh isi folder proyek ini ke dalam `public_html`.
4. Aplikasi langsung bisa diakses lewat domain utama klien.

---

## 8. Tanya Jawab & Tips Penting (FAQ)

### Q1: Apakah nomor WhatsApp owner pasti menerima pesan saat pelanggan klik pesan/bayar?
**Ya!** Sistem aplikasi menggunakan link resmi `https://wa.me/[ownerPhone]?text=...`. Saat pelanggan menekan tombol konfirmasi, WhatsApp pelanggan langsung terbuka dengan template pesan pesanan lengkap (nama pelanggan, alamat, waktu jemput, rincian pakaian/sepatu, total harga, dan bukti transfer).

### Q2: Mengapa di HP saya masih muncul nama/nomor lama setelah mengedit `config.js`?
Hal ini disebabkan oleh cache Service Worker PWA browser.
**Solusinya:**
1. Buka file `service-worker.js`.
2. Naikkan nomor versi cache (misalnya dari `freshwash-pwa-v8` menjadi `freshwash-pwa-v9`).
3. Atau di HP pelanggan: Buka browser > Setelan Situs > Hapus Data Situs / Refresh keras (Hard Refresh).

### Q3: Bagaimana jika klien hanya punya 1 rekening bank (misal hanya BCA)?
Tidak masalah! Anda cukup mengisi rekening BCA di `config.js`. Rekening lainnya bisa diisi nomor yang sama atau dibiarkan sebagai opsi cadangan.

---

## 🎯 Ringkasan 3 Menit Rebranding:
1. Isi data klien di **`config.js`**.
2. Sesuaikan nama di **`manifest.json`**.
3. Jalankan `python3 generate_icons.py` untuk ikon baru.
4. Upload / deploy ke hosting. **Selesai!** 🚀
