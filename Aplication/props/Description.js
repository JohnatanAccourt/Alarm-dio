import * as React from 'react';
import { ContainerScroll, ImageLogo, H3, H4, Card, Styled_Star_Icon, Styled_Chat_Icon, TextCard, Link} from '../styles/Info/style';

export default function Description(props){
    return (
        <ContainerScroll>
            <ImageLogo source={require('../assets/images/icon.png')}/>
            <H3 style={{ fontFamily: 'OpenSans_400Regular' }}>
                Esse projeto é focado em ajudar qualquer pessoa que deseja ser lembrado de tomar algum remédio e também de restocar os mesmos.
            </H3>

            <H4 style={{ fontFamily: 'OpenSans_300Light_Italic' }}>
                "Foi inspirado em uma necessidade em ajudar primeiramente familiares próximos que possuem uma idade avançada e em consequência disso acaba se esquecendo de tomar os devidos remédios. Por essa necessidade que esse projeto surgiu."
            </H4>

            <H3 style={{ fontFamily: 'OpenSans_400Regular' }}>
                Espero que esse aplicativo o ajude a cumprir o que nós estamos propondo.
Caso não esteja por favor nos avalie e comente o que poderíamos melhorar.
            </H3>

            <Card>
                <Styled_Star_Icon />
                <TextCard>Avalie-nos! adorariamos de saber o que pensa sobre nosso aplicativo, e também se tiver algum problema ou sujestão nos avalie. 😀</TextCard>
                <Link>Google Play</Link>
            </Card>

            <Card>
                <Styled_Chat_Icon />
                <TextCard>Gostaria de entrar em contato para Parceria? 
entre em contato através do e-mail abaixo:</TextCard>
                <Link>johnatan@gmail.com</Link>
            </Card>
        </ContainerScroll>  
    )
}