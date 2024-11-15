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

type DataHeart = {
  _id: string;
  user_id: string;
  device_id: string;
  heart_rate: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type DataEntry = {
  day: number;
  records: DataHeart[];
  average: number;
};

export function formatMonthData(data: DataEntry[]): WeekDataItem[] {
  return data?.map((item) => {
    return {
      label: item.day.toString(),
      value: item.average,
      fontColor: "#177AD5",
    };
  });
}

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
