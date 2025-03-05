"use client";
import React from 'react';
import { 
  Container, 
  Typography, 
  Paper, 
  Box, 
  Divider,
  ThemeProvider,
  createTheme 
} from '@mui/material';
import { 
  Search, 
  Shield, 
  Lock, 
  Mail,
  CloudSun,
  CalendarCheck,
  WifiOff
} from 'lucide-react';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const PrivacyPolicy = () => {
  const sectionStyle = {
    display: 'flex', 
    alignItems: 'center', 
    gap: 2,
    marginBottom: 3,
    borderBottom: `2px solid ${theme.palette.primary.light}`,
    paddingBottom: 1
  };

  return (
    <ThemeProvider theme={theme}>
      <Container 
        maxWidth="md" 
        sx={{ 
          py: 4,
          background: 'linear-gradient(135deg, #e6f2ff 0%, #ffffff 100%)',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Paper 
          elevation={12} 
          sx={{ 
            p: { xs: 2, sm: 4 }, 
            borderRadius: 4,
            background: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
            border: `1px solid ${theme.palette.primary.light}`
          }}
        >
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <CloudSun size={64} color="#1976d2" strokeWidth={1.5} />
            <Typography 
              variant="h3" 
              component="h1" 
              color="primary" 
              sx={{ fontWeight: 700 }}
              gutterBottom
            >
              TaskWeatherSync
            </Typography>
            <Typography variant="h5" color="textSecondary" sx={{ fontWeight: 300 }}>
              Privacy Policy
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" sx={{ mt: 1 }}>
              Last Updated: March 2025
            </Typography>
          </Box>

          <Divider sx={{ my: 3, borderColor: 'primary.light' }} />

          {/* Information We Collect */}
          <Box sx={sectionStyle}>
            <Search color="#1976d2" size={32} />
            <Typography variant="h5" color="primary">
              Information We Collect
            </Typography>
          </Box>
          <Typography paragraph>
            - <strong>Device ID</strong> – Used for task scheduling and to track active users. Inactive device records may be removed to keep the database optimized.
            <br/>- <strong>Location Data</strong> – The app focuses only on municipalities in **Sorsogon** to provide precise weather-based task recommendations for coconut farming.
            <br/>- <strong>Offline Data Storage</strong> – Task-related data may be temporarily stored on your device to ensure the app functions without an internet connection.
          </Typography>

          {/* Data Usage */}
          <Box sx={sectionStyle}>
            <CalendarCheck color="#1976d2" size={32} />
            <Typography variant="h5" color="primary">
              Task Scheduling & Offline Access
            </Typography>
          </Box>
          <Typography paragraph>
            - **Task Scheduling**: Your **device ID** enables the app to schedule and manage tasks based on the selected municipality.
            <br/>- **Offline Mode**: The app stores essential data locally, allowing users to access weather-based task recommendations even without an internet connection. Data syncs automatically once connectivity is restored.
          </Typography>

          {/* Data Security */}
          <Box sx={sectionStyle}>
            <Shield color="#1976d2" size={32} />
            <Typography variant="h5" color="primary">
              Data Security
            </Typography>
          </Box>
          <Typography paragraph>
            Your data is protected with:
            - Advanced encryption
            - Secure storage solutions
            - Compliance with industry standards
          </Typography>

          {/* Contact */}
          <Box sx={sectionStyle}>
            <Mail color="#1976d2" size={32} />
            <Typography variant="h5" color="primary">
              Contact Us
            </Typography>
          </Box>
          <Typography paragraph>
            For inquiries, reach out to:
            <br/><strong>Email:</strong> ricardohermoginojr@gmail.com
          </Typography>

          <Divider sx={{ my: 3, borderColor: 'primary.light' }} />
          <Typography variant="body2" color="textSecondary" align="center">
            © 2025 TaskWeatherSync. All Rights Reserved.
          </Typography>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default PrivacyPolicy;
