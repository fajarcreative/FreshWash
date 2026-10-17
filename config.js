/**
 * ============================================================================
 * KONFIGURASI APLIKASI SMART LAUNDRY MANAGEMENT SYSTEM
 * ============================================================================
 * File ini adalah file konfigurasi pusat untuk Rebranding / Whitelabel aplikasi.
 * Jika Anda ingin menggunakan aplikasi ini untuk usaha laundry lain,
 * Anda CUKUP mengubah data di bawah ini TANPA perlu mengubah desain atau kode inti.
 *
 * Simpan cadangan file ini atau lihat file 'config.example.js' untuk contoh lain.
 * ============================================================================
 */

(function() {
  'use strict';

  window.APP_CONFIG = {
    // --------------------------------------------------------------------------
    // 1. IDENTITAS USAHA & BRANDING LAUNDRY
    // --------------------------------------------------------------------------
    brand: {
      name: "FreshWash",
      shortName: "FreshWash",
      fullName: "FreshWash Bening Laundry",
      tagline: "Smart Laundry Management & On-Demand Pickup",
      logoText: "FreshWash",
      headerScreenLabel: "Home",
      city: "Jakarta",
      fullAddress: "Jl. Bening Indah No. 42, RT 03/RW 05, Jakarta Selatan",
      version: "v2.4.1"
    },

    // --------------------------------------------------------------------------
    // 2. DATA PEMILIK / OWNER LAUNDRY (Penerima WhatsApp & Pesanan)
    // --------------------------------------------------------------------------
    owner: {
      name: "Fajar Hisbulloh",
      salutation: "Mas Fajar", // Sapaan di WhatsApp (contoh: "Mas Fajar", "Kak Sarah", "Bpk. Hendra")
      // No. WhatsApp TUJUAN penerima order. Gunakan kode negara 62 TANPA simbol +, TANPA spasi, TANPA tanda hubung.
      // Contoh: 6282338903403
      phone: "6282338903403",
      displayPhone: "0823-3890-3403", // Tampilan nomor untuk dibaca pelanggan
      email: "fajarhisbulloh@gmail.com"
    },

    // --------------------------------------------------------------------------
    // 3. REKENING BANK & QRIS TOKO RESMI
    // --------------------------------------------------------------------------
    payment: {
      // Pembayaran QRIS Toko
      qris: {
        type: "generated", // 'generated' (QR otomatis via API) atau 'custom_image' (pakai foto QRIS toko fisik)
        storeName: "FreshWash Bening Laundry",
        merchantName: "FRESHWASH BENING LAUNDRY",
        accountHolder: "FAJAR HISBULLOH",
        nmid: "ID1024392819230",
        city: "Jakarta",
        instructions: "Scan QRIS pengusaha di atas untuk pembayaran pesanan. Pembayaran langsung masuk ke rekening bank pemilik laundry.",
        customImageUrl: "" // Jika punya foto QRIS fisik toko, letakkan di folder assets/ dan isi misal: 'assets/qris-toko.jpg'
      },

      // Rekening Bank Toko
      banks: {
        bca: {
          id: "bca",
          bankCode: "BCA",
          bankName: "BCA (Bank Central Asia)",
          title: "Bank BCA Toko Laundry",
          label: "Transfer Bank BCA Toko",
          accountNumber: "8277 0812 8921",
          cleanNumber: "827708128921",
          accountHolder: "FAJAR HISBULLOH",
          instruction: "Transfer Bank Manual / m-BCA",
          colorClass: "bg-blue-600"
        },
        mandiri: {
          id: "mandiri",
          bankCode: "MDR",
          bankName: "Bank Mandiri",
          title: "Bank Mandiri Toko Laundry",
          label: "Transfer Bank Mandiri Toko",
          accountNumber: "1370 0192 8821",
          cleanNumber: "137001928821",
          accountHolder: "FAJAR HISBULLOH",
          instruction: "Livin by Mandiri / ATM",
          colorClass: "bg-amber-600"
        },
        bri: {
          id: "bri",
          bankCode: "BRI",
          bankName: "BRI (Bank Rakyat Indonesia)",
          title: "Bank BRI Toko Laundry",
          label: "Transfer Bank BRI Toko",
          accountNumber: "0341 0100 2891 503",
          cleanNumber: "034101002891503",
          accountHolder: "FAJAR HISBULLOH",
          instruction: "BRImo / ATM BRI",
          colorClass: "bg-sky-600"
        },
        bsi: {
          id: "bsi",
          bankCode: "BSI",
          bankName: "BSI (Bank Syariah Indonesia)",
          title: "Bank BSI (Syariah) Toko",
          label: "Transfer Bank BSI (Syariah)",
          accountNumber: "7182 9901 82",
          cleanNumber: "7182990182",
          accountHolder: "FAJAR HISBULLOH",
          instruction: "BSI Mobile / ATM Bersama",
          colorClass: "bg-emerald-700"
        }
      }
    },

    // --------------------------------------------------------------------------
    // 4. PARAMETER BIAYA & OPERASIONAL
    // --------------------------------------------------------------------------
    operational: {
      freeDeliveryRadiusKm: 5,
      minOrderFreeDelivery: 30000,
      softenerAddonPrice: 3000
    },

    // --------------------------------------------------------------------------
    // 5. HELPER PENDUKUNG (Otomatis)
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

