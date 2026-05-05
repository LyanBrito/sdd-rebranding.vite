"use client"

import * as I from "../assets/icons/Icons.tsx";
import * as S from "./styles.ts";
import {useState} from "react";
import {AnimatePresence, motion} from "motion/react"

export default function LangHandler() {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <>
            <S.DropdownContainer
                as={motion.div}
                onClick={() => setIsVisible(!isVisible)}
                whileTap={{scale: 0.98}}
            >
                {/*Como fiz com o nav, posso tacar as animações direto na criação do styled-component*/}
                <I.GlobeIcon/>
                <S.DDLabel
                    as={motion.p}
                    whileHover={{scale: 0.98}}
                >Mudar Região</S.DDLabel>
                <I.ArrowIcon/>
            </S.DropdownContainer>
            <AnimatePresence initial={false}>
                {isVisible ?
                    <S.LangOptionsWrapper
                        as={motion.div}
                        initial={{opacity: 0, y: -30}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -30}}
                    >
                        <S.LangOptions>
                            <span>🇧🇷</span>
                            Brasil
                        </S.LangOptions>
                        <S.LangOptions>
                            <span>🇺🇸</span>
                            U.S.A
                        </S.LangOptions>
                        <S.LangOptions>
                            <span>🇪🇸</span>
                            España
                        </S.LangOptions>
                    </S.LangOptionsWrapper> : null
                }
            </AnimatePresence>
        </>
    )
}