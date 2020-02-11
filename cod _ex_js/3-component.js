//StyleSheet
//-> npm install styled-components --save
import React from 'react';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
        flex:1;
        background-color:blue;
`;
const Texto = styled.Text`
    color:${props=>props.cor};
    font-size:30px;
`;

export default () => {
    return (
        <Page>
            <Texto cor="red">Texto</Texto>
            <Texto cor="yellow">Texto</Texto>
        </Page>
    )
}