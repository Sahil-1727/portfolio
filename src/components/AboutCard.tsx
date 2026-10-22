import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LiquidGlassCard from "./LiquidGlassCard";
import profile from "../content/profile";
import uiText from "../content/uiText";

function AboutCard() {
  return (
    <LiquidGlassCard
      sx={{
        p: { xs: 2, sm: 3, md: 4 },
        borderRadius: 4,
        border: "1px solid",
        height: { md: "75vh" },
        maxHeight: { xs: "calc(100vh - 120px)", sm: "calc(100vh - 140px)", md: "none" },
        overflow: "auto",
        borderColor: "divider",
        backgroundColor: "#fafafa",
      }}
    >
      <Stack spacing={3}>
        {/* Header */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{ justifyContent: "space-around", alignItems: "center", gap: 1.5 }}
        >
          <Avatar
            sx={{
              width: { xs: 80, sm: 110, md: 150 },
              height: { xs: 80, sm: 110, md: 150 },
              fontSize: { xs: 28, sm: 36, md: 44 },
              fontWeight: 800,
              bgcolor: "primary.main",
              flexShrink: 0,
            }}
          >
            {profile.initials}
          </Avatar>

          <Box sx={{ width: { xs: "100%", sm: "65%" } }}>
            <Typography variant="h4" sx={{ fontWeight: 600, fontSize: { xs: "1.4rem", md: "2.125rem" } }}>
              {profile.name}
            </Typography>

            <Stack direction={"row"} sx={{ alignItems: "center" }}>
              <LocationOnIcon />
              <Typography color="text.secondary">
                {profile.about.location}
              </Typography>
            </Stack>

            <Typography color="text.secondary" sx={{ mt: 1, ml: 0.6}}>
              {profile.about.role}
            </Typography>

            <Typography color="text.secondary" sx={{ml: 0.6}}>
              {profile.about.gpa}
            </Typography>

            <Typography color="text.secondary" sx={{ml: 0.6}}>
              {profile.about.graduation}
            </Typography>
          </Box>
        </Stack>

        <Divider />

        {/* Technical Experience */}
        <Box>
          <Stack
            direction="row"
            spacing={1.5}
            sx={{ mb: 1.5, alignItems: "center" }}
          >
            <WorkIcon sx={{ color: "primary.main" }} />
            <Typography variant="h5" sx={{ fontWeight: 600, fontSize: { xs: "1.1rem", md: "1.5rem" } }}>
              {uiText.about.experienceHeading}
            </Typography>
          </Stack>

          {profile.about.experience.map((experience) => (
            <Box
              key={`${experience.title}-${experience.period}`}
              sx={{
                p: 2,
                borderRadius: 3,
                backgroundColor: "white",
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <Typography variant="h6">{experience.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {experience.period}
              </Typography>
              <Stack direction={"row"} sx={{ alignItems: "center" }}>
                <LocationOnIcon sx={{ fontSize: 16 }} />
                <Typography variant="body2" color="text.secondary">
                  {experience.location}
                </Typography>
              </Stack>

              <Box
                component="ul"
                sx={{
                  mt: 1.5,
                  mb: 0,
                  pl: 2.5,
                  color: "text.secondary",
                  "& li + li": { mt: 0.75 },
                }}
              >
                {experience.highlights.map((highlight) => (
                  <Typography
                    component="li"
                    variant="body1"
                    key={highlight}
                    sx={{ lineHeight: 1.5 }}
                  >
                    {highlight}
                  </Typography>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Education */}
        <Box>
          <Stack
            direction="row"
            spacing={1.5}
            sx={{ mb: 1.5, alignItems: "center" }}
          >
            <SchoolIcon sx={{ color: "primary.main" }} />
            <Typography variant="h5" sx={{ fontWeight: 600, fontSize: { xs: "1.1rem", md: "1.5rem" } }}>
              {uiText.about.educationHeading}
            </Typography>
          </Stack>

          <Stack spacing={2}>
            {profile.about.education.map((education) => (
              <Box
                key={`${education.degree}-${education.period}`}
                sx={{
                  p: 2,
                  borderRadius: 3,
                  backgroundColor: "white",
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Typography variant="h6">{education.degree}</Typography>

                <Typography variant="body2" color="text.secondary">
                  {education.period}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {education.institution}
                </Typography>

                {education.detail && (
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mt: 1 }}
                  >
                    {education.detail}
                  </Typography>
                )}
              </Box>
            ))}
          </Stack>
        </Box>
        {/* Achievements */}
        {profile.about.achievements.length > 0 && (
          <Box>
            <Stack direction="row" spacing={1.5} sx={{ mb: 1.5, alignItems: "center" }}>
              <EmojiEventsIcon sx={{ color: "primary.main" }} />
              <Typography variant="h5" sx={{ fontWeight: 600, fontSize: { xs: "1.1rem", md: "1.5rem" } }}>
                {uiText.about.achievementsHeading}
              </Typography>
            </Stack>
            <Stack spacing={1.5}>
              {profile.about.achievements.map((achievement) => (
                <Box
                  key={achievement}
                  sx={{
                    p: 2,
                    borderRadius: 3,
                    backgroundColor: "white",
                    border: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                    {achievement}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        )}
      </Stack>
    </LiquidGlassCard>
  );
}

export default AboutCard;
