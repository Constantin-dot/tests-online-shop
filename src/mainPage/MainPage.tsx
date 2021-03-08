import React from 'react'
import classes from './MainPage.module.css'
import { NavLink } from 'react-router-dom'
import { Grid, Paper } from '@material-ui/core'
import { ShopItem } from '../shopItem/ShopItem'

let shopItems = [
    {id: "1", title: "A", description: "sfdasf asdfasdf afda;kj;kj ;kjas"},
    {id: "2", title: "B", description: "a;sjf;lj ;jasfd;lj ;klsjdf;al"},
    {id: "3", title: "C", description: "aj;sdf;ajsd ;j;alsdkjf;lkj a;kjs"},
    {id: "4", title: "D", description: ";jlj;lj;lk ;kj;lasdjf;lkj ;jkjsdlfj; j"},
    {id: "5", title: "E", description: "psoiduwej ; sjdwoj j;jfe"},
    {id: "6", title: "F", description: "l;jer;lj ;kjerjw;lj ;kjerw"}
]

export const MainPage: React.FC = () => {
    return <div className={classes.main}>
        <div className={classes.header}>
            <NavLink to={'./cart'} className={classes.link}>My cart</NavLink>
        </div>
        <Grid container spacing={3} style={{maxWidth: "800px"}}>
            {
                shopItems.map( shIt => {
                    return <Grid item key={shIt.id}>
                        <Paper style={{padding: '10px', width: "200px"}}>
                            <ShopItem title={shIt.title} description={shIt.description} />
                        </Paper>
                    </Grid>
                })
            }
        </Grid>
    </div>
}