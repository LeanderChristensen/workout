import React from 'react';
import {
  Page,
  Navbar,
  List,
  ListInput,
  ListItem,
  Toggle,
  BlockTitle,
  Button,
  Range,
  Block,
} from 'framework7-react';

const FormPage = () => (
  <Page name="Legs 1">
    <Navbar title="Legs 1" backLink="Back"></Navbar>

    <BlockTitle>Bench Press</BlockTitle>
    <List strongIos outlineIos dividersIos>
      <ListInput label="Set 1 - Last week: 62.5kg x 6 reps" type="text" placeholder="Weight"></ListInput>
      <ListInput label="Set 2 - Last week: 62.5kg x 6 reps" type="text" placeholder="Weight"></ListInput>
      <ListInput label="Set 3 - Last week: 62.5kg x 6 reps" type="text" placeholder="Weight"></ListInput>
    </List>
    <BlockTitle>Machine Shoulder Press</BlockTitle>
    <List strongIos outlineIos dividersIos>
      <ListInput label="Set 1 - Last week: 20kg x 12 reps" type="text" placeholder="Weight"></ListInput>
      <ListInput label="Set 2- Last week: 20kg x 12 reps" type="text" placeholder="Weight"></ListInput>
      <ListInput label="Set 3 - Last week: 20kg x 12 reps" type="text" placeholder="Weight"></ListInput>
    </List>
  </Page>
);

export default FormPage;
