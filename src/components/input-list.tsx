import React from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField/TextField"
import Button from "@material-ui/core/Button"

export const InputList: React.FC = () => {
  return (
    <Grid container={true} spacing={2} direction={"column"} alignItems={"center"} component={"div"}>
      <Grid item={true} component={"div"}>
        <TextField label="Who?" fullWidth={true} />
      </Grid>
      <Grid component={"div"} item={true}>
        <TextField label="What?" />
      </Grid>
      <Grid component={"div"} item={true}>
        <TextField label="When?" />
      </Grid>
      <Grid component={"div"} item={true}>
        <TextField label="Where?" />
      </Grid>
      <Grid component={"div"} item={true}>
        <Button href={""} color={"primary"} variant={"contained"}>
          Get sentence
        </Button>
      </Grid>
    </Grid>
  )
}
