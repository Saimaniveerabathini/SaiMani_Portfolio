(function () {
  "use strict";

  const config = window.portfolioConfig;
  if (!config) {
    throw new Error("Portfolio content is unavailable. Check portfolio.config.js.");
  }

  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };

  document.querySelectorAll("[data-name]").forEach((node) => {
    node.textContent = config.name;
  });
  document.querySelectorAll("[data-name-short]").forEach((node) => {
    node.textContent = config.name.split(" ")[0];
  });
  document.querySelectorAll("[data-location]").forEach((node) => {
    node.textContent = config.location;
  });
  document.querySelector("[data-summary]").textContent = config.summary;
  document.querySelector("[data-about]").textContent = config.about;
  document.querySelector("[data-goal]").textContent = config.careerGoal;
  document.querySelector("[data-contact-email]").textContent = config.email;
  document.querySelector("[data-email-cta]").href = `mailto:${config.email}`;
  document.querySelector("#current-year").textContent = new Date().getFullYear();

  const socials = [
    { label: "GitHub", url: config.github, icon: "GH" },
    { label: "LinkedIn", url: config.linkedin, icon: "in" },
    { label: "Email", url: `mailto:${config.email}`, icon: "@" }
  ];

  document.querySelectorAll(".social-links").forEach((container) => {
    socials.forEach((social) => {
      if (social.url) {
        const link = element("a", "social-link", social.label);
        link.href = social.url;
        if (!social.url.startsWith("mailto:")) {
          link.target = "_blank";
          link.rel = "noopener noreferrer";
        }
        const icon = element("span", "social-icon", social.icon);
        icon.setAttribute("aria-hidden", "true");
        link.prepend(icon);
        container.append(link);
      } else {
        const missing = element("span", "social-link social-unset", `${social.label} · add profile`);
        missing.setAttribute("aria-label", `${social.label} profile URL not configured`);
        container.append(missing);
      }
    });
  });

  const skillsGrid = document.querySelector("#skills-grid");
  config.skills.forEach((group, index) => {
    const card = element("article", "skill-card");
    const heading = element("div", "skill-card-heading");
    heading.append(element("span", "skill-index", String(index + 1).padStart(2, "0")));
    heading.append(element("h3", "", group.category));
    card.append(heading);
    const badges = element("div", "skill-badges");
    group.items.forEach((item) => badges.append(element("span", "skill-badge", item)));
    card.append(badges);
    skillsGrid.append(card);
  });

  const experienceList = document.querySelector("#experience-list");
  config.experience.forEach((job) => {
    const article = element("article", "timeline-item");
    const marker = element("div", "timeline-marker");
    marker.setAttribute("aria-hidden", "true");
    article.append(marker);
    const content = element("div", "experience-card");
    const top = element("div", "experience-top");
    const title = element("div");
    title.append(element("h3", "experience-role", job.role));
    title.append(element("p", "experience-company", job.company));
    top.append(title);
    top.append(element("span", "experience-dates", job.dates));
    content.append(top);
    content.append(element("p", "experience-context", job.context));
    content.append(element("p", "experience-description", job.description));
    const list = element("ul", "experience-highlights");
    job.highlights.forEach((highlight) => list.append(element("li", "", highlight)));
    content.append(list);
    if (job.project) {
      const project = element("section", "experience-project");
      project.append(element("h4", "", job.project.label));
      project.append(element("p", "experience-project-context", job.project.context));
      project.append(element("p", "experience-description", job.project.description));
      const projectHighlights = element("ul", "experience-highlights");
      job.project.highlights.forEach((highlight) => {
        projectHighlights.append(element("li", "", highlight));
      });
      project.append(projectHighlights);
      content.append(project);
    }
    article.append(content);
    experienceList.append(article);
  });

  const projectsGrid = document.querySelector("#projects-grid");
  config.projects.forEach((project, index) => {
    const card = element("article", `project-card project-card-${index + 1}`);
    const top = element("div", "project-topline");
    top.append(element("span", "project-index", `0${index + 1} / CASE STUDY`));
    top.append(element("span", "project-arrow", "↗"));
    card.append(top);
    card.append(element("p", "project-label", project.label));
    card.append(element("h3", "", project.title));
    card.append(element("p", "project-description", project.description));
    const list = element("ul", "project-highlights");
    project.highlights.forEach((highlight) => list.append(element("li", "", highlight)));
    card.append(list);
    const stack = element("div", "project-stack");
    project.stack.forEach((item) => stack.append(element("span", "", item)));
    card.append(stack);
    projectsGrid.append(card);
  });

  const education = config.education;
  const educationCard = document.querySelector("#education-card");
  educationCard.append(element("span", "education-icon", "01"));
  const educationDetails = element("div", "education-details");
  educationDetails.append(element("h3", "", education.degree));
  educationDetails.append(element("p", "", education.institution));
  educationCard.append(educationDetails);
  educationCard.append(element("span", "education-result", education.result));

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector("#nav-links");
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    navLinks.classList.remove("is-open");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    navLinks.classList.toggle("is-open", !isOpen);
  });
  navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
})();
