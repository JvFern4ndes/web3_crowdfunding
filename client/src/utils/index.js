import Web3 from 'web3';

export const daysLeft = (deadline) => {
    const difference = new Date(deadline).getTime() - Date.now();
    const remainingDays = difference / (1000 * 3600 * 24);

    return remainingDays.toFixed(0);
};

export const calculateBarPercentage = (goal, raisedAmount) => {
    const percentage = Math.round((raisedAmount * 100) / goal);

    return percentage;
};

export const checkIfImage = (url, callback) => {
    const img = new Image();
    img.src = url;

    if (img.complete) callback(true);

    img.onload = () => callback(true);
    img.onerror = () => callback(false);
};

const connectWallet = async () => {
    if (window.ethereum) {
        try {
            // Solicitar ao usuário que conecte a carteira
            await window.ethereum.request({ method: 'eth_requestAccounts' });

            // Criar uma instância do Web3
            const web3 = new Web3(window.ethereum);

            // Obter a conta conectada
            const accounts = await web3.eth.getAccounts();

            // Retornar a conta conectada
            return accounts[0];
        } catch (error) {
            console.error('Erro ao conectar a carteira:', error);
            throw error;
        }
    } else {
        console.error('MetaMask não está instalada');
        throw new Error('MetaMask não está instalada');
    }
};

export default connectWallet;
