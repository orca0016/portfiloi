import { ForumRounded } from "@mui/icons-material";
import { 
  Card,
  CardContent,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";

import { Helmet } from "react-helmet-async";
import { CustomDivider } from "../components/common";
import { CommentsSlider } from "../components/pages";


const Comment = ({ helmetTitle }) => {

  const theme = useTheme();



  
  return (
    <>
      <Card
        sx={{
          height: "100vh",
          backgroundColor:
            theme.palette.mode === "dark" ? grey[600] : "whitesmoke",
          overflowY: "scroll",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Helmet>
          <title>{helmetTitle}</title>
        </Helmet>
        <CardContent>
          <CustomDivider
            bColor="success.main"
            cColor="success"
            icon={<ForumRounded />}
            align="center"
            text="نظرات دانشجویان"
          />
          <CommentsSlider/>
        </CardContent>
      </Card>
    </>
  );
};

export default Comment;
