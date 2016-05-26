/**
* Proje: Second Button / Süreli Buton (sbtn.js)
* Github: https://github.com/BerkPW/sbtn.js
* @author Hacii_ AND BerkPW
* @license Free to use but dont remove the author, license and copyright
* @copyright © 2016 SBTN
*/
var d = document,
  w = window;

function sbtn(id, ayar, saniye) {
  if (id && ayar && saniye) {
    if (saniye >= 1) {
      id = d.getElementById(id);
      var html = id.innerHTML;
      if (id.href) {
        var href = id.href;
        id.href = "#";
      }
      if (id.onclick) {
        var click = id.onclick;
        id.setAttribute("onclick", "");
      }
      if (id.value) {
        var value = id.value;
      }
      if (ayar.beklemeYazisi) {
        var beklemeYazisi = ayar.beklemeYazisi;
      } else {
        if (value) {
          var beklemeYazisi = id.value;
        } else {
          var beklemeYazisi = id.innerHTML;
        }
      }
      if (value) {
        id.value = beklemeYazisi + " (" + saniye + ")";
      } else {
        id.innerHTML = beklemeYazisi + " (" + saniye + ")";
      }
      id.classList.add("sbtn-dis");
      if (ayar.yuvarlak) {
        if (ayar.yuvarlak == 0) {
          var req = "%";
        } else {
          var req = "px";
        }
        id.style.borderRadius = ayar.yuvarlak + req;
      } else {
        id.style.borderRadius = "3px";
      }
      c = setInterval(function() {
        if (saniye != 0) {
          if (value) {
            id.value = beklemeYazisi + " (" + saniye + ")";
          } else {
            id.innerHTML = beklemeYazisi + " (" + saniye + ")";
          }
          saniye--;
        } else {
          if (href) {
            id.href = href;
          }
          if (click) {
            id.onclick = function() {
              click();
            }
          }
          if (value) {
            id.value = value;
          } else {
            id.innerHTML = html;
          }
          id.classList.remove("sbtn-dis");
          if (ayar.yaziRenk) {
            id.style.color = ayar.yaziRenk;
          }
          if (ayar.arkaplanRenk) {
            id.style.background = ayar.arkaplanRenk;
          }
          if (ayar.yuvarlak) {
            if (ayar.yuvarlak == '0') {
              var req = "%";
            } else {
              var req = "px";
            }
            id.style.borderRadius = ayar.yuvarlak + req;
          } else {
            id.style.borderRadius = "3px";
          }
        }
      }, 1000);
    }
  }
}