import React from "react";
import { ScrollView, Text, View } from "react-native";
import { BarChart, PieChart } from "react-native-gifted-charts";
import styles from "@/components/DeviceItem/styles";
import CircleChart from "@/components/CircleChart";
import moment from "moment";

const generateSampleData = (): { [key: string]: number } => {
  const today = moment();
  const startDate = moment().subtract(365, "days");
  const data: { [key: string]: number } = {};

  for (let i = 0; i < 365; i++) {
    const day = moment(startDate).add(i, "days");
    // Generate a random value between 0 and 10 for each day
    const randomValue = Math.floor(Math.random() * 10);
    data[day.format("YYYY-MM-DD")] = randomValue;
  }

  return data;
};

const barData = [
  { value: 250, label: "M" },
  { value: 500, label: "T", frontColor: "#177AD5" },
  { value: 745, label: "W", frontColor: "#177AD5" },
  { value: 320, label: "T" },
  { value: 600, label: "F", frontColor: "#177AD5" },
  { value: 256, label: "S" },
  { value: 300, label: "S" },
];

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
              data={barData}
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
