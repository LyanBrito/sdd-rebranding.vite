import Header from "./components/Header.tsx";
import {motion} from "motion/react";

export default function App() {
    const box = {
        width: 100,
        height: 100,
        backgroundColor: "#ff0088",
        borderRadius: 5,
    }
    return (
        <>
            <Header page="/"/>
            <motion.div style={box}
                        animate={{rotate: 360}}
                        transition={{duration: 1}}/>
        </>
    )
}