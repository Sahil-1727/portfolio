import { Box, Button, Chip, Divider, Stack, Typography } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import LiquidGlassCard from "./LiquidGlassCard";
import profile from "../content/profile";
import uiText from "../content/uiText";

function CertificationsCard() {
  return (
    <LiquidGlassCard
      sx={{
        p: { xs: 3, md: 4 },
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "#fafafa",
        maxHeight: { md: "75vh" },
        overflowY: "auto",
      }}
    >
      <Stack spacing={3}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            {uiText.about.certificationsHeading}
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1, lineHeight: 1.5 }}>
            Courses and certifications completed in Data Science, ML, and GenAI.
          </Typography>
        </Box>

        <Divider />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
            gap: 2,
          }}
        >
          {profile.about.certifications.map((cert) => (
            <Box
              key={`${cert.title}-${cert.issuer}`}
              sx={{
                p: 2,
                borderRadius: 3,
                backgroundColor: "white",
                border: "1px solid",
                borderColor: "divider",
                display: "flex",
                flexDirection: "column",
                gap: 0.75,
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 600, lineHeight: 1.3 }}>
                {cert.title}
              </Typography>

              <Chip
                label={cert.issuer}
                size="small"
                variant="outlined"
                sx={{ alignSelf: "flex-start", fontWeight: 600, borderRadius: 2 }}
              />

              <Typography variant="body2" color="text.secondary">
                Issued {cert.issued}
              </Typography>

              <Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
                {cert.credentialUrl && (
                  <Button
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    endIcon={<LaunchIcon fontSize="small" />}
                    sx={{ p: 0, textTransform: "none", fontWeight: 600 }}
                  >
                    Show credential
                  </Button>
                )}
                {cert.pdfFile && (
                  <Button
                    href={`${import.meta.env.BASE_URL}${cert.pdfFile}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    endIcon={<PictureAsPdfIcon fontSize="small" />}
                    sx={{ p: 0, textTransform: "none", fontWeight: 600 }}
                  >
                    View Certificate
                  </Button>
                )}
              </Stack>
            </Box>
          ))}
        </Box>
      </Stack>
    </LiquidGlassCard>
  );
}

export default CertificationsCard;
