type Detail = {
  hari: string;
  pukul: string;
  biayaperjam: string;
};

type Data = {
  filter(arg0: (row: { kelas: string; jenjang: string }) => boolean): any;
  kelas: string;
  jenjang: string;
  pendapatan: string;
  details: Detail[];
};
