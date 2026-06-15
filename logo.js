// Journnah — J-reflection logo mark, injected into #logo
(function () {
  var svg = '<svg class="mk" width="26" height="30" viewBox="0 0 64 74">'
    + '<defs><linearGradient id="lg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1B4A3F" stop-opacity="0.30"/><stop offset="1" stop-color="#1B4A3F" stop-opacity="0"/></linearGradient></defs>'
    + '<text x="32" y="36" text-anchor="middle" font-family="Newsreader, Georgia, serif" font-size="34" font-weight="600" fill="#1B4A3F">J</text>'
    + '<line x1="13" y1="40" x2="51" y2="40" stroke="#C79A45" stroke-width="1.6"/>'
    + '<g transform="translate(0,80) scale(1,-1)"><text x="32" y="36" text-anchor="middle" font-family="Newsreader, Georgia, serif" font-size="34" font-weight="600" fill="url(#lg)">J</text></g></svg>';
  var el = document.getElementById('logo');
  if (el) el.innerHTML = svg;
})();
