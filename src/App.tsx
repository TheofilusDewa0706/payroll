import { ChevronLeft, ChevronRight } from "lucide-react";
import { ComboboxDemo } from "./components/ComboboxDemo";
import { Button } from "./components/ui/button";
import { useState, useEffect } from "react";
import Grafik from "./assets/Grafik.png";
import Kelas from "./assets/Kelas.png";
import ExpandableTable from "./components/ExpandableTable";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const months = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

function App() {
  const [monthChange, setMonthChange] = useState(new Date().getMonth());
  const [yearChange, setYearChange] = useState(new Date().getFullYear());
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState<number>(0);
  const [totalMonthlyPendapatan, setTotalMonthlyPendapatan] =
    useState<number>(0);
  const [activeClasses, setActiveClasses] = useState<number>(0); // State baru untuk kelas aktif

  useEffect(() => {
    setCurrentMonth(monthChange);
  }, [monthChange]);

  const handleTotalPendapatanChange = (total: number) => {
    setTotalMonthlyPendapatan(total);
  };

  // Callback untuk menangkap perubahan jumlah kelas aktif dari ExpandableTable
  const handleActiveClassesChange = (count: number) => {
    setActiveClasses(count);
  };

  const formatCurrency = (amount: number): string => {
    return (
      new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      })
        .format(amount)
        .replace("IDR", "Rp ") + ",-"
    );
  };

  function handlePrevMonth() {
    setMonthChange((prevMonth) => {
      if (prevMonth === 0) {
        setYearChange((prevYear) => prevYear - 1);
        return 11;
      }
      return prevMonth - 1;
    });
  }

  function handleNextMonth() {
    setMonthChange((prevMonth) => {
      if (prevMonth === 11) {
        setYearChange((prevYear) => prevYear + 1);
        return 0;
      }
      return prevMonth + 1;
    });
  }

  function handleSubjectSelect(value: string | null) {
    setSelectedSubject(value === "Semua" ? null : value);
  }

  function handleLevelSelect(value: string | null) {
    setSelectedLevel(value === "Semua" ? null : value);
  }

  return (
    <div className="">
      <section className="flex-1 pl-6 pr-6 pt-6" id="stats">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card className="bg-red-500 shadow flex">
            <div className="flex-1 p-4">
              <CardHeader>
                <CardTitle className="text-white">Pendapatan Bulanan</CardTitle>
                <CardDescription className="text-white">
                  jumlah pendapatan tiap bulannya
                </CardDescription>
              </CardHeader>
              <CardContent className="text-white">
                <strong className="text-xl">
                  {formatCurrency(totalMonthlyPendapatan)}
                </strong>
              </CardContent>
            </div>
            <img
              src={Grafik}
              alt="grafik"
              className="w-36 h-auto object-contain"
            />
          </Card>

          <Card className="bg-blue-600 shadow flex">
            <div className="flex-1 p-4">
              <CardHeader>
                <CardTitle className="text-white">Kelas yang Aktif</CardTitle>
                <CardDescription className="text-white">
                  Jumlah Kelas aktif tiap bulan
                </CardDescription>
              </CardHeader>
              <CardContent className="text-white">
                <strong className="text-xl">{activeClasses}</strong>
              </CardContent>
            </div>
            <img
              src={Kelas}
              alt="grafik"
              className="w-36 h-auto object-contain"
            />
          </Card>
        </div>
      </section>

      <section id="bulan">
        <div className="flex-1 pl-6 pr-6 pt-4 items-center justify-between">
          <div className="grid text-center grid-cols-1 gap-4 md:grid-cols-2 grid-flow-row">
            <div className="flex w-[475px] items-center justify-between bg-white rounded  px-4 py-2 ">
              <Button variant="ghost" size="icon" onClick={handlePrevMonth}>
                <ChevronLeft className="h-4 w-4 text-black" />
              </Button>
              <span className="text-md font-semibold">
                {months[monthChange]} {yearChange}
              </span>
              <Button variant="ghost" size="icon" onClick={handleNextMonth}>
                <ChevronRight className="h-4 w-4 text-black" />
              </Button>
            </div>

            <div className="flex gap-4 md:gap-4 items-center justify-end">
              <ComboboxDemo
                frameworks={[
                  { value: "Semua", label: "Semua" },
                  { value: "Bahasa", label: "Bahasa" },
                  { value: "Matematika", label: "Matematika" },
                  { value: "Fisika", label: "Fisika" },
                ]}
                placeholder="Pilih Mata Pelajaran"
                onSelect={handleSubjectSelect}
              />
              <ComboboxDemo
                frameworks={[
                  { value: "Semua", label: "Semua" },
                  { value: "SD", label: "SD" },
                  { value: "SMP", label: "SMP" },
                  { value: "SMA", label: "SMA" },
                ]}
                placeholder="Pilih Jenjang"
                onSelect={handleLevelSelect}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="tabel">
        <div className="flex-1 space-y-4 pr-6 pl-2 ">
          <ExpandableTable
            selectedSubject={selectedSubject}
            selectedLevel={selectedLevel}
            currentMonth={currentMonth}
            onTotalPendapatanChange={handleTotalPendapatanChange}
            onActiveClassesChange={handleActiveClassesChange}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
