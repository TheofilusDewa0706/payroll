export function perhitungan(data: Data[]): string {
  const total = data.reduce((total, current) => {
    const earnings = parseFloat(
      current.pendapatan.replace("Rp", "").replace(/\./g, "")
    );
    return total + earnings;
  }, 0);

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(total);
}
