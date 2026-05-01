import Header from "./components/Header.tsx";
import Button from "./components/Button.tsx";
import * as S from "./styles/base/globalStyles.ts";
import * as I from "./assets/icons/Icons.tsx";


export default function App() {

    return (
        <S.PageContainer>
            <Header page="/"/>
            <S.HeroContent>
                <S.ContentWrapper>
                    <S.HeroTitle>Empresas sólidas precisam ⌘ de um sistema escalável</S.HeroTitle>
                    <S.ButtonWrapper>
                        <Button ref="/" isPrimal label="Ver Serviços" />
                        <Button ref="/" hasIcon label="Solicitar Orçamento" />
                    </S.ButtonWrapper>
                </S.ContentWrapper>
                <I.PlaceholderPreview
                    style={{ borderLeft: '4px solid black', borderRight: '4px solid black' }}
                />
            </S.HeroContent>
        </S.PageContainer>
    )
}