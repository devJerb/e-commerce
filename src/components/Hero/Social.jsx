import React from "react";
import GitHub from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import {
    Grid,
    IconButton,
    Link,
} from '@material-ui/core';

const socialItems = [
  { icon: GitHub, url: "https://github.com/devJerb", name: "github" },
  { icon: TwitterIcon, url: "https://twitter.com/jerboiiii", name: "twitter" },
  { icon: LinkedInIcon, url: "https://www.linkedin.com/in/jerome-gutierrez-622819234/", name: "linkedin" },
];

export default function Social({ direction }) {
  return (
    <Grid container direction={direction || "row"} spacing={1}>
      {socialItems.map((item) => (
        <Grid item key={item.name}>
          <Link href={item.url}>
            <IconButton>
              <item.icon style={{ color: "#f50057" }}/>
            </IconButton>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}