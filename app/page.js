"use client";
import React from "react";
import { 
  Container, 
  Typography, 
  Paper, 
  Box, 
  Divider,
  ThemeProvider,
  createTheme,
  Grid
} from "@mui/material";
import { 
  Search, 
  Shield, 
  Lock, 
  Mail,
  CloudSun,
  CalendarCheck
} from "lucide-react";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          marginBottom: "16px",
        },
      },
    },
  },
});

const PrivacyPolicySection = ({ icon: Icon, title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Grid container alignItems="center" sx={{ mb: 2 }}>
      <Grid item sx={{ mr: 2 }}>
        <Icon color="#1976d2" size={32} />
      </Grid>
      <Grid item xs>
        <Typography 
          variant="h5" 
          color="primary" 
          sx={{ 
            fontWeight: 600,
            borderBottom: "2px solid #1976d2",
            paddingBottom: 1 
          }}
        >
          {title}
        </Typography>
      </Grid>
    </Grid>
    <Paper 
      elevation={0} 
      sx={{ 
        p: 3, 
        bgcolor: "rgba(25, 118, 210, 0.04)", 
        borderRadius: 2 
      }}
    >
      {children}
    </Paper>
  </Box>
);

const PrivacyPolicy = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container 
        maxWidth="md" 
        sx={{ 
          py: 4,
          background: "linear-gradient(135deg, #e6f2ff 0%, #ffffff 100%)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center"
        }}
      >
        <Paper 
          elevation={12} 
          sx={{ 
            p: { xs: 3, sm: 5 }, 
            borderRadius: 4,
            background: "white",
            boxShadow: "0 15px 30px rgba(0,0,0,0.08)"
          }}
        >
          {/* Header */}
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <CloudSun 
              size={64} 
              color="#1976d2" 
              strokeWidth={1.5} 
              style={{ marginBottom: 16 }} 
            />
            <Typography 
              variant="h3" 
              component="h1" 
              color="primary" 
              sx={{ 
                fontWeight: 700,
                mb: 1
              }}
            >
              TaskWeatherSync
            </Typography>
            <Typography 
              variant="h5" 
              color="textSecondary"
              sx={{ 
                fontWeight: 300,
                mb: 1
              }}
            >
              Privacy Policy
            </Typography>
            <Typography 
              variant="subtitle1" 
              color="textSecondary"
              sx={{ 
                fontStyle: "italic",
                color: "#666"
              }}
            >
              Protecting Your Agricultural Data
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Introduction */}
          <Typography variant="body1" paragraph>
            <strong>TaskWeatherSync</strong> is an independent academic project developed by IT students from 
            <strong> The Lewis College</strong> as part of our capstone requirement. This app is <strong>not affiliated with any government entity.</strong> 
            It provides information from <strong>OpenWeatherMap (Free 5-Day Forecast API)</strong> for educational and planning purposes, specifically to assist 
            coconut farmers in Sorsogon with weather-based task recommendations.
          </Typography>

          {/* What We Collect */}
          <PrivacyPolicySection 
            icon={Search} 
            title="What We Collect"
          >
            <Typography variant="body1" paragraph>
              We collect essential data to enhance your farming experience:
            </Typography>
            <Box component="ul" sx={{ 
              pl: 3, 
              "& li": { 
                mb: 2,
                lineHeight: 1.6
              } 
            }}>
              <li>
                <strong>Device ID</strong>: Helps us manage task scheduling and maintain an efficient database.
              </li>
              <li>
                <strong>User-Selected Location Data</strong>: Users manually select a municipality from a dropdown menu to check weather conditions. 
                The app <strong>does not request or track real-time GPS location.</strong>
              </li>
              <li>
                <strong>Offline Data</strong>: Ensures access to farming insights, even without internet.
              </li>
            </Box>
          </PrivacyPolicySection>

          {/* Data Usage */}
          <PrivacyPolicySection 
            icon={CalendarCheck} 
            title="How We Use Your Data"
          >
            <Typography variant="body1" paragraph>
              We transform data into actionable agricultural intelligence:
            </Typography>
            <Box component="ul" sx={{ 
              pl: 3, 
              "& li": { 
                mb: 2,
                lineHeight: 1.6
              } 
            }}>
              <li>
                <strong>Smart Scheduling</strong>: The selected municipality’s weather data is used to determine the best times for farming tasks.
              </li>
              <li>
                <strong>Offline Access</strong>: Continuous farming insights, with or without connectivity.
              </li>
            </Box>
          </PrivacyPolicySection>

          {/* Data Security */}
          <PrivacyPolicySection 
            icon={Shield} 
            title="Data Protection"
          >
            <Typography variant="body1" paragraph>
              We safeguard your information with utmost care:
            </Typography>
            <Box component="ul" sx={{ 
              pl: 3, 
              "& li": { 
                mb: 2,
                lineHeight: 1.6
              } 
            }}>
              <li>
                <strong>Encryption</strong>: Protection for your data.
              </li>
              <li>
                <strong>Secure Storage</strong>: Information stored with security.
              </li>
              <li>
                <strong>Compliance</strong>: Meeting and exceeding industry standards.
              </li>
            </Box>
          </PrivacyPolicySection>

          {/* Contact */}
          <PrivacyPolicySection 
            icon={Mail} 
            title="Contact Us"
          >
            <Typography variant="body1" align="center" paragraph>
              Have questions or concerns?
            </Typography>
            <Typography 
              variant="h6" 
              color="primary" 
              align="center"
              sx={{ 
                fontWeight: 600,
                mb: 2
              }}
            >
              ricardohermoginojr@gmail.com
            </Typography>
          </PrivacyPolicySection>

          <Divider sx={{ my: 3 }} />

          <Typography 
            variant="body2" 
            color="textSecondary" 
            align="center"
          >
            © 2025 TaskWeatherSync. All Rights Reserved.
          </Typography>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default PrivacyPolicy;
