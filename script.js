.transition,
a,
button {
  transition: all 0.4s ease;
}
@font-face {
  font-family: "Pro Font Windows";
  src: url(../fonts/ProFontWindows-webfont.woff) format("woff"),
    url(../fonts/ProFontWindows-webfont.ttf) format("truetype");
  font-weight: normal;
  font-style: normal;
} /*!
* Bootstrap v4.4.1 (https://getbootstrap.com/)
* Copyright 2011-2019 The Bootstrap Authors
* Copyright 2011-2019 Twitter, Inc.
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*/
:root {
  --blue: #007bff;
  --indigo: #6610f2;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --red: #dc3545;
  --orange: #fd7e14;
  --yellow: #ffc107;
  --green: #28a745;
  --teal: #20c997;
  --cyan: #17a2b8;
  --white: #fff;
  --gray: #6c757d;
  --gray-dark: #343a40;
  --primary: #aafffc;
  --secondary: #2bede6;
  --success: #4fe38b;
  --info: #2bede6;
  --warning: #fa921d;
  --danger: #ed3737;
  --light: #fff;
  --dark: #000;
  --highlight: #2bede6;
  --black: #000;
  --white: #fff;
  --phosphor-amber: #ffb000;
  --phosphor-green: #3f0;
  --phosphor-purple: #c800c8;
  --phosphor-grey: #282828;
  --disabled: #aaa;
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1310px;
  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

footer,
header {
  display: block;
}
body {
  margin: 0;
  font-family: "Titillium Web", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #aafffc;
  text-align: left;
  background-color: #000;
}

h2,
h3,
h4 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}
p {
  margin-top: 0;
  margin-bottom: 0;
}
a {
  color: #aafffc;
  text-decoration: none;
  background-color: transparent;
}
a:hover {
  color: #5efff9;
  text-decoration: underline;
}
a:not([href]) {
  color: inherit;
  text-decoration: none;
}
a:not([href]):hover {
  color: inherit;
  text-decoration: none;
}
img {
  vertical-align: middle;
  border-style: none;
}
button {
  border-radius: 0;
}
button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}
input,
button,
select {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
select {
  word-wrap: normal;
}
button,
[type="button"] {
  -webkit-appearance: button;
}
button:not(:disabled),
[type="button"]:not(:disabled) {
  cursor: pointer;
}
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner {
  padding: 0;
  border-style: none;
}
[type="search"] {
  outline-offset: -2px;
  -webkit-appearance: none;
}
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}
[hidden] {
  display: none !important;
}

h2,
h3,
h4,
.h2,
.h3,
.h4 {
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}
h2,
.h2 {
  font-size: 2rem;
}
h3,
.h3 {
  font-size: 1.75rem;
}
h4,
.h4 {
  font-size: 1.5rem;
}
.img-fluid {
  max-width: 100%;
  height: auto;
}
.container {
  width: 100%;
  padding-right: 2px;
  padding-left: 2px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
@media (min-width: 1310px) {
  .container {
    max-width: 1280px;
  }
}
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
@media (min-width: 1310px) {
  .container {
    max-width: 1280px;
  }
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.col-6,
.col-12,
.col,
.col-md-1,
.col-md-8,
.col-md-10,
.col-md {
  position: relative;
  width: 100%;
  padding-right: 2px;
  padding-left: 2px;
}
.col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}
.col-6 {
  flex: 0 0 50%;
  max-width: 50%;
}
.col-12 {
  flex: 0 0 100%;
  max-width: 100%;
}
@media (min-width: 768px) {
  .col-md {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .col-md-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%;
  }
  .col-md-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
  .col-md-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
  }
  .order-md-1 {
    order: 1;
  }
  .order-md-2 {
    order: 2;
  }
  .order-md-3 {
    order: 3;
  }
}
.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control {
    transition: none;
  }
}
.form-control::-ms-expand {
  background-color: transparent;
  border: 0;
}
.form-control:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #495057;
}
.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #fff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(170, 255, 252, 0.25);
}
.form-control::placeholder {
  color: #6c757d;
  opacity: 1;
}
.form-control:disabled {
  background-color: non;
  opacity: 1;
}
select.form-control:focus::-ms-value {
  color: #495057;
  background-color: #fff;
}

select.form-control[multiple] {
  height: auto;
}
.btn {
  display: inline-block;
  font-weight: 400;
  color: #aafffc;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}
.btn:hover {
  color: #aafffc;
  text-decoration: none;
}
.btn:focus,
.btn.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(170, 255, 252, 0.25);
}

