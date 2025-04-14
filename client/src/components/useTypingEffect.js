import { useState, useEffect } from "react";

const useTypingEffect = (texts, speed = 20, pause = 1000) => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const currentText = texts[index];

            if (isDeleting) {
                setText((prev) => prev.slice(0, -1));
                if (text === "") {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % texts.length);
                }
            } else {
                setText((prev) => currentText.slice(0, prev.length + 1));
                if (text === currentText) {
                    setTimeout(() => setIsDeleting(true), pause);
                }
            }
        };

        const typingInterval = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);
        return () => clearTimeout(typingInterval);
    }, [text, isDeleting, index, texts, speed, pause]);

    return text;
};

export default useTypingEffect;
