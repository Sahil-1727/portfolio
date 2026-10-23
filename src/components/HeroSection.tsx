import { useState, type ComponentType } from "react";
import {
  Box,
  Button,
  Chip,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import AboutCard from "./AboutCard";
import SkillsCard from "./SkillsCard";
import ProjectsCard from "./ProjectsCard";
import CertificationsCard from "./CertificationsCard";
import ContactCard from "./ContactCard";
import CardFlipTransition from "./CardFlipTransition";
import ParticleFlowGroup from "./ParticleFlowGroup";
import profile from "../content/profile";
import uiText from "../content/uiText";
import type { CardPanelId, NavigationProps } from "../types/navigation";

const panelComponents = {
  about: AboutCard,
  skills: SkillsCard,
  projects: ProjectsCard,
  certifications: CertificationsCard,
  contact: ContactCard,
} satisfies Record<CardPanelId, ComponentType>;

function renderPanel(panel: CardPanelId) {
  const Panel = panelComponents[panel];
  return Panel ? <Panel /> : null;
}

function HeroSection({ activePanel, setActivePanel }: NavigationProps) {
  const hasActivePanel = activePanel !== "home";
  const [hasPanelInLayout, setHasPanelInLayout] = useState(hasActivePanel);

  function handleNextClick() {
    if (!hasActivePanel) {
      setActivePanel("about");
    } else if (activePanel === "about") {
      setActivePanel("skills");
    } else if (activePanel === "skills") {
      setActivePanel("projects");
    } else if (activePanel === "projects") {
      setActivePanel("certifications");
    } else if (activePanel === "certifications") {
      setActivePanel("contact");
    } else {
      setActivePanel("about");
    }
  }

  function handleBackClick() {
    setActivePanel("home");
  }

  return (
    <Box
      id="home"
      component="section"
      sx={{ py: { xs: 3, md: 6 }, width: "100%" }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 4, md: 3 } }}>

        {/* ── MOBILE/TABLET: card open → show card full width with back button ── */}
        {hasActivePanel && (
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Stack direction="row" sx={{ alignItems: "center", mb: { xs: 2, sm: 3 }, gap: 1 }}>
              <Button
                size="small"
                startIcon={<ArrowBackIcon />}
                onClick={handleBackClick}
                sx={{ textTransform: "none", fontWeight: 600, px: 1, fontSize: { sm: "0.9rem" } }}
              >
                Back
              </Button>
              <Button
                size="small"
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                onClick={handleNextClick}
                sx={{ textTransform: "none", fontWeight: 600, ml: "auto", fontSize: { sm: "0.9rem" } }}
              >
                {uiText.hero.next}
              </Button>
            </Stack>
            <CardFlipTransition
              activePanel={activePanel}
              onPresenceChange={setHasPanelInLayout}
              renderPanel={renderPanel}
            />
          </Box>
        )}

        {/* ── MOBILE/TABLET: no card → show hero full width ── */}
        {!hasActivePanel && (
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Stack spacing={{ xs: 2, sm: 3 }} sx={{ maxWidth: { sm: 600 }, mx: { sm: "auto" } }}>
              <Chip
                label="Open to Internship"
                size="small"
                sx={{
                  alignSelf: "flex-start",
                  backgroundColor: "#e8f5e9",
                  color: "#2e7d32",
                  fontWeight: 700,
                  border: "1px solid #a5d6a7",
                }}
                icon={
                  <Box
                    sx={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      backgroundColor: "#2e7d32",
                      ml: 1,
                      flexShrink: 0,
                      animation: "pulse 2s infinite",
                      "@keyframes pulse": {
                        "0%, 100%": { opacity: 1 },
                        "50%": { opacity: 0.4 },
                      },
                    }}
                  />
                }
              />

              <Typography
                variant="overline"
                sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 1.5, fontSize: { xs: "0.65rem", sm: "0.75rem" } }}
              >
                {uiText.hero.eyebrow}
              </Typography>

              <Typography
                variant="h3"
                component="h1"
                sx={{ fontWeight: 800, lineHeight: 1.15, fontSize: { xs: "1.9rem", sm: "2.6rem" } }}
              >
                {profile.hero.greeting}
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", lineHeight: 1.7, fontSize: { xs: "0.9rem", sm: "1rem" } }}
              >
                {profile.hero.summary}
              </Typography>

              <Stack direction="row" spacing={1.5}>
                <Button
                  variant="contained"
                  onClick={handleNextClick}
                  endIcon={<ArrowForwardIcon />}
                  sx={{ textTransform: "none", fontWeight: 700, borderRadius: 2, flex: 1 }}
                >
                  {uiText.hero.start}
                </Button>
                <Button
                  variant="outlined"
                  href={`${import.meta.env.BASE_URL}${profile.resumeFile}`}
                  download
                  startIcon={<DownloadIcon />}
                  sx={{
                    textTransform: "none",
                    fontWeight: 700,
                    borderRadius: 2,
                    flex: 1,
                    color: "text.primary",
                    borderColor: "grey.400",
                    backgroundColor: "rgba(255,255,255,0.75)",
                  }}
                >
                  {uiText.hero.downloadResume}
                </Button>
              </Stack>

              <Stack direction="row" spacing={1}>
                <IconButton
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={uiText.social.linkedin}
                  sx={{ color: "#0A66C2" }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  href={profile.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={uiText.social.github}
                  sx={{ color: "#181717" }}
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  href={profile.socialLinks.takeuforward}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TakeUForward"
                  sx={{ p: 0.5 }}
                >
                  <Box component="img" src={`${import.meta.env.BASE_URL}tuf.png`} alt="TakeUForward" sx={{ width: 28, height: 28, borderRadius: "50%" }} />
                </IconButton>
                <IconButton
                  href={profile.socialLinks.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode"
                  sx={{ p: 0.5 }}
                >
                  <Box component="img" src="https://leetcode.com/favicon.ico" alt="LeetCode" sx={{ width: 28, height: 28, borderRadius: "4px" }} />
                </IconButton>
              </Stack>
            </Stack>
          </Box>
        )}

        {/* ── DESKTOP: side-by-side layout ── */}
        <Box
          sx={{
            display: { xs: "none", md: "grid" },
            gridTemplateColumns: hasPanelInLayout ? "1fr 1.2fr" : "1fr",
            gap: 8,
            alignItems: "center",
            transition: "all 500ms ease",
          }}
        >
          <ParticleFlowGroup
            transitionKey={hasPanelInLayout}
            direction={hasPanelInLayout ? -1 : 1}
            sx={{
              maxWidth: hasPanelInLayout ? 680 : 760,
              mx: hasPanelInLayout ? 0 : "auto",
              transform: hasPanelInLayout ? "translateX(-10px)" : "translateX(0)",
              transition: "all 500ms ease",
            }}
          >
            <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", mb: 1 }}>
              <Chip
                label="Open to Internship"
                size="small"
                sx={{
                  backgroundColor: "#e8f5e9",
                  color: "#2e7d32",
                  fontWeight: 700,
                  border: "1px solid #a5d6a7",
                  "& .MuiChip-label": { px: 1.5 },
                }}
                icon={
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "#2e7d32",
                      ml: 1,
                      flexShrink: 0,
                      animation: "pulse 2s infinite",
                      "@keyframes pulse": {
                        "0%, 100%": { opacity: 1 },
                        "50%": { opacity: 0.4 },
                      },
                    }}
                  />
                }
              />
            </Stack>

            <Typography
              variant="overline"
              sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 1.5 }}
            >
              {uiText.hero.eyebrow}
            </Typography>

            <Typography
              variant="h2"
              component="h1"
              sx={{
                mt: 1,
                fontWeight: 800,
                lineHeight: 1.1,
                fontSize: hasPanelInLayout ? "3.2rem" : "4rem",
              }}
            >
              {profile.hero.greeting}
            </Typography>

            <Typography
              variant="body1"
              sx={{ mt: 3, color: "text.secondary", lineHeight: 1.8 }}
            >
              {profile.hero.summary}
            </Typography>

            <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
              <Button
                variant="contained"
                size="large"
                onClick={handleNextClick}
                endIcon={<ArrowForwardIcon />}
                sx={{ textTransform: "none", fontWeight: 700, borderRadius: 2, px: 3 }}
              >
                {hasPanelInLayout ? uiText.hero.next : uiText.hero.start}
              </Button>
              <Button
                variant="outlined"
                size="large"
                href={`${import.meta.env.BASE_URL}${profile.resumeFile}`}
                download
                startIcon={<DownloadIcon />}
                sx={{
                  textTransform: "none",
                  fontWeight: 700,
                  borderRadius: 2,
                  px: 3,
                  color: "text.primary",
                  borderColor: "grey.400",
                  backgroundColor: "rgba(255,255,255,0.75)",
                  backdropFilter: "blur(4px)",
                  "&:hover": { borderColor: "grey.600", backgroundColor: "rgba(245,245,245,0.9)" },
                }}
              >
                {uiText.hero.downloadResume}
              </Button>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ mt: 4, alignItems: "center" }}>
              <IconButton
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={uiText.social.linkedin}
                sx={{ color: "#0A66C2" }}
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton
                href={profile.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={uiText.social.github}
                sx={{ color: "#181717" }}
              >
                <GitHubIcon fontSize="large" />
              </IconButton>
              <IconButton
                href={profile.socialLinks.takeuforward}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TakeUForward"
                sx={{ p: 0.5 }}
              >
                <Box component="img" src={`${import.meta.env.BASE_URL}tuf.png`} alt="TakeUForward" sx={{ width: 36, height: 36, borderRadius: "50%" }} />
              </IconButton>
              <IconButton
                href={profile.socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                sx={{ p: 0.5 }}
              >
                <Box component="img" src="https://leetcode.com/favicon.ico" alt="LeetCode" sx={{ width: 36, height: 36, borderRadius: "4px" }} />
              </IconButton>
            </Stack>
          </ParticleFlowGroup>

          <CardFlipTransition
            activePanel={activePanel}
            onPresenceChange={setHasPanelInLayout}
            renderPanel={renderPanel}
          />
        </Box>

      </Container>
    </Box>
  );
}

export default HeroSection;
