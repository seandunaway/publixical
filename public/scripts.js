'use strict';

(function () {
  var s = document.getElementById('subscribe');
  if (s) {
    var v = s.value;
    s.form.onsubmit = function (e) {
      e.preventDefault();
      s.value = 'Please wait...';
      setTimeout(function () {
        s.form.submit();
      }, 0);
      setTimeout(function () {
        s.value = v;
      }, 1000 * 60);
    };
  }
}());

(function () {
  var c = document.getElementById('contact');
  if (c) {
    var m = "\x70\x75\x62\x6C\x69\x78\x69\x63\x61\x6C\x40\x73\x65\x61\x6E\x64\x75\x6E\x61\x77\x61\x79\x2E\x63\x6F\x6D";
    c.href = 'mailto:' + m + '?Subject=Publix%20iCal';
    c.innerHTML = m;
  }
}());

(function () {
  var u = document.getElementById('url-android');
  if (u) {
    var s = document.createElement('script');
    s.src = '/jstz.min.js';
    s.onload = function () {
      u.innerHTML = u.innerHTML + '&tz=' + window.jstz.determine().name();
    };
    document.getElementsByTagName('body')[0].appendChild(s);
  }
}());
