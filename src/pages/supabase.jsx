import supabase from "@lib/supabaseClient";
import React from "react";

export default function Index() {
  const [data, setData] = React.useState(null);

  return (
    <div className="text-xl mx-auto max-w-7xl p-4 flex flex-col gap-2">
      <button
        className="px-3 py-1 rounded bg-neutral-200 hover:bg-neutral-300"
        onClick={async () => {
          const { data, error } = await supabase.from("admin").select("*");
          setData(data);
        }}
      >
        get admin
      </button>
      <button
        className="px-3 py-1 rounded bg-neutral-200 hover:bg-neutral-300"
        onClick={async () => {
          const { data, error } = await supabase.from("kelas").select("*");
          setData(data);
        }}
      >
        get kelas
      </button>
      <button
        className="px-3 py-1 rounded bg-neutral-200 hover:bg-neutral-300"
        onClick={async () => {
          const { data, error } = await supabase.from("santri").select("*");
          setData(data);
        }}
      >
        get santri
      </button>
      <button
        className="px-3 py-1 rounded bg-neutral-200 hover:bg-neutral-300"
        onClick={async () => {
          const { data, error } = await supabase.from("admin").insert({
            email: "admin@gmail.com",
            hash: "hhhh",
            salt: "ssss",
            created_at: "2023-07-05T07:53:32.599948+00:00",
            updated_at: "2023-07-05T07:53:32.599948+00:00",
          });
        }}
      >
        add admin
      </button>
      <button
        className="px-3 py-1 rounded bg-neutral-200 hover:bg-neutral-300"
        onClick={async () => {
          const { data, error } = await supabase.from("kelas").insert({
            value: "TSANAWIYAH 1",
            label: "TSANAWIYAH 1",
            code: "MTS 1",
            created_at: "2023-07-05T07:54:18.734125+00:00",
            updated_at: "2023-07-05T07:54:18.734125+00:00",
          });
        }}
      >
        add kelas
      </button>
      <button
        className="px-3 py-1 rounded bg-neutral-200 hover:bg-neutral-300"
        onClick={async () => {
          const { data, error } = await supabase.from("santri").insert({
            id_card: 12345,
            nama: "Agus",
            nim: 32032,
            orang_tua: "Abu Agus",
            hash: "hhhh",
            salt: "sssss",
            created_at: "2023-07-05T07:55:08.790364+00:00",
            updated_at: "2023-07-05T07:55:08.790364+00:00",
            id_kelas: 1,
          });
        }}
      >
        add santri
      </button>
      <button
        className="px-3 py-1 rounded bg-neutral-200 hover:bg-neutral-300"
        onClick={async () => {
          const { data, error } = await supabase
            .from("admin")
            .update({ email: "JAHID@gmail.com" })
            .eq("id", 1);
        }}
      >
        update admin
      </button>
      <button
        className="px-3 py-1 rounded bg-neutral-200 hover:bg-neutral-300"
        onClick={async () => {
          const { data, error } = await supabase
            .from("kelas")
            .update({ value: "KELAS JAHID" })
            .eq("id", 1);
        }}
      >
        update kelas
      </button>
      <button
        className="px-3 py-1 rounded bg-neutral-200 hover:bg-neutral-300"
        onClick={async () => {
          const { data, error } = await supabase
            .from("kelas")
            .update({ nama: "JAHID" })
            .eq("id", 1);
        }}
      >
        update santri
      </button>
      <button
        className="px-3 py-1 rounded bg-neutral-200 hover:bg-neutral-300"
        onClick={async () => {
          const { data, error } = await supabase
            .from("admin")
            .delete()
            .match({ id: 1 });
        }}
      >
        delete admin
      </button>
      <button
        className="px-3 py-1 rounded bg-neutral-200 hover:bg-neutral-300"
        onClick={async () => {
          const { data, error } = await supabase
            .from("kelas")
            .delete()
            .match({ id: 1 });
        }}
      >
        delete kelas
      </button>
      <button
        className="px-3 py-1 rounded bg-neutral-200 hover:bg-neutral-300"
        onClick={async () => {
          const { data, error } = await supabase
            .from("santri")
            .delete()
            .match({ id: 1 });
        }}
      >
        delete santri
      </button>
      <pre className="bg-black text-white p-2">
        {JSON.stringify(data || "No data", null, 2)}
      </pre>
    </div>
  );
}
