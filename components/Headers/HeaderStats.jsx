import React, { useEffect, useState } from "react";
import CardStats from "components/Cards/CardStats";

export default function HeaderStats() {
  const [listSantri, setlistSantri] = useState([]);
  useEffect(() => {
    fetch("/api/santri/map-santri-api")
      .then((res) => res.json())
      .then((data) => setlistSantri(data));
  }, []);

  const jumlahSantri = listSantri.length;
  // console.log(jumlahSantri, "jumlah santri");

  return (
    <>
      {/* Header */}
      <div className="relative md:pt-32 pb-32 pt-12">
        <div className="px-4 md: 10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-4/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Total User"
                  statTitle={jumlahSantri}
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-4/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Uang Masuk"
                  statTitle="27.692.300"
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-4/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Uang Keluar"
                  statTitle="19.766.200"
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-4/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Sisa Saldo"
                  statTitle="7.926.100"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
