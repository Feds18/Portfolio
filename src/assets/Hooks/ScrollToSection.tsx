export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    console.log(section);
    section.scrollIntoView({ behavior: "smooth" });
  }
};
