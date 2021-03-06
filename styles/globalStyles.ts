import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle(
  ({ theme: { breakpoints, font } }) => `

  /* CSS RESET */
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }

  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after, q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

/* GLOBAL STYLES */
*,
*:before,
*:after {
  box-sizing: border-box;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  font-family: 'Maven Pro', sans-serif;
  
}

*::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color:#777;

}
*::-webkit-scrollbar {
  width: 6px;
  height: 6px;
	background-color: var(--color-primary);
}
*::-webkit-scrollbar-thumb{
  border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: var(--color-primary);
  transition: background 150ms ease;
}
*::-webkit-scrollbar-thumb:hover{
 
	background-color:  var(--color-primary);
}
body {
  height: -webkit-fill-available;

  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  background-color:var(--color-background);
  color:var(--color-text);
  transition:background-color 200ms ease;
  
}
img {
  max-width: 100%;
  display: block;
  font-size:0.7rem;
}
a {
  text-decoration:none;
  color:inherit;
}

input,
button,
textarea,
select {
  font: inherit;
  background: none;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
              
  border:none;
}
h1, h2, h3, h4, h5, h6, strong {
  font-weight: ${font.bold};
}


button {
  cursor: pointer;
  white-space:nowrap;
}
ul {
  list-style-type:none;
}  




/* CUSTOM STYLES   */


/* REACT TEL INPUT   */
.react-tel-input .form-control {
  background: var(--color-subtle-background) !important;
  border:var(--color-border) !important;
  color:var(--color-text) !important;
}
.react-tel-input .flag-dropdown {
  border:var(--color-border) !important;
  background:var(--color-subtle-background) !important;
}
.react-tel-input .country {
 
  background:var(--color-subtle-background) !important;

}

/* REACH CUSTOM STYLES   */

[data-reach-menu-button] {
  padding:0;
  display:flex;
  justify-content:center;
  button {
    width:100%;
  }
}
[data-reach-menu-items] {
  border-radius:6px;
  display:flex;
  flex-direction:column;
  padding:0;
}
[data-reach-menu-popover] {
 background:var(--color-subtle-floating);
 border-radius:6px;
 border:var(--color-border);
 z-index:9998;
}
[data-reach-menu-button]{
  color:var(--color-text);
}
[data-reach-menu-item]{
  padding: 0.5rem;
  text-align:center;
  color:var(--color-text);
  font-size:1rem;
}
[data-reach-menu-item][data-selected] {
   background:var(--color-background);
   border-radius:6px; color:var(--color-text);
}
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-down[data-reach-menu-popover],
.slide-down[data-reach-menu-items] {
  border-radius: 5px;
  animation: slide-down 0.2s ease;
}
[data-reach-dialog-overlay] {
  position:fixed;
  inset:0;
  z-index:9000;
  background-color:rgba(0,0,0,0.6);
}
[data-reach-dialog-content] {
  /* React-select menu portal z-index is higher */
  z-index:9000;
  border-radius: 6px;
  margin:1rem auto;
  overflow-y:auto;
  max-height:calc(100vh - 50px);
}
[data-reach-accordion-button] {
  color:inherit;
}
[data-reach-custom-checkbox-container] {
  margin-right:0;
}


/* DATEPICKER */

.react-datepicker__input-container input {
  padding:0.4rem;
  background-color:var(--color-subtle-background);
  color:var(--color-primary);
  font-size:0.9rem;
  text-align:center;
  border-radius:6px;
}
.react-datepicker__day {
  padding:0.5rem;
  &:hover {
   
    background-color:var(--color-subtle-background) !important;
  }
 
}
.react-datepicker__portal .react-datepicker__current-month, .react-datepicker__portal .react-datepicker-time__header , .react-datepicker__header,.react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
  color:var(--color-text) !important;
}
.react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range, .react-datepicker__month-text--selected, .react-datepicker__month-text--in-selecting-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--selected, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--selected, .react-datepicker__year-text--in-selecting-range, .react-datepicker__year-text--in-range {
  color: #fff !important;
}
.react-datepicker__header {
  background-color : var(--color-subtle-background) !important;
  
}
.react-datepicker__month-container {
  background-color:var(--color-subtle-floating);
  color:var(--color-text) !important;
}
.react-datepicker__navigation {
  height:50px !important;
  width:50px;
}



/* RECHARTS */
.recharts-text {
  fill:var(--color-text);
}
.recharts-cartesian-axis-tick-value tspan {
  top:2px;
}




/*  RC COLLAPSE */
.rc-collapse {
  border:none;
  background-color:inherit;
  border-radius:0;
}
.rc-collapse > .rc-collapse-item > .rc-collapse-header {
  padding:0;
  display:block;
}
.rc-collapse-content {
  background-color:inherit;
  color:inherit;
}
.rc-collapse-item:last-child > .rc-collapse-content {
  border-radius:0;
  
}
.rc-collapse-content > .rc-collapse-content-box  {
  background-color:inherit;
  color:inherit;
  margin:0;
  padding: 0 16px;
 
}


`
);

export default GlobalStyle;
