import { Chip, Divider, Slide, Typography } from "@mui/material"
import { useEffect , useState } from "react"


const CustomDivider = ({bColor , cColor , icon , align , text}) => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);
  return (
    <>
     <Slide
          direction="down"
          in={loading}
          style={{
            transitionDelay: loading ? "200ms" : "0ms",
          }}
        >

     <Divider
                            textAlign={align}
                            sx={{
                                "&::before, &::after": {
                                    borderColor: bColor,
                                },
                            }}
                        >
                            <Chip
                                color={cColor}
                                icon={icon}
                                label={
                                    <Typography
                                        variant="body1"
                                        color="black"
                                        sx={{ textAlign: "center" }}
                                    >
                                        {text}
                                    </Typography>
                                }
                                sx={{ p: 3 }}
                                />
                        </Divider>
                                </Slide>
    </>
  )
}

export default CustomDivider