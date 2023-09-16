import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Grid } from "@mui/material";
import CardStyle from "../../CardStyle.module.css";
export const MUICard = () => {
  const data = [
    {
      name: "Lion",
      image:
        "https://cdn.britannica.com/29/150929-050-547070A1/lion-Kenya-Masai-Mara-National-Reserve.jpg",
      desc: "The lion is a well-muscled cat with a long body, large head, and short legs. Size and appearance vary considerably between the sexes. The male’s outstanding characteristic is his mane, which varies between different individuals and populations. It may be entirely lacking; it may fringe the face; or it may be full and shaggy, covering the back of the head, neck, and shoulders and continuing onto the throat and chest to join a fringe along the belly. In some lions the mane and fringe are very dark, almost black, giving the cat a majestic appearance. Manes make males look larger and may serve to intimidate rivals or impress prospective mates",
    },
    {
      name: "Tiger",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNuaAfXBwPW9UZmhnUnF-y_jwH0XXbALeS8OGFFaMw&s",
      desc: "The tiger (Panthera tigris) is the largest living cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange fur with a white underside. An apex predator, it primarily preys on ungulates, such as deer and wild boar. It is territorial and generally a solitary but social predator, requiring large contiguous areas of habitat to support its requirements for prey and rearing of its offspring. Tiger cubs stay with their mother for about two years and then become independent, leaving their mother's home range to establish their own.",
    },
    {
      name: "Lion",
      image:
        "https://cdn.britannica.com/29/150929-050-547070A1/lion-Kenya-Masai-Mara-National-Reserve.jpg",
      desc: "The lion is a well-muscled cat with a long body, large head, and short legs. Size and appearance vary considerably between the sexes. The male’s outstanding characteristic is his mane, which varies between different individuals and populations. It may be entirely lacking; it may fringe the face; or it may be full and shaggy, covering the back of the head, neck, and shoulders and continuing onto the throat and chest to join a fringe along the belly. In some lions the mane and fringe are very dark, almost black, giving the cat a majestic appearance. Manes make males look larger and may serve to intimidate rivals or impress prospective mates",
    },
    {
      name: "Tiger",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNuaAfXBwPW9UZmhnUnF-y_jwH0XXbALeS8OGFFaMw&s",
      desc: "The tiger (Panthera tigris) is the largest living cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange fur with a white underside. An apex predator, it primarily preys on ungulates, such as deer and wild boar. It is territorial and generally a solitary but social predator, requiring large contiguous areas of habitat to support its requirements for prey and rearing of its offspring. Tiger cubs stay with their mother for about two years and then become independent, leaving their mother's home range to establish their own.",
    },
    {
      name: "Lion",
      image:
        "https://cdn.britannica.com/29/150929-050-547070A1/lion-Kenya-Masai-Mara-National-Reserve.jpg",
      desc: "The lion is a well-muscled cat with a long body, large head, and short legs. Size and appearance vary considerably between the sexes. The male’s outstanding characteristic is his mane, which varies between different individuals and populations. It may be entirely lacking; it may fringe the face; or it may be full and shaggy, covering the back of the head, neck, and shoulders and continuing onto the throat and chest to join a fringe along the belly. In some lions the mane and fringe are very dark, almost black, giving the cat a majestic appearance. Manes make males look larger and may serve to intimidate rivals or impress prospective mates",
    },
    {
      name: "Tiger",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNuaAfXBwPW9UZmhnUnF-y_jwH0XXbALeS8OGFFaMw&s",
      desc: "The tiger (Panthera tigris) is the largest living cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange fur with a white underside. An apex predator, it primarily preys on ungulates, such as deer and wild boar. It is territorial and generally a solitary but social predator, requiring large contiguous areas of habitat to support its requirements for prey and rearing of its offspring. Tiger cubs stay with their mother for about two years and then become independent, leaving their mother's home range to establish their own.",
    },
  ];
  return (
    <Grid container spacing={1} sx={{ marginTop: "100px;" }}>
      {data.map((item) => {
        return (
          <>
            <Grid item lg={4} md={6}>
              <Card className={CardStyle.card}>
                <CardActionArea>
                  <CardMedia component="img" height="140" image={item.image} />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className={CardStyle.cardText}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className={CardStyle.cardDesc}
                    >
                      {item.desc}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </>
        );
      })}
    </Grid>
  );
};
