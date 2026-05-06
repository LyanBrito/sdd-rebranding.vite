import * as S from "./styles";
import BackgroundPattern from "../assets/images/backgroundPattern.png";

const services = [
    "UI/UX",
    "Branding",
    "Design",
    "Marketing",
    "Sistemas",
    "Consultoria",
    "Identidade Visual"
];

export default function QuoteComponent() {
    // Duplicamos a lista para o efeito de loop infinito sem saltos
    const listItems = [...services, ...services];

    return (
        <S.QuoteContainer>
            {/* Faixa Superior */}
            <S.BannerStrip>
                <S.ScrollingContainer>
                    {listItems.map((item, index) => (
                        <S.BannerItem key={index}>{item}</S.BannerItem>
                    ))}
                </S.ScrollingContainer>
            </S.BannerStrip>
            <S.QuoteSection bgImg={BackgroundPattern}>
                <S.QuoteSimble>"</S.QuoteSimble>
                <S.QuoteText>Descubra tudo o que podemos oferecer para
                    sua <S.QuoteSpan>transformação digital, e conectar você ao futuro.</S.QuoteSpan>
                </S.QuoteText>
                <S.QuoteSimble>"</S.QuoteSimble>
            </S.QuoteSection>
            <S.BannerStrip>
                <S.ScrollingContainer style={{animationDirection: 'reverse'}}>
                    {listItems.map((item, index) => (
                        <S.BannerItem key={`bottom-${index}`}>{item}</S.BannerItem>
                    ))}
                </S.ScrollingContainer>
            </S.BannerStrip>
        </S.QuoteContainer>
    );
}