.btn:disabled {
  opacity: 0.65;
}
.btn-primary {
  color: #212529;
  background-color: #aafffc;
  border-color: #aafffc;
}
.btn-primary:hover {
  color: #212529;
  background-color: #84fffb;
  border-color: #77fffa;
}
.btn-primary:focus,
.btn-primary.focus {
  color: #212529;
  background-color: #84fffb;
  border-color: #77fffa;
  box-shadow: 0 0 0 0.2rem rgba(149, 222, 220, 0.5);
}

.btn-primary:disabled {
  color: #212529;
  background-color: #aafffc;
  border-color: #aafffc;
}
.btn-primary:not(:disabled):not(.disabled):active,
.btn-primary:not(:disabled):not(.disabled).active {
  color: #212529;
  background-color: #77fffa;
  border-color: #6afffa;
}
.btn-primary:not(:disabled):not(.disabled):active:focus,
.btn-primary:not(:disabled):not(.disabled).active:focus {
  box-shadow: 0 0 0 0.2rem rgba(149, 222, 220, 0.5);
}
.btn-success {
  color: #212529;
  background-color: #4fe38b;
  border-color: #4fe38b;
}
.btn-success:hover {
  color: #212529;
  background-color: #2ede75;
  border-color: #23dc6e;
}
.btn-success:focus,
.btn-success.focus {
  color: #212529;
  background-color: #2ede75;
  border-color: #23dc6e;
  box-shadow: 0 0 0 0.2rem rgba(72, 199, 124, 0.5);
}

.btn-success:disabled {
  color: #212529;
  background-color: #4fe38b;
  border-color: #4fe38b;
}
.btn-success:not(:disabled):not(.disabled):active,
.btn-success:not(:disabled):not(.disabled).active {
  color: #212529;
  background-color: #23dc6e;
  border-color: #21d169;
}
.btn-success:not(:disabled):not(.disabled):active:focus,
.btn-success:not(:disabled):not(.disabled).active:focus {
  box-shadow: 0 0 0 0.2rem rgba(72, 199, 124, 0.5);
}
.btn-danger {
  color: #fff;
  background-color: #ed3737;
  border-color: #ed3737;
}
.btn-danger:hover {
  color: #fff;
  background-color: #e91515;
  border-color: #dd1414;
}
.btn-danger:focus,
.btn-danger.focus {
  color: #fff;
  background-color: #e91515;
  border-color: #dd1414;
  box-shadow: 0 0 0 0.2rem rgba(240, 85, 85, 0.5);
}

.btn-danger:disabled {
  color: #fff;
  background-color: #ed3737;
  border-color: #ed3737;
}
.btn-danger:not(:disabled):not(.disabled):active,
.btn-danger:not(:disabled):not(.disabled).active {
  color: #fff;
  background-color: #dd1414;
  border-color: #d11313;
}
.btn-danger:not(:disabled):not(.disabled):active:focus,
.btn-danger:not(:disabled):not(.disabled).active:focus {
  box-shadow: 0 0 0 0.2rem rgba(240, 85, 85, 0.5);
}
.btn-highlight {
  color: #212529;
  background-color: #2bede6;
  border-color: #2bede6;
}
.btn-highlight:hover {
  color: #212529;
  background-color: #13dfd7;
  border-color: #12d3cc;
}
.btn-highlight:focus,
.btn-highlight.focus {
  color: #212529;
  background-color: #13dfd7;
  border-color: #12d3cc;
  box-shadow: 0 0 0 0.2rem rgba(42, 207, 202, 0.5);
}

.btn-highlight:disabled {
  color: #212529;
  background-color: #2bede6;
  border-color: #2bede6;
}
.btn-highlight:not(:disabled):not(.disabled):active,
.btn-highlight:not(:disabled):not(.disabled).active {
  color: #212529;
  background-color: #12d3cc;
  border-color: #11c7c1;
}
.btn-highlight:not(:disabled):not(.disabled):active:focus,
.btn-highlight:not(:disabled):not(.disabled).active:focus {
  box-shadow: 0 0 0 0.2rem rgba(42, 207, 202, 0.5);
}
.collapse:not(.show) {
  display: none;
}

.dropdown {
  position: relative;
}
.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}
.input-group > .form-control {
  position: relative;
  flex: 1 1 0%;
  min-width: 0;
  margin-bottom: 0;
}
.input-group > .form-control + .form-control {
  margin-left: -1px;
}
.input-group > .form-control:focus {
  z-index: 3;
}
.input-group > .form-control:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group > .form-control:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.input-group-append {
  display: flex;
}

.input-group-append .btn {
  position: relative;
  z-index: 2;
}

.input-group-append .btn:focus {
  z-index: 3;
}

.input-group-append .btn + .btn {
  margin-left: -1px;
}
.input-group-append {
  margin-left: -1px;
}

