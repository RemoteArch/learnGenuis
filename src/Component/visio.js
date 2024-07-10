import React, { useEffect, useRef } from 'react';

const VideoConference = () => {
  const meetRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://meet.jit.si/external_api.js';
    script.async = true;
    script.onload = () => {
      const domain = 'meet.jit.si';
      const options = {
        roomName: 'LearnGeniusWebinar',
        width: '100%',
        height: '500px',
        parentNode: meetRef.current,
        userInfo: {
          displayName: 'Participant',
        },
      };

      const api = new window.JitsiMeetExternalAPI(domain, options);

      return () => {
        api.dispose();
      };
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Visioconférence</h1>
      <div className="bg-white shadow-lg rounded-lg p-8">
        <div className='h-screen' ref={meetRef}></div>
      </div>
    </div>
  );
};

export default VideoConference;