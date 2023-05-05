/** @format */

import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav"
                "aside main"`,
        }}
      >
        <GridItem area="nav" bg="orange.200">
          Nav
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="yellow.200">
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="skyblue">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
