import React from 'react';
import {Container, Menu, Grid, Icon, Label} from "semantic-ui-react";
import Link from 'next/link';

export default function MenuWeb() {
  return (
    <div className="menu">
        <Container>
            <Grid>
                <Grid.Column className = "menu_left" width={6}>
                    <MenuPlatforms/>
                </Grid.Column>

                <Grid.Column className = "menu_right" width={10}>
                    <MenuOption>

                    </MenuOption>
                </Grid.Column>

            </Grid>
        </Container>
    </div>
  )
}


function MenuPlatforms(){
    return(
        <Menu>
            <Link href = "/play-station">
                <Menu.Item as = "a">PlayStation</Menu.Item>
            </Link>
            <Link href = "/Xbox">
                 <Menu.Item as = "a">Xbox</Menu.Item>
            </Link>
            <Link href = "/Switch">
                <Menu.Item as = "a">Switch</Menu.Item>
            </Link>

        </Menu>
    )
}

function MenuOption(){
    return (
        <Menu>
            <Menu.Item>
                <Icon name="user outline"/>
                    Mi Cuenta
            </Menu.Item>
        </Menu>
    )
}