// components/JsTest.tsx

"use client";

import { useEffect, useState } from "react";

export default function JsTest() {
    const [status, setStatus] = useState("React has not run");

    useEffect(() => {
        setStatus("React is running!");
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                bottom: "10px",
                left: "10px",
                zIndex: 999999,
                padding: "15px",
                background: "black",
                color: "white",
                fontSize: "18px",
            }}
        >
            {status}
        </div>
    );
}