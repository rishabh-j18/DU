// Header.jsx
import React from 'react';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ padding: '2rem 0' }}
    >
      <Box sx={{ maxWidth: '100%', mx: 'auto', px: 2 }}>
        <Grid container spacing={2} alignItems="center">
          {/* Left Section */}
          <Grid item xs={12} md={4} textAlign="center">
            <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="h4" gutterBottom>
                Shyama Prasad Mukherji College for Women
              </Typography>
              <Typography variant="body1">University Of Delhi</Typography>
            </a>
          </Grid>

          {/* Center Section */}
          <Grid item xs={12} md={4} textAlign="center">
            <Box
              component={motion.div}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
              }}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 150 }}
            >
              <img
                src="https://spm.du.ac.in/templates/spm/images/college_logo.jpeg"
                alt="College Logo"
                width="80"
              />
              <img
                src="https://spm.du.ac.in/templates/spm/images/logo.jpeg"
                alt="University Logo"
                width="80"
              />
              <img
                src="https://spm.du.ac.in/templates/spm/images/delhi-university-new.a77f772708fa.original.png"
                alt="DU Logo"
                width="80"
              />
            </Box>
          </Grid>

          {/* Right Section (Shown on Medium Screens and Up) */}
          {isMdUp && (
            <Grid item md={4} textAlign="center">
              <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant="h4" gutterBottom>
                  श्यामा प्रसाद मुखर्जी महिला महाविद्यालय
                </Typography>
                <Typography variant="body1">दिल्ली विश्वविद्यालय</Typography>
              </a>
            </Grid>
          )}
        </Grid>
      </Box>
    </motion.header>
  );
};

export default Header;