.input-group > .input-group-append:not(:last-child) > .btn,
.input-group
  > .input-group-append:last-child
  > .btn:not(:last-child):not(.dropdown-toggle) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group > .input-group-append > .btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
}
.pagination {
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: 0.25rem;
}
.badge {
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .badge {
    transition: none;
  }
}
a.badge:hover,
a.badge:focus {
  text-decoration: none;
}
.badge:empty {
  display: none;
}
.btn .badge {
  position: relative;
  top: -1px;
}
.badge-success {
  color: #212529;
  background-color: #4fe38b;
}
a.badge-success:hover,
a.badge-success:focus {
  color: #212529;
  background-color: #23dc6e;
}
a.badge-success:focus,
a.badge-success.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(79, 227, 139, 0.5);
}
.jumbotron-fluid {
    padding-right: 0;
    padding-left: 0;
    border-radius: 0;
}
.jumbotron {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #e9ecef;
  border-radius: 0.3rem;
}
/*@media (min-width: 576px) {
  .jumbotron {
    padding: 4rem 2rem;
  }
}*/
.alert {
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}
@keyframes progress-bar-stripes {
  from {
    background-position: 1rem 0;
  }
  to {
    background-position: 0 0;
  }
}
.media {
  display: flex;
  align-items: flex-start;
}
.close {
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
}
.close:hover {
  color: #000;
  text-decoration: none;
}
.close:not(:disabled):not(.disabled):hover,
.close:not(:disabled):not(.disabled):focus {
  opacity: 0.75;
}
button.close {
  padding: 0;
  background-color: transparent;
  border: 0;
  appearance: none;
}
.modal-open {
  overflow: hidden;
}
.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  display: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;
}
.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
}
@keyframes spinner-border {
  to {
    transform: rotate(360deg);
  }
}
@keyframes spinner-grow {
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
  }
}
.border {
  border: 1px solid #dee2e6 !important;
}
.flex-wrap {
  flex-wrap: wrap !important;
}
.mb-3 {
  margin-bottom: 1rem !important;
}
.mt-5 {
  margin-top: 1rem !important;
}
.text-center {
  text-align: center !important;
}
@media print {
  *,
  *::before,
  *::after {
    text-shadow: none !important;
    box-shadow: none !important;
  }
  a:not(.btn) {
    text-decoration: underline;
  }
  
  img {
    page-break-inside: avoid;
  }
  p,
  h2,
  h3 {
    orphans: 3;
    widows: 3;
  }
  h2,
  h3 {
    page-break-after: avoid;
  }
  @page {
    size: a3;
  }
  body {
    min-width: 992px !important;
  }
  .container {
    min-width: 992px !important;
  }
  .badge {
    border: 1px solid #000;
  }
}
@keyframes bs-notify-fadeOut {
  0% {
    opacity: 0.9;
  }
  100% {
    opacity: 0;
  }
}
html,
body {
  background: url(../images/background.jpg);
  background-attachment: fixed;
  background-size: cover;
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
/** text-shadow: 0px 0px 5px rgba(43, 237, 230, 0.3); **/
  overflow-x: hidden;
  overflow-wrap: break-word;
  word-wrap: break-word;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  hyphens: auto;
}
.container {
  width: calc(100% - 30px);
}
.headline3 {
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 700;
}

header {
  font-size: 14px;
  line-height: 21px;
}

a:active,
a:hover,
a:focus {
  color: #2bede6;
}

