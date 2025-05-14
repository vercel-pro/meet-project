import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const CallRoomComponent = () => {

    const {roomCode} = useParams()
    const myMeeting = async(element) => {
        const appID = "1644128239";
        const serverSecret = "57fc94e7bc07c8b784de8befd2633ee5";
        const kitToken = ZegoUIKitPrebuilt
    }


    return (
        <>
            ${roomCode}
        </>
    );
};

export default CallRoomComponent;