import React from "react";

const MessagePlaceholder = ({ message, sender }) => {
    const UserStyle = {
        margin: "10px 0",
        padding: "12px 18px",
        borderRadius: "15px",
        backgroundColor: "#1a1a1a",
        color: "#fff",
        maxWidth: "70%",
        alignSelf: "flex-end",
        marginLeft: "auto",
        marginRight: "20px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
    };

    const BotStyle = {
        margin: "10px 0",
        padding: "12px 18px",
        borderRadius: "15px",
        backgroundColor: "#2f2f2f",
        color: "#fff",
        maxWidth: "70%",
        alignSelf: "flex-start",
        marginLeft: "20px",
        marginRight: "auto",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
    };

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={sender === 'user' ? UserStyle : BotStyle}>
                {message}
            </div>
        </div>
    );
};

export default MessagePlaceholder;
