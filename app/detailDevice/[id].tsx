import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { BarChart, PieChart } from "react-native-gifted-charts";
import styles from "@/components/DeviceItem/styles";
import CircleChart from "@/components/CircleChart";
import moment from "moment";
import { useLocalSearchParams } from "expo-router";
import {
  getDataInMonth,
  getDataInWeek,
  getLatestOxygen,
} from "@/services/statistics";
import { formatMonthData, formatWeekData } from "@/utils/statistics";

type WeekDataItem = {
  value: number;
  label: string;
  frontColor?: string; // Optional frontColor property
};

type HeartAndOxy = {
  _id: string;
  user_id: string;
  device_id: string;
  heart_rate: number;
  oxygen: number;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  fromNowOn: string;
};

export default function DetailDevice() {
  const { id } = useLocalSearchParams();

  const [dataWeek, setDataWeek] = useState<WeekDataItem[]>([]);
  const [dataMonth, setDataMonth] = useState<WeekDataItem[]>([]);
  const [oxygenData, setOxygenData] = useState<HeartAndOxy>();

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

    getDataInMonth({
      date: dateNow,
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      deviceId: id.toString(),
    })
      .then((res) => {
        const formatedData = formatMonthData(res.data);
        setDataMonth(formatedData);
      })
      .catch((err) => {
        console.log(err);
      });

    getLatestOxygen(id.toString())
      .then((res) => {
        setOxygenData(res.data);
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
              data={dataMonth}
              yAxisThickness={0}
              xAxisThickness={0}
            />
          </View>
          <View style={{ marginTop: 16 }}>
            <Text style={{ textAlign: "center", fontSize: 18 }}>
              Heart rates in a month
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 40 }}>
          <CircleChart
            percent={oxygenData?.oxygen}
            fromNowOn={oxygenData?.fromNowOn}
          />
        </View>
      </View>
    </ScrollView>
  );
}
