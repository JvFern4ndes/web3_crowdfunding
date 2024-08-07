import React, { useState, useEffect } from 'react';

import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context';

const Profile = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [campaigns, setCampaigns] = useState([]);

    const { address, contract, getUserCampaigns } = useStateContext();

    const fetchCampaigns = async () => {
        setIsLoading(true);
        console.log('Fetching campaigns...');
        const data = await getUserCampaigns();
        console.log('Fetched campaigns:', data);
        setCampaigns(data);
        setIsLoading(false);
    };

    useEffect(() => {
        if (contract) {
            console.log('Contract available:', contract);
            fetchCampaigns();
        } else {
            console.log('Contract not available');
        }
    }, [address, contract]);

    return (
        <DisplayCampaigns
            title="All Campaigns"
            isLoading={isLoading}
            campaigns={campaigns}
        />
    );
};

export default Profile;
