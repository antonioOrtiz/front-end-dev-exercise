!function(e){function t(l){if(n[l])return n[l].exports;var i=n[l]={i:l,l:!1,exports:{}};return e[l].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:l})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,n){function l(e){var t=!1,n=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return""===r.value.trim()&&(r.classList.add("invalid-input"),r.nextElementSibling.style.display="block",r.nextElementSibling.innerHTML="Not valid!",t=!0),""===s.value.trim()&&(s.classList.add("invalid-input"),s.nextElementSibling.style.display="block",s.nextElementSibling.innerHTML="Not valid!",t=!0),n.test(u.value.trim())||(u.classList.add("invalid-input"),u.nextElementSibling.style.display="block",u.nextElementSibling.innerHTML="Please enter valid email address!",t=!0),"selectstate"===c.value&&(c.classList.add("invalid-input"),c.nextElementSibling.style.display="block",c.nextElementSibling.innerHTML="Not valid!",t=!0),!t||(e.preventDefault(),e.stopPropagation(),i("There is at least one empty field in the form: "),!1)}function i(e){console.clear(),console.log(e);for(var t in a)console.log(t+" : "+a[t]),localStorage.setItem(t,a[t])}n(1);var a={firstName:null,lastName:null,email:null,stateInput:null},o=document.querySelector("form"),r=document.getElementById("firstNameInput"),s=document.getElementById("lastNameInput"),u=document.getElementById("emailInput"),c=document.getElementById("stateInput");o.addEventListener("submit",function(e){l(e)&&(a.firstName=r.value,a.lastName=s.value,a.email=u.value,a.stateInput=c.value,i("There is now data from the form: :) "))},!1)},function(e,t){},function(e,t,n){e.exports=n(0)}]);