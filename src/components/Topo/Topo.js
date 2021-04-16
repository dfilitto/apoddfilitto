import React from 'react';
import {Link} from 'react-router-dom';
import {Header, LogoSite, Itens, SubItens, P, Span,H3} from './TopoStyles';
//import * as S from './TopoStyles';
import '../../css/styleAll.css';


export function Topo(){

    return(
        <>
            <Header>
                <LogoSite id="nasa" src="./imagens/nasa.png" />
                <Itens>
                    <P>Astronomy Picture of the Day</P>
                    <SubItens>
                        <Span>|</Span>
                            <H3><Link to='/'>Foto do dia</Link></H3>
                        <Span>|</Span>
                            <H3><Link to='/desenvolvedores'>Desenvolvedores</Link></H3>
                        <Span>|</Span>
                    </SubItens>
                </Itens>
            </Header>
        </>
    );
}

export default Topo;