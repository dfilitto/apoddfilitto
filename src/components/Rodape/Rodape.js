import React from 'react';
import {Footer,LinkRedes,LogoDfilitto} from './RodapeStyles';
//import * as Styles from './RodapeStyles';

function Rodape(){
    return(
        <>
            <Footer>
                <LinkRedes>
                    <a href="https://www.facebook.com/danilo.filitto" target="_blank"><i class="fab fa-facebook fa-2x"></i></a>
                    <a href="https://www.instagram.com/dfilitto/" target="_blank"><i class="fab fa-instagram fa-2x"></i></a>
                    <a href="https://www.youtube.com/channel/UCryuJNaryiAa4vQaO2_RXtw" target="_blank"><i class="fab fa-youtube  fa-2x"></i></a>
                </LinkRedes>
                <LogoDfilitto>
                    <img id="Banner" src="./imagens/dfilitto.png" />
                </LogoDfilitto>
            </Footer>
        </>
    );
}
export default Rodape;