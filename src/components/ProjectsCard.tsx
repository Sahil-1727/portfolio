import type { ReactNode } from "react";
import {
  Box,
  Button,
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import PsychologyIcon from "@mui/icons-material/Psychology";
import StorageIcon from "@mui/icons-material/Storage";
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import LiquidGlassCard from "./LiquidGlassCard";
import profile from "../content/profile";
import uiText from "../content/uiText";
import type { ProjectId } from "../content/types";

const projectIcons = {
  housePricePredictor: <BarChartIcon />,
  ragAssistant: <PsychologyIcon />,
  devtrack: <StorageIcon />,
  queueSystem: <HomeIcon />,
} satisfies Record<ProjectId, ReactNode>;

function ProjectsCard() {
  return (
    <LiquidGlassCard
      sx={{
        p: { xs: 2, sm: 3, md: 4 },
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "#fafafa",
        maxHeight: { xs: "calc(100vh - 120px)", sm: "calc(100vh - 140px)", md: "75vh" },
        overflowY: "auto",
      }}
    >
      <Stack spacing={3}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            {uiText.projects.heading}
          </Typography>

          <Typography color="text.secondary" sx={{ mt: 1, lineHeight: 1.5 }}>
            {uiText.projects.introduction}
          </Typography>
        </Box>

        <Divider />

        <Stack spacing={2.5}>
          {profile.projects.map((project) => (
            <Paper
              key={project.title}
              elevation={0}
              sx={{
                p: 2.5,
                borderRadius: 3,
                backgroundColor: "white",
                border: "1px solid",
                borderColor: "divider",
                transition: "all 250ms ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 3,
                },
              }}
            >
              <Stack spacing={1.5}>
                <Stack direction="row" spacing={1.5}>
                  <Box
                    sx={{
                      color: "primary.main",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {projectIcons[project.id]}
                  </Box>

                  <Box>
                    <Typography variant="h6">
                      {project.title}
                    </Typography>

                    <Typography variant="body2" color="primary.main">
                      {project.type}
                    </Typography>
                  </Box>
                </Stack>

                <Typography color="text.secondary" sx={{ lineHeight: 1.5 }}>
                  {project.description}
                </Typography>

                <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
                  {project.tech.map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      size="small"
                      variant="outlined"
                      sx={{
                        fontWeight: 600,
                        borderRadius: 2,
                      }}
                    />
                  ))}
                </Stack>

                <Stack direction="row" spacing={1} useFlexGap>
                  <Button
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<GitHubIcon />}
                    endIcon={<LaunchIcon />}
                    sx={{
                      textTransform: "none",
                      fontWeight: 600,
                      px: 0,
                    }}
                  >
                    {uiText.projects.viewOnGitHub}
                  </Button>

                  {project.liveLink && (
                    <Button
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      endIcon={<LaunchIcon />}
                      sx={{
                        textTransform: "none",
                        fontWeight: 600,
                        px: 0,
                      }}
                    >
                      Live Demo
                    </Button>
                  )}
                </Stack>
              </Stack>
            </Paper>
          ))}
        </Stack>
      </Stack>
    </LiquidGlassCard>
  );
}

export default ProjectsCard;
