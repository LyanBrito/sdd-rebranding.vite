"use client"

import * as I from "../assets/icons/Icons.tsx";
import * as S from "./styles.ts";
import {useState} from "react";
import {AnimatePresence, motion} from "motion/react"
import type {Variants} from "motion";

interface LangProps {
    isContainerVisible: boolean;
    menuVariantes: Variants;
}

export default function LangHandler({isContainerVisible, menuVariantes}: LangProps) {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <>
            <S.DropdownContainer
                initial={false}
                animate={isContainerVisible ? "open" : "closed"}
                variants={menuVariantes}
                style={{ pointerEvents: isContainerVisible ? "auto" : "none" }}
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
            <AnimatePresence initial={true}>
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