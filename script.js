function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: "smooth" });
}
const dark=document.querySelector("#dark");
dark.onclick= () =>{
  document.body.classList.toggle("escuro");
};