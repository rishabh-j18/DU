import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box, Link, TextField, InputAdornment, Button } from "@mui/material";
import { motion } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";

const socialLinks = [
  { href: "https://www.facebook.com/profile.php?id=100063981343873", img: "https://spm.du.ac.in/templates/spm/images/facebook.png" },
  { href: "https://www.instagram.com/spmcofficial/?hl=en", img: "https://spm.du.ac.in/templates/spm/images/instagram.png" },
  { href: "https://www.linkedin.com/school/shyama-prasad-mukherji-college-for-women/?originalSubdomain=in", img: "https://spm.du.ac.in/templates/spm/images/linkedin.png" },
  { href: "https://www.youtube.com/channel/UCBpnKrmrPJODKP-h5nh-Ybg", img: "https://spm.du.ac.in/templates/spm/images/youtube.png" },
  { href: "https://twitter.com/SpmcollegeD", img: "https://spm.du.ac.in/templates/spm/images/twitter.png" },
  { href: "https://spm.du.ac.in/blog/", img: "https://spm.du.ac.in/templates/spm/images/blogger.png" },
];

const menuLinks = [
  { text: "Home", href: "https://spm.du.ac.in/" },
  { text: "Faculty Login", href: "https://spm.du.ac.in/index.php?option=com_users&view=login&Itemid=203&lang=en" },
  { text: "Student Login", href: "https://spm.du.ac.in/index.php?option=com_users&view=login&Itemid=203&lang=en" },
  { text: "Fee Payment", href: "https://www.iobnet.co.in/iobpay/entry.do?dirlinkcatcd=EDU&amp;dirlinkmerid=SPMDEL" },
  { text: "Important Links", href: "/index.php?option=com_content&amp;view=article&amp;id=18:important-links&amp;catid=2:english&amp;lang=en&amp;Itemid=133" },
  { text: "Contact Us", href: "https://spm.du.ac.in/index.php?option=com_content&view=article&id=6&Itemid=117&lang=en" },
];

const TopBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff", color: "#000", padding: "8px 0" }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", gap: 2, justifyContent: "center", alignItems: "center" }}>
          {socialLinks.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconButton href={link.href} target="_blank">
                <img src={link.img} alt="social" width="30" height="30" />
              </IconButton>
            </motion.div>
          ))}
        </Box>

        <Box component="form" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <TextField
            name="searchword"
            placeholder="Search..."
            variant="outlined"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton type="submit">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box sx={{ flexGrow: 1, textAlign: "right" }}>
          <Typography component="div">
            {menuLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                sx={{ marginLeft: 2, textDecoration: "none", color: "#000", fontSize: 14 }}
              >
                {link.text}
              </Link>
            ))}
            <IconButton href="/index.php?option=com_content&amp;view=featured&amp;Itemid=101&amp;lang=hi">
              <img src="/images/hi_in.png" alt="Hindi (India)" width="30" height="20" />
            </IconButton>
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
