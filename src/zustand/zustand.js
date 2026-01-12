import {create} from 'zustand';

const zustandStore = create((set) => ({
    currency: 'usd',
    setCurrency: (newCurrency) => set((state) =>{
        return {
            ...state,
            currency: newCurrency
        }
    })
}));

export default zustandStore;