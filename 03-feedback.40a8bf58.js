!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,y=function(){return d.Date.now()};function p(e,t,n){var o,i,a,u,c,f,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=o,r=i;return o=i=void 0,l=t,u=e.apply(r,n)}function S(e){return l=e,c=setTimeout(w,t),s?p(e):u}function j(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-l>=a}function w(){var e=y();if(j(e))return T(e);c=setTimeout(w,function(e){var n=t-(e-f);return d?g(n,a-(e-l)):n}(e))}function T(e){return c=void 0,v&&o?p(e):(o=i=void 0,u)}function O(){var e=y(),n=j(e);if(o=arguments,i=this,f=e,n){if(void 0===c)return S(f);if(d)return c=setTimeout(w,t),p(f)}return void 0===c&&(c=setTimeout(w,t)),u}return t=h(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(h(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==c&&clearTimeout(c),l=0,o=f=i=c=void 0},O.flush=function(){return void 0===c?u:T(y())},O}function b(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||c.test(t)?f(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};var S="feedback-form-state",j=document.querySelector(".feedback-form"),w=document.querySelector('[name="email"]'),T=document.querySelector('[name="message"]'),O=function(){var e={email:w.value,message:T.value};!function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}}(S,e)};window.addEventListener("load",(function(){try{var e=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}(S);void 0!==e&&console.log("Data from storage:\n  email: ".concat(e.email,"\n  msg: ").concat(e.message)),w.value=e.email,T.value=e.message}catch(e){console.log("There is no saved data in local storage")}})),j.addEventListener("input",e(t)((function(e){O()}),500)),j.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem(S);var t={email:w.value,message:T.value};console.log(t),e.currentTarget.reset()}))}();
//# sourceMappingURL=03-feedback.40a8bf58.js.map