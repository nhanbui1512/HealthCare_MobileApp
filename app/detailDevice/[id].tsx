import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { BarChart, PieChart } from "react-native-gifted-charts";
import styles from "@/components/DeviceItem/styles";
import CircleChart from "@/components/CircleChart";
import moment from "moment";
import { useLocalSearchParams } from "expo-router";
import { getDataInWeek } from "@/services/statistics";
import { formatWeekData } from "@/utils/statistics";

type WeekDataItem = {
  value: number;
  label: string;
  frontColor?: string; // Optional frontColor property
};

const barDataMonth = [
  { value: 250, label: "Jan" },
  { value: 500, label: "Feb", frontColor: "#177AD5" },
  { value: 745, label: "Mar", frontColor: "#177AD5" },
  { value: 320, label: "Apr" },
  { value: 600, label: "May", frontColor: "#177AD5" },
  { value: 256, label: "Jun" },
  { value: 300, label: "Jul" },
  { value: 300, label: "Aug" },
  { value: 300, label: "Sep" },
  { value: 600, label: "Oct", frontColor: "#177AD5" },
  { value: 300, label: "Nov" },
  { value: 300, label: "Dec" },
];

export default function DetailDevice() {
  const { id } = useLocalSearchParams();

  const [dataWeek, setDataWeek] = useState<WeekDataItem[]>([]);

  useEffect(() => {
    const date = new Date();
    const dateNow = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;

    getDataInWeek(dateNow, id.toString())
      .then((res) => {
        const chartData = formatWeekData(res.data);
        setDataWeek(chartData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          width: "100%",
          height: "100%",
          paddingTop: 30,
          paddingHorizontal: 20,
          paddingBottom: 80,
        }}
      >
        <View style={{ marginBottom: 20 }}>
          <View style={{ padding: 10, ...styles.box }}>
            <BarChart
              backgroundColor={"#fff"}
              width={300}
              barWidth={22}
              barBorderRadius={4}
              frontColor="lightgray"
              data={dataWeek}
              yAxisThickness={0}
              xAxisThickness={0}
            />
          </View>
          <View style={{ marginTop: 16 }}>
            <Text style={{ textAlign: "center", fontSize: 18 }}>
              Heart rates average in a week
            </Text>
          </View>
        </View>

        <View>
          <View style={{ padding: 10, ...styles.box }}>
            <BarChart
              backgroundColor={"#fff"}
              width={300}
              barWidth={10}
              barBorderRadius={4}
              frontColor="lightgray"
              data={barDataMonth}
              yAxisThickness={0}
              xAxisThickness={0}
            />
          </View>
          <View style={{ marginTop: 16 }}>
            <Text style={{ textAlign: "center", fontSize: 18 }}>
              Heart rates in a year
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 40 }}>
          <CircleChart />
        </View>
      </View>
    </ScrollView>
  );
}
