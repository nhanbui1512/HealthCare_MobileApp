type WeekDataItem = {
  value: number;
  label: string;
  frontColor?: string; // Optional frontColor property
};

export function formatWeekData(data: Record<string, number>): WeekDataItem[] {
  const result: WeekDataItem[] = Object.entries(data).map(([label, value]) => ({
    value,
    label,
  }));

  // Sort the data by value in descending order
  const sortedData = [...result].sort((a, b) => b.value - a.value);

  sortedData.slice(0, 3).forEach((item) => {
    item.frontColor = "#177AD5";
  });

  return result;
}