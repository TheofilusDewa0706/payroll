import React, { useState, useMemo, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getExpandedRowModel,
  getPaginationRowModel,
  flexRender,
  SortingState,
  getSortedRowModel,
  ExpandedState,
  ColumnDef,
} from "@tanstack/react-table";
import { ComboboxDemo } from "./ComboboxDemo";
import { ArrowUpDown, ChevronDown, Ellipsis } from "lucide-react";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Detail = {
  hari: string;
  tanggal: string;
  pukul: string;
  biayaperjam: string;
  subscription: string;
  pendapatanhari?: string;
};

type Data = {
  kelas: string;
  jenjang: string;
  pendapatan?: string;
  pendapatankelas?: string;
  details: Detail[];
};

// Sample data: school subjects with subRows
export const dataByMonth: Data[][] = [
  [
    {
      kelas: "Fisika",
      jenjang: "SD",
      pendapatan: "",
      pendapatankelas: "",
      details: [
        {
          hari: "Senin",
          tanggal: "01-Januari",
          subscription: "5",
          pukul: "17.00 - 18.00",
          biayaperjam: "Rp 75.000",
        },
        {
          hari: "Selasa",
          tanggal: "02-Januari",
          subscription: "5",
          pukul: "11.00 - 12.00",
          biayaperjam: "Rp 75.000",
        },
      ],
    },
    {
      kelas: "Fisika",
      jenjang: "SMP",
      pendapatan: "",
      pendapatankelas: "",
      details: [
        {
          hari: "Senin",
          tanggal: "07-Januari",
          pukul: "09.00 - 10.00",
          subscription: "4",
          biayaperjam: "Rp 100.000",
        },
        {
          hari: "Selasa",
          tanggal: "01-Januari",
          pukul: "13.00 - 14.00",
          subscription: "4",
          biayaperjam: "Rp 100.000",
        },
      ],
    },
    {
      kelas: "Fisika",
      jenjang: "SMA",
      pendapatan: "",
      pendapatankelas: "",
      details: [
        {
          hari: "Senin",
          tanggal: "09-Januari",
          pukul: "11.00 - 12.00",
          subscription: "7",
          biayaperjam: "Rp 150.000",
        },
        {
          hari: "Selasa",
          tanggal: "10-Januari",
          pukul: "15.00 - 16.00",
          subscription: "7",
          biayaperjam: "Rp 150.000",
        },
      ],
    },
    {
      kelas: "Matematika",
      jenjang: "SD",
      pendapatan: "",
      pendapatankelas: "",
      details: [
        {
          hari: "Rabu",
          tanggal: "03-Januari",
          pukul: "13.00 - 14.00",
          subscription: "10",
          biayaperjam: "Rp 150.000",
        },
        {
          hari: "Kamis",
          tanggal: "04-Januari",
          pukul: "14.00 - 15.00",
          subscription: "10",
          biayaperjam: "Rp 150.000",
        },
      ],
    },
    {
      kelas: "Matematika",
      jenjang: "SMP",
      pendapatan: "",
      pendapatankelas: "",
      details: [
        {
          hari: "Rabu",
          tanggal: "04-Januari",
          pukul: "15.00 - 16.00",
          subscription: "8",
          biayaperjam: "Rp 175.000",
        },
        {
          hari: "Kamis",
          tanggal: "05-Januari",
          pukul: "15.00 - 16.00",
          subscription: "8",
          biayaperjam: "Rp 175.000",
        },
      ],
    },
    {
      kelas: "Matematika",
      jenjang: "SMA",
      pendapatan: "",
      pendapatankelas: "",
      details: [
        {
          hari: "Rabu",
          tanggal: "01-Januari",
          pukul: "15.00 - 16.00",
          subscription: "15",
          biayaperjam: "Rp 200.000",
        },
        {
          hari: "Kamis",
          tanggal: "01-Januari",
          pukul: "15.00 - 16.00",
          subscription: "15",
          biayaperjam: "Rp 200.000",
        },
      ],
    },
    {
      kelas: "Bahasa",
      jenjang: "SD",
      pendapatan: "Rp 25.000",
      pendapatankelas: "",
      details: [
        {
          hari: "Rabu",
          tanggal: "01-Januari",
          pukul: "15.00 - 16.00",
          subscription: "3",
          biayaperjam: "Rp 50.000",
        },
        {
          hari: "Kamis",
          tanggal: "01-Januari",
          pukul: "15.00 - 16.00",
          subscription: "3",
          biayaperjam: "Rp 50.000",
        },
      ],
    },
    {
      kelas: "Bahasa",
      jenjang: "SMP",
      pendapatan: "Rp 50.000",
      pendapatankelas: "",
      details: [
        {
          hari: "Rabu",
          tanggal: "01-Januari",
          pukul: "15.00 - 16.00",
          subscription: "2",
          biayaperjam: "Rp 75.000",
        },
        {
          hari: "Kamis",
          tanggal: "01-Januari",
          pukul: "15.00 - 16.00",
          subscription: "2",
          biayaperjam: "Rp 75.000",
        },
      ],
    },
    {
      kelas: "Bahasa",
      jenjang: "SMA",
      pendapatan: "",
      pendapatankelas: "",
      details: [
        {
          hari: "Rabu",
          tanggal: "01-Januari",
          pukul: "15.00 - 16.00",
          subscription: "5",
          biayaperjam: "Rp 100.000",
        },
        {
          hari: "Kamis",
          tanggal: "01-Januari",
          pukul: "15.00 - 16.00",
          subscription: "5",
          biayaperjam: "Rp 100.000",
        },
      ],
    },
  ],
  [
    {
      kelas: "Fisika",
      jenjang: "SD",
      pendapatan: "",
      pendapatankelas: "",
      details: [
        {
          hari: "Senin",
          tanggal: "01-Januari",
          pukul: "17.00 - 18.00",
          subscription: "1",
          biayaperjam: "Rp 75.000",
        },
        {
          hari: "Selasa",
          tanggal: "01-Januari",
          pukul: "11.00 - 12.00",
          subscription: "1",
          biayaperjam: "Rp 75.000",
        },
      ],
    },
  ],
  [
    {
      kelas: "Fisika",
      jenjang: "SD",
      pendapatan: "",
      pendapatankelas: "",
      details: [
        {
          hari: "Senin",
          tanggal: "01-Januari",
          pukul: "17.00 - 18.00",
          subscription: "2",
          biayaperjam: "Rp 75.000",
        },
        {
          hari: "Selasa",
          tanggal: "01-Januari",
          pukul: "11.00 - 12.00",
          subscription: "2",
          biayaperjam: "Rp 75.000",
        },
      ],
    },
  ],
];

