import { API_URL } from "../FetchAPI";

export const getProyectos = async () => {
  try {
    const res = await API_URL.get("/proyecto/");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProyecto = async (id: number) => {
  try {
    const res = await API_URL.get("/proyecto/" + id);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const getArchivosProyect = async () => {
  try {
    const res = await API_URL.get("/archivo/");
    return res.data;
  } catch (error) {
    return error;
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const EditProyect = async (id: number, data: any) => {
  const res = await fetch(
    `https://apiconstrured.onrender.com/proyecto/${id}/`,
    {
      method: "PUT",
      body: data,
    }
  );
  return res.json();
};
