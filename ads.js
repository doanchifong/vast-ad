// ads.js - file giả lập quảng cáo để test AdBlock

(function() {
  // Tạo iframe quảng cáo
  var iframe = document.createElement('iframe');
  iframe.src = 'https://example.com/ads.html';
  iframe.width = '300';
  iframe.height = '250';
  iframe.style.border = '0';
  iframe.className = 'ad ad-iframe adsbox';

  // Thêm vào trang
  document.body.appendChild(iframe);

  // Simulate Google AdSense style
  window.adsbygoogle = window.adsbygoogle || [];
  window.adsbygoogle.push({});
})();