const expandedColumns = [
  {
    accessorKey: "hari",
    header: "Hari",
  },
  {
    accessorKey: "tanggal",
    header: "Tanggal",
  },
  {
    accessorKey: "pukul",
    header: "Pukul",
  },
  {
    accessorKey: "subscription",
    header: "Subscription",
  },
  {
    accessorKey: "biayaperjam",
    header: "Biaya per Jam",
  },
  {
    accessorKey: "pendapatanhari",
    header: "Pendapatan Hari",
  },
];

function ExpandableTable({
  selectedSubject,
  selectedLevel,
  currentMonth,
  onTotalPendapatanChange,
  onActiveClassesChange,
}: {
  selectedSubject: string | null;
  selectedLevel: string | null;
  currentMonth: number;
  onTotalPendapatanChange: (total: number) => void; // Tipe dari fungsi callback
  onActiveClassesChange: (activeClasses: number) => void;
}) {
  const [expanded, setExpanded] = useState<ExpandedState>({});
  const [selectedDayFilter, setSelectedDayFilter] = useState<string | null>(
    null
  );

  const dayOptions = [
    { value: "", label: "All" },
    { value: "Senin", label: "Senin" },
    { value: "Selasa", label: "Selasa" },
    { value: "Rabu", label: "Rabu" },
    { value: "Kamis", label: "Kamis" },
    { value: "Jumat", label: "Jumat" },
  ];

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

  // Fungsi perhitungan pendapatan harian
  function calculatePendapatanHari(detail: Detail): number {
    // Menghitung durasi dalam jam
    const [startTime, endTime] = detail.pukul
      .split(" - ")
      .map((time) => time.trim());
    const [startHour, startMinute] = startTime.split(".").map(Number);
    const [endHour, endMinute] = endTime.split(".").map(Number);

    const startInHours = startHour + (startMinute ? startMinute / 60 : 0);
    const endInHours = endHour + (endMinute ? endMinute / 60 : 0);

    const durationInHours = endInHours - startInHours;

    // Menghitung biaya per jam
    const rate = parseFloat(
      detail.biayaperjam.replace(/[^\d,]/g, "").replace(",", ".")
    );

    // Menghitung pendapatan per hari (biaya per jam * durasi * jumlah subscription)
    return durationInHours * rate * parseInt(detail.subscription, 10);
  }

  // Fungsi perhitungan total pendapatan
  function calculateTotalPendapatan(details: Detail[]): number {
    return details.reduce(
      (total, detail) => total + calculatePendapatanHari(detail),
      0
    );
  }

  // Memperbarui data bulan
  const updatedDataByMonth = useMemo(() => {
    return dataByMonth.map((monthData) =>
      monthData.map((row) => {
        const totalPendapatan = calculateTotalPendapatan(row.details);
        return {
          ...row,
          pendapatan: formatCurrency(totalPendapatan), // Format total pendapatan
          details: row.details.map((detail) => ({
            ...detail,
            pendapatanhari: formatCurrency(calculatePendapatanHari(detail)), // Format pendapatan hari
          })),
        };
      })
    );
  }, [dataByMonth]);

  const filteredData = useMemo(() => {
    const monthlyData = updatedDataByMonth[currentMonth] || [];
    return monthlyData.filter((row) => {
      const subjectMatch = selectedSubject
        ? row.kelas === selectedSubject
        : true;
      const levelMatch = selectedLevel ? row.jenjang === selectedLevel : true;
      return subjectMatch && levelMatch;
    });
  }, [selectedSubject, selectedLevel, currentMonth, updatedDataByMonth]);

  const totalPendapatan = useMemo(() => {
    return filteredData.reduce((total, row) => {
      const rowPendapatan =
        parseFloat(row.pendapatan.replace(/[^\d,]/g, "").replace(",", ".")) ||
        0;
      return total + rowPendapatan;
    }, 0);
  }, [filteredData]);

  // Hitung jumlah kelas yang aktif
  const activeClassesCount = useMemo(() => {
    return filteredData.length; // Jumlah kelas adalah panjang array filteredData
  }, [filteredData]);

  // Panggil fungsi callback saat jumlah kelas aktif berubah
  useEffect(() => {
    onActiveClassesChange(activeClassesCount);
  }, [activeClassesCount, onActiveClassesChange]);

  useEffect(() => {
    onTotalPendapatanChange(totalPendapatan);
  }, [totalPendapatan, onTotalPendapatanChange]);

  const [sorting, setSorting] = useState<SortingState>([]);
  const [pageSize, setPageSize] = useState(5);
  const [pageIndex, setPageIndex] = useState(0);

  const columns: ColumnDef<Data, string>[] = [
    {
      accessorKey: "kelas",
      header: ({ column }) => {
        const isSorted = column.getIsSorted();
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Kelas
            {isSorted === "asc"}
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: "jenjang",
      header: ({ column }) => {
        const isSorted = column.getIsSorted();
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Jenjang
            {isSorted === "asc"}
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: "pendapatan",
      header: "Pendapatan",
    },
    {
      id: "expand",
      header: "",
      cell: ({ row }) => (
        <Button
          variant="ghost"
          onClick={() => {
            setExpanded((prev) => {
              const isExpanded = !!prev[row.id as string as keyof typeof prev];
              return isExpanded ? {} : { [row.id]: true };
            });
          }}
          className="ml-auto"
        >
          <ChevronDown className="h-4 w-4" />
        </Button>
      ),
    },
  ];

  const table = useReactTable({
    data: filteredData,
    columns,
    state: {
      expanded,
      sorting,
      pagination: {
        pageSize, // Set initial page size
        pageIndex, // Set initial page index to 0
      },
    },
    onSortingChange: setSorting,
    onExpandedChange: setExpanded,
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="pl-4 pt-4 rounded-lg overflow-hidden">
      <Table className="rounded-lg shadow-lg overflow-hidden">
        <TableHeader className="rounded-t-lg">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="bg-whitetext-center">
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className="border-none px-4 py-2 text-center"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <React.Fragment key={row.id}>
                <TableRow className="hover:bg-gray-50">
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="border-none font-medium text-center "
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
                {row.getIsExpanded() && row.original.details && (
                  <TableRow className="bg-zinc-50">
                    <TableCell
                      colSpan={columns.length}
                      className="border px-4 py-2"
                    >
                      <div className="p-2">
                        <div className="flex justify-between">
                          <strong className="py-2">Details</strong>
                          <div className="pl-5 mb-4">
                            <ComboboxDemo
                              frameworks={dayOptions}
                              placeholder="Pilih hari..."
                              onSelect={setSelectedDayFilter}
                            />
                          </div>
                        </div>
                        <Table className="min-w-full border-collapse border-slate-950 table-auto mt-2 text-center">
                          <TableHeader>
                            <TableRow className="bg-green-300">
                              {expandedColumns.map((col) => (
                                <TableHead
                                  key={col.accessorKey}
                                  className="border-none px-4 py-2 text-center"
                                >
                                  {col.header}
                                </TableHead>
                              ))}
                            </TableRow>
                          </TableHeader>
                          <TableBody className="">
                            {Array.isArray(row.original.details) &&
                              row.original.details
                                .filter((detail) => {
                                  return selectedDayFilter
                                    ? detail.hari === selectedDayFilter
                                    : true;
                                })
                                .map((detail, i) => (
                                  <TableRow key={i} className="font-medium">
                                    {expandedColumns.map((col) => (
                                      <TableCell
                                        key={col.accessorKey}
                                        className="border-none  px-5 py-5 "
                                      >
                                        {
                                          detail[
                                            col.accessorKey as keyof typeof detail
                                          ]
                                        }
                                      </TableCell>
                                    ))}
                                  </TableRow>
                                ))}
                          </TableBody>
                        </Table>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="text-center py-4 font-semibold"
              >
                Data not available yet
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between space-x-2 py-4">
        <div>
          <label htmlFor="pageSize" className="mr-2 font-medium">
            Show entries:
          </label>
          <select
            id="pageSize"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              table.setPageSize(Number(e.target.value));
            }}
            className="p-2 border rounded font-medium"
          >
            {[5, 10, 20, 30, 40, 50].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center">
          <Button
            variant="outline"
            onClick={() => {
              table.previousPage();
              setPageIndex(table.getState().pagination.pageIndex - 1);
            }}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <span className="mx-2">
            Page{" "}
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </strong>
          </span>
          <Button
            variant="outline"
            onClick={() => {
              table.nextPage();
              setPageIndex(table.getState().pagination.pageIndex + 1);
            }}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ExpandableTable;
