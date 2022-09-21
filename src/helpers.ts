import { SalesByPaymentMethod, SalesByStoreData } from './types';

export const buildSalesByStoreChart = (sales: SalesByStoreData[]) => {
  const labels = sales.map((sale) => sale.storeName);
  const series = sales.map((sum) => sum.sum);

  return {
    labels,
    series
  };
};

export const buildSalesByPaymentMethodChart = (sales: SalesByPaymentMethod[]) => {
  const labels = sales.map((sale) => sale.description);
  const series = sales.map((sum) => sum.sum);

  return {
    labels,
    series
  };
};
