import * as React from 'react';
import { TouchableOpacity } from 'react-native'
import { 
    Container, 
    Wrapper_Header,
    Styled_Menu_Icon,
} from '../styles/Info/style';

import Description from '../props/Description';

export default function Home({ navigation }) {
  return (
    <Container>
        <Wrapper_Header>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Styled_Menu_Icon />
            </TouchableOpacity>
        </Wrapper_Header>

        <Description />

    </Container>
  );
}
