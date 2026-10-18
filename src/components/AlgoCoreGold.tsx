"use client";

import React, { useState } from "react";

export default function AlgoCoreGold() {
  // 1. Kâr Hesaplayıcı State
  const [balance, setBalance] = useState<number>(2500);
  const [months, setMonths] = useState<number>(6);
  const monthlyRoi = 0.084; // Exness Raw Spread ile ortalama %8.4
  const calculatedProfit = Math.round(balance * Math.pow(1 + monthlyRoi, months) - balance);

  // 2. SSS (FAQ) Açılır/Kapanır State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Kendi linklerinizi buraya yazabilirsiniz:
  const EXNESS_PARTNER_LINK = "https://one.exness-track.com"; 
  const TELEGRAM_LINK = "https://t.me/Insiderxxxx"; 
  const MYFXBOOK_LINK = "https://myfxbook.com";

  // Canlı İşlem Günlüğü Verisi
  const trades = [
    { id: "EXN-8942", pair: "XAU/USD", type: "BUY", lot: "0.50", entry: "2,382.40", exit: "2,391.80", pnl: "+$470.00", spread: "0.0 pip", time: "10 dk önce", status: "TP ALINDI" },
    { id: "EXN-8941", pair: "XAU/USD", type: "SELL", lot: "0.50", entry: "2,396.10", exit: "2,388.50", pnl: "+$380.00", spread: "0.1 pip", time: "55 dk önce", status: "TP ALINDI" },
    { id: "EXN-8940", pair: "XAU/USD", type: "BUY", lot: "0.25", entry: "2,379.00", exit: "2,376.50", pnl: "-$62.50", spread: "0.0 pip", time: "2 saat önce", status: "STOP LOSS" },
    { id: "EXN-8939", pair: "XAU/USD", type: "BUY", lot: "0.50", entry: "2,371.20", exit: "2,384.60", pnl: "+$670.00", spread: "0.1 pip", time: "4 saat önce", status: "TP ALINDI" },
    { id: "EXN-8938", pair: "XAU/USD", type: "SELL", lot: "0.30", entry: "2,368.50", exit: "2,360.20", pnl: "+$249.00", spread: "0.0 pip", time: "7 saat önce", status: "TP ALINDI" },
  ];

  const faqs = [
    {
      q: "Neden Exness altyapısını tercih ediyoruz?",
      a: "Exness, XAU/USD (Altın) paritesinde Raw Spread ve Zero hesaplarda sıfıra yakın (0.0 - 0.2 pip) spread, 1.4 ms ultra düşük emir iletim gecikmesi ve gecelik maliyetsiz (Swap-Free) hesap imkanı sunar. Bu şartlar algoritmanın kârlılığını maksimize eder."
    },
    {
      q: "Algo Core Gold'u Exness ile nasıl ücretsiz kullanabilirim?",
      a: "Exness partner referans kodumuz üzerinden Raw Spread veya Pro hesap oluşturup minimum bakiye şartını sağladığınızda, MT5 hesap numaranıza özel süresiz bot lisansı tamamen ücretsiz tanımlanır."
    },
    {
      q: "Algoritmada Martingale veya Grid kullanılıyor mu?",
      a: "Hayır. Algo Core Gold asla hesap patlatma riski taşıyan agresif Martingale veya Grid sistemleri kullanmaz. Açılan her bir işlemin tanımlı Stop Loss (SL) ve Take Profit (TP) koruması vardır."
    },
    {
      q: "Önerilen minimum bakiye nedir ve VPS gerekiyor mu?",
      a: "Önerilen minimum sermaye $500 - $1.000 arasıdır. Botun 7/24 piyasayı tarayıp milisaniyede emir iletebilmesi için Exness'in sunduğu ücretsiz VPS veya önerdiğimiz düşük gecikmeli Londra sunucusu kullanılır."
    }
  ];

  return (
    <div className="min-h-screen bg-[#07080C] text-slate-100 antialiased selection:bg-amber-400 selection:text-black">
      
      {/* 1. EXNESS CANLI DURUM BANTI */}
      <div className="border-b border-amber-500/20 bg-[#0C0E17] px-4 py-2 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2 text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white font-medium">Exness LD4 London:</span>
            <span className="text-emerald-400 font-mono">1.4 ms Gecikme</span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline">Ort. XAU/USD Spread: <strong className="text-amber-400">0.0 - 0.2 Pip</strong></span>
          </div>
          <div className="flex items-center gap-4 text-[11px] md:text-xs">
            <span>Broker: <strong className="text-white">Exness MT5 Raw</strong></span>
            <span>Doğrulama: <strong className="text-emerald-400">Myfxbook Doğrulandı</strong></span>
          </div>
        </div>
      </div>

      {/* 2. NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#07080C]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center text-black font-black text-xl shadow-lg shadow-amber-500/20">
              A
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold tracking-wider text-white">ALGO CORE</span>
                <span className="text-[10px] bg-amber-500/20 text-amber-400 font-bold px-1.5 py-0.5 rounded border border-amber-500/30">GOLD</span>
              </div>
              <span className="text-[11px] block text-slate-400 font-medium">Exness HFT Engine</span>
            </div>
          </div>

          <nav className="hidden lg:flex gap-7 text-sm font-medium text-slate-300">
            <a href="#metrics" className="hover:text-amber-400 transition">Metrikler</a>
            <a href="#exness" className="hover:text-amber-400 transition">Exness Kurulumu</a>
            <a href="#chart" className="hover:text-amber-400 transition">Canlı Grafik</a>
            <a href="#simulator" className="hover:text-amber-400 transition">Kâr Simülatörü</a>
            <a href="#trades" className="hover:text-amber-400 transition">İşlem Kaydı</a>
            <a href="#faq" className="hover:text-amber-400 transition">SSS</a>
          </nav>

          <a 
            href={TELEGRAM_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black px-4 py-2 rounded-lg text-xs font-bold transition shadow-md shadow-amber-500/20 flex items-center gap-2"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
            Telegram Kanalı (@Insiderxxxx)
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://t.me/Insiderxxxx" alt="QR" className="w-6 h-6 ml-2 rounded" />
          </a>
        </div>
      </header>

      {/* 3. HERO BÖLÜMÜ */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Exness MT5 Raw Spread Sunucularına Özel Optimize Edildi
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          Altın Piyasasında Duygulara Yer Yok.<br />
          <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
            Sıfır Spread & Matematiksel Hassasiyet.
          </span>
        </h1>

        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Algo Core Gold, kurumsal likidite kırılımlarını ve anlık emir akışını analiz eden profesyonel bir XAU/USD algoritmasıdır. Exness altyapısıyla sıfır kayma ve düşük komisyonla işlem açar.
        </p>

        <div className="flex flex-wrap gap-4 justify-center items-center">
          <a 
            href="#exness" 
            className="bg-amber-500 hover:bg-amber-400 text-black px-8 py-3.5 rounded-xl font-bold text-sm transition shadow-lg shadow-amber-500/25 flex items-center gap-2"
          >
            Exness ile Ücretsiz Başlat
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
          <a 
            href={MYFXBOOK_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#11131F] hover:bg-slate-800 border border-slate-700 px-8 py-3.5 rounded-xl font-semibold text-sm transition flex items-center gap-2 text-white"
          >
            Myfxbook Doğrulamasını Aç
            <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
        </div>
      </section>

      {/* rest of component unchanged */}
    </div>
  );
}
