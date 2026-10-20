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
      sx={{
        backgroundColor: "white",
        color: "text.primary",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "center",
            overflowX: "auto",
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              gap: { xs: "8px", md: `${gap}px` },
              alignSelf: "stretch",
              alignItems: "center",
              minWidth: "max-content",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                width: { xs: "72px", md: `${buttonWidth}px` },
                height: "36px",
                borderRadius: 2,
                backgroundColor: "primary.main",
                transform: {
                  xs: `translateX(${activeIndex * (72 + 8)}px)`,
                  md: `translateX(${activeIndex * (buttonWidth + gap)}px)`,
                },
                transition: "transform 300ms ease",
                zIndex: 0,
              }}
            />
            {uiText.navigation.map((item) => {
              return (
                <Button
                  key={item.value}
                  onClick={() => setActivePanel(item.value)}
                  sx={{
                    width: { xs: "72px", md: `${buttonWidth}px` },
                    height: { xs: "36px", md: "44px" },
                    px: { xs: 1, md: 2 },
                    zIndex: 1,
                    color:
                      activePanel === item.value ? "white" : "text.primary",
                    textTransform: "none",
                    fontSize: { xs: "12px", md: "16px" },
                    fontWeight: 600,
                    fontFamily: "Arial, sans-serif",
                    fontStyle: "normal",
                    borderRadius: 2,
                    transition: "color 250ms ease",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
