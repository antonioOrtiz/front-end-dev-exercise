const css = require('../scss/styles.scss');

    var ValidationChecker = (function validationHndlr() {
        'use strict';
        var doc = document;
        var form;
        var emailRegExp;
        var formElements;

        emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        form = doc.getElementsByTagName('form')[0];
        formElements = form.elements;

        function addMultipleListeners(element, events, handler, useCapture, args) {
            if (!(events instanceof Array)) {
                throw 'addMultipleListeners: ' +
                    'please supply an array of eventstrings ' +
                    '(like ["click","mouseover"])';
            }
            //create a wrapper to be able to use additional arguments
            var handlerFn = function(e) {
                handler.apply(this, args && args instanceof Array ? args : []);
            }
            for (var i = 0; i < events.length - 1; i += 1) {
                element.addEventListener(events[i], handlerFn, useCapture);
            }
        }

        for (let i = 0, l = formElements.length; i < l; i++) {
            var elId = doc.getElementById(formElements[i].id);

            addMultipleListeners(elId, ['focus', 'blur', 'keyup'], function(e) {
          
                if ((formElements[i].value == '') || (formElements[i].value == null) || ((formElements[i].type == 'email') != emailRegExp) ) {
                    formElements[i].classList.add('invalid-input');

                    formElements[i].nextElementSibling.style.display = 'block';
                    formElements[i].nextElementSibling.innerHTML = 'Not valid!';
                } 

            }, false);

            elId.addEventListener('keyup', function(e) {
                console.log('keyup working?');

                if ((formElements[i].value != '') && (formElements[i].value.length > 2)) {
                    formElements[i].classList.remove('invalid-input');
                    if (formElements[i].nextElementSibling.type !== 'submit') {
                      formElements[i].nextElementSibling.style.display = 'none'
                    }
                }
            }, false);
        }
    })();
