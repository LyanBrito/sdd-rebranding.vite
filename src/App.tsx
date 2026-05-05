import Header from "./components/Header.tsx";
import Button from "./components/Button.tsx";
import * as S from "./styles/base/globalStyles.ts";
import * as I from "./assets/icons/Icons.tsx";
import ProjectsContainer from "./components/projects/ProjectsContainer.tsx";
import QuoteComponent from "./components/Carousel.tsx";
import ServicesSection from "./components/services/ServicesSection.tsx";

export default function App() {

    return (
        <S.PageContainer>
            <Header page="/"/>
            <S.HeroContent>
                <S.ContentWrapper>
                    <S.HeroTitle>Empresas sólidas precisam ⌘ de um sistema escalável</S.HeroTitle>
                    <S.ButtonWrapper>
                        <Button ref="/" isPrimal label="Ver Serviços"/>
                        <Button ref="/" hasIcon label="Solicitar Orçamento"/>
                    </S.ButtonWrapper>
                </S.ContentWrapper>
                <I.PlaceholderPreview
                    style={{borderLeft: '4px solid black', borderRight: '4px solid black'}}
                />
            </S.HeroContent>
            <QuoteComponent/>
            <ProjectsContainer/>
            <ServicesSection/>
            <S.FooterContainer>
                <S.FooterLogo>Suporte de Domingo</S.FooterLogo>
                <S.BackWrapepr className="backWrapper">
                    <S.FooterSubtitle>Voltar na Página</S.FooterSubtitle>
                    <S.FooterNav>
                        <S.FooterNavLink href="/">Inĩcio</S.FooterNavLink>
                        <S.FooterNavLink href="/">Produtos</S.FooterNavLink>
                        <S.FooterNavLink href="/">Serviços</S.FooterNavLink>
                        <S.FooterNavLink href="/">Contatos</S.FooterNavLink>
                    </S.FooterNav>
                    <Button hasIcon label="Solicitar Orçamento" ref="/" />
                    <S.FooterSocialNav className="socialNav">
                        <I.ArrowIcon />
                        <I.ArrowIcon />
                        <I.ArrowIcon />
                    </S.FooterSocialNav>
                </S.BackWrapepr>
            </S.FooterContainer>
        </S.PageContainer>
    )
}