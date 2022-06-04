import React, { useState } from "react";
import {
  Text,
  Button,
  ModalOverlay,
  Modal,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Input,
  Heading,
  Alert,
  AlertIcon,
  Box,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Progress,
} from "@chakra-ui/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useMyContext } from "../contexts/Context";

export const Formulario = ({ notificacao }) => {
  const { isModalOpen, setIsModalOpen } = useMyContext();
  /* 
  useEffect(() => {

  }, []); */

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [message, setMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const invalido = !nome || !email || !telefone;

  async function handleForm() {
    setLoading(true);

    try {
      await fetch("https://api.gdigital.com.br/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.NEXT_PUBLIC_API_KEY,
        },
        body: JSON.stringify({
          email,
          nome,
          telefone,
          id_form: 26,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (!data.lead_novo && data.msg === "sucesso") {
            alert(data.sucesso);
          } else if (data.lead_novo) {
            setMessage(true);
            setNome("");
            setEmail("");
            setTelefone("");
            window.location.href = "https://pay.greenn.com.br/2410";
          } else {
            alert(data.erro || "Erro, não foi possível fazer sua inscrição");
          }
          console.log(data);
        });
    } catch (err) {
      alert(err.erro || "Erro, não foi possível fazer sua inscrição");
    }
    setLoading(false);
  }

  return (
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton color="black" />
        <ModalBody align="start" flexDir="column">
          <Box
            dangerouslySetInnerHTML={{
              __html: `<style>
 #form_31 { font-size:14px; line-height:1.6; font-family:arial, helvetica, sans-serif; margin:0; }
 #form_31 * { outline:0; }
 ._form_hide { display:none; visibility:hidden; }
 ._form_show { display:block; visibility:visible; }
 #form_31._form-top { top:0; }
 #form_31._form-bottom { bottom:0; }
 #form_31._form-left { left:0; }
 #form_31._form-right { right:0; }
 #form_31 input[type="text"],#form_31 input[type="date"],#form_31 textarea { padding:6px; height:auto; border:#979797 1px solid; border-radius:4px; color:#000 !important; font-size:14px; -webkit-box-sizing:border-box; -moz-box-sizing:border-box; box-sizing:border-box; }
 #form_31 textarea { resize:none; }
 #form_31 ._submit { -webkit-appearance:none; cursor:pointer; font-family:arial, sans-serif; font-size:14px; text-align:center; background:#004cff !important; border:0 !important; -moz-border-radius:4px !important; -webkit-border-radius:4px !important; border-radius:4px !important; color:#fff !important; padding:10px !important; }
 #form_31 ._close-icon { cursor:pointer; background-image:url('https://d226aj4ao1t61q.cloudfront.net/esfkyjh1u_forms-close-dark.png'); background-repeat:no-repeat; background-size:14.2px 14.2px; position:absolute; display:block; top:11px; right:9px; overflow:hidden; width:16.2px; height:16.2px; }
 #form_31 ._close-icon:before { position:relative; }
 #form_31 ._form-body { margin-bottom:30px; }
 #form_31 ._form-image-left { width:150px; float:left; }
 #form_31 ._form-content-right { margin-left:164px; }
 #form_31 ._form-branding { color:#fff; font-size:10px; clear:both; text-align:left; margin-top:30px; font-weight:100; }
 #form_31 ._form-branding ._logo { display:block; width:130px; height:14px; margin-top:6px; background-image:url('https://d226aj4ao1t61q.cloudfront.net/hh9ujqgv5_aclogo_li.png'); background-size:130px auto; background-repeat:no-repeat; }
 #form_31 .form-sr-only { position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0, 0, 0, 0); border:0; }
 #form_31 .form-label,#_form_31 ._form_element ._form-label { font-weight:bold; margin-bottom:5px; display:block; }
 #form_31._dark ._form-branding { color:#333; }
 #form_31._dark ._form-branding ._logo { background-image:url('https://d226aj4ao1t61q.cloudfront.net/jftq2c8s_aclogo_dk.png'); }
 #form_31 ._form_element { position:relative; margin-bottom:10px; font-size:0; max-width:100%; }
 #form_31 ._form_element * { font-size:14px; }
 #form_31 ._form_element._clear { clear:both; width:100%; float:none; }
 #form_31 ._form_element._clear:after { clear:left; }
 #form_31 .form_element input[type="text"],#_form_31 .form_element input[type="date"],#_form_31 .form_element select,#_form_31 ._form_element textarea:not(.g-recaptcha-response) { display:block; width:100%; -webkit-box-sizing:border-box; -moz-box-sizing:border-box; box-sizing:border-box; font-family:inherit; }
 #form_31 ._field-wrapper { position:relative; }
 #form_31 ._inline-style { float:left; }
 #form_31 ._inline-style input[type="text"] { width:150px; }
 #form_31 ._inline-style:not(._clear) + ._inline-style:not(._clear) { margin-left:20px; }
 #form_31 ._form_element img._form-image { max-width:100%; }
 #form_31 ._form_element ._form-fieldset { border:0; padding:0.01em 0 0 0; margin:0; min-width:0; }
 #form_31 ._clear-element { clear:left; }
 #form_31 ._full_width { width:100%; }
 #form_31 ._form_full_field { display:block; width:100%; margin-bottom:10px; }
 #form_31 input[type="text"].has_error,#_form_31 textarea._has_error { border:#f37c7b 1px solid; }
 #form_31 input[type="checkbox"]._has_error { outline:#f37c7b 1px solid; }
 #form_31 ._error { display:block; position:absolute; font-size:14px; z-index:10000001; }
 #form_31 ._error._above { padding-bottom:4px; bottom:39px; right:0; }
 #form_31 ._error._below { padding-top:4px; top:100%; right:0; }
 #form_31 ._error._above ._error-arrow { bottom:0; right:15px; border-left:5px solid transparent; border-right:5px solid transparent; border-top:5px solid #f37c7b; }
 #form_31 ._error._below ._error-arrow { top:0; right:15px; border-left:5px solid transparent; border-right:5px solid transparent; border-bottom:5px solid #f37c7b; }
 #form_31 ._error-inner { padding:8px 12px; background-color:#f37c7b; font-size:14px; font-family:arial, sans-serif; color:#fff; text-align:center; text-decoration:none; -webkit-border-radius:4px; -moz-border-radius:4px; border-radius:4px; }
 #form_31 ._error-inner._form_error { margin-bottom:5px; text-align:left; }
 #form_31 ._button-wrapper ._error-inner._form_error { position:static; }
 #form_31 ._error-inner._no_arrow { margin-bottom:10px; }
 #form_31 ._error-arrow { position:absolute; width:0; height:0; }
 #form_31 ._error-html { margin-bottom:10px; }
 .pika-single { z-index:10000001 !important; }
 #form_31 input[type="text"].datetime_date { width:69%; display:inline; }
 #form_31 select.datetime_time { width:29%; display:inline; height:32px; }
 #form_31 input[type="date"].datetime_date { width:69%; display:inline-flex; }
 #form_31 input[type="time"].datetime_time { width:29%; display:inline-flex; }
 @media all and (min-width:320px) and (max-width:667px) { ::-webkit-scrollbar { display:none; }
 #form_31 { margin:0; width:100%; min-width:100%; max-width:100%; box-sizing:border-box; }
 #form_31 * { -webkit-box-sizing:border-box; -moz-box-sizing:border-box; box-sizing:border-box; font-size:1em; }
 #form_31 ._form-content { margin:0; width:100%; }
 #form_31 ._form-inner { display:block; min-width:100%; }
 #form_31 .form-title,#_form_31 ._inline-style { margin-top:0; margin-right:0; margin-left:0; }
 #form_31 ._form-title { font-size:1.2em; }
 #form_31 ._form_element { margin:0 0 20px; padding:0; width:100%; }
 #form_31 .form-element,#_form_31 .inline-style,#_form_31 input[type="text"],#form_31 label,#form_31 p,#form_31 textarea:not(.g-recaptcha-response) { float:none; display:block; width:100%; }
 #form_31 ._row._checkbox-radio label { display:inline; }
 #form_31 .row,#_form_31 p,#form_31 label { margin-bottom:0.7em; width:100%; }
 #form_31 .row input[type="checkbox"],#_form_31 ._row input[type="radio"] { margin:0 !important; vertical-align:middle !important; }
 #form_31 ._row input[type="checkbox"] + span label { display:inline; }
 #form_31 ._row span label { margin:0 !important; width:initial !important; vertical-align:middle !important; }
 #form_31 ._form-image { max-width:100%; height:auto !important; }
 #form_31 input[type="text"] { padding-left:10px; padding-right:10px; font-size:16px; line-height:1.3em; -webkit-appearance:none; }
 #form_31 input[type="radio"],#form_31 input[type="checkbox"] { display:inline-block; width:1.3em; height:1.3em; font-size:1em; margin:0 0.3em 0 0; vertical-align:baseline; }
 #form_31 button[type="submit"] { padding:20px; font-size:1.5em; }
 #form_31 ._inline-style { margin:20px 0 0 !important; }
 }
 #form_31 { position:relative; text-align:left; margin:25px auto 0; padding:20px; -webkit-box-sizing:border-box; -moz-box-sizing:border-box; box-sizing:border-box; *zoom:1; background:#fff !important; border:0px solid #b0b0b0 !important; max-width:500px; -moz-border-radius:0px !important; -webkit-border-radius:0px !important; border-radius:0px !important; color:#000 !important; }
 #form_31.inline-form,#_form_31.inline-form ._form-content,#_form_31.inline-form input,#_form_31._inline-form ._submit { font-family:"IBM Plex Sans", Helvetica, sans-serif, 'IBM Plex Sans', arial, sans-serif; }
 #form_31 ._form-title { font-size:22px; line-height:22px; font-weight:600; margin-bottom:0; }
 #form_31:before,#form_31:after { content:" "; display:table; }
 #form_31:after { clear:both; }
 #form_31._inline-style { width:auto; display:inline-block; }
 #form_31.inline-style input[type="text"],#_form_31._inline-style input[type="date"] { padding:10px 12px; }
 #form_31._inline-style button._inline-style { position:relative; top:27px; }
 #form_31._inline-style p { margin:0; }
 #form_31._inline-style ._button-wrapper { position:relative; margin:27px 12.5px 0 20px; }
 #form_31 ._form-thank-you { position:relative; left:0; right:0; text-align:center; font-size:18px; }
 @media all and (min-width:320px) and (max-width:667px) { #form_31._inline-form._inline-style ._inline-style._button-wrapper { margin-top:20px !important; margin-left:0 !important; }
 }
</style>
<link href="https://fonts.googleapis.com/css2?family=Lato&family=Montserrat&family=Roboto&display=swap" rel="stylesheet">
  <form method="POST" action="https://brasiladschool.activehosted.com/proc.php" id="form_31" class="_form _form_31 _inline-form  _dark" novalidate>
    <input type="hidden" name="u" value="31" />
    <input type="hidden" name="f" value="31" />
    <input type="hidden" name="s" />
    <input type="hidden" name="c" value="0" />
    <input type="hidden" name="m" value="0" />
    <input type="hidden" name="act" value="sub" />
    <input type="hidden" name="v" value="2" />
    <input type="hidden" name="or" value="27eb4b83ce622f8fde8e8ea3055b667a" />
    <div class="_form-content">
      <div class="_form_element _x72813301 _full_width _clear" >
        <div class="_form-title">
          Quase lá...
        </div>
      </div>
      <div class="_form_element _x30334383 _full_width _clear" >
        <div class="_html-code">
          Preencha os dados para continuar:
        </div>
      </div>
      <div class="_form_element _x80499461 _full_width " >
        <label for="fullname" class="_form-label">
          Nome completo*
        </label>
        <div class="_field-wrapper">
          <input type="text" id="fullname" name="fullname" placeholder="Digite seu nome" required/>
        </div>
        <!--  This STARTS the Custom Objects section  -->
        </div>
        <div class="_form_element _x66995801 _full_width " >
          <label for="email" class="_form-label">
            Email*
          </label>
          <div class="_field-wrapper">
            <input type="text" id="email" name="email" placeholder="Digite seu email" required/>
          </div>
          <!--  This STARTS the Custom Objects section  -->
          </div>
          <div class="_form_element _field8 _full_width " >
            <label for="field[8]" class="_form-label">
              Whatsapp*
            </label>
            <div class="_field-wrapper">
              <input type="text" id="field[8]" name="field[8]" value="" placeholder="Whatsapp com DDD (somente números)" required/>
            </div>
          </div>
          <div class="_button-wrapper _full_width">
            <button id="_form_31_submit" class="_submit" type="submit">
              Continuar →
            </button>
          </div>
          <div class="_clear-element">
          </div>
        </div>
        <div class="_form-thank-you" style="display:none;">
        </div>
      </form><script type="text/javascript">
window.cfields = {"8":"whatsapp"};
window._show_thank_you = function(id, message, trackcmp_url, email) {
  var form = document.getElementById('form' + id + '_'), thank_you = form.querySelector('._form-thank-you');
  form.querySelector('._form-content').style.display = 'none';
  thank_you.innerHTML = message;
  thank_you.style.display = 'block';
  const vgoAlias = typeof visitorGlobalObjectAlias === 'undefined' ? 'vgo' : visitorGlobalObjectAlias;
  var visitorObject = window[vgoAlias];
  if (email && typeof visitorObject !== 'undefined') {
    visitorObject('setEmail', email);
    visitorObject('update');
  } else if (typeof(trackcmp_url) != 'undefined' && trackcmp_url) {
    // Site tracking URL to use after inline form submission.
    _load_script(trackcmp_url);
  }
  if (typeof window._form_callback !== 'undefined') window._form_callback(id);
};
window._show_error = function(id, message, html) {
  var form = document.getElementById('form' + id + '_'), err = document.createElement('div'), button = form.querySelector('button'), old_error = form.querySelector('._form_error');
  if (old_error) old_error.parentNode.removeChild(old_error);
  err.innerHTML = message;
  err.className = '_error-inner _form_error _no_arrow';
  var wrapper = document.createElement('div');
  wrapper.className = '_form-inner';
  wrapper.appendChild(err);
  button.parentNode.insertBefore(wrapper, button);
  document.querySelector('[id^="_form"][id$="_submit"]').disabled = false;
  if (html) {
    var div = document.createElement('div');
    div.className = '_error-html';
    div.innerHTML = html;
    err.appendChild(div);
  }
};
window._load_script = function(url, callback) {
  var head = document.querySelector('head'), script = document.createElement('script'), r = false;
  script.type = 'text/javascript';
  script.charset = 'utf-8';
  script.src = url;
  if (callback) {
    script.onload = script.onreadystatechange = function() {
      if (!r && (!this.readyState || this.readyState == 'complete')) {
        r = true;
        callback();
      }
    };
  }
  head.appendChild(script);
};
(function() {
  if (window.location.search.search("excludeform") !== -1) return false;
  var getCookie = function(name) {
    var match = document.cookie.match(new RegExp('(^|; )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }
  var setCookie = function(name, value) {
    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 1000 * 60 * 60 * 24 * 365;
    now.setTime(expireTime);
    document.cookie = name + '=' + value + '; expires=' + now + ';path=/';
  }
      var addEvent = function(element, event, func) {
    if (element.addEventListener) {
      element.addEventListener(event, func);
    } else {
      var oldFunc = element['on' + event];
      element['on' + event] = function() {
        oldFunc.apply(this, arguments);
        func.apply(this, arguments);
      };
    }
  }
  var _removed = false;
  var form_to_submit = document.getElementById('form_31');
  var allInputs = form_to_submit.querySelectorAll('input, select, textarea'), tooltips = [], submitted = false;

  var getUrlParam = function(name) {
    var params = new URLSearchParams(window.location.search);
    return params.get(name) || false;
  };

  for (var i = 0; i < allInputs.length; i++) {
    var regexStr = "field\\[(\\d+)\\]";
    var results = new RegExp(regexStr).exec(allInputs[i].name);
    if (results != undefined) {
      allInputs[i].dataset.name = window.cfields[results[1]];
    } else {
      allInputs[i].dataset.name = allInputs[i].name;
    }
    var fieldVal = getUrlParam(allInputs[i].dataset.name);

    if (fieldVal) {
      if (allInputs[i].dataset.autofill === "false") {
        continue;
      }
      if (allInputs[i].type == "radio" || allInputs[i].type == "checkbox") {
        if (allInputs[i].value == fieldVal) {
          allInputs[i].checked = true;
        }
      } else {
        allInputs[i].value = fieldVal;
      }
    }
  }

  var remove_tooltips = function() {
    for (var i = 0; i < tooltips.length; i++) {
      tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);
    }
    tooltips = [];
  };
  var remove_tooltip = function(elem) {
    for (var i = 0; i < tooltips.length; i++) {
      if (tooltips[i].elem === elem) {
        tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);
        tooltips.splice(i, 1);
        return;
      }
    }
  };
  var create_tooltip = function(elem, text) {
    var tooltip = document.createElement('div'), arrow = document.createElement('div'), inner = document.createElement('div'), new_tooltip = {};
    if (elem.type != 'radio' && elem.type != 'checkbox') {
      tooltip.className = '_error';
      arrow.className = '_error-arrow';
      inner.className = '_error-inner';
      inner.innerHTML = text;
      tooltip.appendChild(arrow);
      tooltip.appendChild(inner);
      elem.parentNode.appendChild(tooltip);
    } else {
      tooltip.className = '_error-inner _no_arrow';
      tooltip.innerHTML = text;
      elem.parentNode.insertBefore(tooltip, elem);
      new_tooltip.no_arrow = true;
    }
    new_tooltip.tip = tooltip;
    new_tooltip.elem = elem;
    tooltips.push(new_tooltip);
    return new_tooltip;
  };
  var resize_tooltip = function(tooltip) {
    var rect = tooltip.elem.getBoundingClientRect();
    var doc = document.documentElement, scrollPosition = rect.top - ((window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0));
    if (scrollPosition < 40) {
      tooltip.tip.className = tooltip.tip.className.replace(/ ?(_above|_below) ?/g, '') + ' _below';
    } else {
      tooltip.tip.className = tooltip.tip.className.replace(/ ?(_above|_below) ?/g, '') + ' _above';
    }
  };
  var resize_tooltips = function() {
    if (_removed) return;
    for (var i = 0; i < tooltips.length; i++) {
      if (!tooltips[i].no_arrow) resize_tooltip(tooltips[i]);
    }
  };
  var validate_field = function(elem, remove) {
    var tooltip = null, value = elem.value, no_error = true;
    remove ? remove_tooltip(elem) : false;
    if (elem.type != 'checkbox') elem.className = elem.className.replace(/ ?_has_error ?/g, '');
    if (elem.getAttribute('required') !== null) {
      if (elem.type == 'radio' || (elem.type == 'checkbox' && /any/.test(elem.className))) {
        var elems = form_to_submit.elements[elem.name];
        if (!(elems instanceof NodeList || elems instanceof HTMLCollection) || elems.length <= 1) {
          no_error = elem.checked;
        }
        else {
          no_error = false;
          for (var i = 0; i < elems.length; i++) {
            if (elems[i].checked) no_error = true;
          }
        }
        if (!no_error) {
          tooltip = create_tooltip(elem, "Por favor, selecione uma opção.");
        }
      } else if (elem.type =='checkbox') {
        var elems = form_to_submit.elements[elem.name], found = false, err = [];
        no_error = true;
        for (var i = 0; i < elems.length; i++) {
          if (elems[i].getAttribute('required') === null) continue;
          if (!found && elems[i] !== elem) return true;
          found = true;
          elems[i].className = elems[i].className.replace(/ ?_has_error ?/g, '');
          if (!elems[i].checked) {
            no_error = false;
            elems[i].className = elems[i].className + ' _has_error';
            err.push("Marcar %s é necessário".replace("%s", elems[i].value));
          }
        }
        if (!no_error) {
          tooltip = create_tooltip(elem, err.join('<br/>'));
        }
      } else if (elem.tagName == 'SELECT') {
        var selected = true;
        if (elem.multiple) {
          selected = false;
          for (var i = 0; i < elem.options.length; i++) {
            if (elem.options[i].selected) {
              selected = true;
              break;
            }
          }
        } else {
          for (var i = 0; i < elem.options.length; i++) {
            if (elem.options[i].selected && (!elem.options[i].value || (elem.options[i].value.match(/\n/g)))) {
              selected = false;
            }
          }
        }
        if (!selected) {
          elem.className = elem.className + ' _has_error';
          no_error = false;
          tooltip = create_tooltip(elem, "Por favor, selecione uma opção.");
        }
      } else if (value === undefined || value === null || value === '') {
        elem.className = elem.className + ' _has_error';
        no_error = false;
        tooltip = create_tooltip(elem, "Este campo é necessário.");
      }
    }
    if (no_error && elem.name == 'email') {
      if (!value.match(/^[\+_a-z0-9-'&=]+(\.[\+_a-z0-9-']+)@[a-z0-9-]+(\.[a-z0-9-]+)(\.[a-z]{2,})$/i)) {
        elem.className = elem.className + ' _has_error';
        no_error = false;
        tooltip = create_tooltip(elem, "Digite um e-mail válido");
      }
    }
    if (no_error && /date_field/.test(elem.className)) {
      if (!value.match(/^\d\d\d\d-\d\d-\d\d$/)) {
        elem.className = elem.className + ' _has_error';
        no_error = false;
        tooltip = create_tooltip(elem, "Digite uma data válida.");
      }
    }
    tooltip ? resize_tooltip(tooltip) : false;
    return no_error;
  };
  var needs_validate = function(el) {
        if(el.getAttribute('required') !== null){
            return true
        }
        if(el.name === 'email' && el.value !== ""){
            return true
        }
        return false
  };
  var validate_form = function(e) {
    var err = form_to_submit.querySelector('._form_error'), no_error = true;
    if (!submitted) {
      submitted = true;
      for (var i = 0, len = allInputs.length; i < len; i++) {
        var input = allInputs[i];
        if (needs_validate(input)) {
          if (input.type == 'text' || input.type == 'number' || input.type == 'time') {
            addEvent(input, 'blur', function() {
              this.value = this.value.trim();
              validate_field(this, true);
            });
            addEvent(input, 'input', function() {
              validate_field(this, true);
            });
          } else if (input.type == 'radio' || input.type == 'checkbox') {
            (function(el) {
              var radios = form_to_submit.elements[el.name];
              for (var i = 0; i < radios.length; i++) {
                addEvent(radios[i], 'click', function() {
                  validate_field(el, true);
                });
              }
            })(input);
          } else if (input.tagName == 'SELECT') {
            addEvent(input, 'change', function() {
              validate_field(this, true);
            });
          } else if (input.type == 'textarea'){
            addEvent(input, 'input', function() {
              validate_field(this, true);
            });
          }
        }
      }
    }
    remove_tooltips();
    for (var i = 0, len = allInputs.length; i < len; i++) {
      var elem = allInputs[i];
      if (needs_validate(elem)) {
        if (elem.tagName.toLowerCase() !== "select") {
          elem.value = elem.value.trim();
        }
        validate_field(elem) ? true : no_error = false;
      }
    }
    if (!no_error && e) {
      e.preventDefault();
    }
    resize_tooltips();
    return no_error;
  };
  addEvent(window, 'resize', resize_tooltips);
  addEvent(window, 'scroll', resize_tooltips);
    var _form_serialize = function(form){if(!form||form.nodeName!=="FORM"){return }var i,j,q=[];for(i=0;i<form.elements.length;i++){if(form.elements[i].name===""){continue}switch(form.elements[i].nodeName){case"INPUT":switch(form.elements[i].type){case"text":case"number":case"date":case"time":case"hidden":case"password":case"button":case"reset":case"submit":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"checkbox":case"radio":if(form.elements[i].checked){q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value))}break;case"file":break}break;case"TEXTAREA":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"SELECT":switch(form.elements[i].type){case"select-one":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"select-multiple":for(j=0;j<form.elements[i].options.length;j++){if(form.elements[i].options[j].selected){q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].options[j].value))}}break}break;case"BUTTON":switch(form.elements[i].type){case"reset":case"submit":case"button":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break}break}}return q.join("&")};
  var form_submit = function(e) {
    e.preventDefault();
    if (validate_form()) {
      // use this trick to get the submit button & disable it using plain javascript
      document.querySelector('#_form_31_submit').disabled = true;
            var serialized = form_serialize(document.getElementById('_form_31')).replace(/%0A/g, '\\n');
      var err = form_to_submit.querySelector('._form_error');
      err ? err.parentNode.removeChild(err) : false;
      _load_script('https://brasiladschool.activehosted.com/proc.php?' + serialized + '&jsonp=true');
    }
    return false;
  };
  addEvent(form_to_submit, 'submit', form_submit);
})();

</script>`,
            }}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
