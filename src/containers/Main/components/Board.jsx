import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {Grid, Skeleton} from '../../../components';
import Card from './Card';

function Board({data}){
    const { cases, todayDeaths, recovered, deaths, todayCases } = data;

    const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

    return (
        <Grid container spacing = {4}>
            <Grid item xs={12} md={3}> 
                <Card value={getValue(cases).toLocaleString('pt-BR')} label="Total de casos" color="#5D78FF" />
            </Grid>
            <Grid item xs={12} md={3}> 
                <Card value={getValue(todayDeaths).toLocaleString('pt-BR')} label="Óbito de hoje" color="#F7B829" />
            </Grid>
            <Grid item xs={12} md={3}> 
                <Card value={getValue(todayCases).toLocaleString('pt-BR')} label="Casos de hoje" color="#000" />
            </Grid>
            <Grid item xs={12} md={3}> 
                <Card value={getValue(deaths).toLocaleString('pt-BR')} label="Total de óbitos" color="#E95078" />
            </Grid>
            <Grid item xs={12} md={3}> 
                <Card value={getValue(recovered).toLocaleString('pt-BR')} label="Total de recuperados" color="#67C887" />
            </Grid>
        </Grid>
    )
}

export default memo(Board);