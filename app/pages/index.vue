<script setup lang="ts">
import {
  contactLinks,
  experienceItems,
  footerLinks,
  navLinks,
  philosophyPoints,
  projectItems,
  skillCards,
} from '~/data/portfolio'
</script>

<template>
  <div>
    <PortfolioNavbar :links="navLinks" />
    <main class="pt-16">
      <PortfolioHero />
      <PortfolioPhilosophy :points="philosophyPoints" />
      <PortfolioProjects :projects="projectItems" />
      <PortfolioExperience :items="experienceItems" />
      <PortfolioSkills :cards="skillCards" />
      <PortfolioContact :links="contactLinks" />
    </main>
    <PortfolioFooter :links="footerLinks" />
  </div>
</template>
