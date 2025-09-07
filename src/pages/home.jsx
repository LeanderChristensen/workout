import React from 'react';
import {
  Page,
  Navbar,
  NavTitleLarge,
  Block,
  BlockTitle,
  List,
  ListItem,
  Button
} from 'framework7-react';

const HomePage = () => (
  <Page name="home">
    <Navbar large sliding={false}>
      <NavTitleLarge>Workouts</NavTitleLarge>
    </Navbar>
    <List strong inset dividersIos>
      <ListItem link="/legsone/" title="Legs 1"/>
      <ListItem link="/pushone/" title="Push 1"/>
      <ListItem link="/pullone/" title="Pull 1"/>
      <ListItem link="/legstwo/" title="Legs 2"/>
      <ListItem link="/pushtwo/" title="Push 2"/>
      <ListItem link="/pulltwo/" title="Pull 2"/>
    </List>
  </Page>
);
export default HomePage;