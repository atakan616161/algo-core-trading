"use client";

import React, { useState } from "react";

export default function AlgoCoreGold() {
  const [balance, setBalance] = useState<number>(2500);
  const [months, setMonths] = useState<number>(6);
  const monthlyRoi = 0.084;
  const calculatedProfit = Math.round(balance * Math.pow(1 + monthlyRoi, months) - balance);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const EXNESS_PARTNER_LINK = "#";
  const TELEGRAM_LINK = "https://t.me/Insiderxxxx";
  const MYFXBOOK_LINK = "#";

  const trades = [
    { id: "EXN-8942", pair: "XAU/USD", type: "BUY", lot: "0.50", entry: "2,382.40", exit: "2,391.80", pnl: "+$470.00", spread: "0.0 pip", time: "10 dk önce", status: "TP ALINDI" },
    { id: "EXN-8941", pair: "XAU/USD", type: "SELL", lot: "0.50", entry: "2,396.10", exit: "2,388.50", pnl: "+$380.00", spread: "0.1 pip", time: "55 dk önce", status: "TP ALINDI" },
    { id: "EXN-8940", pair: "XAU/USD", type: "BUY", lot: "0.25", entry: "2,379.00", exit: "2,376.50", pnl: "-$62.50", spread: "0.0 pip", time: "2 saat önce", status: "STOP LOSS" },
    { id: "EXN-8939", pair: "XAU/USD", type: "BUY", lot: "0.50", entry: "2,371.20", exit: "2,384.60", pnl: "+$670.00", spread: "0.1 pip", time: "4 saat önce", status: "TP ALINDI" },
    { id: "EXN-8938", pair: "XAU/USD", type: "SELL", lot: "0.30", entry: "2,368.50", exit: "2,360.20", pnl: "+$249.00", spread: "0.0 pip", time: "7 saat önce", status: "TP ALINDI" }
  ];

  const faqs = [
    { q: "Neden Exness altyapısını tercih ediyoruz?", a: "Exness, XAU/USD (Altın) paritesinde Raw Spread ve Zero hesaplarda sıfıra yakın (0.0 - 0.2 pip) spread, 1.4 ms ultra düşük emir iletim gecikmesi ve gecelik maliyetsiz (Swap-Free) hesap imkanı sunar. Bu şartlar algoritmanın kârlılığını maksimize eder." },
    { q: "Algo Core Gold'u Exness ile nasıl ücretsiz kullanabilirim?", a: "Exness partner referans kodumuz üzerinden Raw Spread veya Pro hesap oluşturup minimum bakiye şartını sağladığınızda, MT5 hesap numaranıza özel süresiz bot lisansı tamamen ücretsiz tanımlanır." },
    { q: "Algoritmada Martingale veya Grid kullanılıyor mu?", a: "Hayır. Algo Core Gold asla hesap patlatma riski taşıyan agresif Martingale veya Grid sistemleri kullanmaz. Açılan her bir işlemin tanımlı Stop Loss (SL) ve Take Profit (TP) koruması vardır." },
    { q: "Önerilen minimum bakiye nedir ve VPS gerekiyor mu?", a: "Önerilen minimum sermaye $500 - $1.000 arasıdır. Botun 7/24 piyasayı tarayıp milisaniyede emir iletebilmesi için Exness'in sunduğu ücretsiz VPS veya önerdiğimiz düşük gecikmeli Londra sunucusu kullanılır." }
  ];

  return (
    <div className="min-h-screen bg-[#07080C] text-slate-100 antialiased selection:bg-amber-400 selection:text-black">
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

      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#07080C]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center text-black font-black text-xl shadow-lg shadow-amber-500/20">A</div>
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

          <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black px-4 py-2 rounded-lg text-xs font-bold transition shadow-md shadow-amber-500/20 flex items-center gap-2">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
            Telegram Kanalı (@Insiderxxxx)
            <img src="/telegram-qr.svg" alt="QR" className="w-6 h-6 ml-2 rounded" />
          </a>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Exness MT5 Raw Spread Sunucularına Özel Optimize Edildi
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          Altın Piyasasında Duygulara Yer Yok.<br />
          <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">Sıfır Spread & Matematiksel Hassasiyet.</span>
        </h1>

        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Algo Core Gold, kurumsal likidite kırılımlarını ve anlık emir akışını analiz eden profesyonel bir XAU/USD algoritmasıdır. Exness altyapısıyla sıfır kayma ve düşük komisyonla işlem açar.
        </p>

        <div className="flex flex-wrap gap-4 justify-center items-center">
          <a href="#exness" className="bg-amber-500 hover:bg-amber-400 text-black px-8 py-3.5 rounded-xl font-bold text-sm transition shadow-lg shadow-amber-500/25 flex items-center gap-2">Exness ile Ücretsiz Başlat<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg></a>
          <a href={MYFXBOOK_LINK} className="bg-[#11131F] hover:bg-slate-800 border border-slate-700 px-8 py-3.5 rounded-xl font-semibold text-sm transition flex items-center gap-2 text-white">Myfxbook Doğrulamasını Aç<svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg></a>
        </div>
      </section>

      <section id="metrics" className="max-w-6xl mx-auto px-6 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#0F111A] border border-slate-800/80 p-5 rounded-2xl"><span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">Win Rate (Kazanma)</span><span className="text-3xl font-extrabold text-emerald-400 font-mono">%74.8</span><span className="text-xs text-slate-500 block mt-1">1,480+ Gerçek İşlem</span></div>
          <div className="bg-[#0F111A] border border-slate-800/80 p-5 rounded-2xl"><span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">Profit Factor</span><span className="text-3xl font-extrabold text-amber-400 font-mono">2.18</span><span className="text-xs text-slate-500 block mt-1">Brüt Kâr / Zarar</span></div>
          <div className="bg-[#0F111A] border border-slate-800/80 p-5 rounded-2xl"><span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">Max Drawdown</span><span className="text-3xl font-extrabold text-white font-mono">%4.62</span><span className="text-xs text-emerald-400 block mt-1">Düşük Risk Profili</span></div>
          <div className="bg-[#0F111A] border border-slate-800/80 p-5 rounded-2xl"><span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">Aylık Ort. Getiri</span><span className="text-3xl font-extrabold text-emerald-400 font-mono">+%8.4</span><span className="text-xs text-slate-500 block mt-1">Exness Raw Hesap</span></div>
        </div>
      </section>

      <section id="exness" className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-b from-[#101322] to-[#0A0C16] border border-amber-500/25 p-8 md:p-10 rounded-3xl">
          <div className="max-w-2xl mb-8"><span className="text-amber-400 font-bold text-xs uppercase tracking-wider block mb-1">Partner Modeli</span><h2 className="text-2xl md:text-3xl font-extrabold text-white">Exness Hesabınızla 3 Adımda Başlayın</h2><p className="text-slate-400 text-sm mt-1">Referansımızla hesap açarak Algo Core Gold algoritma lisansına tamamen ücretsiz sahip olabilirsiniz.</p></div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#0B0D17] border border-slate-800 p-6 rounded-2xl relative"><span className="text-3xl font-black text-slate-700/60 absolute top-4 right-4">01</span><h3 className="text-base font-bold text-white mb-2">Exness Hesabı Açın</h3><p className="text-slate-400 text-xs mb-4 leading-relaxed">Referans bağlantımızla <strong>Raw Spread</strong> veya <strong>Zero</strong> MT5 hesabı oluşturun.</p><a href={EXNESS_PARTNER_LINK} className="text-xs text-amber-400 font-bold hover:underline inline-flex items-center gap-1">Exness Hesabı Aç →</a></div>
            <div className="bg-[#0B0D17] border border-slate-800 p-6 rounded-2xl relative"><span className="text-3xl font-black text-slate-700/60 absolute top-4 right-4">02</span><h3 className="text-base font-bold text-white mb-2">Hesap Numaranızı İletin</h3><p className="text-slate-400 text-xs mb-4 leading-relaxed">Telegram destek ekibimize MT5 hesap numaranızı iletin. Lisans anahtarınız hemen tanımlansın.</p><span className="text-xs text-emerald-400 font-medium">✓ Anında Aktivasyon</span></div>
            <div className="bg-[#0B0D17] border border-slate-800 p-6 rounded-2xl relative"><span className="text-3xl font-black text-slate-700/60 absolute top-4 right-4">03</span><h3 className="text-base font-bold text-white mb-2">Botu Çalıştırın</h3><p className="text-slate-400 text-xs mb-4 leading-relaxed">Size gönderilen <code>AlgoCoreGold.ex5</code> dosyasını MT5'e ekleyin veya ücretsiz VPS'e bağlayın.</p><span className="text-xs text-slate-300 font-medium">⚡ 7/24 Otomatik İşlem</span></div>
          </div>
        </div>
      </section>

      <section id="chart" className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex justify-between items-end mb-4"><div><h2 className="text-xl md:text-2xl font-bold text-white">Canlı XAU/USD Analiz Ekranı</h2><p className="text-xs md:text-sm text-slate-400">Algoritmanın taradığı 15 dakikalık (M15) anlık canlı grafik.</p></div><span className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded border border-slate-700">OANDA / EXNESS Verisi</span></div>
        <div className="w-full h-[420px] bg-[#0E101A] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl"><iframe src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_widget&symbol=OANDA%3AXAUUSD&interval=15&hidesidetoolbar=1&symboledit=0&saveimage=0&toolbarbg=f1f3f6&studies=[]&theme=dark&style=1&timezone=Europe%2FIstanbul&withdateranges=1" className="w-full h-full border-0" title="TradingView Chart" /></div>
      </section>

      <section id="simulator" className="max-w-4xl mx-auto px-6 py-12"><div className="bg-gradient-to-b from-[#111424] to-[#0A0C16] border border-amber-500/20 p-8 rounded-3xl"><div className="text-center mb-8"><h2 className="text-2xl font-bold text-white">Getiri Projeksiyon Simülatörü</h2><p className="text-xs md:text-sm text-slate-400 mt-1">Exness Raw hesap ortalama %8.4 aylık getiri baz alınarak bileşik hesaplanır.</p></div><div className="grid md:grid-cols-2 gap-8 items-center"><div className="space-y-6"><div><div className="flex justify-between text-sm mb-2"><span className="text-slate-400">Başlangıç Sermayesi:</span><span className="text-amber-400 font-bold font-mono">${balance.toLocaleString()}</span></div><input type="range" min="500" max="50000" step="500" value={balance} onChange={(e) => setBalance(Number(e.target.value))} className="w-full accent-amber-400 cursor-pointer h-2 bg-slate-800 rounded-lg" /><div className="flex justify-between text-[11px] text-slate-500 mt-1"><span>$500</span><span>$50,000</span></div></div><div><div className="flex justify-between text-sm mb-2"><span className="text-slate-400">Çalışma Süresi:</span><span className="text-amber-400 font-bold font-mono">{months} Ay</span></div><input type="range" min="1" max="24" step="1" value={months} onChange={(e) => setMonths(Number(e.target.value))} className="w-full accent-amber-400 cursor-pointer h-2 bg-slate-800 rounded-lg" /><div className="flex justify-between text-[11px] text-slate-500 mt-1"><span>1 Ay</span><span>24 Ay</span></div></div></div><div className="bg-[#07080E] border border-slate-800 p-6 rounded-2xl text-center"><span className="text-xs text-slate-400 uppercase tracking-widest block mb-1">Tahmini Toplam Sermaye</span><div className="text-4xl font-extrabold text-emerald-400 font-mono mb-2">${(balance + calculatedProfit).toLocaleString()}</div><span className="text-xs text-slate-300">Tahmini Net Kâr: <strong className="text-amber-400 font-mono">+${calculatedProfit.toLocaleString()}</strong></span><p className="text-[10px] text-slate-500 mt-3 pt-3 border-t border-slate-800/80">* Simülasyon geçmiş verilere dayanır. Gelecekteki piyasa dalgalanmalarına göre değişiklik gösterebilir.</p></div></div></div></section>

      <section id="trades" className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center mb-4"><h2 className="text-xl font-bold text-white">Canlı Exness Hesap İşlem Kayıtları</h2><span className="text-xs text-slate-400 font-mono">Otomatik Senkronize</span></div>
        <div className="overflow-x-auto bg-[#0E101A] border border-slate-800 rounded-2xl"><table className="w-full text-left text-xs"><thead className="bg-[#141724] text-slate-400 uppercase border-b border-slate-800"><tr><th className="p-3.5">İşlem ID</th><th className="p-3.5">Parite</th><th className="p-3.5">Tip</th><th className="p-3.5">Lot</th><th className="p-3.5">Giriş / Çıkış</th><th className="p-3.5">Spread</th><th className="p-3.5">Net K/Z</th><th className="p-3.5">Zaman</th></tr></thead><tbody className="divide-y divide-slate-800/60 font-mono">{trades.map((t) => (<tr key={t.id} className="hover:bg-slate-800/30 transition"><td className="p-3.5 text-slate-400">{t.id}</td><td className="p-3.5 font-bold text-white">{t.pair}</td><td className="p-3.5"><span className={`px-2 py-0.5 rounded text-[10px] font-bold ${t.type === 'BUY' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>{t.type}</span></td><td className="p-3.5 text-slate-300">{t.lot}</td><td className="p-3.5 text-slate-300">{t.entry} → {t.exit}</td><td className="p-3.5 text-amber-400">{t.spread}</td><td className={`p-3.5 font-bold ${t.pnl.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>{t.pnl}</td><td className="p-3.5 text-slate-500 font-sans">{t.time}</td></tr>))}</tbody></table></div>
      </section>

      <section id="faq" className="max-w-4xl mx-auto px-6 py-12"><h2 className="text-2xl md:text-3xl font-extrabold text-white text-center mb-8">Sıkça Sorulan Sorular</h2><div className="space-y-3">{faqs.map((faq, idx) => (<div key={idx} className="bg-[#0E101A] border border-slate-800 rounded-xl overflow-hidden"><button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full p-4 text-left font-semibold text-slate-200 flex justify-between items-center hover:text-amber-400 transition text-sm"><span>{faq.q}</span><span className="text-amber-400 text-lg leading-none">{openFaq === idx ? "−" : "+"}</span></button>{openFaq === idx && <div className="px-4 pb-4 text-xs md:text-sm text-slate-400 leading-relaxed border-t border-slate-800/40 pt-3">{faq.a}</div>}</div>))}</div></section>

      <footer className="border-t border-slate-800/80 bg-[#05060A] py-10 px-6"><div className="max-w-6xl mx-auto"><div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6"><div className="flex items-center gap-2"><span className="text-base font-bold text-white tracking-wider">ALGO CORE GOLD</span><span className="text-xs text-amber-400 font-mono">x EXNESS MT5</span></div><div className="flex gap-6 text-xs text-slate-400"><a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">Telegram</a><a href={MYFXBOOK_LINK} className="hover:text-amber-400">Myfxbook</a><a href={EXNESS_PARTNER_LINK} className="hover:text-amber-400">Exness Partner</a></div></div><div className="border-t border-slate-800/60 pt-5 text-center text-[11px] text-slate-500 leading-relaxed"><p className="text-amber-400/90 font-semibold mb-1">⚠️ Önemli Risk Açıklaması & Yasal Uyarı</p><p>Forex ve altın (XAU/USD) işlemleri yüksek düzeyde risk içerir ve yatırdığınız sermayenin bir kısmını veya tamamını kaybetmenize neden olabilir. Sitede yer alan geçmiş performanslar, simülasyonlar ve analizler gelecekteki getirilerin garantisi değildir. Algo Core Gold bir finansal danışman veya portföy yöneticisi değildir; altyapı ve yazılım sağlayıcısıdır.</p><p className="mt-3">© {new Date().getFullYear()} Algo Core Gold. Tüm hakları saklıdır.</p></div></div></footer>
    </div>
  );
}
