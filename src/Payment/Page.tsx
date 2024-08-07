import { Payment, columns } from "./Columns";
import { DataTable } from "./Data-table";

function getUsers(): Payment[] {
  const subject: Payment[] = [
    {
      id: "1",
      kelas: "Cole - Reichel",
      jenjang: "possible",
      pendapatan: 432.88,
    },
    {
      kelas: "Pacocha, McCullough and Effertz",
      jenjang: "rare",
      pendapatan: 335.47,
      id: "2",
    },
    {
      kelas: "Kutch, Hyatt and Stamm",
      jenjang: "pastel",
      pendapatan: 293.54,
      id: "3",
    },
    {
      kelas: "Langworth LLC",
      jenjang: "gray",
      pendapatan: 970.76,
      id: "4",
    },
    {
      kelas: "Powlowski Inc",
      jenjang: "relieved",
      pendapatan: 956.15,
      id: "5",
    },
    {
      kelas: "Bartell and Sons",
      jenjang: "pleasant",
      pendapatan: 965.67,
      id: "6",
    },
    {
      kelas: "Williamson Group",
      jenjang: "perfumed",
      pendapatan: 543.9,
      id: "7",
    },
  ];
  return subject;
}

export default function page() {
  const data = getUsers();

  return (
    <section className="py-24">
      <div className="container">
        <h1 className=" mb-6 text-3xl font-bold"> All users </h1>
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
}
