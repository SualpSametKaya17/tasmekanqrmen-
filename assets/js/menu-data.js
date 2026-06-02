const MENU_DATA = {
  "tr": {
    "yiyecekler": [
      {
        "cat": "başlangıç",
        "img": "Menü/Çorbalar/corbalar.webp",
        "name": "Günün Çorbası",
        "desc": "Taze baharatlarla tatlandırılmış ve yanında ekmekle servis edilir.",
        "price": 250,
        "id": 1,
        "active": true
      },
      {
        "cat": "başlangıç",
        "img": "Menü/Başlangıçlar/kalamar-kizartmasi.webp",
        "name": "Kalamar Kızartma",
        "desc": "Beyaz şarapla marine edişmiş kalamar halkaları sosla servis yapılır.",
        "price": 400,
        "id": 2,
        "active": true
      },
      {
        "cat": "başlangıç",
        "img": "Menü/Başlangıçlar/sigara-boregi.webp",
        "name": "Sigara Böreği",
        "desc": "6 adet ince yufka ile hazırlanan, içinde peynir ve baharat içermektedir.",
        "price": 200,
        "id": 3,
        "active": true
      },
      {
        "cat": "başlangıç",
        "img": "Menü/Başlangıçlar/çin böreği.webp",
        "name": "Çin Böreği",
        "desc": "3 adet baharat ve sebzeli börek",
        "price": 250,
        "id": 4,
        "active": true
      },
      {
        "cat": "başlangıç",
        "img": "Menü/Başlangıçlar/sarımsaklı mantar.webp",
        "name": "Sarımsaklı Mantar",
        "desc": "Sarımsaklı sosla ızgara edilmiş mantarlar.",
        "price": 250,
        "id": 5,
        "active": true
      },
      {
        "cat": "başlangıç",
        "img": "Menü/Başlangıçlar/ızgara hellim.webp",
        "name": "Izgara Hellim",
        "desc": "4 parça ızgara edilmiş hellim.",
        "price": 200,
        "id": 6,
        "active": true
      },
      {
        "cat": "başlangıç",
        "img": "Menü/Başlangıçlar/sarımsaklı ekmek.webp",
        "name": "Sarımsaklı Ekmek",
        "desc": "Sarımsakla marine edilmiş ekmek.",
        "price": 200,
        "id": 7,
        "active": true
      },
      {
        "cat": "başlangıç",
        "img": "Menü/Başlangıçlar/elma dilimli patates.webp",
        "name": "Elma Dilimli Patates",
        "desc": "Arzu ederseniz sarımsak sosla.",
        "price": 200,
        "id": 8,
        "active": true
      },
      {
        "cat": "başlangıç",
        "img": "Menü/Başlangıçlar/kızarmış patates.webp",
        "name": "Kızarmış Patates",
        "desc": "Arzu ederseniz sarımsak sosla.",
        "price": 200,
        "id": 9,
        "active": true
      },
      {
        "cat": "başlangıç",
        "img": "Menü/Başlangıçlar/bulgur köftesi.webp",
        "name": "Bulgur Köftesi",
        "desc": "2 adet köfte ve limon dilimi ile",
        "price": 200,
        "id": 10,
        "active": true
      },
      {
        "cat": "başlangıç",
        "img": "Menü/Başlangıçlar/meze.webp",
        "name": "Meze Tabağı",
        "desc": "Meze Tabağı",
        "price": 100,
        "id": 11,
        "active": true
      },
      {
        "cat": "başlangıç",
        "img": "Menü/Başlangıçlar/extra-yemek.webp",
        "name": "Extra Yemek",
        "desc": "Extra Yemek",
        "price": 200,
        "id": 12,
        "active": true
      },
      {
        "cat": "başlangıç",
        "img": "Menü/Başlangıçlar/biratabak.webp",
        "name": "Bira Tabağı",
        "desc": "Tavuk tenders, Sosis, Soğan halkası, patates kızartması ve soslarıyla bira tabağı.",
        "price": 600,
        "id": 13,
        "active": true
      },
      {
        "cat": "başlangıç",
        "img": "Menü/Başlangıçlar/tabldot.webp",
        "name": "Tabldot / Ev Yemekleri",
        "desc": "Günlük olarak hazırlanan ev yemekleri, taze sebzeler ve baharatlarla zenginleştirilmiştir.",
        "price": 300,
        "id": 14,
        "active": true
      },
      {
        "cat": "kahvaltılık",
        "img": "Menü/Kahvaltılıklar/taşmekan kahvaltı 1 kişilik.webp",
        "name": "<p style=\"font-size: 16pt;\"> Taşmekan Tabak Kahvaltı 1 Kişilik</p>",
        "desc": "Taşmekan Tabak Kahvaltı 1 Kişilik",
        "price": 550,
        "id": 15,
        "active": true
      },
      {
        "cat": "kahvaltılık",
        "img": "Menü/Kahvaltılıklar/taşmekan kahvaltı 2 kişilik.webp",
        "name": "<p style=\"font-size: 16pt;\"> Taşmekan Serpme Kahvaltı 1 Kişilik</p>",
        "desc": "Taşmekan Serpme Kahvaltı 1 Kişilik",
        "price": 750,
        "id": 16,
        "active": true
      },
      {
        "cat": "kahvaltılık",
        "img": "Menü/Kahvaltılıklar/taşmekan kahvaltı 2 kişilik.webp",
        "name": "<p style=\"font-size: 15pt;\">Taşmekan Serpme Kahvaltı 2 Kişilik</p>",
        "desc": "Taşmekan Serpme Kahvaltı 2 Kişilik",
        "price": 1500,
        "id": 17,
        "active": true
      },
      {
        "cat": "kahvaltılık",
        "img": "Menü/Kahvaltılıklar/ingiliz kahvaltısı.webp",
        "name": "İngiliz Kahvaltısı",
        "desc": "Domuz pastırması, sahanda yumurta, haşlanmış fasulye, kızarmış mantar ve domates içermektedir.",
        "price": 650,
        "id": 18,
        "active": true
      },
      {
        "cat": "kahvaltılık",
        "img": "Menü/Kahvaltılıklar/omlet.webp",
        "name": "Omlet Çeşitleri",
        "desc": "İster sade, ister domatesli, peynirli, mantarlı ya da karışık omletler.",
        "price": 350,
        "id": 19,
        "active": true
      },
      {
        "cat": "kahvaltılık",
        "img": "Menü/Kahvaltılıklar/göz yumurta.webp",
        "name": "Göz Yumurta ve Patates",
        "desc": "İki adet özenle pişirilmiş göz yumurta ve yanında çıtır çıtır kızarmış patates.",
        "price": 350,
        "id": 20,
        "active": true
      },
      {
        "cat": "kahvaltılık",
        "img": "Menü/Kahvaltılıklar/yumurta patates.webp",
        "name": "Yumurta ve Patates",
        "desc": "İçerisinde sebzede bulunan, çırpılmış yumurta ve patates.",
        "price": 350,
        "id": 21,
        "active": true
      },
      {
        "cat": "kahvaltılık",
        "img": "Menü/Kahvaltılıklar/menemen.webp",
        "name": "Menemen",
        "desc": "Çırpılmış olarak domates, yumurta ve patates",
        "price": 350,
        "id": 22,
        "active": true
      },
      {
        "cat": "kahvaltılık",
        "img": "Menü/Kahvaltılıklar/extra-yumurta.webp",
        "name": "Extra Yumurta",
        "desc": "Extra Yumurta",
        "price": 30,
        "id": 23,
        "active": true
      },
      {
        "cat": "kahvaltılık",
        "img": "Menü/Kahvaltılıklar/extra.webp",
        "name": "Extra",
        "desc": "Extra",
        "price": 100,
        "id": 24,
        "active": true
      },
      {
        "cat": "kahvaltılık",
        "img": "Menü/Kahvaltılıklar/pastırmalı-yumurta.webp",
        "name": "Pastırmalı Yumurta",
        "desc": "Pastırmalı Yumurta",
        "price": 350,
        "id": 25,
        "active": true
      },
      {
        "cat": "sandviç",
        "img": "Menü/Sandviç ve tostlar/pastırmalı sandviç.webp",
        "name": "Domuz Pastırmalı Sandviç",
        "desc": "Domuz Pastırmalı Sandviç",
        "price": 450,
        "id": 26,
        "active": true
      },
      {
        "cat": "sandviç",
        "img": "Menü/Sandviç ve tostlar/jambon-pesto sandviç.webp",
        "name": "Jambom-Pesto Sandviç",
        "desc": "Jambon ve pesto sosuyla yapılmış sandviç.",
        "price": 350,
        "id": 27,
        "active": true
      },
      {
        "cat": "sandviç",
        "img": "Menü/Sandviç ve tostlar/karışıksandwich.webp",
        "name": "Karışık Sandviç",
        "desc": "Peynir Jambon veya Bacon sandviç .",
        "price": 350,
        "id": 28,
        "active": true
      },
      {
        "cat": "sandviç",
        "img": "Menü/Sandviç ve tostlar/karışık tost.webp",
        "name": "Karışık Tost",
        "desc": "Peynir Jambon veya Bacon sandviç .",
        "price": 350,
        "id": 29,
        "active": true
      },
      {
        "cat": "sandviç",
        "img": "Menü/Sandviç ve tostlar/peynirli sandviç.webp",
        "name": "Peynirli Sandviç",
        "desc": "Özel peynirle yapılmış sandviç .",
        "price": 350,
        "id": 30,
        "active": true
      },
      {
        "cat": "sandviç",
        "img": "Menü/Sandviç ve tostlar/tuna sandviç.webp",
        "name": "Tuna Sandviç",
        "desc": "Tuna balıklı sandviç.",
        "price": 350,
        "id": 31,
        "active": true
      },
      {
        "cat": "sandviç",
        "img": "Menü/Sandviç ve tostlar/Taşmekan Special sandviç.webp",
        "name": "Taşmekan Özel Sandviç",
        "desc": "Cipsle birlikte servis yapılır.",
        "price": 400,
        "id": 32,
        "active": true
      },
      {
        "cat": "sandviç",
        "img": "Menü/Sandviç ve tostlar/avakadolu-sandwich.webp",
        "name": "Avakadolu Sandviç",
        "desc": "Cipsle birlikte servis yapılır.",
        "price": 400,
        "id": 33,
        "active": true
      },
      {
        "cat": "atıştırmalık",
        "img": "Menü/Atıştırmalıklar/tavuk kanat.webp",
        "name": "Tavuk Kanat",
        "desc": "Özenle marine edilmiş, çıtır çıtır kızartılmış tavuk kanatlarımız, baharatların uyumuyla damaklarınıza lezzet şöleni yaşatıyor!",
        "price": 400,
        "id": 34,
        "active": true
      },
      {
        "cat": "atıştırmalık",
        "img": "Menü/Atıştırmalıklar/tavuk parmak.webp",
        "name": "Tavuk Parmak",
        "desc": "Dışı altın renginde çıtır, içi ise yumuşacık tavuk etiyle hazırlanan Tavuk Parmak, her lokmada lezzetiyle büyülüyor.",
        "price": 400,
        "id": 35,
        "active": true
      },
      {
        "cat": "atıştırmalık",
        "img": "Menü/Atıştırmalıklar/cipsler.webp",
        "name": "Patates Cipsi",
        "desc": "İnce dilimlenmiş patateslerin altın renginde kızartılmasıyla elde edilen, çıtır çıtır ve lezzetli bir atıştırmalık.",
        "price": 200,
        "id": 36,
        "active": true
      },
      {
        "cat": "atıştırmalık",
        "img": "Menü/Atıştırmalıklar/tavuk nugget.webp",
        "name": "Tavuk Nuget",
        "desc": "İçi yumuşacık dokusuyla her lokmada lezzet şöleni sunuyor, Yanında servis edilen özel soslar, damaklarda unutulmaz bir iz bırakır.",
        "price": 400,
        "id": 37,
        "active": true
      },
      {
        "cat": "atıştırmalık",
        "img": "Menü/Atıştırmalıklar/meyve tabağı.webp",
        "name": "Meyve Tabağı",
        "desc": "Mevsimine uygun en lezzetli meyvelerin özenle dilimlenerek sunulduğu Meyve Tabağı, ferahlığıyla sofranıza renk katıyor!",
        "price": 400,
        "id": 38,
        "active": true
      },
      {
        "cat": "atıştırmalık",
        "img": "Menü/Atıştırmalıklar/peynir tabağı.webp",
        "name": "Peynir Tabağı",
        "desc": "Farklı aromalara sahip özenle seçilmiş peynir çeşitleri, kuruyemişler ve taptaze meyvelerle buluşuyor!",
        "price": 400,
        "id": 39,
        "active": true
      },
      {
        "cat": "atıştırmalık",
        "img": "Menü/Atıştırmalıklar/çerev tabağı.webp",
        "name": "Çerez Tabağı",
        "desc": "Farklı aromalara sahip özenle seçilmiş peynir çeşitleri, kuruyemişler ve taptaze meyvelerle buluşuyor!",
        "price": 200,
        "id": 40,
        "active": true
      },
      {
        "cat": "tavukmenu",
        "img": "Menü/Tavuk Menüler/mantar soslu tavuk.webp",
        "name": "Mantar Soslu Tavuk",
        "desc": "Mantar soslu ızgara tavuk, pilav, sebze ve salata ile servis yapılır.",
        "price": 550,
        "id": 41,
        "active": true
      },
      {
        "cat": "tavukmenu",
        "img": "Menü/Tavuk Menüler/tavuk köri.webp",
        "name": "Tavuk Köri",
        "desc": "Kuşbaşı tavuklar, soğan ve köri sos ile tavada kızartılıp pilav ile servis yapılır.",
        "price": 550,
        "id": 42,
        "active": true
      },
      {
        "cat": "tavukmenu",
        "img": "Menü/Tavuk Menüler/tavuk stroganoff.webp",
        "name": "Tavuk Straganoff",
        "desc": "soğan, mantar, kornişon, brandy ve krema ile hazırlanır,pilav ile servis yapılır.",
        "price": 550,
        "id": 43,
        "active": true
      },
      {
        "cat": "tavukmenu",
        "img": "Menü/Tavuk Menüler/tavuk şinitzel.webp",
        "name": "Tavuk Şinitzel",
        "desc": "11 farklı baharat ve galeta unu ile kızartılır, patates ve salata ile servis yapılır.",
        "price": 600,
        "id": 44,
        "active": true
      },
      {
        "cat": "tavukmenu",
        "img": "Menü/Tavuk Menüler/tavuk isabella.webp",
        "name": "Tavuk İzebella",
        "desc": "Tavuk şinitzel, mantar, biber ve domates ile fırınlanır, pilav ile servis yapılır.",
        "price": 550,
        "id": 45,
        "active": true
      },
      {
        "cat": "tavukmenu",
        "img": "Menü/Tavuk Menüler/tavuk kanat.webp",
        "name": "Tavuk Kanat",
        "desc": "5 adet tavuk kanat ızgara edilerek patates ve salata ile servis yapılır.",
        "price": 550,
        "id": 46,
        "active": true
      },
      {
        "cat": "tavukmenu",
        "img": "Menü/Tavuk Menüler/tavuk şiş.webp",
        "name": "Tavuk Şiş",
        "desc": "Kuşbaşı halinde tavuk parçaları ızgarada pişirilerek patates ve salata ile servis yapılır.",
        "price": 600,
        "id": 47,
        "active": true
      },
      {
        "cat": "tavukmenu",
        "img": "Menü/Tavuk Menüler/tavuk parmak.webp",
        "name": "Tavuk Fingers",
        "desc": "Parmak şeklinde dilimlenmiş tavuk parçaları.",
        "price": 550,
        "id": 48,
        "active": true
      },
      {
        "cat": "tavukmenu",
        "img": "Menü/Tavuk Menüler/çıtırtavuk.webp",
        "name": "Kentucky",
        "desc": "Çıtır tavuk parçaları.",
        "price": 550,
        "id": 49,
        "active": true
      },
      {
        "cat": "ızgaralar",
        "img": "Menü/Izgaralar/karışık ızgara.webp",
        "name": "Karışık Izgara",
        "desc": "Karışık ızgara, et ve sebzelerin bir araya geldiği lezzetli bir tabak.",
        "price": 1100,
        "id": 50,
        "active": true
      },
      {
        "cat": "ızgaralar",
        "img": "Menü/Izgaralar/kuzu pirzola.webp",
        "name": "Kuzu Pirzola",
        "desc": "Kuzu pirzola, özel baharatlarla marine edilip ızgarada pişirilir.",
        "price": 900,
        "id": 51,
        "active": true
      },
      {
        "cat": "ızgaralar",
        "img": "Menü/Izgaralar/kuzu şiş.webp",
        "name": "Kuzu Şiş",
        "desc": "Kuzu şiş, kuşbaşı etlerin şişe dizilerek ızgarada pişirilmesiyle hazırlanır.",
        "price": 900,
        "id": 52,
        "active": true
      },
      {
        "cat": "dürümler",
        "img": "Menü/Dürümler/chicken wrap.webp",
        "name": "Tavuk Wrap",
        "desc": "Tavuk Dürüm, sebzeler ve özel soslarla sarılmış lezzetli bir dürüm.",
        "price": 550,
        "id": 53,
        "active": true
      },
      {
        "cat": "dürümler",
        "img": "Menü/Dürümler/beef wrap.webp",
        "name": "Et Wrap",
        "desc": "Et dürüm, baharatlı et parçaları ve sebzelerle sarılmış lezzetli bir dürüm.",
        "price": 600,
        "id": 54,
        "active": true
      },
      {
        "cat": "dürümler",
        "img": "Menü/Dürümler/mixed wrap.webp",
        "name": "Karışık Wrap",
        "desc": "Karışık dürüm, hem tavuk hem de et parçalarıyla hazırlanan lezzetli bir dürüm.",
        "price": 600,
        "id": 55,
        "active": true
      },
      {
        "cat": "dürümler",
        "img": "Menü/Dürümler/meatball wrap.webp",
        "name": "Köfte Dürüm",
        "desc": "Köfte dürüm, baharatlı köfte parçaları ve sebzelerle sarılmış lezzetli bir dürüm.",
        "price": 550,
        "id": 56,
        "active": true
      },
      {
        "cat": "dürümler",
        "img": "Menü/Dürümler/meat skewer wrap.webp",
        "name": "Et Şiş Dürüm",
        "desc": "Et şiş dürüm, baharatlı et parçaları ve sebzelerle sarılmış lezzetli bir dürüm.",
        "price": 650,
        "id": 57,
        "active": true
      },
      {
        "cat": "dürümler",
        "img": "Menü/Dürümler/chicken shish.webp",
        "name": "Tavuk Şiş Dürüm",
        "desc": "tavuk şiş dürüm, baharatlı tavuk parçaları ve sebzelerle sarılmış lezzetli bir dürüm.",
        "price": 550,
        "id": 58,
        "active": true
      },
      {
        "cat": "dürümler",
        "img": "Menü/Dürümler/çiğ köfte dürüm.webp",
        "name": "Çiğ Köfte Dürüm",
        "desc": "Çiğ köfte, marul ve domatesle sarılmış lezzetli bir dürüm.",
        "price": 350,
        "id": 59,
        "active": true
      },
      {
        "cat": "fajita",
        "img": "Menü/Fajita Menü/chicken fajita.webp",
        "name": "Tavuk Fajita",
        "desc": "Tavuk fajita, sebzelerle birlikte tavada pişirilerek tortilla ekmeğiyle servis edilir.",
        "price": 600,
        "id": 60,
        "active": true
      },
      {
        "cat": "fajita",
        "img": "Menü/Fajita Menü/beef fajita.webp",
        "name": "Et Fajita",
        "desc": "Et fajita, sebzelerle birlikte tavada pişirilerek tortilla ekmeğiyle servis edilir.",
        "price": 650,
        "id": 61,
        "active": true
      },
      {
        "cat": "fajita",
        "img": "Menü/Fajita Menü/mixed fajita.webp",
        "name": "Karışık Fajita",
        "desc": "Karışık fajita, hem tavuk hem de et parçalarıyla hazırlanan lezzetli bir fajita.",
        "price": 600,
        "id": 62,
        "active": true
      },
      {
        "cat": "burger",
        "img": "Menü/Hamburgerler/Et Hamburger.webp",
        "name": "Et Hamburger",
        "desc": "Et hamburger, özel sos ve taze sebzelerle hazırlanan lezzetli bir burger.",
        "price": 500,
        "id": 63,
        "active": true
      },
      {
        "cat": "burger",
        "img": "Menü/Hamburgerler/Cheeseburger.webp",
        "name": "Cheeseburger",
        "desc": "Cheeseburger, cheddar peyniri ve özel soslarla hazırlanan lezzetli bir burger.",
        "price": 550,
        "id": 64,
        "active": true
      },
      {
        "cat": "burger",
        "img": "Menü/Hamburgerler/bacon burger.webp",
        "name": "Bacon burger",
        "desc": "Bacon burger, çıtır Pastırma ve özel soslarla hazırlanan lezzetli bir burger.",
        "price": 600,
        "id": 65,
        "active": true
      },
      {
        "cat": "burger",
        "img": "Menü/Hamburgerler/Double cheeseburger.webp",
        "name": "Double Cheeseburger",
        "desc": "Double cheeseburger, iki dilim cheddar peyniri ve özel soslarla hazırlanan lezzetli bir burgerdir.",
        "price": 600,
        "id": 66,
        "active": true
      },
      {
        "cat": "salata",
        "img": "Menü/Salatalar/tavuk sezar salatası.webp",
        "name": "Tavuk Sezar Salatası",
        "desc": "Izgara tavuk sezar sosu ile",
        "price": 500,
        "id": 67,
        "active": true
      },
      {
        "cat": "salata",
        "img": "Menü/Salatalar/akdeniz salatası.webp",
        "name": "Akdeniz Salatası",
        "desc": "Karşık Akdeniz lezzetleri",
        "price": 450,
        "id": 68,
        "active": true
      },
      {
        "cat": "salata",
        "img": "Menü/Salatalar/deniz mahsülü salatası.webp",
        "name": "Deniz Mahsülleri Salatası",
        "desc": "Karışık deniz ürünleri",
        "price": 550,
        "id": 69,
        "active": true
      },
      {
        "cat": "salata",
        "img": "Menü/Salatalar/tuna salatası.webp",
        "name": "Tuna Salatası",
        "desc": "Yeşillikler üzerine tuna balığı",
        "price": 500,
        "id": 70,
        "active": true
      },
      {
        "cat": "salata",
        "img": "Menü/Salatalar/tuna salatası.webp",
        "name": "Söğüş Tabağı",
        "desc": "Taze domates, salatalık, biber ve yeşilliklerle hazırlanmış",
        "price": 400,
        "id": 71,
        "active": true
      },
      {
        "cat": "makarna",
        "img": "Menü/Makarnalar/spagetti napoliten.webp",
        "name": "Spagetti Napoliten",
        "desc": "Napoliten sosu ile",
        "price": 450,
        "id": 72,
        "active": true
      },
      {
        "cat": "makarna",
        "img": "Menü/Makarnalar/spagetti bolonez.webp",
        "name": "Spagetti Bolonez",
        "desc": "Bolenez sosu ile",
        "price": 500,
        "id": 73,
        "active": true
      },
      {
        "cat": "makarna",
        "img": "Menü/Makarnalar/tavuklu pesto soslu penne.webp",
        "name": "Tavuklu Pesto Soslu Penne",
        "desc": "Tavuklu pesto sosu ile",
        "price": 500,
        "id": 74,
        "active": true
      },
      {
        "cat": "makarna",
        "img": "Menü/Makarnalar/kremalı tavuk soslu penne.webp",
        "name": "Kremalı Tavuklu Penne",
        "desc": "Kremalı Tavuklu sosu ile",
        "price": 500,
        "id": 75,
        "active": true
      },
      {
        "cat": "makarna",
        "img": "Menü/Makarnalar/deniz ürünlü fettucini.webp",
        "name": "Deniz Ürünlü Fettuchini",
        "desc": "Karides, kalamar ve midye ile harmanlanır.",
        "price": 550,
        "id": 76,
        "active": true
      },
      {
        "cat": "diyet",
        "img": "Menü/Diyet Menü/Tavuk şiş salata.webp",
        "name": "Tavuk Şiş Salata",
        "desc": "Özel sosla marine edilmiş tavuk şişler",
        "price": 550,
        "id": 77,
        "active": true
      },
      {
        "cat": "diyet",
        "img": "Menü/Diyet Menü/brokoli - tavuk - pilav.webp",
        "name": "Brokoli - Tavuk - Pilav",
        "desc": "Tavuk, brokoli ve pilav ile hazırlanan sağlıklı bir tabak.",
        "price": 550,
        "id": 78,
        "active": true
      },
      {
        "cat": "diyet",
        "img": "Menü/Diyet Menü/brokoli - et - pilav.webp",
        "name": "Brokoli - Et - Pilav",
        "desc": "Et, brokoli ve pilav ile hazırlanan sağlıklı bir tabak.",
        "price": 650,
        "id": 79,
        "active": true
      },
      {
        "cat": "diyet",
        "img": "Menü/Diyet Menü/brokoli - köfte - pilav.webp",
        "name": "Brokoli - Köfte - Pilav",
        "desc": "Köfte, brokoli ve pilav ile hazırlanan sağlıklı bir tabak.",
        "price": 500,
        "id": 80,
        "active": true
      },
      {
        "cat": "diyet",
        "img": "Menü/Diyet Menü/falafel.webp",
        "name": "Falafel",
        "desc": "Falafel, nohut köftesi, sebzeler ve özel soslarla hazırlanan sağlıklı bir tabak.",
        "price": 500,
        "id": 81,
        "active": true
      },
      {
        "cat": "krep",
        "img": "Menü/Krepler/tavuklu krep.webp",
        "name": "Tavuklu Krep",
        "desc": "ince krep hamurunun içerisine sotelenmiş tavuk, sebzeler ile bir sos eklenerek hazırlanan lezzetli bir yemek.",
        "price": 600,
        "id": 82,
        "active": true
      },
      {
        "cat": "krep",
        "img": "Menü/Krepler/etli krep.webp",
        "name": "Etli Krep",
        "desc": "Krep hamurunun içerisine sotelenmiş et, sebzeler ile bir sos eklenerek hazırlanan lezzetli bir yemek.",
        "price": 650,
        "id": 83,
        "active": true
      },
      {
        "cat": "krep",
        "img": "Menü/Krepler/sebzeli krep.webp",
        "name": "Sebzeli Krep",
        "desc": "İnce krep hamurunun içerisine sotelenmiş sebzeler ile bir sos eklenerek hazırlanan lezzetli bir yemek.",
        "price": 500,
        "id": 84,
        "active": true
      },
      {
        "cat": "pizza",
        "img": "Menü/Pizzalar/taşmekan mixed pizza.webp",
        "name": "Taşmekan Karışık Pizza",
        "desc": "ince krep hamurunun içerisine sotelenmiş tavuk, sebzeler ile bir sos eklenerek hazırlanan lezzetli bir yemek.",
        "price": 600,
        "id": 85,
        "active": true
      },
      {
        "cat": "pizza",
        "img": "Menü/Pizzalar/deniz ürünleri.webp",
        "name": "Deniz Ürünleri",
        "desc": "Karides, kalamar, balık ve daha fazlasını içeren deniz ürünleri pizzası",
        "price": 650,
        "id": 86,
        "active": true
      },
      {
        "cat": "pizza",
        "img": "Menü/Pizzalar/margarita pizza.webp",
        "name": "Margarita",
        "desc": "Domates, pesto sos, mozzarella",
        "price": 550,
        "id": 87,
        "active": true
      },
      {
        "cat": "pizza",
        "img": "Menü/Pizzalar/ton balıklı pizza.webp",
        "name": "Ton Balıklı",
        "desc": "Ton balığı, domates, biber, mozzarella",
        "price": 600,
        "id": 88,
        "active": true
      },
      {
        "cat": "pizza",
        "img": "Menü/Pizzalar/domuz pastırmalı ve ananaslı pizza.webp",
        "name": "Domuz Pastırmalı ve Ananaslı",
        "desc": "Domuz pastırması, ananas, mozzarella / Bacon, pineapple, mozzarella",
        "price": 650,
        "id": 89,
        "active": true
      },
      {
        "cat": "pizza",
        "img": "Menü/Pizzalar/vejetaryen pizza.webp",
        "name": "Vejetaryen Pizza",
        "desc": "Mantar, zeytin, mısır, domates, biber, mozzarella",
        "price": 550,
        "id": 90,
        "active": true
      },
      {
        "cat": "vejetaryan",
        "img": "Menü/Vejetaryen menü/sebze gratin.webp",
        "name": "Sebze Garaten",
        "desc": "Mantar, zeytin, mısır, domates, biber, mozzarella",
        "price": 500,
        "id": 91,
        "active": true
      },
      {
        "cat": "vejetaryan",
        "img": "Menü/Vejetaryen menü/mevsimlik sebze kızartması.webp",
        "name": "Mevsim Sebzeleri Kızartması",
        "desc": "Mantar, zeytin, mısır, domates, biber, mozzarella",
        "price": 500,
        "id": 92,
        "active": true
      },
      {
        "cat": "vejetaryan",
        "img": "Menü/Vejetaryen menü/vejetaryen curry.webp",
        "name": "Sebze Curry",
        "desc": "Mantar, zeytin, mısır, domates, biber, mozzarella",
        "price": 500,
        "id": 93,
        "active": true
      },
      {
        "cat": "denizurunlerı",
        "img": "Menü/Deniz ürünleri/kızarmış fileto balık.webp",
        "name": "Kızarmış Fileto Balık",
        "desc": "Fileto balık, tavada kızartılarak patates ve salata ile servis yapılır.",
        "price": 650,
        "id": 94,
        "active": true
      },
      {
        "cat": "denizurunlerı",
        "img": "Menü/Deniz ürünleri/kalamar.webp",
        "name": "Kalamar",
        "desc": "Beyaz şarapla sotelenen kalamar, halkalar şeklinde kızartılır, patates ve salata ile servis yapılır",
        "price": 600,
        "id": 95,
        "active": true
      },
      {
        "cat": "denizurunlerı",
        "img": "Menü/Deniz ürünleri/jumbo karides.webp",
        "name": "Jumbo Karides",
        "desc": "Jumbo karidesler, sarımsak sosla pişirilerek servis yapılır.",
        "price": 650,
        "id": 96,
        "active": true
      },
      {
        "cat": "cocukmenu",
        "img": "Menü/Çocuk menüsü/mix pizza.webp",
        "name": "Karışık Pizza",
        "desc": "Salam, sosis, mantar, zeytin, domates, biber, mozzarella.",
        "price": 400,
        "id": 97,
        "active": true
      },
      {
        "cat": "cocukmenu",
        "img": "Menü/Çocuk menüsü/margarita pizza.webp",
        "name": "Margarita Pizza",
        "desc": "Domates, pesto sos, mozzarella.",
        "price": 400,
        "id": 98,
        "active": true
      },
      {
        "cat": "cocukmenu",
        "img": "Menü/Çocuk menüsü/burger ve cips.webp",
        "name": "Burger ve Cips",
        "desc": "Salam, sosis, mantar, zeytin, domates, biber, mozzarella.",
        "price": 500,
        "id": 99,
        "active": true
      },
      {
        "cat": "cocukmenu",
        "img": "Menü/Çocuk menüsü/tavuk kroket ve cips.webp",
        "name": "Tavuk Kroket ve Cips",
        "desc": "Salam, sosis, mantar, zeytin, domates, biber, mozzarella.",
        "price": 500,
        "id": 100,
        "active": true
      },
      {
        "cat": "cocukmenu",
        "img": "Menü/Çocuk menüsü/sosis ve cips.webp",
        "name": "Sosis ve Cips",
        "desc": "Salam, sosis, mantar, zeytin, domates, biber, mozzarella.",
        "price": 500,
        "id": 101,
        "active": true
      },
      {
        "cat": "etler",
        "img": "Menü/Et Menü/biberli biftek.webp",
        "name": "Biberli Biftek",
        "desc": "Biber sosu ile marine edilmiş biftek.",
        "price": 850,
        "id": 102,
        "active": true
      },
      {
        "cat": "etler",
        "img": "Menü/Et Menü/Diane biftek.webp",
        "name": "Diane Biftek",
        "desc": "Zengin sarımsak sosuyla, domates ve kırmızı şarapla pişirilerek..",
        "price": 850,
        "id": 103,
        "active": true
      },
      {
        "cat": "etler",
        "img": "Menü/Et Menü/krema ve bistro soslu biftek.webp",
        "name": "Krema ve Bistro Soslu Biftek",
        "desc": "Krema, mantar ve bistro sosla pişirilerek biftek.",
        "price": 850,
        "id": 104,
        "active": true
      },
      {
        "cat": "etler",
        "img": "Menü/Et Menü/kuzu köri.webp",
        "name": "Kuzu Köri",
        "desc": "Kuşbaşı kuzu parçaları, soğan ve köri sosla pişirilerek pilav ve salata ile servis yapılır.",
        "price": 850,
        "id": 105,
        "active": true
      },
      {
        "cat": "etler",
        "img": "Menü/Et Menü/kuzu sote.webp",
        "name": "Kuzu Sote",
        "desc": "Kuşbaşı halinde kuzu eti tavada domatesle pişirilerek patates ve salata ile servis yapılır.",
        "price": 850,
        "id": 106,
        "active": true
      },
      {
        "cat": "etler",
        "img": "Menü/Et Menü/köfte.webp",
        "name": "Köfte",
        "desc": "5 adet köfte ızgara olarak patates ve salata ile servis yapılır.",
        "price": 700,
        "id": 107,
        "active": true
      },
      {
        "cat": "etler",
        "img": "Menü/Et Menü/Domuz Pirzola.webp",
        "name": "Domuz Pirzolası",
        "desc": "2 adet domuz pirzolası ızgara edilerek patates ve salata ile servis yapılır.",
        "price": 750,
        "id": 108,
        "active": true
      }
    ],
    "icecekler": [
      {
        "cat": "colddrinks",
        "img": "Menü/Soğuk Kahveler/Tonik espresso.webp",
        "name": "Tonik Expresso",
        "desc": "",
        "price": 150,
        "id": 109,
        "active": true
      },
      {
        "cat": "colddrinks",
        "img": "Menü/Soğuk Kahveler/soğuk kahve.webp",
        "name": "Soğuk Kahve",
        "desc": "",
        "price": 200,
        "id": 110,
        "active": true
      },
      {
        "cat": "colddrinks",
        "img": "Menü/Soğuk Kahveler/ice latte.webp",
        "name": "Ice Latte",
        "desc": "",
        "price": 250,
        "id": 111,
        "active": true
      },
      {
        "cat": "colddrinks",
        "img": "Menü/Soğuk Kahveler/ice americano.webp",
        "name": "Ice Americano",
        "desc": "",
        "price": 200,
        "id": 112,
        "active": true
      },
      {
        "cat": "colddrinks",
        "img": "Menü/Soğuk Kahveler/ice cappuccino.webp",
        "name": "Ice Cappuccino",
        "desc": "",
        "price": 250,
        "id": 113,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/white mocha.webp",
        "name": "White Mocha",
        "desc": "",
        "price": 250,
        "id": 114,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/Salep.webp",
        "name": "Salep",
        "desc": "",
        "price": 150,
        "id": 115,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/Filtre kahve.webp",
        "name": "Filtre Kahve",
        "desc": "",
        "price": 200,
        "id": 116,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/nescafe gold.webp",
        "name": "Nescafe Kafeinsiz",
        "desc": "",
        "price": 170,
        "id": 117,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/nescafe.webp",
        "name": "Kahve / Nescafe",
        "desc": "",
        "price": 150,
        "id": 118,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/türk kahvesi.webp",
        "name": "Türk Kahvesi",
        "desc": "",
        "price": 80,
        "id": 119,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/cappuccino.webp",
        "name": "Capuccino",
        "desc": "",
        "price": 200,
        "id": 120,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/expresso.webp",
        "name": "Expresso",
        "desc": "",
        "price": 150,
        "id": 121,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/cafe latte.webp",
        "name": "Cafe Latte",
        "desc": "",
        "price": 200,
        "id": 122,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/coffee americano.webp",
        "name": "Coffee Americano",
        "desc": "",
        "price": 200,
        "id": 123,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/machiatto.webp",
        "name": "Machiatto",
        "desc": "",
        "price": 200,
        "id": 124,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/caramel cappuccino.webp",
        "name": "Caramel Capuccino",
        "desc": "",
        "price": 200,
        "id": 125,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/mocha caramel latte.webp",
        "name": "Mocha Caramel Latte",
        "desc": "",
        "price": 200,
        "id": 126,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/hot chocolate.webp",
        "name": "Hot Chocolate",
        "desc": "",
        "price": 200,
        "id": 127,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/doubleespresso.webp",
        "name": "Expresso Double",
        "desc": "",
        "price": 300,
        "id": 128,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/karamellatte.webp",
        "name": "Caramel Latte",
        "desc": "",
        "price": 300,
        "id": 129,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/caramel cappuccino.webp",
        "name": "Caramel Capuccino",
        "desc": "",
        "price": 300,
        "id": 130,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/laktossuzkahve.webp",
        "name": "Laktozsuz Süt Kahve",
        "desc": "",
        "price": 250,
        "id": 131,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/soyasütlükahve.webp",
        "name": "Soya Süt Capuccino",
        "desc": "",
        "price": 300,
        "id": 132,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/soyasütlümak.webp",
        "name": "Soya Süt Latte",
        "desc": "",
        "price": 300,
        "id": 133,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/vanilyamach.webp",
        "name": "Vanilyalı Capuccino",
        "desc": "",
        "price": 300,
        "id": 134,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/vanilyalılatte.webp",
        "name": "Vanilyalı Latte",
        "desc": "",
        "price": 300,
        "id": 135,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/doublecoffe.webp",
        "name": "Double Kahve",
        "desc": "",
        "price": 160,
        "id": 136,
        "active": true
      },
      {
        "cat": "caylar",
        "img": "Menü/Çaylar/Turkish Tea.webp",
        "name": "Türk Çayı",
        "desc": "",
        "price": 50,
        "id": 137,
        "active": true
      },
      {
        "cat": "caylar",
        "img": "Menü/Çaylar/Twinings erly grey tea.webp",
        "name": "Twinings Early Grey Tea",
        "desc": "",
        "price": 80,
        "id": 138,
        "active": true
      },
      {
        "cat": "caylar",
        "img": "Menü/Çaylar/Twinings fruit tea.webp",
        "name": "Twinings Meyve Çay",
        "desc": "",
        "price": 80,
        "id": 139,
        "active": true
      },
      {
        "cat": "caylar",
        "img": "Menü/Çaylar/lipton yellow tea.webp",
        "name": "Lipton Sarı Çay",
        "desc": "",
        "price": 80,
        "id": 140,
        "active": true
      },
      {
        "cat": "caylar",
        "img": "Menü/Çaylar/lipton fruit tea.webp",
        "name": "Lipton Meyveli Çay",
        "desc": "",
        "price": 80,
        "id": 141,
        "active": true
      },
      {
        "cat": "caylar",
        "img": "Menü/Çaylar/termosçay.webp",
        "name": "Termos Çay",
        "desc": "",
        "price": 500,
        "id": 142,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/Ice Tea.webp",
        "name": "Ice Tea",
        "desc": "",
        "price": 80,
        "id": 143,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/redbull.webp",
        "name": "Enerji İçeceği",
        "desc": "",
        "price": 90,
        "id": 144,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/schweppes.webp",
        "name": "Tonik",
        "desc": "",
        "price": 70,
        "id": 145,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/frutti karpuzlu soda.webp",
        "name": "Meyveli Soda",
        "desc": "",
        "price": 70,
        "id": 146,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/dimes karışık meyve suyu.webp",
        "name": "Meyve Suyu",
        "desc": "",
        "price": 70,
        "id": 147,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/Taze Meyve suyu.webp",
        "name": "Taze Meyve Suyu",
        "desc": "",
        "price": 200,
        "id": 148,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/milkshake.webp",
        "name": "Milkshake",
        "desc": "",
        "price": 250,
        "id": 149,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/süt.webp",
        "name": "Süt",
        "desc": "",
        "price": 100,
        "id": 150,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/lemonade.webp",
        "name": "Limonata",
        "desc": "",
        "price": 100,
        "id": 151,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/Ayran.webp",
        "name": "Ayran",
        "desc": "",
        "price": 50,
        "id": 152,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/erikli su 50ml.webp",
        "name": "Su (50cl)",
        "desc": "",
        "price": 30,
        "id": 153,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/erikli 1.5 lt su.webp",
        "name": "Su (1,5lt)",
        "desc": "",
        "price": 60,
        "id": 154,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/maden suyu.webp",
        "name": "Mineral Su",
        "desc": "",
        "price": 70,
        "id": 155,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/büyük şalgam.webp",
        "name": "Şalgam Büyük",
        "desc": "",
        "price": 150,
        "id": 156,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/küçük şalgam.webp",
        "name": "Şalgam Küçük",
        "desc": "",
        "price": 70,
        "id": 157,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/güllü süt.webp",
        "name": "Güllü Süt",
        "desc": "",
        "price": 180,
        "id": 158,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/Atom milkshake.webp",
        "name": "Atom Milkshake",
        "desc": "",
        "price": 300,
        "id": 159,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/churchill.webp",
        "name": "Çörçil",
        "desc": "",
        "price": 100,
        "id": 160,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/lime.webp",
        "name": "Lime",
        "desc": "",
        "price": 200,
        "id": 161,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/mneyvesuyu-kucuk.webp",
        "name": "Meyve Suyu Kutu Küçük",
        "desc": "",
        "price": 50,
        "id": 162,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/limonatasoda.webp",
        "name": "Soda Limonata",
        "desc": "",
        "price": 200,
        "id": 163,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/meyvesuyu-1lt.webp",
        "name": "Meyve Suyu 1 LT",
        "desc": "",
        "price": 200,
        "id": 164,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/tonick-1lt.webp",
        "name": "Tonick 1 LT",
        "desc": "",
        "price": 200,
        "id": 165,
        "active": true
      },
      {
        "cat": "kolalar",
        "img": "Menü/İçecekler/Coca cola.webp",
        "name": "Coca Cola",
        "desc": "",
        "price": 70,
        "id": 166,
        "active": true
      },
      {
        "cat": "kolalar",
        "img": "Menü/İçecekler/coca cola light.webp",
        "name": "Coca Cola Light",
        "desc": "",
        "price": 70,
        "id": 167,
        "active": true
      },
      {
        "cat": "kolalar",
        "img": "Menü/İçecekler/pepsi.webp",
        "name": "Pepsi",
        "desc": "",
        "price": 70,
        "id": 168,
        "active": true
      },
      {
        "cat": "kolalar",
        "img": "Menü/İçecekler/pepsi light.webp",
        "name": "Pepsi Light",
        "desc": "",
        "price": 70,
        "id": 169,
        "active": true
      },
      {
        "cat": "kolalar",
        "img": "Menü/İçecekler/sprite.webp",
        "name": "Sprite",
        "desc": "",
        "price": 70,
        "id": 170,
        "active": true
      },
      {
        "cat": "kolalar",
        "img": "Menü/İçecekler/fanta.webp",
        "name": "Fanta",
        "desc": "",
        "price": 70,
        "id": 171,
        "active": true
      },
      {
        "cat": "kolalar",
        "img": "Menü/İçecekler/seven up.webp",
        "name": "Seven Up",
        "desc": "",
        "price": 70,
        "id": 172,
        "active": true
      },
      {
        "cat": "kolalar",
        "img": "Menü/İçecekler/yedigün.webp",
        "name": "Yedigün",
        "desc": "",
        "price": 70,
        "id": 173,
        "active": true
      }
    ],
    "alkoller": [
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/Efes Şişe.webp",
        "name": "Efes Şişe",
        "desc": "",
        "price": 160,
        "id": 174,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/efes light.webp",
        "name": "Efes Light",
        "desc": "",
        "price": 160,
        "id": 175,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/Becks.webp",
        "name": "Becks",
        "desc": "",
        "price": 180,
        "id": 176,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/miller.webp",
        "name": "Miller 50 CL",
        "desc": "",
        "price": 180,
        "id": 177,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/miller.webp",
        "name": "Miller 33 CL",
        "desc": "",
        "price": 160,
        "id": 178,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/carlsberg.webp",
        "name": "Carlsberg",
        "desc": "",
        "price": 180,
        "id": 179,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/heineken.webp",
        "name": "Heineken",
        "desc": "",
        "price": 180,
        "id": 180,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/strongbow.webp",
        "name": "Strongbow",
        "desc": "",
        "price": 180,
        "id": 181,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/john smith.webp",
        "name": "John Smith",
        "desc": "",
        "price": 180,
        "id": 182,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/murphys.webp",
        "name": "Murphy’s",
        "desc": "",
        "price": 180,
        "id": 183,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/tuborg.webp",
        "name": "Tuborg",
        "desc": "",
        "price": 180,
        "id": 184,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/bomonti.webp",
        "name": "Bomonti",
        "desc": "",
        "price": 180,
        "id": 185,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/bud.webp",
        "name": "Bud",
        "desc": "",
        "price": 180,
        "id": 186,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/vanpur.webp",
        "name": "Vanpur",
        "desc": "",
        "price": 160,
        "id": 187,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/special tuborg.webp",
        "name": "Tuborg Special",
        "desc": "",
        "price": 180,
        "id": 188,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/alkolsüz-bira.webp",
        "name": "Alkolsüz Bira",
        "desc": "",
        "price": 160,
        "id": 189,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/fıçı-bira.webp",
        "name": "Fıçı Bira",
        "desc": "",
        "price": 160,
        "id": 190,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/mexican-bira.webp",
        "name": "Meksikan Bira",
        "desc": "",
        "price": 180,
        "id": 191,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/mexican-teqila.webp",
        "name": "Meksikan Tequila Bira",
        "desc": "",
        "price": 300,
        "id": 192,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/zivania.webp",
        "name": "Zivania",
        "desc": "",
        "price": 0,
        "id": 193,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/kıbrıs brandy.webp",
        "name": "Kvint Brandy",
        "desc": "",
        "price": 0,
        "id": 194,
        "active": true
      },
      {
        "cat": "viski",
        "img": "Menü/Alkoller/viskiler/J&B.webp",
        "name": "J&B Şişe",
        "desc": "",
        "price": 0,
        "id": 195,
        "active": true
      },
      {
        "cat": "viski",
        "img": "Menü/Alkoller/viskiler/Red Label.webp",
        "name": "Red Label Şişe",
        "desc": "",
        "price": 0,
        "id": 196,
        "active": true
      },
      {
        "cat": "viski",
        "img": "Menü/Alkoller/viskiler/black label.webp",
        "name": "Black Label Şişe",
        "desc": "",
        "price": 0,
        "id": 197,
        "active": true
      },
      {
        "cat": "viski",
        "img": "Menü/Alkoller/viskiler/Jack daniels.webp",
        "name": "Jack Daniels Şişe",
        "desc": "",
        "price": 0,
        "id": 198,
        "active": true
      },
      {
        "cat": "viski",
        "img": "Menü/Alkoller/viskiler/bells.webp",
        "name": "Bells Şişe",
        "desc": "",
        "price": 0,
        "id": 199,
        "active": true
      },
      {
        "cat": "viski",
        "img": "Menü/Alkoller/viskiler/ballantines.webp",
        "name": "Ballentine’s Şişe",
        "desc": "",
        "price": 0,
        "id": 200,
        "active": true
      },
      {
        "cat": "viski",
        "img": "Menü/Alkoller/viskiler/chivas regal.webp",
        "name": "Chivas Regal Şişe",
        "desc": "",
        "price": 0,
        "id": 201,
        "active": true
      },
      {
        "cat": "viski",
        "img": "Menü/Alkoller/viskiler/jameson35.webp",
        "name": "Jameson 35",
        "desc": "",
        "price": 1000,
        "id": 202,
        "active": true
      },
      {
        "cat": "viski",
        "img": "Menü/Alkoller/viskiler/redlabel35.webp",
        "name": "Red Label 35 Lik",
        "desc": "",
        "price": 950,
        "id": 203,
        "active": true
      },
      {
        "cat": "viski",
        "img": "Menü/Alkoller/viskiler/blacklabel35.webp",
        "name": "Black Label 35 Lik",
        "desc": "",
        "price": 1500,
        "id": 204,
        "active": true
      },
      {
        "cat": "viski",
        "img": "Menü/Alkoller/viskiler/chivas-35-regal.webp",
        "name": "Chivas Regal 35 Lik",
        "desc": "",
        "price": 2000,
        "id": 205,
        "active": true
      },
      {
        "cat": "viski",
        "img": "Menü/Alkoller/viskiler/granyviski.webp",
        "name": "Cyprus Brandy",
        "desc": "",
        "price": 0,
        "id": 206,
        "active": true
      },
      {
        "cat": "viski",
        "img": "Menü/Alkoller/viskiler/grouse.webp",
        "name": "The Famous Grouse",
        "desc": "",
        "price": 0,
        "id": 207,
        "active": true
      },
      {
        "cat": "rakı",
        "img": "Menü/Alkoller/Rakılar/yeni rakı.webp",
        "name": "Yeni Rakı Şişe",
        "desc": "",
        "price": 0,
        "id": 208,
        "active": true
      },
      {
        "cat": "rakı",
        "img": "Menü/Alkoller/Rakılar/efe rakı.webp",
        "name": "Efe Rakı Şişe",
        "desc": "",
        "price": 0,
        "id": 209,
        "active": true
      },
      {
        "cat": "rakı",
        "img": "Menü/Alkoller/Rakılar/tekirdağ rakı.webp",
        "name": "Tekirdağ Rakı",
        "desc": "",
        "price": 0,
        "id": 210,
        "active": true
      },
      {
        "cat": "rakı",
        "img": "Menü/Alkoller/Rakılar/beylerbeyi göbek 70cl.webp",
        "name": "Beylerbeyi Göbek (70’lik)",
        "desc": "",
        "price": 0,
        "id": 211,
        "active": true
      },
      {
        "cat": "rakı",
        "img": "Menü/Alkoller/Rakılar/beylerbeyi göbek 35.webp",
        "name": "Beylerbeyi Göbek (35’lik)",
        "desc": "",
        "price": 750,
        "id": 212,
        "active": true
      },
      {
        "cat": "rakı",
        "img": "Menü/Alkoller/Rakılar/Tekirdağ gold .webp",
        "name": "Tekirdağ Gold",
        "desc": "",
        "price": 900,
        "id": 213,
        "active": true
      },
      {
        "cat": "rakı",
        "img": "Menü/Alkoller/Rakılar/efe-35.webp",
        "name": "Efe Rakı 35 Lik",
        "desc": "",
        "price": 600,
        "id": 214,
        "active": true
      },
      {
        "cat": "rakı",
        "img": "Menü/Alkoller/Rakılar/tekirdag-70.webp",
        "name": "Tekirdağ Gold 70 cl",
        "desc": "",
        "price": 0,
        "id": 215,
        "active": true
      },
      {
        "cat": "rakı",
        "img": "Menü/Alkoller/Rakılar/yenirakı-35.webp",
        "name": "Yeni Rakı 35 cl",
        "desc": "",
        "price": 600,
        "id": 216,
        "active": true
      },
      {
        "cat": "gin",
        "img": "Menü/Alkoller/gin/gordons gin.webp",
        "name": "Gordons Gin",
        "desc": "",
        "price": 0,
        "id": 217,
        "active": true
      },
      {
        "cat": "gin",
        "img": "Menü/Alkoller/gin/bombay gin.webp",
        "name": "Bombay Gins",
        "desc": "",
        "price": 0,
        "id": 218,
        "active": true
      },
      {
        "cat": "gin",
        "img": "Menü/Alkoller/gin/gibsons gin.webp",
        "name": "Gibsons Gins",
        "desc": "",
        "price": 0,
        "id": 219,
        "active": true
      },
      {
        "cat": "tekila",
        "img": "Menü/Alkoller/Tekila/Olmeca.webp",
        "name": "Olmeca Tekila",
        "desc": "",
        "price": 0,
        "id": 220,
        "active": true
      },
      {
        "cat": "vodka",
        "img": "Menü/Alkoller/vodkalar/absolute vodka.webp",
        "name": "Absolute Vodka",
        "desc": "",
        "price": 0,
        "id": 221,
        "active": true
      },
      {
        "cat": "vodka",
        "img": "Menü/Alkoller/vodkalar/smirnoff vodka.webp",
        "name": "Smirnoff Vodka",
        "desc": "",
        "price": 0,
        "id": 222,
        "active": true
      },
      {
        "cat": "vodka",
        "img": "Menü/Alkoller/vodkalar/finlandia vodka.webp",
        "name": "Finlandia Vodka",
        "desc": "",
        "price": 0,
        "id": 223,
        "active": true
      },
      {
        "cat": "vodka",
        "img": "Menü/Alkoller/vodkalar/lokal vodka.webp",
        "name": "Local Vodka",
        "desc": "",
        "price": 0,
        "id": 224,
        "active": true
      },
      {
        "cat": "other",
        "img": "Menü/Alkoller/other/Bacardi.webp",
        "name": "Bacardi",
        "desc": "",
        "price": 0,
        "id": 225,
        "active": true
      },
      {
        "cat": "other",
        "img": "Menü/Alkoller/other/martini.webp",
        "name": "Martini",
        "desc": "",
        "price": 0,
        "id": 226,
        "active": true
      },
      {
        "cat": "other",
        "img": "Menü/Alkoller/other/bailays.webp",
        "name": "Bailays",
        "desc": "",
        "price": 0,
        "id": 227,
        "active": true
      },
      {
        "cat": "other",
        "img": "Menü/Alkoller/other/jagermester.webp",
        "name": "Jager Master",
        "desc": "",
        "price": 0,
        "id": 228,
        "active": true
      },
      {
        "cat": "other",
        "img": "Menü/Alkoller/other/whisky and coke.webp",
        "name": "Whisky and Coke",
        "desc": "",
        "price": 400,
        "id": 229,
        "active": true
      },
      {
        "cat": "other",
        "img": "Menü/Alkoller/other/gin tonic.webp",
        "name": "Gin Tonic",
        "desc": "",
        "price": 300,
        "id": 230,
        "active": true
      },
      {
        "cat": "other",
        "img": "Menü/Alkoller/other/vodka tonik.webp",
        "name": "Vodka Tonik",
        "desc": "",
        "price": 400,
        "id": 231,
        "active": true
      },
      {
        "cat": "other",
        "img": "Menü/Alkoller/other/redbull vodka.webp",
        "name": "Vodka Redbull",
        "desc": "",
        "price": 400,
        "id": 232,
        "active": true
      },
      {
        "cat": "other",
        "img": "Menü/Alkoller/other/vodka coke.webp",
        "name": "Vodka Coke",
        "desc": "",
        "price": 400,
        "id": 233,
        "active": true
      },
      {
        "cat": "other",
        "img": "Menü/Alkoller/other/pink gin and grapefruit.webp",
        "name": "Pink Gin and Greyfruit",
        "desc": "",
        "price": 300,
        "id": 234,
        "active": true
      },
      {
        "cat": "other",
        "img": "Menü/Alkoller/other/kvınt.webp",
        "name": "Brandy Kvint",
        "desc": "",
        "price": 0,
        "id": 235,
        "active": true
      },
      {
        "cat": "other",
        "img": "Menü/Alkoller/other/zvania.webp",
        "name": "Zivania 70 cl",
        "desc": "",
        "price": 0,
        "id": 236,
        "active": true
      },
      {
        "cat": "other",
        "img": "Menü/Alkoller/other/zvania-20ml.webp",
        "name": "Zivania 20 cl",
        "desc": "",
        "price": 500,
        "id": 237,
        "active": true
      },
      {
        "cat": "other",
        "img": "Menü/Alkoller/other/camino.webp",
        "name": "Tequila Camino",
        "desc": "",
        "price": 0,
        "id": 238,
        "active": true
      },
      {
        "cat": "other",
        "img": "Menü/Alkoller/other/malibu.webp",
        "name": "Malibu",
        "desc": "",
        "price": 350,
        "id": 239,
        "active": true
      },
      {
        "cat": "other",
        "img": "Menü/Alkoller/other/kokteyl.webp",
        "name": "Alkollü Kokteyl",
        "desc": "",
        "price": 400,
        "id": 240,
        "active": true
      },
      {
        "cat": "other",
        "img": "Menü/Alkoller/other/alkolsuz-kokteyl.webp",
        "name": "Alkolsuz Kokteyl",
        "desc": "",
        "price": 300,
        "id": 241,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/kvk. yakut 75cl.webp",
        "name": "Kvk. Yakut 75 Cl",
        "desc": "",
        "price": 0,
        "id": 242,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/Kvk. Çankaya 75 Cl.webp",
        "name": "Kvk. Çankaya 75 Cl",
        "desc": "",
        "price": 0,
        "id": 243,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/Villa Doluca Neo Kırmızı 75 Cl.webp",
        "name": "Villa Doluca Neo Kırmızı 75 Cl",
        "desc": "",
        "price": 0,
        "id": 244,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/Villa Doluca Neo Beyaz 75 Cl.webp",
        "name": "Villa Doluca Neo Beyaz 75 Cl",
        "desc": "",
        "price": 0,
        "id": 245,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/Villa Dolucaneo Rose 75 Cl.webp",
        "name": "Villa Doluca Neo Rose 75 Cl",
        "desc": "",
        "price": 0,
        "id": 246,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/Dolucaneo Red.webp",
        "name": "Doluca Neo Kırmızı 75 Cl",
        "desc": "",
        "price": 0,
        "id": 247,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/Dolucaneo White.webp",
        "name": "Doluca Neo Beyaz 75 Cl",
        "desc": "",
        "price": 0,
        "id": 248,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/Dolucaneo Rose.webp",
        "name": "Doluca Neo Rose 75 Cl",
        "desc": "",
        "price": 0,
        "id": 249,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/Kvk Angora Kırmızı 75 Cl.webp",
        "name": "Kvk Angora Kırmızı 75 Cl",
        "desc": "",
        "price": 0,
        "id": 250,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/Kvk Angora Beyaz 75 Cl.webp",
        "name": "Kvk Angora Beyaz 75 Cl",
        "desc": "",
        "price": 0,
        "id": 251,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/J.p. Chenet Cabernet 75 Cl.webp",
        "name": "J.p. Chenet Cabernet 75 Cl",
        "desc": "",
        "price": 0,
        "id": 252,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/J.p. Chenet Reserve 75 Cl.webp",
        "name": "J.p. Chenet Reserve 75 Cl",
        "desc": "",
        "price": 0,
        "id": 253,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/J.p. Chenet Medium Sweet75 Cl.webp",
        "name": "J.p. Chenet Medium Sweet 75 Cl",
        "desc": "",
        "price": 0,
        "id": 254,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/J.p. Chenet Rose 75 Cl.webp",
        "name": "J.p. Chenet Rose 75 Cl",
        "desc": "",
        "price": 0,
        "id": 255,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/J.p. Chenet White 75 Cl.webp",
        "name": "J.p. Chenet White 75 Cl",
        "desc": "",
        "price": 0,
        "id": 256,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/J.P Chenet Red.webp",
        "name": "J.p. Chenet Red 75 Cl",
        "desc": "",
        "price": 0,
        "id": 257,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/meteus original.webp",
        "name": "Meteus Original 75 Cl",
        "desc": "",
        "price": 0,
        "id": 258,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/Meteus Orjinal 75 Cl.webp",
        "name": "Meteus Rose 75 Cl",
        "desc": "",
        "price": 0,
        "id": 259,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/Meteus White 75 Cl.webp",
        "name": "Meteus White 75 Cl",
        "desc": "",
        "price": 0,
        "id": 260,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/Prosecco.webp",
        "name": "Prosecco 75 Cl",
        "desc": "",
        "price": 1000,
        "id": 261,
        "active": true
      },
      {
        "cat": "şarapşişe",
        "img": "Menü/Alkoller/şarapşişeler/Kvint Cabernet Sauvingnon.webp",
        "name": "Kvint Cabernet Sauvingnon",
        "desc": "",
        "price": 0,
        "id": 262,
        "active": true
      },
      {
        "cat": "şarapşişe",
        "img": "Menü/Alkoller/şarapşişeler/Maison Castel Chardonnay.webp",
        "name": "Maison Castel Chardonnay",
        "desc": "",
        "price": 0,
        "id": 263,
        "active": true
      },
      {
        "cat": "şarapşişe",
        "img": "Menü/Alkoller/şarapşişeler/Maison Castel Muscat.webp",
        "name": "Maison Castel Muscat",
        "desc": "",
        "price": 0,
        "id": 264,
        "active": true
      },
      {
        "cat": "şarapşişe",
        "img": "Menü/Alkoller/şarapşişeler/Maison Castel Merlot.webp",
        "name": "Maison Castel Merlot",
        "desc": "",
        "price": 0,
        "id": 265,
        "active": true
      },
      {
        "cat": "şarapşişe",
        "img": "Menü/Alkoller/şarapşişeler/Maison Castel Cabernot Sauvignon.webp",
        "name": "Maison Castel Cabernot Sauvignon",
        "desc": "",
        "price": 0,
        "id": 266,
        "active": true
      },
      {
        "cat": "şarapşişe",
        "img": "Menü/Alkoller/şarapşişeler/Maison Castel Sauvignon Blanc.webp",
        "name": "Masion Castel Sauvignon Blanc",
        "desc": "",
        "price": 0,
        "id": 267,
        "active": true
      },
      {
        "cat": "şarapşişe",
        "img": "Menü/Alkoller/şarapşişeler/J.P Chenet Pinot Noir.webp",
        "name": "J.P Chenet Pinot Noir",
        "desc": "",
        "price": 0,
        "id": 268,
        "active": true
      },
      {
        "cat": "şarapşişe",
        "img": "Menü/Alkoller/şarapşişeler/J.P. Chenet Cinsault Grananche.webp",
        "name": "J.P. Chenet Cinsault Grananche",
        "desc": "",
        "price": 0,
        "id": 269,
        "active": true
      },
      {
        "cat": "şarapşişe",
        "img": "Menü/Alkoller/şarapşişeler/J.p. Chenet Medium Sweet Kırmızı 75 Cl.webp",
        "name": "J.P Chanet Medium Sweet Kırmızı",
        "desc": "",
        "price": 0,
        "id": 270,
        "active": true
      },
      {
        "cat": "şarapşişe",
        "img": "Menü/Alkoller/şarapşişeler/J.P Chanet Cabernet Syrah.webp",
        "name": "J.P Chanet Cabernet Syrah",
        "desc": "",
        "price": 0,
        "id": 271,
        "active": true
      },
      {
        "cat": "şarapşişe",
        "img": "Menü/Alkoller/şarapşişeler/J.P Chanet Granache 200ml.webp",
        "name": "J.P Chanet Granache 200ml",
        "desc": "",
        "price": 250,
        "id": 272,
        "active": true
      },
      {
        "cat": "şarapşişe",
        "img": "Menü/Alkoller/şarapşişeler/J.P Chanet Merlot Red 200ml.webp",
        "name": "J.P Chanet Merlot Red 200ml",
        "desc": "",
        "price": 250,
        "id": 273,
        "active": true
      },
      {
        "cat": "şarapşişe",
        "img": "Menü/Alkoller/şarapşişeler/J.P Chanet Colombart 200ml.webp",
        "name": "J.P Chanet Colombart 200ml",
        "desc": "",
        "price": 250,
        "id": 274,
        "active": true
      },
      {
        "cat": "şarapşişe",
        "img": "Menü/Alkoller/şarapşişeler/J.P Chanet Cabernet Syrah 200ml.webp",
        "name": "J.P Chanet Cabernet Syrah 200ml",
        "desc": "",
        "price": 250,
        "id": 275,
        "active": true
      },
      {
        "cat": "vodka",
        "img": "Menü/Alkoller/vodkaşişe/Imperial.webp",
        "name": "Imperial",
        "desc": "",
        "price": 0,
        "id": 276,
        "active": true
      },
      {
        "cat": "vodka",
        "img": "Menü/Alkoller/vodkaşişe/istanblue.webp",
        "name": "İstanblue",
        "desc": "",
        "price": 0,
        "id": 277,
        "active": true
      },
      {
        "cat": "viski",
        "img": "Menü/Alkoller/viskişişe/Jim Beam.webp",
        "name": "Jim Beam",
        "desc": "",
        "price": 0,
        "id": 278,
        "active": true
      },
      {
        "cat": "viski",
        "img": "Menü/Alkoller/viskişişe/Jim Beam honey.webp",
        "name": "Jimbeam Honey",
        "desc": "",
        "price": 0,
        "id": 279,
        "active": true
      },
      {
        "cat": "viski",
        "img": "Menü/Alkoller/viskişişe/jameson 70cl.webp",
        "name": "Jameson(70'lik)",
        "desc": "",
        "price": 0,
        "id": 280,
        "active": true
      },
      {
        "cat": "viski",
        "img": "Menü/Alkoller/viskişişe/jameson 1lt.webp",
        "name": "Jameson(1'lik)",
        "desc": "",
        "price": 0,
        "id": 281,
        "active": true
      }
    ],
    "pastane": [
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Cheese cake.webp",
        "name": "Cheese Cake",
        "desc": "",
        "price": 220,
        "id": 282,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Red Velvet.webp",
        "name": "Red Velvet",
        "desc": "",
        "price": 200,
        "id": 283,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Oreo adet.webp",
        "name": "Oreo Adet",
        "desc": "",
        "price": 200,
        "id": 284,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Havuçlu Kek Adet.webp",
        "name": "Havuçlu Kek Adet",
        "desc": "",
        "price": 200,
        "id": 285,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Mozaik Pasta Adet.webp",
        "name": "Mozaik Pasta Adet",
        "desc": "",
        "price": 200,
        "id": 286,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Magnolya Adet.webp",
        "name": "Magnolya Adet",
        "desc": "",
        "price": 200,
        "id": 287,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Profiterol Adet.webp",
        "name": "Profiterol Adet",
        "desc": "",
        "price": 200,
        "id": 288,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Supangel.webp",
        "name": "Supangel",
        "desc": "",
        "price": 200,
        "id": 289,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Triliçe Adet.webp",
        "name": "Triliçe Adet",
        "desc": "",
        "price": 200,
        "id": 290,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/San Sebastian.webp",
        "name": "Sansabastian Adet",
        "desc": "",
        "price": 220,
        "id": 291,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Sütlaç.webp",
        "name": "Sütlaç Adet",
        "desc": "",
        "price": 120,
        "id": 292,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Ekler.webp",
        "name": "Ekler",
        "desc": "",
        "price": 50,
        "id": 293,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Tuzlu Kurabiye 5 Adet.webp",
        "name": "Tuzlu Kurabiye 5 Adet",
        "desc": "",
        "price": 80,
        "id": 294,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Tatlı kurabiyeler.webp",
        "name": "Tatlı Kurabiye 3 Adet",
        "desc": "",
        "price": 80,
        "id": 295,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Baklava.webp",
        "name": "Baklava Ş.Fıstıklı Dilim 1 Adet",
        "desc": "",
        "price": 200,
        "id": 296,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Adet Pasta.webp",
        "name": "Adet Pasta",
        "desc": "",
        "price": 300,
        "id": 297,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Şekerpare adet.webp",
        "name": "Şekerpare Adet",
        "desc": "",
        "price": 25,
        "id": 298,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Kartopu Adet.webp",
        "name": "Kartopu Adet",
        "desc": "",
        "price": 30,
        "id": 299,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Doyuran.webp",
        "name": "Doyuran",
        "desc": "",
        "price": 30,
        "id": 300,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Doyurucu Adet.webp",
        "name": "Doyurucu Adet",
        "desc": "",
        "price": 120,
        "id": 301,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Kazandibi.webp",
        "name": "Kazandibi",
        "desc": "",
        "price": 200,
        "id": 302,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/ibiza.webp",
        "name": "İbiza",
        "desc": "",
        "price": 200,
        "id": 303,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/elmalı turta.webp",
        "name": "Elmalı Turta",
        "desc": "",
        "price": 120,
        "id": 304,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/ıslak kek.webp",
        "name": "Islak Kek",
        "desc": "",
        "price": 200,
        "id": 305,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/donats.webp",
        "name": "Donats",
        "desc": "",
        "price": 200,
        "id": 306,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/donats dolgulu.webp",
        "name": "Donats Dolgulu",
        "desc": "",
        "price": 220,
        "id": 307,
        "active": true
      },
      {
        "cat": "servisler",
        "img": "Menü/Pastane/Servisler/simit.webp",
        "name": "Simit Servis",
        "desc": "",
        "price": 200,
        "id": 308,
        "active": true
      },
      {
        "cat": "servisler",
        "img": "Menü/Pastane/Servisler/açma sade.webp",
        "name": "Açma Sade Servis",
        "desc": "",
        "price": 200,
        "id": 309,
        "active": true
      },
      {
        "cat": "servisler",
        "img": "Menü/Pastane/Servisler/peynirli pide.webp",
        "name": "Peynirli Pide Servis",
        "desc": "",
        "price": 200,
        "id": 310,
        "active": true
      },
      {
        "cat": "servisler",
        "img": "Menü/Pastane/Servisler/Patatesli açma.webp",
        "name": "Patatesli Açma Servis",
        "desc": "",
        "price": 200,
        "id": 311,
        "active": true
      },
      {
        "cat": "servisler",
        "img": "Menü/Pastane/Servisler/peynirli poğaça.webp",
        "name": "Peynirli Poğaça Servis",
        "desc": "",
        "price": 200,
        "id": 312,
        "active": true
      },
      {
        "cat": "servisler",
        "img": "Menü/Pastane/Servisler/tereyağlı simit.webp",
        "name": "Tereyağlı Simit Servis",
        "desc": "",
        "price": 200,
        "id": 313,
        "active": true
      },
      {
        "cat": "servisler",
        "img": "Menü/Pastane/Servisler/çikolatalı açma.webp",
        "name": "Açma Çikolatalı Servis",
        "desc": "",
        "price": 200,
        "id": 314,
        "active": true
      },
      {
        "cat": "servisler",
        "img": "Menü/Pastane/Servisler/pizza poğaça.webp",
        "name": "Pizza Poğaça Servis",
        "desc": "",
        "price": 200,
        "id": 315,
        "active": true
      },
      {
        "cat": "servisler",
        "img": "Menü/Pastane/Servisler/kaşarlı poğaça.webp",
        "name": "Poğaça Kaşarlı Servis",
        "desc": "",
        "price": 200,
        "id": 316,
        "active": true
      },
      {
        "cat": "servisler",
        "img": "Menü/Pastane/Servisler/Zeytinli.webp",
        "name": "Zeytinli Servis",
        "desc": "",
        "price": 250,
        "id": 317,
        "active": true
      },
      {
        "cat": "servisler",
        "img": "Menü/Pastane/Servisler/sosisli poğaça.webp",
        "name": "Sosisli Poğaça Servis",
        "desc": "",
        "price": 200,
        "id": 318,
        "active": true
      },
      {
        "cat": "servisler",
        "img": "Menü/Pastane/Servisler/hellimli.webp",
        "name": "Hellimli Servis",
        "desc": "",
        "price": 250,
        "id": 319,
        "active": true
      },
      {
        "cat": "servisler",
        "img": "Menü/Pastane/Servisler/kapama peynirli poğaça.webp",
        "name": "Kapama Peynirli Servis",
        "desc": "",
        "price": 200,
        "id": 320,
        "active": true
      },
      {
        "cat": "servisler",
        "img": "Menü/Pastane/Servisler/kaşarlı kapama poğaça.webp",
        "name": "Kapama Kaşarlı Servis",
        "desc": "",
        "price": 200,
        "id": 321,
        "active": true
      },
      {
        "cat": "pasta",
        "img": "Menü/Pastane/pastalar/yaş pasta 6 kişilik.webp",
        "name": "Yaş Pasta 6 Kişilik",
        "desc": "",
        "price": 750,
        "id": 322,
        "active": true
      },
      {
        "cat": "pasta",
        "img": "Menü/Pastane/pastalar/yaş pasta 8 kişilik.webp",
        "name": "Yaş Pasta 8 Kişilik",
        "desc": "",
        "price": 1000,
        "id": 323,
        "active": true
      },
      {
        "cat": "pasta",
        "img": "Menü/Pastane/pastalar/yaş pasta 10.webp",
        "name": "Yaş Pasta 10 Kişilik",
        "desc": "",
        "price": 1250,
        "id": 324,
        "active": true
      },
      {
        "cat": "dondurmalar",
        "img": "Menü/Pastane/Dondurmalar/külah dondurma.webp",
        "name": "Külah Dondurma",
        "desc": "Külah dondurma, çikolatalı, fındıklı veya limonlu gibi bir sürü aroma ile servis edilir.",
        "price": 80,
        "id": 325,
        "active": true
      },
      {
        "cat": "dondurmalar",
        "img": "Menü/Pastane/Dondurmalar/top dondurma.webp",
        "name": "Top Dondurma",
        "desc": "Top dondurma, çikolatalı, fındıklı veya limonlu gibi bir sürü aroma ile servis edilir.",
        "price": 50,
        "id": 326,
        "active": true
      },
      {
        "cat": "dondurmalar",
        "img": "Menü/Pastane/Dondurmalar/Meyve Kokteyli Dondurma.webp",
        "name": "Meyve Kokteyli Dondurma",
        "desc": "Top dondurma, çikolatalı, fındıklı veya limonlu gibi bir sürü aroma ile servis edilir.",
        "price": 250,
        "id": 327,
        "active": true
      }
    ],
    "nargile": [
      {
        "cat": "nargile",
        "img": "Menü/Nargileler/mastic gum.webp",
        "name": "Mastic Gum",
        "desc": "",
        "price": 0,
        "id": 328,
        "active": true
      },
      {
        "cat": "nargile",
        "img": "Menü/Nargileler/grape  mint.webp",
        "name": "Grape Mint",
        "desc": "",
        "price": 0,
        "id": 329,
        "active": true
      },
      {
        "cat": "nargile",
        "img": "Menü/Nargileler/inferno night.webp",
        "name": "Inferno Night",
        "desc": "",
        "price": 0,
        "id": 330,
        "active": true
      },
      {
        "cat": "nargile",
        "img": "Menü/Nargileler/tiramisu.webp",
        "name": "Tiramisu",
        "desc": "",
        "price": 0,
        "id": 331,
        "active": true
      },
      {
        "cat": "nargile",
        "img": "Menü/Nargileler/istanbul.webp",
        "name": "İstanbul",
        "desc": "",
        "price": 0,
        "id": 332,
        "active": true
      },
      {
        "cat": "nargile",
        "img": "Menü/Nargileler/master mix.webp",
        "name": "Master Mix",
        "desc": "",
        "price": 0,
        "id": 333,
        "active": true
      },
      {
        "cat": "nargile",
        "img": "Menü/Nargileler/Amor mio.webp",
        "name": "Amor Mio",
        "desc": "",
        "price": 0,
        "id": 334,
        "active": true
      },
      {
        "cat": "nargile",
        "img": "Menü/Nargileler/dejavu.webp",
        "name": "Dejavu",
        "desc": "",
        "price": 0,
        "id": 335,
        "active": true
      },
      {
        "cat": "nargile",
        "img": "Menü/Nargileler/enjoy.webp",
        "name": "Enjoy",
        "desc": "",
        "price": 0,
        "id": 336,
        "active": true
      },
      {
        "cat": "nargile",
        "img": "Menü/Nargileler/ice bonbon.webp",
        "name": "Ice Bonbon",
        "desc": "",
        "price": 0,
        "id": 337,
        "active": true
      },
      {
        "cat": "nargile",
        "img": "Menü/Nargileler/ice strawberry banana.webp",
        "name": "Ice Strawberry Banana",
        "desc": "",
        "price": 0,
        "id": 338,
        "active": true
      },
      {
        "cat": "nargile",
        "img": "Menü/Nargileler/two apples gold.webp",
        "name": "Two",
        "desc": "",
        "price": 0,
        "id": 339,
        "active": true
      }
    ]
  },
  "en": {
    "yiyecekler": [
      {
        "cat": "başlangıç",
        "img": "Menü/Çorbalar/corbalar.webp",
        "name": "Todays Soup",
        "desc": "Flavored with fresh spices and served with bread.",
        "price": 250,
        "id": 1,
        "active": true
      },
      {
        "cat": "başlangıç",
        "img": "Menü/Başlangıçlar/kalamar-kizartmasi.webp",
        "name": "Calamari Grill",
        "desc": "Fresh and delicious soup option prepared by our chef. Squid rings marinated in white wine served with sauce.",
        "price": 400,
        "id": 2,
        "active": true
      },
      {
        "cat": "başlangıç",
        "img": "Menü/Başlangıçlar/sigara-boregi.webp",
        "name": "Cigarette Pastry",
        "desc": "Prepared with 6 thin phyllo sheets and contains cheese and spices.",
        "price": 200,
        "id": 3,
        "active": true
      },
      {
        "cat": "başlangıç",
        "img": "Menü/Başlangıçlar/çin böreği.webp",
        "name": "China Pastry",
        "desc": "3 spice and vegetable fritters",
        "price": 250,
        "id": 4,
        "active": true
      },
      {
        "cat": "başlangıç",
        "img": "Menü/Başlangıçlar/sarımsaklı mantar.webp",
        "name": "Garlic Mushrooms",
        "desc": "Grilled mushrooms with garlic sauce.",
        "price": 250,
        "id": 5,
        "active": true
      },
      {
        "cat": "başlangıç",
        "img": "Menü/Başlangıçlar/ızgara hellim.webp",
        "name": "Grill Halloumi",
        "desc": "4 pieces of grilled halloumi.",
        "price": 200,
        "id": 6,
        "active": true
      },
      {
        "cat": "başlangıç",
        "img": "Menü/Başlangıçlar/sarımsaklı ekmek.webp",
        "name": "Garlic Bread",
        "desc": "Bread marinated in garlic.",
        "price": 200,
        "id": 7,
        "active": true
      },
      {
        "cat": "başlangıç",
        "img": "Menü/Başlangıçlar/elma dilimli patates.webp",
        "name": "Apple Sliced Fries",
        "desc": "With garlic sauce, if you like.",
        "price": 200,
        "id": 8,
        "active": true
      },
      {
        "cat": "başlangıç",
        "img": "Menü/Başlangıçlar/kızarmış patates.webp",
        "name": "French Fries",
        "desc": "With garlic sauce, if you like.",
        "price": 200,
        "id": 9,
        "active": true
      },
      {
        "cat": "başlangıç",
        "img": "Menü/Başlangıçlar/bulgur köftesi.webp",
        "name": "Bulgur Meatballs",
        "desc": "2 meatballs with lemon wedge",
        "price": 200,
        "id": 10,
        "active": true
      },
      {
        "cat": "başlangıç",
        "img": "Menü/Başlangıçlar/meze.webp",
        "name": "Appetizer Plate",
        "desc": "Appetizer Plate",
        "price": 100,
        "id": 11,
        "active": true
      },
      {
        "cat": "başlangıç",
        "img": "Menü/Başlangıçlar/extra-yemek.webp",
        "name": "Extra Yemek",
        "desc": "Extra Yemek",
        "price": 200,
        "id": 12,
        "active": true
      },
      {
        "cat": "başlangıç",
        "img": "Menü/Başlangıçlar/biratabak.webp",
        "name": "Beer Plate",
        "desc": "Chicken tenders, sausage, onion rings, fries and beer platter with sauce.",
        "price": 600,
        "id": 13,
        "active": true
      },
      {
        "cat": "başlangıç",
        "img": "Menü/Başlangıçlar/tabldot.webp",
        "name": "Dinner Tray",
        "desc": "A plate of appetizers with a variety of flavors, including olives, pickles, cheese and nuts.",
        "price": 300,
        "id": 14,
        "active": true
      },
      {
        "cat": "kahvaltılık",
        "img": "Menü/Kahvaltılıklar/taşmekan kahvaltı 1 kişilik.webp",
        "name": "<p style=\"font-size: 16pt;\">Taşmekan Breakfast for 1 Person</p>",
        "desc": "Taşmekan Breakfast for 1 Person",
        "price": 550,
        "id": 15,
        "active": true
      },
      {
        "cat": "kahvaltılık",
        "img": "Menü/Kahvaltılıklar/taşmekan kahvaltı 1 kişilik.webp",
        "name": "<p style=\"font-size: 16pt;\"> Taşmekan Breakfast for 1 Persons</p>",
        "desc": "Taşmekan Breakfast for 1 Persons",
        "price": 750,
        "id": 16,
        "active": true
      },
      {
        "cat": "kahvaltılık",
        "img": "Menü/Kahvaltılıklar/taşmekan kahvaltı 2 kişilik.webp",
        "name": "<p style=\"font-size: 16pt;\"> Taşmekan Breakfast for 2 Persons</p>",
        "desc": "Taşmekan Breakfast for 2 Persons",
        "price": 1500,
        "id": 17,
        "active": true
      },
      {
        "cat": "kahvaltılık",
        "img": "Menü/Kahvaltılıklar/ingiliz kahvaltısı.webp",
        "name": "British Breakfast",
        "desc": "It includes bacon, fried eggs, boiled beans, fried mushrooms and tomatoes.",
        "price": 650,
        "id": 18,
        "active": true
      },
      {
        "cat": "kahvaltılık",
        "img": "Menü/Kahvaltılıklar/omlet.webp",
        "name": "Omelette Types",
        "desc": "Plain omelettes, tomato, cheese, mushroom or mixed omelettes.",
        "price": 350,
        "id": 19,
        "active": true
      },
      {
        "cat": "kahvaltılık",
        "img": "Menü/Kahvaltılıklar/göz yumurta.webp",
        "name": "Eye Egg and potatoes",
        "desc": "Two carefully cooked eye eggs with a side of crispy fried potatoes.",
        "price": 350,
        "id": 20,
        "active": true
      },
      {
        "cat": "kahvaltılık",
        "img": "Menü/Kahvaltılıklar/yumurta patates.webp",
        "name": "Egg and potatoes",
        "desc": "Eggs, vegetables and potatoes are scrambled together.",
        "price": 350,
        "id": 21,
        "active": true
      },
      {
        "cat": "kahvaltılık",
        "img": "Menü/Kahvaltılıklar/menemen.webp",
        "name": "Menemen",
        "desc": "Tomatoes, eggs and potatoes, scrambled",
        "price": 350,
        "id": 22,
        "active": true
      },
      {
        "cat": "kahvaltılık",
        "img": "Menü/Kahvaltılıklar/yumurta patates.webp",
        "name": "Egg and potatoes",
        "desc": "Eggs, vegetables and potatoes.",
        "price": 350,
        "id": 23,
        "active": true
      },
      {
        "cat": "kahvaltılık",
        "img": "Menü/Kahvaltılıklar/extra-yumurta.webp",
        "name": "Extra Egg",
        "desc": "Extra Egg",
        "price": 30,
        "id": 24,
        "active": true
      },
      {
        "cat": "kahvaltılık",
        "img": "Menü/Kahvaltılıklar/extra.webp",
        "name": "Extra",
        "desc": "Extra",
        "price": 100,
        "id": 25,
        "active": true
      },
      {
        "cat": "kahvaltılık",
        "img": "Menü/Kahvaltılıklar/pastırmalı-yumurta.webp",
        "name": "Bacon Eggs",
        "desc": "Bacon Eggs",
        "price": 350,
        "id": 26,
        "active": true
      },
      {
        "cat": "sandviç",
        "img": "Menü/Sandviç ve tostlar/pastırmalı sandviç.webp",
        "name": "Bacon Sandwich",
        "desc": "Includes 2 slices of bread, bacon, lettuce, tomato and mayonnaise.",
        "price": 450,
        "id": 27,
        "active": true
      },
      {
        "cat": "sandviç",
        "img": "Menü/Sandviç ve tostlar/jambon-pesto sandviç.webp",
        "name": "Jambom-Pesto Sandwich",
        "desc": "A sandwich with ham and pesto sauce.",
        "price": 350,
        "id": 28,
        "active": true
      },
      {
        "cat": "sandviç",
        "img": "Menü/Sandviç ve tostlar/karışıksandwich.webp",
        "name": "Mixed Sandwich",
        "desc": "Cheese, ham or bacon sandwich.",
        "price": 350,
        "id": 29,
        "active": true
      },
      {
        "cat": "sandviç",
        "img": "Menü/Sandviç ve tostlar/karışık tost.webp",
        "name": "Mixed Toast",
        "desc": "Cheese Ham or Bacon toast.",
        "price": 350,
        "id": 30,
        "active": true
      },
      {
        "cat": "sandviç",
        "img": "Menü/Sandviç ve tostlar/peynirli sandviç.webp",
        "name": "Sandwich with cheese",
        "desc": "Sandwich made with special cheese.",
        "price": 350,
        "id": 31,
        "active": true
      },
      {
        "cat": "sandviç",
        "img": "Menü/Sandviç ve tostlar/tuna sandviç.webp",
        "name": "Tuna fish Sandwich",
        "desc": "Sandwich with tuna fish, lettuce and tomato.",
        "price": 350,
        "id": 32,
        "active": true
      },
      {
        "cat": "sandviç",
        "img": "Menü/Sandviç ve tostlar/Taşmekan Special sandviç.webp",
        "name": "Taşmekan Special Sandwich",
        "desc": "Serve with chips.",
        "price": 400,
        "id": 33,
        "active": true
      },
      {
        "cat": "sandviç",
        "img": "Menü/Sandviç ve tostlar/avakadolu-sandwich.webp",
        "name": "Avocado Sandwich",
        "desc": "It is served with chips.",
        "price": 400,
        "id": 34,
        "active": true
      },
      {
        "cat": "atıştırmalık",
        "img": "Menü/Atıştırmalıklar/tavuk kanat.webp",
        "name": "Chicken Wings",
        "desc": "Our carefully marinated, crispy fried chicken wings give your palate a feast of flavor with the harmony of spices!",
        "price": 400,
        "id": 35,
        "active": true
      },
      {
        "cat": "atıştırmalık",
        "img": "Menü/Atıştırmalıklar/tavuk parmak.webp",
        "name": "Chicken Finger",
        "desc": "Chicken fingers, prepared with golden crispy chicken meat on the outside and tender chicken meat on the inside.",
        "price": 400,
        "id": 36,
        "active": true
      },
      {
        "cat": "atıştırmalık",
        "img": "Menü/Atıştırmalıklar/cipsler.webp",
        "name": "Potato Chips",
        "desc": "A crispy and delicious snack made by frying thinly sliced potatoes in a golden color.",
        "price": 200,
        "id": 37,
        "active": true
      },
      {
        "cat": "atıştırmalık",
        "img": "Menü/Atıştırmalıklar/tavuk nugget.webp",
        "name": "Chicken Nugget",
        "desc": "With its soft texture, it offers a feast of flavor in every bite, and the special sauces served with it leave an unforgettable mark on the palate.",
        "price": 400,
        "id": 38,
        "active": true
      },
      {
        "cat": "atıştırmalık",
        "img": "Menü/Atıştırmalıklar/meyve tabağı.webp",
        "name": "Fruit Plate",
        "desc": "The Fruit Plate, where the most delicious seasonal fruits are carefully sliced and presented, adds color to your table with its freshness!",
        "price": 400,
        "id": 39,
        "active": true
      },
      {
        "cat": "atıştırmalık",
        "img": "Menü/Atıştırmalıklar/peynir tabağı.webp",
        "name": "Cheese Plate",
        "desc": "Carefully selected cheese varieties with different flavors meet with nuts and fresh fruits!",
        "price": 400,
        "id": 40,
        "active": true
      },
      {
        "cat": "atıştırmalık",
        "img": "Menü/Atıştırmalıklar/çerev tabağı.webp",
        "name": "Nuts Plate",
        "desc": "A delicious plate of nuts, including almonds, walnuts and hazelnuts.",
        "price": 200,
        "id": 41,
        "active": true
      },
      {
        "cat": "tavukmenu",
        "img": "Menü/Tavuk Menüler/mantar soslu tavuk.webp",
        "name": "Chicken with mushroom sauce",
        "desc": "Served with grilled chicken with mushroom sauce, rice, vegetables and salad.",
        "price": 550,
        "id": 42,
        "active": true
      },
      {
        "cat": "tavukmenu",
        "img": "Menü/Tavuk Menüler/tavuk köri.webp",
        "name": "Chicken with curry sauce",
        "desc": "Chicken cubes are stir-fried with onion and curry sauce and served with rice.",
        "price": 550,
        "id": 43,
        "active": true
      },
      {
        "cat": "tavukmenu",
        "img": "Menü/Tavuk Menüler/tavuk stroganoff.webp",
        "name": "Chicken Straganoff",
        "desc": "Prepared with onions, mushrooms, gherkins, brandy and cream, served with rice.",
        "price": 550,
        "id": 44,
        "active": true
      },
      {
        "cat": "tavukmenu",
        "img": "Menü/Tavuk Menüler/tavuk şinitzel.webp",
        "name": "Chicken Schnitzel",
        "desc": "Fried with 11 different spices and breadcrumbs, served with potatoes and salad.",
        "price": 600,
        "id": 45,
        "active": true
      },
      {
        "cat": "tavukmenu",
        "img": "Menü/Tavuk Menüler/tavuk isabella.webp",
        "name": "Chicken İsabella",
        "desc": "Chicken schnitzel baked with mushrooms, peppers and tomatoes, served with rice.",
        "price": 550,
        "id": 46,
        "active": true
      },
      {
        "cat": "tavukmenu",
        "img": "Menü/Tavuk Menüler/tavuk kanat.webp",
        "name": "Chicken Wings",
        "desc": "5 chicken wings are grilled and served with potatoes and salad.",
        "price": 550,
        "id": 47,
        "active": true
      },
      {
        "cat": "tavukmenu",
        "img": "Menü/Tavuk Menüler/tavuk şiş.webp",
        "name": "Chicken Shish",
        "desc": "Diced chicken pieces are grilled and served with potatoes and salad.",
        "price": 600,
        "id": 48,
        "active": true
      },
      {
        "cat": "tavukmenu",
        "img": "Menü/Tavuk Menüler/tavuk parmak.webp",
        "name": "Chicken Fingers",
        "desc": "Chicken pieces sliced into fingers.",
        "price": 550,
        "id": 49,
        "active": true
      },
      {
        "cat": "tavukmenu",
        "img": "Menü/Tavuk Menüler/çıtırtavuk.webp",
        "name": "Kentucky Fried Chicken",
        "desc": "Chicken pieces sliced.",
        "price": 550,
        "id": 50,
        "active": true
      },
      {
        "cat": "ızgaralar",
        "img": "Menü/Izgaralar/karışık ızgara.webp",
        "name": "Mixed Grill",
        "desc": "Mixed grill, a delicious combination of meat and vegetables.",
        "price": 1100,
        "id": 51,
        "active": true
      },
      {
        "cat": "ızgaralar",
        "img": "Menü/Izgaralar/kuzu pirzola.webp",
        "name": "Lamb Cutlet",
        "desc": "Lamb chops marinated with special spices and grilled.",
        "price": 900,
        "id": 52,
        "active": true
      },
      {
        "cat": "ızgaralar",
        "img": "Menü/Izgaralar/kuzu şiş.webp",
        "name": "Lamb Shish",
        "desc": "Lamb skewers are prepared by skewering cubed meat and cooking it on the grill.",
        "price": 900,
        "id": 53,
        "active": true
      },
      {
        "cat": "dürümler",
        "img": "Menü/Dürümler/chicken wrap.webp",
        "name": "Chicken Wrap",
        "desc": "Chicken Wrap is a delicious wrap wrapped with vegetables and special sauces.",
        "price": 550,
        "id": 54,
        "active": true
      },
      {
        "cat": "dürümler",
        "img": "Menü/Dürümler/beef wrap.webp",
        "name": "Beef Wrap",
        "desc": "The beef wrap is a delicious wrap wrapped with spicy pieces of meat and vegetables.",
        "price": 550,
        "id": 55,
        "active": true
      },
      {
        "cat": "dürümler",
        "img": "Menü/Dürümler/mixed wrap.webp",
        "name": "Mixed Wrap",
        "desc": "Karışık dürüm, hem tavuk hem de et parçalarıyla hazırlanan lezzetli bir dürüm.",
        "price": 600,
        "id": 56,
        "active": true
      },
      {
        "cat": "dürümler",
        "img": "Menü/Dürümler/meatball wrap.webp",
        "name": "Meatball Wrap",
        "desc": "Köfte dürüm is a delicious wrap wrapped with spicy meatball pieces and vegetables.",
        "price": 550,
        "id": 57,
        "active": true
      },
      {
        "cat": "dürümler",
        "img": "Menü/Dürümler/meat skewer wrap.webp",
        "name": "Meat Skewer Wrap",
        "desc": "The meat skewer wrap is a delicious wrap wrapped with spicy pieces of meat and vegetables.",
        "price": 650,
        "id": 58,
        "active": true
      },
      {
        "cat": "dürümler",
        "img": "Menü/Dürümler/chicken shish.webp",
        "name": "Chicken shish wrap",
        "desc": "chicken shish wrap, a delicious wrap wrapped with spicy chicken pieces and vegetables.",
        "price": 550,
        "id": 59,
        "active": true
      },
      {
        "cat": "dürümler",
        "img": "Menü/Dürümler/çiğ köfte dürüm.webp",
        "name": "Raw meatball wrap",
        "desc": "A delicious wrap wrapped with raw meatballs, lettuce and tomato.",
        "price": 350,
        "id": 60,
        "active": true
      },
      {
        "cat": "fajita",
        "img": "Menü/Fajita Menü/chicken fajita.webp",
        "name": "Chicken fajita wrap",
        "desc": "Chicken fajita, cooked in a pan with vegetables and served with tortilla bread.",
        "price": 600,
        "id": 61,
        "active": true
      },
      {
        "cat": "fajita",
        "img": "Menü/Fajita Menü/beef fajita.webp",
        "name": "Meat Fajita wrap",
        "desc": "The meat fajita is cooked in a pan with vegetables and served with tortilla bread.",
        "price": 650,
        "id": 62,
        "active": true
      },
      {
        "cat": "fajita",
        "img": "Menü/Fajita Menü/mixed fajita.webp",
        "name": "Mixed Fajita wrap",
        "desc": "Mixed fajita is a delicious fajita made with both chicken and meat pieces.",
        "price": 600,
        "id": 63,
        "active": true
      },
      {
        "cat": "burger",
        "img": "Menü/Hamburgerler/Et Hamburger.webp",
        "name": "Meat Hamburger",
        "desc": "Meat burger, a delicious burger prepared with special sauce and fresh vegetables.",
        "price": 500,
        "id": 64,
        "active": true
      },
      {
        "cat": "burger",
        "img": "Menü/Hamburgerler/Cheeseburger.webp",
        "name": "Cheeseburger",
        "desc": "Cheeseburger is a delicious burger prepared with cheddar cheese and special sauces.",
        "price": 550,
        "id": 65,
        "active": true
      },
      {
        "cat": "burger",
        "img": "Menü/Hamburgerler/bacon burger.webp",
        "name": "Bacon burger",
        "desc": "Bacon burger is a delicious burger prepared with crispy bacon and special sauces.",
        "price": 600,
        "id": 66,
        "active": true
      },
      {
        "cat": "burger",
        "img": "Menü/Hamburgerler/Double cheeseburger.webp",
        "name": "Double Cheeseburger",
        "desc": "Double cheeseburger is a delicious burger prepared with two slices of cheddar cheese and special sauces.",
        "price": 600,
        "id": 67,
        "active": true
      },
      {
        "cat": "salata",
        "img": "Menü/Salatalar/tavuk sezar salatası.webp",
        "name": "Chicken Caesar Salad",
        "desc": "Grilled chicken with caesar sauce",
        "price": 500,
        "id": 68,
        "active": true
      },
      {
        "cat": "salata",
        "img": "Menü/Salatalar/akdeniz salatası.webp",
        "name": "Mediterranean Salad",
        "desc": "Mediterranean flavors",
        "price": 450,
        "id": 69,
        "active": true
      },
      {
        "cat": "salata",
        "img": "Menü/Salatalar/deniz mahsülü salatası.webp",
        "name": "Seafood salad",
        "desc": "Mixed seafood",
        "price": 550,
        "id": 70,
        "active": true
      },
      {
        "cat": "salata",
        "img": "Menü/Salatalar/tuna salatası.webp",
        "name": "Tuna salad",
        "desc": "Tuna fish on greens",
        "price": 500,
        "id": 71,
        "active": true
      },
      {
        "cat": "salata",
        "img": "Menü/Salatalar/tuna salatası.webp",
        "name": "Cold Cuts Platter",
        "desc": "Prepared with fresh tomatoes, cucumbers, peppers and greens",
        "price": 400,
        "id": 72,
        "active": true
      },
      {
        "cat": "makarna",
        "img": "Menü/Makarnalar/spagetti napoliten.webp",
        "name": "Spagetti Napoliten",
        "desc": "With Napoliten sauce",
        "price": 450,
        "id": 73,
        "active": true
      },
      {
        "cat": "makarna",
        "img": "Menü/Makarnalar/spagetti bolonez.webp",
        "name": "Spagetti Bolonez",
        "desc": "With Bolonez Sauce",
        "price": 500,
        "id": 74,
        "active": true
      },
      {
        "cat": "makarna",
        "img": "Menü/Makarnalar/tavuklu pesto soslu penne.webp",
        "name": "Penne with Pesto Sauce",
        "desc": "With chicken pesto sauce",
        "price": 500,
        "id": 75,
        "active": true
      },
      {
        "cat": "makarna",
        "img": "Menü/Makarnalar/kremalı tavuk soslu penne.webp",
        "name": "Penne with cream and chicken sauce",
        "desc": "With cream and chicken sauce",
        "price": 500,
        "id": 76,
        "active": true
      },
      {
        "cat": "makarna",
        "img": "Menü/Makarnalar/deniz ürünlü fettucini.webp",
        "name": "Fettuchini with seafood",
        "desc": "With Chicken sauce",
        "price": 550,
        "id": 77,
        "active": true
      },
      {
        "cat": "diyet",
        "img": "Menü/Diyet Menü/Tavuk şiş salata.webp",
        "name": "Chicken shish salad",
        "desc": "Chicken skewers marinated in a special sauce",
        "price": 550,
        "id": 78,
        "active": true
      },
      {
        "cat": "diyet",
        "img": "Menü/Diyet Menü/brokoli - tavuk - pilav.webp",
        "name": "Broccoli - Chicken - Rice",
        "desc": "Chicken, broccoli and rice are prepared in a healthy plate.",
        "price": 550,
        "id": 79,
        "active": true
      },
      {
        "cat": "diyet",
        "img": "Menü/Diyet Menü/brokoli - et - pilav.webp",
        "name": "Broccoli - Meat - Rice",
        "desc": "Meat, broccoli and rice are prepared in a healthy plate.",
        "price": 650,
        "id": 80,
        "active": true
      },
      {
        "cat": "diyet",
        "img": "Menü/Diyet Menü/brokoli - köfte - pilav.webp",
        "name": "Broccoli - Meatballs - Rice",
        "desc": "Meatballs, broccoli and rice are prepared in a healthy plate.",
        "price": 500,
        "id": 81,
        "active": true
      },
      {
        "cat": "diyet",
        "img": "Menü/Diyet Menü/falafel.webp",
        "name": "Falafel",
        "desc": "Falafel, nohut köftesi, sebzeler ve özel soslarla hazırlanan sağlıklı bir tabak.",
        "price": 500,
        "id": 82,
        "active": true
      },
      {
        "cat": "krep",
        "img": "Menü/Krepler/tavuklu krep.webp",
        "name": "Pancake with Chicken",
        "desc": "A delicious dish prepared by adding sautéed chicken, vegetables and a sauce into thin pancake dough.",
        "price": 600,
        "id": 83,
        "active": true
      },
      {
        "cat": "krep",
        "img": "Menü/Krepler/etli krep.webp",
        "name": "Meat Pancake",
        "desc": "A delicious dish prepared by adding sautéed meat, vegetables and a sauce into the pancake dough.",
        "price": 650,
        "id": 84,
        "active": true
      },
      {
        "cat": "krep",
        "img": "Menü/Krepler/sebzeli krep.webp",
        "name": "Pancake with vegetables",
        "desc": "A delicious dish prepared by adding sautéed chicken, vegetables and a sauce into thin pancake dough.",
        "price": 500,
        "id": 85,
        "active": true
      },
      {
        "cat": "pizza",
        "img": "Menü/Pizzalar/taşmekan mixed pizza.webp",
        "name": "Taşmekan Mixed Pizza",
        "desc": "A delicious dish prepared by adding sautéed chicken, vegetables and a sauce into thin pancake dough.",
        "price": 600,
        "id": 86,
        "active": true
      },
      {
        "cat": "pizza",
        "img": "Menü/Pizzalar/deniz ürünleri.webp",
        "name": "Seafood",
        "desc": "Seafood pizza with shrimp, squid and fish and more",
        "price": 650,
        "id": 87,
        "active": true
      },
      {
        "cat": "pizza",
        "img": "Menü/Pizzalar/margarita pizza.webp",
        "name": "Margarita",
        "desc": "Tomatoes, pesto sauce, mozzarella",
        "price": 550,
        "id": 88,
        "active": true
      },
      {
        "cat": "pizza",
        "img": "Menü/Pizzalar/ton balıklı pizza.webp",
        "name": "Tuna Pizza",
        "desc": "Tuna, tomato, pepper, mozzarella",
        "price": 600,
        "id": 89,
        "active": true
      },
      {
        "cat": "pizza",
        "img": "Menü/Pizzalar/domuz pastırmalı ve ananaslı pizza.webp",
        "name": "Pizza with bacon and pineapples",
        "desc": "Bacon, pineapple, mozzarella / Bacon, pineapple, mozzarella",
        "price": 650,
        "id": 90,
        "active": true
      },
      {
        "cat": "pizza",
        "img": "Menü/Pizzalar/vejetaryen pizza.webp",
        "name": "Vegetarien Pizza",
        "desc": "Mushrooms, olives, corn, tomatoes, peppers, mozzarella",
        "price": 550,
        "id": 91,
        "active": true
      },
      {
        "cat": "vejetaryan",
        "img": "Menü/Vejetaryen menü/sebze gratin.webp",
        "name": "Vegetable Garaten",
        "desc": "Mushrooms, olives, corn, tomatoes, peppers, mozzarella",
        "price": 500,
        "id": 92,
        "active": true
      },
      {
        "cat": "vejetaryan",
        "img": "Menü/Vejetaryen menü/mevsimlik sebze kızartması.webp",
        "name": "Seasonal Vegetable Fry",
        "desc": "Mushrooms, olives, corn, tomatoes, peppers, mozzarella",
        "price": 500,
        "id": 93,
        "active": true
      },
      {
        "cat": "vejetaryan",
        "img": "Menü/Vejetaryen menü/vejetaryen curry.webp",
        "name": "Vegetable Curry",
        "desc": "Mushrooms, olives, corn, tomatoes, peppers, mozzarella",
        "price": 500,
        "id": 94,
        "active": true
      },
      {
        "cat": "denizurunlerı",
        "img": "Menü/Deniz ürünleri/kızarmış fileto balık.webp",
        "name": "Grill Fillet Fish",
        "desc": "Fillet fish is pan-fried and served with potatoes and salad.",
        "price": 650,
        "id": 95,
        "active": true
      },
      {
        "cat": "denizurunlerı",
        "img": "Menü/Deniz ürünleri/kalamar.webp",
        "name": "Squid",
        "desc": "Squid sautéed in white wine, fried into rings, served with potatoes and salad",
        "price": 600,
        "id": 96,
        "active": true
      },
      {
        "cat": "denizurunlerı",
        "img": "Menü/Deniz ürünleri/jumbo karides.webp",
        "name": "Jumbo Shrimp",
        "desc": "Jumbo shrimps are cooked with garlic sauce and served.",
        "price": 650,
        "id": 97,
        "active": true
      },
      {
        "cat": "cocukmenu",
        "img": "Menü/Çocuk menüsü/mix pizza.webp",
        "name": "Mixed Pizza",
        "desc": "Salami, sausage, mushrooms, olives, tomatoes, peppers, mozzarella.",
        "price": 400,
        "id": 98,
        "active": true
      },
      {
        "cat": "cocukmenu",
        "img": "Menü/Çocuk menüsü/margarita pizza.webp",
        "name": "Margarita Pizza",
        "desc": "Tomatoes, Pesto Sauce, Mozzarella.",
        "price": 400,
        "id": 99,
        "active": true
      },
      {
        "cat": "cocukmenu",
        "img": "Menü/Çocuk menüsü/burger ve cips.webp",
        "name": "Burger and Chips",
        "desc": "Salami, sausage, mushrooms, olives, tomatoes, peppers, mozzarella.",
        "price": 500,
        "id": 100,
        "active": true
      },
      {
        "cat": "cocukmenu",
        "img": "Menü/Çocuk menüsü/tavuk kroket ve cips.webp",
        "name": "Chicken Croquettes and Chips",
        "desc": "Salami, sausage, mushrooms, olives, tomatoes, peppers, mozzarella.",
        "price": 500,
        "id": 101,
        "active": true
      },
      {
        "cat": "cocukmenu",
        "img": "Menü/Çocuk menüsü/sosis ve cips.webp",
        "name": "Sausage and Chips",
        "desc": "Salami, sausage, mushrooms, olives, tomatoes, peppers, mozzarella.",
        "price": 500,
        "id": 102,
        "active": true
      },
      {
        "cat": "etler",
        "img": "Menü/Et Menü/biberli biftek.webp",
        "name": "Steak with pepper",
        "desc": "Marinated steak with pepper sauce.",
        "price": 850,
        "id": 103,
        "active": true
      },
      {
        "cat": "etler",
        "img": "Menü/Et Menü/Diane biftek.webp",
        "name": "Diane Steak",
        "desc": "Cooked in a rich garlic sauce with tomatoes and red wine.",
        "price": 850,
        "id": 104,
        "active": true
      },
      {
        "cat": "etler",
        "img": "Menü/Et Menü/krema ve bistro soslu biftek.webp",
        "name": "Steak with cream and bistro sauce",
        "desc": "Steak cooked with cream, mushrooms and bistro sauce.",
        "price": 850,
        "id": 105,
        "active": true
      },
      {
        "cat": "etler",
        "img": "Menü/Et Menü/kuzu köri.webp",
        "name": "Lamb Curry",
        "desc": "Diced lamb pieces are cooked with onion and curry sauce and served with rice and salad.",
        "price": 850,
        "id": 106,
        "active": true
      },
      {
        "cat": "etler",
        "img": "Menü/Et Menü/kuzu sote.webp",
        "name": "Lamb sauté",
        "desc": "Diced lamb is cooked in a pan with tomatoes and served with potatoes and salad.",
        "price": 850,
        "id": 107,
        "active": true
      },
      {
        "cat": "etler",
        "img": "Menü/Et Menü/köfte.webp",
        "name": "Meatballs",
        "desc": "5 meatballs grilled and served with potatoes and salad.",
        "price": 700,
        "id": 108,
        "active": true
      },
      {
        "cat": "etler",
        "img": "Menü/Et Menü/Domuz Pirzola.webp",
        "name": "Pig Chop",
        "desc": "2 pork chops grilled and served with potatoes and salad.",
        "price": 750,
        "id": 340,
        "active": true
      }
    ],
    "icecekler": [
      {
        "cat": "colddrinks",
        "img": "Menü/Soğuk Kahveler/Tonik espresso.webp",
        "name": "Tonick Expresso",
        "desc": "",
        "price": 150,
        "id": 109,
        "active": true
      },
      {
        "cat": "colddrinks",
        "img": "Menü/Soğuk Kahveler/soğuk kahve.webp",
        "name": "Ice Coffee",
        "desc": "",
        "price": 200,
        "id": 110,
        "active": true
      },
      {
        "cat": "colddrinks",
        "img": "Menü/Soğuk Kahveler/ice latte.webp",
        "name": "Ice Latte",
        "desc": "",
        "price": 250,
        "id": 111,
        "active": true
      },
      {
        "cat": "colddrinks",
        "img": "Menü/Soğuk Kahveler/ice americano.webp",
        "name": "Ice Americano",
        "desc": "",
        "price": 200,
        "id": 112,
        "active": true
      },
      {
        "cat": "colddrinks",
        "img": "Menü/Soğuk Kahveler/ice cappuccino.webp",
        "name": "Ice Cappuccino",
        "desc": "",
        "price": 250,
        "id": 113,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/white mocha.webp",
        "name": "White Mocha",
        "desc": "",
        "price": 250,
        "id": 114,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/Salep.webp",
        "name": "Salep",
        "desc": "",
        "price": 150,
        "id": 115,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/Filtre kahve.webp",
        "name": "Filter coffee",
        "desc": "",
        "price": 200,
        "id": 116,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/nescafe gold.webp",
        "name": "Nescafe Decaf",
        "desc": "",
        "price": 170,
        "id": 117,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/nescafe.webp",
        "name": "Coffee / Nescafe",
        "desc": "",
        "price": 150,
        "id": 118,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/türk kahvesi.webp",
        "name": "Turkish Coffee",
        "desc": "",
        "price": 80,
        "id": 119,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/cappuccino.webp",
        "name": "Cappuccino",
        "desc": "",
        "price": 200,
        "id": 120,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/expresso.webp",
        "name": "Expresso",
        "desc": "",
        "price": 150,
        "id": 121,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/cafe latte.webp",
        "name": "Café Latte",
        "desc": "",
        "price": 200,
        "id": 122,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/coffee americano.webp",
        "name": "Coffee Americano",
        "desc": "",
        "price": 200,
        "id": 123,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/machiatto.webp",
        "name": "Machiatto",
        "desc": "",
        "price": 200,
        "id": 124,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/caramel cappuccino.webp",
        "name": "Caramel Capuccino",
        "desc": "",
        "price": 200,
        "id": 125,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/mocha caramel latte.webp",
        "name": "Mocha Caramel Latte",
        "desc": "",
        "price": 200,
        "id": 126,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/hot chocolate.webp",
        "name": "Hot Chocolate",
        "desc": "",
        "price": 200,
        "id": 127,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/doubleespresso.webp",
        "name": "Expresso Double",
        "desc": "",
        "price": 300,
        "id": 128,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/karamellatte.webp",
        "name": "Caramel Latte",
        "desc": "",
        "price": 300,
        "id": 129,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/caramel cappuccino.webp",
        "name": "Caramel Capuccino",
        "desc": "",
        "price": 300,
        "id": 130,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/laktossuzkahve.webp",
        "name": "Lactose-Free Milk Coffee",
        "desc": "",
        "price": 250,
        "id": 131,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/soyasütlükahve.webp",
        "name": "Soy Milk Cappuccino",
        "desc": "",
        "price": 300,
        "id": 132,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/soyasütlümak.webp",
        "name": "Soy Milk Latte",
        "desc": "",
        "price": 300,
        "id": 133,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/vanilyamach.webp",
        "name": "Vanilla Cappuccino",
        "desc": "",
        "price": 300,
        "id": 134,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/vanilyalılatte.webp",
        "name": "Vanilla Latte",
        "desc": "",
        "price": 300,
        "id": 135,
        "active": true
      },
      {
        "cat": "kahveler",
        "img": "Menü/Kahveler/doublecoffe.webp",
        "name": "Double Coffee",
        "desc": "",
        "price": 160,
        "id": 136,
        "active": true
      },
      {
        "cat": "caylar",
        "img": "Menü/Çaylar/Turkish Tea.webp",
        "name": "Turkish Tea",
        "desc": "",
        "price": 50,
        "id": 137,
        "active": true
      },
      {
        "cat": "caylar",
        "img": "Menü/Çaylar/Twinings erly grey tea.webp",
        "name": "Twinings Early Grey Tea",
        "desc": "",
        "price": 80,
        "id": 138,
        "active": true
      },
      {
        "cat": "caylar",
        "img": "Menü/Çaylar/Twinings fruit tea.webp",
        "name": "Twinings Fruit Tea",
        "desc": "",
        "price": 80,
        "id": 139,
        "active": true
      },
      {
        "cat": "caylar",
        "img": "Menü/Çaylar/lipton yellow tea.webp",
        "name": "Lipton Yellow Tea",
        "desc": "",
        "price": 80,
        "id": 140,
        "active": true
      },
      {
        "cat": "caylar",
        "img": "Menü/Çaylar/lipton fruit tea.webp",
        "name": "Lipton Fruit Tea",
        "desc": "",
        "price": 80,
        "id": 141,
        "active": true
      },
      {
        "cat": "caylar",
        "img": "Menü/Çaylar/termosçay.webp",
        "name": "Thermos Tea",
        "desc": "",
        "price": 500,
        "id": 142,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/Ice Tea.webp",
        "name": "Ice Tea",
        "desc": "",
        "price": 80,
        "id": 143,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/redbull.webp",
        "name": "Energy Drink",
        "desc": "",
        "price": 90,
        "id": 144,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/schweppes.webp",
        "name": "Tonick",
        "desc": "",
        "price": 70,
        "id": 145,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/frutti karpuzlu soda.webp",
        "name": "Fruit Soda",
        "desc": "",
        "price": 70,
        "id": 146,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/dimes karışık meyve suyu.webp",
        "name": "Fruit juice",
        "desc": "",
        "price": 70,
        "id": 147,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/Taze Meyve suyu.webp",
        "name": "Fresh Juice",
        "desc": "",
        "price": 200,
        "id": 148,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/milkshake.webp",
        "name": "Milkshake",
        "desc": "",
        "price": 250,
        "id": 149,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/süt.webp",
        "name": "Milk",
        "desc": "",
        "price": 100,
        "id": 150,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/lemonade.webp",
        "name": "Lemonade",
        "desc": "",
        "price": 100,
        "id": 151,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/Ayran.webp",
        "name": "Ayran",
        "desc": "",
        "price": 50,
        "id": 152,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/erikli su 50ml.webp",
        "name": "Water (50cl)",
        "desc": "",
        "price": 30,
        "id": 153,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/erikli 1.5 lt su.webp",
        "name": "Water (1,5lt)",
        "desc": "",
        "price": 60,
        "id": 154,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/maden suyu.webp",
        "name": "Mineral Water",
        "desc": "",
        "price": 70,
        "id": 155,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/büyük şalgam.webp",
        "name": "Turnip Large",
        "desc": "",
        "price": 150,
        "id": 156,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/küçük şalgam.webp",
        "name": "Turnip Small",
        "desc": "",
        "price": 70,
        "id": 157,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/güllü süt.webp",
        "name": "Rose Milk",
        "desc": "",
        "price": 180,
        "id": 158,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/Atom milkshake.webp",
        "name": "Atom Milkshake",
        "desc": "",
        "price": 300,
        "id": 159,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/churchill.webp",
        "name": "Cherchil",
        "desc": "",
        "price": 100,
        "id": 160,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/lime.webp",
        "name": "Lime",
        "desc": "",
        "price": 200,
        "id": 161,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/mneyvesuyu-kucuk.webp",
        "name": "Fruit Juice Box Small",
        "desc": "",
        "price": 50,
        "id": 162,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/limonatasoda.webp",
        "name": "Soda Lemonade",
        "desc": "",
        "price": 200,
        "id": 163,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/meyvesuyu-1lt.webp",
        "name": "Fruit Juice 1 LT",
        "desc": "",
        "price": 200,
        "id": 164,
        "active": true
      },
      {
        "cat": "drinks",
        "img": "Menü/İçecekler/tonick-1lt.webp",
        "name": "Tonick 1 LT",
        "desc": "",
        "price": 200,
        "id": 165,
        "active": true
      },
      {
        "cat": "kolalar",
        "img": "Menü/İçecekler/Coca cola.webp",
        "name": "Coca Cola",
        "desc": "",
        "price": 70,
        "id": 166,
        "active": true
      },
      {
        "cat": "kolalar",
        "img": "Menü/İçecekler/coca cola light.webp",
        "name": "Coca Cola Light",
        "desc": "",
        "price": 70,
        "id": 167,
        "active": true
      },
      {
        "cat": "kolalar",
        "img": "Menü/İçecekler/pepsi.webp",
        "name": "Pepsi",
        "desc": "",
        "price": 70,
        "id": 168,
        "active": true
      },
      {
        "cat": "kolalar",
        "img": "Menü/İçecekler/pepsi light.webp",
        "name": "Pepsi Light",
        "desc": "",
        "price": 70,
        "id": 169,
        "active": true
      },
      {
        "cat": "kolalar",
        "img": "Menü/İçecekler/sprite.webp",
        "name": "Sprite",
        "desc": "",
        "price": 70,
        "id": 170,
        "active": true
      },
      {
        "cat": "kolalar",
        "img": "Menü/İçecekler/fanta.webp",
        "name": "Fanta",
        "desc": "",
        "price": 70,
        "id": 171,
        "active": true
      },
      {
        "cat": "kolalar",
        "img": "Menü/İçecekler/seven up.webp",
        "name": "Seven Up",
        "desc": "",
        "price": 70,
        "id": 172,
        "active": true
      },
      {
        "cat": "kolalar",
        "img": "Menü/İçecekler/yedigün.webp",
        "name": "Yedigün",
        "desc": "",
        "price": 70,
        "id": 173,
        "active": true
      }
    ],
    "alkoller": [
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/Efes Şişe.webp",
        "name": "Efes Bottle",
        "desc": "",
        "price": 160,
        "id": 174,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/efes light.webp",
        "name": "Efes Light",
        "desc": "",
        "price": 160,
        "id": 175,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/Becks.webp",
        "name": "Becks",
        "desc": "",
        "price": 180,
        "id": 176,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/miller.webp",
        "name": "Miller 50 CL",
        "desc": "",
        "price": 180,
        "id": 177,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/miller.webp",
        "name": "Miller 33 CL",
        "desc": "",
        "price": 160,
        "id": 178,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/carlsberg.webp",
        "name": "Carlsberg",
        "desc": "",
        "price": 180,
        "id": 179,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/heineken.webp",
        "name": "Heineken",
        "desc": "",
        "price": 180,
        "id": 180,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/strongbow.webp",
        "name": "Strongbow",
        "desc": "",
        "price": 180,
        "id": 181,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/john smith.webp",
        "name": "John Smith",
        "desc": "",
        "price": 180,
        "id": 182,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/murphys.webp",
        "name": "Murphy’s",
        "desc": "",
        "price": 180,
        "id": 183,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/tuborg.webp",
        "name": "Tuborg",
        "desc": "",
        "price": 180,
        "id": 184,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/bomonti.webp",
        "name": "Bomonti",
        "desc": "",
        "price": 180,
        "id": 185,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/bud.webp",
        "name": "Bud",
        "desc": "",
        "price": 180,
        "id": 186,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/vanpur.webp",
        "name": "Vanpur",
        "desc": "",
        "price": 160,
        "id": 187,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/special tuborg.webp",
        "name": "Tuborg Special",
        "desc": "",
        "price": 180,
        "id": 188,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/alkolsüz-bira.webp",
        "name": "Non-Alcoholic Beer",
        "desc": "",
        "price": 160,
        "id": 189,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/fıçı-bira.webp",
        "name": "Draft beer",
        "desc": "",
        "price": 160,
        "id": 190,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/mexican-bira.webp",
        "name": "Mexican Beer",
        "desc": "",
        "price": 180,
        "id": 191,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/mexican-teqila.webp",
        "name": "Mexican Tequila Beer",
        "desc": "",
        "price": 300,
        "id": 192,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/zivania.webp",
        "name": "Zivania",
        "desc": "",
        "price": 0,
        "id": 193,
        "active": true
      },
      {
        "cat": "bira",
        "img": "Menü/Alkoller/biralar/kıbrıs brandy.webp",
        "name": "Kvint Brandy",
        "desc": "",
        "price": 0,
        "id": 194,
        "active": true
      },
      {
        "cat": "viski",
        "img": "Menü/Alkoller/viskiler/J&B.webp",
        "name": "J&B Bottle",
        "desc": "",
        "price": 0,
        "id": 195,
        "active": true
      },
      {
        "cat": "viski",
        "img": "Menü/Alkoller/viskiler/Red Label.webp",
        "name": "Red Label Bottle",
        "desc": "",
        "price": 0,
        "id": 196,
        "active": true
      },
      {
        "cat": "viski",
        "img": "Menü/Alkoller/viskiler/black label.webp",
        "name": "Black Label Bottle",
        "desc": "",
        "price": 0,
        "id": 197,
        "active": true
      },
      {
        "cat": "viski",
        "img": "Menü/Alkoller/viskiler/Jack daniels.webp",
        "name": "Jack Daniels Bottle",
        "desc": "",
        "price": 0,
        "id": 198,
        "active": true
      },
      {
        "cat": "viski",
        "img": "Menü/Alkoller/viskiler/bells.webp",
        "name": "Bells Bottle",
        "desc": "",
        "price": 0,
        "id": 199,
        "active": true
      },
      {
        "cat": "viski",
        "img": "Menü/Alkoller/viskiler/ballantines.webp",
        "name": "Ballentine’s Bottle",
        "desc": "",
        "price": 0,
        "id": 200,
        "active": true
      },
      {
        "cat": "viski",
        "img": "Menü/Alkoller/viskiler/chivas regal.webp",
        "name": "Chivas Regal Bottle",
        "desc": "",
        "price": 0,
        "id": 201,
        "active": true
      },
      {
        "cat": "viski",
        "img": "Menü/Alkoller/viskiler/jameson35.webp",
        "name": "Jameson 35",
        "desc": "",
        "price": 1000,
        "id": 202,
        "active": true
      },
      {
        "cat": "viski",
        "img": "Menü/Alkoller/viskiler/redlabel35.webp",
        "name": "Red Label 35 Lik",
        "desc": "",
        "price": 950,
        "id": 203,
        "active": true
      },
      {
        "cat": "viski",
        "img": "Menü/Alkoller/viskiler/blacklabel35.webp",
        "name": "Black Label 35 Lik",
        "desc": "",
        "price": 1500,
        "id": 204,
        "active": true
      },
      {
        "cat": "viski",
        "img": "Menü/Alkoller/viskiler/chivas-35-regal.webp",
        "name": "Chivas Regal 35 Lik",
        "desc": "",
        "price": 2000,
        "id": 205,
        "active": true
      },
      {
        "cat": "viski",
        "img": "Menü/Alkoller/viskiler/granyviski.webp",
        "name": "Cyprus Brandy",
        "desc": "",
        "price": 0,
        "id": 206,
        "active": true
      },
      {
        "cat": "viski",
        "img": "Menü/Alkoller/viskiler/grouse.webp",
        "name": "The Famous Grouse",
        "desc": "",
        "price": 0,
        "id": 207,
        "active": true
      },
      {
        "cat": "rakı",
        "img": "Menü/Alkoller/Rakılar/yeni rakı.webp",
        "name": "Yeni Rakı Bottle",
        "desc": "",
        "price": 0,
        "id": 208,
        "active": true
      },
      {
        "cat": "rakı",
        "img": "Menü/Alkoller/Rakılar/efe rakı.webp",
        "name": "Efe Rakı Bottle",
        "desc": "",
        "price": 0,
        "id": 209,
        "active": true
      },
      {
        "cat": "rakı",
        "img": "Menü/Alkoller/Rakılar/tekirdağ rakı.webp",
        "name": "Tekirdağ Rakı",
        "desc": "",
        "price": 0,
        "id": 210,
        "active": true
      },
      {
        "cat": "rakı",
        "img": "Menü/Alkoller/Rakılar/beylerbeyi göbek 70cl.webp",
        "name": "Beylerbeyi Göbek (70’lik)",
        "desc": "",
        "price": 0,
        "id": 211,
        "active": true
      },
      {
        "cat": "rakı",
        "img": "Menü/Alkoller/Rakılar/beylerbeyi göbek 35.webp",
        "name": "Beylerbeyi Göbek (35’lik)",
        "desc": "",
        "price": 750,
        "id": 212,
        "active": true
      },
      {
        "cat": "rakı",
        "img": "Menü/Alkoller/Rakılar/Tekirdağ gold .webp",
        "name": "Tekirdağ Gold",
        "desc": "",
        "price": 900,
        "id": 213,
        "active": true
      },
      {
        "cat": "rakı",
        "img": "Menü/Alkoller/Rakılar/efe-35.webp",
        "name": "Efe Rakı 35 Lik",
        "desc": "",
        "price": 600,
        "id": 214,
        "active": true
      },
      {
        "cat": "rakı",
        "img": "Menü/Alkoller/Rakılar/tekirdag-70.webp",
        "name": "Tekirdağ Gold 70 cl",
        "desc": "",
        "price": 0,
        "id": 215,
        "active": true
      },
      {
        "cat": "rakı",
        "img": "Menü/Alkoller/Rakılar/yenirakı-35.webp",
        "name": "Yeni Rakı 35 cl",
        "desc": "",
        "price": 600,
        "id": 216,
        "active": true
      },
      {
        "cat": "gin",
        "img": "Menü/Alkoller/gin/gordons gin.webp",
        "name": "Gordons Gin",
        "desc": "",
        "price": 0,
        "id": 217,
        "active": true
      },
      {
        "cat": "gin",
        "img": "Menü/Alkoller/gin/bombay gin.webp",
        "name": "Bombay Gins",
        "desc": "",
        "price": 0,
        "id": 218,
        "active": true
      },
      {
        "cat": "gin",
        "img": "Menü/Alkoller/gin/gibsons gin.webp",
        "name": "Gibsons Gins",
        "desc": "",
        "price": 0,
        "id": 219,
        "active": true
      },
      {
        "cat": "tekila",
        "img": "Menü/Alkoller/Tekila/Olmeca.webp",
        "name": "Olmeca Tequila",
        "desc": "",
        "price": 0,
        "id": 220,
        "active": true
      },
      {
        "cat": "vodka",
        "img": "Menü/Alkoller/vodkalar/absolute vodka.webp",
        "name": "Absolute Vodka",
        "desc": "",
        "price": 0,
        "id": 221,
        "active": true
      },
      {
        "cat": "vodka",
        "img": "Menü/Alkoller/vodkalar/smirnoff vodka.webp",
        "name": "Smirnoff Vodka",
        "desc": "",
        "price": 0,
        "id": 222,
        "active": true
      },
      {
        "cat": "vodka",
        "img": "Menü/Alkoller/vodkalar/finlandia vodka.webp",
        "name": "Finlandia Vodka",
        "desc": "",
        "price": 0,
        "id": 223,
        "active": true
      },
      {
        "cat": "vodka",
        "img": "Menü/Alkoller/vodkalar/lokal vodka.webp",
        "name": "Local Vodka",
        "desc": "",
        "price": 0,
        "id": 224,
        "active": true
      },
      {
        "cat": "other",
        "img": "Menü/Alkoller/other/Bacardi.webp",
        "name": "Bacardi",
        "desc": "",
        "price": 0,
        "id": 225,
        "active": true
      },
      {
        "cat": "other",
        "img": "Menü/Alkoller/other/martini.webp",
        "name": "Martini",
        "desc": "",
        "price": 0,
        "id": 226,
        "active": true
      },
      {
        "cat": "other",
        "img": "Menü/Alkoller/other/bailays.webp",
        "name": "Bailays",
        "desc": "",
        "price": 0,
        "id": 227,
        "active": true
      },
      {
        "cat": "other",
        "img": "Menü/Alkoller/other/jagermester.webp",
        "name": "Jager Master",
        "desc": "",
        "price": 0,
        "id": 228,
        "active": true
      },
      {
        "cat": "other",
        "img": "Menü/Alkoller/other/whisky and coke.webp",
        "name": "Whisky and Coke",
        "desc": "",
        "price": 400,
        "id": 229,
        "active": true
      },
      {
        "cat": "other",
        "img": "Menü/Alkoller/other/gin tonic.webp",
        "name": "Gin Tonic",
        "desc": "",
        "price": 300,
        "id": 230,
        "active": true
      },
      {
        "cat": "other",
        "img": "Menü/Alkoller/other/vodka tonik.webp",
        "name": "Vodka Tonik",
        "desc": "",
        "price": 400,
        "id": 231,
        "active": true
      },
      {
        "cat": "other",
        "img": "Menü/Alkoller/other/redbull vodka.webp",
        "name": "Vodka Redbull",
        "desc": "",
        "price": 400,
        "id": 232,
        "active": true
      },
      {
        "cat": "other",
        "img": "Menü/Alkoller/other/vodka coke.webp",
        "name": "Vodka Coke",
        "desc": "",
        "price": 400,
        "id": 233,
        "active": true
      },
      {
        "cat": "other",
        "img": "Menü/Alkoller/other/pink gin and grapefruit.webp",
        "name": "Pink Gin and Greyfruit",
        "desc": "",
        "price": 300,
        "id": 234,
        "active": true
      },
      {
        "cat": "other",
        "img": "Menü/Alkoller/other/kvınt.webp",
        "name": "Brandy Kvint",
        "desc": "",
        "price": 0,
        "id": 235,
        "active": true
      },
      {
        "cat": "other",
        "img": "Menü/Alkoller/other/zvania.webp",
        "name": "Zivania 70 cl",
        "desc": "",
        "price": 0,
        "id": 236,
        "active": true
      },
      {
        "cat": "other",
        "img": "Menü/Alkoller/other/zvania-20ml.webp",
        "name": "Zivania 20 cl",
        "desc": "",
        "price": 500,
        "id": 237,
        "active": true
      },
      {
        "cat": "other",
        "img": "Menü/Alkoller/other/camino.webp",
        "name": "Tequila Camino",
        "desc": "",
        "price": 0,
        "id": 238,
        "active": true
      },
      {
        "cat": "other",
        "img": "Menü/Alkoller/other/malibu.webp",
        "name": "Malibu",
        "desc": "",
        "price": 350,
        "id": 239,
        "active": true
      },
      {
        "cat": "other",
        "img": "Menü/Alkoller/other/kokteyl.webp",
        "name": "Alcoholic Cocktail",
        "desc": "",
        "price": 400,
        "id": 240,
        "active": true
      },
      {
        "cat": "other",
        "img": "Menü/Alkoller/other/alkolsuz-kokteyl.webp",
        "name": "Non-Alcoholic Cocktail",
        "desc": "",
        "price": 300,
        "id": 241,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/kvk. yakut 75cl.webp",
        "name": "Kvk. Yakut 75 Cl",
        "desc": "",
        "price": 0,
        "id": 242,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/Kvk. Çankaya 75 Cl.webp",
        "name": "Kvk. Çankaya 75 Cl",
        "desc": "",
        "price": 0,
        "id": 243,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/Villa Doluca Neo Kırmızı 75 Cl.webp",
        "name": "Villa Doluca Neo Red 75 Cl",
        "desc": "",
        "price": 0,
        "id": 244,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/Villa Doluca Neo Beyaz 75 Cl.webp",
        "name": "Villa Doluca Neo White 75 Cl",
        "desc": "",
        "price": 0,
        "id": 245,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/Villa Dolucaneo Rose 75 Cl.webp",
        "name": "Villa Doluca Neo Rose 75 Cl",
        "desc": "",
        "price": 0,
        "id": 246,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/Dolucaneo Red.webp",
        "name": "Doluca Neo Red 75 Cl",
        "desc": "",
        "price": 0,
        "id": 247,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/Dolucaneo White.webp",
        "name": "Doluca Neo White 75 Cl",
        "desc": "",
        "price": 0,
        "id": 248,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/Dolucaneo Rose.webp",
        "name": "Doluca Neo Rose 75 Cl",
        "desc": "",
        "price": 0,
        "id": 249,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/Kvk Angora Kırmızı 75 Cl.webp",
        "name": "Kvk Angora Red 75 Cl",
        "desc": "",
        "price": 0,
        "id": 250,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/Kvk Angora Beyaz 75 Cl.webp",
        "name": "Kvk Angora White 75 Cl",
        "desc": "",
        "price": 0,
        "id": 251,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/J.p. Chenet Cabernet 75 Cl.webp",
        "name": "J.p. Chenet Cabernet 75 Cl",
        "desc": "",
        "price": 0,
        "id": 252,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/J.p. Chenet Reserve 75 Cl.webp",
        "name": "J.p. Chenet Reserve 75 Cl",
        "desc": "",
        "price": 0,
        "id": 253,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/J.p. Chenet Medium Sweet75 Cl.webp",
        "name": "J.p. Chenet Medium Sweet 75 Cl",
        "desc": "",
        "price": 0,
        "id": 254,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/J.p. Chenet Rose 75 Cl.webp",
        "name": "J.p. Chenet Rose 75 Cl",
        "desc": "",
        "price": 0,
        "id": 255,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/J.p. Chenet White 75 Cl.webp",
        "name": "J.p. Chenet White 75 Cl",
        "desc": "",
        "price": 0,
        "id": 256,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/J.P Chenet Red.webp",
        "name": "J.p. Chenet Red 75 Cl",
        "desc": "",
        "price": 0,
        "id": 257,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/meteus original.webp",
        "name": "Meteus Original 75 Cl",
        "desc": "",
        "price": 0,
        "id": 258,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/Meteus Orjinal 75 Cl.webp",
        "name": "Meteus Rose 75 Cl",
        "desc": "",
        "price": 0,
        "id": 259,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/Meteus White 75 Cl.webp",
        "name": "Meteus White 75 Cl",
        "desc": "",
        "price": 0,
        "id": 260,
        "active": true
      },
      {
        "cat": "şarap",
        "img": "Menü/Alkoller/şaraplar/Prosecco.webp",
        "name": "Prosecco 75 Cl",
        "desc": "",
        "price": 1000,
        "id": 261,
        "active": true
      },
      {
        "cat": "şarapşişe",
        "img": "Menü/Alkoller/şarapşişeler/Kvint Cabernet Sauvingnon.webp",
        "name": "Kvint Cabernet Sauvingnon",
        "desc": "",
        "price": 0,
        "id": 262,
        "active": true
      },
      {
        "cat": "şarapşişe",
        "img": "Menü/Alkoller/şarapşişeler/Maison Castel Chardonnay.webp",
        "name": "Maison Castel Chardonnay",
        "desc": "",
        "price": 0,
        "id": 263,
        "active": true
      },
      {
        "cat": "şarapşişe",
        "img": "Menü/Alkoller/şarapşişeler/Maison Castel Muscat.webp",
        "name": "Maison Castel Muscat",
        "desc": "",
        "price": 0,
        "id": 264,
        "active": true
      },
      {
        "cat": "şarapşişe",
        "img": "Menü/Alkoller/şarapşişeler/Maison Castel Merlot.webp",
        "name": "Maison Castel Merlot",
        "desc": "",
        "price": 0,
        "id": 265,
        "active": true
      },
      {
        "cat": "şarapşişe",
        "img": "Menü/Alkoller/şarapşişeler/Maison Castel Cabernot Sauvignon.webp",
        "name": "Maison Castel Cabernot Sauvignon",
        "desc": "",
        "price": 0,
        "id": 266,
        "active": true
      },
      {
        "cat": "şarapşişe",
        "img": "Menü/Alkoller/şarapşişeler/Maison Castel Sauvignon Blanc.webp",
        "name": "Masion Castel Sauvignon Blanc",
        "desc": "",
        "price": 0,
        "id": 267,
        "active": true
      },
      {
        "cat": "şarapşişe",
        "img": "Menü/Alkoller/şarapşişeler/J.P Chenet Pinot Noir.webp",
        "name": "J.P Chenet Pinot Noir",
        "desc": "",
        "price": 0,
        "id": 268,
        "active": true
      },
      {
        "cat": "şarapşişe",
        "img": "Menü/Alkoller/şarapşişeler/J.P. Chenet Cinsault Grananche.webp",
        "name": "J.P. Chenet Cinsault Grananche",
        "desc": "",
        "price": 0,
        "id": 269,
        "active": true
      },
      {
        "cat": "şarapşişe",
        "img": "Menü/Alkoller/şarapşişeler/J.p. Chenet Medium Sweet Kırmızı 75 Cl.webp",
        "name": "J.P Chanet Medium Sweet Red",
        "desc": "",
        "price": 0,
        "id": 270,
        "active": true
      },
      {
        "cat": "şarapşişe",
        "img": "Menü/Alkoller/şarapşişeler/J.P Chanet Cabernet Syrah.webp",
        "name": "J.P Chanet Cabernet Syrah",
        "desc": "",
        "price": 0,
        "id": 271,
        "active": true
      },
      {
        "cat": "şarapşişe",
        "img": "Menü/Alkoller/şarapşişeler/J.P Chanet Granache 200ml.webp",
        "name": "J.P Chanet Granache 200ml",
        "desc": "",
        "price": 250,
        "id": 272,
        "active": true
      },
      {
        "cat": "şarapşişe",
        "img": "Menü/Alkoller/şarapşişeler/J.P Chanet Merlot Red 200ml.webp",
        "name": "J.P Chanet Merlot Red 200ml",
        "desc": "",
        "price": 250,
        "id": 273,
        "active": true
      },
      {
        "cat": "şarapşişe",
        "img": "Menü/Alkoller/şarapşişeler/J.P Chanet Colombart 200ml.webp",
        "name": "J.P Chanet Colombart 200ml",
        "desc": "",
        "price": 250,
        "id": 274,
        "active": true
      },
      {
        "cat": "şarapşişe",
        "img": "Menü/Alkoller/şarapşişeler/J.P Chanet Cabernet Syrah 200ml.webp",
        "name": "J.P Chanet Cabernet Syrah 200ml",
        "desc": "",
        "price": 250,
        "id": 275,
        "active": true
      },
      {
        "cat": "vodka",
        "img": "Menü/Alkoller/vodkaşişe/Imperial.webp",
        "name": "Imperial",
        "desc": "",
        "price": 0,
        "id": 276,
        "active": true
      },
      {
        "cat": "vodka",
        "img": "Menü/Alkoller/vodkaşişe/istanblue.webp",
        "name": "İstanblue",
        "desc": "",
        "price": 0,
        "id": 277,
        "active": true
      },
      {
        "cat": "viski",
        "img": "Menü/Alkoller/viskişişe/Jim Beam.webp",
        "name": "Jim Beam",
        "desc": "",
        "price": 0,
        "id": 278,
        "active": true
      },
      {
        "cat": "viski",
        "img": "Menü/Alkoller/viskişişe/Jim Beam honey.webp",
        "name": "Jimbeam Honey",
        "desc": "",
        "price": 0,
        "id": 279,
        "active": true
      },
      {
        "cat": "viski",
        "img": "Menü/Alkoller/viskişişe/jameson 70cl.webp",
        "name": "Jameson(70'lik)",
        "desc": "",
        "price": 0,
        "id": 280,
        "active": true
      },
      {
        "cat": "viski",
        "img": "Menü/Alkoller/viskişişe/jameson 1lt.webp",
        "name": "Jameson(1'lik)",
        "desc": "",
        "price": 0,
        "id": 281,
        "active": true
      }
    ],
    "pastane": [
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Cheese cake.webp",
        "name": "Cheese Cake",
        "desc": "",
        "price": 220,
        "id": 282,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Red Velvet.webp",
        "name": "Red Velvet",
        "desc": "",
        "price": 200,
        "id": 283,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Oreo adet.webp",
        "name": "Oreo piece",
        "desc": "",
        "price": 200,
        "id": 284,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Havuçlu Kek Adet.webp",
        "name": "Carrot Cake piece",
        "desc": "",
        "price": 200,
        "id": 285,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Mozaik Pasta Adet.webp",
        "name": "Mozaic Cake piece",
        "desc": "",
        "price": 200,
        "id": 286,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Magnolya Adet.webp",
        "name": "Magnolia piece",
        "desc": "",
        "price": 200,
        "id": 287,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Profiterol Adet.webp",
        "name": "Profiterole piece",
        "desc": "",
        "price": 200,
        "id": 288,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Supangel.webp",
        "name": "Supangel",
        "desc": "",
        "price": 200,
        "id": 289,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Triliçe Adet.webp",
        "name": "Trilice piece",
        "desc": "",
        "price": 200,
        "id": 290,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/San Sebastian.webp",
        "name": "San sebastian piece",
        "desc": "",
        "price": 220,
        "id": 291,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Sütlaç.webp",
        "name": "Rice Pudding piece",
        "desc": "",
        "price": 120,
        "id": 292,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Ekler.webp",
        "name": "Ekler",
        "desc": "",
        "price": 50,
        "id": 293,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Tuzlu Kurabiye 5 Adet.webp",
        "name": "Salty Cookies 5 Pieces",
        "desc": "",
        "price": 80,
        "id": 294,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Tatlı kurabiyeler.webp",
        "name": "Sweet Cookies 3 Pieces",
        "desc": "",
        "price": 80,
        "id": 295,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Baklava.webp",
        "name": "Baklava Slice with Peanuts 1 Piece",
        "desc": "",
        "price": 200,
        "id": 296,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Adet Pasta.webp",
        "name": "Cake with Piece",
        "desc": "",
        "price": 300,
        "id": 297,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Şekerpare adet.webp",
        "name": "Sugar Pudding Piece",
        "desc": "",
        "price": 25,
        "id": 298,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Kartopu Adet.webp",
        "name": "Snowball Piece",
        "desc": "",
        "price": 30,
        "id": 299,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Doyuran.webp",
        "name": "Satisfier",
        "desc": "",
        "price": 30,
        "id": 300,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Doyurucu Adet.webp",
        "name": "Satisfying Piece",
        "desc": "",
        "price": 120,
        "id": 301,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/Kazandibi.webp",
        "name": "Kazandibi",
        "desc": "",
        "price": 200,
        "id": 302,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/ibiza.webp",
        "name": "İbiza",
        "desc": "",
        "price": 200,
        "id": 303,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/elmalı turta.webp",
        "name": "Apple Pie",
        "desc": "",
        "price": 120,
        "id": 304,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/ıslak kek.webp",
        "name": "Wet Cake",
        "desc": "",
        "price": 200,
        "id": 305,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/donats.webp",
        "name": "Donuts",
        "desc": "",
        "price": 200,
        "id": 306,
        "active": true
      },
      {
        "cat": "tatlilar",
        "img": "Menü/Pastane/Tatlılar/donats dolgulu.webp",
        "name": "Filled Donuts",
        "desc": "",
        "price": 220,
        "id": 307,
        "active": true
      },
      {
        "cat": "servisler",
        "img": "Menü/Pastane/Servisler/simit.webp",
        "name": "Bagel Service",
        "desc": "",
        "price": 200,
        "id": 308,
        "active": true
      },
      {
        "cat": "servisler",
        "img": "Menü/Pastane/Servisler/açma sade.webp",
        "name": "Opener Plain Served",
        "desc": "",
        "price": 200,
        "id": 309,
        "active": true
      },
      {
        "cat": "servisler",
        "img": "Menü/Pastane/Servisler/peynirli pide.webp",
        "name": "Cheese Pita Service",
        "desc": "",
        "price": 200,
        "id": 310,
        "active": true
      },
      {
        "cat": "servisler",
        "img": "Menü/Pastane/Servisler/Patatesli açma.webp",
        "name": "Potato Opener Service",
        "desc": "",
        "price": 200,
        "id": 311,
        "active": true
      },
      {
        "cat": "servisler",
        "img": "Menü/Pastane/Servisler/peynirli poğaça.webp",
        "name": "Cheese Puff Pastry Service",
        "desc": "",
        "price": 200,
        "id": 312,
        "active": true
      },
      {
        "cat": "servisler",
        "img": "Menü/Pastane/Servisler/tereyağlı simit.webp",
        "name": "Buttered Bagel Service",
        "desc": "",
        "price": 200,
        "id": 313,
        "active": true
      },
      {
        "cat": "servisler",
        "img": "Menü/Pastane/Servisler/çikolatalı açma.webp",
        "name": "Opener Served with Chocolate",
        "desc": "",
        "price": 200,
        "id": 314,
        "active": true
      },
      {
        "cat": "servisler",
        "img": "Menü/Pastane/Servisler/pizza poğaça.webp",
        "name": "Pizza Pastry Service",
        "desc": "",
        "price": 200,
        "id": 315,
        "active": true
      },
      {
        "cat": "servisler",
        "img": "Menü/Pastane/Servisler/kaşarlı poğaça.webp",
        "name": "Pastry Served with Kashkaval",
        "desc": "",
        "price": 200,
        "id": 316,
        "active": true
      },
      {
        "cat": "servisler",
        "img": "Menü/Pastane/Servisler/Zeytinli.webp",
        "name": "Olive Service",
        "desc": "",
        "price": 250,
        "id": 317,
        "active": true
      },
      {
        "cat": "servisler",
        "img": "Menü/Pastane/Servisler/sosisli poğaça.webp",
        "name": "Sausage Rolls Served",
        "desc": "",
        "price": 200,
        "id": 318,
        "active": true
      },
      {
        "cat": "servisler",
        "img": "Menü/Pastane/Servisler/hellimli.webp",
        "name": "Halloumi Service",
        "desc": "",
        "price": 250,
        "id": 319,
        "active": true
      },
      {
        "cat": "servisler",
        "img": "Menü/Pastane/Servisler/kapama peynirli poğaça.webp",
        "name": "Closener Served with Cheese",
        "desc": "",
        "price": 200,
        "id": 320,
        "active": true
      },
      {
        "cat": "servisler",
        "img": "Menü/Pastane/Servisler/kaşarlı kapama poğaça.webp",
        "name": "Closener Served with Kashkaval",
        "desc": "",
        "price": 200,
        "id": 321,
        "active": true
      },
      {
        "cat": "pasta",
        "img": "Menü/Pastane/pastalar/yaş pasta 6 kişilik.webp",
        "name": "Birthday Cake for 6 People",
        "desc": "",
        "price": 750,
        "id": 322,
        "active": true
      },
      {
        "cat": "pasta",
        "img": "Menü/Pastane/pastalar/yaş pasta 8 kişilik.webp",
        "name": "Birthday Cake for 8 People",
        "desc": "",
        "price": 1000,
        "id": 323,
        "active": true
      },
      {
        "cat": "pasta",
        "img": "Menü/Pastane/pastalar/yaş pasta 10.webp",
        "name": "Birthday Cake for 10 People",
        "desc": "",
        "price": 1250,
        "id": 324,
        "active": true
      },
      {
        "cat": "dondurmalar",
        "img": "Menü/Pastane/Dondurmalar/külah dondurma.webp",
        "name": "Ice Cream Cone",
        "desc": "Ice cream cone, served with many flavors such as chocolate, hazelnut or lemon It is done.",
        "price": 80,
        "id": 325,
        "active": true
      },
      {
        "cat": "dondurmalar",
        "img": "Menü/Pastane/Dondurmalar/top dondurma.webp",
        "name": "Ball Ice Cream",
        "desc": "Ice cream scoops served with lots of flavors such as chocolate, hazelnut or lemon It is done.",
        "price": 50,
        "id": 326,
        "active": true
      },
      {
        "cat": "dondurmalar",
        "img": "Menü/Pastane/Dondurmalar/Meyve Kokteyli Dondurma.webp",
        "name": "Ice Cream with Fruit Cocktail",
        "desc": "Ice cream served with fruit cocktail, chocolate, hazelnut or lemon It is done.",
        "price": 250,
        "id": 327,
        "active": true
      }
    ],
    "nargile": [
      {
        "cat": "nargile",
        "img": "Menü/Nargileler/mastic gum.webp",
        "name": "Mastic Gum",
        "desc": "",
        "price": 0,
        "id": 328,
        "active": true
      },
      {
        "cat": "nargile",
        "img": "Menü/Nargileler/grape  mint.webp",
        "name": "Grape Mint",
        "desc": "",
        "price": 0,
        "id": 329,
        "active": true
      },
      {
        "cat": "nargile",
        "img": "Menü/Nargileler/inferno night.webp",
        "name": "Inferno Night",
        "desc": "",
        "price": 0,
        "id": 330,
        "active": true
      },
      {
        "cat": "nargile",
        "img": "Menü/Nargileler/tiramisu.webp",
        "name": "Tiramisu",
        "desc": "",
        "price": 0,
        "id": 331,
        "active": true
      },
      {
        "cat": "nargile",
        "img": "Menü/Nargileler/istanbul.webp",
        "name": "İstanbul",
        "desc": "",
        "price": 0,
        "id": 332,
        "active": true
      },
      {
        "cat": "nargile",
        "img": "Menü/Nargileler/master mix.webp",
        "name": "Master Mix",
        "desc": "",
        "price": 0,
        "id": 333,
        "active": true
      },
      {
        "cat": "nargile",
        "img": "Menü/Nargileler/Amor mio.webp",
        "name": "Amor Mio",
        "desc": "",
        "price": 0,
        "id": 334,
        "active": true
      },
      {
        "cat": "nargile",
        "img": "Menü/Nargileler/dejavu.webp",
        "name": "Dejavu",
        "desc": "",
        "price": 0,
        "id": 335,
        "active": true
      },
      {
        "cat": "nargile",
        "img": "Menü/Nargileler/enjoy.webp",
        "name": "Enjoy",
        "desc": "",
        "price": 0,
        "id": 336,
        "active": true
      },
      {
        "cat": "nargile",
        "img": "Menü/Nargileler/ice bonbon.webp",
        "name": "Ice Bonbon",
        "desc": "",
        "price": 0,
        "id": 337,
        "active": true
      },
      {
        "cat": "nargile",
        "img": "Menü/Nargileler/ice strawberry banana.webp",
        "name": "Ice Strawberry Banana",
        "desc": "",
        "price": 0,
        "id": 338,
        "active": true
      },
      {
        "cat": "nargile",
        "img": "Menü/Nargileler/two apples gold.webp",
        "name": "Two",
        "desc": "",
        "price": 0,
        "id": 339,
        "active": true
      }
    ]
  }
};
