import { useState } from "react";

import { Typography } from "@mui/material";
import { RandomReveal } from "react-random-reveal";

import SocialMediaIcons from "../SocialMediaIcons";
import ThemeActionButton from "../ThemeActionButton";
import { alphabetPersian } from "../../constants/alphabetPersian";
import { CustomAvatar } from "../common";

const SidebarHeader = () => {
  const [start, setStart] = useState(false);
  const avatar =
    "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.2.1468692298.1693819683&semt=sph";
  return (
    <>
      <ThemeActionButton />

      <CustomAvatar avatar={avatar} size={200} fallback="MM" />

      <Typography variant="h6" color="#F93C92">
        <Typography variant="caption" color="tomato">
          {" {{ "}
        </Typography>
        <RandomReveal
          isPlaying
          duration={4}
          characterSet={alphabetPersian}
          characters="محمد مشهدی"
          onComplete={() => setStart(true)}
        />

        <Typography variant="caption" color="tomato">
          {" }} "}
        </Typography>
      </Typography>
      {start && (
        <Typography variant="caption" color="gray">
          <Typography variant="caption" color="tomato">
            [[{" "}
          </Typography>
          <RandomReveal
            isPlaying
            duration={4}
            characterSet={alphabetPersian}
            characters="توسعه دهنده فرانت اند و برنامه نویس"
          />
          <Typography variant="caption" color="tomato">
            {" "}
            ]]
          </Typography>
        </Typography>
      )}
      <SocialMediaIcons />
    </>
  );
};

export default SidebarHeader;
