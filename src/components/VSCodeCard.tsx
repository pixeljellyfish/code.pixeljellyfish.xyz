import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VSCodeCard = () => {
    const [activityImage, setActivityImage] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchActivityImage = async () => {
            try {
                const response = await axios.get(
                    'https://api.lanyard.rest/v1/users/746276722902695957'
                );
                const { data } = response;
                const vsCodeActivity = data.activities.find(
                    (activity: any) => activity.name === 'Visual Studio Code' && activity.assets && activity.assets.large_image
                );

                if (vsCodeActivity) {
                    setActivityImage(vsCodeActivity.assets.large_image);
                }
            } catch (error) {
                console.error('Error fetching Discord activity image:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchActivityImage();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!activityImage) {
        return <div>No VS Code activity</div>;
    }

    return (
        <div>
            <h1>VS Code Activity Card</h1>
            <div>
                <img src={activityImage} alt="VS Code Discord activity" />
            </div>
        </div>
    );
};

export default VSCodeCard;
