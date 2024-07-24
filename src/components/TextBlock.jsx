import React, { useState } from "react";
import useSpeakToText from "../hook/useSpeakToText";
import Alert from 'react-bootstrap/Alert';

const VoiceInput = () => {
    const [textInput, setTextInput] = useState('');
    const [fontSize, setFontSize] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const { isListening, transcript, startListening, stopListening } = useSpeakToText({ continuous: true, lang: "th-TH" });

    const startStopListening = () => {
        if (fontSize === '') {
            setShowAlert(true);
            return;
        }
        setShowAlert(false);
        isListening ? stopVoiceinput() : startListening();
    };

    const stopVoiceinput = () => {
        setTextInput(prevVal => prevVal + (transcript.length ? (prevVal.length ? ' ' : '') + transcript : ''));
        stopListening();
    };

    const handleFontSizeChange = (event) => {
        setFontSize(event.target.value);
        setShowAlert(false);
    };

    const handleClear = () => {
        setTextInput('');
    };

    return (
        <div className="text-container">
            {showAlert && (
                <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
                    กรุณาเลือกขนาดตัวอักษร
                </Alert>
            )}
            <textarea
                className="text-input"
                style={{ fontSize: fontSize || '16px' }}
                disabled={isListening}
                value={isListening ? textInput + (transcript.length ? (textInput.length ? ' ' : '') + transcript : '') : textInput}
                onChange={(e) => { setTextInput(e.target.value); }}
            />
            <div className="button-container">
                <button
                    onClick={() => { startStopListening(); }}
                    className={`speak-button ${isListening ? "listening" : ""}`}
                >
                    {isListening ? "Stop Listening" : "Speak"}
                </button>
                <select
                    onChange={handleFontSizeChange}
                    value={fontSize}
                    className="font-size-select"
                >
                    <option value="" disabled hidden>ขนาดตัวอักษร</option>
                    <option value="12px">12</option>
                    <option value="16px">16</option>
                    <option value="20px">20</option>
                    <option value="24px">24</option>
                    <option value="26px">26</option>
                    <option value="28px">28</option>
                    <option value="36px">36</option>
                    <option value="40px">40</option>
                    <option value="48px">48</option>
                </select>
                <button
                    onClick={handleClear}
                    className="clear-button"
                >
                    Clear
                </button>
            </div>
        </div>
    );
};

export default VoiceInput;