a:active {
  font-weight: 700;
}
.alert {
  border-radius: 0;
  border-width: 1px 0;
  text-align: center;
  background: repeating-linear-gradient(
      0deg,
      rgba(170, 255, 252, 0) 0px,
      rgba(170, 255, 252, 0) 2px,
      rgba(170, 255, 252, 0.1) 2px,
      rgba(170, 255, 252, 0.1) 4px
    ),
    linear-gradient(
      to bottom,
      rgba(170, 255, 252, 0.05) 0%,
      rgba(170, 255, 252, 0.1) 100%
    );
  border-color: #aafffc;
  color: #aafffc;
}
.alert .close:not(:disabled):hover,
.alert .close:not(:disabled):focus {
  color: #aafffc;
}
.alert .close:not(:disabled) {
  text-shadow: none;
}
.alert .close:not(:disabled):hover,
.alert .close:not(:disabled):focus {
  opacity: 1;
}
.badge.badge-success {
  background-color: rgba(79, 227, 139, 0.9);
  box-shadow: 0px 0px 4px 3px rgba(79, 227, 139, 0.3);
}
.btn {
  margin-bottom: 1rem;
  padding: 0.5rem 3rem;
  text-transform: uppercase;
  vertical-align: baseline;
}
.btn[class*="btn-"]:disabled {
  background: linear-gradient(
    to bottom,
    rgba(170, 170, 170, 0.05) 0%,
    rgba(170, 170, 170, 0.1) 100%
  );
  border-color: #aaa;
  color: #aaa;
}
.btn[class*="btn-"]:disabled:hover,
.btn[class*="btn-"]:disabled:active,
.btn[class*="btn-"]:disabled:focus {
  background: linear-gradient(
    to bottom,
    rgba(170, 170, 170, 0.05) 0%,
    rgba(170, 170, 170, 0.1) 100%
  );
}
.btn.btn-primary {
  background: linear-gradient(
    to bottom,
    rgba(170, 255, 252, 0.05) 0%,
    rgba(170, 255, 252, 0.1) 100%
  );
  border-color: #aafffc;
  color: #aafffc;
}
.btn.btn-primary:hover,
.btn.btn-primary:active,
.btn.btn-primary:focus {
  background: linear-gradient(
    to bottom,
    rgba(170, 255, 252, 0.1) 0%,
    rgba(170, 255, 252, 0.2) 100%
  );
}
.btn.btn-highlight {
  background: linear-gradient(
    to bottom,
    rgba(43, 237, 230, 0.05) 0%,
    rgba(43, 237, 230, 0.1) 100%
  );
  border-color: #2bede6;
  color: #2bede6;
}
.btn.btn-highlight:hover,
.btn.btn-highlight:active,
.btn.btn-highlight:focus {
  background: linear-gradient(
    to bottom,
    rgba(43, 237, 230, 0.1) 0%,
    rgba(43, 237, 230, 0.2) 100%
  );
}
.btn.btn-success {
  background: linear-gradient(
    to bottom,
    rgba(79, 227, 139, 0.05) 0%,
    rgba(79, 227, 139, 0.1) 100%
  );
  border-color: #4fe38b;
  color: #4fe38b;
}
.btn.btn-success:hover,
.btn.btn-success:active,
.btn.btn-success:focus {
  background: linear-gradient(
    to bottom,
    rgba(79, 227, 139, 0.1) 0%,
    rgba(79, 227, 139, 0.2) 100%
  );
}
.btn.btn-danger {
  background: linear-gradient(
    to bottom,
    rgba(237, 55, 55, 0.05) 0%,
    rgba(237, 55, 55, 0.1) 100%
  );
  border-color: #ed3737;
  color: #ed3737;
}
.btn.btn-danger:hover,
.btn.btn-danger:active,
.btn.btn-danger:focus {
  background: linear-gradient(
    to bottom,
    rgba(237, 55, 55, 0.1) 0%,
    rgba(237, 55, 55, 0.2) 100%
  );
}
.card {
  background: linear-gradient(
    to bottom,
    rgba(43, 237, 230, 0.02) 0%,
    rgba(43, 237, 230, 0.09) 100%
  );
  border: 0px solid rgba(43, 237, 230, 0.2);
  border-radius: 0;
  border-width: 1px 0;
  margin-bottom: 1rem;
}
.card.solid {
  background: rgba(43, 237, 230, 0.1);
  border-color: rgba(43, 237, 230, 0.28);
}
.form-control {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.2) 100%
  );
  border: 1px solid rgba(43, 237, 230, 0.7);
  color: #aafffc;
  padding: 0.5rem 1rem;
}
.form-control:focus {
  background: linear-gradient(
    to bottom,
    rgba(43, 237, 230, 0.1) 0%,
    rgba(43, 237, 230, 0.2) 100%
  );
  border: 1px solid #2bede6;
  box-shadow: none;
  color: #aafffc;
}
.form-control::placeholder {
  color: rgba(170, 255, 252, 0.28);
}
.input-group {
  margin-bottom: 1rem;
}
.input-group .form-control {
  height: 100%;
}

.input-group .form-control:disabled {
  background: linear-gradient(
    to bottom,
    rgba(170, 170, 170, 0.05) 0%,
    rgba(170, 170, 170, 0.1) 100%
  );
}

.dropdown .btn.btn-primary {
  border: 1px solid rgba(170, 255, 252, 0.7);
  color: #aafffc;
}

.dropdown .btn.btn-primary:focus,
.dropdown .btn.btn-primary:hover,
.dropdown .btn.btn-primary:active {
  background: linear-gradient(
    to bottom,
    rgba(170, 255, 252, 0.1) 0%,
    rgba(170, 255, 252, 0.2) 100%
  );
  border: 1px solid #aafffc;
  color: #aafffc;
}

.dropdown .btn.btn-highlight {
  border: 1px solid r