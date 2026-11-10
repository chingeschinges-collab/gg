(function () {
  "use strict";

  /* Safari BFCache: carousel-г reset хийх */
  window.addEventListener("pageshow", function (e) {
    if (!e.persisted) return;
    var track = document.querySelector(".slick-track");
    var list = document.querySelector(".slick-list");
    if (track && list) {
      track.style.transition = "none";
      var sw = track.querySelectorAll(".slick-slide")[0]
        ? track.querySelectorAll(".slick-slide")[0].offsetWidth
        : window.innerWidth;
      track.style.transform = "translate3d(" + -(sw * 3) + "px,0px,0px)";
    }
    document.querySelectorAll(".slick-dots li").forEach(function (d, i) {
      d.classList.toggle("slick-active", i === 0);
    });
  });

  /* ── Loading overlay ── */
  (function () {
    var overlay = document.getElementById("app-loading-overlay");
    var textEl  = document.getElementById("app-loading-text");
    var barEl   = document.getElementById("app-loading-bar");
    if (!overlay) return;

    var pct = 0;
    var timer = setInterval(function () {
      pct += Math.random() * 18 + 4;
      if (pct > 99) pct = 99;
      if (textEl) textEl.textContent = "Loading - " + Math.round(pct) + "%";
      if (barEl)  barEl.style.width  = pct + "%";
    }, 220);

    function hideOverlay() {
      clearInterval(timer);
      if (textEl) textEl.textContent = "Loading - 100%";
      if (barEl)  barEl.style.width  = "100%";
      setTimeout(function () {
        overlay.style.opacity = "0";
        setTimeout(function () { overlay.style.display = "none"; }, 520);
      }, 300);
    }

    var hidden = false;
    function once() {
      if (hidden) return;
      hidden = true;
      setTimeout(hideOverlay, 300);
    }

    window.addEventListener("load", once);
    setTimeout(once, 2500);
  }());

  document.addEventListener("DOMContentLoaded", function () {

    /* ── Avatar дээр Монголын далбаа нэмэх ── */
    // CSS injection — MiniUserInfo__avatar дээр ::after ашиглан flag нэмэх
    (function () {
      var styleTag = document.createElement("style");
      styleTag.textContent = [
        ".poker-root .MiniUserInfo__avatar {",
        "  overflow: visible !important;",
        "}",
        /* Avatar доторх харанхуй div-ийг нуух */
        ".poker-root .MiniUserInfo__avatar .Avatar > *:not(.Avatar__content):not(.Avatar__country_flag) {",
        "  display: none !important;",
        "}",
        ".poker-root .Avatar .Avatar__country_flag .Icon:empty {",
        "  display: none !important;",
        "}",
        ".poker-root .Avatar .Avatar__country_flag .Icon {",
        "  background: transparent !important;",
        "  background-color: transparent !important;",
        "}",
        ".poker-root .MiniUserInfo__avatar::after {",
        "  content: '';",
        "  display: block;",
        "  position: absolute;",
        "  bottom: 0;",
        "  right: 0;",
        "  width: 1.5em;",
        "  height: 1.1em;",
        "  background-image: url(data:image/webp;base64,UklGRt4BAABXRUJQVlA4TNIBAAAvT8AOAA/kIJIkKWoQgAL828EO93SnDQZtG0nyIF9oh+udIGjbNs6oHMv5Q+r8x3NfgBVBGhEBsGJoAdGiAHz2dAMtMAgyiMgCWuCUd5OAf1FA2QAi8l8yWcCKAgBiIiqCFKBA4kCDAETEIE75FYAV5r9nBYZ/RBIAE6IhC0EgAl0gwpAjBiCJIgKCAAjCpIACEJNyXc99PkCWbdu0s57N2E7ui23btm1bK/h2Y/XSiej/BPAHX15/8IV/8l/MjJrHuEcth0Po0zJe7So/lVKU4o4ZkTJuhvtYCudbdyhlNZJWcabjmctWAFFXMshMvG0WEvtO2aOKp7vcd3rWVbBx1wMg/rZWRl7NXn1B115Gv4yDgDsjL9Ga/CCDx5GQLbrujgpOFhYWto8X3r9eWVhYuPtj3QCM+yY7AH8vwwC2FJAHOZbCSyohz0khBt7vl9FnGJESwzDmZPBmrnNwdZOUcdNhCpQ6Kqd0zJqQfuYt9+2oyG8HgIx0TKooroOvqiwBGFNhDKDWEQ9gTsaaqyybfqSey+BcizMKWRvUwaPtmcUL6igPvj8qozHp/QkZRw11b9tuZHApDjDlHFPBcDAYLCcfe5OmSSYGg8H9P/bd/6UA);",
        "  background-size: contain;",
        "  background-repeat: no-repeat;",
        "  background-position: bottom right;",
        "  z-index: 999;",
        "  pointer-events: none;",
        "}"
      ].join("\n");
      document.head.appendChild(styleTag);
    }());

    // DOM manipulation — .Avatar элементүүдэд flag нэмэх / хоосон icon нуух
    function addFlagToAvatars() {
      document.querySelectorAll(".Avatar").forEach(function (avatar) {
        var existingFlag = avatar.querySelector(".Avatar__country_flag");
        if (existingFlag) {
          // Icon__content агуулаагүй хоосон icon-ийг нуух
          existingFlag.querySelectorAll(".Icon").forEach(function (icon) {
            if (!icon.querySelector(".Icon__content")) {
              icon.style.display = "none";
            }
          });
          return;
        }
        var flagContainer = document.createElement("div");
        flagContainer.className = "Avatar__country_flag";
        var flagIcon = document.createElement("div");
        flagIcon.className = "Icon Icon_v_default Icon_c_white Icon_val_flag_icon_mn";
        var iconContent = document.createElement("div");
        iconContent.className = "Icon__content";
        flagIcon.appendChild(iconContent);
        flagContainer.appendChild(flagIcon);
        avatar.appendChild(flagContainer);
      });
    }

    addFlagToAvatars();
    setTimeout(addFlagToAvatars, 800);
    setTimeout(addFlagToAvatars, 2000);

    // Avatar дээрх харанхуй div-ийг автоматаар илрүүлж нуух
    function removeDarkDivOnAvatar() {
      document.querySelectorAll(".MiniUserInfo__avatar").forEach(function (avatarWrapper) {
        var rect = avatarWrapper.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        // Avatar-ийн доод 20%-д байгаа 3 цэгт шалгана
        var points = [
          [rect.left + rect.width * 0.2, rect.top + rect.height * 0.82],
          [rect.left + rect.width * 0.5, rect.top + rect.height * 0.82],
          [rect.left + rect.width * 0.75, rect.top + rect.height * 0.82]
        ];
        var hidden = [];
        points.forEach(function (pt) {
          try {
            var els = document.elementsFromPoint(pt[0], pt[1]);
            els.forEach(function (el) {
              if (hidden.indexOf(el) !== -1) return;
              if (!el || el === document.body || el === document.documentElement) return;
              if (el === avatarWrapper) return;
              if (el.classList.contains("Avatar") || el.classList.contains("MiniUserInfo__avatar")) return;
              if (el.classList.contains("Avatar__content")) return;
              if (el.classList.contains("Avatar__country_flag")) return;
              if (el.closest && el.closest(".Avatar__country_flag")) return;
              if (el.closest && el.closest(".Avatar__content")) return;
              var bg = window.getComputedStyle(el).backgroundColor;
              if (!bg || bg === "rgba(0, 0, 0, 0)" || bg === "transparent") return;
              var m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
              if (!m) return;
              // Харанхуй өнгө шалгах (luminance < 80)
              var lum = +m[1] * 0.299 + +m[2] * 0.587 + +m[3] * 0.114;
              if (lum < 80) {
                el.style.display = "none";
                hidden.push(el);
              }
            });
          } catch (e) {}
        });
      });
    }

    setTimeout(removeDarkDivOnAvatar, 1000);
    setTimeout(removeDarkDivOnAvatar, 2500);

    var observer = new MutationObserver(function () {
      addFlagToAvatars();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    /* ── "Show Games" → Монгол ── */
    document.querySelectorAll(".CarouselGameItem__action .SimpleButton__text").forEach(function (el) {
      if (el.textContent.trim() === "Show Games")
        el.textContent = "Тоглоомуудыг харуулах";
    });

    /* ─────────────────────────────
       CAROUSEL — responsive init
    ───────────────────────────── */
    var track = document.querySelector(".slick-track");
    var list = document.querySelector(".slick-list");

    if (track && list) {
      var slider = list.parentElement;
      var containerW = slider ? slider.offsetWidth : window.innerWidth;
      var peek = Math.round(containerW * 0.05);
      var sw = containerW - peek * 2;
      var allSlides = Array.from(track.querySelectorAll(".slick-slide"));
      var totalSlides = allSlides.length || 9;

      allSlides.forEach(function (sl) { sl.style.width = sw + "px"; });

      var styleTag = document.createElement("style");
      styleTag.textContent =
        ".GamesCarousel .slick-slide > div {display:flex;justify-content:center;align-items:flex-start;}" +
        ".FilterTextContainer__spinner { display:none !important; }" +
        "#app-loading-overlay .LoaderContainerBase__content {background:none !important;}";
      document.head.appendChild(styleTag);

      document.querySelectorAll(".FilterTextContainer__content").forEach(function (content) {
        content.style.overflow = "hidden";
        content.querySelectorAll(".FilterTextContainer__form_field").forEach(function (field) {
          field.style.cssText = "height:1.4em;overflow:hidden;width:100%;display:block;";
          var fc = field.querySelector(".FormField__content");
          if (fc) fc.style.cssText = "display:flex;flex-direction:row;width:100%;height:100%;align-items:center;justify-content:center;gap:0.25em;";
          var lbl = field.querySelector(".FormField__label");
          if (lbl) lbl.style.cssText = "height:auto;font-size:0.75em;color:rgba(255,255,255,0.7);flex-shrink:0;padding:0;";
          var ctrl = field.querySelector(".FormField__control");
          if (ctrl) ctrl.style.cssText = "height:auto;font-size:0.75em;color:white;flex-shrink:0;padding:0;overflow:visible;";
        });
      });

      var initX = -(sw * 3);
      track.style.width = sw * totalSlides + "px";
      track.style.transform = "translate3d(" + initX + "px,0px,0px)";
      list.style.height = "auto";
      list.style.padding = "0 " + peek + "px";

      var realCount = 3;
      var cur = 0;
      var dots = Array.from(document.querySelectorAll(".slick-dots li"));

      function updateDots(i) {
        dots.forEach(function (d, idx) { d.classList.toggle("slick-active", idx === i); });
      }

      function moveTo(idx, animated) {
        track.style.transition = animated ? "transform 270ms cubic-bezier(.25,.46,.45,.94)" : "none";
        track.style.transform = "translate3d(" + (initX - idx * sw) + "px,0px,0px)";
      }

      var tx0 = 0, sx0 = 0, dragging = false;

      list.addEventListener("touchstart", function (e) {
        tx0 = e.touches[0].clientX;
        sx0 = initX - cur * sw;
        dragging = true;
        track.style.transition = "none";
      }, { passive: true });

      list.addEventListener("touchmove", function (e) {
        if (!dragging) return;
        track.style.transform = "translate3d(" + (sx0 + e.touches[0].clientX - tx0) + "px,0px,0px)";
      }, { passive: true });

      list.addEventListener("touchend", function (e) {
        if (!dragging) return;
        dragging = false;
        var dx = e.changedTouches[0].clientX - tx0;
        if (Math.abs(dx) > 38) {
          if (dx < 0) {
            if (cur + 1 >= realCount) {
              moveTo(realCount, true);
              setTimeout(function () { cur = 0; moveTo(0, false); updateDots(0); }, 285);
            } else { cur++; moveTo(cur, true); updateDots(cur); }
          } else {
            if (cur - 1 < 0) {
              moveTo(-1, true);
              setTimeout(function () { cur = realCount - 1; moveTo(cur, false); updateDots(cur); }, 285);
            } else { cur--; moveTo(cur, true); updateDots(cur); }
          }
        } else { moveTo(cur, true); }
      }, { passive: true });
    }

    /* ─────────────────────────────
       FOOTER TAB ACTIVE
    ───────────────────────────── */
    var footerTabs = Array.from(document.querySelectorAll(".PhoneFooterContainer__action"));
    function setFoot(tab) {
      footerTabs.forEach(function (t) { t.classList.remove("TabButton_selected"); });
      if (tab) tab.classList.add("TabButton_selected");
    }

    /* ── Hero нэвтрэх ── */
    document.querySelectorAll(".PhoneLobbyMainContainer__action").forEach(function (btn) {
      btn.addEventListener("click", function () { window.showLogin(); });
    });

    /* ── Carousel товчнууд ── */
    document.querySelectorAll(".CarouselGameItem__action").forEach(function (btn) {
      btn.style.pointerEvents = 'auto';
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        window.showLogin();
      });
    });

    document.querySelectorAll(".CarouselGameItem__small_button.play_button").forEach(function (btn) {
      btn.addEventListener("click", function () { window.showLogin(); });
    });

    document.querySelectorAll(".GamesCarousel__item.lpg-lobby-tournaments").forEach(function (item) {
      item.addEventListener("click", function () { window.showLogin(); });
    });
    document.querySelectorAll(".GamesCarousel__item.lpg-lobby-my-games").forEach(function (item) {
      item.addEventListener("click", function () { window.showLogin(); });
    });

    /* ── Footer ── */
    var homeTab        = document.querySelector(".PhoneFooterContainer__home");
    var cashierTab     = document.querySelector(".PhoneFooterContainer__cashier");
    var tablesTab      = document.querySelector(".PhoneFooterContainer__tables");
    var menuTab        = document.querySelector(".PhoneFooterContainer__menu");
    var contactAdminTab = document.querySelector(".PhoneFooterContainer__contact_admin");

    /* Tables товч одоохондоо ажиллахгүй байлгах (Cashier + Contact Admin-г ажиллуулна) */
    if (tablesTab) { tablesTab.style.pointerEvents = 'none'; tablesTab.style.opacity = '0.4'; }

    [cashierTab, contactAdminTab].forEach(function (t) {
      if (t) { t.classList.remove('disabled', 'disable'); t.style.pointerEvents = ''; t.style.opacity = ''; }
    });

    if (homeTab) homeTab.addEventListener("click", function () { setFoot(homeTab); });
    if (menuTab) menuTab.addEventListener("click", function () { setFoot(menuTab); window.openSidebar(); });

    /* ── КАСС: нэвтэрсэн бол данс, нэвтрээгүй бол login ── */
    if (cashierTab) cashierTab.addEventListener("click", function () {
      setFoot(cashierTab);
      if (window.isLoggedIn && window.isLoggedIn()) window.showCashier();
      else window.showLogin();
    });

    /* ── Admintai holbogdoh ── */
    if (contactAdminTab) contactAdminTab.addEventListener("click", function () {
      setFoot(contactAdminTab);
      window.showContact();
    });

    /* ── Sidebar ── */
    document.addEventListener("click", function (e) {
      if (e.target.closest("#sidebar-settings-btn"))
        window.closeSidebar(function () { window.showSettings(); });
      if (e.target.closest("#sidebar-close-btn") || e.target.id === "sidebar-overlay")
        window.closeSidebar();
    });

    /* ── Мөнгөн ширээний жагсаалт: мөр дарахад ширээ нээгдэнэ ── */
    var tableRows = Array.prototype.slice.call(
      document.querySelectorAll(".CashTablesContainer__list_item")
    ).filter(function (r) { return !r.classList.contains("headItem"); });

    tableRows.forEach(function (row) {
      row.style.cursor = "pointer";
      row.addEventListener("click", function () {
        if (window.openTable) window.openTable(row);
      });
    });

    /* ── Хайх талбар: ширээний нэрээр шүүнэ ── */
    var mSearch = document.querySelector(".input_filter");
    if (mSearch) {
      mSearch.addEventListener("input", function () {
        var q = mSearch.value.trim().toLowerCase();
        tableRows.forEach(function (row) {
          var nameEl = row.querySelector(".name__text_col .name");
          var name = nameEl ? nameEl.textContent.toLowerCase() : "";
          row.style.display = (!q || name.indexOf(q) >= 0) ? "" : "none";
        });
      });
    }

    /* ── Толгой хэсгийн буцах / шүүлтүүр товч ── */
    var headerBackBtn = document.querySelector(".NavigationContainer__action_back");
    if (headerBackBtn) headerBackBtn.addEventListener("click", function () {
      if (window.history.length > 1) window.history.back();
    });

    var headerFilterBtn = document.querySelector(
      ".NavigationPanel__action.SimpleButton_use_icon:not(.NavigationContainer__action_back)"
    );
    if (headerFilterBtn && mSearch) headerFilterBtn.addEventListener("click", function () {
      mSearch.scrollIntoView({ behavior: "smooth", block: "center" });
      mSearch.focus();
    });
  });
})();
