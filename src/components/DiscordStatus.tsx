import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DiscordStatus = () => {
    const [activity, setActivity] = useState('');
    const [details, setDetails] = useState('');
    const [largeImage, setLargeImage] = useState('');
    const [fileImage, setFileImage] = useState('');
    const [timestamps, setTimestamps] = useState({ start: 0, end: 0 });
    const [fileIcon, setFileIcon] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isIdle, setIsIdle] = useState(false);
    const [isVSCode, setIsVSCode] = useState(false);

    useEffect(() => {
        const fetchDiscordStatus = async () => {
            try {
                const response = await axios.get(
                    'https://api.lanyard.rest/v1/users/746276722902695957'
                );
                const { data } = response;

                const vsCodeActivity = data?.data?.activities?.find(
                    (activity: { name: string }) => activity?.name === 'Visual Studio Code'
                );

                if (vsCodeActivity) {
                    setActivity(vsCodeActivity.name);
                    setDetails(vsCodeActivity.details);
                    setLargeImage(vsCodeActivity.assets?.large_image ?? '');
                    setTimestamps(vsCodeActivity.timestamps ?? { start: 0, end: 0 });
                    const fileExtension = vsCodeActivity.fileUri.split('.').pop();
                    const fileIcon = (fileExtension || '');
                    setFileIcon(fileIcon);
                    setIsVSCode(true);
                } else {
                    setIsVSCode(false);
                }
            } catch (error) {
                console.error('Error fetching Discord status:', error);
            }
        };

        fetchDiscordStatus();
    }, []);

    const formatTimestamp = (timestamp: number): string => {
        const totalSeconds = Math.floor((Date.now() - timestamp) / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return `${hours}h ${minutes}m ${seconds}s`;
    };

    return (
        <div className="discord-status">
            <div className="status-card">
                <div className="activity">
                    <div className="activity-info">
                        <h2>{activity}</h2>
                        <p>{details}</p>
                        <p>Total Time: {formatTimestamp(timestamps.start)}</p>
                    </div>
                    <p className="text-xxs">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-current h-[1.1em] inline" viewBox="0 0 24 24"><path fill="#888888" d="m21.29 4.1l-4.12-2a1.36 1.36 0 0 0-.48-.1h-.08a1.18 1.18 0 0 0-.72.24l-.14.12l-7.88 7.19L4.44 7a.83.83 0 0 0-.54-.17a.88.88 0 0 0-.53.17l-1.1 1a.8.8 0 0 0-.27.61a.84.84 0 0 0 .27.62l3 2.71l-3 2.72a.84.84 0 0 0 0 1.23l1.1 1a.89.89 0 0 0 .6.22a.93.93 0 0 0 .47-.17l3.43-2.61l7.88 7.19a1.2 1.2 0 0 0 .76.36h.17a1 1 0 0 0 .49-.12l4.12-2a1.25 1.25 0 0 0 .71-1.1V5.23a1.26 1.26 0 0 0-.71-1.13zM17 16.47l-6-4.53l6-4.53z" /></svg> Visual Studio Code
                    </p>
                </div>
                </div>
            </div>
    );
};

export default DiscordStatus;
