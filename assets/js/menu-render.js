(function () {
  // Hangi sayfada olduğumuzu ve dili belirle
  var path = window.location.pathname;
  var lang = path.indexOf('/en/') !== -1 ? 'en' : 'tr';

  var pageKey = 'yiyecekler';
  if (path.indexOf('menu-icecekler') !== -1) pageKey = 'icecekler';
  else if (path.indexOf('menu-alkoller') !== -1) pageKey = 'alkoller';
  else if (path.indexOf('menu-pastane') !== -1) pageKey = 'pastane';
  else if (path.indexOf('menu-nargile') !== -1) pageKey = 'nargile';

  // localStorage'da güncel veri varsa onu kullan, yoksa MENU_DATA'yı kullan
  var data;
  try {
    var saved = localStorage.getItem('tm_menu_data');
    data = saved ? JSON.parse(saved) : MENU_DATA;
  } catch (e) {
    data = MENU_DATA;
  }

  var products = (data[lang] && data[lang][pageKey]) ? data[lang][pageKey] : [];

  // İçecek ve nargile sayfalarında icecek-detail-box kullanılıyor
  var isIcecek = (pageKey === 'icecekler' || pageKey === 'nargile');
  var detailClass = isIcecek ? 'icecek-detail-box' : 'detail-box';

  var grid = document.querySelector('.row.grid');
  if (!grid) return;

  var html = products
    .filter(function (p) { return p.active !== false; })
    .map(function (p) {
      var imgPath = p.img ? '../assets/images/' + p.img : '';
      var imgTag = imgPath
        ? '<img loading="lazy" src="' + imgPath + '" alt="">'
        : '';
      return (
        '<div class="col-sm-6 col-lg-4 all ' + (p.cat || '') + '">' +
          '<div class="box"><div>' +
            '<div class="img-box">' + imgTag + '</div>' +
            '<div class="' + detailClass + '">' +
              '<h5>' + (p.name || '') + '</h5>' +
              '<p>' + (p.desc || '') + '</p>' +
              '<div class="options"><h6>' + (p.price ? String(p.price) + ' TL' : '') + '</h6></div>' +
            '</div>' +
          '</div></div>' +
        '</div>'
      );
    })
    .join('');

  grid.innerHTML = html;

  // Isotope / filtre grid'i varsa yeniden başlat
  if (window.jQuery && window.jQuery('.grid').isotope) {
    window.jQuery('.grid').isotope('reloadItems').isotope();
  }
})();
