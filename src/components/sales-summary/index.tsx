import SalesSummaryCard from './sales-summary-card';

import { ReactComponent as AvatarIcon } from '../../assets/person-icon.svg';
import { ReactComponent as ChartIcon } from '../../assets/chart-icon.svg';
import { ReactComponent as LoadingIcon } from '../../assets/loading-icon.svg';
import { ReactComponent as DoneIcon } from '../../assets/done-icon.svg';

import './styles.css';
import { FilterData, SalesSummaryData } from '../../types';
import { useEffect, useMemo, useState } from 'react';
import { buildFilterParams, makeRequest } from '../../utils/request';

type Props = {
  filterData?: FilterData;
};

const initialSummary = {
  sum: 0,
  min: 0,
  max: 0,
  avg: 0,
  count: 0
};

export default function SalesSummary({ filterData }: Props) {
  const [summary, setSummary] = useState<SalesSummaryData>(initialSummary);
  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest.get<SalesSummaryData>('/sales/summary', { params }).then((response) => {
      setSummary(response.data);
    });
  }, [params]);

  return (
    <div className="sales-summary-container">
      <SalesSummaryCard value={summary?.avg?.toFixed(2)} label="Média" icon={<DoneIcon />} />
      <SalesSummaryCard value={summary?.count} label="Quantidade" icon={<LoadingIcon />} />
      <SalesSummaryCard value={summary?.min} label="Mínima" icon={<ChartIcon />} />
      <SalesSummaryCard value={summary?.max} label="Máxima" icon={<AvatarIcon />} />
    </div>
  );
}
