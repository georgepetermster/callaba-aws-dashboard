import React from "react";
export default function BlockHeader({size = 1, text = ''}) {
    return (
        <div className={`block-header h${size}`}>{text}</div>
    )
}
