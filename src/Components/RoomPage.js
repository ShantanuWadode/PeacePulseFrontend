import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function RoomPage() {
  const { id } = useParams();
  const myMeeting = async (element) => {
    const appID = 500760531;
    const serverSecret = "cbfab7e46533c0ea2340f6b13453d067";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      id,
      Date.now().toString(),
      'Enter Name',
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
        
      }
    });
  };

  return <div>
    <div ref={myMeeting} style={{ width: '100vw', height: '100vh' }}/> 
        {/* <div ref={myMeeting}/> */}
  </div>;
}

export default RoomPage;
