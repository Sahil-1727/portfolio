import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import uiText from "../content/uiText";
import type { NavigationProps } from "../types/navigation";

function Header({ activePanel, setActivePanel }: NavigationProps) {
  const buttonWidth = 96;
  const gap = 24;
  const activeIndex = uiText.navigation.findIndex(
    (item) => item.value === activePanel,
  );

  return (
    <AppBar
      position="sticky"
      elevation={1}
      sx={{ backgroundColor: "white", color: "text.primary" }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 1, md: 3 } }}>

        {/* ── MOBILE/TABLET nav: evenly spaced, full width ── */}
        <Toolbar
          disableGutters
          sx={{ display: { xs: "flex", md: "none" }, justifyContent: "stretch", minHeight: { xs: "48px !important", sm: "56px !important" } }}
        >
          <Box sx={{ display: "flex", width: "100%", gap: { xs: "3px", sm: "6px" }, overflowX: "auto", scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }}>
            {uiText.navigation.map((item) => (
              <Button
                key={item.value}
                onClick={() => setActivePanel(item.value)}
                sx={{
                  flex: { xs: "0 0 auto", sm: 1 },
                  minWidth: { xs: 60, sm: 0 },
                  height: { xs: "36px", sm: "42px" },
                  px: { xs: 0.5, sm: 0 },
                  borderRadius: 2,
                  textTransform: "none",
                  fontSize: { xs: "10px", sm: "13px" },
                  fontWeight: 600,
                  letterSpacing: 0,
                  whiteSpace: "nowrap",
                  color: activePanel === item.value ? "white" : "text.secondary",
                  backgroundColor: activePanel === item.value ? "primary.main" : "transparent",
                  transition: "all 200ms ease",
                  "&:hover": {
                    backgroundColor: activePanel === item.value ? "primary.dark" : "grey.100",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>

        {/* ── DESKTOP nav: original sliding pill ── */}
        <Toolbar
          disableGutters
          sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center" }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              gap: `${gap}px`,
              alignSelf: "stretch",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                width: `${buttonWidth}px`,
                height: "44px",
                borderRadius: 2,
                backgroundColor: "primary.main",
                transform: `translateX(${activeIndex * (buttonWidth + gap)}px)`,
                transition: "transform 300ms ease",
                zIndex: 0,
              }}
            />
            {uiText.navigation.map((item) => (
              <Button
                key={item.value}
                onClick={() => setActivePanel(item.value)}
                sx={{
                  width: `${buttonWidth}px`,
                  height: "44px",
                  px: 2,
                  zIndex: 1,
                  color: activePanel === item.value ? "white" : "text.primary",
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: 600,
                  fontFamily: "Arial, sans-serif",
                  borderRadius: 2,
                  transition: "color 250ms ease",
                  "&:hover": { backgroundColor: "transparent" },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>

      </Container>
    </AppBar>
  );
}

export default Header;
