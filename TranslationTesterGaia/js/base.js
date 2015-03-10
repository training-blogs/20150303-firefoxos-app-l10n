"use strict";
// Reload content
var reload = document.querySelector("#reload");
if (reload) {
    reload.onclick = function () {
        location.reload(true);
    };
}

var elem = document.getElementById('myelement');
elem.setAttribute('data-l10n-id', 'label-myelement');
elem.setAttribute('data-l10n-args', JSON.stringify({'myelementarg': 'ARG1'}));

var elem2 = document.getElementById('myelement2');
navigator.mozL10n.setAttributes(elem2, 'label-myelement', {'myelementarg': 'ARG2'});

var l10nAttrs = navigator.mozL10n.getAttributes(elem);
console.log(l10nAttrs);

var elem3 = document.getElementById('myelement3');
elem3.removeAttribute('data-l10n-id');
elem3.textContent = '-emptied myelement3-';

var button1 = document.querySelector("#button1");
button1.setAttribute('data-l10n-id', 'button1');

navigator.mozL10n.once(function() {
    console.log(navigator.mozL10n.get('welcome',  {user: 'Martin'}));

    button1.style.display = 'block';

    console.log(navigator.mozL10n.language.code);
    console.log(navigator.mozL10n.language.direction);
});
