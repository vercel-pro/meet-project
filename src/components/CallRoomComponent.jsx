import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const CallRoomComponent = () => {

    const {roomCode} = useParams()

    // generate Kit Token
    const myMeeting = async(element) => {
        const appID = 1644128239;
        const serverSecret = "57fc94e7bc07c8b784de8befd2633ee5";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomCode, Date.now().toString(), "Please enter your name");
        
        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            },
        })
    }


    return (
        <>
            <div ref={myMeeting} className='w-full h-screen bg-green-100'></div>
        </>
    );
};

export default CallRoomComponent;