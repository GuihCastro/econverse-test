import axios from 'axios';

export const fetchProducts = async () => {
    const response = await axios.get('src/assets/api/produtos.json');
    return response.data;
};
