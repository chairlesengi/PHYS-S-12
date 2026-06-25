var config = {
  student_name: "Charles Jaffe", // ie. John Doe
  student_year_sem: "2026, Summer", // ie. Fall 2025
  student_email: "cwjaffe@gmail.com", // ie. jdoe@college.harvard.edu

  background_color: "#dedede",
  text_color: "#181818",
  accent_color: "#FFFFFF",

  // Make sure to add the @import from Google Fonts to style.css, ask if you need help!
  para_font_family: "Space Grotesk",
  heading_font_family: "Audiowide",
  code_font_family: "Roboto Mono"
};

document.title = `${config.student_name}'s PS70 Website`;

document.documentElement.style.setProperty(
  "--background-color",
  config.background_color
);
document.documentElement.style.setProperty(
  "--text-color",
  config.text_color
);
document.documentElement.style.setProperty(
  "--accent-color",
  config.accent_color
);
document.documentElement.style.setProperty(
  "--font-family",
  config.para_font_family
);
document.documentElement.style.setProperty(
  "--heading-font-family",
  config.heading_font_family
);
document.documentElement.style.setProperty(
  "--mono-font-family",
  config.code_font_family
);

document.querySelector("footer").innerHTML = `
  <a href="./index.html#final-project">Work</a>
  <a href="./about.html">About</a>

  <div id="contact-info">
    <a href="mailto:${config.student_email}">${config.student_email}</a>
  </div>
`;

document.querySelectorAll('#student-name').forEach(el => {
  el.innerHTML = `${config.student_name}`;
});