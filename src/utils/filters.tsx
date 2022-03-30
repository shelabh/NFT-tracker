const EN_US: string = 'en-US';
const CURRENCY: string = 'currency';
const USD: string = 'USD';

export const formatCurrency = (value: number): string => {
    const formatter = new Intl.NumberFormat(EN_US, {
        style: CURRENCY,
        currency: USD
    });

    return formatter.format(value);
};

export const convertToPercentage = (value: number): string => {
    return (value * 100).toFixed(2) + '%';
};