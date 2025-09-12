// Alert.jsx
import { useEffect } from "react";

export default function Alert({ message, show, duration = 3000 }) {
    useEffect(() => {
        if (!show) return;
        const timer = setTimeout(() => { }, duration);
        return () => clearTimeout(timer);
    }, [show, duration]);

    if (!show) return null;

    return (
        <div
            className="alert alert-success position-fixed shadow"
            role="alert"
            style={{ top: "70px", right: "1rem", zIndex: 2000 }}
        >
            {message}
        </div>
    );
}
