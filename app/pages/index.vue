<script setup lang="ts">
import {
  availabilityServices,
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
      <PortfolioAvailability :services="availabilityServices" />
      <PortfolioProjects :projects="projectItems" />
      <PortfolioExperience :items="experienceItems" />
      <PortfolioSkills :cards="skillCards" />
      <PortfolioPhilosophy :points="philosophyPoints" />
      <PortfolioContact :links="contactLinks" />
    </main>
    <PortfolioFooter :links="footerLinks" />
  </div>
</template>
