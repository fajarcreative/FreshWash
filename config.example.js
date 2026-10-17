/**
 * ============================================================================
 * CONTOH TEMPLATE KUSTOMISASI UNTUK USAHA LAUNDRY KLIEN BARU
 * (CONTOH: "BERKAH EXPRESS LAUNDRY")
 * ============================================================================
 * 
 * CARA MENGGUNAKAN FILE INI:
 * 1. Duplikasi file ini dan beri nama: config.js (menggantikan config.js bawaan).
 * 2. Sesuaikan data di bawah sesuai data pemilik laundry yang baru.
 * 3. Simpan (Save) file.
 * 4. Refresh website di browser. Aplikasi otomatis menggunakan identitas laundry baru!
 * 
 * TANPA PERLU MENGUBAH HTML, CSS, ATAU TAMPILAN APLIKASI SAMA SEKALI.
 * ============================================================================
 */

(function() {
  'use strict';

  window.APP_CONFIG = {
    // --------------------------------------------------------------------------
    // 1. IDENTITAS USAHA & BRANDING LAUNDRY KLIEN
    // --------------------------------------------------------------------------
    brand: {
      name: "Berkah Laundry",               // Nama brand utama (muncul di header & judul)
      shortName: "Berkah",                  // Nama singkat untuk badge
      fullName: "Berkah Express Laundry",   // Nama lengkap usaha laundry
      tagline: "Laundry Cepat, Bersih, Wangi & Antar-Jemput Gratis",
      logoText: "Berkah Laundry",
      headerScreenLabel: "Home",
      city: "Surabaya",                     // Kota operasional
      fullAddress: "Jl. Raya Rungkut Madya No. 88, Rungkut, Kota Surabaya, Jawa Timur 60293",
      version: "v1.0.0"
    },

    // --------------------------------------------------------------------------
    // 2. DATA PEMILIK / OWNER LAUNDRY (Penerima WhatsApp & Pesanan Masuk)
    // --------------------------------------------------------------------------
    owner: {
      name: "Haji Ahmad Santoso",          // Nama lengkap pemilik usaha
      salutation: "Pak Ahmad",              // Sapaan ramah di pesan WhatsApp (contoh: "Pak Ahmad", "Mbak Rina", "Mas Budi")
      // No. WhatsApp TUJUAN (PENTING: Gunakan format internasional 62... TANPA tanda +, TANPA spasi, TANPA tanda strip)
      // Contoh: jika nomor HP 0812-3456-7890 -> tulis: "6281234567890"
      phone: "6281234567890",
      displayPhone: "0812-3456-7890",       // Format nomor untuk dibaca pelanggan di aplikasi
      email: "berkahlaundry.sub@gmail.com"
    },

    // --------------------------------------------------------------------------
    // 3. REKENING BANK & QRIS TOKO RESMI KLIEN
    // --------------------------------------------------------------------------
    payment: {
      // Pembayaran QRIS Toko
      qris: {
        type: "generated", // 'generated' (otomatis buat QR) atau 'custom_image' (jika punya foto barcode QRIS fisik)
        storeName: "Berkah Express Laundry",
        merchantName: "BERKAH EXPRESS LAUNDRY",
        accountHolder: "HAJI AHMAD SANTOSO",
        nmid: "ID1088776655443", // Ganti dengan NMID toko klien (ada di bawah barcode QRIS)
        city: "Surabaya",
        instructions: "Scan QRIS di atas menggunakan m-Banking atau E-Wallet (BCA, Mandiri, BRI, BSI, GoPay, OVO, ShopeePay, DANA). Uang langsung masuk ke rekening bank pemilik laundry.",
        customImageUrl: "" // Contoh jika pakai foto sendiri: "assets/qris-berkah.jpg"
      },

      // Rekening Bank Resmi Toko untuk Transfer
      banks: {
        bca: {
          id: "bca",
          bankCode: "BCA",
          bankName: "BCA (Bank Central Asia)",
          title: "Bank BCA Toko Laundry",
          label: "Transfer Bank BCA Toko",
          accountNumber: "0182 9912 34",         // Nomor rekening format spasi (untuk tampilan)
          cleanNumber: "0182991234",             // Nomor rekening tanpa spasi (untuk tombol salin)
          accountHolder: "HAJI AHMAD SANTOSO",   // Nama pemilik rekening
          instruction: "Transfer Bank Manual / m-BCA / KlikBCA",
          colorClass: "bg-blue-600"
        },
        mandiri: {
          id: "mandiri",
          bankCode: "MDR",
          bankName: "Bank Mandiri",
          title: "Bank Mandiri Toko Laundry",
          label: "Transfer Bank Mandiri Toko",
          accountNumber: "1420 0188 7766",
          cleanNumber: "142001887766",
          accountHolder: "HAJI AHMAD SANTOSO",
          instruction: "Livin by Mandiri / ATM Mandiri",
          colorClass: "bg-amber-600"
        },
        bri: {
          id: "bri",
          bankCode: "BRI",
          bankName: "BRI (Bank Rakyat Indonesia)",
          title: "Bank BRI Toko Laundry",
          label: "Transfer Bank BRI Toko",
          accountNumber: "0021 0100 8822 501",
          cleanNumber: "002101008822501",
          accountHolder: "HAJI AHMAD SANTOSO",
          instruction: "BRImo / ATM BRI",
          colorClass: "bg-sky-600"
        },
        bsi: {
          id: "bsi",
          bankCode: "BSI",
          bankName: "BSI (Bank Syariah Indonesia)",
          title: "Bank BSI (Syariah) Toko",
          label: "Transfer Bank BSI (Syariah)",
          accountNumber: "7211 0022 33",
          cleanNumber: "7211002233",
          accountHolder: "HAJI AHMAD SANTOSO",
          instruction: "BSI Mobile / ATM Bersama",
          colorClass: "bg-emerald-700"
        }
      }
    },

    // --------------------------------------------------------------------------
    // 4. PARAMETER BIAYA & OPERASIONAL TOKO
    // --------------------------------------------------------------------------
    operational: {
      freeDeliveryRadiusKm: 5,   // Radius gratis ongkir bagi member (Km)
      minOrderFreeDelivery: 30000, // Minimal belanja untuk gratis ongkir (Rp)
      softenerAddonPrice: 3000    // Harga tambahan opsi ekstra pewangi / pelembut
    },

    // --------------------------------------------------------------------------
    // 5. HELPER PENDUKUNG (Jangan diubah)
    // --------------------------------------------------------------------------
    helpers: {
      getWhatsAppBaseUrl: function() {
        return `https://wa.me/${window.APP_CONFIG.owner.phone}`;
      },
      getBank: function(code) {
        const banks = window.APP_CONFIG.payment.banks;
        return banks[code] || banks.bca;
      }
    }
  };
})();

